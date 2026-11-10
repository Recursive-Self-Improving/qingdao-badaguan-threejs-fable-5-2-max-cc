// Tiny mesh-building toolkit used by the procedural generators (roads, walls, villas, props).
// A GeoBuilder accumulates triangles with normals, UVs in metres, and vertex colours.

import * as THREE from 'three';

const _v = new THREE.Vector3();
const _n = new THREE.Vector3();
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();

export class GeoBuilder {
  constructor() {
    this.pos = [];
    this.nrm = [];
    this.uv = [];
    this.col = [];
    this.idx = [];
    this.extra = null; // optional vec4 per vertex
    this.n = 0;
    this.matrix = null;
    this.normalMatrix = new THREE.Matrix3();
    this.color = [1, 1, 1];
    this.uvScale = 1;
    this.ext = [0, 0, 0, 0];
  }

  useExtra() {
    if (!this.extra) this.extra = new Array((this.pos.length / 3) * 4).fill(0);
    return this;
  }
  setExtra(a, b, c, d) {
    this.ext[0] = a;
    this.ext[1] = b;
    this.ext[2] = c;
    this.ext[3] = d;
  }
  setMatrix(m) {
    this.matrix = m;
    if (m) this.normalMatrix.getNormalMatrix(m);
  }
  setColor(r, g, b) {
    this.color[0] = r;
    this.color[1] = g;
    this.color[2] = b;
  }

  vert(x, y, z, nx, ny, nz, u, v, shade = 1) {
    if (this.matrix) {
      _v.set(x, y, z).applyMatrix4(this.matrix);
      _n.set(nx, ny, nz).applyMatrix3(this.normalMatrix).normalize();
      this.pos.push(_v.x, _v.y, _v.z);
      this.nrm.push(_n.x, _n.y, _n.z);
    } else {
      this.pos.push(x, y, z);
      this.nrm.push(nx, ny, nz);
    }
    this.uv.push(u * this.uvScale, v * this.uvScale);
    this.col.push(this.color[0] * shade, this.color[1] * shade, this.color[2] * shade);
    if (this.extra) this.extra.push(this.ext[0], this.ext[1], this.ext[2], this.ext[3]);
    return this.n++;
  }

  tri(a, b, c) {
    this.idx.push(a, b, c);
  }

  // Quad from four corner points (arrays), counter-clockwise seen from outside.
  // UVs: u runs along a→b, v along a→d, in metres (× uvScale); pass uvs to override.
  quad(a, b, c, d, uvs = null, shades = null) {
    _a.set(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    _b.set(d[0] - a[0], d[1] - a[1], d[2] - a[2]);
    const lu = _a.length(),
      lv = _b.length();
    _n.crossVectors(_a, _b).normalize();
    const nx = _n.x,
      ny = _n.y,
      nz = _n.z;
    const u0 = uvs ? uvs[0] : 0,
      v0 = uvs ? uvs[1] : 0,
      u1 = uvs ? uvs[2] : lu,
      v1 = uvs ? uvs[3] : lv;
    const s = shades || [1, 1, 1, 1];
    const i0 = this.vert(a[0], a[1], a[2], nx, ny, nz, u0, v0, s[0]);
    const i1 = this.vert(b[0], b[1], b[2], nx, ny, nz, u1, v0, s[1]);
    const i2 = this.vert(c[0], c[1], c[2], nx, ny, nz, u1, v1, s[2]);
    const i3 = this.vert(d[0], d[1], d[2], nx, ny, nz, u0, v1, s[3]);
    this.idx.push(i0, i1, i2, i0, i2, i3);
  }

  // Triangle with planar UVs (u along a→b)
  tri3(a, b, c, uvs = null) {
    _a.set(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    _b.set(c[0] - a[0], c[1] - a[1], c[2] - a[2]);
    _n.crossVectors(_a, _b).normalize();
    const lu = _a.length();
    const ax = _a.x / lu,
      ay = _a.y / lu,
      az = _a.z / lu;
    const cu = _b.x * ax + _b.y * ay + _b.z * az;
    const cv = Math.sqrt(Math.max(_b.lengthSq() - cu * cu, 0));
    const u = uvs || [0, 0, lu, 0, cu, cv];
    const nx = _n.x,
      ny = _n.y,
      nz = _n.z;
    const i0 = this.vert(a[0], a[1], a[2], nx, ny, nz, u[0], u[1]);
    const i1 = this.vert(b[0], b[1], b[2], nx, ny, nz, u[2], u[3]);
    const i2 = this.vert(c[0], c[1], c[2], nx, ny, nz, u[4], u[5]);
    this.idx.push(i0, i1, i2);
  }

  // Planar polygon (convex, CCW seen from the normal side) with UVs projected on (uAxis, vAxis)
  poly(points, uAxis, vAxis, origin = points[0]) {
    _a.set(points[1][0] - points[0][0], points[1][1] - points[0][1], points[1][2] - points[0][2]);
    _b.set(points[2][0] - points[0][0], points[2][1] - points[0][1], points[2][2] - points[0][2]);
    _n.crossVectors(_a, _b).normalize();
    const nx = _n.x,
      ny = _n.y,
      nz = _n.z;
    const base = this.n;
    for (const p of points) {
      const dx = p[0] - origin[0],
        dy = p[1] - origin[1],
        dz = p[2] - origin[2];
      this.vert(p[0], p[1], p[2], nx, ny, nz, dx * uAxis[0] + dy * uAxis[1] + dz * uAxis[2], dx * vAxis[0] + dy * vAxis[1] + dz * vAxis[2]);
    }
    for (let i = 1; i < points.length - 1; i++) this.idx.push(base, base + i, base + i + 1);
  }

  // Axis-aligned box (in the current matrix frame). faces: string of letters to include, from "xXyYzZ"
  // (lower-case = negative side). Bottom shade lets walls darken towards the ground.
  box(cx, cy, cz, sx, sy, sz, faces = 'xXyYzZ', shadeBottom = 1) {
    const x0 = cx - sx / 2,
      x1 = cx + sx / 2,
      y0 = cy - sy / 2,
      y1 = cy + sy / 2,
      z0 = cz - sz / 2,
      z1 = cz + sz / 2;
    const sb = shadeBottom;
    const sh = [sb, sb, 1, 1];
    if (faces.includes('Z')) this.quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], null, sh);
    if (faces.includes('z')) this.quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], null, sh);
    if (faces.includes('X')) this.quad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], null, sh);
    if (faces.includes('x')) this.quad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], null, sh);
    if (faces.includes('Y')) this.quad([x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0]);
    if (faces.includes('y')) this.quad([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], null, [sb, sb, sb, sb]);
  }

  // Vertical cylinder / cone frustum. Smooth normals; u = arclength, v = height.
  cylinder(cx, y0, cz, r0, r1, h, segs = 12, { capTop = false, capBottom = false, a0 = 0, a1 = Math.PI * 2, shadeBottom = 1 } = {}) {
    const base = this.n;
    const slope = (r0 - r1) / h;
    const nl = Math.hypot(1, slope);
    for (let i = 0; i <= segs; i++) {
      const a = a0 + ((a1 - a0) * i) / segs;
      const c = Math.cos(a),
        s = Math.sin(a);
      const u = a * Math.max(r0, r1);
      this.vert(cx + c * r0, y0, cz + s * r0, c / nl, slope / nl, s / nl, u, 0, shadeBottom);
      this.vert(cx + c * r1, y0 + h, cz + s * r1, c / nl, slope / nl, s / nl, u, h, 1);
    }
    for (let i = 0; i < segs; i++) {
      const a = base + i * 2;
      this.idx.push(a, a + 1, a + 3, a, a + 3, a + 2);
    }
    if (capTop && r1 > 0) {
      const c0 = this.vert(cx, y0 + h, cz, 0, 1, 0, 0, 0);
      const b2 = this.n;
      for (let i = 0; i <= segs; i++) {
        const a = a0 + ((a1 - a0) * i) / segs;
        this.vert(cx + Math.cos(a) * r1, y0 + h, cz + Math.sin(a) * r1, 0, 1, 0, Math.cos(a) * r1, Math.sin(a) * r1);
      }
      for (let i = 0; i < segs; i++) this.idx.push(c0, b2 + i + 1, b2 + i);
    }
    if (capBottom && r0 > 0) {
      const c0 = this.vert(cx, y0, cz, 0, -1, 0, 0, 0);
      const b2 = this.n;
      for (let i = 0; i <= segs; i++) {
        const a = a0 + ((a1 - a0) * i) / segs;
        this.vert(cx + Math.cos(a) * r0, y0, cz + Math.sin(a) * r0, 0, -1, 0, Math.cos(a) * r0, Math.sin(a) * r0);
      }
      for (let i = 0; i < segs; i++) this.idx.push(c0, b2 + i, b2 + i + 1);
    }
  }

  // Flat-shaded prism over a polygon footprint [[x,z],…] (CCW seen from above), from y0 to y1
  prism(poly, y0, y1, { capTop = true, capBottom = false, shadeBottom = 1 } = {}) {
    const n = poly.length;
    for (let i = 0; i < n; i++) {
      const a = poly[i],
        b = poly[(i + 1) % n];
      this.quad([b[0], y0, b[1]], [a[0], y0, a[1]], [a[0], y1, a[1]], [b[0], y1, b[1]], null, [shadeBottom, shadeBottom, 1, 1]);
    }
    if (capTop) {
      const pts = poly.map((p) => [p[0], y1, p[1]]).reverse();
      this.poly(pts, [1, 0, 0], [0, 0, 1], [0, y1, 0]);
    }
    if (capBottom) {
      const pts = poly.map((p) => [p[0], y0, p[1]]);
      this.poly(pts, [1, 0, 0], [0, 0, 1], [0, y0, 0]);
    }
  }

  get empty() {
    return this.idx.length === 0;
  }

  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nrm, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    if (this.extra) g.setAttribute('aExtra', new THREE.Float32BufferAttribute(this.extra, 4));
    g.setIndex(this.n > 65535 ? new THREE.Uint32BufferAttribute(this.idx, 1) : new THREE.Uint16BufferAttribute(this.idx, 1));
    g.computeBoundingSphere();
    g.computeBoundingBox();
    return g;
  }
}

// A set of builders keyed by material name and by a coarse world grid cell, so that the
// resulting meshes can be frustum-culled per neighbourhood while staying few in number.
export class ChunkedBuilders {
  constructor(cell = 170) {
    this.cell = cell;
    this.map = new Map();
  }
  get(material, x, z) {
    const k = `${material}|${Math.floor(x / this.cell)}|${Math.floor(z / this.cell)}`;
    let b = this.map.get(k);
    if (!b) {
      b = new GeoBuilder();
      b.materialKey = material;
      this.map.set(k, b);
    }
    return b;
  }
  // materials: { name: THREE.Material }, options per material: { cast, receive }
  buildMeshes(materials, parent, opts = {}) {
    const meshes = [];
    for (const b of this.map.values()) {
      if (b.empty) continue;
      const mat = materials[b.materialKey];
      if (!mat) {
        console.warn('missing material', b.materialKey);
        continue;
      }
      const mesh = new THREE.Mesh(b.build(), mat);
      const o = opts[b.materialKey] || {};
      mesh.castShadow = o.cast !== false;
      mesh.receiveShadow = o.receive !== false;
      mesh.matrixAutoUpdate = false;
      parent.add(mesh);
      meshes.push(mesh);
    }
    return meshes;
  }
}
