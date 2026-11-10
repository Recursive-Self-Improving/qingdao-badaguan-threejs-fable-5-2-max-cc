// A slow guided flight: in from the sea, along the beach to Huashi Lou, round Taiping Cape,
// down the cedar avenue, under the ginkgos of Juyongguan Rd, past the maples of Jiayuguan Rd
// and up over the red roofs. It also plays behind the title screen.

import * as THREE from 'three';
import { ROAD_BY_ID, heightAt } from '../world/layout.js';

// point on a road nearest to the given x (east–west roads) or z (north–south roads)
function onRoad(id, v) {
  const r = ROAD_BY_ID[id];
  let best = r.pts[0],
    bd = 1e9;
  for (const p of r.pts) {
    const d = Math.abs((r.kind === 'NS' ? p.z : p.x) - v);
    if (d < bd) {
      bd = d;
      best = p;
    }
  }
  return best;
}

export class Tour {
  constructor(camera) {
    this.camera = camera;
    this.active = false;
    this.u = 0;
    this.speed = 7.5;
    const J = (x) => onRoad('juyong', x),
      Y = (x) => onRoad('jiayu', x),
      Zj = (z) => onRoad('zijing', z),
      S = (z) => onRoad('shaoguan', z);
    // [x, height above ground, z] for the eye and for what it looks at
    const K = [
      [[-250, 34, 430], [-40, 4, 190]],
      [[-120, 14, 300], [70, 5, 215]],
      [[-20, 5, 236], [150, 6, 255]],
      [[105, 7, 270], [203, 8, 257]],
      [[200, 14, 322], [203, 7, 257]],
      [[282, 10, 276], [384, 3, 302]],
      [[376, 9, 322], [300, 5, 150]],
      [[330, 30, 215], [216, 8, 110]],
      [[Zj(150).x + 3, 9, 150], [Zj(60).x, 5, 60]],
      [[Zj(98).x, 3.4, 98], [J(150).x, 3, J(150).z]],
      [[170, 2.8, J(170).z], [60, 3, J(60).z]],
      [[70, 2.7, J(70).z], [-40, 3.5, J(-40).z]],
      [[14, 2.9, J(14).z], [-80, 4.5, J(-80).z]],
      [[-30, 2.8, J(-30).z], [-120, 6, 20]],
      [[-90, 22, 10], [-170, 6, -100]],
      [[-190, 27, -110], [S(-200).x, 4, -200]],
      [[S(-208).x + 1.5, 12, -208], [-170, 3, Y(-170).z]],
      [[-196, 4.4, Y(-196).z], [-100, 3.5, Y(-100).z]],
      [[-90, 3, Y(-90).z], [30, 3.5, Y(30).z]],
      [[-36, 3, Y(-36).z], [70, 4, Y(70).z]],
      [[10, 3, Y(10).z], [120, 5, Y(120).z]],
      [[110, 30, -230], [40, 5, -60]],
      [[60, 100, -120], [-20, 0, 200]],
      [[-120, 88, 190], [-60, 0, 330]],
    ];
    const abs = ([x, h, z]) => new THREE.Vector3(x, Math.max(heightAt(x, z), 0) + h, z);
    this.posCurve = new THREE.CatmullRomCurve3(
      K.map((k) => abs(k[0])),
      true,
      'centripetal'
    );
    this.lookCurve = new THREE.CatmullRomCurve3(
      K.map((k) => abs(k[1])),
      true,
      'centripetal'
    );
    this.length = this.posCurve.getLength();
    this._p = new THREE.Vector3();
    this._l = new THREE.Vector3();
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._first = true;
  }

  start(u = null) {
    this.active = true;
    if (u !== null) this.u = u;
    this._first = true;
  }
  stop() {
    this.active = false;
  }

  update(dt) {
    if (!this.active) return;
    this.u = (this.u + (this.speed * dt) / this.length) % 1;
    const t = this.posCurve.getUtoTmapping(this.u);
    this.posCurve.getPoint(t, this._p);
    this.lookCurve.getPoint(t, this._l);
    const cam = this.camera;
    cam.position.copy(this._p);
    this._m.lookAt(this._p, this._l, cam.up);
    this._q.setFromRotationMatrix(this._m);
    if (this._first) {
      cam.quaternion.copy(this._q);
      this._first = false;
    } else cam.quaternion.slerp(this._q, 1 - Math.exp(-dt * 2.2));
  }

  // heading (deg, clockwise from north) and pitch (deg) of the camera, to hand over to the player
  pose() {
    const d = this.camera.getWorldDirection(this._l);
    return { heading: (Math.atan2(d.x, -d.z) * 180) / Math.PI, pitch: (Math.asin(Math.max(-1, Math.min(1, d.y))) * 180) / Math.PI };
  }
}
