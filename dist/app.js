(()=>{var yf=0,ph=1,Mf=2;var Ls=1,Sf=2,_r=3,cs=0,hn=1,Ne=2,Ds=0,yr=1,hs=2,mh=3,gh=4,bf=5;var Ns=100,wf=101,Ef=102,Tf=103,Af=104,Rf=200,Cf=201,Pf=202,If=203,xh=204,vh=205,Lf=206,Df=207,Nf=208,Uf=209,Ff=210,Of=211,zf=212,Bf=213,kf=214,Ma=0,Sa=1,ba=2,cr=3,wa=4,Ea=5,Ta=6,Aa=7,Ka=0,Hf=1,Gf=2,ei=0,_h=1,yh=2,Mh=3,Sh=4,bh=5,wh=6,Eh=7;var Th=300,Us=301,Mr=302,ja=303,Qa=304,ns=1e3,In=1001,Ra=1002,Je=1003,Vf=1004;var xo=1005;var Ee=1006,tl=1007;var Xn=1008;var yn=1009,Ah=1010,Rh=1011,Sr=1012,el=1013,ni=1014,Dn=1015,An=1016,nl=1017,il=1018,Fs=1020,Ch=35902,Ph=35899,Ih=1021,Lh=1022,Ve=1023,ki=1026,Vi=1027,br=1028,vo=1029,us=1030,sl=1031;var rl=1033,_o=33776,yo=33777,Mo=33778,So=33779,ol=35840,al=35841,ll=35842,cl=35843,hl=36196,ul=37492,fl=37496,dl=37488,pl=37489,bo=37490,ml=37491,gl=37808,xl=37809,vl=37810,_l=37811,yl=37812,Ml=37813,Sl=37814,bl=37815,wl=37816,El=37817,Tl=37818,Al=37819,Rl=37820,Cl=37821,Pl=36492,Il=36494,Ll=36495,Dl=36283,Nl=36284,wo=36285,Ul=36286;var Yr=2300,Ca=2301,_a=2302,rh=2303,oh=2400,ah=2401,lh=2402;var Wf=3200;var Eo=0,Xf=1,pi="",ln="srgb",Zr="srgb-linear",Jr="linear",xe="srgb";var ya=7680;var qf=519,Yf=512,Zf=513,Jf=514,Dh=515,$f=516,Kf=517,Nh=518,Uh=519,jf=35044;var Fh="300 es",$n=2e3,is=2001;function $p(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Kp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function $r(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qf(){let s=$r("canvas");return s.style.display="block",s}var Gu={},hr=null;function Oh(...s){let t="THREE."+s.shift();hr?hr("log",t,...s):console.log(t,...s)}function td(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function kt(...s){s=td(s);let t="THREE."+s.shift();if(hr)hr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Wt(...s){s=td(s);let t="THREE."+s.shift();if(hr)hr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function qr(...s){let t=s.join(" ");t in Gu||(Gu[t]=!0,kt(...s))}function ed(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var nd={[Ma]:Ma,[ba]:Ta,[wa]:wa,[cr]:Ea,[Sa]:Sa,[Ta]:ba,[Aa]:Aa,[Ea]:cr},bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ic=Math.PI/180,Pa=180/Math.PI;function To(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function te(s,t,e){return Math.max(t,Math.min(e,s))}function jp(s,t){return(s%t+t)%t}function Lc(s,t,e){return(1-e)*s+e*t}function id(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zh(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Qp(s,t){if(t.constructor===Float32Array)return s;let e=zh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function t0(s,t){if(t.constructor===Float32Array)return s;let e=zh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Wh=class Wh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wh.prototype.isVector2=!0;var Gt=Wh,je=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[o+0],d=r[o+1],p=r[o+2],v=r[o+3];if(f!==v||l!==u||c!==d||h!==p){let m=l*u+c*d+h*p+f*v;m<0&&(u=-u,d=-d,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),E=Math.sin(y);g=Math.sin(g*y)/E,a=Math.sin(a*y)/E,l=l*g+u*a,c=c*g+d*a,h=h*g+p*a,f=f*g+v*a}else{l=l*g+u*a,c=c*g+d*a,h=h*g+p*a,f=f*g+v*a;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],u=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*f+l*d-c*u,t[e+1]=l*p+h*u+c*f-a*d,t[e+2]=c*p+h*d+a*u-l*f,t[e+3]=h*p-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),u=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Xh=class Xh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dc.copy(this).projectOnVector(t),this.sub(Dc)}reflect(t){return this.sub(Dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xh.prototype.isVector3=!0;var H=Xh,Dc=new H,Vu=new je,qh=class qh{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],v=i[0],m=i[3],g=i[6],y=i[1],E=i[4],M=i[7],b=i[2],S=i[5],x=i[8];return r[0]=o*v+a*y+l*b,r[3]=o*m+a*E+l*S,r[6]=o*g+a*M+l*x,r[1]=c*v+h*y+f*b,r[4]=c*m+h*E+f*S,r[7]=c*g+h*M+f*x,r[2]=u*v+d*y+p*b,r[5]=u*m+d*E+p*S,r[8]=u*g+d*M+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,p=e*f+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=f*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nc.makeScale(t,e)),this}rotate(t){return qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nc.makeRotation(-t)),this}translate(t,e){return qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};qh.prototype.isMatrix3=!0;var Vt=qh,Nc=new Vt,Wu=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xu=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e0(){let s={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pi?Jr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Zr]:{primaries:t,whitePoint:n,transfer:Jr,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),s}var re=e0();function Bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function lr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Zs,Ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zs===void 0&&(Zs=$r("canvas")),Zs.width=t.width,Zs.height=t.height;let i=Zs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Zs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$r("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},n0=0,ur=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=To(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Uc(i[o].image)):r.push(Uc(i[o]))}else r=Uc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Uc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ia.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var i0=0,Fc=new H,En=class s extends bi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=In,i=In,r=Ee,o=Xn,a=Ve,l=yn,c=s.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=To(),this.name="",this.source=new ur(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Th;En.DEFAULT_ANISOTROPY=1;var Yh=class Yh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,M=(d+1)/2,b=(g+1)/2,S=(h+u)/4,x=(f+v)/4,_=(p+m)/4;return E>M&&E>b?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=S/n,r=x/n):M>b?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=S/i,r=_/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=x/r,i=_/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(f-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yh.prototype.isVector4=!0;var ee=Yh,La=class extends bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ee,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new En({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ee,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ur(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends La{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Kr=class extends En{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends En{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var $a=class $a{constructor(t,e,n,i,r,o,a,l,c,h,f,u,d,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,f,u,d,p,v,m)}set(t,e,n,i,r,o,a,l,c,h,f,u,d,p,v,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $a().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Js.setFromMatrixColumn(t,0).length(),r=1/Js.setFromMatrixColumn(t,1).length(),o=1/Js.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,p=a*h,v=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,p=c*h,v=c*f;e[0]=u+v*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,p=c*h,v=c*f;e[0]=u-v*a,e[4]=-o*f,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,p=a*h,v=a*f;e[0]=l*h,e[4]=p*c-d,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-u*f,e[8]=p*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+p,e[10]=u-v*f}else if(t.order==="XZY"){let u=o*l,d=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=o*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=a*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(s0,t,r0)}lookAt(t,e,n){let i=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),$i.crossVectors(n,kn),$i.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),$i.crossVectors(n,kn)),$i.normalize(),Zo.crossVectors(kn,$i),i[0]=$i.x,i[4]=Zo.x,i[8]=kn.x,i[1]=$i.y,i[5]=Zo.y,i[9]=kn.y,i[2]=$i.z,i[6]=Zo.z,i[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],v=n[6],m=n[10],g=n[14],y=n[3],E=n[7],M=n[11],b=n[15],S=i[0],x=i[4],_=i[8],T=i[12],w=i[1],A=i[5],C=i[9],L=i[13],I=i[2],U=i[6],O=i[10],z=i[14],X=i[3],D=i[7],F=i[11],k=i[15];return r[0]=o*S+a*w+l*I+c*X,r[4]=o*x+a*A+l*U+c*D,r[8]=o*_+a*C+l*O+c*F,r[12]=o*T+a*L+l*z+c*k,r[1]=h*S+f*w+u*I+d*X,r[5]=h*x+f*A+u*U+d*D,r[9]=h*_+f*C+u*O+d*F,r[13]=h*T+f*L+u*z+d*k,r[2]=p*S+v*w+m*I+g*X,r[6]=p*x+v*A+m*U+g*D,r[10]=p*_+v*C+m*O+g*F,r[14]=p*T+v*L+m*z+g*k,r[3]=y*S+E*w+M*I+b*X,r[7]=y*x+E*A+M*U+b*D,r[11]=y*_+E*C+M*O+b*F,r[15]=y*T+E*L+M*z+b*k,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],v=t[7],m=t[11],g=t[15],y=l*d-c*u,E=a*d-c*f,M=a*u-l*f,b=o*d-c*h,S=o*u-l*h,x=o*f-a*h;return e*(v*y-m*E+g*M)-n*(p*y-m*b+g*S)+i*(p*E-v*b+g*x)-r*(p*M-v*S+m*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],v=t[13],m=t[14],g=t[15],y=e*a-n*o,E=e*l-i*o,M=e*c-r*o,b=n*l-i*a,S=n*c-r*a,x=i*c-r*l,_=h*v-f*p,T=h*m-u*p,w=h*g-d*p,A=f*m-u*v,C=f*g-d*v,L=u*g-d*m,I=y*L-E*C+M*A+b*w-S*T+x*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return t[0]=(a*L-l*C+c*A)*U,t[1]=(i*C-n*L-r*A)*U,t[2]=(v*x-m*S+g*b)*U,t[3]=(u*S-f*x-d*b)*U,t[4]=(l*w-o*L-c*T)*U,t[5]=(e*L-i*w+r*T)*U,t[6]=(m*M-p*x-g*E)*U,t[7]=(h*x-u*M+d*E)*U,t[8]=(o*C-a*w+c*_)*U,t[9]=(n*w-e*C-r*_)*U,t[10]=(p*S-v*M+g*y)*U,t[11]=(f*M-h*S-d*y)*U,t[12]=(a*T-o*A-l*_)*U,t[13]=(e*A-n*T+i*_)*U,t[14]=(v*E-p*b-m*y)*U,t[15]=(h*b-f*E+u*y)*U,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,p=r*f,v=o*h,m=o*f,g=a*f,y=l*c,E=l*h,M=l*f,b=n.x,S=n.y,x=n.z;return i[0]=(1-(v+g))*b,i[1]=(d+M)*b,i[2]=(p-E)*b,i[3]=0,i[4]=(d-M)*S,i[5]=(1-(u+g))*S,i[6]=(m+y)*S,i[7]=0,i[8]=(p+E)*x,i[9]=(m-y)*x,i[10]=(1-(u+v))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Js.set(i[0],i[1],i[2]).length(),a=Js.set(i[4],i[5],i[6]).length(),l=Js.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ci.copy(this);let c=1/o,h=1/a,f=1/l;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=f,ci.elements[9]*=f,ci.elements[10]*=f,e.setFromRotationMatrix(ci),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=$n,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===$n)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===is)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=$n,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===$n)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===is)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};$a.prototype.isMatrix4=!0;var Ft=$a,Js=new H,ci=new Ft,s0=new H(0,0,0),r0=new H(1,1,1),$i=new H,Zo=new H,kn=new H,qu=new Ft,Yu=new je,Kn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},o0=0,Zu=new H,$s=new je,Di=new Ft,Jo=new H,kr=new H,a0=new H,l0=new je,Ju=new H(1,0,0),$u=new H(0,1,0),Ku=new H(0,0,1),ju={type:"added"},c0={type:"removed"},Ks={type:"childadded",child:null},Oc={type:"childremoved",child:null},cn=class s extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=To(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new H,e=new Kn,n=new je,i=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Vt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.multiply($s),this}rotateOnWorldAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.premultiply($s),this}rotateX(t){return this.rotateOnAxis(Ju,t)}rotateY(t){return this.rotateOnAxis($u,t)}rotateZ(t){return this.rotateOnAxis(Ku,t)}translateOnAxis(t,e){return Zu.copy(t).applyQuaternion(this.quaternion),this.position.add(Zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ju,t)}translateY(t){return this.translateOnAxis($u,t)}translateZ(t){return this.translateOnAxis(Ku,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jo.copy(t):Jo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(kr,Jo,this.up):Di.lookAt(Jo,kr,this.up),this.quaternion.setFromRotationMatrix(Di),i&&(Di.extractRotation(i.matrixWorld),$s.setFromRotationMatrix(Di),this.quaternion.premultiply($s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ju),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(c0),Oc.child=t,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ju),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,t,a0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,l0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};cn.DEFAULT_UP=new H(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},h0={type:"move"},fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},$o={h:0,s:0,l:0};function zc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=re.workingColorSpace){if(t=jp(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=zc(o,r,t+1/3),this.g=zc(o,r,t),this.b=zc(o,r,t-1/3)}return re.colorSpaceToWorking(this,i),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=sd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return re.workingToColorSpace(gn.copy(this),t),Math.round(te(gn.r*255,0,255))*65536+Math.round(te(gn.g*255,0,255))*256+Math.round(te(gn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(gn.copy(this),e);let n=gn.r,i=gn.g,r=gn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=ln){re.workingToColorSpace(gn.copy(this),t);let e=gn.r,n=gn.g,i=gn.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL($o);let n=Lc(Ki.h,$o.h,e),i=Lc(Ki.s,$o.s,e),r=Lc(Ki.l,$o.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Rt;Rt.NAMES=sd;var Qr=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var to=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},hi=new H,Ni=new H,Bc=new H,Ui=new H,js=new H,Qs=new H,Qu=new H,kc=new H,Hc=new H,Gc=new H,Vc=new ee,Wc=new ee,Xc=new ee,es=class s{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hi.subVectors(t,e),i.cross(hi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){hi.subVectors(i,e),Ni.subVectors(n,e),Bc.subVectors(t,e);let o=hi.dot(hi),a=hi.dot(Ni),l=hi.dot(Bc),c=Ni.dot(Ni),h=Ni.dot(Bc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Vc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Vc.fromBufferAttribute(t,e),Wc.fromBufferAttribute(t,n),Xc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Vc,r.x),o.addScaledVector(Wc,r.y),o.addScaledVector(Xc,r.z),o}static isFrontFacing(t,e,n,i){return hi.subVectors(n,e),Ni.subVectors(t,e),hi.cross(Ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),hi.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;js.subVectors(i,n),Qs.subVectors(r,n),kc.subVectors(t,n);let l=js.dot(kc),c=Qs.dot(kc);if(l<=0&&c<=0)return e.copy(n);Hc.subVectors(t,i);let h=js.dot(Hc),f=Qs.dot(Hc);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(js,o);Gc.subVectors(t,r);let d=js.dot(Gc),p=Qs.dot(Gc);if(p>=0&&d<=p)return e.copy(r);let v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Qs,a);let m=h*p-d*f;if(m<=0&&f-h>=0&&d-p>=0)return Qu.subVectors(r,i),a=(f-h)/(f-h+(d-p)),e.copy(i).addScaledVector(Qu,a);let g=1/(m+v+u);return o=v*g,a=u*g,e.copy(n).addScaledVector(js,o).addScaledVector(Qs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ln=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ko.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(t.matrixWorld),this.union(Ko)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),jo.subVectors(this.max,Hr),tr.subVectors(t.a,Hr),er.subVectors(t.b,Hr),nr.subVectors(t.c,Hr),ji.subVectors(er,tr),Qi.subVectors(nr,er),ws.subVectors(tr,nr);let e=[0,-ji.z,ji.y,0,-Qi.z,Qi.y,0,-ws.z,ws.y,ji.z,0,-ji.x,Qi.z,0,-Qi.x,ws.z,0,-ws.x,-ji.y,ji.x,0,-Qi.y,Qi.x,0,-ws.y,ws.x,0];return!qc(e,tr,er,nr,jo)||(e=[1,0,0,0,1,0,0,0,1],!qc(e,tr,er,nr,jo))?!1:(Qo.crossVectors(ji,Qi),e=[Qo.x,Qo.y,Qo.z],qc(e,tr,er,nr,jo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Fi=[new H,new H,new H,new H,new H,new H,new H,new H],ui=new H,Ko=new Ln,tr=new H,er=new H,nr=new H,ji=new H,Qi=new H,ws=new H,Hr=new H,jo=new H,Qo=new H,Es=new H;function qc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Es.fromArray(s,r);let a=i.x*Math.abs(Es.x)+i.y*Math.abs(Es.y)+i.z*Math.abs(Es.z),l=t.dot(Es),c=e.dot(Es),h=n.dot(Es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var zi=u0();function u0(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function f0(s){Math.abs(s)>65504&&kt("DataUtils.toHalfFloat(): Value out of range."),s=te(s,-65504,65504),zi.floatView[0]=s;let t=zi.uint32View[0],e=t>>23&511;return zi.baseTable[e]+((t&8388607)>>zi.shiftTable[e])}function d0(s){let t=s>>10;return zi.uint32View[0]=zi.mantissaTable[zi.offsetTable[t]+(s&1023)]+zi.exponentTable[t],zi.floatView[0]}var eo=class{static toHalfFloat(t){return f0(t)}static fromHalfFloat(t){return d0(t)}},Ye=new H,ta=new Gt,p0=0,Ze=class extends bi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jf,this.updateRanges=[],this.gpuType=Dn,this.version=0,this._normalizationScale=t!==void 0?zh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Qp(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):t0(t,this.array)}};var Cs=class extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ps=class extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},m0=new Ln,Gr=new H,Yc=new H,Gn=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):m0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);let e=Gr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Gr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add(Yc)),this.expandByPoint(Gr.copy(t.center).sub(Yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},g0=0,Jn=new Ft,Zc=new cn,ir=new H,Hn=new Ln,Vr=new Ln,rn=new H,De=class s extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=To(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($p(t)?Ps:Cs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return Zc.lookAt(t),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Hn.min,Vr.min),Hn.expandByPoint(rn),rn.addVectors(Hn.max,Vr.max),Hn.expandByPoint(rn)):(Hn.expandByPoint(Vr.min),Hn.expandByPoint(Vr.max))}Hn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)rn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(rn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)rn.fromBufferAttribute(a,c),l&&(ir.fromBufferAttribute(t,c),rn.add(ir)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let T=0;T<n.count;T++)a[T]=new H,l[T]=new H;let h=new H,f=new H,u=new H,d=new Gt,p=new Gt,v=new Gt,m=new H,g=new H;function y(T,w,A){c[T]=c[w]=c[A]=1,h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,w),u.fromBufferAttribute(n,A),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,A),f.sub(h),u.sub(h),p.sub(d),v.sub(d);let C=1/(p.x*v.y-v.x*p.y);isFinite(C)&&(m.copy(f).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(C),g.copy(u).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(C),a[T].add(m),a[w].add(m),a[A].add(m),l[T].add(g),l[w].add(g),l[A].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let T=0,w=E.length;T<w;++T){let A=E[T],C=A.start,L=A.count;for(let I=C,U=C+L;I<U;I+=3)y(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let M=new H,b=new H,S=new H,x=new H;function _(T){S.fromBufferAttribute(i,T),x.copy(S);let w=a[T];M.copy(w),M.sub(S.multiplyScalar(S.dot(w))).normalize(),b.crossVectors(x,w);let C=b.dot(l[T])<0?-1:1;o.setXYZW(T,M.x,M.y,M.z,C)}for(let T=0,w=n.count;T<w;++T)c[T]&&_(T);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,f=new H;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let g=0;g<h;g++)u[p++]=c[d++]}return new Ze(u,h,f)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Jc=new H,x0=new H,v0=new Vt,fi=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Jc.subVectors(n,e).cross(x0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||v0.getNormalMatrix(t),i=this.coplanarPoint(Jc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},_0=0,jn=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=To(),this.name="",this.type="Material",this.blending=yr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=vh,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new fi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Oi=new H,$c=new H,ea=new H,na=new H,no=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){$c.copy(t).add(e).multiplyScalar(.5),ea.copy(e).sub(t).normalize(),na.copy(this.origin).sub($c);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ea),a=na.dot(this.direction),l=-na.dot(ea),c=na.lengthSq(),h=Math.abs(1-o*o),f,u,d,p;if(h>0)if(f=o*l-a,u=o*a-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let v=1/h;f*=v,u*=v,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy($c).addScaledVector(ea,u),d}intersectSphere(t,e){if(t.radius<0)return null;Oi.subVectors(t.center,this.origin);let n=Oi.dot(this.direction),i=Oi.dot(Oi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,p=e.x-o.x,v=e.y-o.y,m=e.z-o.z,g=n.x-o.x,y=n.y-o.y,E=n.z-o.z,M=Math.abs(l),b=Math.abs(c),S=Math.abs(h),x,_,T,w,A,C,L,I,U,O,z,X;if(M>=b&&M>=S?(T=l,C=f,U=p,X=g,l>=0?(x=c,_=h,w=u,A=d,L=v,I=m,O=y,z=E):(x=h,_=c,w=d,A=u,L=m,I=v,O=E,z=y)):b>=S?(T=c,C=u,U=v,X=y,c>=0?(x=h,_=l,w=d,A=f,L=m,I=p,O=E,z=g):(x=l,_=h,w=f,A=d,L=p,I=m,O=g,z=E)):(T=h,C=d,U=m,X=E,h>=0?(x=l,_=c,w=f,A=u,L=p,I=v,O=g,z=y):(x=c,_=l,w=u,A=f,L=v,I=p,O=y,z=g)),T===0)return null;let D=x/T,F=_/T,k=1/T,$=w-D*C,tt=A-F*C,W=L-D*U,Z=I-F*U,j=O-D*X,lt=z-F*X,et=j*Z-lt*W,ut=$*lt-tt*j,bt=W*tt-Z*$;if(i){if(et<0||ut<0||bt<0)return null}else if((et<0||ut<0||bt<0)&&(et>0||ut>0||bt>0))return null;let Q=et+ut+bt;if(Q===0)return null;let at=k*(et*C+ut*U+bt*X);return(Q>0?at<0:at>0)?null:this.at(at/Q,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dr=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},tf=new Ft,Ts=new no,ia=new Gn,ef=new H,sa=new H,ra=new H,oa=new H,Kc=new H,aa=new H,nf=new H,la=new H,Xt=class extends cn{constructor(t=new De,e=new dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Kc.fromBufferAttribute(f,t),o?aa.addScaledVector(Kc,h):aa.addScaledVector(Kc.sub(e),h))}e.add(aa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(r),Ts.copy(t.ray).recast(t.near),!(ia.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(ia,ef)===null||Ts.origin.distanceToSquared(ef)>(t.far-t.near)**2))&&(tf.copy(r).invert(),Ts.copy(t.ray).applyMatrix4(tf),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,b=E;M<b;M+=3){let S=a.getX(M),x=a.getX(M+1),_=a.getX(M+2);i=ca(this,g,t,n,c,h,f,S,x,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){let y=a.getX(m),E=a.getX(m+1),M=a.getX(m+2);i=ca(this,o,t,n,c,h,f,y,E,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,b=E;M<b;M+=3){let S=M,x=M+1,_=M+2;i=ca(this,g,t,n,c,h,f,S,x,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){let y=m,E=m+1,M=m+2;i=ca(this,o,t,n,c,h,f,y,E,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function y0(s,t,e,n,i,r,o,a){let l;if(t.side===hn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===cs,a),l===null)return null;la.copy(a),la.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(la);return c<e.near||c>e.far?null:{distance:c,point:la.clone(),object:s}}function ca(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,sa),s.getVertexPosition(l,ra),s.getVertexPosition(c,oa);let h=y0(s,t,e,n,sa,ra,oa,nf);if(h){let f=new H;es.getBarycoord(nf,sa,ra,oa,f),i&&(h.uv=es.getInterpolatedAttribute(i,a,l,c,f,new Gt)),r&&(h.uv1=es.getInterpolatedAttribute(r,a,l,c,f,new Gt)),o&&(h.normal=es.getInterpolatedAttribute(o,a,l,c,f,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new H,materialIndex:0};es.getNormal(sa,ra,oa,u.normal),h.face=u,h.barycoord=f}return h}var _n=class extends En{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Je,h=Je,f,u){super(null,o,a,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vn=class extends Ze{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},sr=new Ft,sf=new Ft,ha=[],rf=new Ln,M0=new Ft,Wr=new Xt,Xr=new Gn,Qn=class extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,M0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sr),rf.copy(t.boundingBox).applyMatrix4(sr),this.boundingBox.union(rf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sr),Xr.copy(t.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(n),t.ray.intersectsSphere(Xr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,sr),sf.multiplyMatrices(n,sr),Wr.matrixWorld=sf,Wr.raycast(t,ha);for(let o=0,a=ha.length;o<a;o++){let l=ha[o];l.instanceId=r,l.object=this,e.push(l)}ha.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Vn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _n(new Float32Array(i*this.count),i,this.count,br,Dn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new Gn,S0=new Gt(.5,.5),ua=new H,di=class{constructor(t=new fi,e=new fi,n=new fi,i=new fi,r=new fi,o=new fi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],v=r[9],m=r[10],g=r[11],y=r[12],E=r[13],M=r[14],b=r[15];if(i[0].setComponents(c-o,d-h,g-p,b-y).normalize(),i[1].setComponents(c+o,d+h,g+p,b+y).normalize(),i[2].setComponents(c+a,d+f,g+v,b+E).normalize(),i[3].setComponents(c-a,d-f,g-v,b-E).normalize(),n)i[4].setComponents(l,u,m,M).normalize(),i[5].setComponents(c-l,d-u,g-m,b-M).normalize();else if(i[4].setComponents(c-l,d-u,g-m,b-M).normalize(),e===$n)i[5].setComponents(c+l,d+u,g+m,b+M).normalize();else if(e===is)i[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);let e=S0.distanceTo(t.center);return As.radius=.7071067811865476+e,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ua.x=i.normal.x>0?t.max.x:t.min.x,ua.y=i.normal.y>0?t.max.y:t.min.y,ua.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},of=new Ft,io=class s{constructor(){this.coordinateSystem=$n,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];of.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new di),n[i].setFromProjectionMatrix(of,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new di),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};function jc(s,t){return s-t}function b0(s,t){return s.z-t.z}function w0(s,t){return t.z-s.z}var ch=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},Pn=new Ft,E0=new Rt(1,1,1),T0=new di,A0=new io,fa=new Ln,Rs=new Gn,Qc=new H,af=new H,lf=new H,R0=new H,th=new ch,xn=new Xt,da=[];function C0(s,t,e=0){let n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function Mi(s,t){if(s.constructor!==t.constructor){let e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{let e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}var so=class extends Xt{constructor(t,e,n=e*2,i){super(new De,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(t),this._mergedDrawStarts=new Int32Array(t),this._mergedDrawInstanceCounts=new Int32Array(t),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new _n(e,t,t,Ve,Dn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new _n(e,t,t,vo,ni);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new _n(e,t,t,Ve,Dn);n.colorSpace=re.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in t.attributes){let o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),f=new Ze(h,l,c);e.setAttribute(r,f)}if(t.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new Ze(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,Pn),this.getBoundingBoxAt(r,fa).applyMatrix4(Pn),t.union(fa)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,Pn),this.getBoundingSphereAt(r,Rs).applyMatrix4(Pn),t.union(Rs)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(jc),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Pn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(E0.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let o=t.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(jc),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(i&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(let h in n.attributes){let f=e.getAttribute(h),u=n.getAttribute(h);C0(f,u,l);let d=f.itemSize;for(let p=f.count,v=c;p<v;p++){let m=l+p;for(let g=0;g<d;g++)u.setComponent(m,g,0)}u.needsUpdate=!0,u.addUpdateRange(l*d,c*d)}if(i){let h=a.indexStart,f=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let u=0;u<o.count;u++)r.setX(h+u,l+o.getX(u));for(let u=o.count,d=f;u<d;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let l=i[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){let{indexStart:h,vertexStart:f,reservedIndexCount:u}=c,d=r.index,p=d.array,v=t-f;for(let m=h;m<h+u;m++)p[m]=p[m]+v;d.array.copyWithin(e,h,h+u),d.addUpdateRange(e,u),d.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){let{vertexStart:h,reservedVertexCount:f}=c,u=r.attributes;for(let d in u){let p=u[d],{array:v,itemSize:m}=p;v.copyWithin(t*m,h*m,(h+f)*m),p.addUpdateRange(t*m,f*m),p.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){let r=new Ln,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(Qc.fromBufferAttribute(a,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){let r=new Gn;this.getBoundingBoxAt(t,fa),fa.getCenter(r.center);let o=n.index,a=n.attributes.position,l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let f=c;o&&(f=o.getX(f)),Qc.fromBufferAttribute(a,f),l=Math.max(l,r.center.distanceToSquared(Qc))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(jc);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let i=new Int32Array(t),r=new Int32Array(t);Mi(this._multiDrawCounts,i),Mi(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r;let o=new Int32Array(t),a=new Int32Array(t),l=new Int32Array(t);Mi(this._mergedDrawCounts,o),Mi(this._mergedDrawStarts,a),Mi(this._mergedDrawInstanceCounts,l),this._mergedDrawCounts=o,this._mergedDrawStarts=a,this._mergedDrawInstanceCounts=l,this._maxInstanceCount=t;let c=this._indirectTexture,h=this._matricesTexture,f=this._colorsTexture;c.dispose(),this._initIndirectTexture(),Mi(c.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),Mi(h.image.data,this._matricesTexture.image.data),f&&(f.dispose(),this._initColorsTexture(),Mi(f.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new De,this._initializeGeometry(r));let o=this.geometry;r.index&&Mi(r.index.array,o.index.array);for(let a in r.attributes)Mi(r.attributes[a].array,o.attributes[a].array);this._visibilityChanged=!0}raycast(t,e){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;xn.material=this.material,xn.geometry.index=o.index,xn.geometry.attributes=o.attributes,xn.geometry.boundingBox===null&&(xn.geometry.boundingBox=new Ln),xn.geometry.boundingSphere===null&&(xn.geometry.boundingSphere=new Gn);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let c=n[a].geometryIndex,h=i[c];xn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,xn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,xn.geometry.boundingBox),this.getBoundingSphereAt(c,xn.geometry.boundingSphere),xn.raycast(t,da);for(let f=0,u=da.length;f<u;f++){let d=da[f];d.object=this,d.batchId=a,e.push(d)}da.length=0}xn.material=null,xn.geometry.index=null,xn.geometry.attributes={},xn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._mergedDrawCounts=t._mergedDrawCounts.slice(),this._mergedDrawStarts=t._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=t._mergedDrawInstanceCounts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),t._colorsTexture!==null?(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(t,e,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let r=e.getIndex(),o=r===null?1:r.array.BYTES_PER_ELEMENT,a=1;n.wireframe&&(a=2,o=e.attributes.position.count>65535?4:2);let l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,f=this._mergedDrawStarts,u=this._mergedDrawCounts,d=this._mergedDrawInstanceCounts,p=this._geometryInfo,v=this.perObjectFrustumCulled,m=this._indirectTexture,g=m.image.data,y=t.isArrayCamera?A0:T0;v&&(t.isArrayCamera?y.setFromArrayCamera(t):(Pn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(this.matrixWorld),y.setFromProjectionMatrix(Pn,t.coordinateSystem,t.reversedDepth)));let E=0,M=0;if(this.sortObjects){Pn.copy(this.matrixWorld).invert(),af.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Pn),lf.set(0,0,-1).transformDirection(t.matrixWorld).transformDirection(Pn);for(let x=0,_=l.length;x<_;x++)if(l[x].visible&&l[x].active){let T=l[x].geometryIndex;this.getMatrixAt(x,Pn),this.getBoundingSphereAt(T,Rs).applyMatrix4(Pn);let w=!1;if(v&&(w=!y.intersectsSphere(Rs)),!w){let A=p[T],C=R0.subVectors(Rs.center,af).dot(lf);th.push(A.start,A.count,C,x)}}let b=th.list,S=this.customSort;S===null?b.sort(n.transparent?w0:b0):S.call(this,b,t);for(let x=0,_=b.length;x<_;x++){let T=b[x],w=T.start*o*a,A=T.count*a;i==="merged"?M>0&&f[M-1]===w&&u[M-1]===A?d[M-1]++:(f[M]=w,u[M]=A,d[M]=1,M++):(c[E]=w,h[E]=A),g[E]=T.index,E++}th.reset()}else for(let b=0,S=l.length;b<S;b++)if(l[b].visible&&l[b].active){let x=l[b].geometryIndex,_=!1;if(v&&(this.getMatrixAt(b,Pn),this.getBoundingSphereAt(x,Rs).applyMatrix4(Pn),_=!y.intersectsSphere(Rs)),!_){let T=p[x],w=T.start*o*a,A=T.count*a;i==="merged"?M>0&&f[M-1]===w&&u[M-1]===A?d[M-1]++:(f[M]=w,u[M]=A,d[M]=1,M++):(c[E]=w,h[E]=A),g[E]=b,E++}}m.needsUpdate=!0,this._multiDrawCount=E,this._mergedDrawCount=M,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeRender(t,e,n,i,r){t.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,r)}onBeforeShadow(t,e,n,i,r,o){t.isWebGPURenderer!==!0&&this._updateDrawParameters(i,r,o)}};var Na=class extends jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},cf=new Ft,hh=new no,pa=new Gn,ma=new H,ro=class extends cn{constructor(t=new De,e=new Na){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(i),pa.radius+=r,t.ray.intersectsSphere(pa)===!1)return;cf.copy(i).invert(),hh.copy(t.ray).applyMatrix4(cf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=u,v=d;p<v;p++){let m=c.getX(p);ma.fromBufferAttribute(f,m),hf(ma,m,l,i,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=u,v=d;p<v;p++)ma.fromBufferAttribute(f,p),hf(ma,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hf(s,t,e,n,i,r,o){let a=hh.distanceSqToPoint(s);if(a<e){let l=new H;hh.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var oo=class extends En{constructor(t=[],e=Us,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ao=class extends En{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends En{constructor(t,e,n=ni,i,r,o,a=Je,l=Je,c,h=ki,f=1){if(h!==ki&&h!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ur(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},lo=class extends Hi{constructor(t,e=ni,n=Us,i,r,o=Je,a=Je,l,c=ki){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},co=class extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ss=class s extends De{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(f,2));function p(v,m,g,y,E,M,b,S,x,_,T){let w=M/x,A=b/_,C=M/2,L=b/2,I=S/2,U=x+1,O=_+1,z=0,X=0,D=new H;for(let F=0;F<O;F++){let k=F*A-L;for(let $=0;$<U;$++){let tt=$*w-C;D[v]=tt*y,D[m]=k*E,D[g]=I,c.push(D.x,D.y,D.z),D[v]=0,D[m]=0,D[g]=S>0?1:-1,h.push(D.x,D.y,D.z),f.push($/x),f.push(1-F/_),z+=1}}for(let F=0;F<_;F++)for(let k=0;k<x;k++){let $=u+k+U*F,tt=u+k+U*(F+1),W=u+(k+1)+U*(F+1),Z=u+(k+1)+U*F;l.push($,tt,Z),l.push(tt,W,Z),X+=6}a.addGroup(d,X,T),d+=X,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ho=class s extends De{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,v=[],m=n/2,g=0;y(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(d,2));function y(){let M=new H,b=new H,S=0,x=(e-t)/n;for(let _=0;_<=r;_++){let T=[],w=_/r,A=w*(e-t)+t;for(let C=0;C<=i;C++){let L=C/i,I=L*l+a,U=Math.sin(I),O=Math.cos(I);b.x=A*U,b.y=-w*n+m,b.z=A*O,f.push(b.x,b.y,b.z),M.set(U,x,O).normalize(),u.push(M.x,M.y,M.z),d.push(L,1-w),T.push(p++)}v.push(T)}for(let _=0;_<i;_++)for(let T=0;T<r;T++){let w=v[T][_],A=v[T+1][_],C=v[T+1][_+1],L=v[T][_+1];(t>0||T!==0)&&(h.push(w,A,L),S+=3),(e>0||T!==r-1)&&(h.push(A,C,L),S+=3)}c.addGroup(g,S,0),g+=S}function E(M){let b=p,S=new Gt,x=new H,_=0,T=M===!0?t:e,w=M===!0?1:-1;for(let C=1;C<=i;C++)f.push(0,m*w,0),u.push(0,w,0),d.push(.5,.5),p++;let A=p;for(let C=0;C<=i;C++){let I=C/i*l+a,U=Math.cos(I),O=Math.sin(I);x.x=T*O,x.y=m*w,x.z=T*U,f.push(x.x,x.y,x.z),u.push(0,w,0),S.x=U*.5+.5,S.y=O*.5*w+.5,d.push(S.x,S.y),p++}for(let C=0;C<i;C++){let L=b+C,I=A+C;M===!0?h.push(I,I+1,L):h.push(I+1,I,L),_+=3}c.addGroup(g,_,M===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ua=class s extends De{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let E=new H,M=new H,b=new H;for(let S=0;S<e.length;S+=3)d(e[S+0],E),d(e[S+1],M),d(e[S+2],b),l(E,M,b,y)}function l(y,E,M,b){let S=b+1,x=[];for(let _=0;_<=S;_++){x[_]=[];let T=y.clone().lerp(M,_/S),w=E.clone().lerp(M,_/S),A=S-_;for(let C=0;C<=A;C++)C===0&&_===S?x[_][C]=T:x[_][C]=T.clone().lerp(w,C/A)}for(let _=0;_<S;_++)for(let T=0;T<2*(S-_)-1;T++){let w=Math.floor(T/2);T%2===0?(u(x[_][w+1]),u(x[_+1][w]),u(x[_][w])):(u(x[_][w+1]),u(x[_+1][w+1]),u(x[_+1][w]))}}function c(y){let E=new H;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(y),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function h(){let y=new H;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];let M=m(y)/2/Math.PI+.5,b=g(y)/Math.PI+.5;o.push(M,1-b)}p(),f()}function f(){for(let y=0;y<o.length;y+=6){let E=o[y+0],M=o[y+2],b=o[y+4],S=Math.max(E,M,b),x=Math.min(E,M,b);S>.9&&x<.1&&(E<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,E){let M=y*3;E.x=t[M+0],E.y=t[M+1],E.z=t[M+2]}function p(){let y=new H,E=new H,M=new H,b=new H,S=new Gt,x=new Gt,_=new Gt;for(let T=0,w=0;T<r.length;T+=9,w+=6){y.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),S.set(o[w+0],o[w+1]),x.set(o[w+2],o[w+3]),_.set(o[w+4],o[w+5]),b.copy(y).add(E).add(M).divideScalar(3);let A=m(b);v(S,w+0,y,A),v(x,w+2,E,A),v(_,w+4,M,A)}}function v(y,E,M,b){b<0&&y.x===1&&(o[E]=y.x-1),M.x===0&&M.z===0&&(o[E]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Fa=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,d=(o-h)/u;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Gt:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new H,i=[],r=[],o=[],a=new H,l=new Ft;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(te(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(te(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function Bh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,i(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var uf=new H,ff=new H,eh=new Bh,nh=new Bh,ih=new Bh,pr=class extends Fa{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new H){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ff.subVectors(i[0],i[1]).add(i[0]),c=ff);let f=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(uf.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=uf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),eh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,v,m),nh.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,v,m),ih.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(eh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),nh.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ih.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(eh.calc(l),nh.calc(l),ih.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new H().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var rs=class s extends Ua{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var ti=class s extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let y=g*u-o;for(let E=0;E<c;E++){let M=E*f-r;p.push(M,-y,0),v.push(0,0,1),m.push(E/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let E=y+c*g,M=y+c*(g+1),b=y+1+c*(g+1),S=y+1+c*g;d.push(E,M,S),d.push(M,b,S)}this.setIndex(d),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var uo=class s extends De{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new H,u=new H,d=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){let y=[],E=g/n,M=o+E*a,b=t*Math.cos(M),S=Math.sqrt(t*t-b*b),x=0;g===0&&o===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let _=0;_<=e;_++){let T=_/e,w=i+T*r;f.x=-S*Math.cos(w),f.y=b,f.z=S*Math.sin(w),p.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(T+x,1-E),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let E=h[g][y+1],M=h[g][y],b=h[g+1][y],S=h[g+1][y+1];(g!==0||o>0)&&d.push(E,M,S),(g!==n-1||l<Math.PI)&&d.push(M,b,S)}this.setIndex(d),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Os(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(df(i))i.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(df(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Mn(s){let t={};for(let e=0;e<s.length;e++){let n=Os(s[e]);for(let i in n)t[i]=n[i]}return t}function df(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function P0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function kh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var rd={clone:Os,merge:Mn},I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Te=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=P0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Rt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Gt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new H().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ee().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ft().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Oa=class extends Te{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ve=class extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Nn=class extends jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Ka,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},mr=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},za=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ga(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var os=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ba=class extends os{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oh,endingEnd:oh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ah:r=t,a=2*e-n;break;case lh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ah:o=t,l=2*n-e;break;case lh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),v=p*p,m=v*p,g=-u*m+2*u*v-u*p,y=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*p+1,E=(-1-d)*m+(1.5+d)*v+.5*p,M=d*m-d*v;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+y*o[c+b]+E*o[l+b]+M*o[f+b];return r}},ka=class extends os{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},Ha=class extends os{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ga=class extends os{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-e)/(i-e),v=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*p;return r}let u=a*2,d=t-1;for(let p=0;p!==a;++p){let v=o[c+p],m=o[l+p],g=d*u+p*2,y=f[g],E=f[g+1],M=t*u+p*2,b=h[M],S=h[M+1],x=N0(n,e,y,b,i);r[p]=od(x,v,E,S,m)}return r}};function od(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function D0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function N0(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=od(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=D0(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Wn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rr(e,this.TimeBufferType),this.values=rr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:rr(t.times,Array),values:rr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),ga(t.settings)&&(n.settings={inTangents:rr(t.settings.inTangents,Array),outTangents:rr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ga(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Yr:e=this.InterpolantFactoryMethodDiscrete;break;case Ca:e=this.InterpolantFactoryMethodLinear;break;case _a:e=this.InterpolantFactoryMethodSmooth;break;case rh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return _a;case this.InterpolantFactoryMethodBezier:return rh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;ga(this.settings)&&(pf(this.settings.inTangents,t),pf(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;ga(this.settings)&&(mf(this.settings.inTangents,t),mf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Wt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Kp(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_a,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let v=e[f+p];if(v!==e[u+p]||v!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,ga(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function pf(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function mf(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Ca;var as=class extends Wn{constructor(t,e,n){super(t,e,n)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Yr;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends Wn{constructor(t,e,n,i){super(t,e,n,i)}};Va.prototype.ValueTypeName="color";var Wa=class extends Wn{constructor(t,e,n,i){super(t,e,n,i)}};Wa.prototype.ValueTypeName="number";var Xa=class extends os{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)je.slerpFlat(r,0,o,c-a,o,c,l);return r}},fo=class extends Wn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Xa(this.times,this.values,this.getValueSize(),t)}};fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Wn{constructor(t,e,n){super(t,e,n)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Yr;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends Wn{constructor(t,e,n,i){super(t,e,n,i)}};qa.prototype.ValueTypeName="vector";var Ya=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ad=new Ya,Za=class{constructor(t){this.manager=t!==void 0?t:ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Za.DEFAULT_MATERIAL_NAME="__DEFAULT";var Is=class extends cn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},po=class extends Is{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},sh=new Ft,gf=new H,xf=new H,gr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new di,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;gf.setFromMatrixPosition(t.matrixWorld),e.position.copy(gf),xf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(sh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===is||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(sh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},xa=new H,va=new je,Si=new H,mo=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xa,va,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,va,Si.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(xa,va,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,va,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ts=new H,vf=new Gt,_f=new Gt,vn=class extends mo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ic*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(Ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,e){return this.getViewBounds(t,vf,_f),e.subVectors(_f,vf)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ic*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var uh=class extends gr{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}},go=class extends Is{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new uh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Gi=class extends mo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var xr=class extends De{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var or=-90,ar=1,vr=class extends cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new vn(or,ar,t,e);i.layers=this.layers,this.add(i);let r=new vn(or,ar,t,e);r.layers=this.layers,this.add(r);let o=new vn(or,ar,t,e);o.layers=this.layers,this.add(o);let a=new vn(or,ar,t,e);a.layers=this.layers,this.add(a);let l=new vn(or,ar,t,e);l.layers=this.layers,this.add(l);let c=new vn(or,ar,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ja=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Hh="\\[\\]\\.:\\/",U0=new RegExp("["+Hh+"]","g"),Gh="[^"+Hh+"]",F0="[^"+Hh.replace("\\.","")+"]",O0=/((?:WC+[\/:])*)/.source.replace("WC",Gh),z0=/(WCOD+)?/.source.replace("WCOD",F0),B0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),k0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),H0=new RegExp("^"+O0+z0+B0+k0+"$"),G0=["material","materials","bones","map"],fh=class{constructor(t,e,n){let i=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(U0,"")}static parseTrackName(t){let e=H0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);G0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=fh;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var my=new Float32Array(1);var Zh=class Zh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Zh.prototype.isMatrix2=!0;var dh=Zh;function Vh(s,t,e,n){let i=V0(n);switch(e){case Ih:return s*t;case br:return s*t/i.components*i.byteLength;case vo:return s*t/i.components*i.byteLength;case us:return s*t*2/i.components*i.byteLength;case sl:return s*t*2/i.components*i.byteLength;case Lh:return s*t*3/i.components*i.byteLength;case Ve:return s*t*4/i.components*i.byteLength;case rl:return s*t*4/i.components*i.byteLength;case _o:case yo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Mo:case So:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case al:case cl:return Math.max(s,16)*Math.max(t,8)/4;case ol:case ll:return Math.max(s,8)*Math.max(t,8)/2;case hl:case ul:case dl:case pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fl:case bo:case ml:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case vl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case _l:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case yl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case bl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case wl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case El:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Al:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Cl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Pl:case Il:case Ll:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Dl:case Nl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case wo:case Ul:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function V0(s){switch(s){case yn:case Ah:return{byteLength:1,components:1};case Sr:case Rh:case An:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case ni:case el:case Dn:return{byteLength:4,components:1};case Ch:case Ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Cd(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function X0(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],v=f[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let v=f[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,om=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Om=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ng=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:q0,alphahash_pars_fragment:Y0,alphamap_fragment:Z0,alphamap_pars_fragment:J0,alphatest_fragment:$0,alphatest_pars_fragment:K0,aomap_fragment:j0,aomap_pars_fragment:Q0,batching_pars_vertex:tm,batching_vertex:em,begin_vertex:nm,beginnormal_vertex:im,bsdfs:sm,iridescence_fragment:rm,bumpmap_pars_fragment:om,clipping_planes_fragment:am,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:hm,color_fragment:um,color_pars_fragment:fm,color_pars_vertex:dm,color_vertex:pm,common:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:xm,displacementmap_vertex:vm,emissivemap_fragment:_m,emissivemap_pars_fragment:ym,colorspace_fragment:Mm,colorspace_pars_fragment:Sm,envmap_fragment:bm,envmap_common_pars_fragment:wm,envmap_pars_fragment:Em,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Om,envmap_vertex:Am,fog_vertex:Rm,fog_pars_vertex:Cm,fog_fragment:Pm,fog_pars_fragment:Im,gradientmap_pars_fragment:Lm,lightmap_pars_fragment:Dm,lights_lambert_fragment:Nm,lights_lambert_pars_fragment:Um,lights_pars_begin:Fm,lights_toon_fragment:zm,lights_toon_pars_fragment:Bm,lights_phong_fragment:km,lights_phong_pars_fragment:Hm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Vm,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:qm,lightprobes_pars_fragment:Ym,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:Jm,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:Km,map_fragment:jm,map_pars_fragment:Qm,map_particle_fragment:tg,map_particle_pars_fragment:eg,metalnessmap_fragment:ng,metalnessmap_pars_fragment:ig,morphinstance_vertex:sg,morphcolor_vertex:rg,morphnormal_vertex:og,morphtarget_pars_vertex:ag,morphtarget_vertex:lg,normal_fragment_begin:cg,normal_fragment_maps:hg,normal_pars_fragment:ug,normal_pars_vertex:fg,normal_vertex:dg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:gg,clearcoat_pars_fragment:xg,iridescence_pars_fragment:vg,opaque_fragment:_g,packing:yg,premultiplied_alpha_fragment:Mg,project_vertex:Sg,dithering_fragment:bg,dithering_pars_fragment:wg,roughnessmap_fragment:Eg,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:Rg,shadowmap_vertex:Cg,shadowmask_pars_fragment:Pg,skinbase_vertex:Ig,skinning_pars_vertex:Lg,skinning_vertex:Dg,skinnormal_vertex:Ng,specularmap_fragment:Ug,specularmap_pars_fragment:Fg,tonemapping_fragment:Og,tonemapping_pars_fragment:zg,transmission_fragment:Bg,transmission_pars_fragment:kg,uv_pars_fragment:Hg,uv_pars_vertex:Gg,uv_vertex:Vg,worldpos_vertex:Wg,background_vert:Xg,background_frag:qg,backgroundCube_vert:Yg,backgroundCube_frag:Zg,cube_vert:Jg,cube_frag:$g,depth_vert:Kg,depth_frag:jg,distance_vert:Qg,distance_frag:tx,equirect_vert:ex,equirect_frag:nx,linedashed_vert:ix,linedashed_frag:sx,meshbasic_vert:rx,meshbasic_frag:ox,meshlambert_vert:ax,meshlambert_frag:lx,meshmatcap_vert:cx,meshmatcap_frag:hx,meshnormal_vert:ux,meshnormal_frag:fx,meshphong_vert:dx,meshphong_frag:px,meshphysical_vert:mx,meshphysical_frag:gx,meshtoon_vert:xx,meshtoon_frag:vx,points_vert:_x,points_frag:yx,shadow_vert:Mx,shadow_frag:Sx,sprite_vert:bx,sprite_frag:wx},Et={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Ei={basic:{uniforms:Mn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Mn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Mn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Mn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Mn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Rt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Mn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Mn([Et.points,Et.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Mn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Mn([Et.common,Et.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Mn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Mn([Et.sprite,Et.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:Mn([Et.common,Et.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:Mn([Et.lights,Et.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Ei.physical={uniforms:Mn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Fl={r:0,b:0,g:0},Ex=new Ft,Pd=new Vt;Pd.set(-1,0,0,0,1,0,0,0,1);function Tx(s,t,e,n,i,r){let o=new Rt(0),a=i===!0?0:1,l,c,h=null,f=0,u=null;function d(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let M=y.backgroundBlurriness>0;E=t.get(E,M)}return E}function p(y){let E=!1,M=d(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),E=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(y,E){let M=d(E);M&&M.isCubeTexture?(c===void 0&&(c=new Xt(new ss(1,1,1),new Te({name:"BackgroundCubeMaterial",uniforms:Os(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pd),c.material.toneMapped=re.getTransfer(M.colorSpace)!==xe,(h!==M||f!==M.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Xt(new ti(2,2),new Te({name:"BackgroundMaterial",uniforms:Os(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=re.getTransfer(M.colorSpace)!==xe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,E){y.getRGB(Fl,kh(s)),e.buffers.color.setClear(Fl.r,Fl.g,Fl.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:v,dispose:g}}function Ax(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(A,C,L,I,U){let O=!1,z=f(A,I,L,C);r!==z&&(r=z,c(r.object)),O=d(A,I,L,U),O&&p(A,I,L,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,M(A,C,L,I),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return s.createVertexArray()}function c(A){return s.bindVertexArray(A)}function h(A){return s.deleteVertexArray(A)}function f(A,C,L,I){let U=I.wireframe===!0,O=n[C.id];O===void 0&&(O={},n[C.id]=O);let z=A.isInstancedMesh===!0?A.id:0,X=O[z];X===void 0&&(X={},O[z]=X);let D=X[L.id];D===void 0&&(D={},X[L.id]=D);let F=D[U];return F===void 0&&(F=u(l()),D[U]=F),F}function u(A){let C=[],L=[],I=[];for(let U=0;U<e;U++)C[U]=0,L[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:I,object:A,attributes:{},index:null}}function d(A,C,L,I){let U=r.attributes,O=C.attributes,z=0,X=L.getAttributes();for(let D in X)if(X[D].location>=0){let k=U[D],$=O[D];if($===void 0&&(D==="instanceMatrix"&&A.instanceMatrix&&($=A.instanceMatrix),D==="instanceColor"&&A.instanceColor&&($=A.instanceColor)),k===void 0||k.attribute!==$||$&&k.data!==$.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function p(A,C,L,I){let U={},O=C.attributes,z=0,X=L.getAttributes();for(let D in X)if(X[D].location>=0){let k=O[D];k===void 0&&(D==="instanceMatrix"&&A.instanceMatrix&&(k=A.instanceMatrix),D==="instanceColor"&&A.instanceColor&&(k=A.instanceColor));let $={};$.attribute=k,k&&k.data&&($.data=k.data),U[D]=$,z++}r.attributes=U,r.attributesNum=z,r.index=I}function v(){let A=r.newAttributes;for(let C=0,L=A.length;C<L;C++)A[C]=0}function m(A){g(A,0)}function g(A,C){let L=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;L[A]=1,I[A]===0&&(s.enableVertexAttribArray(A),I[A]=1),U[A]!==C&&(s.vertexAttribDivisor(A,C),U[A]=C)}function y(){let A=r.newAttributes,C=r.enabledAttributes;for(let L=0,I=C.length;L<I;L++)C[L]!==A[L]&&(s.disableVertexAttribArray(L),C[L]=0)}function E(A,C,L,I,U,O,z){z===!0?s.vertexAttribIPointer(A,C,L,U,O):s.vertexAttribPointer(A,C,L,I,U,O)}function M(A,C,L,I){v();let U=I.attributes,O=L.getAttributes(),z=C.defaultAttributeValues;for(let X in O){let D=O[X];if(D.location>=0){let F=U[X];if(F===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(F=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(F=A.instanceColor)),F!==void 0){let k=F.normalized,$=F.itemSize,tt=t.get(F);if(tt===void 0)continue;let W=tt.buffer,Z=tt.type,j=tt.bytesPerElement,lt=Z===s.INT||Z===s.UNSIGNED_INT||F.gpuType===el;if(F.isInterleavedBufferAttribute){let et=F.data,ut=et.isInterleavedBuffer===!0?et.stride:et.itemSize,bt=F.offset;if(et.isInstancedInterleavedBuffer||et.isInstancedBufferAttribute){for(let Q=0;Q<D.locationSize;Q++)g(D.location+Q,et.meshPerAttribute);A.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Q=0;Q<D.locationSize;Q++)m(D.location+Q);s.bindBuffer(s.ARRAY_BUFFER,W);for(let Q=0;Q<D.locationSize;Q++)E(D.location+Q,$/D.locationSize,Z,k,ut*j,(bt+$/D.locationSize*Q)*j,lt)}else{if(F.isInstancedBufferAttribute){for(let et=0;et<D.locationSize;et++)g(D.location+et,F.meshPerAttribute);A.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let et=0;et<D.locationSize;et++)m(D.location+et);s.bindBuffer(s.ARRAY_BUFFER,W);for(let et=0;et<D.locationSize;et++)E(D.location+et,$/D.locationSize,Z,k,$*j,$/D.locationSize*et*j,lt)}}else if(z!==void 0){let k=z[X];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(D.location,k);break;case 3:s.vertexAttrib3fv(D.location,k);break;case 4:s.vertexAttrib4fv(D.location,k);break;default:s.vertexAttrib1fv(D.location,k)}}}}y()}function b(){T();for(let A in n){let C=n[A];for(let L in C){let I=C[L];for(let U in I){let O=I[U];for(let z in O)h(O[z].object),delete O[z];delete I[U]}}delete n[A]}}function S(A){if(n[A.id]===void 0)return;let C=n[A.id];for(let L in C){let I=C[L];for(let U in I){let O=I[U];for(let z in O)h(O[z].object),delete O[z];delete I[U]}}delete n[A.id]}function x(A){for(let C in n){let L=n[C];for(let I in L){let U=L[I];if(U[A.id]===void 0)continue;let O=U[A.id];for(let z in O)h(O[z].object),delete O[z];delete U[A.id]}}}function _(A){for(let C in n){let L=n[C],I=A.isInstancedMesh===!0?A.id:0,U=L[I];if(U!==void 0){for(let O in U){let z=U[O];for(let X in z)h(z[X].object),delete z[X];delete U[O]}delete L[I],Object.keys(L).length===0&&delete n[C]}}}function T(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Rx(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Cx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Ve&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let _=x===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==yn&&x!==Dn&&!_&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&kt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:M,maxSamples:b,samples:S}}function Px(s){let t=this,e=null,n=0,i=!1,r=!1,o=new fi,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,g=s.get(f);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,E=y*4,M=g.clippingState||null;l.value=M,M=h(p,u,E,d);for(let b=0;b!==E;++b)M[b]=e[b];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,p){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=d+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,M=d;E!==v;++E,M+=4)o.copy(f[E]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Co=class extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new oo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ss(5,5,5),r=new Te({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Ds});r.uniforms.tEquirect.value=e;let o=new Xt(i,r),a=e.minFilter;return e.minFilter===Xn&&(e.minFilter=Ee),new vr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},ld=256,Ix=3,Lx=20,Id=256,Ld=16,Dx=3,Nx=new H,Ux=new Rt,zl=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vr(1,10,null),this._boxMesh=new Xt(new ss(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=Nx}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(Ux));let m=new vr(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=p,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ld,id(t))}_fromTexture(t,e){t.mapping===Us||t.mapping===Mr?this._setSize(t.image.length===0?ld:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=cd(t,!1,!1),n=Math.log2(t)-Ix;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=cd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Us||t.mapping===Mr?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=hd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Fx(),this._integrationMaterial=Ox());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Ld);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-Dx)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Id*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=zx());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function cd(s,t,e){return new Co(s,{minFilter:Xn,generateMipmaps:t,type:An,colorSpace:Zr,depthBuffer:e})}function Po(s,t,e){return new Te({name:s,uniforms:t,vertexShader:qt.cube_vert,fragmentShader:e,side:hn,blending:Ds,depthTest:!1,depthWrite:!1})}function Fx(){return Po("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Id}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ox(){return Po("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ld}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function zx(){return Po("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Lx}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function hd(){return Po("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ud(){return Po("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Bx(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===ja||d===Qa)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let v=new Co(p.height);return v.fromEquirectangularTexture(s,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,p=d===ja||d===Qa,v=d===Us||d===Mr;if(p||v){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new zl(s)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return p&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new zl(s)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,d){return d===ja?u.mapping=Us:d===Qa&&(u.mapping=Mr),u}function l(u){let d=0,p=6;for(let v=0;v<p;v++)u[v]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function kx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&qr("WebGLRenderer: "+n+" extension not supported."),i}}}function Hx(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let v=r.get(p);v&&(t.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,v){return i[v.id]!==void 0||(v.addEventListener("dispose",a),i[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function h(p){let v=p.attributes;for(let m in v)t.update(v[m],s.ARRAY_BUFFER)}function f(p){let v=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=v!==null?v.array.length:m.array.length/3-1,E=m.count>=65535?Ps:Cs,M=new E(Math.ceil(y/3)*6,1),b=M.array;if(v!==null){let x=v.array;g=v.version;for(let _=0,T=0;_<y;_+=3){let w=x[_+0],A=x[_+1],C=x[_+2];b[T++]=w,b[T++]=A,b[T++]=A,b[T++]=C,b[T++]=C,b[T++]=w}}else{g=m.version;for(let x=0,_=0;x<y;x+=3){let T=x+0,w=x+1,A=x+2;b[_++]=T,b[_++]=w,b[_++]=w,b[_++]=A,b[_++]=A,b[_++]=T}}M.version=g;let S=r.get(p);S&&t.remove(S),r.set(p,M)}function u(p){let v=r.get(p);if(v){let m=p.index;m!==null&&v.version<m.version&&f(p)}else f(p);return r.get(p)}function d(){for(let p in i){let v=i[p].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Gx(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let v=0;for(let m=0;m<d;m++)v+=u[m];e.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Wt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Wx(s,t,e){let n=new WeakMap,i=new ee;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let T=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],E=0;d===!0&&(E=1),p===!0&&(E=2),v===!0&&(E=3);let M=a.attributes.position.count*E,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let S=new Float32Array(M*b*4*f),x=new Kr(S,M,b,f);x.type=Dn,x.needsUpdate=!0;let _=E*4;for(let w=0;w<f;w++){let A=m[w],C=g[w],L=y[w],I=M*b*4*w;for(let U=0;U<A.count;U++){let O=U*_;d===!0&&(i.fromBufferAttribute(A,U),S[I+O+0]=i.x,S[I+O+1]=i.y,S[I+O+2]=i.z,S[I+O+3]=0),p===!0&&(i.fromBufferAttribute(C,U),S[I+O+4]=i.x,S[I+O+5]=i.y,S[I+O+6]=i.z,S[I+O+7]=0),v===!0&&(i.fromBufferAttribute(L,U),S[I+O+8]=i.x,S[I+O+9]=i.y,S[I+O+10]=i.z,S[I+O+11]=L.itemSize===4?i.w:1)}}u={count:f,texture:x,size:new Gt(M,b)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Xx(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var qx={[_h]:"LINEAR_TONE_MAPPING",[yh]:"REINHARD_TONE_MAPPING",[Mh]:"CINEON_TONE_MAPPING",[Sh]:"ACES_FILMIC_TONE_MAPPING",[wh]:"AGX_TONE_MAPPING",[Eh]:"NEUTRAL_TONE_MAPPING",[bh]:"CUSTOM_TONE_MAPPING"};function Yx(s,t,e,n,i,r){let o=new Tn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new De;h.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new le([0,2,0,0,2,0],2));let f=new Oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Xt(h,f),d=new Gi(-1,1,1,-1,0,1),p=null,v=null,m=!1,g,y=null,E=[],M=!1;this.setSize=function(b,S){o.setSize(b,S),a!==null&&a.setSize(b,S),l!==null&&l.setSize(b,S);for(let x=0;x<E.length;x++){let _=E[x];_.setSize&&_.setSize(b,S)}},this.setEffects=function(b){E=b,M=E.length>0&&E[0].isRenderPass===!0;let S=o.width,x=o.height;E.length>0&&a===null&&(a=new Tn(S,x,{type:An,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(S,x,{type:An,depthBuffer:!1,stencilBuffer:!1}));let _=i===!0&&E.some(T=>T.needsDepthTexture===!0);_!==(o.depthTexture!==null)&&(_===!0&&c===null&&(c=new Hi(S,x),r===!0&&(c.format=Vi,c.type=Fs)),o.dispose(),o.depthTexture=_?c:null,o.resolveDepthBuffer=_,o.storeMultisampledDepthBuffer=_);for(let T=0;T<E.length;T++){let w=E[T];w.setSize&&w.setSize(S,x),_&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(b,S){if(m||b.toneMapping===ei&&E.length===0)return!1;if(y=S,S!==null){let x=S.width,_=S.height;(o.width!==x||o.height!==_)&&this.setSize(x,_)}return M===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=ei,!0},this.hasRenderPass=function(){return M},this.end=function(b,S){b.toneMapping=g,m=!0;let x=o,_=a;for(let T=0;T<E.length;T++){let w=E[T];w.enabled!==!1&&(w.render(b,_,x,S),w.needsSwap!==!1&&(x=_,_=_===a?l:a))}if(p!==b.outputColorSpace||v!==b.toneMapping){p=b.outputColorSpace,v=b.toneMapping,f.defines={},re.getTransfer(p)===xe&&(f.defines.SRGB_TRANSFER="");let T=qx[v];T&&(f.defines[T]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(y),b.render(u,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var Dd=new En,Nd=new Hi(1,1),Ud=new lo(1),Fd=new Kr,Od=new Da,zd=new oo,fd=[],dd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function Er(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=fd[i];if(r===void 0&&(r=new Float32Array(i),fd[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Qe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function tn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function kl(s,t){let e=dd[t];e===void 0&&(e=new Int32Array(t),dd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Zx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Jx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;s.uniform2fv(this.addr,t),tn(e,t)}}function $x(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;s.uniform3fv(this.addr,t),tn(e,t)}}function Kx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;s.uniform4fv(this.addr,t),tn(e,t)}}function jx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;gd.set(n),s.uniformMatrix2fv(this.addr,!1,gd),tn(e,n)}}function Qx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;md.set(n),s.uniformMatrix3fv(this.addr,!1,md),tn(e,n)}}function tv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;pd.set(n),s.uniformMatrix4fv(this.addr,!1,pd),tn(e,n)}}function ev(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function nv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;s.uniform2iv(this.addr,t),tn(e,t)}}function iv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;s.uniform3iv(this.addr,t),tn(e,t)}}function sv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;s.uniform4iv(this.addr,t),tn(e,t)}}function rv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ov(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;s.uniform2uiv(this.addr,t),tn(e,t)}}function av(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;s.uniform3uiv(this.addr,t),tn(e,t)}}function lv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;s.uniform4uiv(this.addr,t),tn(e,t)}}function Hl(s){return s.version===0&&(s.compareFunction=Uh,s.needsUpdate=!0),s}function cv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Hl(Nd):r=Dd,e.setTexture2D(t||r,i)}function hv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Od,i)}function uv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Hl(Ud):r=zd,e.setTextureCube(t||r,i)}function fv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Fd,i)}function dv(s){switch(s){case 5126:return Zx;case 35664:return Jx;case 35665:return $x;case 35666:return Kx;case 35674:return jx;case 35675:return Qx;case 35676:return tv;case 5124:case 35670:return ev;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return ov;case 36295:return av;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return fv}}function pv(s,t){s.uniform1fv(this.addr,t)}function mv(s,t){let e=Er(t,this.size,2);s.uniform2fv(this.addr,e)}function gv(s,t){let e=Er(t,this.size,3);s.uniform3fv(this.addr,e)}function xv(s,t){let e=Er(t,this.size,4);s.uniform4fv(this.addr,e)}function vv(s,t){let e=Er(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function _v(s,t){let e=Er(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function yv(s,t){let e=Er(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Mv(s,t){s.uniform1iv(this.addr,t)}function Sv(s,t){s.uniform2iv(this.addr,t)}function bv(s,t){s.uniform3iv(this.addr,t)}function wv(s,t){s.uniform4iv(this.addr,t)}function Ev(s,t){s.uniform1uiv(this.addr,t)}function Tv(s,t){s.uniform2uiv(this.addr,t)}function Av(s,t){s.uniform3uiv(this.addr,t)}function Rv(s,t){s.uniform4uiv(this.addr,t)}function Cv(s,t,e){let n=this.cache,i=t.length,r=kl(e,i);Qe(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Hl(Nd):o=Dd;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Pv(s,t,e){let n=this.cache,i=t.length,r=kl(e,i);Qe(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Od,r[o])}function Iv(s,t,e){let n=this.cache,i=t.length,r=kl(e,i);Qe(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Hl(Ud):o=zd;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function Lv(s,t,e){let n=this.cache,i=t.length,r=kl(e,i);Qe(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Fd,r[o])}function Dv(s){switch(s){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return xv;case 35674:return vv;case 35675:return _v;case 35676:return yv;case 5124:case 35670:return Mv;case 35667:case 35671:return Sv;case 35668:case 35672:return bv;case 35669:case 35673:return wv;case 5125:return Ev;case 36294:return Tv;case 36295:return Av;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Lv}}var Kh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dv(e.type)}},jh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dv(e.type)}},Qh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Jh=/(\w+)(\])?(\[|\.)?/g;function xd(s,t){s.seq.push(t),s.map[t.id]=t}function Nv(s,t,e){let n=s.name,i=n.length;for(Jh.lastIndex=0;;){let r=Jh.exec(n),o=Jh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){xd(e,c===void 0?new Kh(a,s,t):new jh(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new Qh(a),xd(e,f)),e=f}}}var wr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Nv(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function vd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Uv=37297,Fv=0;function Ov(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var _d=new Vt;function zv(s){re._getMatrix(_d,re.workingColorSpace,s);let t=`mat3( ${_d.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(s)){case Jr:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function yd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ov(s.getShaderSource(t),a)}else return r}function Bv(s,t){let e=zv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var kv={[_h]:"Linear",[yh]:"Reinhard",[Mh]:"Cineon",[Sh]:"ACESFilmic",[wh]:"AgX",[Eh]:"Neutral",[bh]:"Custom"};function Hv(s,t){let e=kv[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ol=new H;function Gv(){re.getLuminanceCoefficients(Ol);let s=Ol.x.toFixed(4),t=Ol.y.toFixed(4),e=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function Wv(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xv(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ro(s){return s!==""}function Md(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Sd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(s){return s.replace(qv,Yv)}function Yv(s,t){let e=qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return tu(e)}var Zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(s){return s.replace(Zv,Jv)}function Jv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var $v={[Ls]:"SHADOWMAP_TYPE_PCF",[_r]:"SHADOWMAP_TYPE_VSM"};function Kv(s){return $v[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var jv={[Mr]:"ENVMAP_MODE_REFRACTION"};function Qv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":jv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var t_={[Ka]:"ENVMAP_BLENDING_MULTIPLY",[Hf]:"ENVMAP_BLENDING_MIX",[Gf]:"ENVMAP_BLENDING_ADD"};function e_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":t_[s.combine]||"ENVMAP_BLENDING_NONE"}function n_(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Kv(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Qv(e),f=e_(e),u=Vv(e),d=Wv(r),p=i.createProgram(),v,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ro).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ro).join(`
`),m.length>0&&(m+=`
`)):(v=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),m=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?qt.tonemapping_pars_fragment:"",e.toneMapping!==ei?Hv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Bv("linearToOutputTexel",e.outputColorSpace),Gv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ro).join(`
`)),o=tu(o),o=Md(o,e),o=Sd(o,e),a=tu(a),a=Md(a,e),a=Sd(a,e),o=bd(o),a=bd(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+v+o,E=g+m+a,M=vd(i,i.VERTEX_SHADER,y),b=vd(i,i.FRAGMENT_SHADER,E);i.attachShader(p,M),i.attachShader(p,b),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function S(w){if(s.debug.checkShaderErrors){let A=i.getProgramInfoLog(p)||"",C=i.getShaderInfoLog(M)||"",L=i.getShaderInfoLog(b)||"",I=A.trim(),U=C.trim(),O=L.trim(),z=!0,X=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,M,b);else{let D=yd(i,M,"vertex"),F=yd(i,b,"fragment");Wt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+I+`
`+D+`
`+F)}else I!==""?kt("WebGLProgram: Program Info Log:",I):(U===""||O==="")&&(X=!1);X&&(w.diagnostics={runnable:z,programLog:I,vertexShader:{log:U,prefix:v},fragmentShader:{log:O,prefix:m}})}i.deleteShader(M),i.deleteShader(b),x=new wr(i,p),_=Xv(i,p)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let _;this.getAttributes=function(){return _===void 0&&S(this),_};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(p,Uv)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fv++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=b,this}var i_=0,eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nu(t),e.set(t,n)),n}},nu=class{constructor(t){this.id=i_++,this.code=t,this.usedTimes=0}};function s_(s){return s===us||s===bo||s===wo}function r_(s,t,e,n,i,r){let o=new jr,a=new eu,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,_,T,w,A,C){let L=w.fog,I=A.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=t.get(x.envMap||U,O),X=u[x.type],D=n.precision;x.precision!==null&&(D=n.getMaxPrecision(x.precision),D!==x.precision&&kt("WebGLProgram.getParameters:",x.precision,"not supported, using",D,"instead."));let F=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,k=F!==void 0?F.length:0,$=0;I.morphAttributes.position!==void 0&&($=1),I.morphAttributes.normal!==void 0&&($=2),I.morphAttributes.color!==void 0&&($=3);let tt,W,Z,j;if(X){let wt=Ei[X];tt=wt.vertexShader,W=wt.fragmentShader}else{tt=x.vertexShader,W=x.fragmentShader;let wt=a.getVertexShaderStage(x),Me=a.getFragmentShaderStage(x);a.update(x,wt,Me),Z=wt.id,j=Me.id}let lt=s.getRenderTarget(),et=s.state.buffers.depth.getReversed(),ut=A.isInstancedMesh===!0,bt=A.isBatchedMesh===!0,Q=!!x.map,at=!!x.matcap,mt=!!z,Tt=mt&&z.isPMREMTexture===!0,Dt=!!x.aoMap,$t=!!x.lightMap,jt=!!x.bumpMap&&x.wireframe===!1,se=!!x.normalMap,be=!!x.displacementMap,Qt=!!x.emissiveMap,ue=!!x.metalnessMap,Oe=!!x.roughnessMap,Ie=x.anisotropy>0,V=x.clearcoat>0,Ht=x.diffuseRoughness>0,Kt=x.dispersion>0,fe=x.retroreflectivity>0,dt=x.iridescence>0,Ge=x.sheen>0,Ut=x.transmission>0,Bt=Ie&&!!x.anisotropyMap,N=V&&!!x.clearcoatMap,R=V&&!!x.clearcoatNormalMap,q=V&&!!x.clearcoatRoughnessMap,ct=Ht&&!!x.diffuseRoughnessMap,ot=dt&&!!x.iridescenceMap,gt=dt&&!!x.iridescenceThicknessMap,Mt=Ge&&!!x.sheenColorMap,it=Ge&&!!x.sheenRoughnessMap,st=!!x.specularMap,vt=!!x.specularColorMap,B=!!x.specularIntensityMap,rt=Ut&&!!x.transmissionMap,nt=Ut&&!!x.thicknessMap,_t=!!x.gradientMap,pt=!!x.alphaMap,xt=x.alphaTest>0,Nt=!!x.alphaHash,Jt=!!x.extensions,ft=ei;x.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ft=s.toneMapping);let zt=Tt?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Zt={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:tt,fragmentShader:W,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:D,batching:bt,batchingColor:bt&&A._colorsTexture!==null,instancing:ut,instancingColor:ut&&A.instanceColor!==null,instancingMorph:ut&&A.morphTexture!==null,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Q,matcap:at,envMap:mt,envMapMode:mt&&z.mapping,envMapPMREM:Tt,envMapMaxLod:Tt?zt.length-1:null,envMapSize:Tt?zt[0].width:null,aoMap:Dt,lightMap:$t,bumpMap:jt,normalMap:se,displacementMap:be,emissiveMap:Qt,normalMapObjectSpace:se&&x.normalMapType===Xf,normalMapTangentSpace:se&&x.normalMapType===Eo,packedNormalMap:se&&x.normalMapType===Eo&&s_(x.normalMap.format),metalnessMap:ue,roughnessMap:Oe,anisotropy:Ie,anisotropyMap:Bt,clearcoat:V,clearcoatMap:N,clearcoatNormalMap:R,clearcoatRoughnessMap:q,diffuseRoughness:Ht,diffuseRoughnessMap:ct,dispersion:Kt,retroreflection:fe,iridescence:dt,iridescenceMap:ot,iridescenceThicknessMap:gt,sheen:Ge,sheenColorMap:Mt,sheenRoughnessMap:it,specularMap:st,specularColorMap:vt,specularIntensityMap:B,transmission:Ut,transmissionMap:rt,thicknessMap:nt,gradientMap:_t,opaque:x.transparent===!1&&x.blending===yr&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:xt,alphaHash:Nt,combine:x.combine,mapUv:Q&&d(x.map.channel),aoMapUv:Dt&&d(x.aoMap.channel),lightMapUv:$t&&d(x.lightMap.channel),bumpMapUv:jt&&d(x.bumpMap.channel),normalMapUv:se&&d(x.normalMap.channel),displacementMapUv:be&&d(x.displacementMap.channel),emissiveMapUv:Qt&&d(x.emissiveMap.channel),metalnessMapUv:ue&&d(x.metalnessMap.channel),roughnessMapUv:Oe&&d(x.roughnessMap.channel),anisotropyMapUv:Bt&&d(x.anisotropyMap.channel),clearcoatMapUv:N&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:R&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:it&&d(x.sheenRoughnessMap.channel),specularMapUv:st&&d(x.specularMap.channel),specularColorMapUv:vt&&d(x.specularColorMap.channel),specularIntensityMapUv:B&&d(x.specularIntensityMap.channel),transmissionMapUv:rt&&d(x.transmissionMap.channel),thicknessMapUv:nt&&d(x.thicknessMap.channel),alphaMapUv:pt&&d(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(se||Ie),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!I.attributes.uv&&(Q||pt),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:et,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:$,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:C.filter(wt=>wt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:ft,decodeVideoTexture:Q&&x.map.isVideoTexture===!0&&re.getTransfer(x.map.colorSpace)===xe,decodeVideoTextureEmissive:Qt&&x.emissiveMap.isVideoTexture===!0&&re.getTransfer(x.emissiveMap.colorSpace)===xe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ne,flipSided:x.side===hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Jt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&x.extensions.multiDraw===!0||bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function v(x){let _=[];if(x.shaderID?_.push(x.shaderID):(_.push(x.customVertexShaderID),_.push(x.customFragmentShaderID)),x.defines!==void 0)for(let T in x.defines)_.push(T),_.push(x.defines[T]);return x.isRawShaderMaterial===!1&&(m(_,x),g(_,x),_.push(s.outputColorSpace)),_.push(x.customProgramCacheKey),_.join()}function m(x,_){x.push(_.precision),x.push(_.outputColorSpace),x.push(_.envMapMode),x.push(_.envMapPMREM),x.push(_.envMapMaxLod),x.push(_.envMapSize),x.push(_.mapUv),x.push(_.alphaMapUv),x.push(_.lightMapUv),x.push(_.aoMapUv),x.push(_.bumpMapUv),x.push(_.normalMapUv),x.push(_.displacementMapUv),x.push(_.emissiveMapUv),x.push(_.metalnessMapUv),x.push(_.roughnessMapUv),x.push(_.anisotropyMapUv),x.push(_.clearcoatMapUv),x.push(_.clearcoatNormalMapUv),x.push(_.clearcoatRoughnessMapUv),x.push(_.diffuseRoughnessMapUv),x.push(_.iridescenceMapUv),x.push(_.iridescenceThicknessMapUv),x.push(_.sheenColorMapUv),x.push(_.sheenRoughnessMapUv),x.push(_.specularMapUv),x.push(_.specularColorMapUv),x.push(_.specularIntensityMapUv),x.push(_.transmissionMapUv),x.push(_.thicknessMapUv),x.push(_.combine),x.push(_.fogExp2),x.push(_.sizeAttenuation),x.push(_.morphTargetsCount),x.push(_.numSunLights),x.push(_.numDirLights),x.push(_.numPointLights),x.push(_.numSpotLights),x.push(_.numSpotLightMaps),x.push(_.numHemiLights),x.push(_.numRectAreaLights),x.push(_.numSunLightShadows),x.push(_.numDirLightShadows),x.push(_.numPointLightShadows),x.push(_.numSpotLightShadows),x.push(_.numSpotLightShadowsWithMaps),x.push(_.numLightProbes),x.push(_.numLightProbeGrids),x.push(_.shadowMapType),x.push(_.toneMapping),x.push(_.numClippingPlanes),x.push(_.numClipIntersection),x.push(_.depthPacking)}function g(x,_){o.disableAll(),_.instancing&&o.enable(0),_.instancingColor&&o.enable(1),_.instancingMorph&&o.enable(2),_.matcap&&o.enable(3),_.envMap&&o.enable(4),_.normalMapObjectSpace&&o.enable(5),_.normalMapTangentSpace&&o.enable(6),_.clearcoat&&o.enable(7),_.iridescence&&o.enable(8),_.alphaTest&&o.enable(9),_.vertexColors&&o.enable(10),_.vertexAlphas&&o.enable(11),_.vertexUv1s&&o.enable(12),_.vertexUv2s&&o.enable(13),_.vertexUv3s&&o.enable(14),_.vertexTangents&&o.enable(15),_.anisotropy&&o.enable(16),_.alphaHash&&o.enable(17),_.batching&&o.enable(18),_.dispersion&&o.enable(19),_.retroreflection&&o.enable(24),_.diffuseRoughness&&o.enable(25),_.batchingColor&&o.enable(20),_.gradientMap&&o.enable(21),_.packedNormalMap&&o.enable(22),_.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),_.numLightProbeGrids>0&&o.enable(22),_.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let _=u[x.type],T;if(_){let w=Ei[_];T=rd.clone(w.uniforms)}else T=x.uniforms;return T}function E(x,_){let T=h.get(_);return T!==void 0?++T.usedTimes:(T=new n_(s,_,x,i),c.push(T),h.set(_,T)),T}function M(x){if(--x.usedTimes===0){let _=c.indexOf(x);c[_]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function S(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:y,acquireProgram:E,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:S}}function o_(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function a_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Ed(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Td(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,p,v,m,g){let y=s[t];return y===void 0?(y={id:u.id,object:u,geometry:d,material:p,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:g},s[t]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=p,y.materialVariant=o(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=m,y.group=g),t++,y}function l(u,d,p,v,m,g,y){y.reversedDepth===!0&&(m=-m);let E=a(u,d,p,v,m,g);p.transmission>0?n.push(E):p.transparent===!0?i.push(E):e.push(E)}function c(u,d,p,v,m,g){let y=a(u,d,p,v,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):e.unshift(y)}function h(u,d){e.length>1&&e.sort(u||a_),n.length>1&&n.sort(d||Ed),i.length>1&&i.sort(d||Ed)}function f(){for(let u=t,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function l_(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Td,s.set(n,[o])):i>=r.length?(o=new Td,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function c_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new Rt};break;case"SpotLight":e={position:new H,direction:new H,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e}}}function h_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var u_=0;function f_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function d_(s){let t=new c_,e=h_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let i=new H,r=new Ft,o=new Ft;function a(c){let h=0,f=0,u=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let d=0,p=0,v=0,m=0,g=0,y=0,E=0,M=0,b=0,S=0,x=0,_=0,T=0,w=0;c.sort(f_);for(let C=0,L=c.length;C<L;C++){let I=c[C],U=I.color,O=I.intensity,z=I.distance,X=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===us?X=I.shadow.map.texture:X=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=U.r*O,f+=U.g*O,u+=U.b*O;else if(I.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(I.sh.coefficients[D],O);w++}else if(I.isSunLight){let D=t.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let F=I.shadow,k=e.get(I);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),n.sunShadow[p]=k,n.sunShadowMap[p]=X;let $=F.getViewportCount();for(let tt=0;tt<$;tt++)n.sunShadowMatrix[v+tt]=F.getMatrix(tt),n.sunShadowCascade[v+tt]=F._cascadeData[tt];v+=$,p++}n.sun[d]=D,d++}else if(I.isDirectionalLight){let D=t.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let F=I.shadow,k=e.get(I);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=I.shadow.matrix,b++}n.directional[m]=D,m++}else if(I.isSpotLight){let D=t.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(U).multiplyScalar(O),D.distance=z,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,n.spot[y]=D;let F=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,F.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[y]=F.matrix,I.castShadow){let k=e.get(I);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,n.spotShadow[y]=k,n.spotShadowMap[y]=X,x++}y++}else if(I.isRectAreaLight){let D=t.get(I);D.color.copy(U).multiplyScalar(O),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=D,E++}else if(I.isPointLight){let D=t.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),D.distance=I.distance,D.decay=I.decay,I.castShadow){let F=I.shadow,k=e.get(I);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,k.shadowCameraNear=F.camera.near,k.shadowCameraFar=F.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=D,g++}else if(I.isHemisphereLight){let D=t.get(I);D.skyColor.copy(I.color).multiplyScalar(O),D.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[M]=D,M++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let A=n.hash;(A.sunLength!==d||A.directionalLength!==m||A.pointLength!==g||A.spotLength!==y||A.rectAreaLength!==E||A.hemiLength!==M||A.numSunShadows!==p||A.numDirectionalShadows!==b||A.numPointShadows!==S||A.numSpotShadows!==x||A.numSpotMaps!==_||A.numLightProbes!==w)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=E,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,A.sunLength=d,A.directionalLength=m,A.pointLength=g,A.spotLength=y,A.rectAreaLength=E,A.hemiLength=M,A.numSunShadows=p,A.numDirectionalShadows=b,A.numPointShadows=S,A.numSpotShadows=x,A.numSpotMaps=_,A.numLightProbes=w,n.version=u_++)}function l(c,h){let f=0,u=0,d=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){let M=c[y];if(M.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),f++}else if(M.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),u++}else if(M.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Ad(s){let t=new d_(s),e=[],n=[],i=[];function r(f){h.camera=f,e.length=0,n.length=0,i.length=0}function o(f){f.isLightProbeGrid?i.push(f):e.push(f)}function a(f){n.push(f)}function l(){t.setup(e),i.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function p_(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Ad(s),t.set(i,[a])):r>=o.length?(a=new Ad(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,x_=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],v_=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Rd=new Ft,Ao=new H,$h=new H;function __(s,t,e){let n=new di,i=new Gt,r=new Gt,o=new ee,a=new mr,l=new za,c={},h=e.maxTextureSize,f={[cs]:hn,[hn]:cs,[Ne]:Ne},u=new Te({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new De;p.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Xt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ls;let g=this.type;this.render=function(S,x,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Sf&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ls);let T=s.getRenderTarget(),w=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),C=s.state;C.setBlending(Ds),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let L=g!==this.type;L&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(U=>U.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,U=S.length;I<U;I++){let O=S[I],z=O.shadow;if(z===void 0){kt("WebGLShadowMap:",O,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let X=z.getFrameExtents();i.multiply(X),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,z.mapSize.y=r.y));let D=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=D,z.map===null||L===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===_r){if(O.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Tn(i.x,i.y,{format:us,type:An,minFilter:Ee,magFilter:Ee,generateMipmaps:!1}),z.map.texture.name=O.name+".shadowMap",z.map.depthTexture=new Hi(i.x,i.y,Dn),z.map.depthTexture.name=O.name+".shadowMapDepth",z.map.depthTexture.format=ki,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Je,z.map.depthTexture.magFilter=Je}else O.isPointLight?(z.map=new Co(i.x),z.map.depthTexture=new lo(i.x,ni)):(z.map=new Tn(i.x,i.y),z.map.depthTexture=new Hi(i.x,i.y,ni)),z.map.depthTexture.name=O.name+".shadowMap",z.map.depthTexture.format=ki,this.type===Ls?(z.map.depthTexture.compareFunction=D?Nh:Dh,z.map.depthTexture.minFilter=Ee,z.map.depthTexture.magFilter=Ee):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Je,z.map.depthTexture.magFilter=Je);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let F=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();O.isPointLight!==!0&&z.updateMatrices(O,_);let k=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:_.layers;for(let $=0;$<F;$++){let tt=z.getCamera($);if(O.isPointLight){let W=z.camera,Z=z.matrix,j=O.distance||W.far;j!==W.far&&(W.far=j,W.updateProjectionMatrix()),Ao.setFromMatrixPosition(O.matrixWorld),W.position.copy(Ao),$h.copy(W.position),$h.add(x_[$]),W.up.copy(v_[$]),W.lookAt($h),W.updateMatrixWorld(),Z.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Rd.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Rd,W.coordinateSystem,W.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,$),s.clear();else{$===0&&(s.setRenderTarget(z.map),s.clear());let W=z.getViewport($);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),C.viewport(o)}n=z.getFrustum($),M(x,_,tt,O,k,this.type)}z.isPointLightShadow!==!0&&this.type===_r&&y(z,_),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(T,w,A)};function y(S,x){let _=t.update(v);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Tn(i.x,i.y,{format:us,type:An}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(x,null,_,u,v,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(x,null,_,d,v,null)}function E(S,x,_,T){let w=null,A=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)w=A;else if(w=_.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let C=w.uuid,L=x.uuid,I=c[C];I===void 0&&(I={},c[C]=I);let U=I[L];U===void 0&&(U=w.clone(),I[L]=U,x.addEventListener("dispose",b)),w=U}if(w.visible=x.visible,w.wireframe=x.wireframe,T===_r?w.side=x.shadowSide!==null?x.shadowSide:x.side:w.side=x.shadowSide!==null?x.shadowSide:f[x.side],w.alphaMap=x.alphaMap,w.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,w.map=x.map,w.clipShadows=x.clipShadows,w.clippingPlanes=x.clippingPlanes,w.clipIntersection=x.clipIntersection,w.displacementMap=x.displacementMap,w.displacementScale=x.displacementScale,w.displacementBias=x.displacementBias,w.wireframeLinewidth=x.wireframeLinewidth,w.linewidth=x.linewidth,_.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let C=s.properties.get(w);C.light=_}return w}function M(S,x,_,T,w,A){if(S.visible===!1)return;if(S.layers.test(w)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===_r)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let I=t.update(S),U=S.material;if(Array.isArray(U)){let O=I.groups;for(let z=0,X=O.length;z<X;z++){let D=O[z],F=U[D.materialIndex];if(F&&F.visible){let k=E(S,F,T,A);S.onBeforeShadow(s,S,x,_,I,k,D),s.renderBufferDirect(_,null,I,k,S,D),S.onAfterShadow(s,S,x,_,I,k,D)}}}else if(U.visible){let O=E(S,U,T,A);S.onBeforeShadow(s,S,x,_,I,O,null),s.renderBufferDirect(_,null,I,O,S,null),S.onAfterShadow(s,S,x,_,I,O,null)}}let L=S.children;for(let I=0,U=L.length;I<U;I++)M(L[I],x,_,T,w,A)}function b(S){S.target.removeEventListener("dispose",b);for(let _ in c){let T=c[_],w=S.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}function y_(s,t){function e(){let B=!1,rt=new ee,nt=null,_t=new ee(0,0,0,0);return{setMask:function(pt){nt!==pt&&!B&&(s.colorMask(pt,pt,pt,pt),nt=pt)},setLocked:function(pt){B=pt},setClear:function(pt,xt,Nt,Jt,ft){ft===!0&&(pt*=Jt,xt*=Jt,Nt*=Jt),rt.set(pt,xt,Nt,Jt),_t.equals(rt)===!1&&(s.clearColor(pt,xt,Nt,Jt),_t.copy(rt))},reset:function(){B=!1,nt=null,_t.set(-1,0,0,0)}}}function n(){let B=!1,rt=!1,nt=null,_t=null,pt=null;return{setReversed:function(xt){if(rt!==xt){let Nt=t.get("EXT_clip_control");xt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),rt=xt;let Jt=pt;pt=null,this.setClear(Jt)}},getReversed:function(){return rt},setTest:function(xt){xt?et(s.DEPTH_TEST):ut(s.DEPTH_TEST)},setMask:function(xt){nt!==xt&&!B&&(s.depthMask(xt),nt=xt)},setFunc:function(xt){if(rt&&(xt=nd[xt]),_t!==xt){switch(xt){case Ma:s.depthFunc(s.NEVER);break;case Sa:s.depthFunc(s.ALWAYS);break;case ba:s.depthFunc(s.LESS);break;case cr:s.depthFunc(s.LEQUAL);break;case wa:s.depthFunc(s.EQUAL);break;case Ea:s.depthFunc(s.GEQUAL);break;case Ta:s.depthFunc(s.GREATER);break;case Aa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=xt}},setLocked:function(xt){B=xt},setClear:function(xt){pt!==xt&&(pt=xt,rt&&(xt=1-xt),s.clearDepth(xt))},reset:function(){B=!1,nt=null,_t=null,pt=null,rt=!1}}}function i(){let B=!1,rt=null,nt=null,_t=null,pt=null,xt=null,Nt=null,Jt=null,ft=null;return{setTest:function(zt){B||(zt?et(s.STENCIL_TEST):ut(s.STENCIL_TEST))},setMask:function(zt){rt!==zt&&!B&&(s.stencilMask(zt),rt=zt)},setFunc:function(zt,Zt,wt){(nt!==zt||_t!==Zt||pt!==wt)&&(s.stencilFunc(zt,Zt,wt),nt=zt,_t=Zt,pt=wt)},setOp:function(zt,Zt,wt){(xt!==zt||Nt!==Zt||Jt!==wt)&&(s.stencilOp(zt,Zt,wt),xt=zt,Nt=Zt,Jt=wt)},setLocked:function(zt){B=zt},setClear:function(zt){ft!==zt&&(s.clearStencil(zt),ft=zt)},reset:function(){B=!1,rt=null,nt=null,_t=null,pt=null,xt=null,Nt=null,Jt=null,ft=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],v=null,m=!1,g=null,y=null,E=null,M=null,b=null,S=null,x=null,_=new Rt(0,0,0),T=0,w=!1,A=null,C=null,L=null,I=null,U=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,X=0,D=s.getParameter(s.VERSION);D.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(D)[1]),z=X>=1):D.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),z=X>=2);let F=null,k={},$=s.getParameter(s.SCISSOR_BOX),tt=s.getParameter(s.VIEWPORT),W=new ee().fromArray($),Z=new ee().fromArray(tt);function j(B,rt,nt,_t){let pt=new Uint8Array(4),xt=s.createTexture();s.bindTexture(B,xt),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<nt;Nt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(rt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(rt+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return xt}let lt={};lt[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),lt[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),lt[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(s.DEPTH_TEST),o.setFunc(cr),jt(!1),se(ph),et(s.CULL_FACE),Dt(Ds);function et(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function ut(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function bt(B,rt){return u[B]!==rt?(s.bindFramebuffer(B,rt),u[B]=rt,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=rt),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=rt),!0):!1}function Q(B,rt){let nt=p,_t=!1;if(B){nt=d.get(rt),nt===void 0&&(nt=[],d.set(rt,nt));let pt=B.textures;if(nt.length!==pt.length||nt[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,Nt=pt.length;xt<Nt;xt++)nt[xt]=s.COLOR_ATTACHMENT0+xt;nt.length=pt.length,_t=!0}}else nt[0]!==s.BACK&&(nt[0]=s.BACK,_t=!0);_t&&s.drawBuffers(nt)}function at(B){return v!==B?(s.useProgram(B),v=B,!0):!1}let mt={[Ns]:s.FUNC_ADD,[wf]:s.FUNC_SUBTRACT,[Ef]:s.FUNC_REVERSE_SUBTRACT};mt[Tf]=s.MIN,mt[Af]=s.MAX;let Tt={[Rf]:s.ZERO,[Cf]:s.ONE,[Pf]:s.SRC_COLOR,[xh]:s.SRC_ALPHA,[Ff]:s.SRC_ALPHA_SATURATE,[Nf]:s.DST_COLOR,[Lf]:s.DST_ALPHA,[If]:s.ONE_MINUS_SRC_COLOR,[vh]:s.ONE_MINUS_SRC_ALPHA,[Uf]:s.ONE_MINUS_DST_COLOR,[Df]:s.ONE_MINUS_DST_ALPHA,[Of]:s.CONSTANT_COLOR,[zf]:s.ONE_MINUS_CONSTANT_COLOR,[Bf]:s.CONSTANT_ALPHA,[kf]:s.ONE_MINUS_CONSTANT_ALPHA};function Dt(B,rt,nt,_t,pt,xt,Nt,Jt,ft,zt){if(B===Ds){m===!0&&(ut(s.BLEND),m=!1);return}if(m===!1&&(et(s.BLEND),m=!0),B!==bf){if(B!==g||zt!==w){if((y!==Ns||b!==Ns)&&(s.blendEquation(s.FUNC_ADD),y=Ns,b=Ns),zt)switch(B){case yr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hs:s.blendFunc(s.ONE,s.ONE);break;case mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Wt("WebGLState: Invalid blending: ",B);break}else switch(B){case yr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case mh:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",B);break}E=null,M=null,S=null,x=null,_.set(0,0,0),T=0,g=B,w=zt}return}pt=pt||rt,xt=xt||nt,Nt=Nt||_t,(rt!==y||pt!==b)&&(s.blendEquationSeparate(mt[rt],mt[pt]),y=rt,b=pt),(nt!==E||_t!==M||xt!==S||Nt!==x)&&(s.blendFuncSeparate(Tt[nt],Tt[_t],Tt[xt],Tt[Nt]),E=nt,M=_t,S=xt,x=Nt),(Jt.equals(_)===!1||ft!==T)&&(s.blendColor(Jt.r,Jt.g,Jt.b,ft),_.copy(Jt),T=ft),g=B,w=!1}function $t(B,rt){B.side===Ne?ut(s.CULL_FACE):et(s.CULL_FACE);let nt=B.side===hn;rt&&(nt=!nt),jt(nt),B.blending===yr&&B.transparent===!1?Dt(Ds):Dt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let _t=B.stencilWrite;a.setTest(_t),_t&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Qt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function jt(B){A!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),A=B)}function se(B){B!==yf?(et(s.CULL_FACE),B!==C&&(B===ph?s.cullFace(s.BACK):B===Mf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ut(s.CULL_FACE),C=B}function be(B){B!==L&&(z&&s.lineWidth(B),L=B)}function Qt(B,rt,nt){B?(et(s.POLYGON_OFFSET_FILL),(I!==rt||U!==nt)&&(I=rt,U=nt,o.getReversed()&&(rt=-rt,nt=-nt),s.polygonOffset(rt,nt))):ut(s.POLYGON_OFFSET_FILL)}function ue(B){B?et(s.SCISSOR_TEST):ut(s.SCISSOR_TEST)}function Oe(B){B===void 0&&(B=s.TEXTURE0+O-1),F!==B&&(s.activeTexture(B),F=B)}function Ie(B,rt,nt){nt===void 0&&(F===null?nt=s.TEXTURE0+O-1:nt=F);let _t=k[nt];_t===void 0&&(_t={type:void 0,texture:void 0},k[nt]=_t),(_t.type!==B||_t.texture!==rt)&&(F!==nt&&(s.activeTexture(nt),F=nt),s.bindTexture(B,rt||lt[B]),_t.type=B,_t.texture=rt)}function V(){let B=k[F];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ht(){try{s.compressedTexImage2D(...arguments)}catch(B){Wt("WebGLState:",B)}}function Kt(){try{s.compressedTexImage3D(...arguments)}catch(B){Wt("WebGLState:",B)}}function fe(){try{s.texSubImage2D(...arguments)}catch(B){Wt("WebGLState:",B)}}function dt(){try{s.texSubImage3D(...arguments)}catch(B){Wt("WebGLState:",B)}}function Ge(){try{s.compressedTexSubImage2D(...arguments)}catch(B){Wt("WebGLState:",B)}}function Ut(){try{s.compressedTexSubImage3D(...arguments)}catch(B){Wt("WebGLState:",B)}}function Bt(){try{s.texStorage2D(...arguments)}catch(B){Wt("WebGLState:",B)}}function N(){try{s.texStorage3D(...arguments)}catch(B){Wt("WebGLState:",B)}}function R(){try{s.texImage2D(...arguments)}catch(B){Wt("WebGLState:",B)}}function q(){try{s.texImage3D(...arguments)}catch(B){Wt("WebGLState:",B)}}function ct(B){return f[B]!==void 0?f[B]:s.getParameter(B)}function ot(B,rt){f[B]!==rt&&(s.pixelStorei(B,rt),f[B]=rt)}function gt(B){W.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),W.copy(B))}function Mt(B){Z.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Z.copy(B))}function it(B,rt){let nt=c.get(rt);nt===void 0&&(nt=new WeakMap,c.set(rt,nt));let _t=nt.get(B);_t===void 0&&(_t=s.getUniformBlockIndex(rt,B.name),s.uniformBlockBinding(rt,_t,_t),nt.set(B,_t))}function st(B,rt,nt){let pt=c.get(rt).get(B);l[pt]!==nt&&(s.bindBufferBase(s.UNIFORM_BUFFER,pt,nt),l[pt]=nt)}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},F=null,k={},u={},l={},d=new WeakMap,p=[],v=null,m=!1,g=null,y=null,E=null,M=null,b=null,S=null,x=null,_=new Rt(0,0,0),T=0,w=!1,A=null,C=null,L=null,I=null,U=null,W.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:ut,bindFramebuffer:bt,drawBuffers:Q,useProgram:at,setBlending:Dt,setMaterial:$t,setFlipSided:jt,setCullFace:se,setLineWidth:be,setPolygonOffset:Qt,setScissorTest:ue,activeTexture:Oe,bindTexture:Ie,unbindTexture:V,compressedTexImage2D:Ht,compressedTexImage3D:Kt,texImage2D:R,texImage3D:q,pixelStorei:ot,getParameter:ct,updateUBOMapping:it,uniformBlockBinding:st,texStorage2D:Bt,texStorage3D:N,texSubImage2D:fe,texSubImage3D:dt,compressedTexSubImage2D:Ge,compressedTexSubImage3D:Ut,scissor:gt,viewport:Mt,reset:vt}}function M_(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,h=new WeakMap,f=new Set,u,d=new WeakMap,p=new Set,v=new FinalizationRegistry(N=>p.delete(N)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,R){return m?new OffscreenCanvas(N,R):$r("canvas")}function y(N,R,q){let ct=1,ot=Bt(N);if((ot.width>q||ot.height>q)&&(ct=q/Math.max(ot.width,ot.height)),ct<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let gt=Math.floor(ct*ot.width),Mt=Math.floor(ct*ot.height);u===void 0&&(u=g(gt,Mt));let it=R?g(gt,Mt):u;return it.width=gt,it.height=Mt,it.getContext("2d").drawImage(N,0,0,gt,Mt),kt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+gt+"x"+Mt+")."),it}else return"data"in N&&kt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),N;return N}function E(N){return N.generateMipmaps}function M(N){s.generateMipmap(N)}function b(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(N,R,q,ct,ot,gt=!1){if(N!==null){if(s[N]!==void 0)return s[N];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Mt;ct&&(Mt=t.get("EXT_texture_norm16"),Mt||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=R;if(R===s.RED&&(q===s.FLOAT&&(it=s.R32F),q===s.HALF_FLOAT&&(it=s.R16F),q===s.UNSIGNED_BYTE&&(it=s.R8),q===s.UNSIGNED_SHORT&&Mt&&(it=Mt.R16_EXT),q===s.SHORT&&Mt&&(it=Mt.R16_SNORM_EXT)),R===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(it=s.R8UI),q===s.UNSIGNED_SHORT&&(it=s.R16UI),q===s.UNSIGNED_INT&&(it=s.R32UI),q===s.BYTE&&(it=s.R8I),q===s.SHORT&&(it=s.R16I),q===s.INT&&(it=s.R32I)),R===s.RG&&(q===s.FLOAT&&(it=s.RG32F),q===s.HALF_FLOAT&&(it=s.RG16F),q===s.UNSIGNED_BYTE&&(it=s.RG8),q===s.UNSIGNED_SHORT&&Mt&&(it=Mt.RG16_EXT),q===s.SHORT&&Mt&&(it=Mt.RG16_SNORM_EXT)),R===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(it=s.RG8UI),q===s.UNSIGNED_SHORT&&(it=s.RG16UI),q===s.UNSIGNED_INT&&(it=s.RG32UI),q===s.BYTE&&(it=s.RG8I),q===s.SHORT&&(it=s.RG16I),q===s.INT&&(it=s.RG32I)),R===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(it=s.RGB8UI),q===s.UNSIGNED_SHORT&&(it=s.RGB16UI),q===s.UNSIGNED_INT&&(it=s.RGB32UI),q===s.BYTE&&(it=s.RGB8I),q===s.SHORT&&(it=s.RGB16I),q===s.INT&&(it=s.RGB32I)),R===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(it=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(it=s.RGBA16UI),q===s.UNSIGNED_INT&&(it=s.RGBA32UI),q===s.BYTE&&(it=s.RGBA8I),q===s.SHORT&&(it=s.RGBA16I),q===s.INT&&(it=s.RGBA32I)),R===s.RGB&&(q===s.UNSIGNED_SHORT&&Mt&&(it=Mt.RGB16_EXT),q===s.SHORT&&Mt&&(it=Mt.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(it=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(it=s.R11F_G11F_B10F)),R===s.RGBA){let st=gt?Jr:re.getTransfer(ot);q===s.FLOAT&&(it=s.RGBA32F),q===s.HALF_FLOAT&&(it=s.RGBA16F),q===s.UNSIGNED_BYTE&&(it=st===xe?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&Mt&&(it=Mt.RGBA16_EXT),q===s.SHORT&&Mt&&(it=Mt.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(it=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(it=s.RGB5_A1)}return(it===s.R16F||it===s.R32F||it===s.RG16F||it===s.RG32F||it===s.RGBA16F||it===s.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function x(N,R){let q;return N?R===null||R===ni||R===Fs?q=s.DEPTH24_STENCIL8:R===Dn?q=s.DEPTH32F_STENCIL8:R===Sr&&(q=s.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ni||R===Fs?q=s.DEPTH_COMPONENT24:R===Dn?q=s.DEPTH_COMPONENT32F:R===Sr&&(q=s.DEPTH_COMPONENT16),q}function _(N,R){return E(N)===!0||N.isFramebufferTexture&&N.minFilter!==Je&&N.minFilter!==Ee?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function T(N){let R=new WeakRef(N);n.get(N).__ref=R,p.add(R),v.register(N,R,R)}function w(N){let R=n.get(N).__ref;R!==void 0&&(p.delete(R),v.unregister(R))}function A(N){L(N.target)}function C(N){I(N.target)}function L(N){N.removeEventListener("dispose",A),w(N),O(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&f.delete(N)}function I(N){N.removeEventListener("dispose",C),w(N),X(N)}function U(){for(let N of p){let R=N.deref();R!==void 0&&(R.isRenderTarget===!0?I(R):L(R))}p.clear(),f.clear()}function O(N){let R=n.get(N);if(R.__webglInit===void 0)return;let q=N.source,ct=d.get(q);if(ct){let ot=ct[R.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&z(N),Object.keys(ct).length===0&&d.delete(q)}n.remove(N)}function z(N){let R=n.get(N);s.deleteTexture(R.__webglTexture);let q=N.source,ct=d.get(q);delete ct[R.__cacheKey],o.memory.textures--}function X(N){let R=n.get(N);R.__depthDisposeCallback&&R.__depthDisposeCallback();let q=N.depthTexture;if(q&&q.renderTarget===N&&L(q),N.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(R.__webglFramebuffer[ot]))for(let gt=0;gt<R.__webglFramebuffer[ot].length;gt++)s.deleteFramebuffer(R.__webglFramebuffer[ot][gt]);else s.deleteFramebuffer(R.__webglFramebuffer[ot]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[ot])}else{if(Array.isArray(R.__webglFramebuffer))for(let ot=0;ot<R.__webglFramebuffer.length;ot++)s.deleteFramebuffer(R.__webglFramebuffer[ot]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ot=0;ot<R.__webglColorRenderbuffer.length;ot++)R.__webglColorRenderbuffer[ot]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[ot]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let ct=N.textures;for(let ot=0,gt=ct.length;ot<gt;ot++){let Mt=n.get(ct[ot]);Mt.__webglTexture&&(s.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(ct[ot])}n.remove(N)}let D=0;function F(){D=0}function k(){return D}function $(N){D=N}function tt(){let N=D;return N>=i.maxTextures&&kt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,N}function W(N){let R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.mipmapsAutoUpdate),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function Z(N,R){let q=n.get(N);if(N.isVideoTexture&&Ge(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){let ct=N.image;if(ct===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{$t(q,N,R);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+R)}function j(N,R){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){$t(q,N,R);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+R)}function lt(N,R){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){$t(q,N,R);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+R)}function et(N,R){let q=n.get(N);if(N.version>0&&q.__version!==N.version){jt(q,N,R);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+R)}let ut={[ns]:s.REPEAT,[In]:s.CLAMP_TO_EDGE,[Ra]:s.MIRRORED_REPEAT},bt={[Je]:s.NEAREST,[Vf]:s.NEAREST_MIPMAP_NEAREST,[xo]:s.NEAREST_MIPMAP_LINEAR,[Ee]:s.LINEAR,[tl]:s.LINEAR_MIPMAP_NEAREST,[Xn]:s.LINEAR_MIPMAP_LINEAR},Q={[Yf]:s.NEVER,[Uh]:s.ALWAYS,[Zf]:s.LESS,[Dh]:s.LEQUAL,[Jf]:s.EQUAL,[Nh]:s.GEQUAL,[$f]:s.GREATER,[Kf]:s.NOTEQUAL};function at(N,R){if(R.type===Dn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Ee||R.magFilter===tl||R.magFilter===xo||R.magFilter===Xn||R.minFilter===Ee||R.minFilter===tl||R.minFilter===xo||R.minFilter===Xn)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ut[R.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ut[R.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ut[R.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,bt[R.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,bt[R.minFilter]),R.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Q[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Je||R.minFilter!==xo&&R.minFilter!==Xn||R.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function mt(N,R){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",A),T(R));let ct=R.source,ot=d.get(ct);ot===void 0&&(ot={},d.set(ct,ot));let gt=W(R);if(gt!==N.__cacheKey){ot[gt]===void 0&&(ot[gt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ot[gt].usedTimes++;let Mt=ot[N.__cacheKey];Mt!==void 0&&(ot[N.__cacheKey].usedTimes--,Mt.usedTimes===0&&z(R)),N.__cacheKey=gt,N.__webglTexture=ot[gt].texture}return q}function Tt(N,R,q){return Math.floor(Math.floor(N/q)/R)}function Dt(N,R,q,ct){let gt=N.updateRanges;if(gt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,R.width,R.height,q,ct,R.data);else{gt.sort((B,rt)=>B.start-rt.start);let Mt=0;for(let B=1;B<gt.length;B++){let rt=gt[Mt],nt=gt[B],_t=rt.start+rt.count,pt=Tt(nt.start,R.width,4),xt=Tt(rt.start,R.width,4);nt.start<=_t+1&&pt===xt&&Tt(nt.start+nt.count-1,R.width,4)===pt?rt.count=Math.max(rt.count,nt.start+nt.count-rt.start):(++Mt,gt[Mt]=nt)}gt.length=Mt+1;let it=e.getParameter(s.UNPACK_ROW_LENGTH),st=e.getParameter(s.UNPACK_SKIP_PIXELS),vt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,R.width);for(let B=0,rt=gt.length;B<rt;B++){let nt=gt[B],_t=Math.floor(nt.start/4),pt=Math.ceil(nt.count/4),xt=_t%R.width,Nt=Math.floor(_t/R.width),Jt=pt,ft=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Nt),e.texSubImage2D(s.TEXTURE_2D,0,xt,Nt,Jt,ft,q,ct,R.data)}N.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,it),e.pixelStorei(s.UNPACK_SKIP_PIXELS,st),e.pixelStorei(s.UNPACK_SKIP_ROWS,vt)}}function $t(N,R,q){let ct=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ct=s.TEXTURE_3D);let ot=mt(N,R),gt=R.source;e.bindTexture(ct,N.__webglTexture,s.TEXTURE0+q);let Mt=n.get(gt);if(gt.version!==Mt.__version||ot===!0){if(e.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let ft=re.getPrimaries(re.workingColorSpace),zt=R.colorSpace===pi?null:re.getPrimaries(R.colorSpace),Zt=R.colorSpace===pi||ft===zt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}e.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment);let st=y(R.image,!1,i.maxTextureSize);st=Ut(R,st);let vt=r.convert(R.format,R.colorSpace),B=r.convert(R.type),rt=S(R.internalFormat,vt,B,R.normalized,R.colorSpace,R.isVideoTexture);at(ct,R);let nt,_t=R.mipmaps,pt=R.isVideoTexture!==!0,xt=Mt.__version===void 0||ot===!0,Nt=gt.dataReady,Jt=_(R,st);if(R.isDepthTexture)rt=x(R.format===Vi,R.type),xt&&(pt?e.texStorage2D(s.TEXTURE_2D,1,rt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,rt,st.width,st.height,0,vt,B,null));else if(R.isDataTexture)if(_t.length>0){pt&&xt&&e.texStorage2D(s.TEXTURE_2D,Jt,rt,_t[0].width,_t[0].height);for(let ft=0,zt=_t.length;ft<zt;ft++)nt=_t[ft],pt?Nt&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,nt.width,nt.height,vt,B,nt.data):e.texImage2D(s.TEXTURE_2D,ft,rt,nt.width,nt.height,0,vt,B,nt.data);R.generateMipmaps=!1}else pt?(xt&&e.texStorage2D(s.TEXTURE_2D,Jt,rt,st.width,st.height),Nt&&Dt(R,st,vt,B)):e.texImage2D(s.TEXTURE_2D,0,rt,st.width,st.height,0,vt,B,st.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){pt&&xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Jt,rt,_t[0].width,_t[0].height,st.depth);for(let ft=0,zt=_t.length;ft<zt;ft++)if(nt=_t[ft],R.format!==Ve)if(vt!==null)if(pt){if(Nt)if(R.layerUpdates.size>0){let Zt=Vh(nt.width,nt.height,R.format,R.type);for(let wt of R.layerUpdates){let Me=nt.data.subarray(wt*Zt/nt.data.BYTES_PER_ELEMENT,(wt+1)*Zt/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,wt,nt.width,nt.height,1,vt,Me)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,nt.width,nt.height,st.depth,vt,nt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,rt,nt.width,nt.height,st.depth,0,nt.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?Nt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,nt.width,nt.height,st.depth,vt,B,nt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ft,rt,nt.width,nt.height,st.depth,0,vt,B,nt.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{pt&&xt&&e.texStorage2D(s.TEXTURE_2D,Jt,rt,_t[0].width,_t[0].height);for(let ft=0,zt=_t.length;ft<zt;ft++)nt=_t[ft],R.format!==Ve?vt!==null?pt?Nt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,nt.width,nt.height,vt,nt.data):e.compressedTexImage2D(s.TEXTURE_2D,ft,rt,nt.width,nt.height,0,nt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?Nt&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,nt.width,nt.height,vt,B,nt.data):e.texImage2D(s.TEXTURE_2D,ft,rt,nt.width,nt.height,0,vt,B,nt.data)}else if(R.isDataArrayTexture)if(pt){if(xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Jt,rt,st.width,st.height,st.depth),Nt)if(R.layerUpdates.size>0){let ft=Vh(st.width,st.height,R.format,R.type);for(let zt of R.layerUpdates){let Zt=st.data.subarray(zt*ft/st.data.BYTES_PER_ELEMENT,(zt+1)*ft/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,zt,st.width,st.height,1,vt,B,Zt)}R.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,B,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,rt,st.width,st.height,st.depth,0,vt,B,st.data);else if(R.isData3DTexture)pt?(xt&&e.texStorage3D(s.TEXTURE_3D,Jt,rt,st.width,st.height,st.depth),Nt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,B,st.data)):e.texImage3D(s.TEXTURE_3D,0,rt,st.width,st.height,st.depth,0,vt,B,st.data);else if(R.isFramebufferTexture){if(xt)if(pt)e.texStorage2D(s.TEXTURE_2D,Jt,rt,st.width,st.height);else{let ft=st.width,zt=st.height;for(let Zt=0;Zt<Jt;Zt++)e.texImage2D(s.TEXTURE_2D,Zt,rt,ft,zt,0,vt,B,null),ft>>=1,zt>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in s){let ft=s.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),st.parentNode!==ft){ft.appendChild(st),f.add(R),ft.onpaint=zt=>{let Zt=zt.changedElements;for(let wt of f)Zt.includes(wt.image)&&(wt.needsUpdate=!0)},ft.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,st);else{let Zt=s.RGBA,wt=s.RGBA,Me=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Zt,wt,Me,st)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(_t.length>0){if(pt&&xt){let ft=Bt(_t[0]);e.texStorage2D(s.TEXTURE_2D,Jt,rt,ft.width,ft.height)}for(let ft=0,zt=_t.length;ft<zt;ft++)nt=_t[ft],pt?Nt&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,vt,B,nt):e.texImage2D(s.TEXTURE_2D,ft,rt,vt,B,nt);R.generateMipmaps=!1}else if(pt){if(xt){let ft=Bt(st);e.texStorage2D(s.TEXTURE_2D,Jt,rt,ft.width,ft.height)}Nt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,B,st)}else e.texImage2D(s.TEXTURE_2D,0,rt,vt,B,st);E(R)&&R.mipmapsAutoUpdate===!0&&M(ct),Mt.__version=gt.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function jt(N,R,q){if(R.image.length!==6)return;let ct=mt(N,R),ot=R.source;e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+q);let gt=n.get(ot);if(ot.version!==gt.__version||ct===!0){e.activeTexture(s.TEXTURE0+q);let Mt=re.getPrimaries(re.workingColorSpace),it=R.colorSpace===pi?null:re.getPrimaries(R.colorSpace),st=R.colorSpace===pi||Mt===it?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let vt=R.isCompressedTexture||R.image[0].isCompressedTexture,B=R.image[0]&&R.image[0].isDataTexture,rt=[];for(let wt=0;wt<6;wt++)!vt&&!B?rt[wt]=y(R.image[wt],!0,i.maxCubemapSize):rt[wt]=B?R.image[wt].image:R.image[wt],rt[wt]=Ut(R,rt[wt]);let nt=rt[0],_t=r.convert(R.format,R.colorSpace),pt=r.convert(R.type),xt=S(R.internalFormat,_t,pt,R.normalized,R.colorSpace),Nt=R.isVideoTexture!==!0,Jt=gt.__version===void 0||ct===!0,ft=ot.dataReady,zt=_(R,nt);at(s.TEXTURE_CUBE_MAP,R);let Zt;if(R.isDepthTexture){if(xt=x(R.format===Vi,R.type),Jt)if(Nt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,xt,nt.width,nt.height);else for(let wt=0;wt<6;wt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,xt,nt.width,nt.height,0,_t,pt,null)}else if(vt){Nt&&Jt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,zt,xt,nt.width,nt.height);for(let wt=0;wt<6;wt++){Zt=rt[wt].mipmaps;for(let Me=0;Me<Zt.length;Me++){let nn=Zt[Me];R.format!==Ve?_t!==null?Nt?ft&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Me,0,0,nn.width,nn.height,_t,nn.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Me,xt,nn.width,nn.height,0,nn.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Me,0,0,nn.width,nn.height,_t,pt,nn.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Me,xt,nn.width,nn.height,0,_t,pt,nn.data)}}}else{if(Zt=R.mipmaps,Nt&&Jt){Zt.length>0&&zt++;let wt=Bt(rt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,zt,xt,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(B){Nt?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,rt[wt].width,rt[wt].height,_t,pt,rt[wt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,xt,rt[wt].width,rt[wt].height,0,_t,pt,rt[wt].data);for(let Me=0;Me<Zt.length;Me++){let Zi=Zt[Me].image[wt].image;Nt?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Me+1,0,0,Zi.width,Zi.height,_t,pt,Zi.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Me+1,xt,Zi.width,Zi.height,0,_t,pt,Zi.data)}}else{Nt?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,_t,pt,rt[wt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,xt,_t,pt,rt[wt]);for(let Me=0;Me<Zt.length;Me++){let nn=Zt[Me];Nt?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Me+1,0,0,_t,pt,nn.image[wt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Me+1,xt,_t,pt,nn.image[wt])}}}E(R)&&R.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),gt.__version=ot.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function se(N,R,q,ct,ot,gt){let Mt=r.convert(q.format,q.colorSpace),it=r.convert(q.type),st=S(q.internalFormat,Mt,it,q.normalized,q.colorSpace),vt=n.get(R),B=n.get(q);if(B.__renderTarget=R,!vt.__hasExternalTextures){let rt=Math.max(1,R.width>>gt),nt=Math.max(1,R.height>>gt);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,gt,st,rt,nt,R.depth,0,Mt,it,null):e.texImage2D(ot,gt,st,rt,nt,0,Mt,it,null)}e.bindFramebuffer(s.FRAMEBUFFER,N),dt(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,ot,B.__webglTexture,0,fe(R)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,ot,B.__webglTexture,gt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function be(N,R,q){if(s.bindRenderbuffer(s.RENDERBUFFER,N),R.depthBuffer){let ct=R.depthTexture,ot=ct&&ct.isDepthTexture?ct.type:null,gt=x(R.stencilBuffer,ot),Mt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;dt(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe(R),gt,R.width,R.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe(R),gt,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,gt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,N)}else{let ct=R.textures;for(let ot=0;ot<ct.length;ot++){let gt=ct[ot],Mt=r.convert(gt.format,gt.colorSpace),it=r.convert(gt.type),st=S(gt.internalFormat,Mt,it,gt.normalized,gt.colorSpace);dt(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe(R),st,R.width,R.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe(R),st,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,st,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qt(N,R,q){let ct=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=n.get(R.depthTexture);ot.__renderTarget=R;let gt=ct?R.depthTexture.image[0]:R.depthTexture.image;(!ot.__webglTexture||gt.width!==R.width||gt.height!==R.height)&&(gt.width=R.width,gt.height=R.height,R.depthTexture.needsUpdate=!0),ct?et(R.depthTexture,0):Z(R.depthTexture,0);let Mt=ot.__webglTexture,it=fe(R),st=ct?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,vt=R.depthTexture.format===Vi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(R.depthTexture.format===ki)dt(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,st,Mt,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,vt,st,Mt,0);else if(R.depthTexture.format===Vi)dt(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,st,Mt,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,vt,st,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ue(N){let R=n.get(N),q=N.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==N.depthTexture){let ct=N.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ct){let ot=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ct.removeEventListener("dispose",ot)};ct.addEventListener("dispose",ot),R.__depthDisposeCallback=ot}R.__boundDepthTexture=ct}if(N.depthTexture&&!R.__autoAllocateDepthBuffer)if(q)for(let ct=0;ct<6;ct++)Qt(R.__webglFramebuffer[ct],N,ct);else N.texture.mipmaps.length>0?Qt(R.__webglFramebuffer[0],N,0):Qt(R.__webglFramebuffer,N,0);else if(q){R.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[ct]),R.__webglDepthbuffer[ct]===void 0)R.__webglDepthbuffer[ct]=s.createRenderbuffer(),be(R.__webglDepthbuffer[ct],N,!1);else{let ot=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=R.__webglDepthbuffer[ct];s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,gt)}}else if(N.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),be(R.__webglDepthbuffer,N,!1);else{let ot=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,gt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(N,R,q){let ct=n.get(N);R!==void 0&&se(ct.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&ue(N)}function Ie(N){let R=N.texture,q=n.get(N),ct=n.get(R);N.addEventListener("dispose",C),T(N);let ot=N.textures,gt=N.isWebGLCubeRenderTarget===!0,Mt=ot.length>1;if(Mt||(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=R.version,o.memory.textures++),gt){q.__webglFramebuffer=[];for(let it=0;it<6;it++)if(R.mipmaps.length>0){q.__webglFramebuffer[it]=[];for(let st=0;st<R.mipmaps.length;st++)q.__webglFramebuffer[it][st]=s.createFramebuffer()}else q.__webglFramebuffer[it]=s.createFramebuffer()}else{if(R.mipmaps.length>0){q.__webglFramebuffer=[];for(let it=0;it<R.mipmaps.length;it++)q.__webglFramebuffer[it]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let it=0,st=ot.length;it<st;it++){let vt=n.get(ot[it]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),o.memory.textures++)}if(N.samples>0&&dt(N)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let it=0;it<ot.length;it++){let st=ot[it];q.__webglColorRenderbuffer[it]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[it]);let vt=r.convert(st.format,st.colorSpace),B=r.convert(st.type),rt=S(st.internalFormat,vt,B,st.normalized,st.colorSpace,N.isXRRenderTarget===!0),nt=fe(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,rt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,q.__webglColorRenderbuffer[it])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),be(q.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(gt){e.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),at(s.TEXTURE_CUBE_MAP,R);for(let it=0;it<6;it++)if(R.mipmaps.length>0)for(let st=0;st<R.mipmaps.length;st++)se(q.__webglFramebuffer[it][st],N,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,st);else se(q.__webglFramebuffer[it],N,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);E(R)?M(s.TEXTURE_CUBE_MAP):R.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),e.unbindTexture()}else if(Mt){for(let it=0,st=ot.length;it<st;it++){let vt=ot[it],B=n.get(vt),rt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(rt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,B.__webglTexture),at(rt,vt),se(q.__webglFramebuffer,N,vt,s.COLOR_ATTACHMENT0+it,rt,0),E(vt)&&M(rt)}e.unbindTexture()}else{let it=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(it=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(it,ct.__webglTexture),at(it,R),R.mipmaps.length>0)for(let st=0;st<R.mipmaps.length;st++)se(q.__webglFramebuffer[st],N,R,s.COLOR_ATTACHMENT0,it,st);else se(q.__webglFramebuffer,N,R,s.COLOR_ATTACHMENT0,it,0);E(R)?M(it):R.mipmaps.length>0&&s.texParameteri(it,s.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),e.unbindTexture()}N.depthBuffer&&ue(N)}function V(N){let R=N.textures;for(let q=0,ct=R.length;q<ct;q++){let ot=R[q];if(E(ot)&&ot.mipmapsAutoUpdate===!0){let gt=b(N),Mt=n.get(ot).__webglTexture;e.bindTexture(gt,Mt),M(gt),e.unbindTexture()}}}let Ht=[];function Kt(N){if(N.samples>0){if(dt(N)===!1){let R=N.textures,q=N.width,ct=N.height,ot=s.COLOR_BUFFER_BIT,gt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(N),it=R.length>1;if(it)for(let vt=0;vt<R.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let vt=0;vt<R.length;vt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),it){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[vt]);let B=n.get(R[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,B,0)}s.blitFramebuffer(0,0,q,ct,0,0,q,ct,ot,s.NEAREST),l===!0&&(Ht.length=0,Ht.push(s.COLOR_ATTACHMENT0+vt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&Ht.push(gt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),it)for(let vt=0;vt<R.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[vt]);let B=n.get(R[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,B,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let R=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function fe(N){return Math.min(i.maxSamples,N.samples)}function dt(N){let R=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ge(N){let R=o.render.frame;h.get(N)!==R&&(h.set(N,R),N.update())}function Ut(N,R){let q=N.colorSpace,ct=N.format,ot=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==Zr&&q!==pi&&(re.getTransfer(q)===xe?(ct!==Ve||ot!==yn)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",q)),R}function Bt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=tt,this.resetTextureUnits=F,this.getTextureUnits=k,this.setTextureUnits=$,this.setTexture2D=Z,this.setTexture2DArray=j,this.setTexture3D=lt,this.setTextureCube=et,this.rebindTextures=Oe,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=se,this.useMultisampledRTT=dt,this.dispose=U}function S_(s,t){function e(n,i=pi){let r,o=re.getTransfer(i);if(n===yn)return s.UNSIGNED_BYTE;if(n===nl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===il)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ah)return s.BYTE;if(n===Rh)return s.SHORT;if(n===Sr)return s.UNSIGNED_SHORT;if(n===el)return s.INT;if(n===ni)return s.UNSIGNED_INT;if(n===Dn)return s.FLOAT;if(n===An)return s.HALF_FLOAT;if(n===Ih)return s.ALPHA;if(n===Lh)return s.RGB;if(n===Ve)return s.RGBA;if(n===ki)return s.DEPTH_COMPONENT;if(n===Vi)return s.DEPTH_STENCIL;if(n===br)return s.RED;if(n===vo)return s.RED_INTEGER;if(n===us)return s.RG;if(n===sl)return s.RG_INTEGER;if(n===rl)return s.RGBA_INTEGER;if(n===_o||n===yo||n===Mo||n===So)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ol||n===al||n===ll||n===cl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hl||n===ul||n===fl||n===dl||n===pl||n===bo||n===ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hl||n===ul)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===dl)return r.COMPRESSED_R11_EAC;if(n===pl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===bo)return r.COMPRESSED_RG11_EAC;if(n===ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===gl||n===xl||n===vl||n===_l||n===yl||n===Ml||n===Sl||n===bl||n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_l)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===El)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Al)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pl||n===Il||n===Ll)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Pl)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dl||n===Nl||n===wo||n===Ul)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new co(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Te({vertexShader:b_,fragmentShader:w_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},su=class extends bi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,v=typeof XRWebGLBinding<"u",m=new iu,g={},y=e.getContextAttributes(),E=null,M=null,b=[],S=[],x=new Gt,_=null,T=null,w=new vn;w.viewport=new ee;let A=new vn;A.viewport=new ee;let C=[w,A],L=new Ja,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=b[W];return Z===void 0&&(Z=new fr,b[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=b[W];return Z===void 0&&(Z=new fr,b[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=b[W];return Z===void 0&&(Z=new fr,b[W]=Z),Z.getHandSpace()};function O(W){let Z=S.indexOf(W.inputSource);if(Z===-1)return;let j=b[Z];j!==void 0&&(j.update(W.inputSource,W.frame,c||o),j.dispatchEvent({type:W.type,data:W.inputSource}))}function z(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",X);for(let W=0;W<b.length;W++){let Z=S[W];Z!==null&&(S[W]=null,b[W].disconnect(Z))}I=null,U=null,m.reset();for(let W in g)delete g[W];if(t.setRenderTarget(E),d=null,u=null,f=null,i=null,M=null,tt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(x.width,x.height,!1),T!==null){let W=T.camera;W.fov=T.fov,W.zoom=T.zoom,W.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",z),i.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,lt=null,et=null;y.depth&&(et=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=y.stencil?Vi:ki,lt=y.stencil?Fs:ni);let ut={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ut),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Tn(u.textureWidth,u.textureHeight,{format:Ve,type:yn,depthTexture:new Hi(u.textureWidth,u.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let j={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Tn(d.framebufferWidth,d.framebufferHeight,{format:Ve,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(W){for(let Z=0;Z<W.removed.length;Z++){let j=W.removed[Z],lt=S.indexOf(j);lt>=0&&(S[lt]=null,b[lt].disconnect(j))}for(let Z=0;Z<W.added.length;Z++){let j=W.added[Z],lt=S.indexOf(j);if(lt===-1){for(let ut=0;ut<b.length;ut++)if(ut>=S.length){S.push(j),lt=ut;break}else if(S[ut]===null){S[ut]=j,lt=ut;break}if(lt===-1)break}let et=b[lt];et&&et.connect(j)}}function D(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let Z=W.near,j=W.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(j=m.depthFar)),L.near=A.near=w.near=Z,L.far=A.far=w.far=j,(I!==L.near||U!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),I=L.near,U=L.far),L.layers.mask=W.layers.mask|6,w.layers.mask=L.layers.mask&-5,A.layers.mask=L.layers.mask&-3;let lt=W.parent,et=L.cameras;D(L,lt);for(let ut=0;ut<et.length;ut++)D(et[ut],lt);L.projectionMatrix.copy(w.projectionMatrix),L.projectionMatrixInverse.copy(w.projectionMatrixInverse),T===null&&W.isPerspectiveCamera&&(T={camera:W,fov:W.fov,zoom:W.zoom}),F(W,L,lt)};function F(W,Z,j){j===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(j.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Pa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(W){return g[W]};let k=null;function $(W,Z){if(h=Z.getViewerPose(c||o),p=Z,h!==null){let j=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let lt=!1;j.length!==L.cameras.length&&(L.cameras.length=0,lt=!0);for(let Q=0;Q<j.length;Q++){let at=j[Q],mt=null;if(d!==null)mt=d.getViewport(at);else{let Dt=f.getViewSubImage(u,at);mt=Dt.viewport,Q===0&&(t.setRenderTargetTextures(M,Dt.colorTexture,Dt.depthStencilTexture),t.setRenderTarget(M))}let Tt=C[Q];Tt===void 0&&(Tt=new vn,Tt.layers.enable(Q),Tt.viewport=new ee,C[Q]=Tt),Tt.matrix.fromArray(at.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(at.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(mt.x,mt.y,mt.width,mt.height),Q===0&&(L.matrix.copy(Tt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),lt===!0&&L.cameras.push(Tt)}let et=i.enabledFeatures;if(et&&et.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let Q=f.getDepthInformation(j[0]);Q&&Q.isValid&&Q.texture&&m.init(Q,i.renderState)}if(et&&et.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let Q=0;Q<j.length;Q++){let at=j[Q].camera;if(at){let mt=g[at];mt||(mt=new co,g[at]=mt);let Tt=f.getCameraImage(at);mt.sourceTexture=Tt}}}}for(let j=0;j<b.length;j++){let lt=S[j],et=b[j];lt!==null&&et!==void 0&&et.update(lt,Z,c||o)}k&&k(W,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),p=null}let tt=new Cd;tt.setAnimationLoop($),this.setAnimationLoop=function(W){k=W},this.dispose=function(){}}},E_=new Ft,Bd=new Vt;Bd.set(-1,0,0,0,1,0,0,0,1);function T_(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,kh(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,E,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&d(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===hn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===hn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),E=y.envMap,M=y.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=E*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===hn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function A_(s,t,e,n){let i={},r={};function o(y,E){let M=E.program;n.uniformBlockBinding(y,M,i[y.id])}function a(y,E){let M=i[y.id];M===void 0&&(p(y),M=l(y),i[y.id]=M,y.addEventListener("dispose",m));let b=E.program;n.updateUBOMapping(y,b);let S=t.render.frame;r[y.id]!==S&&(c(y),r[y.id]=S)}function l(y){let E=s.createBuffer(),M=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,M,b),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(y){let E=i[y.id],M=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let S=0,x=M.length;S<x;S++){let _=M[S];if(Array.isArray(_))for(let T=0,w=_.length;T<w;T++)h(_[T],S,T,b);else h(_,S,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,E,M,b){if(u(y,E,M,b)===!0){let S=y.__offset,x=y.value;if(Array.isArray(x)){let _=0;for(let T=0;T<x.length;T++){let w=x[T],A=v(w,!0);f(w,y.__data,_),_+=A.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,S,y.__data)}}function f(y,E,M){typeof y=="number"||typeof y=="boolean"?E[M]=y:y.isMatrix3?(E[M]=y.elements[0],E[M+1]=y.elements[1],E[M+2]=y.elements[2],E[M+3]=0,E[M+4]=y.elements[3],E[M+5]=y.elements[4],E[M+6]=y.elements[5],E[M+7]=0,E[M+8]=y.elements[6],E[M+9]=y.elements[7],E[M+10]=y.elements[8],E[M+11]=0):ArrayBuffer.isView(y)?E.set(y.subarray(0,E.length-M),M):y.toArray(E,M)}function u(y,E,M,b){let S=y.value,x=E+"_"+M;if(Array.isArray(S)){b[x]===void 0&&(b[x]=[]);let _=b[x],T=!1;for(let w=0;w<S.length;w++)d(S[w],_,w)===!0&&(T=!0);return T}return d(S,b,x)}function d(y,E,M){if(E[M]===void 0)return typeof y=="number"||typeof y=="boolean"?E[M]=y:ArrayBuffer.isView(y)?E[M]=y.slice():E[M]=y.clone(),!0;{let b=E[M];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return E[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(b.equals(y)===!1)return b.copy(y),!0}}return!1}function p(y){let E=y.uniforms,M=0,b=16;for(let x=0,_=E.length;x<_;x++){let T=Array.isArray(E[x])?E[x]:[E[x]];for(let w=0,A=T.length;w<A;w++){let C=T[w],L=Array.isArray(C.value)?C.value:[C.value],I=Array.isArray(E[x])||Array.isArray(C.value),U=M;for(let z=0,X=L.length;z<X;z++){let D=L[z],F=v(D,I),k=M%b,$=k%F.boundary,tt=k+$;M+=$,tt!==0&&b-tt<F.storage&&(M+=b-tt),z===0&&(U=M),M+=F.storage}let O=C.type==="int"?Int32Array:C.type==="uint"?Uint32Array:Float32Array;C.__data=new O((M-U)/Float32Array.BYTES_PER_ELEMENT),C.__offset=U}}let S=M%b;return S>0&&(M+=b-S),y.__size=M,y.__cache={},this}function v(y,E){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",y),E===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(y){let E=y.target;E.removeEventListener("dispose",m),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function g(){for(let y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:o,update:a,dispose:g}}var R_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wi=null;function C_(){return wi===null&&(wi=new _n(R_,16,16,us,An),wi.name="DFG_LUT",wi.minFilter=Ee,wi.magFilter=Ee,wi.wrapS=In,wi.wrapT=In,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var Bl=class{constructor(t={}){let{canvas:e=Qf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=yn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=d,m=new Set([rl,sl,vo]),g=new Set([yn,ni,Sr,Fs,nl,il]),y=new Uint32Array(4),E=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},b=null,S=null,x=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,A=!1,C=null,L=null,I=null,U=null;this._outputColorSpace=ln;let O=0,z=0,X=null,D=-1,F=null,k=new ee,$=new ee,tt=null,W=new Rt(0),Z=0,j=e.width,lt=e.height,et=1,ut=null,bt=null,Q=new ee(0,0,j,lt),at=new ee(0,0,j,lt),mt=!1,Tt=new di,Dt=new io,$t=!1,jt=!1,se=new Ft,be=new H,Qt=new ee,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function Ie(){return X===null?et:1}let V=n;function Ht(P,G){return e.getContext(P,G)}let Kt,fe,dt,Ge,Ut,Bt,N,R,q,ct,ot,gt,Mt,it,st,vt,B,rt,nt,_t,pt,xt,Nt;try{let P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),V===null){let G="webgl2";if(V=Ht(G,P),V===null)throw Ht(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(P){throw e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Wt("WebGLRenderer: "+P.message),P}function Jt(){Kt=new kx(V),Kt.init(),pt=new S_(V,Kt),fe=new Cx(V,Kt,t,pt),dt=new y_(V,Kt),fe.reversedDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),L=V.createFramebuffer(),I=V.createFramebuffer(),U=V.createFramebuffer(),Ge=new Vx(V),Ut=new o_,Bt=new M_(V,Kt,dt,Ut,fe,pt,Ge),N=new Bx(w),R=new X0(V),xt=new Ax(V,R),q=new Hx(V,R,Ge,xt),ct=new Xx(V,q,R,xt,Ge),rt=new Wx(V,fe,Bt),st=new Px(Ut),ot=new r_(w,N,Kt,fe,xt,st),gt=new T_(w,Ut),Mt=new l_,it=new p_(Kt),B=new Tx(w,N,dt,ct,p,l),vt=new __(w,ct,fe),Nt=new A_(V,Ge,fe,dt),nt=new Rx(V,Kt,Ge),_t=new Gx(V,Kt,Ge),Ge.programs=ot.programs,w.capabilities=fe,w.extensions=Kt,w.properties=Ut,w.renderLists=Mt,w.shadowMap=vt,w.state=dt,w.info=Ge}v!==yn&&(T=new Yx(v,e.width,e.height,a,i,r));let ft=new su(w,V);this.xr=ft,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let P=Kt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Kt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(P){P!==void 0&&(et=P,this.setSize(j,lt,!1))},this.getSize=function(P){return P.set(j,lt)},this.setSize=function(P,G,K=!0){if(ft.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}j=P,lt=G,e.width=Math.floor(P*et),e.height=Math.floor(G*et),K===!0&&(e.style.width=P+"px",e.style.height=G+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(j*et,lt*et).floor()},this.setDrawingBufferSize=function(P,G,K){j=P,lt=G,et=K,e.width=Math.floor(P*K),e.height=Math.floor(G*K),this.setViewport(0,0,P,G)},this.setEffects=function(P){if(v===yn){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let G=0;G<P.length;G++)if(P[G].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(k)},this.getViewport=function(P){return P.copy(Q)},this.setViewport=function(P,G,K,Y){P.isVector4?Q.set(P.x,P.y,P.z,P.w):Q.set(P,G,K,Y),dt.viewport(k.copy(Q).multiplyScalar(Ie()).round())},this.getScissor=function(P){return P.copy(at)},this.setScissor=function(P,G,K,Y){P.isVector4?at.set(P.x,P.y,P.z,P.w):at.set(P,G,K,Y),dt.scissor($.copy(at).multiplyScalar(Ie()).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(P){dt.setScissorTest(mt=P)},this.setOpaqueSort=function(P){ut=P},this.setTransparentSort=function(P){bt=P},this.getClearColor=function(P){return P.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(P=!0,G=!0,K=!0){let Y=0;if(P){let J=!1;if(X!==null){let St=X.texture.format;J=m.has(St)}if(J){let St=X.texture.type,Ct=g.has(St),yt=B.getClearColor(),At=B.getClearAlpha(),Lt=yt.r,Yt=yt.g,oe=yt.b;Ct?(y[0]=Lt,y[1]=Yt,y[2]=oe,y[3]=At,V.clearBufferuiv(V.COLOR,0,y)):(E[0]=Lt,E[1]=Yt,E[2]=oe,E[3]=At,V.clearBufferiv(V.COLOR,0,E))}else Y|=V.COLOR_BUFFER_BIT}G&&(Y|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),C=P},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),B.dispose(),Mt.dispose(),it.dispose(),Bt.dispose(),Ut.dispose(),N.dispose(),ct.dispose(),q.dispose(),xt.dispose(),Nt.dispose(),ot.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Lu),ft.removeEventListener("sessionend",Du),Ms.stop()};function zt(P){P.preventDefault(),Oh("WebGLRenderer: Context Lost."),A=!0}function Zt(){Oh("WebGLRenderer: Context Restored."),A=!1;let P=Ge.autoReset,G=vt.enabled,K=vt.autoUpdate,Y=vt.needsUpdate,J=vt.type;Jt(),Ge.autoReset=P,vt.enabled=G,vt.autoUpdate=K,vt.needsUpdate=Y,vt.type=J}function wt(P){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Me(P){let G=P.target;G.removeEventListener("dispose",Me),nn(G)}function nn(P){Zi(P),Ut.remove(P)}function Zi(P){let G=Ut.get(P).programs;G!==void 0&&(G.forEach(function(K){ot.releaseProgram(K)}),P.isShaderMaterial&&ot.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,K,Y,J,St){G===null&&(G=ue);let Ct=J.isMesh&&J.matrixWorld.determinantAffine()<0,yt=Yp(P,G,K,Y,J);dt.setMaterial(Y,Ct);let At=K.index,Lt=1;if(Y.wireframe===!0){if(At=q.getWireframeAttribute(K),At===void 0)return;Lt=2}let Yt=K.drawRange,oe=K.attributes.position,Pt=Yt.start*Lt,ae=(Yt.start+Yt.count)*Lt;St!==null&&(Pt=Math.max(Pt,St.start*Lt),ae=Math.min(ae,(St.start+St.count)*Lt)),At!==null?(Pt=Math.max(Pt,0),ae=Math.min(ae,At.count)):oe!=null&&(Pt=Math.max(Pt,0),ae=Math.min(ae,oe.count));let qe=ae-Pt;if(qe<0||qe===1/0)return;xt.setup(J,Y,yt,K,At);let Ae,we=nt;if(At!==null&&(Ae=R.get(At),we=_t,we.setIndex(Ae)),J.isMesh)Y.wireframe===!0?(dt.setLineWidth(Y.wireframeLinewidth*Ie()),we.setMode(V.LINES)):we.setMode(V.TRIANGLES);else if(J.isLine){let dn=Y.linewidth;dn===void 0&&(dn=1),dt.setLineWidth(dn*Ie()),J.isLineSegments?we.setMode(V.LINES):J.isLineLoop?we.setMode(V.LINE_LOOP):we.setMode(V.LINE_STRIP)}else J.isPoints?we.setMode(V.POINTS):J.isSprite&&we.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))we.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let dn=J._multiDrawStarts,It=J._multiDrawCounts,wn=J._multiDrawCount,pe=At?R.get(At).bytesPerElement:1,Ss=Ut.get(Y).currentProgram.getUniforms();for(let pn=0;pn<wn;pn++)Ss.setValue(V,"_gl_DrawID",pn),we.render(dn[pn]/pe,It[pn])}else if(J.isInstancedMesh)we.renderInstances(Pt,qe,J.count);else if(K.isInstancedBufferGeometry){let dn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,It=Math.min(K.instanceCount,dn);we.renderInstances(Pt,qe,It)}else we.render(Pt,qe)};function Iu(P,G,K,Y){C!==null&&P.isNodeMaterial&&C.setObject(Y,P),$t===!0&&st.setState(P,K,!1),P.transparent===!0&&P.side===Ne&&P.forceSinglePass===!1?(P.side=hn,P.needsUpdate=!0,Br(P,G,Y),P.side=cs,P.needsUpdate=!0,Br(P,G,Y),P.side=Ne):Br(P,G,Y)}this.compile=function(P,G,K=null){K===null&&(K=P),C!==null&&C.renderStart(P,G,K),S=it.get(K),S.init(G),_.push(S),K.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),P!==K&&P.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),S.setupLights(),C!==null&&C.updateLights(S.state.lightsArray),jt=this.localClippingEnabled,$t=st.init(this.clippingPlanes,jt),$t===!0&&st.setGlobalState(this.clippingPlanes,G),C!==null&&vt.render(S.state.shadowsArray,K,G);let Y=new Set;return P.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let St=J.material;if(St)if(Array.isArray(St))for(let Ct=0;Ct<St.length;Ct++){let yt=St[Ct];Iu(yt,K,G,J),Y.add(yt)}else Iu(St,K,G,J),Y.add(St)}),S=_.pop(),C!==null&&C.renderEnd(),Y},this.compileAsync=function(P,G,K=null){let Y=this.compile(P,G,K);return new Promise(J=>{function St(){if(Y.forEach(function(Ct){let At=Ut.get(Ct).currentProgram;(At===void 0||At.isReady())&&Y.delete(Ct)}),Y.size===0){J(P);return}setTimeout(St,10)}Kt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Cc=null;function Xp(P){Cc&&Cc(P)}function Lu(){Ms.stop()}function Du(){Ms.start()}let Ms=new Cd;Ms.setAnimationLoop(Xp),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(P){Cc=P,ft.setAnimationLoop(P),P===null?Ms.stop():Ms.start()},ft.addEventListener("sessionstart",Lu),ft.addEventListener("sessionend",Du),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;C!==null&&C.renderStart(P,G);let K=ft.enabled===!0&&ft.isPresenting===!0,Y=T!==null&&(X===null||K)&&T.begin(w,X);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(G),G=ft.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,G,X),S=it.get(P,_.length),S.init(G),S.state.textureUnits=Bt.getTextureUnits(),_.push(S),se.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?Dt.setFromArrayCamera(G):Tt.setFromProjectionMatrix(se,$n,G.reversedDepth),jt=this.localClippingEnabled,$t=st.init(this.clippingPlanes,jt),b=Mt.get(P,x.length),b.init(),x.push(b),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){let Ct=w.xr.getDepthSensingMesh();Ct!==null&&Pc(Ct,G,-1/0,w.sortObjects)}Pc(P,G,0,w.sortObjects),b.finish(),C!==null&&C.updateLights(S.state.lightsArray),w.sortObjects===!0&&b.sort(ut,bt),Oe=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Oe&&B.addToRenderList(b,P),this.info.autoReset===!0&&this.info.reset(),$t===!0&&st.beginShadows();let J=S.state.shadowsArray;if(vt.render(J,P,G),$t===!0&&st.endShadows(),(Y&&T.hasRenderPass())===!1){let Ct=b.opaque,yt=b.transmissive;if(S.setupLights(),G.isArrayCamera){let At=G.cameras;if(yt.length>0)for(let Lt=0,Yt=At.length;Lt<Yt;Lt++){let oe=At[Lt];Uu(Ct,yt,P,oe)}Oe&&B.render(P);for(let Lt=0,Yt=At.length;Lt<Yt;Lt++){let oe=At[Lt];Nu(b,P,oe,oe.viewport)}}else yt.length>0&&Uu(Ct,yt,P,G),Oe&&B.render(P),Nu(b,P,G)}X!==null&&z===0&&(Bt.updateMultisampleRenderTarget(X),Bt.updateRenderTargetMipmap(X)),Y&&T.end(w),P.isScene===!0&&P.onAfterRender(w,P,G),xt.resetDefaultState(),D=-1,F=null,_.pop(),_.length>0?(S=_[_.length-1],Bt.setTextureUnits(S.state.textureUnits),$t===!0&&st.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,C!==null&&C.renderEnd()};function Pc(P,G,K,Y){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)K=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)S.pushLight(P),P.castShadow&&S.pushShadow(P);else if(P.isSprite){let Ct=G.isArrayCamera?Dt:Tt;if(!P.frustumCulled||P.intersectsFrustum(Ct)){Y&&Qt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(se);let yt=ct.update(P),At=P.material;At.visible&&b.push(P,yt,At,K,Qt.z,null,G)}}else if(P.isMesh||P.isLine||P.isPoints){let Ct=G.isArrayCamera?Dt:Tt;if(!P.frustumCulled||P.intersectsFrustum(Ct)){let yt=ct.update(P),At=P.material;if(Y&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Qt.copy(P.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Qt.copy(yt.boundingSphere.center)),Qt.applyMatrix4(P.matrixWorld).applyMatrix4(se)),Array.isArray(At)){let Lt=yt.groups;for(let Yt=0,oe=Lt.length;Yt<oe;Yt++){let Pt=Lt[Yt],ae=At[Pt.materialIndex];ae&&ae.visible&&b.push(P,yt,ae,K,Qt.z,Pt,G)}}else At.visible&&b.push(P,yt,At,K,Qt.z,null,G)}}}let St=P.children;for(let Ct=0,yt=St.length;Ct<yt;Ct++)Pc(St[Ct],G,K,Y)}function Nu(P,G,K,Y){let{opaque:J,transmissive:St,transparent:Ct}=P;S.setupLightsView(K),$t===!0&&st.setGlobalState(w.clippingPlanes,K),Y&&dt.viewport(k.copy(Y)),J.length>0&&qo(J,G,K),St.length>0&&qo(St,G,K),Ct.length>0&&qo(Ct,G,K),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Uu(P,G,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Y.id]===void 0){let Pt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Y.id]=new Tn(1,1,{generateMipmaps:!0,type:Pt?An:yn,minFilter:Xn,samples:Math.max(4,fe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let St=S.state.transmissionRenderTarget[Y.id],Ct=Y.viewport||k;St.setSize(Ct.z*w.transmissionResolutionScale,Ct.w*w.transmissionResolutionScale);let yt=w.getRenderTarget(),At=w.getActiveCubeFace(),Lt=w.getActiveMipmapLevel();w.setRenderTarget(St),w.getClearColor(W),Z=w.getClearAlpha(),Z<1&&w.setClearColor(16777215,.5),w.clear(),Oe&&B.render(K);let Yt=w.toneMapping;w.toneMapping=ei;let oe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),S.setupLightsView(Y),$t===!0&&st.setGlobalState(w.clippingPlanes,Y),qo(P,K,Y),Bt.updateMultisampleRenderTarget(St),Bt.updateRenderTargetMipmap(St),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ae=0,qe=G.length;ae<qe;ae++){let Ae=G[ae],{object:we,geometry:dn,material:It,group:wn}=Ae;if(It.side===Ne&&we.layers.test(Y.layers)){let pe=It.side;It.side=hn,It.needsUpdate=!0,Fu(we,K,Y,dn,It,wn),It.side=pe,It.needsUpdate=!0,Pt=!0}}Pt===!0&&(Bt.updateMultisampleRenderTarget(St),Bt.updateRenderTargetMipmap(St))}w.setRenderTarget(yt,At,Lt),w.setClearColor(W,Z),oe!==void 0&&(Y.viewport=oe),w.toneMapping=Yt}function qo(P,G,K){let Y=G.isScene===!0?G.overrideMaterial:null;for(let J=0,St=P.length;J<St;J++){let Ct=P[J],{object:yt,geometry:At,group:Lt}=Ct,Yt=Ct.material;Yt.allowOverride===!0&&Y!==null&&(Yt=Y),yt.layers.test(K.layers)&&Fu(yt,G,K,At,Yt,Lt)}}function Fu(P,G,K,Y,J,St){C!==null&&J.isNodeMaterial&&C.setObject(P,J),P.onBeforeRender(w,G,K,Y,J,St),P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),J.onBeforeRender(w,G,K,Y,P,St),J.transparent===!0&&J.side===Ne&&J.forceSinglePass===!1?(J.side=hn,J.needsUpdate=!0,w.renderBufferDirect(K,G,Y,J,P,St),J.side=cs,J.needsUpdate=!0,w.renderBufferDirect(K,G,Y,J,P,St),J.side=Ne):w.renderBufferDirect(K,G,Y,J,P,St),P.onAfterRender(w,G,K,Y,J,St)}function Ou(P){let G=0;for(let K of P)K.texture!==null&&G++;return G}function Br(P,G,K){G.isScene!==!0&&(G=ue);let Y=Ut.get(P),J=S.state.lights,St=S.state.shadowsArray,Ct=J.state.version,yt=ot.getParameters(P,J.state,St,G,K,S.state.lightProbeGridArray),At=ot.getProgramCacheKey(yt),Lt=Y.programs;Y.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?G.environment:null,Y.fog=G.fog;let Yt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;Y.envMap=N.get(P.envMap||Y.environment,Yt),Y.envMapRotation=Y.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,Lt===void 0&&(P.addEventListener("dispose",Me),Lt=new Map,Y.programs=Lt,Y.programVariants=new Map);let oe=Lt.get(At);if(oe!==void 0){if(Y.currentProgram===oe&&Y.lightsStateVersion===Ct)return Bu(P,yt),oe}else yt.uniforms=ot.getUniforms(P),C!==null&&P.isNodeMaterial&&C.build(P,K,yt),P.onBeforeCompile(yt,w),oe=ot.acquireProgram(yt,At),Lt.set(At,oe),Y.uniforms=yt.uniforms;let Pt=Y.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Pt.clippingPlanes=st.uniform),Bu(P,yt),Y.needsLights=Jp(P),Y.lightsStateVersion=Ct,Y.needsLights&&(Pt.ambientLightColor.value=J.state.ambient,Pt.lightProbe.value=J.state.probe,Pt.sunLights.value=J.state.sun,Pt.sunLightShadows.value=J.state.sunShadow,Pt.directionalLights.value=J.state.directional,Pt.directionalLightShadows.value=J.state.directionalShadow,Pt.spotLights.value=J.state.spot,Pt.spotLightShadows.value=J.state.spotShadow,Pt.rectAreaLights.value=J.state.rectArea,Pt.ltc_1.value=J.state.rectAreaLTC1,Pt.ltc_2.value=J.state.rectAreaLTC2,Pt.pointLights.value=J.state.point,Pt.pointLightShadows.value=J.state.pointShadow,Pt.hemisphereLights.value=J.state.hemi,Pt.sunShadowMatrix.value=J.state.sunShadowMatrix,Pt.sunShadowCascade.value=J.state.sunShadowCascade,Pt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Pt.spotLightMatrix.value=J.state.spotLightMatrix,Pt.spotLightMap.value=J.state.spotLightMap,Pt.pointShadowMatrix.value=J.state.pointShadowMatrix),Y.numLightProbeGrids=Ou(S.state.lightProbeGridArray),Y.currentProgram=oe,Y.uniformsList=null,oe}function qp(P,G,K,Y,J){let St=Ut.get(P),Ct=St.currentProgram.id+","+Y+","+J,yt=St.programVariants.get(Ct);return yt===void 0?(yt=Br(P,G,K),St.programVariants.set(Ct,yt)):(St.currentProgram=yt,St.uniformsList=null,St.outputColorSpace=Y,St.toneMapping=J),yt}function zu(P){if(P.uniformsList===null){let G=P.currentProgram.getUniforms();P.uniformsList=wr.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function Bu(P,G){let K=Ut.get(P);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Yp(P,G,K,Y,J){G.isScene!==!0&&(G=ue),Bt.resetTextureUnits();let St=G.fog,Ct=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?G.environment:null,yt=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:re.workingColorSpace,At=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Lt=N.get(Y.envMap||Ct,At),Yt=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,oe=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pt=!!K.morphAttributes.position,ae=!!K.morphAttributes.normal,qe=!!K.morphAttributes.color,Ae=ei;Y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ae=w.toneMapping);let we=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,dn=we!==void 0?we.length:0,It=Ut.get(Y),wn=S.state.lights;if($t===!0&&(jt===!0||P!==F)){let Be=P===F&&Y.id===D;st.setState(Y,P,Be)}let pe=!1,Ss=!1;Y.version===It.__version?It.needsLights&&It.lightsStateVersion!==wn.state.version||J.isBatchedMesh&&It.batching===!1||!J.isBatchedMesh&&It.batching===!0||J.isBatchedMesh&&It.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&It.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&It.instancing===!1||!J.isInstancedMesh&&It.instancing===!0||J.isSkinnedMesh&&It.skinning===!1||!J.isSkinnedMesh&&It.skinning===!0||J.isInstancedMesh&&It.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&It.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&It.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&It.instancingMorph===!1&&J.morphTexture!==null||It.envMap!==Lt||Y.fog===!0&&It.fog!==St||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==st.numPlanes||It.numIntersection!==st.numIntersection)||It.vertexAlphas!==Yt||It.vertexTangents!==oe||It.morphTargets!==Pt||It.morphNormals!==ae||It.morphColors!==qe||It.morphTargetsCount!==dn||It.numLightProbeGrids!==Ou(S.state.lightProbeGridArray)?pe=!0:(It.outputColorSpace!==yt||It.toneMapping!==Ae)&&(Ss=!0):(pe=!0,It.__version=Y.version);let pn=It.currentProgram;(pe===!0||Ss===!0)&&(pn=Ss===!0?qp(Y,G,J,yt,Ae):Br(Y,G,J),C&&Y.isNodeMaterial&&C.onUpdateProgram(Y,pn,It));let Yo=!1,Ji=!1,bs=!1,de=pn.getUniforms(),an=It.uniforms;if(dt.useProgram(pn.program)&&(Yo=!0,Ji=!0,bs=!0),Y.id!==D&&(D=Y.id,Ji=!0),Yo||F!==P){dt.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),de.setValue(V,"projectionMatrix",P.projectionMatrix),de.setValue(V,"viewMatrix",P.matrixWorldInverse);let sn=de.map.cameraPosition;sn!==void 0&&sn.setValue(V,be.setFromMatrixPosition(P.matrixWorld)),fe.logarithmicDepthBuffer&&de.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&de.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),F!==P&&(F=P,Ji=!0,bs=!0)}if(It.needsLights&&(wn.state.sunShadowMap.length>0&&de.setValue(V,"sunShadowMap",wn.state.sunShadowMap,Bt),wn.state.directionalShadowMap.length>0&&de.setValue(V,"directionalShadowMap",wn.state.directionalShadowMap,Bt),wn.state.spotShadowMap.length>0&&de.setValue(V,"spotShadowMap",wn.state.spotShadowMap,Bt),wn.state.pointShadowMap.length>0&&de.setValue(V,"pointShadowMap",wn.state.pointShadowMap,Bt)),J.isSkinnedMesh){de.setOptional(V,J,"bindMatrix"),de.setOptional(V,J,"bindMatrixInverse");let Be=J.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),de.setValue(V,"boneTexture",Be.boneTexture,Bt))}J.isBatchedMesh&&(de.setOptional(V,J,"batchingTexture"),de.setValue(V,"batchingTexture",J._matricesTexture,Bt),de.setOptional(V,J,"batchingIdTexture"),de.setValue(V,"batchingIdTexture",J._indirectTexture,Bt),de.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&de.setValue(V,"batchingColorTexture",J._colorsTexture,Bt));let li=K.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&rt.update(J,K,pn),(Ji||It.receiveShadow!==J.receiveShadow)&&(It.receiveShadow=J.receiveShadow,de.setValue(V,"receiveShadow",J.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&G.environment!==null&&(an.envMapIntensity.value=G.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=C_()),Ji){if(de.setValue(V,"toneMappingExposure",w.toneMappingExposure),It.needsLights&&Zp(an,bs),St&&Y.fog===!0&&gt.refreshFogUniforms(an,St),gt.refreshMaterialUniforms(an,Y,et,lt,S.state.transmissionRenderTarget[P.id]),It.needsLights&&It.numLightProbeGrids>0){let Be=M,sn=0;for(let Li of S.state.lightProbeGridArray)Li.texture!==null&&(Be.textures[sn]=Li.texture,Be.min[sn]=Li.boundingBox.min,Be.max[sn]=Li.boundingBox.max,Be.resolution[sn]=Li.resolution,sn++);for(let Li in Be)Be[Li].length=sn;an.probesSH.value=Be.textures,an.probesMin.value=Be.min,an.probesMax.value=Be.max,an.probesResolution.value=Be.resolution}wr.upload(V,zu(It),an,Bt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(wr.upload(V,zu(It),an,Bt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&de.setValue(V,"center",J.center),de.setValue(V,"modelViewMatrix",J.modelViewMatrix),de.setValue(V,"normalMatrix",J.normalMatrix),de.setValue(V,"modelMatrix",J.matrixWorld),Y.uniformsGroups!==void 0){let Be=Y.uniformsGroups;for(let sn=0,Li=Be.length;sn<Li;sn++){let Hu=Be[sn];Nt.update(Hu,pn),Nt.bind(Hu,pn)}}return pn}function Zp(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.sunLights.needsUpdate=G,P.sunLightShadows.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function Jp(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(P,G,K){let Y=Ut.get(P);Y.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Ut.get(P.texture).__webglTexture=G,Ut.get(P.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,G){let K=Ut.get(P);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,K=0){X=P,O=G,z=K;let Y=null,J=!1,St=!1;if(P){let yt=Ut.get(P);if(yt.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(V.FRAMEBUFFER,yt.__webglFramebuffer),k.copy(P.viewport),$.copy(P.scissor),tt=P.scissorTest,dt.viewport(k),dt.scissor($),dt.setScissorTest(tt),D=-1;return}else if(yt.__webglFramebuffer===void 0)Bt.setupRenderTarget(P);else if(yt.__hasExternalTextures)Bt.rebindTextures(P,Ut.get(P.texture).__webglTexture,Ut.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Yt=P.depthTexture;if(yt.__boundDepthTexture!==Yt){if(Yt!==null&&Ut.has(Yt)&&(P.width!==Yt.image.width||P.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(P)}}let At=P.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(St=!0);let Lt=Ut.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Lt[G])?Y=Lt[G][K]:Y=Lt[G],J=!0):P.samples>0&&Bt.useMultisampledRTT(P)===!1?Y=Ut.get(P).__webglMultisampledFramebuffer:Array.isArray(Lt)?Y=Lt[K]:Y=Lt,k.copy(P.viewport),$.copy(P.scissor),tt=P.scissorTest}else k.copy(Q).multiplyScalar(et).floor(),$.copy(at).multiplyScalar(et).floor(),tt=mt;if(K!==0&&(Y=L),dt.bindFramebuffer(V.FRAMEBUFFER,Y)&&dt.drawBuffers(P,Y),dt.viewport(k),dt.scissor($),dt.setScissorTest(tt),J){let yt=Ut.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+G,yt.__webglTexture,K)}else if(St){let yt=G;for(let At=0;At<P.textures.length;At++){let Lt=Ut.get(P.textures[At]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+At,Lt.__webglTexture,K,yt)}}else if(P!==null&&K!==0){let yt=Ut.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,yt.__webglTexture,K)}D=-1};function ku(P){let G=Ut.get(P);return(G.__readFormat!==P.format||G.__readType!==P.type)&&(G.__readFormat=P.format,G.__readType=P.type,G.__formatReadable=fe.textureFormatReadable(P.format),G.__typeReadable=fe.textureTypeReadable(P.type)),G}this.readRenderTargetPixels=function(P,G,K,Y,J,St,Ct,yt=0){if(!(P&&P.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Ut.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ct!==void 0&&(At=At[Ct],Array.isArray(At)&&(At=At[0])),At){dt.bindFramebuffer(V.FRAMEBUFFER,At);try{let Lt=P.textures[yt],Yt=Lt.format,oe=Lt.type;P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+yt);let Pt=ku(Lt);if(Pt.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-Y&&K>=0&&K<=P.height-J&&V.readPixels(G,K,Y,J,pt.convert(Yt),pt.convert(oe),St)}finally{let Lt=X!==null?Ut.get(X).__webglFramebuffer:null;dt.bindFramebuffer(V.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(P,G,K,Y,J,St,Ct,yt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Ut.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ct!==void 0&&(At=At[Ct],Array.isArray(At)&&(At=At[0])),At)if(G>=0&&G<=P.width-Y&&K>=0&&K<=P.height-J){dt.bindFramebuffer(V.FRAMEBUFFER,At);let Lt=P.textures[yt],Yt=Lt.format,oe=Lt.type;P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+yt);let Pt=ku(Lt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ae),V.bufferData(V.PIXEL_PACK_BUFFER,St.byteLength,V.STREAM_READ),V.readPixels(G,K,Y,J,pt.convert(Yt),pt.convert(oe),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let qe=X!==null?Ut.get(X).__webglFramebuffer:null;dt.bindFramebuffer(V.FRAMEBUFFER,qe);let Ae=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await ed(V,Ae,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ae),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,St),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(ae),V.deleteSync(Ae),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,G=null,K=0){let Y=Math.pow(2,-K),J=Math.floor(P.image.width*Y),St=Math.floor(P.image.height*Y),Ct=G!==null?G.x:0,yt=G!==null?G.y:0;Bt.setTexture2D(P,0),V.copyTexSubImage2D(V.TEXTURE_2D,K,0,0,Ct,yt,J,St),dt.unbindTexture()},this.copyTextureToTexture=function(P,G,K=null,Y=null,J=0,St=0){let Ct,yt,At,Lt,Yt,oe,Pt,ae,qe,Ae=P.isCompressedTexture?P.mipmaps[St]:P.image;if(K!==null)Ct=K.max.x-K.min.x,yt=K.max.y-K.min.y,At=K.isBox3?K.max.z-K.min.z:1,Lt=K.min.x,Yt=K.min.y,oe=K.isBox3?K.min.z:0;else{let de=Math.pow(2,-J);Ct=Math.floor(Ae.width*de),yt=Math.floor(Ae.height*de),P.isDataArrayTexture?At=Ae.depth:P.isData3DTexture?At=Math.floor(Ae.depth*de):At=1,Lt=0,Yt=0,oe=0}Y!==null?(Pt=Y.x,ae=Y.y,qe=Y.z):(Pt=0,ae=0,qe=0);let we=pt.convert(G.format),dn=pt.convert(G.type),It;G.isData3DTexture?(Bt.setTexture3D(G,0),It=V.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Bt.setTexture2DArray(G,0),It=V.TEXTURE_2D_ARRAY):(Bt.setTexture2D(G,0),It=V.TEXTURE_2D),dt.activeTexture(V.TEXTURE0),dt.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),dt.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),dt.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment);let wn=dt.getParameter(V.UNPACK_ROW_LENGTH),pe=dt.getParameter(V.UNPACK_IMAGE_HEIGHT),Ss=dt.getParameter(V.UNPACK_SKIP_PIXELS),pn=dt.getParameter(V.UNPACK_SKIP_ROWS),Yo=dt.getParameter(V.UNPACK_SKIP_IMAGES);dt.pixelStorei(V.UNPACK_ROW_LENGTH,Ae.width),dt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ae.height),dt.pixelStorei(V.UNPACK_SKIP_PIXELS,Lt),dt.pixelStorei(V.UNPACK_SKIP_ROWS,Yt),dt.pixelStorei(V.UNPACK_SKIP_IMAGES,oe);let Ji=P.isDataArrayTexture||P.isData3DTexture,bs=G.isDataArrayTexture||G.isData3DTexture;if(P.isDepthTexture){let de=Ut.get(P),an=Ut.get(G),li=Ut.get(de.__renderTarget),Be=Ut.get(an.__renderTarget);dt.bindFramebuffer(V.READ_FRAMEBUFFER,li.__webglFramebuffer),dt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let sn=0;sn<At;sn++)Ji&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ut.get(P).__webglTexture,J,oe+sn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ut.get(G).__webglTexture,St,qe+sn)),V.blitFramebuffer(Lt,Yt,Lt+Ct,Yt+yt,Pt,ae,Pt+Ct,ae+yt,V.DEPTH_BUFFER_BIT,V.NEAREST);dt.bindFramebuffer(V.READ_FRAMEBUFFER,null),dt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||P.isRenderTargetTexture||Ut.has(P)){let de=Ut.get(P),an=Ut.get(G);dt.bindFramebuffer(V.READ_FRAMEBUFFER,I),dt.bindFramebuffer(V.DRAW_FRAMEBUFFER,U);for(let li=0;li<At;li++)Ji?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,de.__webglTexture,J,oe+li):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,de.__webglTexture,J),bs?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,an.__webglTexture,St,qe+li):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,an.__webglTexture,St),J!==0?V.blitFramebuffer(Lt,Yt,Lt+Ct,Yt+yt,Pt,ae,Pt+Ct,ae+yt,V.COLOR_BUFFER_BIT,V.NEAREST):bs?V.copyTexSubImage3D(It,St,Pt,ae,qe+li,Lt,Yt,Ct,yt):V.copyTexSubImage2D(It,St,Pt,ae,Lt,Yt,Ct,yt);dt.bindFramebuffer(V.READ_FRAMEBUFFER,null),dt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else bs?P.isDataTexture||P.isData3DTexture?V.texSubImage3D(It,St,Pt,ae,qe,Ct,yt,At,we,dn,Ae.data):G.isCompressedArrayTexture?V.compressedTexSubImage3D(It,St,Pt,ae,qe,Ct,yt,At,we,Ae.data):V.texSubImage3D(It,St,Pt,ae,qe,Ct,yt,At,we,dn,Ae):P.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,St,Pt,ae,Ct,yt,we,dn,Ae.data):P.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,St,Pt,ae,Ae.width,Ae.height,we,Ae.data):V.texSubImage2D(V.TEXTURE_2D,St,Pt,ae,Ct,yt,we,dn,Ae);dt.pixelStorei(V.UNPACK_ROW_LENGTH,wn),dt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,pe),dt.pixelStorei(V.UNPACK_SKIP_PIXELS,Ss),dt.pixelStorei(V.UNPACK_SKIP_ROWS,pn),dt.pixelStorei(V.UNPACK_SKIP_IMAGES,Yo),St===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&V.generateMipmap(It),dt.unbindTexture()},this.initRenderTarget=function(P){Ut.get(P).__webglFramebuffer===void 0&&Bt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Bt.setTextureCube(P,0):P.isData3DTexture?Bt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Bt.setTexture2DArray(P,0):Bt.setTexture2D(P,0),dt.unbindTexture()},this.resetState=function(){O=0,z=0,X=null,dt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var Gl=new Ft,ru=new Ft,ou=new H,Vl=new H,ii=new H,au=[new H,new H,new H,new H],lu=[new H,new H,new H,new H],Tr=[new H,new H,new H,new H,new H,new H,new H,new H],Wi=2,P_=.1,Wl=class extends gr{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isSunLightShadow=!0,this.mapSize.set(1024,1024),this._cameras=[],this._matrices=[],this._frustums=[],this._cascadeSplits=new Array(Wi+1).fill(0),this._cascadeData=[],this._viewportCount=Wi,this._frameExtents.set(2,1);for(let t=0;t<Wi;t++)this._cameras.push(new Gi),this._matrices.push(new Ft),this._frustums.push(new di),this._cascadeData.push(new ee);for(;this._viewports.length<Wi;)this._viewports.push(new ee)}getCamera(t=0){return this._cameras[t]}getMatrix(t=0){return this._matrices[t]}getFrustum(t=0){return this._frustums[t]}updateMatrices(t,e){if(e===void 0)return;let n=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.x),i=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.y);for(let m=0;m<Wi;m++)this._viewports[m].set(m+n,i,1-2*n,1-2*i);let r=this.mapSize.x*(1-2*n),o=this.mapSize.y*(1-2*i),a=Math.min(r,o),l=this.camera,c=e.near,h=Math.max(c+1e-6,Math.min(l.far,e.far)),f=this._cascadeSplits;f[0]=c;for(let m=1;m<Wi;m++){let g=m/Wi,y=c+(h-c)*g,E=c>0?c*Math.pow(h/c,g):y;f[m]=(y+E)*.5}f[Wi]=h,ou.setFromMatrixPosition(t.matrixWorld).negate().normalize(),Vl.set(0,1,0),Math.abs(Vl.dot(ou))>.99&&Vl.set(0,0,1),Gl.lookAt(ii.set(0,0,0),ou,Vl),ru.copy(Gl).transpose().multiply(e.matrixWorld);let u=e.reversedDepth?1:e.coordinateSystem===is?0:-1,d=e.projectionMatrixInverse,p=-1/0;for(let m=0;m<4;m++){let g=m===0||m===1?1:-1,y=m===0||m===3?1:-1,E=au[m].set(g,y,u).applyMatrix4(d),M=lu[m];e.isPerspectiveCamera===!0?M.copy(E).multiplyScalar(h/c):M.set(E.x,E.y,-h),E.applyMatrix4(ru),M.applyMatrix4(ru),p=Math.max(p,E.z,M.z)}p+=h;let v=l.near;for(let m=0;m<Wi;m++){let g=m===0?f[0]:this._cascadeData[m-1].z,y=f[m+1],E=y-P_*(y-f[m]);this._cascadeData[m].set(m===0?-1e10:g,y,E,0);let M=(g-c)/(h-c),b=(y-c)/(h-c);ii.set(0,0,0);for(let w=0;w<4;w++)Tr[w*2].lerpVectors(au[w],lu[w],M),Tr[w*2+1].lerpVectors(au[w],lu[w],b),ii.add(Tr[w*2]).add(Tr[w*2+1]);ii.multiplyScalar(1/8);let S=0,x=1/0;for(let w=0;w<8;w++)S=Math.max(S,Tr[w].distanceToSquared(ii)),x=Math.min(x,Tr[w].z);let _=Math.sqrt(S);if(a>1){_/=1-1/a;let w=2*_/r,A=2*_/o;ii.x=Math.round(ii.x/w)*w,ii.y=Math.round(ii.y/A)*A}ii.z=p+v,ii.applyMatrix4(Gl);let T=this._cameras[m];T.position.copy(ii),T.quaternion.setFromRotationMatrix(Gl),T.left=-_,T.right=_,T.top=_,T.bottom=-_,T.near=v,T.far=p-x+2*v,T.coordinateSystem=l.coordinateSystem,T._reversedDepth=l.reversedDepth,T.updateProjectionMatrix(),T.updateMatrixWorld(),this._updateMatrix(T,this._matrices[m],this._frustums[m],this._viewports[m])}}};var Xl=class extends Is{constructor(t,e){super(t,e),this.isSunLight=!0,this.type="SunLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.shadow=new Wl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e}};function I_(s){let t=s|0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ne=class{constructor(t=1){this.f=I_(t)}next(){return this.f()}range(t,e){return t+(e-t)*this.f()}int(t,e){return Math.floor(t+(e-t+1)*this.f())}pick(t){return t[Math.floor(this.f()*t.length)]}chance(t){return this.f()<t}sign(){return this.f()<.5?-1:1}gauss(){return(this.f()+this.f()+this.f()+this.f()-2)*1.2247}weighted(t){let e=0;for(let i of t)e+=i[1];let n=this.f()*e;for(let i of t)if(n-=i[1],n<=0)return i[0];return t[t.length-1][0]}},ie=(s,t,e)=>s<t?t:s>e?e:s,We=s=>s<0?0:s>1?1:s,ht=(s,t,e)=>s+(t-s)*e,ce=(s,t,e)=>{let n=We((e-s)/(t-s));return n*n*(3-2*n)};function Re(s,t,e=0){let n=Math.imul(s,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function fs(s,t,e=0){let n=Math.floor(s),i=Math.floor(t),r=s-n,o=t-i,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Re(n,i,e),h=Re(n+1,i,e),f=Re(n,i+1,e),u=Re(n+1,i+1,e);return c+(h-c)*a+(f-c)*l+(c-h-f+u)*a*l}function zs(s,t,e=4,n=0){let i=0,r=.5,o=1,a=0;for(let l=0;l<e;l++)i+=r*fs(s*o,t*o,n+l*17),a+=r,r*=.5,o*=2.03;return i/a}function L_(s,t,e,n=0){let i=Math.floor(s),r=Math.floor(t),o=s-i,a=t-r,l=o*o*(3-2*o),c=a*a*(3-2*a),h=v=>(v%e+e)%e,f=Re(h(i),h(r),n),u=Re(h(i+1),h(r),n),d=Re(h(i),h(r+1),n),p=Re(h(i+1),h(r+1),n);return f+(u-f)*l+(d-f)*c+(f-u-d+p)*l*c}function me(s,t,e=4,n=4,i=0){let r=0,o=.5,a=0,l=e;for(let c=0;c<n;c++)r+=o*L_(s*l,t*l,l,i+c*31),a+=o,o*=.5,l*=2;return r/a}function kd(s,t=!1){let e=s.length,n=s[0].length,i=o=>t?s[(o%e+e)%e]:s[ie(o,0,e-1)],r=t?e:e-1;return o=>{let a=We(o)*r,l=Math.floor(a);l>=r&&(l=r-1);let c=a-l,h=i(l-1),f=i(l),u=i(l+1),d=i(l+2),p=new Array(n),v=c*c,m=v*c;for(let g=0;g<n;g++)p[g]=.5*(2*f[g]+(-h[g]+u[g])*c+(2*h[g]-5*f[g]+4*u[g]-d[g])*v+(-h[g]+3*f[g]-3*u[g]+d[g])*m);return p}}function ql(s){let t=s.map(r=>r[0]),e=s.map(r=>r[1]),n=t.length,i=new Array(n);for(let r=0;r<n;r++)r===0?i[r]=(e[1]-e[0])/(t[1]-t[0]):r===n-1?i[r]=(e[n-1]-e[n-2])/(t[n-1]-t[n-2]):i[r]=.5*((e[r+1]-e[r])/(t[r+1]-t[r])+(e[r]-e[r-1])/(t[r]-t[r-1]));return r=>{if(r<=t[0])return e[0];if(r>=t[n-1])return e[n-1];let o=0,a=n-1;for(;a-o>1;){let u=o+a>>1;t[u]<=r?o=u:a=u}let l=t[a]-t[o],c=(r-t[o])/l,h=c*c,f=h*c;return(2*f-3*h+1)*e[o]+(f-2*h+c)*l*i[o]+(-2*f+3*h)*e[a]+(f-h)*l*i[a]}}function Hd(s,t,e){let n=We(.5+.5*(t-s)/e);return ht(t,s,n)-e*n*(1-n)}var en=Math.PI*2;var Zl=9e3,ge={uTime:{value:0},uSunDir:{value:new H(0,1,0)},uLightDir:{value:new H(0,1,0)},uLightColor:{value:new Rt(1,1,1)},uFogColor:{value:new Rt(.6,.7,.8)},uFogSunColor:{value:new Rt(1,.8,.6)},uFogParams:{value:new ee(.001,.02,0,6)},uFogParams2:{value:new ee(1e-4,Zl*.55,Zl*.97,0)},uSkyZenith:{value:new Rt(.15,.3,.7)},uSkyHorizon:{value:new Rt(.6,.75,.9)},uSkyGlow:{value:new Rt(1,.7,.4)},uAmbient:{value:new Rt(.5,.6,.8)},uWind:{value:new ee(.86,.5,1,0)},uCamPos:{value:new H},uNight:{value:0},uSeason:{value:0}},ds=`
uniform vec3 uFogColor;
uniform vec3 uFogSunColor;
uniform vec4 uFogParams;
uniform vec4 uFogParams2;
uniform vec3 uSunDir;

// rgb = in-scattered colour, a = opacity of the air between eye and point
vec4 atmosFog( vec3 ro, vec3 rd, float dist ) {
	float b = uFogParams.y;
	float k = rd.y * b;
	float f = abs( k ) > 1e-5 ? ( 1.0 - exp( - dist * k ) ) / k : dist;
	float amount = uFogParams.x * exp( - ( ro.y - uFogParams.z ) * b ) * f + uFogParams2.x * dist;
	float fogFactor = 1.0 - exp( - amount );
	fogFactor = max( fogFactor, smoothstep( uFogParams2.y, uFogParams2.z, dist ) );
	float s = max( dot( rd, uSunDir ), 0.0 );
	vec3 col = mix( uFogColor, uFogSunColor, pow( s, uFogParams.w ) );
	return vec4( col, clamp( fogFactor, 0.0, 1.0 ) );
}
`,ps=`
uniform vec3 uSkyZenith;
uniform vec3 uSkyHorizon;
uniform vec3 uSkyGlow;

vec3 skyGradient( vec3 d ) {
	float y = clamp( d.y, 0.0, 1.0 );
	vec3 c = mix( uSkyHorizon, uSkyZenith, pow( y, 0.45 ) );
	float s = max( dot( d, uSunDir ), 0.0 );
	c += uSkyGlow * ( 0.28 * pow( s, 5.0 ) + 0.9 * pow( s, 40.0 ) );
	return c;
}
// what an infinitely distant point in direction d looks like (sky seen through the air)
vec3 skyThroughAir( vec3 ro, vec3 d ) {
	vec3 c = skyGradient( d );
	float pathLen = min( 900.0 / max( d.y, 0.012 ), 60000.0 );
	vec4 fog = atmosFog( ro, vec3( d.x, max( d.y, 0.0 ), d.z ), pathLen );
	return mix( c, fog.rgb, fog.a );
}
`,Gd=!1;function mi(s){for(let t in ge)s.uniforms[t]=ge[t]}function D_(){Gd||(Gd=!0,qt.fog_pars_vertex=`
#ifdef USE_FOG
	varying vec3 vFogWorldPos;
#endif`,qt.fog_vertex=`
#ifdef USE_FOG
	vFogWorldPos = cameraPosition + mvPosition.xyz * mat3( viewMatrix );
#endif`,qt.fog_pars_fragment=`
#ifdef USE_FOG
	varying vec3 vFogWorldPos;
	${ds}
#endif`,qt.fog_fragment=`
#ifdef USE_FOG
	vec3 fogRay = vFogWorldPos - cameraPosition;
	float fogDist = length( fogRay );
	vec4 fogResult = atmosFog( cameraPosition, fogRay / max( fogDist, 1e-4 ), fogDist );
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogResult.rgb, fogResult.a );
#endif`,jn.prototype.onBeforeCompile=function(s){mi(s)})}function Xi(s,t,e,n=null){return s.onBeforeCompile=i=>{if(mi(i),n)for(let r in n)i.uniforms[r]=n[r];e(i)},s.customProgramCacheKey=()=>t,s}var Sn={dawn:{label:"\u6668\u9727",en:"Sea-fog morning",sunAz:118,sunEl:13,lightAz:118,lightEl:13,lightColor:[1,.86,.68],lightIntensity:2.6,hemiSky:[.74,.8,.86],hemiGround:[.42,.4,.36],hemiIntensity:1.55,zenith:[.42,.52,.66],horizon:[.8,.8,.78],glow:[1,.82,.6],sunDisc:14,fogColor:[.68,.72,.75],fogSunColor:[1.15,.98,.78],fogDensity:.0115,fogFalloff:.03,fogSunPow:5,haze:16e-5,cloudCover:.3,cloudLit:[1,.94,.86],cloudDark:[.62,.66,.72],stars:0,moon:0,night:0,exposure:1,saturation:.9,contrast:1,warmth:.02,bloom:.55,godrays:1,vignette:.32,waterShallow:[.3,.42,.4],waterDeep:[.1,.19,.22],wind:.6},noon:{label:"\u6674\u5348",en:"Clear noon",sunAz:196,sunEl:37,lightAz:196,lightEl:37,lightColor:[1,.955,.88],lightIntensity:4.3,hemiSky:[.5,.66,.98],hemiGround:[.36,.34,.28],hemiIntensity:1.75,zenith:[.1,.27,.7],horizon:[.5,.68,.9],glow:[.9,.86,.75],sunDisc:40,fogColor:[.56,.7,.88],fogSunColor:[.86,.9,.94],fogDensity:5e-4,fogFalloff:.02,fogSunPow:8,haze:8e-5,cloudCover:.5,cloudLit:[1,.99,.96],cloudDark:[.6,.67,.8],stars:0,moon:0,night:0,exposure:.98,saturation:1.08,contrast:1.04,warmth:0,bloom:.35,godrays:.45,vignette:.25,waterShallow:[.12,.34,.36],waterDeep:[.022,.12,.2],wind:.9},golden:{label:"\u91D1\u79CB\u659C\u967D",en:"Golden autumn afternoon",sunAz:243,sunEl:12.5,lightAz:243,lightEl:12.5,lightColor:[1,.68,.38],lightIntensity:4.4,hemiSky:[.5,.58,.84],hemiGround:[.6,.44,.25],hemiIntensity:1.45,zenith:[.16,.29,.58],horizon:[.72,.62,.58],glow:[1.12,.56,.2],sunDisc:30,fogColor:[.56,.56,.66],fogSunColor:[.98,.6,.3],fogDensity:.001,fogFalloff:.022,fogSunPow:6,haze:11e-5,cloudCover:.54,cloudLit:[1.25,.84,.52],cloudDark:[.44,.4,.52],stars:0,moon:0,night:0,exposure:.96,saturation:1.08,contrast:1.06,warmth:.05,bloom:.6,godrays:.9,vignette:.34,waterShallow:[.2,.36,.34],waterDeep:[.04,.12,.18],wind:.8},night:{label:"\u83EF\u71C8\u591C\u8272",en:"Lamplit night",sunAz:252,sunEl:-9,lightAz:148,lightEl:40,lightColor:[.55,.68,1],lightIntensity:.34,hemiSky:[.17,.24,.5],hemiGround:[.1,.085,.08],hemiIntensity:.62,zenith:[.012,.022,.07],horizon:[.06,.085,.17],glow:[.5,.2,.1],sunDisc:0,fogColor:[.045,.06,.12],fogSunColor:[.3,.16,.14],fogDensity:.0014,fogFalloff:.022,fogSunPow:3,haze:14e-5,cloudCover:.42,cloudLit:[.16,.2,.33],cloudDark:[.03,.04,.08],stars:1,moon:1,night:1,exposure:1.25,saturation:1,contrast:1.03,warmth:-.02,bloom:.9,godrays:0,vignette:.42,waterShallow:[.03,.07,.11],waterDeep:[.006,.018,.045],wind:.5}},$l=["dawn","noon","golden","night"];function Yl(s,t,e,n){for(let i in s){let r=s[i],o=t[i];if(typeof r=="number")n[i]=ht(r,o,e);else if(Array.isArray(r)){let a=n[i]||(n[i]=[0,0,0]);for(let l=0;l<r.length;l++)a[l]=ht(r[l],o[l],e)}}for(let i of["sunAz","lightAz"]){let r=t[i]-s[i];r>180&&(r-=360),r<-180&&(r+=360),n[i]=s[i]+r*e}return n}function Vd(s,t,e){let n=s*Math.PI/180,i=t*Math.PI/180;return e.set(Math.sin(n)*Math.cos(i),Math.sin(i),-Math.cos(n)*Math.cos(i)).normalize()}var Jl=class{constructor(t){D_(),this.scene=t,t.fog=new Qr(8952234,1e-4),this.sun=new Xl(16777215,1),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.far=300,this.sun.shadow.bias=-35e-5,this.sun.shadow.normalBias=.12,this.sun.shadow.radius=2.2,t.add(this.sun),this.hemi=new po(16777215,4473924,1),t.add(this.hemi),this.name="golden",this.state={},Yl(Sn.golden,Sn.golden,0,this.state),this._from=null,this._to=null,this._t=1,this._dur=1,this.moonDir=new H,this.listeners=[],this.apply()}setShadowQuality(t,e){this.sun.shadow.mapSize.set(t,t),this.sun.shadow.camera.far=e,this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)}set(t,e=0){if(Sn[t]){this.name=t,e<=0?(Yl(Sn[t],Sn[t],0,this.state),this._t=1,this.apply()):(this._from=Yl(this.state,this.state,0,{}),this._to=Sn[t],this._t=0,this._dur=e);for(let n of this.listeners)n(t)}}get transitioning(){return this._t<1}update(t,e){if(ge.uTime.value=e,this._t<1){this._t=Math.min(1,this._t+t/this._dur);let r=this._t,o=r*r*(3-2*r);Yl(this._from,this._to,o,this.state);let a=Math.abs(this._from.night-this._to.night);this.state.lightIntensity*=1-a*Math.sin(Math.PI*o)*.9,this.apply()}let n=this.state,i=.72+.28*Math.sin(e*.31)*Math.sin(e*.17+1.3)+.12*Math.sin(e*.9);ge.uWind.value.z=n.wind*i,ge.uWind.value.w=e}apply(){let t=this.state;Vd(t.sunAz,t.sunEl,ge.uSunDir.value),Vd(t.lightAz,t.lightEl,ge.uLightDir.value),this.moonDir.copy(ge.uLightDir.value),this.sun.position.copy(ge.uLightDir.value),this.sun.color.setRGB(t.lightColor[0],t.lightColor[1],t.lightColor[2]),this.sun.intensity=t.lightIntensity,ge.uLightColor.value.setRGB(t.lightColor[0],t.lightColor[1],t.lightColor[2]).multiplyScalar(t.lightIntensity),this.hemi.color.setRGB(t.hemiSky[0],t.hemiSky[1],t.hemiSky[2]),this.hemi.groundColor.setRGB(t.hemiGround[0],t.hemiGround[1],t.hemiGround[2]),this.hemi.intensity=t.hemiIntensity,ge.uAmbient.value.setRGB(t.hemiSky[0],t.hemiSky[1],t.hemiSky[2]).multiplyScalar(t.hemiIntensity/Math.PI),ge.uFogColor.value.setRGB(t.fogColor[0],t.fogColor[1],t.fogColor[2]),ge.uFogSunColor.value.setRGB(t.fogSunColor[0],t.fogSunColor[1],t.fogSunColor[2]),ge.uFogParams.value.set(t.fogDensity,t.fogFalloff,0,t.fogSunPow),ge.uFogParams2.value.x=t.haze,ge.uSkyZenith.value.setRGB(t.zenith[0],t.zenith[1],t.zenith[2]),ge.uSkyHorizon.value.setRGB(t.horizon[0],t.horizon[1],t.horizon[2]),ge.uSkyGlow.value.setRGB(t.glow[0],t.glow[1],t.glow[2]),ge.uNight.value=We(t.night)}};var hu=8;function Wd(s){hu=s}function ze(s,t=s){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function ke(s,{srgb:t=!0,repeat:e=!0,aniso:n=!0,mips:i=!0}={}){let r=new ao(s);return r.colorSpace=t?ln:pi,e&&(r.wrapS=r.wrapT=ns),r.anisotropy=n?hu:1,i||(r.generateMipmaps=!1,r.minFilter=Ee),r}function si(s,t){let e=s.getContext("2d"),n=s.width,i=s.height,r=e.createImageData(n,i),o=r.data,a=[0,0,0,255];for(let l=0;l<i;l++)for(let c=0;c<n;c++){a[3]=255,t(c/n,l/i,c,l,a);let h=(l*n+c)*4;o[h]=a[0],o[h+1]=a[1],o[h+2]=a[2],o[h+3]=a[3]}return e.putImageData(r,0,0),e}function N_(s,t){let e=s.getContext("2d"),n=s.width,i=s.height,r=e.getImageData(0,0,n,i),o=r.data,a=[0,0,0,0];for(let l=0;l<i;l++)for(let c=0;c<n;c++){let h=(l*n+c)*4;a[0]=o[h],a[1]=o[h+1],a[2]=o[h+2],a[3]=o[h+3],t(c/n,l/i,c,l,a),o[h]=a[0],o[h+1]=a[1],o[h+2]=a[2],o[h+3]=a[3]}return e.putImageData(r,0,0),e}function uu(s,t,e,n,i,r,o){for(let a=-1;a<=1;a++)for(let l=-1;l<=1;l++){let c=n+a*t,h=i+l*e;c<-r||c>t+r||h<-r||h>e+r||(s.save(),s.translate(c,h),o(s),s.restore())}}function fu(s,t,e,n){let i=new Float32Array(t*e),r=new Float32Array(t*e),o=2*n+1;for(let a=0;a<e;a++)for(let l=0;l<t;l++){let c=0;for(let h=-n;h<=n;h++)c+=s[a*t+(l+h+t)%t];i[a*t+l]=c/o}for(let a=0;a<e;a++)for(let l=0;l<t;l++){let c=0;for(let h=-n;h<=n;h++)c+=i[(a+h+e)%e*t+l];r[a*t+l]=c/o}return r}function Bs(s,t,e,n=2,i={}){let r=ze(t,e),o=r.getContext("2d"),a=o.createImageData(t,e),l=a.data;for(let c=0;c<e;c++)for(let h=0;h<t;h++){let f=(h-1+t)%t,u=(h+1)%t,d=(c-1+e)%e,p=(c+1)%e,v=(s[c*t+u]-s[c*t+f])*n,m=(s[p*t+h]-s[d*t+h])*n,g=-v,y=m,E=1,M=Math.hypot(g,y,E);g/=M,y/=M,E/=M;let b=(c*t+h)*4;l[b]=(g*.5+.5)*255,l[b+1]=(y*.5+.5)*255,l[b+2]=(E*.5+.5)*255,l[b+3]=255}return o.putImageData(a,0,0),ke(r,{srgb:!1,...i})}function U_(s){let t=s.width,e=s.height,n=s.getContext("2d").getImageData(0,0,t,e).data,i=new Float32Array(t*e);for(let r=0;r<t*e;r++)i[r]=n[r*4]/255;return i}var qn=(s,t,e,n=1)=>`rgba(${s|0},${t|0},${e|0},${n})`,cu=new Map;function fn(s,t){return cu.has(s)||cu.set(s,t()),cu.get(s)}function Ar(){return fn("noise",()=>{let t=new Uint8Array(262144);for(let n=0;n<256;n++)for(let i=0;i<256;i++){let r=i/256,o=n/256,a=(n*256+i)*4;t[a]=me(r,o,4,5,11)*255,t[a+1]=me(r,o,8,4,23)*255,t[a+2]=me(r,o,32,2,37)*255,t[a+3]=me(r,o,16,3,51)*255}let e=new _n(t,256,256,Ve);return e.wrapS=e.wrapT=ns,e.minFilter=Xn,e.magFilter=Ee,e.generateMipmaps=!0,e.needsUpdate=!0,e})}function Xd(){return fn("waterNormal",()=>{let t=new Float32Array(65536);for(let i=0;i<256;i++)for(let r=0;r<256;r++){let o=r/256,a=i/256,l=me(o,a,6,4,71),c=me(o,a,12,3,97);t[i*256+r]=Math.pow(1-Math.abs(l*2-1),1.6)*.7+c*.3}let e=new Uint8Array(256*256*4);for(let i=0;i<256;i++)for(let r=0;r<256;r++){let o=(t[i*256+(r+1)%256]-t[i*256+(r-1+256)%256])*6,a=(t[(i+1)%256*256+r]-t[(i-1+256)%256*256+r])*6,l=(i*256+r)*4;e[l]=ie(128-o*127,0,255),e[l+1]=ie(128-a*127,0,255),e[l+2]=t[i*256+r]*255,e[l+3]=255}let n=new _n(e,256,256,Ve);return n.wrapS=n.wrapT=ns,n.minFilter=Xn,n.magFilter=Ee,n.generateMipmaps=!0,n.anisotropy=hu,n.needsUpdate=!0,n})}function qd(){return fn("grass",()=>{let t=ze(512),e=si(t,(i,r,o,a,l)=>{let c=me(i,r,6,4,3),h=me(i,r,3,3,9),f=Re(o,a,5)-.5,u=ce(.5,.75,h);l[0]=ht(58,96,c)+u*34+f*14,l[1]=ht(82,122,c)+u*12+f*16,l[2]=ht(34,50,c)-u*4+f*8}),n=new ne(77);e.lineCap="round";for(let i=0;i<9e3;i++){let r=n.range(0,512),o=n.range(0,512),a=n.range(3,8),l=n.range(-.6,.6)-Math.PI/2,c=n.chance(.2),h=n.range(.7,1.25);e.strokeStyle=c?qn(150*h,140*h,62*h,.5):qn(70*h,112*h,40*h,.55),e.lineWidth=n.range(.7,1.4),uu(e,512,512,r,o,10,f=>{f.beginPath(),f.moveTo(0,0),f.lineTo(Math.cos(l)*a,Math.sin(l)*a),f.stroke()})}return ke(t)})}function Yd(){return fn("sand",()=>{let t=ze(256);return si(t,(e,n,i,r,o)=>{let a=me(e,n,5,4,21),l=Re(i,r,3)-.5,c=Re(i,r,9)>.985?-38:0,h=.9+a*.2;o[0]=214*h+l*16+c,o[1]=192*h+l*15+c,o[2]=148*h+l*14+c}),ke(t)})}function Io(){return fn("rock",()=>{let t=ze(512),e=new Float32Array(512*512);return si(t,(n,i,r,o,a)=>{let l=me(n,i,5,5,41),c=1-Math.abs(me(n,i,7,4,57)*2-1),h=ce(.9,.985,c),f=me(n*.4,i*2.2,8,3,63),u=Re(r,o,7)-.5,d=.7+l*.55+(f-.5)*.25;d*=1-h*.55,a[0]=132*d+u*14,a[1]=104*d+u*12,a[2]=88*d+u*11,e[o*512+r]=l*.8+f*.3-h*.5}),{map:ke(t),normalMap:Bs(e,512,512,5)}})}function Kl(){return fn("soil",()=>{let t=ze(256),e=si(t,(i,r,o,a,l)=>{let c=me(i,r,6,4,81),h=Re(o,a,13)-.5,f=.75+c*.5;l[0]=92*f+h*18,l[1]=74*f+h*15,l[2]=52*f+h*12}),n=new ne(5);for(let i=0;i<1300;i++){let r=n.range(0,256),o=n.range(0,256),a=n.range(0,Math.PI),l=n.range(3,9),c=n.range(.6,1.3);e.strokeStyle=n.chance(.5)?qn(126*c,96*c,58*c,.6):qn(60*c,48*c,34*c,.6),e.lineWidth=n.range(.6,1.3),uu(e,256,256,r,o,10,h=>{h.beginPath(),h.moveTo(0,0),h.lineTo(Math.cos(a)*l,Math.sin(a)*l),h.stroke()})}return ke(t)})}function Zd(){return fn("litter",()=>{let t=ze(512),e=t.getContext("2d"),n=new ne(4242);for(let i=0;i<2100;i++){let r=n.range(0,512),o=n.range(0,512),a=n.range(0,Math.PI*2),l=n.range(5.5,10.5),c=n.range(150,255),h=n.range(.78,1),f=n.range(.55,1),u=n.chance(.5);uu(e,512,512,r,o,14,d=>{d.rotate(a),d.fillStyle=qn(c,c*h,c*f,1),d.beginPath(),u?(d.moveTo(0,l*.7),d.quadraticCurveTo(-l*1,-l*.1,-l*.55,-l*.75),d.quadraticCurveTo(0,-l*1,l*.55,-l*.75),d.quadraticCurveTo(l*1,-l*.1,0,l*.7)):d.ellipse(0,0,l*.5,l*.95,0,0,Math.PI*2),d.fill(),d.strokeStyle=qn(c*.6,c*h*.55,c*f*.5,.55),d.lineWidth=.8,d.beginPath(),d.moveTo(0,l*.8),d.lineTo(0,-l*.7),d.stroke()})}return ke(t)})}function Jd(){return fn("asphalt",()=>{let t=ze(512),e=si(t,(i,r,o,a,l)=>{let c=me(i,r,4,4,101),h=Re(o,a,17),f=h>.94?26:h<.07?-16:0,u=.86+c*.3;l[0]=66*u+(h-.5)*16+f,l[1]=66*u+(h-.5)*16+f,l[2]=70*u+(h-.5)*16+f}),n=new ne(31);e.lineCap="round";for(let i=0;i<9;i++){let r=n.range(0,512),o=n.range(0,512),a=n.range(0,Math.PI*2);e.strokeStyle="rgba(28,28,30,0.55)",e.lineWidth=n.range(.8,1.6),e.beginPath(),e.moveTo(r,o);for(let l=0;l<18;l++)a+=n.range(-.5,.5),r+=Math.cos(a)*9,o+=Math.sin(a)*9,e.lineTo(r,o);e.stroke()}return ke(t)})}function Lo(){return fn("pavers",()=>{let t=ze(512),e=ze(512),n=t.getContext("2d"),i=e.getContext("2d");n.fillStyle="#5f594f",n.fillRect(0,0,512,512),i.fillStyle="#000",i.fillRect(0,0,512,512);let r=new ne(808),o=16,a=512/o,l=8,c=512/l;for(let f=0;f<o;f++){let u=f%2*c*.5;for(let d=-1;d<=l;d++){let p=d*c+u,v=f*a,m=r.range(.82,1.1),g=r.next(),y=[158*m,150*m,138*m];g>.86?y=[168*m,142*m,126*m]:g<.12&&(y=[132*m,132*m,134*m]);let E=1.6;for(let M of[0,-512,512])n.fillStyle=qn(y[0],y[1],y[2]),n.fillRect(p+M+E,v+E,c-2*E,a-2*E),i.fillStyle=qn(255*r.range(.8,1),0,0),i.fillRect(p+M+E+1,v+E+1,c-2*E-2,a-2*E-2)}}N_(t,(f,u,d,p,v)=>{let m=(Re(d,p,19)-.5)*22+(me(f,u,8,3,111)-.5)*26;v[0]=ie(v[0]+m,0,255),v[1]=ie(v[1]+m,0,255),v[2]=ie(v[2]+m,0,255)});let h=fu(U_(e),512,512,1);return{map:ke(t),normalMap:Bs(h,512,512,2.2)}})}function $d(s="furrow"){return fn("bark-"+s,()=>{let n=ze(256,512),i=new Float32Array(256*512);if(s==="plane")return si(n,(a,l,c,h,f)=>{let u=me(a,l*2,3,3,201),d=me(a+.37,l*2,5,3,211),p=(Re(c,h,23)-.5)*14,v;u>.6?v=[178,170,138]:d>.56?v=[124,128,96]:d<.42?v=[98,90,76]:v=[146,138,110];let m=(me(a*3,l*.5,16,2,221)-.5)*22;f[0]=v[0]+p+m,f[1]=v[1]+p+m,f[2]=v[2]+p+m*.7,i[h*256+c]=(u>.58?.2:d>.56?.5:.8)+p*.004}),{map:ke(n),normalMap:Bs(fu(i,256,512,1),256,512,1.6)};let r={furrow:[[104,92,78],[58,50,42]],ginkgo:[[128,118,102],[70,62,52]],pine:[[128,100,82],[62,46,38]],smooth:[[182,160,134],[140,114,92]],cedar:[[92,82,72],[48,42,38]]}[s]||[[104,92,78],[58,50,42]],o=s==="smooth";return si(n,(a,l,c,h,f)=>{let u=me(a,l*.22,10,4,231),d=me(a,l*.6,22,3,241),p=1-Math.abs(u*2-1);p=o?.6+.4*me(a,l,4,3,251):Math.pow(p,s==="pine"?2.6:1.7)*.75+d*.25;let v=s==="pine"?ce(.3,.5,me(a,l*.5,6,2,261)):1,m=p*(.7+.3*v),g=(Re(c,h,29)-.5)*16;f[0]=ht(r[1][0],r[0][0],m)+g,f[1]=ht(r[1][1],r[0][1],m)+g,f[2]=ht(r[1][2],r[0][2],m)+g,s==="pine"&&(f[0]+=(1-m)*22),i[h*256+c]=m}),{map:ke(n),normalMap:Bs(i,256,512,o?1.2:4)}})}function F_(s,t,e){if(s.beginPath(),t==="ginkgo")s.moveTo(0,e*.5),s.quadraticCurveTo(-e*.2,e*.1,-e*.66,-e*.2),s.quadraticCurveTo(-e*.5,-e*.62,-e*.06,-e*.56),s.lineTo(0,-e*.36),s.lineTo(e*.06,-e*.56),s.quadraticCurveTo(e*.5,-e*.62,e*.66,-e*.2),s.quadraticCurveTo(e*.2,e*.1,0,e*.5);else if(t==="maple"||t==="plane"||t==="ivy"){let n=t==="ivy"?3:5,i=t==="maple"?2.2:t==="plane"?1.1:.9,r=t==="maple"?.34:.5,o=t==="ivy"?2.2:3.9;for(let a=0;a<=60;a++){let l=a/60,c=-Math.PI/2+(l-.5)*o,h=Math.pow(Math.abs(Math.cos((l-.5)*o*n/(o/Math.PI)/1)),i),f=e*(r+(1-r)*h)*.62,u=Math.cos(c)*f,d=Math.sin(c)*f+e*.12;a===0&&s.moveTo(0,e*.42),s.lineTo(u,d)}s.lineTo(0,e*.42)}else if(t==="blossom")for(let n=0;n<5;n++){let i=n/5*Math.PI*2;s.moveTo(Math.cos(i)*e*.26+e*.24,Math.sin(i)*e*.26),s.arc(Math.cos(i)*e*.26,Math.sin(i)*e*.26,e*.24,0,Math.PI*2)}else s.moveTo(0,e*.62),s.quadraticCurveTo(-e*.36,0,0,-e*.62),s.quadraticCurveTo(e*.36,0,0,e*.62);s.closePath()}function Kd(s){return fn("leaf-"+s,()=>{let i=ze(512).getContext("2d"),r=new ne(1e3+s.length*77+s.charCodeAt(0)*13+s.charCodeAt(1));i.lineCap="round";for(let c=0;c<4;c++){let h=c%2*256+128,f=Math.floor(c/2)*256+256/2;if(i.save(),i.beginPath(),i.rect(h-256/2+3,f-256/2+3,250,250),i.clip(),i.translate(h,f),s==="cedar"){let u=(p,v,m,g,y)=>{let E=Math.max(3,Math.floor(g/7));for(let M=0;M<=E;M++){let b=M/E,S=p+Math.cos(m)*g*b,x=v+Math.sin(m)*g*b;for(let _=0;_<15;_++){let T=r.range(0,Math.PI*2),w=r.range(7,14)*y,A=r.range(120,255);i.strokeStyle=qn(A,r.range(0,255),0,1),i.lineWidth=r.range(1.8,3.2),i.beginPath(),i.moveTo(S,x),i.lineTo(S+Math.cos(T)*w,x+Math.sin(T)*w),i.stroke()}}},d=r.range(-10,10);u(-256*.46,d,r.range(-.08,.08),256*.9,1.1);for(let p=0;p<22;p++){let v=r.range(.02,.98),m=p%2?1:-1;u(-256*.46+256*.9*v,d,m*r.range(.6,1.3),r.range(26,62)*(1-v*.4),1)}}else if(s==="pine")for(let u=0;u<7;u++){let d=r.range(-71.68,71.68),p=r.range(-256*.28,256*.28);for(let v=0;v<70;v++){let m=r.range(0,Math.PI*2),g=r.range(18,40),y=r.range(110,255);i.strokeStyle=qn(y,r.range(0,255),0,1),i.lineWidth=r.range(1,1.9),i.beginPath(),i.moveTo(d,p),i.lineTo(d+Math.cos(m)*g,p+Math.sin(m)*g),i.stroke()}}else if(s==="juniper")for(let u=0;u<520;u++){let d=r.range(0,Math.PI*2),p=Math.sqrt(r.next())*256*.42,v=Math.cos(d)*p*.82,m=Math.sin(d)*p,g=r.range(110,255);i.fillStyle=qn(g,r.range(0,255),0,1),i.beginPath(),i.ellipse(v,m,r.range(3,6),r.range(5,11),r.range(-.5,.5),0,Math.PI*2),i.fill()}else{let u={ginkgo:[26,31],maple:[19,40],plane:[12,56],ivy:[15,42],blossom:[22,26],oval:[30,30],small:[48,20],dense:[150,17]}[s]||[28,30],[d,p]=u;for(let v=0;v<d;v++){let m=r.range(0,Math.PI*2),g=Math.pow(r.next(),s==="dense"?.5:.7)*256*(s==="dense"?.42:.36),y=p*r.range(.8,1.2),E=r.range(165,255),M=r.range(0,255);i.save(),i.translate(Math.cos(m)*g,Math.sin(m)*g),i.rotate(r.range(0,Math.PI*2)),i.scale(1,r.range(.55,1)),F_(i,s,y),i.fillStyle=qn(E,M,0,1),i.fill(),i.strokeStyle=qn(E*.72,M,0,.9),i.lineWidth=1.1,i.beginPath(),i.moveTo(0,y*.5),i.lineTo(0,-y*.36),s!=="ginkgo"&&s!=="blossom"&&(i.moveTo(0,y*.1),i.lineTo(-y*.26,-y*.2),i.moveTo(0,y*.1),i.lineTo(y*.26,-y*.2)),i.stroke(),i.restore()}}i.restore()}let o=i.getImageData(0,0,512,512).data,a=new Uint8Array(512*512*4);for(let c=0;c<512;c++)for(let h=0;h<512;h++){let f=(c*512+h)*4,u=((511-c)*512+h)*4,d=o[f+3];d<8?(a[u]=205,a[u+1]=128,a[u+2]=0,a[u+3]=0):(a[u]=o[f],a[u+1]=o[f+1],a[u+2]=0,a[u+3]=d)}let l=new _n(a,512,512,Ve);return l.minFilter=Xn,l.magFilter=Ee,l.generateMipmaps=!0,l.anisotropy=4,l.needsUpdate=!0,l})}function jd(){return fn("stucco",()=>{let t=ze(256),e=new Float32Array(256*256);return si(t,(n,i,r,o,a)=>{let l=me(n,i,4,4,301),c=me(n,i,48,2,311),h=me(n*6,i*.35,8,2,321),f=232+(l-.5)*22+(c-.5)*14-Math.max(0,h-.6)*46;a[0]=f,a[1]=f,a[2]=f-2,e[o*256+r]=c*.6+l*.4}),{map:ke(t),normalMap:Bs(e,256,256,1.6)}})}function Do(s="rubble"){return fn("granite-"+s,()=>{let e=ze(512),n=new Float32Array(512*512),i=new ne(s==="rubble"?909:919),r=[[186,170,148],[172,158,140],[196,176,150],[160,150,138],[190,164,142],[150,142,132],[204,188,160]];if(s==="rubble"){let l=[];for(let c=0;c<8;c++)for(let h=0;h<9;h++){let f=i.pick(r),u=i.range(.86,1.08);l.push({x:(h+i.range(.15,.85))/9,y:(c+i.range(.15,.85))/8,c:[f[0]*u,f[1]*u,f[2]*u],h:i.range(.7,1)})}si(e,(c,h,f,u,d)=>{let p=Math.floor(c*9),v=Math.floor(h*8),m=9,g=9,y=null;for(let T=-1;T<=1;T++)for(let w=-1;w<=1;w++){let A=(p+w+9)%9,C=(v+T+8)%8,L=l[C*9+A],I=Math.abs(c-L.x),U=Math.abs(h-L.y);I>.5&&(I=1-I),U>.5&&(U=1-U),I*=9/8;let O=Math.hypot(I,U*1.25);O<m?(g=m,m=O,y=L):O<g&&(g=O)}let E=g-m,M=ce(.004,.02,E),b=Re(f,u,41),S=(b-.5)*26+(b>.95?-30:b<.04?24:0),x=(me(c,h,16,3,331)-.5)*22,_=[138,128,114];d[0]=ht(_[0],y.c[0]+S+x,M),d[1]=ht(_[1],y.c[1]+S+x,M),d[2]=ht(_[2],y.c[2]+S+x,M),n[u*512+f]=M*(y.h*.6+ce(0,.09,E)*.4)+x*.006})}else{let l=[];for(let h=0;h<8;h++){let f=i.range(-60,0);for(;f<512;){let u=i.range(70,150),d=i.pick(r),p=i.range(.9,1.08);l.push({r:h,x0:f,x1:f+u,c:[d[0]*p,d[1]*p,d[2]*p],h:i.range(.75,1)}),f+=u}}let c=[];for(let h=0;h<8;h++)c.push(l.filter(f=>f.r===h));si(e,(h,f,u,d,p)=>{let v=Math.min(7,Math.floor(d/64)),m=d-v*64,g=c[v][0];for(let x of c[v])u>=x.x0&&u<x.x1&&(g=x);let y=Math.min(u-g.x0,g.x1-u,m,64-m),E=ce(1.2,3.2,y),M=Re(u,d,43),b=(M-.5)*26+(M>.95?-30:M<.04?24:0),S=(me(h,f,12,3,341)-.5)*26;p[0]=ht(118,g.c[0]+b+S,E),p[1]=ht(110,g.c[1]+b+S,E),p[2]=ht(100,g.c[2]+b+S,E),n[d*512+u]=E*(g.h*.55+ce(0,16,y)*.3)+S*.01})}return{map:ke(e),normalMap:Bs(fu(n,512,512,1),512,512,3)}})}function du(s="red"){return fn("roof-"+s,()=>{let e=ze(512),n=new Float32Array(512*512),i=16,r=512/i,o=16,a=512/o,l=new ne(s==="red"?1203:1217),c=[];for(let h=0;h<i;h++)for(let f=0;f<o;f++){let u,d=l.next();if(s==="red"){let p=l.range(.82,1.12);u=[184*p,86*p,52*p],d>.9?u=[150*p,66*p,44*p]:d<.1?u=[204*p,108*p,62*p]:d>.84&&(u=[120*p,78*p,60*p])}else{let p=l.range(.8,1.15);u=[98*p,102*p,108*p],d>.88&&(u=[84*p,92*p,88*p])}c.push({col:u,tilt:l.range(-.08,.08)})}return si(e,(h,f,u,d,p)=>{let v=Math.floor(d/r),m=(d-v*r)/r,g=v%2*.5,y=u/a+g,E=(Math.floor(y)%o+o)%o,M=y-Math.floor(y),b=c[v*o+E],S=ce(0,.06,Math.min(M,1-M)),x=s==="red"?ce(0,.16,Math.min(M,1-M)+(1-m)*.8):1,_=(.6+.4*ce(0,.3,m))*(.75+.25*S)*(.82+.18*x),T=1-Math.max(0,me(h*3,f*.4,6,3,351)-.55)*.9,w=s==="red"?ce(.66,.8,me(h,f,5,3,361))*.35:0,A=(Re(u,d,47)-.5)*18,C=_*T;p[0]=ht(b.col[0]*C+A,96,w),p[1]=ht(b.col[1]*C+A,92,w),p[2]=ht(b.col[2]*C+A,66,w),n[d*512+u]=m*.9+b.tilt*(M-.5)+S*.1}),{map:ke(e),normalMap:Bs(n,512,512,3.2)}})}var ri={tall:{i:0,w:1,h:1.9},std:{i:1,w:1.1,h:1.5},small:{i:2,w:.8,h:.8},arch:{i:3,w:1.1,h:1.9},door:{i:4,w:1.25,h:2.3},french:{i:5,w:1.3,h:2.3},round:{i:6,w:.85,h:.85},wide:{i:7,w:2,h:1.5}};function No(s,t){let e=ri[s].i,n=e%4,i=Math.floor(e/4)+(t?2:0),r=.004;return[n/4+r,1-(i+1)/4+r,(n+1)/4-r,1-i/4-r]}function Qd(){return fn("windows",()=>{let e=ze(1024),n=ze(1024),i=ze(1024),r=e.getContext("2d"),o=n.getContext("2d"),a=i.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,1024,1024),a.fillStyle="rgb(0,170,0)",a.fillRect(0,0,1024,1024);let l=new ne(31337),c="#efe9dc",h=Object.keys(ri);for(let p=0;p<2;p++)for(let v of h){let m=ri[v],g=m.i%4,y=Math.floor(m.i/4)+p*2,E=p===1;for(let T of[r,o,a])T.save(),T.translate(g*256,y*256),T.beginPath(),T.rect(0,0,256,256),T.clip(),T.scale(256/m.w,256/m.h);let M=m.w,b=m.h,S=(T,w,A,C)=>{let L=r.createLinearGradient(0,w,0,w+C);L.addColorStop(0,"#5a6c7c"),L.addColorStop(.5,"#2c3742"),L.addColorStop(1,"#1c242c"),r.fillStyle=L,r.fillRect(T,w,A,C),r.fillStyle="rgba(214,210,196,0.34)";let I=A*l.range(.16,.3);if(r.fillRect(T,w,I,C),r.fillRect(T+A-I,w,I,C),a.fillStyle="rgb(0,18,0)",a.fillRect(T,w,A,C),E){let U=o.createLinearGradient(0,w,0,w+C),O=l.chance(.75);U.addColorStop(0,O?"#c08a48":"#9aa6a8"),U.addColorStop(.6,O?"#ffd596":"#dfe8e6"),U.addColorStop(1,O?"#e0a860":"#b6c2c2"),o.fillStyle=U,o.fillRect(T,w,A,C),o.fillStyle="rgba(60,30,10,0.42)",o.fillRect(T,w,I,C),o.fillRect(T+A-I,w,I,C)}},x=(T,w,A,C,L,I,U=.035)=>{for(let O of[r,o,a]){O.fillStyle=O===r?c:O===o?"#000":"rgb(0,150,0)";for(let z=1;z<L;z++)O.fillRect(T+A*z/L-U/2,w,U,C);for(let z=1;z<I;z++)O.fillRect(T,w+C*z/I-U/2,A,U)}},_=T=>(r.fillStyle=c,r.fillRect(0,0,M,b),[T,T,M-2*T,b-2*T]);if(v==="tall"||v==="std"||v==="small"||v==="wide"){let[T,w,A,C]=_(.075);S(T,w,A,C);let L=v==="wide"?3:2;x(T,w,A,C,L,v==="tall"?4:v==="small"?2:3),x(T,w,A,C,L===3?3:2,1,.06)}else if(v==="french"){let[T,w,A,C]=_(.08);S(T,w,A,C*.86),x(T,w,A,C*.86,2,4),x(T,w,A,C,2,1,.08),r.fillStyle=c,r.fillRect(T,w+C*.86,A,C*.14)}else if(v==="arch"||v==="round"){r.fillStyle="#b9ac98",r.fillRect(0,0,M,b);let T=(w,A)=>{if(w.beginPath(),v==="round")w.ellipse(M/2,b/2,M/2-A,b/2-A,0,0,Math.PI*2);else{let C=M/2-A;w.moveTo(A,b-A),w.lineTo(A,C+A),w.arc(M/2,C+A,C,Math.PI,0),w.lineTo(M-A,b-A),w.closePath()}};T(r,.02),r.fillStyle=c,r.fill();for(let w of[r,o,a])w.save(),T(w,.09),w.clip();S(0,0,M,b),x(0,0,M,b,2,v==="round"?2:4);for(let w of[r,o,a])w.restore()}else if(v==="door"){r.fillStyle=c,r.fillRect(0,0,M,b),S(.09,.09,M-.18,.36),x(.09,.09,M-.18,.36,3,1);let T=.09,w=.52,A=M-.18,C=b-w-.04;r.fillStyle="#3d4a3a",r.fillRect(T,w,A,C),r.fillStyle="#4b5a47";for(let L=0;L<3;L++)for(let I=0;I<2;I++)r.fillRect(T+.07+I*A/2,w+.07+L*C/3,A/2-.14,C/3-.14);r.fillStyle="#c8a24a",r.fillRect(T+A-.14,w+C*.5,.05,.12),a.fillStyle="rgb(0,140,0)",a.fillRect(T,w,A,C)}for(let T of[r,o,a])T.restore()}let f=ke(e,{repeat:!1}),u=ke(n,{repeat:!1}),d=ke(i,{repeat:!1,srgb:!1});return{map:f,emissiveMap:u,roughnessMap:d}})}function jl(){return fn("fence",()=>{let e=ze(256,256),n=e.getContext("2d");n.clearRect(0,0,256,256),n.strokeStyle="#1f2a24",n.fillStyle="#1f2a24",n.lineCap="butt";let i=8;for(let o=0;o<i;o++){let a=(o+.5)/i*256;n.lineWidth=7,n.beginPath(),n.moveTo(a,256),n.lineTo(a,26),n.stroke(),n.beginPath(),n.moveTo(a-8,30),n.lineTo(a,2),n.lineTo(a+8,30),n.closePath(),n.fill()}n.lineWidth=9;for(let o of[58,230])n.beginPath(),n.moveTo(0,o),n.lineTo(256,o),n.stroke();n.lineWidth=4;for(let o=0;o<i;o+=2){let a=(o+1)/i*256;n.beginPath(),n.arc(a,194,15,0,Math.PI*2),n.stroke()}let r=ke(e,{repeat:!0});return r.wrapT=In,r})}function tp(){return fn("wood",()=>{let t=ze(256);return si(t,(e,n,i,r,o)=>{let a=Math.floor(e*8),l=ce(0,.03,Math.min(e*8-a,a+1-e*8)),c=.85+Re(a,3,5)*.3,h=me(e*2+a*.37,n*.25,24,3,401),f=c*(.8+h*.4)*(.55+.45*l);o[0]=142*f,o[1]=112*f,o[2]=84*f}),ke(t)})}var Ql=class{constructor(t,e){this.atmosphere=e,this.uniforms={tNoise:{value:Ar()},uSunDisc:{value:20},uMoonDir:{value:new H(0,1,0)},uMoon:{value:0},uStars:{value:0},uCloudCover:{value:.4},uCloudLit:{value:new Rt(1,1,1)},uCloudDark:{value:new Rt(.5,.5,.6)}};let n=new Te({uniforms:this.uniforms,vertexShader:`
				varying vec3 vDir;
				void main() {
					vDir = position;
					vec4 p = projectionMatrix * viewMatrix * vec4( cameraPosition + position * 100.0, 1.0 );
					gl_Position = p.xyww; // pin to the far plane
				}`,fragmentShader:`
				uniform float uTime;
				uniform sampler2D tNoise;
				uniform float uSunDisc;
				uniform vec3 uMoonDir;
				uniform float uMoon;
				uniform float uStars;
				uniform float uCloudCover;
				uniform vec3 uCloudLit;
				uniform vec3 uCloudDark;
				uniform vec3 uLightColor;
				varying vec3 vDir;
				${ds}
				${ps}

				float hash13( vec3 p ) {
					p = fract( p * 0.1031 );
					p += dot( p, p.zyx + 31.32 );
					return fract( ( p.x + p.y ) * p.z );
				}
				float cloudField( vec2 p ) {
					vec2 w = uTime * vec2( 0.0012, 0.0005 );
					float n = texture2D( tNoise, p * 0.085 + w ).r * 0.56;
					n += texture2D( tNoise, p * 0.21 + w * 2.3 ).g * 0.3;
					n += texture2D( tNoise, p * 0.62 + w * 4.0 ).a * 0.14;
					return n;
				}

				void main() {
					vec3 d = normalize( vDir );
					vec3 col = skyGradient( d );
					float mu = dot( d, uSunDir );

					// stars
					if ( uStars > 0.001 && d.y > 0.0 ) {
						vec3 sd = d * 190.0;
						vec3 cell = floor( sd );
						float h = hash13( cell );
						vec3 f = fract( sd ) - 0.5 - ( vec3( hash13( cell + 7.1 ), hash13( cell + 3.7 ), hash13( cell + 9.2 ) ) - 0.5 ) * 0.6;
						float star = step( 0.972, h ) * smoothstep( 0.2, 0.0, length( f ) );
						star *= 0.55 + 0.45 * sin( uTime * ( 1.5 + h * 3.0 ) + h * 90.0 );
						col += vec3( 0.9, 0.95, 1.0 ) * star * uStars * ( 0.4 + 1.6 * fract( h * 51.7 ) ) * smoothstep( 0.02, 0.25, d.y );
					}

					// moon
					float mm = dot( d, uMoonDir );
					float moonDisc = smoothstep( 0.99965, 0.99975, mm );
					col += uMoon * ( vec3( 1.0, 0.98, 0.9 ) * moonDisc * 5.0 + vec3( 0.25, 0.32, 0.5 ) * ( pow( max( mm, 0.0 ), 600.0 ) * 0.8 + pow( max( mm, 0.0 ), 30.0 ) * 0.12 ) );

					// sun
					float sun = smoothstep( 0.99988, 0.99995, mu );
					vec3 sunCol = normalize( uLightColor + 1e-4 ) * uSunDisc;

					// cloud deck
					float cov = 0.0;
					if ( d.y > 0.004 ) {
						vec2 p = d.xz / ( d.y + 0.09 );
						float n = clamp( ( cloudField( p ) - 0.5 ) * 2.5 + 0.5, 0.0, 1.0 );
						float th = mix( 0.9, 0.25, uCloudCover );
						cov = smoothstep( th, th + 0.24, n );
						if ( cov > 0.001 ) {
							vec2 toSun = normalize( uSunDir.xz + vec2( 1e-4 ) ) * 0.3;
							float n2 = clamp( ( cloudField( p + toSun ) - 0.5 ) * 2.5 + 0.5, 0.0, 1.0 );
							float lit = clamp( 0.55 + ( n - n2 ) * 2.2, 0.0, 1.0 );
							vec3 cc = mix( uCloudDark, uCloudLit, lit );
							// thin edges catch the sun
							float edge = 1.0 - smoothstep( th + 0.03, th + 0.34, n );
							cc += uSkyGlow * pow( max( mu, 0.0 ), 5.0 ) * edge * 1.4;
							float fade = smoothstep( 0.0, 0.2, d.y );
							cov *= fade * 0.94;
							col = mix( col, cc, cov );
						}
					}
					col += sunCol * sun * ( 1.0 - cov );

					// air between us and the sky
					float pathLen = min( 900.0 / max( d.y, 0.012 ), 60000.0 );
					vec4 fog = atmosFog( cameraPosition, vec3( d.x, max( d.y, 0.0 ), d.z ), pathLen );
					// let the sun's disc burn through haze a little
					col = mix( col, fog.rgb, fog.a * ( 1.0 - 0.55 * sun ) );
					gl_FragColor = vec4( col, 0.0 ); // alpha 0 marks sky for the light-shaft mask
				}`,side:hn,depthWrite:!1,depthTest:!0,fog:!1});n.onBeforeCompile=i=>mi(i),n.customProgramCacheKey=()=>"sky",this.mesh=new Xt(new rs(1,4),n),this.mesh.frustumCulled=!1,this.mesh.renderOrder=900,this.mesh.matrixAutoUpdate=!1,t.add(this.mesh)}update(){let t=this.atmosphere.state,e=this.uniforms;e.uSunDisc.value=t.sunDisc,e.uMoonDir.value.copy(ge.uLightDir.value),e.uMoon.value=t.moon,e.uStars.value=t.stars,e.uCloudCover.value=t.cloudCover,e.uCloudLit.value.setRGB(t.cloudLit[0],t.cloudLit[1],t.cloudLit[2]),e.uCloudDark.value.setRGB(t.cloudDark[0],t.cloudDark[1],t.cloudDark[2])}};var he={minX:-480,maxX:500,minZ:-440,maxZ:410},Un=2,He={minX:-362,maxX:462,minZ:-362,maxZ:348},Fo=ql([[-1500,760],[-950,700],[-720,640],[-580,520],[-480,340],[-410,270],[-335,246],[-220,227],[-90,217],[40,223],[128,239],[160,259],[196,297],[232,277],[258,247],[300,241],[340,290],[380,326],[420,304],[455,234],[640,120]]),tc=ql([[-2400,900],[-1300,760],[-700,640],[-420,566],[-200,524],[-60,500],[60,486],[150,478],[230,466],[300,440],[345,398],[430,320]]),O_=ql([[-1500,1],[-470,1],[-405,.92],[-350,.2],[-325,0],[112,0],[136,.3],[158,1],[2e3,1]]);function Fe(s,t){let e=Fo(s),n=(Fo(s+1.5)-Fo(s-1.5))/3,i=(e-t)/Math.sqrt(1+n*n),r=tc(t),o=(tc(t+1.5)-tc(t-1.5))/3,a=(r-s)/Math.sqrt(1+o*o);return Hd(i,a,16)}function Yi(s,t){let n=Fo(s)-t,i=tc(t)-s,r=We(O_(s));r>.02&&r<.98&&(r=We(r+(zs(s/9,t/9,2,31)-.5)*.7));let o=We((n-i)/30+.5);return We(ht(r,1,o))}function Dr(s){return Fo(s)}var Rr=(s,t,e)=>Math.exp(-(s*s+t*t)/(e*e));function z_(s,t){let e=Math.max(0,138-t),i=3.3+(e<=520?e:520+320*(1-Math.exp(-(e-520)/320)))*.058;return i+=(zs(s/250+3.1,t/250-1.7,3,5)-.5)*10*ce(135,20,t),i+=3.4*Rr(s-352,t-222,92)+2.6*Rr(s-203,t-256,36),i+=104*Rr(s+180,t+1560,640)+58*Rr(s+1380,t+520,540)+30*Rr(s+800,t-380,230),i+=46*Rr(s-1900,t+1500,800),i}function B_(s,t,e,n){let i;if(s<0?i=Math.max(-18,s*.042):s<14?i=s*.052:s<40?i=.728+(s-14)*.037:i=1.69+ce(40,41.6,s)*1.5,t<=.001)return i;let r=zs(e/13+9.3,n/13-4.1,4,7),o=zs(e/4.5,n/4.5,2,13),a;return s<0?a=Math.max(-18,s*.13)+(r-.43)*3.6*ce(-48,-3,s)+(o-.5)*.7*ce(-20,0,s):a=(s<12?s*.25:3+(s-12)*.022)+(r-.42)*2.6*ce(28,2,s)+(o-.5)*.8*ce(20,0,s),ht(i,a,t)}function ec(s,t){let e=Fe(s,t),n=z_(s,t);if(e>=84)return n;let i=B_(e,Yi(s,t),s,t);return ht(i,n,ce(46,84,e))}var nc={ginkgo:{tc:"\u9280\u674F",en:"Ginkgo",note:"\u6DF1\u79CB\u4E00\u8DEF\u91D1\u9EC3\uFF0C\u843D\u8449\u7DE9\u6383"},maple:{tc:"\u4E94\u89D2\u6953",en:"Painted maple",note:"\u971C\u67D3\u6953\u7D05\uFF0C\u5C64\u6797\u76E1\u67D3"},plane:{tc:"\u6CD5\u570B\u68A7\u6850",en:"London plane",note:"\u8001\u68A7\u6850\u593E\u9053\uFF0C\u679D\u690F\u5982\u5098"},cedar:{tc:"\u96EA\u677E",en:"Deodar cedar",note:"\u96EA\u677E\u6210\u5217\uFF0C\u56DB\u5B63\u5E38\u9752"},juniper:{tc:"\u9F8D\u67CF",en:"Dragon juniper",note:"\u9F8D\u67CF\u76E4\u65CB\uFF0C\u84BC\u7FE0\u633A\u62D4"},peach:{tc:"\u78A7\u6843",en:"Flowering peach",note:"\u6625\u4F86\u82B1\u958B\uFF0C\u7C89\u7D05\u5982\u5E36"},crabapple:{tc:"\u6D77\u68E0",en:"Crabapple",note:"\u4EBA\u7A31\u300C\u82B1\u8857\u300D\uFF0C\u79CB\u5BE6\u7E8D\u7E8D"},crape:{tc:"\u7D2B\u8587",en:"Crape myrtle",note:"\u76DB\u590F\u7D2B\u8587\uFF0C\u767E\u65E5\u7D05"},pine:{tc:"\u9ED1\u677E",en:"Black pine",note:"\u7901\u77F3\u9ED1\u677E\uFF0C\u6D77\u98A8\u70BA\u4F34"}},Uo=s=>-330+6*Math.sin(s/200),ep=s=>-250+5*Math.sin(s/180+1),np=s=>-170+5*Math.sin(s/210+2),ip=s=>-90+4*Math.sin(s/190+.5),sp=s=>-10+5*Math.sin(s/170+3),rp=s=>70+4*Math.sin(s/200+4),qi=s=>150+7e-5*(s+90)*(s+90),op=s=>-215+8*Math.sin(s/150),ap=s=>6*Math.sin(s/170+1),lp=s=>215+8*Math.sin(s/140+2);function ks(s,t,e){let n=[],i=Math.ceil((e-t)/2);for(let r=0;r<=i;r++){let o=t+(e-t)*r/i;n.push({x:o,z:s(o)})}return n}function pu(s,t,e){let n=[],i=Math.ceil((e-t)/2);for(let r=0;r<=i;r++){let o=t+(e-t)*r/i;n.push({x:s(o),z:o})}return n}function k_(s){let t=kd(s),e=[];for(let o=0;o<=2e3;o++)e.push(t(o/2e3));let n=[{x:e[0][0],z:e[0][1]}],i=0;for(let o=1;o<e.length;o++)i+=Math.hypot(e[o][0]-e[o-1][0],e[o][1]-e[o-1][1]),i>=2&&(n.push({x:e[o][0],z:e[o][1]}),i=0);let r=e[e.length-1];return n.push({x:r[0],z:r[1]}),n}var Hs=-372,Cr=372;function gi(s,t,e,n,i,r,o,a=3.25,l=2.6){return{id:s,sc:t,tc:e,en:n,tree:i,kind:r,pts:o,half:a,sw:l}}var mu=336,H_=[[mu,qi(mu)],[372,166],[408,176],[430,202],[433,238],[416,268],[386,287],[352,271],[320,229],[292,213],[264,209],[246,198],[239,178],[240,qi(240)]],Xe=[gi("wusheng","\u6B66\u80DC\u5173\u8DEF","\u6B66\u52DD\u95DC\u8DEF","Wushengguan Rd","plane","EW",ks(Uo,Hs,Cr)),gi("jiayu","\u5609\u5CEA\u5173\u8DEF","\u5609\u5CEA\u95DC\u8DEF","Jiayuguan Rd","maple","EW",ks(ep,Hs,Cr)),gi("hangu","\u51FD\u8C37\u5173\u8DEF","\u51FD\u8C37\u95DC\u8DEF","Hanguguan Rd","plane","EW",ks(np,Hs,Cr)),gi("zhengyang","\u6B63\u9633\u5173\u8DEF","\u6B63\u967D\u95DC\u8DEF","Zhengyangguan Rd","crape","EW",ks(ip,Hs,Cr)),gi("linhuai","\u4E34\u6DEE\u5173\u8DEF","\u81E8\u6DEE\u95DC\u8DEF","Linhuaiguan Rd","juniper","EW",ks(sp,Hs,Cr)),gi("juyong","\u5C45\u5EB8\u5173\u8DEF","\u5C45\u5EB8\u95DC\u8DEF","Juyongguan Rd","ginkgo","EW",ks(rp,Hs,Cr)),gi("shanhai","\u5C71\u6D77\u5173\u8DEF","\u5C71\u6D77\u95DC\u8DEF","Shanhaiguan Rd","plane","EW",ks(qi,Hs,mu),3,2.4),gi("shaoguan","\u97F6\u5173\u8DEF","\u97F6\u95DC\u8DEF","Shaoguan Rd","peach","NS",pu(op,Uo(-215)-10,qi(-215)+10),3),gi("ningwu","\u5B81\u6B66\u5173\u8DEF","\u5BE7\u6B66\u95DC\u8DEF","Ningwuguan Rd","crabapple","NS",pu(ap,Uo(0)-10,qi(0)+10),3),gi("zijing","\u7D2B\u8346\u5173\u8DEF","\u7D2B\u834A\u95DC\u8DEF","Zijingguan Rd","cedar","NS",pu(lp,Uo(215)-10,qi(215)+10),3),gi("huanghai","\u9EC4\u6D77\u8DEF","\u9EC3\u6D77\u8DEF","Huanghai Rd","pine","PATH",k_(H_),3,2.4)],xi=Object.fromEntries(Xe.map(s=>[s.id,s]));for(let s of Xe){let t=s.pts,e=0;for(let n=0;n<t.length;n++){let i=t[Math.max(0,n-1)],r=t[Math.min(t.length-1,n+1)],o=r.x-i.x,a=r.z-i.z,l=Math.hypot(o,a)||1;o/=l,a/=l,t[n].tx=o,t[n].tz=a,t[n].nx=-a,t[n].nz=o,n>0&&(e+=Math.hypot(t[n].x-t[n-1].x,t[n].z-t[n-1].z)),t[n].s=e}s.length=e}var Ai=[];{let s=[Uo,ep,np,ip,sp,rp,qi],t=["wusheng","jiayu","hangu","zhengyang","linhuai","juyong","shanhai"],e=[op,ap,lp],n=["shaoguan","ningwu","zijing"];for(let i=0;i<s.length;i++)for(let r=0;r<e.length;r++){let o=e[r](0),a=s[i](o);for(let l=0;l<8;l++)o=e[r](a),a=s[i](o);Ai.push({x:o,z:a,a:t[i],b:n[r]})}Ai.push({x:240,z:qi(240),a:"shanhai",b:"huanghai"})}for(let s of Ai)s.y=ec(s.x,s.z);function vu(s,t){let e=ec(s,t);for(let n=0;n<Ai.length;n++){let i=Ai[n],r=s-i.x,o=t-i.z,a=r*r+o*o;if(a<1296){let l=ce(36,7,Math.sqrt(a));e=ht(e,i.y,l)}}return e}for(let s of Xe){let t=s.pts,e=t.map(i=>Math.max(vu(i.x,i.z),2.9)),n=s.id==="huanghai"?7:2;for(let i=0;i<t.length;i++){let r=0,o=0;for(let a=-n;a<=n;a++){let l=ie(i+a,0,t.length-1);r+=e[l],o++}t[i].y=r/o}}var Oo=12,gu=new Map,ic=(s,t)=>s*4096+t;Xe.forEach((s,t)=>{s.index=t,s.pts.forEach((e,n)=>{let i=ic(Math.floor(e.x/Oo),Math.floor(e.z/Oo)),r=gu.get(i);r||gu.set(i,r=[]),r.push(t,n)})});var Pr={road:null,i:0,dist:1/0,lateral:0,beyond:!1};function oi(s,t,e=24,n=null){let i=Math.ceil(e/Oo),r=Math.floor(s/Oo),o=Math.floor(t/Oo),a=e*e,l=-1,c=-1;for(let v=r-i;v<=r+i;v++)for(let m=o-i;m<=o+i;m++){let g=gu.get(ic(v,m));if(g)for(let y=0;y<g.length;y+=2){let E=Xe[g[y]];if(E===n)continue;let M=E.pts[g[y+1]],b=s-M.x,S=t-M.z,x=b*b+S*S;x<a&&(a=x,l=g[y],c=g[y+1])}}if(l<0)return null;let h=Xe[l],f=h.pts[c],u=s-f.x,d=t-f.z,p=u*f.tx+d*f.tz;return Pr.road=h,Pr.i=c,Pr.lateral=u*f.nx+d*f.nz,Pr.beyond=c===0&&p<-1.2||c===h.pts.length-1&&p>1.2,Pr.dist=Math.sqrt(a),Pr}function Lr(s,t,e=0,n={}){let i=s.pts,r=0,o=i.length-1;for(t=ie(t,0,s.length);o-r>1;){let u=r+o>>1;i[u].s<=t?r=u:o=u}let a=i[r],l=i[o],c=l.s>a.s?(t-a.s)/(l.s-a.s):0,h=ht(a.nx,l.nx,c),f=ht(a.nz,l.nz,c);return n.x=ht(a.x,l.x,c)+h*e,n.z=ht(a.z,l.z,c)+f*e,n.y=ht(a.y,l.y,c),n.tx=ht(a.tx,l.tx,c),n.tz=ht(a.tz,l.tz,c),n.nx=h,n.nz=f,n}var Ti=[],Gs=[],Ue={huashi:{x:203,z:257,rot:Math.PI*.08,tc:"\u82B1\u77F3\u6A13",en:"Huashi Lou \xB7 the Granite Castle",sub:"\u9EC3\u6D77\u8DEF 18 \u865F \xB7 1930 \u5E74\u4EE3"},princess:{x:0,z:0,rot:0,tc:"\u516C\u4E3B\u6A13",en:"Princess House",sub:"\u5C45\u5EB8\u95DC\u8DEF 10 \u865F \xB7 \u5317\u6B50\u98A8\u683C"}};{let s=new ne(20261110),t=27,e=Xe.filter(i=>i.kind==="EW");for(let i of e){let r=[0];for(let o of Ai){if(o.a!==i.id)continue;let a=0,l=1e9;for(let c=0;c<i.pts.length;c++){let h=Math.hypot(i.pts[c].x-o.x,i.pts[c].z-o.z);h<l&&(l=h,a=c)}r.push(i.pts[a].s)}r.push(i.length),r.sort((o,a)=>o-a);for(let o of[-1,1])if(!(i.id==="shanhai"&&o===1))for(let a=0;a<r.length-1;a++){let l=a===0,c=a===r.length-2,h=r[a]+(l?30:12),f=r[a+1]-(c?i.id==="shanhai"?12:30:12);i.id==="shanhai"&&c&&(f=i.length-6);let u=f-h;if(u<26)continue;let d=Math.max(1,Math.round(u/s.range(42,52))),p=[],v=0;for(let g=0;g<d;g++){let y=s.range(.82,1.18);p.push(y),v+=y}let m=h;for(let g=0;g<d;g++){let y=p[g]/v*u,E={id:Ti.length,road:i,side:o,s0:m,s1:m+y,width:y,depth:t,front:i.half+i.sw+.35,seed:s.int(1,1e9),corner:g===0&&!l||g===d-1&&!c};m+=y,Ti.push(E)}}}let n=null;{let i=1e9;for(let r of Ti){if(r.road.id!=="juyong"||r.side!==-1)continue;let o=Lr(r.road,(r.s0+r.s1)/2),a=Math.abs(o.x-96);a<i&&r.width>34&&(i=a,n=r)}}for(let i of Ti){let r=i.road,o=new ne(i.seed),a=(i.s0+i.s1)/2,l=Lr(r,a,i.side*i.front),c=l.tx,h=l.tz,f=l.nx*i.side,u=l.nz*i.side;i.fx=l.x,i.fz=l.z,i.ux=c,i.uz=h,i.vx=f,i.vz=u,i.roadY=l.y,i.gateU=o.range(-.28,.28)*i.width;let d="villa";if(i===n?d="princess":(i.width<30||o.chance(.24))&&(d="garden"),i.kind=d,d==="garden")continue;let p=d==="princess"?"princess":o.weighted([["german",3],["tudor",2],["spanish",1.6],["french",1.4],["nordic",1.5],["colonial",1.3],["modern",1.1],["granite",1.5]]),v=d==="princess"?13:o.range(11,16.5),m=d==="princess"?10:o.range(8.5,11.5),g=o.range(7.5,10.5),y=ie(o.range(-.12,.12)*i.width,-(i.width/2-v/2-6),i.width/2-v/2-6),E=g+m/2,M=l.x+c*y+f*E,b=l.z+h*y+u*E,S=Math.atan2(-f,-u),x={id:Gs.length,lot:i,style:p,w:v,d:m,x:M,z:b,rot:S,seed:o.int(1,1e9),cu:y,cv:E,kind:d};i.villa=x,i.gateU=ie(y+o.range(-2,2),-i.width/2+4,i.width/2-4),Gs.push(x),d==="princess"&&(Ue.princess.x=M,Ue.princess.z=b,Ue.princess.rot=S)}}var sc=[];for(let s of Gs){let t=s.w/2+3.2,e=s.d/2+3.2,n=Math.cos(s.rot),i=Math.sin(s.rot),r=-1e9,o=0;for(let[a,l]of[[-s.w/2,-s.d/2],[s.w/2,-s.d/2],[s.w/2,s.d/2],[-s.w/2,s.d/2],[0,0]]){let c=vu(s.x+a*n+l*i,s.z-a*i+l*n);r=Math.max(r,c),o+=c}s.y=ht(o/5,r,.6),sc.push({x:s.x,z:s.z,c:n,s:i,hw:t,hd:e,y:s.y})}{let s=Ue.huashi;s.y=6.2,sc.push({x:s.x,z:s.z,c:Math.cos(s.rot),s:Math.sin(s.rot),hw:15,hd:13,y:s.y,fall:12})}var xu=new Map,Ir=32;sc.forEach((s,t)=>{let e=Math.hypot(s.hw,s.hd)+(s.fall||7)+1;for(let n=Math.floor((s.x-e)/Ir);n<=Math.floor((s.x+e)/Ir);n++)for(let i=Math.floor((s.z-e)/Ir);i<=Math.floor((s.z+e)/Ir);i++){let r=ic(n,i),o=xu.get(r);o||xu.set(r,o=[]),o.push(t)}});function G_(s,t){let e=vu(s,t),n=oi(s,t,22);if(n&&!n.beyond){let r=n.road,o=r.half+r.sw+1.2,a=ce(o+7,o,n.dist);a>0&&(e=ht(e,r.pts[n.i].y-.07,a))}let i=xu.get(ic(Math.floor(s/Ir),Math.floor(t/Ir)));if(i)for(let r=0;r<i.length;r++){let o=sc[i[r]],a=s-o.x,l=t-o.z,c=a*o.c-l*o.s,h=a*o.s+l*o.c,f=Math.max(Math.abs(c)-o.hw,0),u=Math.max(Math.abs(h)-o.hd,0),d=Math.hypot(f,u),p=o.fall||7;d<p&&(e=ht(e,o.y,ce(p,0,d)))}return e}var _e={nx:Math.round((he.maxX-he.minX)/Un)+1,nz:Math.round((he.maxZ-he.minZ)/Un)+1,data:null};_e.data=new Float32Array(_e.nx*_e.nz);for(let s=0;s<_e.nz;s++){let t=he.minZ+s*Un;for(let e=0;e<_e.nx;e++)_e.data[s*_e.nx+e]=G_(he.minX+e*Un,t)}function ye(s,t){let e=(s-he.minX)/Un,n=(t-he.minZ)/Un;if(e<0||n<0||e>=_e.nx-1||n>=_e.nz-1)return ec(s,t);let i=Math.floor(e),r=Math.floor(n),o=e-i,a=n-r,l=_e.data,c=r*_e.nx+i,h=l[c],f=l[c+1],u=l[c+_e.nx],d=l[c+_e.nx+1];return h+(f-h)*o+(u-h)*a+(h-f-u+d)*o*a}var zo=ec;function cp(s,t,e,n={}){let i=Math.cos(s.rot),r=Math.sin(s.rot);return n.x=s.x+t*i+e*r,n.z=s.z-t*r+e*i,n}function Bo(s,t){for(let e of Ti){let n=s-e.fx,i=t-e.fz,r=n*e.ux+i*e.uz,o=n*e.vx+i*e.vz;if(Math.abs(r)<=e.width/2&&o>=0&&o<=e.depth)return e}return null}var hp=[{id:"beach",x:-60,z:196,r:150,tc:"\u7B2C\u4E8C\u6D77\u6C34\u6D74\u5834",en:"No. 2 Bathing Beach \xB7 Taiping Bay",sub:"\u592A\u5E73\u7063 \xB7 \u7D30\u6C99\u6DFA\u7058"},{id:"cape",x:388,z:300,r:60,tc:"\u592A\u5E73\u89D2",en:"Taiping Cape",sub:"\u7901\u77F3 \xB7 \u9ED1\u677E \xB7 \u6FE4\u8072"},{id:"huashi",x:Ue.huashi.x,z:Ue.huashi.z,r:46,tc:"\u82B1\u77F3\u6A13",en:"Huashi Lou \xB7 the Granite Castle",sub:"\u9EC3\u6D77\u8DEF 18 \u865F"},{id:"princess",x:Ue.princess.x,z:Ue.princess.z,r:30,tc:"\u516C\u4E3B\u6A13",en:"Princess House",sub:"\u5C45\u5EB8\u95DC\u8DEF 10 \u865F"}],rc=qi;var up=`
const int NW = 5;
const vec2 WDIR[5] = vec2[5]( vec2( -0.18, -0.984 ), vec2( 0.31, -0.951 ), vec2( -0.52, -0.854 ), vec2( 0.12, -0.993 ), vec2( -0.71, -0.704 ) );
const float WLEN[5] = float[5]( 37.0, 23.0, 13.5, 8.2, 5.1 );
const float WAMP[5] = float[5]( 0.15, 0.10, 0.055, 0.032, 0.018 );

float seaWaves( vec2 p, float t, float dist, float fadeNear, float fadeFar, out vec2 slope ) {
	float h = 0.0;
	slope = vec2( 0.0 );
	for ( int i = 0; i < NW; i ++ ) {
		float L = WLEN[ i ];
		float k = 6.2831853 / L;
		float c = sqrt( 9.81 / k ) * 0.5;
		float ph = k * ( dot( WDIR[ i ], p ) - c * t ) + float( i ) * 1.7;
		float fade = 1.0 - smoothstep( L * fadeNear, L * fadeFar, dist );
		float a = WAMP[ i ] * fade;
		h += a * sin( ph );
		slope += a * k * cos( ph ) * WDIR[ i ];
	}
	return h;
}
`;function V_(s=76,t=112,e=1.2,n=1.128){let i=[0,0,0],r=e;for(let l=0;l<s;l++){for(let c=0;c<t;c++){let h=c/t*Math.PI*2;i.push(Math.cos(h)*r,0,Math.sin(h)*r)}r*=n}let o=[];for(let l=0;l<t;l++)o.push(0,1+(l+1)%t,1+l);for(let l=0;l<s-1;l++){let c=1+l*t,h=1+(l+1)*t;for(let f=0;f<t;f++){let u=(f+1)%t;o.push(c+f,c+u,h+f,c+u,h+u,h+f)}}let a=new De;return a.setAttribute("position",new le(i,3)),a.setIndex(o),a}var oc=class{constructor(t,e){this.atmosphere=e;let n=new Uint16Array(_e.nx*_e.nz);for(let o=0;o<n.length;o++)n[o]=eo.toHalfFloat(_e.data[o]);let i=new _n(n,_e.nx,_e.nz,br,An);i.minFilter=i.magFilter=Ee,i.wrapS=i.wrapT=In,i.needsUpdate=!0,this.depthTexture=i,this.uniforms={tDepth:{value:i},tNoise:{value:Ar()},tWaterN:{value:Xd()},uGrid:{value:new ee(he.minX-Un*.5,he.minZ-Un*.5,1/(_e.nx*Un),1/(_e.nz*Un))},uShallow:{value:new Rt},uDeep:{value:new Rt}};let r=new Te({uniforms:this.uniforms,vertexShader:`
				uniform float uTime;
				uniform sampler2D tDepth;
				uniform vec4 uGrid;
				varying vec3 vWorld;
				${up}
				void main() {
					vec4 wp = modelMatrix * vec4( position, 1.0 );
					vec2 uv = ( wp.xz - uGrid.xy ) * uGrid.zw;
					float inGrid = step( 0.0, uv.x ) * step( uv.x, 1.0 ) * step( 0.0, uv.y ) * step( uv.y, 1.0 );
					float depth = mix( 12.0, - texture2D( tDepth, uv ).r, inGrid );
					float dist = length( wp.xz - cameraPosition.xz );
					vec2 slope;
					float h = seaWaves( wp.xz, uTime, dist, 3.0, 7.0, slope );
					h *= smoothstep( 0.05, 2.6, depth );
					// the slow breathing of the swash on the beach
					h += 0.085 * sin( uTime * 0.62 + wp.x * 0.021 ) * ( 1.0 - smoothstep( 0.0, 2.2, depth ) );
					wp.y += h;
					vWorld = wp.xyz;
					gl_Position = projectionMatrix * viewMatrix * wp;
				}`,fragmentShader:`
				uniform float uTime;
				uniform sampler2D tDepth;
				uniform sampler2D tNoise;
				uniform sampler2D tWaterN;
				uniform vec4 uGrid;
				uniform vec3 uShallow;
				uniform vec3 uDeep;
				uniform vec3 uLightDir;
				uniform vec3 uLightColor;
				uniform vec3 uAmbient;
				varying vec3 vWorld;
				${ds}
				${ps}
				${up}

				void main() {
					vec2 p = vWorld.xz;
					vec3 toCam = cameraPosition - vWorld;
					float dist = length( toCam );
					vec3 V = toCam / dist;

					vec2 uv = ( p - uGrid.xy ) * uGrid.zw;
					vec2 e = min( uv, 1.0 - uv );
					float inGrid = smoothstep( 0.0, 0.02, min( e.x, e.y ) );
					float terr = texture2D( tDepth, uv ).r;
					float depth = mix( 12.0, vWorld.y - terr, inGrid );

					// --- surface normal: swell + two scales of ripples
					vec2 slope;
					seaWaves( p, uTime, dist, 40.0, 130.0, slope );
					slope *= smoothstep( 0.05, 2.6, depth );
					float t = uTime;
					vec2 r1 = texture2D( tWaterN, p * 0.105 + t * vec2( 0.013, 0.021 ) ).rg - 0.5;
					vec2 r2 = texture2D( tWaterN, p * 0.037 + t * vec2( - 0.009, 0.012 ) ).rg - 0.5;
					vec2 r3 = texture2D( tWaterN, p * 0.41 + t * vec2( 0.03, - 0.02 ) ).rg - 0.5;
					float nearK = 1.0 - smoothstep( 20.0, 220.0, dist );
					slope += ( r1 * 0.5 + r2 * 0.75 + r3 * 0.28 * nearK ) * ( 0.42 + 0.3 * nearK );
					vec3 N = normalize( vec3( - slope.x, 1.0, - slope.y ) );

					float ndv = max( dot( N, V ), 0.0 );
					float fres = 0.02 + 0.98 * pow( 1.0 - ndv, 5.0 );
					fres *= 0.9;

					// --- reflection of the sky
					vec3 R = reflect( - V, N );
					R.y = abs( R.y );
					vec3 refl = skyThroughAir( vWorld, R );

					// --- water body, tinted by depth; the sand shows through in the shallows
					vec3 lightK = uAmbient * 1.15 + uLightColor * max( uLightDir.y, 0.0 ) * 0.3;
					vec3 body = mix( uShallow, uDeep, 1.0 - exp( - max( depth, 0.0 ) * 0.33 ) );
					vec3 sand = vec3( 0.52, 0.45, 0.31 ) * lightK * 0.8;
					body = mix( sand, body, 1.0 - exp( - max( depth, 0.0 ) * 1.5 ) );
					// light scattered back out of wave crests facing the sun
					float crest = max( dot( normalize( vec3( slope.x, 0.0, slope.y ) + 1e-4 ), - uLightDir ), 0.0 );
					body += uShallow * crest * length( slope ) * 1.6 * max( uLightDir.y, 0.05 );

					vec3 col = mix( body, refl, fres );

					// --- sun (or moon) glitter
					float rl = max( dot( R, uLightDir ), 0.0 );
					float glitter = pow( rl, 520.0 ) * 26.0 + pow( rl, 60.0 ) * 0.5 + pow( rl, 9.0 ) * 0.035;
					col += uLightColor * glitter * ( 0.25 + 0.75 * fres ) * 0.55;

					// --- surf
					float foam = 0.0;
					if ( inGrid > 0.0 ) {
						float d = max( depth, 0.0 );
						float n1 = texture2D( tNoise, p * 0.043 + t * 0.006 ).r;
						float n2 = texture2D( tNoise, p * 0.31 + vec2( t * 0.03, - t * 0.021 ) ).g;
						float n3 = texture2D( tNoise, p * 0.9 - t * 0.04 ).b;
						float edge = smoothstep( 0.22 + n1 * 0.22, 0.02, d );
						// successive lines of spent surf sliding up the slope
						float band = sin( d * 7.5 - t * 1.15 + n1 * 9.0 );
						float bands = smoothstep( 0.8, 0.99, band ) * smoothstep( 1.25, 0.2, d ) * smoothstep( 0.0, 0.15, d );
						foam = max( edge * 0.9, bands * 0.55 );
						foam *= smoothstep( 0.34, 0.7, n2 * 0.65 + n3 * 0.35 + foam * 0.4 );
						foam *= inGrid;
					}
					vec3 foamCol = vec3( 0.92, 0.94, 0.95 ) * ( uAmbient * 1.5 + uLightColor * max( uLightDir.y, 0.0 ) * 0.33 );
					col = mix( col, foamCol, clamp( foam, 0.0, 1.0 ) * 0.92 );

					float alpha = mix( 1.0, smoothstep( 0.0, 0.2, depth ), inGrid );

					vec4 fog = atmosFog( cameraPosition, - V, dist );
					col = mix( col, fog.rgb, fog.a );
					gl_FragColor = vec4( col, alpha );
				}`,transparent:!0,depthWrite:!0,fog:!1});r.onBeforeCompile=o=>mi(o),r.customProgramCacheKey=()=>"ocean",this.mesh=new Xt(V_(),r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=950,t.add(this.mesh)}update(t){this.mesh.position.set(t.position.x,0,t.position.z);let e=this.atmosphere.state;this.uniforms.uShallow.value.setRGB(e.waterShallow[0],e.waterShallow[1],e.waterShallow[2]),this.uniforms.uDeep.value.setRGB(e.waterDeep[0],e.waterDeep[1],e.waterDeep[2])}};function fp(s,t,e,n,i){let r=[],o=[],a=s,l=e*2;for(;a>n;)a-=l,o.push(Math.max(a,n)),l=Math.min(l*1.32,900);o.reverse(),r.push(...o);let c=Math.round((t-s)/e);for(let h=0;h<=c;h++)r.push(s+h*e);for(a=t,l=e*2;a<i;)a+=l,r.push(Math.min(a,i)),l=Math.min(l*1.32,900);return r}var ac=`
uniform sampler2D tLitter;
uniform sampler2D tNoiseG;
uniform float uLitterAmount;
varying vec4 vLitter;
vec4 litterLayer( vec2 wuv, float extra ) {
	vec4 lt = texture2D( tLitter, wuv * 0.3 );
	vec4 lt2 = texture2D( tLitter, wuv * 0.19 + 0.37 );
	float n = texture2D( tNoiseG, wuv * 0.06 ).g * 0.65 + texture2D( tNoiseG, wuv * 0.31 ).r * 0.35;
	float amt = clamp( vLitter.a * uLitterAmount + extra, 0.0, 1.0 );
	float th = 1.0 - amt;
	float c1 = lt.a * smoothstep( th - 0.02, th + 0.16, n );
	float c2 = lt2.a * smoothstep( th + 0.1, th + 0.28, n );
	// where the fall is heaviest the ground disappears under a matted carpet
	float carpet = smoothstep( 0.6, 0.95, amt ) * smoothstep( th + 0.12, th + 0.42, n + 0.22 );
	vec3 col = mix( lt2.rgb * 0.9, lt.rgb, c1 );
	col = mix( vec3( 0.62, 0.55, 0.4 ) * ( 0.6 + 0.6 * n ), col, max( c1, c2 ) );
	return vec4( col * vLitter.rgb, max( max( c1, c2 ), carpet * 0.9 ) * step( 0.004, amt ) );
}
`,Fn={tLitter:{value:null},tNoiseG:{value:null},uLitterAmount:{value:1},uDry:{value:1}};function dp(s){Fn.tLitter.value=Zd(),Fn.tNoiseG.value=Ar();let t=fp(he.minX,he.maxX,Un,-9e3,9e3),e=fp(he.minZ,he.maxZ,Un,-9e3,1400),n=t.length,i=e.length,r=new Float32Array(n*i*3),o=new Uint8Array(n*i*4),a=new Uint8Array(n*i*4),l=t.indexOf(he.minX),c=e.indexOf(he.minZ);for(let E=0;E<i;E++){let M=e[E],b=E-c;for(let S=0;S<n;S++){let x=t[S],_=S-l,w=_>=0&&_<_e.nx&&b>=0&&b<_e.nz?_e.data[b*_e.nx+_]:zo(x,M),A=(E*n+S)*3;r[A]=x,r[A+1]=w,r[A+2]=M;let C=Fe(x,M),L=Yi(x,M),I=0,U=0,O=0,z=0;C<60&&(I=(1-L)*ce(42.6,41.2,C),w<.2&&(I=Math.max(I,1-L)),U=L*ce(30,13,C),w<-.3&&(U=Math.max(U,L)));let X=Math.max(Math.abs(x)-430,-M-400,0);z=ce(20,160,X)*(C>30?1:0);let D=(E*n+S)*4;o[D]=We(I)*255,o[D+1]=We(U)*255,o[D+2]=We(O)*255,o[D+3]=We(z)*255}}let h=new Uint32Array((n-1)*(i-1)*6),f=0;for(let E=0;E<i-1;E++)for(let M=0;M<n-1;M++){let b=E*n+M,S=b+1,x=b+n,_=x+1;h[f++]=b,h[f++]=x,h[f++]=S,h[f++]=S,h[f++]=x,h[f++]=_}let u=new De;u.setAttribute("position",new Ze(r,3)),u.setAttribute("aSplat",new Ze(o,4,!0)),u.setAttribute("aLitter",new Ze(a,4,!0)),u.setIndex(new Ze(h,1)),u.computeVertexNormals(),u.computeBoundingSphere();let d=Io(),p={tSand:{value:Yd()},tRock:{value:d.map},tSoil:{value:Kl()},...Fn},v=new ve({map:qd(),roughness:1,metalness:0});Xi(v,"terrain",E=>{E.vertexShader=E.vertexShader.replace("#include <common>",`#include <common>
					attribute vec4 aSplat;
					attribute vec4 aLitter;
					varying vec4 vSplat;
					varying vec4 vLitter;
					varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
					vSplat = aSplat;
					vLitter = aLitter;
					vWPos = position;`),E.fragmentShader=E.fragmentShader.replace("#include <common>",`#include <common>
					uniform sampler2D tSand;
					uniform sampler2D tRock;
					uniform sampler2D tSoil;
					uniform float uDry;
					uniform vec3 uLightDir;
					varying vec4 vSplat;
					varying vec3 vWPos;
					float gWet;
					${ac}`).replace("#include <fog_pars_fragment>",`#include <fog_pars_fragment>
${ps}`).replace("#include <map_fragment>",`
					vec2 wuv = vWPos.xz;
					float nA = texture2D( tNoiseG, wuv * 0.013 ).r;
					float nB = texture2D( tNoiseG, wuv * 0.07 ).g;
					vec3 gcol = texture2D( map, wuv * 0.21 ).rgb;
					gcol = mix( gcol, texture2D( map, wuv * 0.053 + 0.3 ).rgb, 0.4 ) * ( 0.72 + 0.56 * nA );
					// late-autumn lawn: duller, with straw-coloured patches
					float dryG = smoothstep( 0.42, 0.75, nA * 0.6 + nB * 0.4 );
					gcol = mix( gcol, vec3( dot( gcol, vec3( 0.33 ) ) ) * vec3( 1.25, 1.12, 0.62 ), clamp( ( 0.28 + 0.34 * dryG ) * uDry, 0.0, 0.9 ) ) * 0.9;
					vec3 scol = texture2D( tSand, wuv * 0.33 ).rgb * ( 0.9 + 0.2 * nA );
					vec3 rcol = mix( texture2D( tRock, wuv * 0.13 ).rgb, texture2D( tRock, wuv * 0.031 ).rgb, 0.45 ) * ( 0.7 + 0.5 * nB );
					vec3 ocol = texture2D( tSoil, wuv * 0.36 ).rgb;
					vec3 wcol = vec3( 0.075, 0.115, 0.05 ) * ( 0.55 + 0.9 * nB ) + vec3( 0.07, 0.03, 0.0 ) * smoothstep( 0.55, 0.8, nA );
					float wS = smoothstep( 0.38, 0.62, vSplat.x + ( nB - 0.5 ) * 0.3 );
					float wR = smoothstep( 0.35, 0.65, vSplat.y + ( nB - 0.5 ) * 0.5 );
					float wO = smoothstep( 0.3, 0.7, vSplat.z + ( nB - 0.5 ) * 0.5 );
					float wW = vSplat.w;
					vec3 tcol = mix( gcol, ocol, wO );
					tcol = mix( tcol, wcol, wW );
					tcol = mix( tcol, scol, wS );
					tcol = mix( tcol, rcol, wR );
					// seaweed-dark, wet band on the reefs and damp sand by the waterline
					float tide = smoothstep( 0.34, 0.04, vWPos.y );
					gWet = tide * max( wS, wR * 0.8 );
					tcol *= mix( 1.0, 0.52, gWet );
					tcol = mix( tcol, tcol * vec3( 0.55, 0.62, 0.42 ), wR * smoothstep( 1.3, 0.2, vWPos.y ) * 0.6 );
					vec4 lit = litterLayer( wuv, 0.0 );
					tcol = mix( tcol, lit.rgb, lit.a * ( 1.0 - wS ) * ( 1.0 - wR ) );
					diffuseColor.rgb = tcol;`).replace("#include <roughnessmap_fragment>","float roughnessFactor = mix( roughness, 0.16, gWet * wS );").replace("#include <opaque_fragment>",`
					{
						// wet sand mirrors the sky
						vec3 Vw = normalize( cameraPosition - vWPos );
						float fr = 0.03 + 0.97 * pow( 1.0 - max( Vw.y, 0.0 ), 5.0 );
						vec3 Rw = reflect( - Vw, vec3( 0.0, 1.0, 0.0 ) );
						outgoingLight += skyThroughAir( vWPos, Rw ) * fr * gWet * wS * 0.85;
					}
					#include <opaque_fragment>`)},p);let m=new Xt(u,v);m.receiveShadow=!0,m.castShadow=!1,m.name="terrain",s.add(m);function g(E){let M=u.getAttribute("aLitter");for(let b=0;b<_e.nz;b++)for(let S=0;S<_e.nx;S++){let x=S+l,_=b+c,T=(_*n+x)*4,w=E(t[x],e[_]);w&&(a[T]=w[0]*255,a[T+1]=w[1]*255,a[T+2]=w[2]*255,a[T+3]=w[3]*255)}M.needsUpdate=!0}function y(E){let M=u.getAttribute("aSplat");for(let b=0;b<_e.nz;b++)for(let S=0;S<_e.nx;S++){let x=S+l,_=b+c;o[(_*n+x)*4+2]=We(E(t[x],e[_]))*255}M.needsUpdate=!0}return{mesh:m,paintLitter:g,paintSoil:y}}var lc=new H,bn=new H,vi=new H,_i=new H,Ce=class{constructor(){this.pos=[],this.nrm=[],this.uv=[],this.col=[],this.idx=[],this.extra=null,this.n=0,this.matrix=null,this.normalMatrix=new Vt,this.color=[1,1,1],this.uvScale=1,this.ext=[0,0,0,0]}useExtra(){return this.extra||(this.extra=new Array(this.pos.length/3*4).fill(0)),this}setExtra(t,e,n,i){this.ext[0]=t,this.ext[1]=e,this.ext[2]=n,this.ext[3]=i}setMatrix(t){this.matrix=t,t&&this.normalMatrix.getNormalMatrix(t)}setColor(t,e,n){this.color[0]=t,this.color[1]=e,this.color[2]=n}vert(t,e,n,i,r,o,a,l,c=1){return this.matrix?(lc.set(t,e,n).applyMatrix4(this.matrix),bn.set(i,r,o).applyMatrix3(this.normalMatrix).normalize(),this.pos.push(lc.x,lc.y,lc.z),this.nrm.push(bn.x,bn.y,bn.z)):(this.pos.push(t,e,n),this.nrm.push(i,r,o)),this.uv.push(a*this.uvScale,l*this.uvScale),this.col.push(this.color[0]*c,this.color[1]*c,this.color[2]*c),this.extra&&this.extra.push(this.ext[0],this.ext[1],this.ext[2],this.ext[3]),this.n++}tri(t,e,n){this.idx.push(t,e,n)}quad(t,e,n,i,r=null,o=null){vi.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),_i.set(i[0]-t[0],i[1]-t[1],i[2]-t[2]);let a=vi.length(),l=_i.length();bn.crossVectors(vi,_i).normalize();let c=bn.x,h=bn.y,f=bn.z,u=r?r[0]:0,d=r?r[1]:0,p=r?r[2]:a,v=r?r[3]:l,m=o||[1,1,1,1],g=this.vert(t[0],t[1],t[2],c,h,f,u,d,m[0]),y=this.vert(e[0],e[1],e[2],c,h,f,p,d,m[1]),E=this.vert(n[0],n[1],n[2],c,h,f,p,v,m[2]),M=this.vert(i[0],i[1],i[2],c,h,f,u,v,m[3]);this.idx.push(g,y,E,g,E,M)}tri3(t,e,n,i=null){vi.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),_i.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),bn.crossVectors(vi,_i).normalize();let r=vi.length(),o=vi.x/r,a=vi.y/r,l=vi.z/r,c=_i.x*o+_i.y*a+_i.z*l,h=Math.sqrt(Math.max(_i.lengthSq()-c*c,0)),f=i||[0,0,r,0,c,h],u=bn.x,d=bn.y,p=bn.z,v=this.vert(t[0],t[1],t[2],u,d,p,f[0],f[1]),m=this.vert(e[0],e[1],e[2],u,d,p,f[2],f[3]),g=this.vert(n[0],n[1],n[2],u,d,p,f[4],f[5]);this.idx.push(v,m,g)}poly(t,e,n,i=t[0]){vi.set(t[1][0]-t[0][0],t[1][1]-t[0][1],t[1][2]-t[0][2]),_i.set(t[2][0]-t[0][0],t[2][1]-t[0][1],t[2][2]-t[0][2]),bn.crossVectors(vi,_i).normalize();let r=bn.x,o=bn.y,a=bn.z,l=this.n;for(let c of t){let h=c[0]-i[0],f=c[1]-i[1],u=c[2]-i[2];this.vert(c[0],c[1],c[2],r,o,a,h*e[0]+f*e[1]+u*e[2],h*n[0]+f*n[1]+u*n[2])}for(let c=1;c<t.length-1;c++)this.idx.push(l,l+c,l+c+1)}box(t,e,n,i,r,o,a="xXyYzZ",l=1){let c=t-i/2,h=t+i/2,f=e-r/2,u=e+r/2,d=n-o/2,p=n+o/2,v=l,m=[v,v,1,1];a.includes("Z")&&this.quad([c,f,p],[h,f,p],[h,u,p],[c,u,p],null,m),a.includes("z")&&this.quad([h,f,d],[c,f,d],[c,u,d],[h,u,d],null,m),a.includes("X")&&this.quad([h,f,p],[h,f,d],[h,u,d],[h,u,p],null,m),a.includes("x")&&this.quad([c,f,d],[c,f,p],[c,u,p],[c,u,d],null,m),a.includes("Y")&&this.quad([c,u,p],[h,u,p],[h,u,d],[c,u,d]),a.includes("y")&&this.quad([c,f,d],[h,f,d],[h,f,p],[c,f,p],null,[v,v,v,v])}cylinder(t,e,n,i,r,o,a=12,{capTop:l=!1,capBottom:c=!1,a0:h=0,a1:f=Math.PI*2,shadeBottom:u=1}={}){let d=this.n,p=(i-r)/o,v=Math.hypot(1,p);for(let m=0;m<=a;m++){let g=h+(f-h)*m/a,y=Math.cos(g),E=Math.sin(g),M=g*Math.max(i,r);this.vert(t+y*i,e,n+E*i,y/v,p/v,E/v,M,0,u),this.vert(t+y*r,e+o,n+E*r,y/v,p/v,E/v,M,o,1)}for(let m=0;m<a;m++){let g=d+m*2;this.idx.push(g,g+1,g+3,g,g+3,g+2)}if(l&&r>0){let m=this.vert(t,e+o,n,0,1,0,0,0),g=this.n;for(let y=0;y<=a;y++){let E=h+(f-h)*y/a;this.vert(t+Math.cos(E)*r,e+o,n+Math.sin(E)*r,0,1,0,Math.cos(E)*r,Math.sin(E)*r)}for(let y=0;y<a;y++)this.idx.push(m,g+y+1,g+y)}if(c&&i>0){let m=this.vert(t,e,n,0,-1,0,0,0),g=this.n;for(let y=0;y<=a;y++){let E=h+(f-h)*y/a;this.vert(t+Math.cos(E)*i,e,n+Math.sin(E)*i,0,-1,0,Math.cos(E)*i,Math.sin(E)*i)}for(let y=0;y<a;y++)this.idx.push(m,g+y,g+y+1)}}prism(t,e,n,{capTop:i=!0,capBottom:r=!1,shadeBottom:o=1}={}){let a=t.length;for(let l=0;l<a;l++){let c=t[l],h=t[(l+1)%a];this.quad([h[0],e,h[1]],[c[0],e,c[1]],[c[0],n,c[1]],[h[0],n,h[1]],null,[o,o,1,1])}if(i){let l=t.map(c=>[c[0],n,c[1]]).reverse();this.poly(l,[1,0,0],[0,0,1],[0,n,0])}if(r){let l=t.map(c=>[c[0],e,c[1]]);this.poly(l,[1,0,0],[0,0,1],[0,e,0])}}get empty(){return this.idx.length===0}build(){let t=new De;return t.setAttribute("position",new le(this.pos,3)),t.setAttribute("normal",new le(this.nrm,3)),t.setAttribute("uv",new le(this.uv,2)),t.setAttribute("color",new le(this.col,3)),this.extra&&t.setAttribute("aExtra",new le(this.extra,4)),t.setIndex(this.n>65535?new Ps(this.idx,1):new Cs(this.idx,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}},ms=class{constructor(t=170){this.cell=t,this.map=new Map}get(t,e,n){let i=`${t}|${Math.floor(e/this.cell)}|${Math.floor(n/this.cell)}`,r=this.map.get(i);return r||(r=new Ce,r.materialKey=t,this.map.set(i,r)),r}buildMeshes(t,e,n={}){let i=[];for(let r of this.map.values()){if(r.empty)continue;let o=t[r.materialKey];if(!o){console.warn("missing material",r.materialKey);continue}let a=new Xt(r.build(),o),l=n[r.materialKey]||{};a.castShadow=l.cast!==!1,a.receiveShadow=l.receive!==!1,a.matrixAutoUpdate=!1,e.add(a),i.push(a)}return i}};var yi=.15,ko={ginkgo:[.95,.66,.07,1],maple:[.86,.3,.07,.92],plane:[.6,.4,.15,.85],crape:[.74,.33,.1,.42],peach:[.7,.48,.14,.38],crabapple:[.76,.5,.1,.45],cedar:[.42,.3,.16,.3],juniper:[.4,.32,.18,.1],pine:[.48,.34,.18,.34]};function pp(s,t,e){let n={};for(let i in s)n[i]=ht(s[i],t[i],e);return n}function Vs(s,t,e,n=i=>i.half+i.sw){let i=[],r=null,o=null,a=s.pts;for(let l=0;l<a.length;l++){let c=a[l],h=c.x+c.nx*t*e,f=c.z+c.nz*t*e,u=1e9,d=oi(h,f,30,s);d&&!d.beyond&&(s.id==="shanhai"&&d.road.id==="huanghai"&&d.i<10||s.id==="huanghai"&&d.road.id==="shanhai"&&d.i>d.road.pts.length-10||(u=d.dist-n(d.road)));let p={x:h,z:f,y:c.y,s:c.s,cx:c.x,cz:c.z,nx:c.nx*t,nz:c.nz*t,tx:c.tx,tz:c.tz,D:u};o?o.D>0&&u>0?r.push(p):o.D>0&&u<=0?(r.push(pp(o,p,o.D/(o.D-u))),r.length>1&&i.push(r),r=null):o.D<=0&&u>0&&(r=[pp(o,p,o.D/(o.D-u)),p]):u>0&&(r=[p]),o=p}return r&&r.length>1&&i.push(r),i}var cc=(s,t)=>[s.x+s.nx*t,s.z+s.nz*t];function mp(s){let t=new ms(190);for(let o of Xe){let a=ko[o.tree],l=o.pts,c=["zhengyang","shanhai","wusheng","ningwu","zijing"].includes(o.id)?1:0;for(let h=0;h<l.length-1;h++){let f=l[h],u=l[h+1],d=t.get("road",f.x,f.z).useExtra();d.setColor(a[0],a[1],a[2]);let p=o.half,v=b=>{let S=oi(b.x,b.z,30,o);return!S||S.beyond||o.id==="shanhai"&&S.road.id==="huanghai"&&S.i<10||o.id==="huanghai"&&S.road.id==="shanhai"&&S.i>S.road.pts.length-10?1:ce(S.road.half+.5,S.road.half+S.road.sw+3.5,S.dist)},m=(b,S,x)=>{let _=b.jc??(b.jc=v(b));return d.setExtra(S,x,a[3]*_,c*(_>.98?1:0)),d.vert(b.x+b.nx*p*S,b.y,b.z+b.nz*p*S,0,1,0,0,0)},g=m(f,-1,f.s),y=m(f,1,f.s),E=m(u,1,u.s),M=m(u,-1,u.s);d.tri(g,E,M),d.tri(g,y,E)}for(let h of[-1,1]){let f=Vs(o,h,o.half);for(let u of f)for(let d=0;d<u.length-1;d++){let p=u[d],v=u[d+1],m=t.get("pave",p.x,p.z).useExtra();m.setColor(a[0],a[1],a[2]),m.setExtra(0,0,Math.min(1,a[3]*1.1),0);let g=o.sw,y=cc(p,0),E=cc(p,g),M=cc(v,0),b=cc(v,g),S=p.y+yi,x=v.y+yi;((U,O,z,X)=>{let D=m.vert(U[0],S,U[1],0,1,0,p.s*.5,0),F=m.vert(O[0],S,O[1],0,1,0,p.s*.5,g*.5),k=m.vert(X[0],x,X[1],0,1,0,v.s*.5,g*.5),$=m.vert(z[0],x,z[1],0,1,0,v.s*.5,0);h>0?(m.tri(D,k,$),m.tri(D,F,k)):(m.tri(D,$,k),m.tri(D,k,F))})(y,E,M,b),m.setExtra(0,0,0,0);let T=-p.nx,w=-p.nz,A=m.vert(y[0],p.y-.05,y[1],T,0,w,p.s*.5,.9),C=m.vert(M[0],v.y-.05,M[1],T,0,w,v.s*.5,.9),L=m.vert(M[0],x,M[1],T,0,w,v.s*.5,1),I=m.vert(y[0],S,y[1],T,0,w,p.s*.5,1);h>0?(m.tri(A,L,C),m.tri(A,I,L)):(m.tri(A,C,L),m.tri(A,L,I))}}}for(let o of Ai){let a=xi[o.a],l=xi[o.b],c=d=>{let p=0,v=1e9;return d.pts.forEach((m,g)=>{let y=(m.x-o.x)**2+(m.z-o.z)**2;y<v&&(v=y,p=g)}),d.pts[p]},h=c(a),f=c(l),u=ko[a.tree];for(let d of[-1,1])for(let p of[-1,1]){let v=(C,L)=>[o.x+h.nx*d*C+f.nx*p*L,o.z+h.nz*d*C+f.nz*p*L],m=v(a.half+a.sw*.5,l.half+l.sw*.5),g=oi(m[0],m[1],20,a);if(!g||g.beyond)continue;let y=.04,E=v(a.half,l.half),M=v(a.half+a.sw+y,l.half),b=v(a.half+a.sw+y,l.half+l.sw+y),S=v(a.half,l.half+l.sw+y),x=h.y+yi-.004,_=t.get("pave",o.x,o.z).useExtra();_.setColor(u[0],u[1],u[2]),_.setExtra(0,0,u[3],0);let T=[E,M,b,S].map(C=>[C[0],x,C[1]]);(T[1][0]-T[0][0])*(T[3][2]-T[0][2])-(T[1][2]-T[0][2])*(T[3][0]-T[0][0])<0?_.quad(T[0],T[1],T[2],T[3]):_.quad(T[0],T[3],T[2],T[1]),_.setExtra(0,0,0,0);let A=(C,L)=>{let I=[C[0],h.y-.05,C[1]],U=[L[0],h.y-.05,L[1]],O=[L[0],x,L[1]],z=[C[0],x,C[1]],X=(C[0]+L[0])/2-o.x,D=(C[1]+L[1])/2-o.z,F=L[0]-C[0];-(L[1]-C[1])*X+F*D<0?_.quad(I,U,O,z):_.quad(U,I,z,O)};A(E,M),A(E,S)}}let e=Lo(),n=new ve({map:Jd(),roughness:.93,metalness:0});Xi(n,"road",o=>{o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
					attribute vec3 color;
					attribute vec4 aExtra;
					varying vec4 vLitter;
					varying vec4 vRoad;
					varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
					vLitter = vec4( color, aExtra.z );
					vRoad = aExtra;
					vWPos = position;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
					varying vec4 vRoad;
					varying vec3 vWPos;
					${ac}`).replace("#include <map_fragment>",`
					vec2 wuv = vWPos.xz;
					vec3 acol = texture2D( map, wuv * 0.17 ).rgb;
					float big = texture2D( tNoiseG, wuv * 0.019 ).r;
					float mid = texture2D( tNoiseG, wuv * 0.11 ).g;
					acol *= 0.8 + 0.4 * big;
					// lighter, polished wheel tracks
					float lane = abs( abs( vRoad.x ) - 0.5 );
					acol *= 1.0 + 0.09 * smoothstep( 0.22, 0.0, lane ) * ( 0.5 + mid );
					// a worn centre line on the through streets
					float line = smoothstep( 0.028, 0.016, abs( vRoad.x ) ) * step( fract( vRoad.y / 9.0 ), 0.5 ) * vRoad.w;
					line *= smoothstep( 0.3, 0.6, mid + big * 0.5 );
					acol = mix( acol, vec3( 0.62, 0.5, 0.2 ), line * 0.7 );
					// leaves are swept by traffic into the gutters
					float gutter = smoothstep( 0.35, 1.0, abs( vRoad.x ) );
					vec4 lit = litterLayer( wuv, ( gutter * 0.62 - 0.48 ) * vLitter.a - 0.04 );
					acol = mix( acol, lit.rgb, lit.a );
					diffuseColor.rgb = acol;`)},Fn);let i=new ve({map:e.map,normalMap:e.normalMap,roughness:.9,metalness:0});i.normalScale.set(.7,.7),Xi(i,"pave",o=>{o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
					attribute vec3 color;
					attribute vec4 aExtra;
					varying vec4 vLitter;
					varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
					vLitter = vec4( color, aExtra.z );
					vWPos = position;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
					varying vec3 vWPos;
					float gLitterCover;
					${ac}`).replace("#include <map_fragment>",`
					#include <map_fragment>
					{
						vec2 wuv = vWPos.xz;
						diffuseColor.rgb *= 0.82 + 0.36 * texture2D( tNoiseG, wuv * 0.03 ).r;
						vec4 lit = litterLayer( wuv, - 0.2 );
						diffuseColor.rgb = mix( diffuseColor.rgb, lit.rgb, lit.a );
						gLitterCover = lit.a;
					}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
					normal = normalize( mix( normal, nonPerturbedNormal, gLitterCover * 0.85 ) );`)},Fn);let r=new Ke;return r.name="roads",t.buildMeshes({road:n,pave:i},r,{road:{cast:!1},pave:{cast:!1}}),s.add(r),r}var Se=(s=0,t=0,e=0)=>new H(s,t,e),_u=Se(),Ho=Se(),hc=Se(),yu=Se(),Zn=new je,xs=new je,Nr=new Ft,gp=new Ft,Rn=Se(),Yn=Se(),Ri=Se(),fc=Se(0,0,1),vp=Se(0,1,0);function Xs(s,t,e,n=2){let i=t[0],r=t[t.length-1];yu.set(0,0,1),Math.abs(r.z-i.z)>Math.hypot(r.x-i.x,r.y-i.y)&&yu.set(1,0,0);let o=[],a=0;for(let l=0;l<t.length;l++){let c=t[l],h=t[Math.max(0,l-1)],f=t[Math.min(t.length-1,l+1)];_u.set(f.x-h.x,f.y-h.y,f.z-h.z).normalize(),Ho.crossVectors(_u,yu).normalize(),hc.crossVectors(_u,Ho).normalize(),l>0&&(a+=Math.hypot(c.x-t[l-1].x,c.y-t[l-1].y,c.z-t[l-1].z)),o.push(s.n);for(let u=0;u<=e;u++){let d=u/e*en,p=Math.cos(d),v=Math.sin(d),m=Ho.x*p+hc.x*v,g=Ho.y*p+hc.y*v,y=Ho.z*p+hc.z*v;s.vert(c.x+m*c.r,c.y+g*c.r,c.z+y*c.r,m,g,y,u/e*n,a*.45)}}for(let l=0;l<o.length-1;l++)for(let c=0;c<e;c++){let h=o[l]+c,f=o[l+1]+c;s.tri(h,h+1,f),s.tri(h+1,f+1,f)}}function Su(s,t,e,n,i,r=4){let o=[];for(let a=0;a<=r;a++){let l=a/r,c=1-l;o.push({x:c*c*s.x+2*c*l*t.x+l*l*e.x,y:c*c*s.y+2*c*l*t.y+l*l*e.y,z:c*c*s.z+2*c*l*t.z+l*l*e.z,r:ht(n,i,Math.pow(l,.8))})}return o}function Ws(s,t){let e=ie(t,0,1)*(s.length-1),n=Math.min(Math.floor(e),s.length-2),i=e-n;return{x:ht(s[n].x,s[n+1].x,i),y:ht(s[n].y,s[n+1].y,i),z:ht(s[n].z,s[n+1].z,i),r:ht(s[n].r,s[n+1].r,i)}}function Vo(s,t){let e=s.range(-1,1),n=s.range(0,en),i=Math.sqrt(1-e*e);return t.set(Math.cos(n)*i,e,Math.sin(n)*i)}function Ur(s,t,e,n,i,r,o,a){s.push({x:t.x,y:t.y,z:t.z,qx:e.x,qy:e.y,qz:e.z,qw:e.w,sx:n,sy:i,nx:r.x,ny:r.y,nz:r.z,ao:o,rand:a.next(),hue:a.next()})}function bu(s,t){return Zn.setFromUnitVectors(fc,s),xs.setFromAxisAngle(fc,t),Zn.multiply(xs)}function gs(s,t){let e=new Ce,n=[],i=t.height*s.range(.92,1.08),r=t.trunkH*s.range(.9,1.1),o=t.trunkR,a=s.range(0,en),l=s.range(0,t.lean??.25),c=Math.cos(a)*l,h=Math.sin(a)*l,f=t.leader?i*.93:r,u=[{x:0,y:-.5,z:0,r:o*1.5}],d=t.leader?7:3;for(let A=0;A<=d;A++){let C=A/d,L=f*C,I=Math.sin(C*Math.PI*1.3)*.12*(t.wobble??1);u.push({x:c*L*.12+I*h*2,y:L,z:h*L*.12-I*c*2,r:A===0?o*1.3:ht(o,t.leader?o*.16:o*.78,Math.pow(C,t.leader?.9:1))})}Xs(e,u,t.sides??7,2);let p=[],v=t.crownR*s.range(.92,1.08),m=r+(i-r)*.52,g=(i-r)*.56,y=A=>Ws(u,(1+A/f*d)/(d+1)),E=t.limbs,M=s.range(0,en);for(let A=0;A<E;A++){let C=M+A/E*en+s.range(-.3,.3),L=Math.cos(C),I=Math.sin(C),U,O,z;if(t.leader){let F=(A+s.range(.1,.9))/E,k=ht(r,f*.86,F),$=y(k),tt=Math.pow(Math.sin(Math.PI*(.22+.74*F)),.7),W=v*tt*s.range(.85,1.1),Z=W*Math.tan(t.limbEl)*s.range(.8,1.15);U={x:$.x,y:k,z:$.z,r:$.r},O={x:$.x+L*W,y:Math.min(k+Z,i*.97),z:$.z+I*W},z={x:$.x+L*W*.6,y:k+Z*.25,z:$.z+I*W*.6}}else{let F=u[u.length-1],k=v*s.range(.55,.9),$=ht(r+(i-r)*.72,i*.98,s.next());U={x:F.x,y:r*s.range(.9,1),z:F.z,r:F.r},O={x:F.x+L*k,y:$,z:F.z+I*k};let tt=(i-r)*(t.arch??.6);z={x:F.x+L*k*.25,y:r+tt,z:F.z+I*k*.25}}let X=U.r*(t.limbR??.62),D=Su(U,z,O,X,Math.max(X*.16,.02),3);Xs(e,D,4,1.5);for(let F of[.62,.86,1])p.push(Ws(D,F));for(let F=0;F<(t.subs??2);F++){let k=s.range(.35,.8),$=Ws(D,k),tt=C+s.sign()*s.range(.5,1.3),W=v*s.range(.35,.6),Z={x:$.x+Math.cos(tt)*W,y:$.y+W*s.range(.25,.8),z:$.z+Math.sin(tt)*W},j={x:($.x+Z.x)/2,y:$.y+(Z.y-$.y)*.25,z:($.z+Z.z)/2},lt=Su($,j,Z,$.r*.6,.02,2);Xs(e,lt,3,1),p.push(Ws(lt,.7),Ws(lt,1))}}t.leader&&p.push({x:u[u.length-1].x,y:i*.95,z:u[u.length-1].z});let b=Math.max(1,Math.round(t.cards/p.length)),S=Se(),x=Se(),_=Se(),T=Se(),w=Se();for(let A of p)for(let C=0;C<b;C++){Vo(s,S),S.y=S.y*.85+.12,S.normalize();let L=t.puffR*s.range(.4,1);x.set(A.x+S.x*L,A.y+S.y*L*.8,A.z+S.z*L);let I=Math.hypot(x.x,x.z);I>v*1.12&&(x.x*=v*1.12/I,x.z*=v*1.12/I),x.y=ie(x.y,r*.92,i*1.04),Vo(s,w),_.copy(S).addScaledVector(w,.75).normalize();let U=bu(_,s.range(0,en));T.set(x.x/v,(x.y-m)/g,x.z/v);let O=T.length();T.normalize().multiplyScalar(.7).addScaledVector(S,.3),T.y+=.18,T.normalize();let z=ht(.42,1,ce(.3,1,O))*ht(.74,1,We(T.y*.7+.6)),X=t.cardSize*s.range(.82,1.22);Ur(n,x,U,X,X,T,z,s)}return{geo:e.build(),cards:n,height:i,crownR:v}}function xp(s,t){let e=new Ce,n=[],i=t.height*s.range(.88,1.1),r=t.clear,o=t.baseR*s.range(.9,1.1),a=s.range(-.02,.02),l=s.range(-.02,.02),c=[{x:0,y:-.5,z:0,r:t.trunkR*1.5}];for(let d=0;d<=6;d++){let p=d/6;c.push({x:a*i*p,y:i*.985*p,z:l*i*p,r:ht(t.trunkR*(d===0?1.25:1),.03,Math.pow(p,.85))})}Xs(e,c,8,2);let h=Se(),f=Se(),u=0;for(let d=r;d<i*.96;d+=ht(.8,.6,(d-r)/(i-r))){let p=(d-r)/(i-r),v=o*Math.pow(1-p,.82)*s.range(.86,1.1)+.3,m=Math.round(ht(7,4,p)),g=u*1.1+s.range(0,1);u++;for(let y=0;y<m;y++){let E=g+y/m*en+s.range(-.25,.25),M=v*s.range(.85,1.1),b=Math.asin(ie((d-t.minTip)/M,0,.55)),S=Math.min(s.range(.16,.36)+(1-p)*.12,b);b<.14&&(S=s.range(-.24,b)),Rn.set(Math.cos(E)*Math.cos(S),-Math.sin(S),Math.sin(E)*Math.cos(S)),Yn.set(-Math.sin(E),0,Math.cos(E)),xs.setFromAxisAngle(Rn,s.range(-.35,.35)),Yn.applyQuaternion(xs),Ri.crossVectors(Rn,Yn).normalize(),Nr.makeBasis(Rn,Yn,Ri),Zn.setFromRotationMatrix(Nr),h.set(a*d+Rn.x*M*.5,d+Rn.y*M*.5,l*d+Rn.z*M*.5),f.set(Math.cos(E)*.5,.8,Math.sin(E)*.5).normalize(),Ur(n,h,Zn,M*1.1,ie(M*.95,1.3,4),f,s.range(.82,1),s)}}for(let d=0;d<2;d++)Rn.set(0,1,0),Yn.set(Math.cos(d*1.57),0,Math.sin(d*1.57)),Ri.crossVectors(Rn,Yn).normalize(),Nr.makeBasis(Rn,Yn,Ri),Zn.setFromRotationMatrix(Nr),h.set(a*i,i*.94,l*i),Ur(n,h,Zn,1.9,1,vp,1,s);return{geo:e.build(),cards:n,height:i,crownR:o}}function W_(s,t){let e=new Ce,n=[],i=t.height*s.range(.8,1.2),r=s.range(-.5,.5),o=s.range(.1,.32)*i,a=[{x:0,y:-.5,z:0,r:t.trunkR*1.5}],l=s.range(-.5,.5);for(let y=0;y<=5;y++){let E=y/5,M=Math.sin(E*Math.PI)*l*.9;a.push({x:Math.cos(r)*o*E*E-Math.sin(r)*M,y:i*.93*E,z:Math.sin(r)*o*E*E+Math.cos(r)*M,r:ht(t.trunkR*(y===0?1.25:1),t.trunkR*.3,E)})}Xs(e,a,7,2);let c=[],h=s.int(5,8);for(let y=0;y<h;y++){let E=ht(.42,.98,(y+s.next())/h),M=Ws(a,(E*5+1)/6),b=s.range(0,en),S=s.range(1.4,3.3)*(.6+E*.6)*(i/9),x={x:M.x+Math.cos(b)*S,y:M.y+S*s.range(.05,.35),z:M.z+Math.sin(b)*S},_={x:(M.x+x.x)/2,y:M.y+(x.y-M.y)*.1,z:(M.z+x.z)/2},T=Su(M,_,x,M.r*.55,.03,2);Xs(e,T,3,1),c.push(x,Ws(T,.6))}c.push({x:a[6].x,y:i*.97,z:a[6].z});let f=Se(),u=Se(),d=Se(),p=Se(),v=Math.max(2,Math.round(t.cards/c.length)),m=a[6].x*.6,g=a[6].z*.6;for(let y of c)for(let E=0;E<v;E++){let M=s.range(0,en),b=s.range(0,.95)*(i/9);f.set(y.x+Math.cos(M)*b,y.y+s.range(-.25,.4),y.z+Math.sin(M)*b),Vo(s,p),E%4===3?u.set(Math.cos(M),.15,Math.sin(M)).normalize():u.set(p.x*.42,1,p.z*.42).normalize();let S=bu(u,s.range(0,en));d.set(f.x-m,0,f.z-g).normalize().multiplyScalar(.45),d.y=.85,d.normalize();let x=t.cardSize*s.range(.85,1.25)*(i/9);Ur(n,f,S,x,x,d,s.range(.78,1),s)}return{geo:e.build(),cards:n,height:i,crownR:3.2*(i/9)}}function X_(s,t){let e=new Ce,n=[],i=t.height*s.range(.85,1.15),r=t.radius*s.range(.9,1.1);Xs(e,[{x:0,y:-.4,z:0,r:.16},{x:0,y:.5,z:0,r:.12},{x:0,y:i*.6,z:0,r:.05}],6,1);let o=Se(),a=Se(),l=t.cards,c=s.sign()*s.range(.4,.7);for(let h=0;h<l;h++){let f=(h+s.next())/l,u=.35+f*(i-.5),d=r*(.5+.5*Math.sin(Math.PI*Math.min(f*1.45,1)))*(1-ce(.62,1,f)*.82),p=h*2.39996+s.range(-.2,.2),v=.35+f*.5;Ri.set(Math.cos(p)*Math.cos(v),Math.sin(v),Math.sin(p)*Math.cos(v)).normalize(),Yn.set(0,1,0).addScaledVector(Ri,-Ri.y).normalize(),xs.setFromAxisAngle(Ri,c),Yn.applyQuaternion(xs),Rn.crossVectors(Yn,Ri).normalize(),Nr.makeBasis(Rn,Yn,Ri),Zn.setFromRotationMatrix(Nr),o.set(Math.cos(p)*d*.62,u,Math.sin(p)*d*.62),a.set(Math.cos(p)*.85,.4,Math.sin(p)*.85).normalize();let m=ht(1.5,1,f)*(r/1.2);Ur(n,o,Zn,m*1.1,m*1.55,a,s.range(.72,1),s)}return{geo:e.build(),cards:n,height:i,crownR:r}}function q_(s,t){let e=[],n=t.radius*s.range(.85,1.2),i=t.height*s.range(.85,1.2),r=Se(),o=Se(),a=Se(),l=Se();for(let c=0;c<t.cards;c++){Vo(s,o),o.y=Math.abs(o.y)*.9+.1,o.normalize();let h=s.range(.55,1);r.set(o.x*n*h,.12+o.y*i*h,o.z*n*h),Vo(s,l),a.copy(o),o.addScaledVector(l,.5).normalize();let f=bu(o,s.range(0,en)),u=t.cardSize*s.range(.85,1.2);Ur(e,r,f,u,u,a,ht(.6,1,We(r.y/i)),s)}return{geo:null,cards:e,height:i,crownR:n}}var Mu=s=>new Rt(s);function Ot(s,t,e,n,i,r){return{a:Mu(s),b:Mu(t),c:Mu(e),amt:n,density:i,trans:r}}var Go={ginkgo:{bark:"ginkgo",leaf:"ginkgo",variants:3,trunkR:.25,deciduous:!0,gen:s=>gs(s,{height:13.5,trunkH:3.1,trunkR:.25,leader:!0,limbs:10,limbEl:.72,crownR:3.5,puffR:1.3,subs:1,cards:112,cardSize:1.55,lean:.12,wobble:.5}),seasons:[Ot(10469189,11915096,8826170,.2,.85,.8),Ot(5212718,6592826,4159016,.2,1,.6),Ot(15118876,15912766,12887590,.14,.9,.95),Ot(12098106,12098106,12098106,0,0,.3)]},maple:{bark:"furrow",leaf:"maple",variants:3,trunkR:.2,deciduous:!0,gen:s=>gs(s,{height:9.5,trunkH:2.5,trunkR:.2,limbs:5,crownR:4.2,puffR:1.45,subs:2,cards:98,cardSize:1.65,arch:.5}),seasons:[Ot(10337098,11847770,13208138,.15,.85,.8),Ot(5013552,6197304,4025384,.2,1,.6),Ot(14181402,12070938,14919208,.3,.9,.85),Ot(9067066,9067066,9067066,0,0,.3)]},plane:{bark:"plane",leaf:"plane",variants:3,trunkR:.42,deciduous:!0,gen:s=>gs(s,{height:16.5,trunkH:4.2,trunkR:.42,limbs:4,crownR:7.2,puffR:2.35,subs:3,cards:110,cardSize:2.65,arch:.72,limbR:.7,sides:10}),seasons:[Ot(10731598,11980638,9416768,.2,.8,.8),Ot(4881712,6131514,4288298,.2,1,.55),Ot(11831856,9333290,8292920,.3,.74,.7),Ot(9071162,9071162,9071162,0,.04,.3)]},broad:{bark:"furrow",leaf:"oval",variants:3,trunkR:.22,deciduous:!0,gen:s=>gs(s,{height:10.5,trunkH:2.6,trunkR:.22,limbs:5,crownR:4.1,puffR:1.5,subs:2,cards:66,cardSize:1.95,arch:.6}),seasons:[Ot(9418821,10864981,8037946,.2,.85,.75),Ot(4158249,5408308,3499300,.2,1,.5),Ot(5208620,6982192,11573804,.2,.92,.6),Ot(6969914,6969914,6969914,0,0,.3)]},peach:{bark:"furrow",leaf:"oval",variants:2,trunkR:.11,deciduous:!0,gen:s=>gs(s,{height:4.3,trunkH:.95,trunkR:.11,limbs:4,crownR:2.25,puffR:.86,subs:2,cards:84,cardSize:1.08,arch:.45,sides:6}),seasons:[Ot(15899320,16234959,14706319,.25,.95,.9),Ot(5078830,6262838,4156968,.2,1,.55),Ot(13208106,11885602,9080888,.3,.52,.75),Ot(6965818,6965818,6965818,0,0,.3)],blossom:[1,0,0,0]},crabapple:{bark:"furrow",leaf:"oval",variants:2,trunkR:.12,deciduous:!0,gen:s=>gs(s,{height:5.3,trunkH:1.5,trunkR:.12,limbs:5,crownR:1.95,puffR:.84,subs:1,cards:75,cardSize:1.05,arch:.75,sides:6}),seasons:[Ot(16173526,16507882,15305384,.3,.95,.9),Ot(4881453,6065718,3959591,.2,1,.55),Ot(13802024,12937760,11018264,.2,.6,.75),Ot(6965818,6965818,6965818,0,0,.3)],blossom:[1,0,0,0]},crape:{bark:"smooth",leaf:"oval",variants:2,trunkR:.09,deciduous:!0,gen:s=>gs(s,{height:4.5,trunkH:.55,trunkR:.1,limbs:4,crownR:1.95,puffR:.78,subs:2,cards:46,cardSize:.92,arch:.8,sides:6}),seasons:[Ot(10140234,11520856,8824892,.2,.8,.8),Ot(4947246,14178974,12730250,.42,1,.6),Ot(13589536,11876890,14390826,.3,.62,.8),Ot(9071194,9071194,9071194,0,0,.3)]},cedar:{bark:"cedar",leaf:"cedar",variants:3,trunkR:.34,deciduous:!1,uvAO:1,gen:s=>xp(s,{height:18,clear:3.3,minTip:2.8,baseR:5,trunkR:.34}),seasons:[Ot(3429439,4548176,6982246,.3,1,.2),Ot(3100218,4153162,5798492,.3,1,.2),Ot(3033657,4086857,5665369,.3,1,.2),Ot(2836022,3823430,5270356,.3,1,.2)]},cedarLow:{bark:"cedar",leaf:"cedar",variants:2,trunkR:.3,deciduous:!1,uvAO:1,gen:s=>xp(s,{height:14,clear:1.5,minTip:.5,baseR:4.4,trunkR:.3}),seasons:[Ot(3429439,4548176,6982246,.3,1,.2),Ot(3100218,4153162,5798492,.3,1,.2),Ot(3033657,4086857,5665369,.3,1,.2),Ot(2836022,3823430,5270356,.3,1,.2)]},pine:{bark:"pine",leaf:"pine",variants:4,trunkR:.2,deciduous:!1,gen:s=>W_(s,{height:9,trunkR:.2,cards:50,cardSize:2.05}),seasons:[Ot(2771500,3561775,5929530,.25,1,.2),Ot(2442026,3232559,4811320,.25,1,.2),Ot(2375722,3166e3,4678458,.25,1,.2),Ot(2243624,2902573,4283446,.25,1,.2)]},juniper:{bark:"cedar",leaf:"juniper",variants:3,trunkR:.14,deciduous:!1,gen:s=>X_(s,{height:6.4,radius:1.25,cards:44}),seasons:[Ot(2377773,3234360,4879430,.25,1,.12),Ot(2114091,2970933,4155457,.25,1,.12),Ot(2048041,2838835,3891774,.25,1,.12),Ot(1915943,2640944,3627834,.25,1,.12)]},bush:{bark:null,leaf:"dense",variants:3,trunkR:0,deciduous:!1,gen:s=>q_(s,{radius:.9,height:1,cards:10,cardSize:1.25}),seasons:[Ot(4155946,5604404,9089098,.25,1,.3),Ot(3101988,4286764,5603386,.2,1,.3),Ot(3034658,4219434,8006684,.12,1,.3),Ot(2770464,3692070,4876848,.1,1,.3)]},wood:{bark:"furrow",leaf:"small",variants:3,trunkR:.25,deciduous:!0,gen:s=>gs(s,{height:12.5,trunkH:3.2,trunkR:.25,limbs:3,crownR:4.8,puffR:2.5,subs:0,cards:27,cardSize:4.2,arch:.6,sides:6}),seasons:[Ot(9418821,10864981,8037946,.2,.9,.6),Ot(4158249,5408308,3499300,.2,1,.45),Ot(4878379,8030768,12092970,.22,.94,.55),Ot(6969914,6969914,6969914,0,.05,.3)]},ivy:{bark:null,leaf:"ivy",variants:0,trunkR:0,deciduous:!0,seasons:[Ot(6986298,8432966,10115642,.1,.8,.5),Ot(3500582,4619310,2906656,.2,1,.4),Ot(11020824,13128730,6057002,.25,.92,.7),Ot(5913130,5913130,5913130,0,.05,.3)]}},_p=`
attribute vec3 aNrm;
attribute vec4 aInfo;
uniform vec4 uWind;
uniform float uTime;
uniform vec4 uLeafP;
uniform vec3 uCamPos;
varying vec4 vInfo;
varying vec2 vCardUv;
`,yp=`
vec3 transformed = vec3( position );
vec3 iPos = instanceMatrix[ 3 ].xyz;
float camD = distance( uCamPos, iPos );
// thin the crown with the season; drop distant cards and enlarge the survivors
float lodKeep = 1.0 - 0.6 * smoothstep( 70.0, 300.0, camD );
float keep = step( aInfo.x, uLeafP.y ) * step( fract( aInfo.x * 13.37 ), lodKeep );
// cards about to hit the lens shrink away instead of smearing across the view
float cardSize = length( instanceMatrix[ 0 ].xyz );
transformed *= keep * inversesqrt( lodKeep ) * smoothstep( 0.22 * cardSize + 0.25, 0.5 * cardSize + 0.8, camD );
`,Mp=`
vec4 mvPosition = instanceMatrix * vec4( transformed, 1.0 );
vec3 wpos = mvPosition.xyz;
{
	float ph = dot( iPos.xz, vec2( 0.13, 0.11 ) );
	float gust = sin( uTime * 1.25 + ph ) * 0.6 + sin( uTime * 2.3 + ph * 1.9 ) * 0.3;
	float sway = uWind.z * aInfo.y * 0.011;
	wpos.xz += uWind.xy * ( gust * sway + sway * 0.6 );
	float fl = sin( uTime * ( 3.5 + aInfo.x * 5.0 ) + aInfo.x * 43.0 + position.x * 3.0 );
	wpos += aNrm * fl * 0.045 * uWind.z * min( aInfo.y * 0.4, 1.0 );
}
mvPosition = viewMatrix * vec4( wpos, 1.0 );
gl_Position = projectionMatrix * mvPosition;
`;function Y_(s,t){s.onBeforeCompile=e=>{mi(e);for(let n in t)e.uniforms[n]=t[n];e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${_p}`).replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
 vMapUv = ( uv * 0.94 + 0.03 + vec2( floor( aInfo.x * 2.0 ), floor( fract( aInfo.x * 7.31 ) * 2.0 ) ) ) * 0.5;
#endif`).replace("#include <begin_vertex>",yp).replace("#include <project_vertex>",Mp)},s.customProgramCacheKey=()=>"leafdepth"}function Z_(s){let t={uLeafA:{value:new Rt},uLeafB:{value:new Rt},uLeafC:{value:new Rt},uLeafP:{value:new ee(.2,1,.6,s.uvAO?1:0)}},e=new Nn({map:Kd(s.leaf),alphaTest:.4,side:Ne});Xi(e,"leaf",i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
${_p}`).replace("#include <uv_vertex>",`#include <uv_vertex>
					vCardUv = uv;
					vInfo = aInfo;
					vMapUv = ( uv * 0.94 + 0.03 + vec2( floor( aInfo.x * 2.0 ), floor( fract( aInfo.x * 7.31 ) * 2.0 ) ) ) * 0.5;`).replace("#include <defaultnormal_vertex>","vec3 transformedNormal = normalize( mat3( viewMatrix ) * aNrm );").replace("#include <begin_vertex>",yp).replace("#include <project_vertex>",Mp).replace("#include <worldpos_vertex>",`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
						vec4 worldPosition = vec4( wpos, 1.0 );
					#endif`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
					uniform vec3 uLeafA;
					uniform vec3 uLeafB;
					uniform vec3 uLeafC;
					uniform vec4 uLeafP;
					varying vec4 vInfo;
					varying vec2 vCardUv;`).replace("#include <map_fragment>",`
					vec4 texel = texture2D( map, vMapUv, - 0.7 );
					float hueMix = fract( vInfo.w + texel.g * 0.75 );
					vec3 leafCol = mix( uLeafA, uLeafB, smoothstep( 0.15, 0.85, hueMix ) );
					leafCol = mix( leafCol, uLeafC, step( 1.0 - uLeafP.x, fract( hueMix * 3.7 + vInfo.x ) ) );
					float ao = vInfo.z * mix( 1.0, mix( 0.38, 1.0, vCardUv.x ), uLeafP.w );
					diffuseColor.rgb = leafCol * ( 0.42 + 0.72 * texel.r ) * ao;
					// far away the mip-mapped coverage would fall under the alpha test and thin the crowns out
					diffuseColor.a = texel.a * ( 1.0 + 2.2 * smoothstep( 25.0, 170.0, length( vViewPosition ) ) );`).replace("#include <normal_fragment_begin>",`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
					vec3 normal = normalize( vNormal );
					vec3 nonPerturbedNormal = normal;`).replace("#include <lights_lambert_pars_fragment>",`
					varying vec3 vViewPosition;
					struct LambertMaterial {
						vec3 diffuseColor;
						float specularStrength;
					};
					void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
						float ndl = dot( geometryNormal, directLight.direction );
						float dotNL = saturate( ( ndl + 0.4 ) / 1.4 );
						reflectedLight.directDiffuse += dotNL * directLight.color * BRDF_Lambert( material.diffuseColor );
						// sunlight filtering through the blades towards the eye
						float back = pow( saturate( dot( geometryViewDir, - directLight.direction ) ), 2.5 );
						float thin = saturate( 0.75 - ndl * 0.5 );
						reflectedLight.directDiffuse += directLight.color * ( uLeafP.z * back * thin * 1.35 ) * BRDF_Lambert( material.diffuseColor );
					}
					void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
						reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
					}
					#define RE_Direct RE_Direct_Lambert
					#define RE_IndirectDiffuse RE_IndirectDiffuse_Lambert`)},t);let n=new mr;return Y_(n,t),{mat:e,depth:n,uniforms:t}}var uc={};function J_(s){if(!uc[s]){let t=$d(s);uc[s]=new ve({map:t.map,normalMap:t.normalMap,roughness:1,metalness:0}),uc[s].normalScale.set(.9,.9)}return uc[s]}var dc=class{constructor(){this.items={},this.loose={},this.leaf={},this.group=new Ke,this.group.name="forest",this.season=2,this.fraction=1,this.archetypes={},this._rng=new ne(99)}archetype(t,e){let n=t+e;return this.archetypes[n]||(this.archetypes[n]=Go[t].gen(new ne(7e3+e*131+t.length*17+t.charCodeAt(0)))),this.archetypes[n]}add(t,e,n,i,r=1,o=0,a=null){let l=Go[t],c=this.items[t]||(this.items[t]=[]),h=Math.floor(this._rng.next()*l.variants);return c.push({x:e,y:n,z:i,scale:r,rot:o,variant:h,hue:this._rng.next(),lean:a}),l.trunkR*r}addCard(t,e,n,i,r=1,o=.15){(this.loose[t]||(this.loose[t]=[])).push({x:e.x,y:e.y,z:e.z,nx:n.x,ny:n.y,nz:n.z,size:i,ao:r,sway:o})}build(t){let e=new Ft,n=new Ft,i=new Ft,r=new je,o=Se(),a=Se(),l=Se(),c=new je,h=new ti(1,1),f=new Set([...Object.keys(this.items),...Object.keys(this.loose)]);this.stats={trees:0,cards:0};let u=300,d=(v,m)=>`${Math.floor((v+900)/u)}_${Math.floor((m+900)/u)}`,p={};for(let v of f){let m=Go[v],g=this.items[v]||[],y=this.loose[v]||[],E={};for(let w of g){let A=d(w.x,w.z);E[A]=(E[A]||0)+this.archetype(v,w.variant).cards.length}for(let w of y){let A=d(w.x,w.z);E[A]=(E[A]||0)+1}let M={},b=0,S=new ne(4321+g.length*7+y.length);for(let w in E){let A=E[w];b+=A;let C=new Uint32Array(A);for(let L=0;L<A;L++)C[L]=L;for(let L=A-1;L>0;L--){let I=Math.floor(S.next()*(L+1)),U=C[L];C[L]=C[I],C[I]=U}M[w]={M:new Float32Array(A*16),N:new Float32Array(A*3),I:new Float32Array(A*4),order:C,w:0,n:A}}if(b===0)continue;for(let w of g){let A=this.archetype(v,w.variant);if(r.setFromAxisAngle(vp,w.rot),w.lean&&(c.setFromAxisAngle(Rn.set(w.lean[1],0,-w.lean[0]).normalize(),Math.hypot(w.lean[0],w.lean[1])),r.premultiply(c)),e.compose(o.set(w.x,w.y,w.z),r,a.set(w.scale,w.scale,w.scale)),A.geo&&m.bark){let O=p[m.bark]||(p[m.bark]={geos:new Map,insts:[],v:0,i:0}),z=v+w.variant;O.geos.has(z)||(O.geos.set(z,A.geo),O.v+=A.geo.getAttribute("position").count,O.i+=A.geo.index.count),O.insts.push({key:z,m:e.clone()})}i.makeRotationFromQuaternion(r);let C=M[d(w.x,w.z)],{M:L,N:I,I:U}=C;for(let O of A.cards){let z=C.order[C.w++];Zn.set(O.qx,O.qy,O.qz,O.qw),n.compose(Rn.set(O.x,O.y,O.z),Zn,Yn.set(O.sx,O.sy,1)),gp.multiplyMatrices(e,n),gp.toArray(L,z*16),l.set(O.nx,O.ny,O.nz).applyMatrix4(i),I[z*3]=l.x,I[z*3+1]=l.y,I[z*3+2]=l.z,U[z*4]=O.rand,U[z*4+1]=O.y*w.scale,U[z*4+2]=O.ao,U[z*4+3]=(O.hue*.55+w.hue)%1}this.stats.trees++}let x=new ne(555);for(let w of y){let A=M[d(w.x,w.z)],{M:C,N:L,I}=A,U=A.order[A.w++];l.set(w.nx,w.ny,w.nz),Zn.setFromUnitVectors(fc,l),xs.setFromAxisAngle(fc,x.range(0,en)),Zn.multiply(xs),n.compose(Rn.set(w.x,w.y,w.z),Zn,Yn.set(w.size,w.size,1)),n.toArray(C,U*16),L[U*3]=w.nx*.6,L[U*3+1]=w.ny*.6+.45,L[U*3+2]=w.nz*.6,I[U*4]=x.next(),I[U*4+1]=w.sway,I[U*4+2]=w.ao,I[U*4+3]=x.next()}let _=Z_(m),T=[];for(let w in M){let A=M[w],C=h.clone();C.setAttribute("aNrm",new Vn(A.N,3)),C.setAttribute("aInfo",new Vn(A.I,4));let L=new Qn(C,_.mat,1);L.instanceMatrix=new Vn(A.M,16),L.count=A.n,L.customDepthMaterial=_.depth,L.castShadow=!0,L.receiveShadow=!0,L.computeBoundingSphere(),L.boundingSphere.radius+=6,L.userData.total=A.n,L.name="leaves-"+v,this.group.add(L),T.push(L)}this.leaf[v]={meshes:T,uniforms:_.uniforms,total:b,spec:m},this.stats.cards+=b,this.stats[v]=`${g.length}/${b}`}for(let v in p){let m=p[v],g=new so(m.insts.length,m.v,m.i,J_(v)),y={};m.geos.forEach((E,M)=>y[M]=g.addGeometry(E));for(let E of m.insts)g.setMatrixAt(g.addInstance(y[E.key]),E.m);g.sortObjects=!1,g.perObjectFrustumCulled=!0,g.castShadow=!0,g.receiveShadow=!0,g.name="trunks-"+v,this.group.add(g)}return this.applySeason(this.season),t.add(this.group),this.stats}setFraction(t){this.fraction=t;for(let e in this.leaf)for(let n of this.leaf[e].meshes)n.count=Math.max(1,Math.floor(n.userData.total*t))}setAlphaToCoverage(t){for(let e in this.leaf){let n=this.leaf[e].meshes[0].material;n.alphaToCoverage!==t&&(n.alphaToCoverage=t,n.needsUpdate=!0)}}applySeason(t){this.season=t,this.blendSeason(t,t,0)}capture(){for(let t in this.leaf){let e=this.leaf[t].uniforms,n=this.leaf[t].cap||(this.leaf[t].cap={a:new Rt,b:new Rt,c:new Rt,p:new ee});n.a.copy(e.uLeafA.value),n.b.copy(e.uLeafB.value),n.c.copy(e.uLeafC.value),n.p.copy(e.uLeafP.value)}}blendFromCapture(t,e){for(let n in this.leaf){let{uniforms:i,spec:r,cap:o}=this.leaf[n];if(!o)continue;let a=r.seasons[t];i.uLeafA.value.copy(o.a).lerp(a.a,e),i.uLeafB.value.copy(o.b).lerp(a.b,e),i.uLeafC.value.copy(o.c).lerp(a.c,e),i.uLeafP.value.x=ht(o.p.x,a.amt,e),i.uLeafP.value.y=ht(o.p.y,a.density,e),i.uLeafP.value.z=ht(o.p.z,a.trans,e)}}blendSeason(t,e,n){for(let i in this.leaf){let{uniforms:r,spec:o}=this.leaf[i],a=o.seasons[t],l=o.seasons[e];r.uLeafA.value.copy(a.a).lerp(l.a,n),r.uLeafB.value.copy(a.b).lerp(l.b,n),r.uLeafC.value.copy(a.c).lerp(l.c,n),r.uLeafP.value.x=ht(a.amt,l.amt,n),r.uLeafP.value.y=ht(a.density,l.density,n),r.uLeafP.value.z=ht(a.trans,l.trans,n)}}};var $_={ginkgo:{sp:"ginkgo",spacing:8.6,off:1.15,clear:3.5,s:[.88,1.12]},maple:{sp:"maple",spacing:8.8,off:1.15,clear:3.5,s:[.9,1.15]},plane:{sp:"plane",spacing:12,off:1.2,clear:4.5,s:[.88,1.1]},cedar:{sp:"cedar",spacing:10.5,off:1.7,clear:5,s:[.85,1.12]},juniper:{sp:"juniper",spacing:6.6,off:1.2,clear:3,s:[.85,1.2]},peach:{sp:"peach",spacing:6.2,off:1.2,clear:3,s:[.85,1.15]},crabapple:{sp:"crabapple",spacing:6.6,off:1.2,clear:3,s:[.88,1.15]},crape:{sp:"crape",spacing:6.2,off:1.2,clear:3,s:[.85,1.15]}},K_={...ko,broad:[.62,.5,.13,.6],wood:[.56,.4,.14,.7],cedarLow:ko.cedar};function Sp(s,t,e){let n=new ne(8128),i=[],r=new Map,o=10,a=(b,S)=>b*4096+S;function l(b,S,x,_){let T={x:b,z:S,r:x,lit:_};i.push(T);let w=a(Math.floor(b/o),Math.floor(S/o)),A=r.get(w);A||r.set(w,A=[]),A.push(T)}function c(b,S,x){let _=Math.floor(b/o),T=Math.floor(S/o),w=Math.ceil(x/o);for(let A=_-w;A<=_+w;A++)for(let C=T-w;C<=T+w;C++){let L=r.get(a(A,C));if(L){for(let I of L)if((I.x-b)**2+(I.z-S)**2<x*x)return!0}}return!1}function h(b,S,x,_,T={}){let w=T.y??ye(S,x),A=Go[b],C=s.add(b,S,w-.03,x,_,n.range(0,Math.PI*2),T.lean||null),L=s.archetype(b,0);return l(S,x,(L.crownR||1)*_,K_[b]||null),T.collide!==!1&&(b==="juniper"?t.addCircle(S,x,.55*_):b==="cedarLow"?t.addCircle(S,x,1.9*_):C>.08&&t.addCircle(S,x,C+.1)),A}let f=new Ce;for(let b of Xe){if(b.tree==="pine")continue;let S=$_[b.tree];for(let x of[-1,1]){let _=Vs(b,x,b.half+S.off,A=>A.half+A.sw+S.clear),T=x>0?S.spacing*.5:S.spacing,w=0;for(let A of _)for(let C=1;C<A.length;C++){let L=A[C-1],I=A[C],U=Math.hypot(I.x-L.x,I.z-L.z);for(;w+U>=T;){let O=(T-w)/U,z=ht(L.x,I.x,O),X=ht(L.z,I.z,O),D=ht(L.y,I.y,O)+yi,F=n.range(S.s[0],S.s[1]);h(S.sp,z+n.range(-.12,.12),X+n.range(-.12,.12),F,{y:D});let k=S.sp==="plane"||S.sp==="cedar"?.8:.6,$=L.tx*k,tt=L.tz*k,W=L.nx*k,Z=L.nz*k,j=D+.012;f.quad([z-$-W,j,X-tt-Z],[z-$+W,j,X-tt+Z],[z+$+W,j,X+tt+Z],[z+$-W,j,X+tt-Z]),T+=S.spacing*n.range(.94,1.06)}w+=U}}}if(!f.empty){let b=f.build(),S=new ve({map:Kl(),roughness:1,side:Ne,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),x=new Xt(b,S);x.receiveShadow=!0,e.add(x)}let u=(b,S)=>{let _=Fe(b+4,S)-Fe(b-4,S),T=Fe(b,S+4)-Fe(b,S-4),w=Math.hypot(_,T)||1;return[_/w,T/w]},d=(b,S)=>{let x=Fe(b,S),_=u(b,S),T=n.range(.05,.16)+ce(60,12,x)*n.range(.06,.2);return[_[0]*T,_[1]*T]};{let b=Xe.find(S=>S.id==="huanghai");for(let S of[-1,1]){let x=Vs(b,S,b.half+b.sw+1.2,w=>w.half+w.sw+4),_=n.range(4,9),T=0;for(let w of x)for(let A=1;A<w.length;A++){let C=w[A-1],L=w[A],I=Math.hypot(L.x-C.x,L.z-C.z);for(;T+I>=_;){let U=(_-T)/I,O=n.range(0,3.5),z=ht(C.x,L.x,U)+C.nx*O,X=ht(C.z,L.z,U)+C.nz*O;_+=n.range(7,15),!(Fe(z,X)<9||Bo(z,X))&&(Math.hypot(z-Ue.huashi.x,X-Ue.huashi.z)<30||h("pine",z,X,n.range(.8,1.25),{lean:d(z,X)}))}T+=I}}}let p=[["pine",3],["cedarLow",1.6],["broad",3],["maple",1.1],["ginkgo",.8],["crabapple",1],["peach",.7],["crape",1],["juniper",1.4]];for(let b of Ti){let S=new ne(b.seed+17),x=b.villa,_=(L,I)=>[b.fx+b.ux*L+b.vx*I,b.fz+b.uz*L+b.vz*I],T=(L,I,U)=>{if(!x)return!1;let O=L-x.x,z=I-x.z,X=Math.cos(x.rot),D=Math.sin(x.rot),F=O*X-z*D,k=O*D+z*X;return Math.abs(F)<x.w/2+U&&Math.abs(k)<x.d/2+U},w=x?S.int(3,6):S.int(8,12),A=0;for(let L=0;L<w*12&&A<w;L++){let I=S.range(-b.width/2+2.2,b.width/2-2.2),U=S.range(2.2,b.depth-1.2),[O,z]=_(I,U);if(T(O,z,3.6)||x&&Math.abs(I-b.gateU)<2.4&&U<b.villa.cv)continue;let X=S.weighted(p),D=X==="broad"||X==="pine"||X==="cedarLow"||X==="maple"||X==="ginkgo";c(O,z,D?5.5:3.2)||D&&T(O,z,5.5)||(h(X,O,z,S.range(.8,1.15),X==="pine"?{lean:[S.range(-.08,.08),S.range(-.08,.08)]}:{}),A++)}if(x&&S.chance(.4))for(let L of[-1,1]){let[I,U]=_(b.gateU+L*2.5,1.7);c(I,U,2)||h("juniper",I,U,S.range(.7,.9))}if(S.chance(.55))for(let L=-b.width/2+1.2;L<b.width/2-1;L+=1.75){if(Math.abs(L-b.gateU)<2.4)continue;let[I,U]=_(L+S.range(-.15,.15),1.05);s.add("bush",I,ye(I,U)-.05,U,S.range(.85,1.05),S.range(0,6.28))}if(x){let L=S.int(3,6);for(let I=0;I<L;I++){let U=S.sign(),O=S.chance(.5)?U*(x.w/2+1.1):S.range(-x.w/2,x.w/2),z=Math.abs(O)>x.w/2?S.range(-x.d/2,x.d/2):S.sign()*(x.d/2+1.1),X=Math.cos(x.rot),D=Math.sin(x.rot),F=x.x+O*X+z*D,k=x.z-O*D+z*X;z>0&&Math.abs(O)<2.2||s.add("bush",F,ye(F,k)-.05,k,S.range(.75,1.25),S.range(0,6.28))}}}let v=Ue.huashi,m=7.5;for(let b=he.minZ+6;b<he.maxZ-4;b+=m)for(let S=he.minX+6;S<he.maxX-4;S+=m){let x=S+n.range(0,m),_=b+n.range(0,m);if(ye(x,_)<2.6)continue;let w=Fe(x,_),A=Yi(x,_);if(w<(A>.5?9:48))continue;let C=oi(x,_,14);if(C&&C.dist<C.road.half+C.road.sw+2.6&&!C.beyond||Bo(x,_))continue;let L=Math.hypot(x-v.x,_-v.z);if(L<27)continue;let I=x>He.minX-6&&x<He.maxX+6&&_>He.minZ-6&&_<He.maxZ+6,U=_>rc(x)+6&&x<236,O=x>=236&&_>120,z=x>338&&!O,X,D,F,k=Re(Math.floor(x/38),Math.floor(_/38),7);if(U?(X=n.weighted([["pine",5],["broad",1.2],["plane",.5]]),D=.42+k*.25,F=6.5):O?(X=n.weighted([["pine",6],["cedarLow",.8],["broad",.8]]),D=k>.62?.12:.6,L<46&&(D*=.35),F=6):I?(X=n.weighted([["pine",3.6],["broad",3],["cedarLow",1.4],["maple",.6],["wood",1.5],["ginkgo",.3]]),D=z?.62:.7,F=6):(X=n.weighted([["wood",4],["pine",1.8]]),D=.62,F=7.5),!n.chance(D)||c(x,_,F))continue;let $=X==="pine"?d(x,_):null,tt=X==="wood"?n.range(.85,1.35):n.range(.8,1.2);h(X,x,_,tt,{lean:$,collide:I})}function g(b,S){let x=Math.floor(b/o),_=Math.floor(S/o),T=0,w=0,A=0,C=0,L=0;for(let I=x-1;I<=x+1;I++)for(let U=_-1;U<=_+1;U++){let O=r.get(a(I,U));if(O)for(let z of O){if(!z.lit)continue;let X=Math.hypot(z.x-b,z.z-S),D=ce(z.r*1.7+1,z.r*.35,X)*z.lit[3];D<=0||(T+=z.lit[0]*D,w+=z.lit[1]*D,A+=z.lit[2]*D,C+=D,L+=D)}}return C<=0?null:[T/C,w/C,A/C,ie(L,0,1)]}let y=256,E=new Uint8Array(y*y*4);for(let b=0;b<y;b++)for(let S=0;S<y;S++){let x=he.minX+(S+.5)/y*(he.maxX-he.minX),_=he.minZ+(b+.5)/y*(he.maxZ-he.minZ),T=g(x,_),w=(b*y+S)*4;T&&(E[w]=T[0]*255,E[w+1]=T[1]*255,E[w+2]=T[2]*255,E[w+3]=T[3]*255)}let M=new _n(E,y,y,Ve);return M.minFilter=M.magFilter=Ee,M.needsUpdate=!0,{trees:i,litterAt:g,leafMap:M,crowded:c}}var Pe=s=>{let t=new Rt(s);return[t.r,t.g,t.b]},j_={stucco:1/3,granite:1/1.9,ashlar:1/2.8,roofRed:1/2.2,roofSlate:1/2.2,trim:1,window:1,fence:1};function wu(s,t,e,n,i){let r=new Ft().makeRotationY(i).setPosition(t,e,n);return{M:r,x:t,z:n,rot:i,b(a){let l=s.get(a,t,n);return l.setMatrix(r),l.uvScale=j_[a]??1,l},local(a,l,c){let h=a.matrix;a.setMatrix(new Ft().multiplyMatrices(r,l)),c(),a.setMatrix(h)},world(a,l,c){return new H(a,l,c).applyMatrix4(r)},dir(a,l,c){return new H(a,l,c).transformDirection(r)}}}var Ci=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],vs=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],Tp=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],Wo=s=>{let t=Math.hypot(s[0],s[1],s[2])||1;return[s[0]/t,s[1]/t,s[2]/t]};function Cn(s,t,e,n=null,i=null){let r=vs(Ci(t[1],t[0]),Ci(t[2],t[0]));Tp(r,e)<0&&(t=t.slice().reverse());let o=Wo(vs(Ci(t[1],t[0]),Ci(t[2],t[0])));n||(n=Wo(vs([0,1,0],o)),Math.abs(o[1])>.99&&(n=[1,0,0]),i=Wo(vs(o,n))),s.poly(t,n,i,[0,0,0])}function On(s,t,e){vs(Ci(t[1],t[0]),Ci(t[2],t[0]))[1]<0&&(t=t.slice().reverse());let i=Wo(vs(Ci(t[1],t[0]),Ci(t[2],t[0]))),r=Wo(vs(i,e));r[1]<0&&(r=[-r[0],-r[1],-r[2]]),s.poly(t,e,r,[0,0,0])}function Eu(s,t,e,n,i,r,o){let a=vs(Ci(e,t),Ci(i,t));Tp(a,r)<0?s.quad(e,t,i,n,o):s.quad(t,e,n,i,o)}function pc(s,t,e,n,i,r,o,a,l,c=.14){let h=Math.hypot(n-t,i-e),f=(n-t)/h,u=(i-e)/h,d=-u,p=f,v=(_,T,w=0)=>[t+f*_-d*w,r+T,e+u*_-p*w],m=o-r,g=[0,h],y=[0,m];for(let _ of a)g.push(_.u0,_.u1),y.push(_.v0,_.v1);let E=_=>[...new Set(_.map(T=>Math.round(T*1e3)/1e3))].sort((T,w)=>T-w),M=E(g),b=E(y),S=(_,T)=>a.some(w=>_>w.u0&&_<w.u1&&T>w.v0&&T<w.v1);for(let _=0;_<b.length-1;_++){let T=-1;for(let w=0;w<M.length;w++){let A=w<M.length-1&&!S((M[w]+M[w+1])/2,(b[_]+b[_+1])/2);if(A&&T<0&&(T=w),!A&&T>=0){let C=M[T],L=M[w],I=b[_],U=b[_+1];s.quad(v(C,I),v(L,I),v(L,U),v(C,U),[C,r+I,L,r+U]),T=-1}}}let x=c;for(let _ of a)s.quad(v(_.u0,_.v0),v(_.u0,_.v0,x),v(_.u0,_.v1,x),v(_.u0,_.v1)),s.quad(v(_.u1,_.v0,x),v(_.u1,_.v0),v(_.u1,_.v1),v(_.u1,_.v1,x)),s.quad(v(_.u0,_.v0),v(_.u1,_.v0),v(_.u1,_.v0,x),v(_.u0,_.v0,x)),s.quad(v(_.u0,_.v1,x),v(_.u1,_.v1,x),v(_.u1,_.v1),v(_.u0,_.v1)),l&&l(v,x,_);return{P:v,L:h,nx:d,nz:p}}function mc(s,t){return(e,n,i)=>{let r=s.b("window");r.setColor(...i.type==="door"&&t.doorCol||t.frame),r.quad(e(i.u0,i.v0,n),e(i.u1,i.v0,n),e(i.u1,i.v1,n),e(i.u0,i.v1,n),No(i.type,i.lit));let o=s.b("trim");if(i.type!=="door"&&i.type!=="french"){o.setColor(...t.trimCol);let a=.07,l=.08,c=.06;o.quad(e(i.u0-a,i.v0-l,-c),e(i.u1+a,i.v0-l,-c),e(i.u1+a,i.v0,-c),e(i.u0-a,i.v0,-c)),o.quad(e(i.u0-a,i.v0,-c),e(i.u1+a,i.v0,-c),e(i.u1+a,i.v0,0),e(i.u0-a,i.v0,0))}if(i.shutters){o.setColor(...t.shutterCol);let a=(i.u1-i.u0)*.47,l=.035;o.quad(e(i.u0-a-.03,i.v0,-l),e(i.u0-.03,i.v0,-l),e(i.u0-.03,i.v1,-l),e(i.u0-a-.03,i.v1,-l)),o.quad(e(i.u1+.03,i.v0,-l),e(i.u1+a+.03,i.v0,-l),e(i.u1+a+.03,i.v1,-l),e(i.u1+.03,i.v1,-l))}if(i.lintel){let a=s.b("granite");a.setColor(...t.stoneCol);let l=.045,c=.16;a.quad(e(i.u0-c,i.v1,-l),e(i.u1+c,i.v1,-l),e(i.u1+c,i.v1+.3,-l),e(i.u0-c,i.v1+.3,-l)),a.quad(e(i.u0-c,i.v1,0),e(i.u1+c,i.v1,0),e(i.u1+c,i.v1,-l),e(i.u0-c,i.v1,-l))}}}function Pi(s,t,e,n,i,r,o,a,l,c,h={}){let f=r/2,u=o/2,d=[[n-f,i+u,n+f,i+u],[n+f,i+u,n+f,i-u],[n+f,i-u,n-f,i-u],[n-f,i-u,n-f,i+u]],p=[];for(let v=0;v<4;v++){if(h.skip&&h.skip.includes(v))continue;let[m,g,y,E]=d[v],M=Math.hypot(y-m,E-g),b=h.margin??1,S=Math.max(1,Math.floor((M-2*b+.6)/t.bay)),x=(M-2*b)/S;for(let _=0;_<l;_++){let T=[],w=_===0&&t.stoneGround?"granite":t.wallMat,A=h.door&&h.door.side===v&&_===0?h.door:null;if(A){let L=ri.door;T.push({u0:A.u-L.w/2,u1:A.u+L.w/2,v0:.02,v1:.02+L.h,type:"door",lit:!1})}for(let L=0;L<S;L++){let I=b+x*(L+.5),U=_===0?t.win0:t.win;h.winType&&(U=h.winType);let O=ri[U];if(A&&Math.abs(I-A.u)<(O.w+ri.door.w)/2+.35||e.chance(v===0?t.blank*.4:t.blank))continue;let z=U==="french"?.03:t.sill;T.push({u0:I-O.w/2,u1:I+O.w/2,v0:z,v1:Math.min(z+O.h,c-.25),type:U,lit:e.chance(.42),shutters:t.shutters&&U!=="french"&&O.w<1.3&&x>O.w*2.05,lintel:t.lintel&&w!=="granite"})}let C=s.b(w);C.setColor(...w==="granite"?t.stoneCol:t.wallCol),pc(C,m,g,y,E,a+_*c,a+(_+1)*c,T,mc(s,t)),p.push({si:v,f:_,ops:T,ax:m,az:g,bx:y,bz:E,y0:a+_*c})}}return{sides:d,record:p}}function Ap(s,t,e){return e==="x"?(n,i,r)=>[s+n,i,t+r]:(n,i,r)=>[s+r,i,t+n]}function qs(s,t,e,n,i,r,o,a,l={}){let c=l.axis||"x",h=l.over??.45,f=l.verge??.32,u=Ap(e,n,c),d=(c==="x"?i:r)/2,p=(c==="x"?r:i)/2,v=Math.tan(a),m=p*v,g=o+m,y=o-h*v,E=c==="x"?[1,0,0]:[0,0,1],M=c==="x"?[0,0,1]:[1,0,0],b=s.b(t.roofMat);b.setColor(...t.roofCol);let S=s.b("trim"),x=l.half?.36:0,_=x*p,T=g-x*m,w=d+f-_,A=l.ends||[-1,1];for(let C of[-1,1]){let L=x?[u(-w,g,0),u(w,g,0),u(d+f,T,C*_),u(d+f,y,C*(p+h)),u(-d-f,y,C*(p+h)),u(-d-f,T,C*_)]:[u(-d-f,g,0),u(d+f,g,0),u(d+f,y,C*(p+h)),u(-d-f,y,C*(p+h))];b.setColor(...t.roofCol),On(b,L,E),S.setColor(...t.soffitCol),Cn(S,L.map(U=>[U[0],U[1]-.11,U[2]]),[0,-1,0]),S.setColor(...t.trimCol);let I=C*(p+h);Cn(S,[u(-d-f,y-.11,I),u(d+f,y-.11,I),u(d+f,y+.02,I),u(-d-f,y+.02,I)],c==="x"?[0,0,C]:[C,0,0])}for(let C of A){let L=c==="x"?[C,0,0]:[0,0,C],I=s.b(l.gableMat||t.wallMat);I.setColor(...l.gableCol||t.wallCol);let U=x?[u(C*d,o,-p),u(C*d,o,p),u(C*d,T,_),u(C*d,T,-_)]:[u(C*d,o,-p),u(C*d,o,p),u(C*d,g,0)];Cn(I,U,L,M,[0,1,0]),x&&(b.setColor(...t.roofCol),On(b,[u(C*w,g,0),u(C*(d+f),T,-_),u(C*(d+f),T,_)],M)),S.setColor(...t.trimCol);let O=C*(d+f);for(let z of[-1,1]){let X=x?T:g,D=x?z*_:0;Cn(S,[u(O,X,D),u(O,y,z*(p+h)),u(O,y-.17,z*(p+h)),u(O,X-.2,D)],L)}if(t.timber&&m>1.6){S.setColor(...t.timberCol);let z=Math.max(2,Math.round(p/.75));for(let X=-z+1;X<z;X++){let D=X/z*p,F=o+(p-Math.abs(D))*v-.1,k=x?Math.min(F,T-.05):F;k-o<.3||Cn(S,[u(C*(d+.025),o,D-.06),u(C*(d+.025),o,D+.06),u(C*(d+.025),k,D+.06),u(C*(d+.025),k,D-.06)],L)}Cn(S,[u(C*(d+.025),o-.08,-p),u(C*(d+.025),o-.08,p),u(C*(d+.025),o+.08,p),u(C*(d+.025),o+.08,-p)],L)}if(l.attic!==!1&&m>2.4){let z=l.atticType||"small",X=ri[z],D=o+m*.24,F=s.b("window");F.setColor(...t.frame);let k=C*(d+.035);Eu(F,u(k,D,-X.w/2),u(k,D,X.w/2),u(k,D+X.h,X.w/2),u(k,D+X.h,-X.w/2),L,No(z,l.rng?l.rng.chance(.3):!1))}}return{yr:g,rise:m,ye:y}}function gc(s,t,e,n,i,r,o,a,l={}){let c=i>=r?"x":"z",h=l.over??.5,f=Ap(e,n,c),u=Math.max(i,r)/2,d=Math.min(i,r)/2,p=Math.tan(a),v=d*p,m=o+v,g=o-h*p,y=u-d,E=c==="x"?[1,0,0]:[0,0,1],M=c==="x"?[0,0,1]:[1,0,0],b=s.b(l.mat||t.roofMat);b.setColor(...l.col||t.roofCol);for(let x of[-1,1]){let _=y>.05?[f(-y,m,0),f(y,m,0),f(u+h,g,x*(d+h)),f(-u-h,g,x*(d+h))]:[f(0,m,0),f(u+h,g,x*(d+h)),f(-u-h,g,x*(d+h))];On(b,_,E),On(b,[f(x*y,m,0),f(x*(u+h),g,-(d+h)),f(x*(u+h),g,d+h)],M)}let S=s.b("trim");S.setColor(...t.soffitCol),Cn(S,[f(-u-h,g-.02,-d-h),f(u+h,g-.02,-d-h),f(u+h,g-.02,d+h),f(-u-h,g-.02,d+h)],[0,-1,0]),S.setColor(...t.trimCol);for(let x of[-1,1])Cn(S,[f(-u-h,g-.13,x*(d+h)),f(u+h,g-.13,x*(d+h)),f(u+h,g+.02,x*(d+h)),f(-u-h,g+.02,x*(d+h))],c==="x"?[0,0,x]:[x,0,0]),Cn(S,[f(x*(u+h),g-.13,-d-h),f(x*(u+h),g-.13,d+h),f(x*(u+h),g+.02,d+h),f(x*(u+h),g+.02,-d-h)],c==="x"?[x,0,0]:[0,0,x]);return{yr:m,rise:v,ye:g,axis:c}}function Q_(s,t,e,n,i,r,o,a){let f=r/2,u=o/2,d=s.b(t.roofMat);d.setColor(...t.roofCol);let p=(b,S)=>[n+b*(f+.18),a,i+S*(u+.18)],v=(b,S)=>[n+b*(f-.85),a+2.35,i+S*(u-.85)];On(d,[p(-1,1),p(1,1),v(1,1),v(-1,1)],[1,0,0]),On(d,[p(-1,-1),p(1,-1),v(1,-1),v(-1,-1)],[1,0,0]),On(d,[p(1,-1),p(1,1),v(1,1),v(1,-1)],[0,0,1]),On(d,[p(-1,-1),p(-1,1),v(-1,1),v(-1,-1)],[0,0,1]),gc(s,t,n,i,r-2*.85,o-2*.85,a+2.35,.36,{over:.12});let m=s.b("trim");m.setColor(...t.trimCol),m.box(n,a-.02,i+u+.12,r+.5,.2,.26,"xXyYZ"),m.box(n,a-.02,i-u-.12,r+.5,.2,.26,"xXyYz"),m.box(n+f+.12,a-.02,i,.26,.2,o+.5,"XyYzZ"),m.box(n-f-.12,a-.02,i,.26,.2,o+.5,"xyYzZ");let g=s.b("window"),y=(b,S,x,_)=>{let T=s.b("stucco");T.setColor(...t.wallCol);let w=1.2,A=1.45,C=.95,L=b-x*C*.5,I=S-_*C*.5;T.box(L,a+.42+A/2,I,x?C:w,A,_?C:w,"xXYzZ"),m.setColor(...t.trimCol),m.box(L,a+.42+A+.06,I,(x?C:w)+.2,.12,(_?C:w)+.2),g.setColor(...t.frame);let U=ri.std,O=b+x*.02,z=S+_*.02,X=-_,D=x,F=[O-X*.45,a+.6,z-D*.45],k=[O+X*.45,a+.6,z+D*.45];Eu(g,F,k,[k[0],a+1.75,k[2]],[F[0],a+1.75,F[2]],[x,0,_],No("std",e.chance(.4)))},E=Math.max(1,Math.floor(r/3.2)),M=Math.max(1,Math.floor(o/3.6));for(let b=0;b<E;b++){let S=n+(-.5+(b+.5)/E)*(r-2.2);y(S,i+u+.05,0,1),y(S,i-u-.05,0,-1)}for(let b=0;b<M;b++){let S=i+(-.5+(b+.5)/M)*(o-2.4);y(n+f+.05,S,1,0),y(n-f-.05,S,-1,0)}return{yr:a+2.35+(Math.min(r,o)-2*.85)/2*Math.tan(.36)}}function bp(s,t,e,n,i,r,o){let a=s.b("trim");a.setColor(...t.trimCol),a.box(e,o+.1,n,i+.36,.2,r+.36);let l=s.b("stucco");l.setColor(...t.wallCol);let c=.6,h=.18;l.box(e,o+.2+c/2,n+r/2-h/2,i,c,h,"xXYzZ"),l.box(e,o+.2+c/2,n-r/2+h/2,i,c,h,"xXYzZ"),l.box(e+i/2-h/2,o+.2+c/2,n,h,c,r-2*h,"xXYzZ"),l.box(e-i/2+h/2,o+.2+c/2,n,h,c,r-2*h,"xXYzZ")}function Xo(s,t,e,n,i,r,o,a,l=.3,c=null,h=null){let f=s.b(c||t.roofMat);f.setColor(...h||t.roofCol);let u=i/2+l,d=r/2+l,p=o-.12,v=[e,o+a,n];On(f,[v,[e-u,p,n+d],[e+u,p,n+d]],[1,0,0]),On(f,[v,[e-u,p,n-d],[e+u,p,n-d]],[1,0,0]),On(f,[v,[e+u,p,n-d],[e+u,p,n+d]],[0,0,1]),On(f,[v,[e-u,p,n-d],[e-u,p,n+d]],[0,0,1]);let m=s.b("trim");m.setColor(...t.soffitCol),Cn(m,[[e-u,p-.01,n-d],[e+u,p-.01,n-d],[e+u,p-.01,n+d],[e-u,p-.01,n+d]],[0,-1,0])}function Rp(s,t,e,n,i,r){let o=s.b(t.chimneyMat||"stucco");o.setColor(...t.chimneyCol||t.wallCol),o.box(e,(i+r)/2,n,.72,r-i,.72,"xXzZ");let a=s.b("trim");a.setColor(...t.trimCol),a.box(e,r+.06,n,.92,.12,.92),a.setColor(.32,.16,.11),a.cylinder(e-.16,r+.12,n,.1,.09,.34,6,{capTop:!0}),a.cylinder(e+.16,r+.12,n,.1,.09,.34,6,{capTop:!0})}function xc(s,t,e,n,i,r,o,a,l=1){let c=Math.tan(a),h=i+l*r*.74,f=o+r*.26*c,u=.68,d=1.18,p=S=>i+l*(r-(S-o)/c),v=s.b(t.wallMat==="granite"?"stucco":t.wallMat);v.setColor(...t.wallCol);let m=ri.small,g=[{u0:u-m.w/2,u1:u+m.w/2,v0:.2,v1:.2+m.h,type:"small",lit:e.chance(.35)}];l>0?pc(v,n-u,h,n+u,h,f,f+d,g,mc(s,t),.08):pc(v,n+u,h,n-u,h,f,f+d,g,mc(s,t),.08);for(let S of[-1,1])Cn(v,[[n+S*u,f,h],[n+S*u,f+d,h],[n+S*u,f+d,p(f+d)]],[S,0,0]);let y=f+d+.55,E=f+d-.08,M=.2,b=s.b(t.roofMat);b.setColor(...t.roofCol);for(let S of[-1,1])On(b,[[n,y,h+l*M],[n,y,p(y)],[n+S*(u+M),E,p(E)],[n+S*(u+M),E,h+l*M]],[0,0,1]);Cn(v,[[n-u,f+d,h],[n+u,f+d,h],[n,y-.04,h]],[0,0,l])}function _s(s,t,e,n,i,r,o){let a=s.b("granite");a.setColor(...t.stoneCol),a.box(e,(o-1.8)/2,n,i+.16,o+1.8,r+.16,"xXYzZ",.82)}function Fr(s,t,e,n,i,r=1.9,o=1){let a=s.b("granite");a.setColor(...t.stoneCol);let l=Math.max(1,Math.ceil(i/.17)),c=i/l;for(let h=0;h<l;h++){let f=i-h*c;a.box(e,(f-1)/2,n+o*(.16+h*.3),r,f+1,.32,"xXYzZ")}return l*.3+.3}function wp(s,t,e,n,i,r,o,a){let l=s.b("granite");l.setColor(...t.stoneCol);let c=.05,h=0;for(let f=o+.24;f<a-.2;f+=.43,h++){let u=h%2?.62:.4,d=h%2?.4:.62;for(let p of[-1,1])for(let v of[-1,1])l.box(e+p*(i/2-u/2+c),f,n+v*(r/2+c/2),u,.36,c,v>0?"xXyYZ":"xXyYz"),l.box(e+p*(i/2+c/2),f,n+v*(r/2-d/2+c),c,.36,d,p>0?"XyYzZ":"xyYzZ")}}function Ii(s,t,e,n,i,r,o,a=.12,l=.06){let c=s.b("trim");c.setColor(...t),c.box(e,o,n+r/2+l/2,i+2*l,a,l,"xXyYZ"),c.box(e,o,n-r/2-l/2,i+2*l,a,l,"xXyYz"),c.box(e+i/2+l/2,o,n,l,a,r,"XyYzZ"),c.box(e-i/2-l/2,o,n,l,a,r,"xyYzZ")}function Cp(s,t,e,n,i,r,o,a,l=.55,c=.62){let h=s.b(t);h.setColor(...e);let f=.34,u=(v,m,g,y,E)=>{let M=Math.hypot(g-v,y-m),b=Math.abs(g-v)>Math.abs(y-m);h.box((v+g)/2,a+l/2,(m+y)/2,b?M:f,l,b?f:M);let S=Math.max(2,Math.round(M/1.25));for(let x=0;x<S;x++){let _=(x+.5)/S;h.box(ht(v,g,_),a+l+c/2,ht(m,y,_),b?M/S*.52:f,c,b?f:M/S*.52)}},d=r/2-f/2,p=o/2-f/2;u(n-r/2,i+p,n+r/2,i+p),u(n-r/2,i-p,n+r/2,i-p),u(n+d,i-o/2+f,n+d,i+o/2-f),u(n-d,i-o/2+f,n-d,i+o/2-f)}function Pp(s,t,e,n,i,r,o,a=12,l=.55,c=.62){let h=s.b(t);h.setColor(...e),h.cylinder(n,o,i,r,r,l,20,{capTop:!1}),h.cylinder(n,o,i,r-.36,r-.36,l+.001,20);for(let f=0;f<a;f++){let u=f/a*en,d=new Ft().makeRotationY(-u).setPosition(n+Math.cos(u)*(r-.18),0,i+Math.sin(u)*(r-.18));s.local(h,d,()=>h.box(0,o+l+c/2,0,.36,c,en*r/a*.5))}}function Tu(s,t,e,n,i,r,o,a,l="tall",c=.8){let h=s.b("window");h.setColor(...t.frame);let f=ri[l],u=f.w*c/2,d=f.h*c;for(let p of a){let v=Math.cos(p),m=Math.sin(p),g=n+v*(r+.03),y=i+m*(r+.03),E=-m,M=v;Eu(h,[g-E*u,o,y-M*u],[g+E*u,o,y+M*u],[g+E*u,o+d,y+M*u],[g-E*u,o+d,y-M*u],[v,0,m],No(l,e.chance(.4)))}}function ty(s,t,e,n,i,r,o,a,l,c,h){let f=t.towerMat||t.wallMat,u=f==="granite"||f==="ashlar"?t.stoneCol:t.wallCol,d=s.b(t.roofMat);if(l==="round"){let p=s.b(f);p.setColor(...u),p.cylinder(n,-1.6,i,r,r,a+1.6,18,{shadeBottom:.85});for(let v=o+1;v+1.6<a;v+=h)Tu(s,t,e,n,i,r,v,[.5,1.57,2.64].map(m=>m+e.range(-.1,.1)),"tall",.72);if(Ii(s,t.trimCol,n,i,0,0,-99),c==="cone")d.setColor(...t.roofCol),d.cylinder(n,a-.15,i,r+.38,.03,r*2.1,18);else if(c==="bell"){d.setColor(...t.roofCol);let v=r*2.3,m=[[r+.34,0],[r+.26,.2],[r*.74,.52],[r*.3,.8],[.03,1]];for(let g=0;g<m.length-1;g++)d.cylinder(n,a-.12+m[g][1]*v,i,m[g][0],m[g+1][0],(m[g+1][1]-m[g][1])*v,16)}else{let v=s.b(f);v.setColor(...u),v.cylinder(n,a-.3,i,r,r+.24,.3,18),Pp(s,f,u,n,i,r+.24,a,10);let m=s.b("trim");m.setColor(.3,.3,.3),m.cylinder(n,a+.02,i,r,r,.02,18,{capTop:!0})}}else{let p=r*2,v={...t,bay:9,blank:0,win:"small",win0:"small",shutters:!1,lintel:!1,stoneGround:f==="granite"},m=Math.max(1,Math.round((a-o)/h));Pi(s,{...v,wallMat:f==="granite"?"granite":t.wallMat},e,n,i,p,p,o,m,(a-o)/m,{margin:.6}),_s(s,t,n,i,p,p,o),c==="spire"?Xo(s,t,n,i,p,p,a,p*2.3,.28):c==="crenel"?Cp(s,f==="granite"?"granite":"stucco",u,n,i,p+.3,p+.3,a):Xo(s,t,n,i,p,p,a,p*.75,.4)}}var on={white:"#f3efe6",green:"#3b5646",red:"#6b332a",cream:"#e8dfc8",brown:"#3f2e24",blue:"#6d7f8a"},Ep=["#ffffff","#f3ece2","#fbf1e4","#e9e6e2"];function Au(s,t){let e={wallMat:"stucco",roofMat:"roofRed",roofCol:t.pick([[1,1,1],[.9,.86,.84],[1.06,.98,.92],[.8,.76,.74]]),stoneCol:Pe(t.pick(Ep)),trimCol:Pe("#efe9dc"),soffitCol:Pe("#b9ad9a"),frame:Pe(on.white),shutterCol:Pe(on.green),timberCol:Pe("#4a3526"),bay:2.7,blank:.16,sill:.95,win:"std",win0:"std",shutters:!1,lintel:!1,stoneGround:!1,timber:!1,plinth:t.range(.6,.95),floors:2,fh:3.15},n=(...i)=>Pe(t.pick(i));switch(s){case"german":return{...e,wallCol:n("#e5cf9a","#dcbc72","#ead9b2","#d2ad6c","#ede6d3","#cdb98e"),frame:n(on.white,on.green,on.red,on.cream),roof:t.pick(["halfhip","halfhip","gable","hip"]),pitch:t.range(.82,.96),floors:t.pick([2,2,3]),wing:t.chance(.6),tower:t.chance(.42)?t.pick(["round-cone","round-bell","square-pyramid"]):null,dormers:t.chance(.7),quoins:t.chance(.6),lintel:t.chance(.55),stoneGround:t.chance(.22),shutters:t.chance(.3),shutterCol:n(on.green,on.red),win:"tall",win0:"tall",porch:"gable",plinth:t.range(.8,1.15)};case"tudor":return{...e,wallCol:n("#efe8d6","#e9dfc6","#f2efe6"),frame:Pe(on.brown),trimCol:Pe("#4a3526"),soffitCol:Pe("#3a2a1f"),roof:"gable",pitch:t.range(.9,1.02),roofCol:t.pick([[.86,.8,.78],[.76,.72,.7],[.95,.9,.86]]),wing:!0,timber:!0,tower:null,dormers:t.chance(.5),chimneys:2,porch:"gable",bayWin:t.chance(.5),stoneGround:t.chance(.3)};case"spanish":return{...e,wallCol:n("#f3ece0","#f0dcc0","#ecc9a6","#f6f1e7"),frame:Pe(on.brown),roof:"hip",pitch:t.range(.4,.5),roofCol:[1.1,1,.92],wing:t.chance(.5),tower:t.chance(.5)?"square-pyramid":null,porch:"arcade",win:"std",win0:t.pick(["arch","french"]),soffitCol:Pe("#5a4334")};case"french":return{...e,wallCol:n("#ddd8cc","#cfcabd","#e6ddc9","#d1cbc5"),roof:"mansard",roofMat:"roofSlate",roofCol:[1,1,1],pitch:.4,wing:!1,tower:null,shutters:t.chance(.65),shutterCol:n(on.blue,on.green,"#8a8f8a"),win:"tall",win0:"french",blank:.05,bandFloor:!0,quoins:t.chance(.4),porch:"balcony",chimneys:2};case"nordic":return{...e,wallCol:n("#7fb3a4","#9bb7c6","#d8a48c","#c5cc9d","#a3473b","#e6d9a8"),roof:"gable",roofMat:t.chance(.3)?"roofSlate":"roofRed",pitch:t.range(.98,1.1),wing:t.chance(.55),tower:t.chance(.5)?"square-spire":null,dormers:t.chance(.5),porch:"gable",win:"std",win0:"std",bandFloor:!0};case"colonial":return{...e,wallCol:n("#f1ede4","#b3604a","#e8dfc8","#a9573f"),roof:"hip",roofMat:t.chance(.5)?"roofSlate":"roofRed",roofCol:[1,1,1],pitch:t.range(.52,.62),wing:!1,tower:null,shutters:t.chance(.75),shutterCol:n(on.green,"#2a2f2c",on.blue),porch:"columns",blank:.04,chimneys:2,win:"std",win0:"tall"};case"modern":return{...e,wallCol:n("#f4f1ea","#ece4d2","#e9dcb5","#f0ead8"),frame:n("#39424a",on.brown),trimCol:Pe("#e6e0d2"),roof:"flat",wing:t.chance(.4),tower:null,porch:"canopy",roundBay:!0,win:"wide",win0:"wide",bay:3.6,bandFloor:!0,blank:.1};default:return{...e,wallMat:"granite",wallCol:Pe(t.pick(Ep)),frame:n(on.white,on.green,on.red),roof:t.pick(["hip","gable","halfhip"]),pitch:t.range(.7,.9),wing:t.chance(.45),tower:t.chance(.45)?t.pick(["round-crenel","round-cone"]):null,dormers:t.chance(.4),porch:"arcade",win:"tall",win0:t.pick(["tall","arch"]),towerMat:"granite",chimneyMat:"granite"}}}function Ip(s,t,e,n,i,r,o,a){let l=s.b("trim");if(n==="gable"){let v=s.b("granite");v.setColor(...t.stoneCol),v.box(i,(o-1.2)/2,r+1.7/2,2.7,o+1.2,1.7,"xXYZ"),l.setColor(...t.timber?t.timberCol:t.trimCol);for(let m of[-1,1])l.box(i+m*(2.7/2-.12),o+1.2,r+1.7-.14,.16,2.4,.16);return qs(s,t,i,r+1.7/2-.1,2.7,1.7+.2,o+2.42,.72,{axis:"z",over:.25,verge:.18,attic:!1,ends:[1]}),Fr(s,t,i,r+1.7,o,1.8)+1.7}if(n==="columns"){let v=a*2-.3,m=s.b("granite");m.setColor(...t.stoneCol),m.box(i,(o-1.2)/2,r+2.2/2,5.2,o+1.2,2.2,"xXYZ"),l.setColor(...Pe("#f4f1ea"));for(let y=0;y<4;y++){let E=i-2.6+.35+y*4.5/3;l.cylinder(E,o,r+2.2-.32,.19,.16,v,10),l.box(E,o+.08,r+2.2-.32,.5,.16,.5),l.box(E,o+v-.07,r+2.2-.32,.46,.14,.46)}l.box(i,o+v+.2,r+2.2/2,5.2+.1,.4,2.2+.1);let g={...t,wallCol:Pe("#f4f1ea"),wallMat:"stucco",timber:!1};return qs(s,g,i,r+2.2/2,5.2+.1,2.2+.1,o+v+.4,.42,{axis:"z",over:.2,verge:.2,attic:!1,ends:[1]}),Fr(s,t,i,r+2.2,o,3.2)+2.2}if(n==="arcade"){let y=s.b("granite");y.setColor(...t.stoneCol),y.box(i,(o-1.2)/2,r+2.3/2,7.3,o+1.2,2.3,"xXYZ");let E=t.wallMat,M=s.b(E);M.setColor(...t.wallCol);let b=r+2.3-.2;for(let x=0;x<=3;x++)M.box(i-7.3/2+.2+x*2.3,o+2.9/2,b,.4,2.9,.4,"xXzZ");M.box(i,o+2.9+.25,b,7.3,.5,.4);for(let x=0;x<3;x++){let _=i-3.65+.4+x*2.3,T=_+2.3-.4;for(let w of[b+.2,b-.2]){let A=[0,0,w>b?1:-1];for(let C=0;C<4;C++){let L=C/4*(Math.PI/2),I=(C+1)/4*(Math.PI/2),U=.62;Cn(M,[[_,o+2.9,w],[_+U-Math.cos(L)*U,o+2.9-U+Math.sin(L)*U,w],[_+U-Math.cos(I)*U,o+2.9-U+Math.sin(I)*U,w]],A),Cn(M,[[T,o+2.9,w],[T-U+Math.cos(L)*U,o+2.9-U+Math.sin(L)*U,w],[T-U+Math.cos(I)*U,o+2.9-U+Math.sin(I)*U,w]],A)}}}let S=s.b(t.roofMat);return S.setColor(...t.roofCol),On(S,[[i-7.3/2-.2,o+2.9+1.35,r],[i+7.3/2+.2,o+2.9+1.35,r],[i+7.3/2+.2,o+2.9+.45,b+.55],[i-7.3/2-.2,o+2.9+.45,b+.55]],[1,0,0]),l.setColor(...t.soffitCol),Cn(l,[[i-7.3/2-.2,o+2.9+1.25,r],[i+7.3/2+.2,o+2.9+1.25,r],[i+7.3/2+.2,o+2.9+.35,b+.55],[i-7.3/2-.2,o+2.9+.35,b+.55]],[0,-1,0]),Fr(s,t,i,r+2.3,o,2)+2.3}if(n==="canopy"){l.setColor(...t.trimCol),l.box(i,o+2.62,r+.8,3,.16,1.6),l.cylinder(i+1.2,o,r+1.4,.09,.09,2.55,8);let d=s.b("granite");return d.setColor(...t.stoneCol),d.box(i,(o-1.2)/2,r+.7,2.6,o+1.2,1.4,"xXYZ"),Fr(s,t,i,r+1.4,o,1.9)+1.4}l.setColor(...t.trimCol),l.box(i,o+a-.06,r+.55,2.6,.14,1.1),l.box(i-1,o+a-.36,r+.3,.14,.5,.6),l.box(i+1,o+a-.36,r+.3,.14,.5,.6);let c=s.b("fence");c.setColor(1,1,1);let h=o+a+.01,f=h+.95,u=(d,p,v,m)=>c.quad([d,h,p],[v,h,m],[v,f,m],[d,f,p],[0,0,Math.hypot(v-d,m-p)/1.5,1]);return u(i-1.28,r+1.08,i+1.28,r+1.08),u(i-1.28,r+.02,i-1.28,r+1.08),u(i+1.28,r+1.08,i+1.28,r+.02),Fr(s,t,i,r,o,1.9)}function ey(s,t,e,n,i){if(!t)return;let{ax:r,az:o,bx:a,bz:l}=n[0],c=Math.hypot(a-r,l-o),h=(a-r)/c,f=(l-o)/c,u=-f,d=h,p=n[0].y0,v=i-p,m=e.range(0,100),g=Math.round(c*v*1.9),y=s.dir(u,0,d);for(let E=0;E<g;E++){let M=e.range(0,c),b=v*Math.pow(e.next(),1.35);if(fs(M*.45+m,b*.45,5)<.34+b/v*.3)continue;let S=!1;for(let _ of n){let T=p+b-_.y0;for(let w of _.ops)M>w.u0-.1&&M<w.u1+.1&&T>w.v0-.1&&T<w.v1+.1&&(S=!0)}if(S)continue;let x=s.world(r+h*M+u*.09,p+b,o+f*M+d*.09);t.addCard("ivy",x,y,e.range(.6,.95),ht(.75,1,b/v),.12)}}function ny(s,t,e,n){let i=new ne(t.seed),r=Au(t.style,i),o=wu(s,t.x,t.y,t.z,t.rot),a=t.w,l=t.d,c=r.plinth,h=r.fh,f=r.floors,u=c+f*h,d=a/2,p=l/2,v=i.sign(),m=null;if(r.wing){let _=ie(a*i.range(.36,.46),4.2,6.4),T=i.range(1.8,3.2);m={cx:v*(d-_/2),cz:p+T/2-.4,w:_,d:T+.8,floors:f}}let g=m?a-m.w:a,y=m?-v*(d-g/2)+i.range(-.4,.4):r.porch==="columns"||r.porch==="balcony"?0:i.range(-.25,.25)*a,E=y+d;_s(o,r,0,0,a,l,c);let M=Pi(o,r,i,0,0,a,l,c,f,h,{door:{side:0,u:E}});if(r.quoins&&wp(o,r,0,0,a,l,c,u),r.bandFloor)for(let _=1;_<f;_++)Ii(o,r.trimCol,0,0,a,l,c+_*h);Ii(o,r.trimCol,0,0,a,l,u-.08,.16,.08);let b=u+1;if(r.roof==="gable"||r.roof==="halfhip"){if(b=qs(o,r,0,0,a,l,u,r.pitch,{half:r.roof==="halfhip",rng:i,gableCol:r.wallCol,gableMat:r.wallMat==="granite"?"granite":"stucco"}).yr,r.dormers){let T=a>13?2:1;for(let w=0;w<T;w++){let A=T===1?-v*a*.18:(w-.5)*a*.42;m&&Math.abs(A-m.cx)<m.w/2+1&&(A=-v*a*.24),xc(o,r,i,A,0,p,u,r.pitch,1),i.chance(.5)&&xc(o,r,i,A,0,p,u,r.pitch,-1)}}}else r.roof==="hip"?b=gc(o,r,0,0,a,l,u,r.pitch).yr:r.roof==="mansard"?b=Q_(o,r,i,0,0,a,l,u).yr:(bp(o,r,0,0,a,l,u),b=u+.8);if(m&&(_s(o,r,m.cx,m.cz,m.w,m.d,c),Pi(o,r,i,m.cx,m.cz,m.w,m.d,c,f,h,{skip:[2],margin:.8}),r.quoins&&wp(o,r,m.cx,m.cz,m.w,m.d,c,u),Ii(o,r.trimCol,m.cx,m.cz,m.w,m.d,u-.08,.16,.08),r.roof==="flat"?bp(o,r,m.cx,m.cz,m.w,m.d,u):r.roof==="hip"?gc(o,r,m.cx,m.cz-p/2,m.w,m.d+p,u,r.pitch):qs(o,r,m.cx,m.cz-p/2,m.w,m.d+p,u,r.pitch,{axis:"z",half:r.roof==="halfhip",ends:[1],rng:i,gableMat:r.wallMat==="granite"?"granite":"stucco"}),e.addBox(...iy(o.world(m.cx,0,m.cz)),m.w/2+.15,m.d/2+.15,t.rot)),r.tower){let[_,T]=r.tower.split("-"),w=_==="round"?i.range(1.75,2.15):i.range(1.5,1.8),A=-v*(d-(_==="round"?.2:w-.3)),C=p-(_==="round"?.2:w-.6),L=u+i.range(1.6,3.2);ty(o,r,i,A,C,w,c,L,_,T,h);let I=o.world(A,0,C);_==="round"?e.addCircle(I.x,I.z,w+.15):e.addBox(I.x,I.z,w+.15,w+.15,t.rot)}if(r.roundBay){let _=Math.min(l*.36,3),T=v*d,w=p-_,A=o.b("stucco");A.setColor(...r.wallCol),A.cylinder(T,-1.6,w,_,_,u+1.6+.8,18,{shadeBottom:.85});let C=o.b("trim");C.setColor(...r.trimCol),C.cylinder(T,u,w,_+.18,_+.18,.2,18,{capTop:!0});for(let I=0;I<f;I++){let U=v>0?-1.2:Math.PI-1.2;Tu(o,r,i,T,w,_,c+I*h+.95,[0,.6,1.2,1.8,2.4].map(O=>U+O),"std",.95)}let L=o.world(T,0,w);e.addCircle(L.x,L.z,_+.15)}let S=Ip(o,r,i,r.porch,y,p,c,h);if(r.bayWin&&!m){let _=-Math.sign(y||1)*a*.26,T={...r,bay:9,blank:0,shutters:!1};_s(o,r,_,p+.5,2.8,1,c),Pi(o,T,i,_,p+.5,2.8,1,c,1,h,{skip:[2],winType:"wide",margin:.2}),Xo(o,r,_,p+.3,2.8,1.4,c+h,.7,.2)}let x=r.chimneys??(i.chance(.75)?1:0);for(let _=0;_<x;_++){let T=x===2?(_?1:-1)*(d-1.4):i.range(-.3,.3)*a;Rp(o,r,T,i.range(-.5,.2)*p,u+.2,b+i.range(.7,1.2))}if(n&&i.chance(.34)){let _=i.pick([1,2,3]),T=M.record.filter(w=>w.si===_);T.length&&ey(o,n,i,T,u)}e.addBox(t.x,t.z,d+.15,p+.15,t.rot),t.doorLocal={x:y,z:p+S},t.height=b,t.spec=r}var iy=s=>[s.x,s.z];function sy(s,t,e){let n=new ne(1933),i=wu(s,t.x,t.y,t.z,t.rot),r={...Au("nordic",n),wallCol:Pe("#6fb3a8"),trimCol:Pe("#f6f3ea"),frame:Pe("#f6f3ea"),soffitCol:Pe("#d9d2c2"),roofMat:"roofRed",roofCol:[.92,.84,.8],stoneCol:Pe("#f3ece2"),pitch:1.06,timber:!1,shutters:!1,lintel:!1,stoneGround:!1,bandFloor:!0,win:"std",win0:"std",blank:.05,plinth:.9},o=9.6,a=8,l=3.05,c=r.plinth,h=2,f=c+h*l,u=o/2,d=a/2;_s(i,r,0,0,o,a,c),Pi(i,r,n,0,0,o,a,c,h,l,{door:{side:0,u:u-1.2}}),Ii(i,r.trimCol,0,0,o,a,c+l),Ii(i,r.trimCol,0,0,o,a,f-.08,.16,.08);let p=i.b("trim");p.setColor(...r.trimCol);for(let T of[-1,1])for(let w of[-1,1])p.box(T*(u+.02),c+h*l/2,w*(d+.02),.22,h*l,.22);let v=qs(i,r,0,0,o,a,f,r.pitch,{rng:n,atticType:"std"});xc(i,r,n,-1.9,0,d,f,r.pitch,1),xc(i,r,n,1.4,0,d,f,r.pitch,-1);let m={cx:2.3,cz:d+1,w:4.4,d:2.8};_s(i,r,m.cx,m.cz,m.w,m.d,c),Pi(i,r,n,m.cx,m.cz,m.w,m.d,c,h,l,{skip:[2],margin:.7});for(let T of[-1,1])p.box(m.cx+T*(m.w/2+.02),c+h*l/2,m.cz+m.d/2+.02,.22,h*l,.22);qs(i,r,m.cx,m.cz-d/2,m.w,m.d+d,f,1.15,{axis:"z",ends:[1],rng:n,atticType:"std"});let g=2.7,y=-u+.5,E=d-.2,M=f+3.4,b={...r,bay:9,blank:0,win:"small",win0:"std"};_s(i,r,y,E,g,g,c),Pi(i,b,n,y,E,g,g,c,3,(M-c)/3,{margin:.5});for(let T of[-1,1])for(let w of[-1,1])p.box(y+T*(g/2+.02),c+(M-c)/2,E+w*(g/2+.02),.2,M-c,.2);Ii(i,r.trimCol,y,E,g,g,M-.1,.2,.1),Xo(i,r,y,E,g,g,M,1.5,.42),Xo(i,r,y,E,g*.62,g*.62,M+.72,7.4,0),p.setColor(.25,.25,.25),p.cylinder(y,M+8,E,.035,.02,1.3,5);let S={cx:-u-1.6,cz:-.6,w:3.4,d:5.2};_s(i,r,S.cx,S.cz,S.w,S.d,c),Pi(i,r,n,S.cx,S.cz,S.w,S.d,c,1,l,{skip:[1],margin:.8}),qs(i,r,S.cx,S.cz,S.w,S.d,c+l,1,{axis:"z",rng:n,attic:!1}),Rp(i,{...r,chimneyCol:Pe("#f6f3ea")},1,-1,f+1.5,v.yr+1.1);let x=Ip(i,r,n,"gable",u-1.2-u+u,d,c,l);e.addBox(t.x,t.z,u+.15,d+.15,t.rot);let _=i.world(m.cx,0,m.cz);e.addBox(_.x,_.z,m.w/2+.1,m.d/2+.1,t.rot),_=i.world(y,0,E),e.addBox(_.x,_.z,g/2+.1,g/2+.1,t.rot),_=i.world(S.cx,0,S.cz),e.addBox(_.x,_.z,S.w/2+.1,S.d/2+.1,t.rot),t.doorLocal={x:u-1.2,z:d+x+1.7},t.height=M+8}function ry(s,t){let e=Ue.huashi,n=new ne(1931),i=wu(s,e.x,e.y,e.z,e.rot),r=Pe("#fff8ec"),o={...Au("granite",n),wallMat:"ashlar",towerMat:"ashlar",wallCol:r,stoneCol:r,frame:Pe("#e9e3d4"),trimCol:Pe("#cfc6b4"),soffitCol:Pe("#8a8274"),roofMat:"roofRed",roofCol:[.85,.8,.78],win:"tall",win0:"arch",bay:2.9,blank:.06,lintel:!1,shutters:!1,stoneGround:!1,plinth:1},a=O=>{let z=i.b("ashlar");return z.setColor(...r),z},l=1,c=3.4,h=13.6,f=10.4,u=l+3*c;a().box(0,(l-3)/2,0,h+.3,l+3,f+.3,"xXYzZ",.8),Pi(i,o,n,0,0,h,f,l,3,c,{door:{side:2,u:h*.5}}),Ii(i,o.trimCol,0,0,h,f,l+c,.18,.08),Ii(i,o.trimCol,0,0,h,f,u-.12,.24,.14),Cp(i,"ashlar",r,0,0,h+.3,f+.3,u);let d=i.b("trim");d.setColor(.36,.35,.33),d.box(0,u+.02,0,h-.4,.04,f-.4,"Y");let p={cx:3.4,cz:-f/2+2.4,w:6,d:4.8,top:l+4*c};Pi(i,{...o,win0:"tall"},n,p.cx,p.cz,p.w,p.d,u,1,c,{margin:.9}),Ii(i,o.trimCol,p.cx,p.cz,p.w,p.d,p.top-.1,.2,.12),gc(i,o,p.cx,p.cz,p.w,p.d,p.top,.62,{over:.35});let v=3.15,m=-h/2+.6,g=f/2-.4,y=l+5*c+.4;a().cylinder(m,-3,g,v,v,y+3,24,{shadeBottom:.8});for(let O=0;O<5;O++){let z=l+O*c+1;Tu(i,o,n,m,g,v,z,[.35,1.25,2.15,3.05,3.95].map(X=>X+O%2*.2),O===0?"arch":"tall",O===4?.7:.82)}a().cylinder(m,y-.7,g,v,v+.42,.7,24),Pp(i,"ashlar",r,m,g,v+.42,y,14,.6,.7),d.setColor(.36,.35,.33),d.cylinder(m,y+.02,g,v+.1,v+.1,.02,24,{capTop:!0});for(let O of[l+c,l+3*c])d.setColor(...o.trimCol),d.cylinder(m,O-.09,g,v+.07,v+.07,.18,24);d.setColor(.2,.2,.2),d.cylinder(m,y,g,.05,.03,4.2,6);let E=3.3,M=2.6,b=f/2,S=[];for(let O=0;O<=4;O++){let z=O/4*Math.PI;S.push([M+Math.cos(z)*E,b+Math.sin(z)*E*.86])}let x=l+2*c;for(let O=0;O<4;O++){let z=S[O+1],X=S[O],D=Math.hypot(X[0]-z[0],X[1]-z[1]);a().quad([z[0],-3,z[1]],[X[0],-3,X[1]],[X[0],l,X[1]],[z[0],l,z[1]],[0,-3,D,l]);for(let F=0;F<2;F++){let k=ri[F===0?"arch":"tall"],$=[{u0:D/2-k.w/2,u1:D/2+k.w/2,v0:.85,v1:.85+k.h,type:F===0?"arch":"tall",lit:n.chance(.5)}];pc(a(),z[0],z[1],X[0],X[1],l+F*c,l+(F+1)*c,$,mc(i,o))}}let _=S.map(O=>[O[0]+(O[0]-M)*.05,O[1]+(O[1]-b)*.05]);d.setColor(...o.trimCol),d.prism(_.slice().reverse(),x-.02,x+.2,{capTop:!0});for(let O=0;O<4;O++){let z=S[O+1],X=S[O],D=[(z[0]+X[0])/2,(z[1]+X[1])/2],F=Math.atan2(X[1]-z[1],X[0]-z[0]),k=Math.hypot(X[0]-z[0],X[1]-z[1]),$=new Ft().makeRotationY(-F).setPosition(D[0],0,D[1]),tt=a();i.local(tt,$,()=>{tt.box(0,x+.2+.28,0,k,.56,.3);for(let W of[-.3,.3])tt.box(W*k,x+.2+.56+.3,0,k*.26,.6,.3)})}let T=f/2,w=4.6;a().box(-.6,(l-3)/2-.25,T+w/2,h+3.4,l+2.5,w,"xXYZ",.8);let A=i.b("ashlar");A.setColor(...r);let C=l-.5;A.box(-.6,C+.45,T+w-.15,h+3.4,.9,.3),A.box(-.6-(h+3.4)/2+.15,C+.45,T+w/2,.3,.9,w-.3),A.box(-.6+(h+3.4)/2-.15,C+.45,T+w/2,.3,.9,w-.3),Fr(i,o,0,-f/2,l,3.2,-1),d.setColor(...o.trimCol),d.box(0,l+2.9,-f/2-.9,3.6,.2,1.8);for(let O of[-1,1])a().box(O*1.55,l+1.4,-f/2-1.55,.5,2.8,.5);t.addBox(e.x,e.z,h/2+.2,f/2+.2,e.rot);let L=i.world(m,0,g);t.addCircle(L.x,L.z,v+.2),L=i.world(M,0,b+1),t.addCircle(L.x,L.z,E);let I=i.world(-.6-(h+3.4)/2,0,T+w-.15),U=i.world(-.6+(h+3.4)/2,0,T+w-.15);t.addSegment(I.x,I.z,U.x,U.z,.2),e.height=y}function Lp(s,t,e){let n=new ms(200);for(let d of Gs)d.kind==="princess"?sy(n,d,t):ny(n,d,t,e);ry(n,t);let i=jd(),r=Do("rubble"),o=Do("ashlar"),a=du("red"),l=du("slate"),c=Qd(),h=d=>new ve({vertexColors:!0,metalness:0,...d}),f={stucco:h({map:i.map,normalMap:i.normalMap,roughness:.94}),granite:h({map:r.map,normalMap:r.normalMap,roughness:.9}),ashlar:h({map:o.map,normalMap:o.normalMap,roughness:.9}),roofRed:h({map:a.map,normalMap:a.normalMap,roughness:.78}),roofSlate:h({map:l.map,normalMap:l.normalMap,roughness:.6}),trim:h({roughness:.8}),window:h({map:c.map,roughnessMap:c.roughnessMap,emissiveMap:c.emissiveMap,emissive:16777215,emissiveIntensity:0,roughness:1}),fence:h({map:jl(),alphaTest:.5,side:Ne,roughness:.55,metalness:.4})};f.stucco.normalScale.set(.5,.5),f.granite.normalScale.set(.45,.45),f.ashlar.normalScale.set(1,1),f.roofRed.normalScale.set(1,1),Xi(f.window,"window",d=>{d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWN;
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWN = normal;
vWP = position;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWN;
varying vec3 vWP;
uniform vec3 uLightDir;
uniform vec3 uLightColor;`).replace("#include <fog_pars_fragment>",`#include <fog_pars_fragment>
${ps}`).replace("#include <opaque_fragment>",`
				{
					vec3 Vw = normalize( cameraPosition - vWP );
					vec3 Nw = normalize( vWN );
					float glass = 1.0 - smoothstep( 0.1, 0.3, roughnessFactor );
					float fr = 0.07 + 0.93 * pow( 1.0 - max( dot( Nw, Vw ), 0.0 ), 4.0 );
					vec3 Rw = reflect( - Vw, Nw );
					outgoingLight += skyThroughAir( vWP, normalize( Rw + vec3( 0.0, 0.06, 0.0 ) ) ) * fr * glass * 0.8;
					outgoingLight += uLightColor * pow( max( dot( Rw, uLightDir ), 0.0 ), 90.0 ) * glass * 1.2;
				}
				#include <opaque_fragment>`)});let u=new Ke;return u.name="buildings",n.buildMeshes(f,u,{window:{cast:!1},fence:{cast:!1}}),s.add(u),{group:u,mats:f}}var Ys=s=>{let t=new Rt(s);return[t.r,t.g,t.b]};function Ru(s,t,e,n,i,r,o,a,l){let c=Math.hypot(n-t,i-e)||1,h=(n-t)/c,f=(i-e)/c,u=-f*a*.5,d=h*a*.5,p=(v,m,g)=>[t+h*c*v+u*g,m,e+f*c*v+d*g];s.quad(p(0,r,1),p(1,r,1),p(1,o,1),p(0,o,1),[l,r,l+c,o],[.82,.82,1,1]),s.quad(p(1,r,-1),p(0,r,-1),p(0,o,-1),p(1,o,-1),[l+c,r,l,o],[.82,.82,1,1]),s.quad(p(0,o,1),p(1,o,1),p(1,o,-1),p(0,o,-1),[l,0,l+c,a]),s.quad(p(0,r,-1),p(0,r,1),p(0,o,1),p(0,o,-1),[0,r,a,o]),s.quad(p(1,r,1),p(1,r,-1),p(1,o,-1),p(1,o,1),[0,r,a,o])}function Dp(s,t,e,n,i,r,o){let a=new Ft().makeRotationY(o).setPosition(t,0,e),l=s.matrix;s.setMatrix(a),s.box(0,(n+i)/2,0,r,i-n,r,"xXzZ",.85),s.box(0,i+.06,0,r+.14,.12,r+.14);let c=r*.32,h=r/2+.03,f=i+.12;s.tri3([-h,f,h],[h,f,h],[0,f+c,0]),s.tri3([h,f,h],[h,f,-h],[0,f+c,0]),s.tri3([h,f,-h],[-h,f,-h],[0,f+c,0]),s.tri3([-h,f,-h],[-h,f,h],[0,f+c,0]),s.setMatrix(l)}function Np(s,t,e){let n=new ms(200),i=new ne(60606),r=[],o=[],a=(D,F)=>{let k=n.get("granite",D,F);return k.uvScale=1/1.9,k},l=(D,F)=>n.get("fence",D,F),c=(D,F)=>n.get("trim",D,F),h={};for(let D of Ti){let F=D.road.id+D.side;(h[F]||(h[F]=[])).push(D)}let f=D=>{let F=new ne(D),k=F.weighted([["solid",4],["rail",4.5],["low",1.5]]),$=F.pick(["#ffffff","#f6efe4","#fbf1e4","#eeeae4","#f3e9da"]);return{kind:k,h:k==="solid"?F.range(1.25,1.65):k==="rail"?F.range(.62,.85):F.range(.75,1),tint:Ys($),ivy:F.chance(.3)}},u=f(77);for(let D of Xe)if(D.id!=="huanghai")for(let F of[-1,1]){if(D.id==="shanhai"&&F===1)continue;let k=h[D.id+F]||[],$=Vs(D,F,D.half+D.sw+.3,tt=>tt.half+tt.sw+.3);for(let tt of $){let W=0,Z=tt[tt.length-1].s-tt[0].s,j=Math.max(1,Math.round(Math.abs(Z)/3.2)),lt=[];for(let Q=0;Q<=j;Q++){let at=tt[0].s+Z*Q/j;for(;W<tt.length-2&&tt[W+1].s<at;)W++;let mt=tt[W],Tt=tt[W+1],Dt=ie((at-mt.s)/(Tt.s-mt.s||1),0,1);lt.push({x:ht(mt.x,Tt.x,Dt),z:ht(mt.z,Tt.z,Dt),y:ht(mt.y,Tt.y,Dt)+yi,s:at,nx:mt.nx,nz:mt.nz})}let et=1.75,ut=(Q,at,mt)=>({x:ht(Q.x,at.x,mt),z:ht(Q.z,at.z,mt),y:ht(Q.y,at.y,mt),s:ht(Q.s,at.s,mt),nx:Q.nx,nz:Q.nz}),bt=(Q,at,mt,Tt,Dt)=>{let $t=a(Q.x,Q.z);$t.setColor(...mt.tint);let jt=Math.max(Q.y,at.y)+mt.h,se=Math.min(Q.y,at.y)-.6;Ru($t,Q.x,Q.z,at.x,at.z,se,jt,.38,Q.s),$t.setColor(mt.tint[0]*1.06,mt.tint[1]*1.06,mt.tint[2]*1.06),Ru($t,Q.x,Q.z,at.x,at.z,jt,jt+.09,.48,Q.s),Dt&&Dp($t,Q.x,Q.z,se,jt+(mt.kind==="rail"?1:.2),.46,Math.atan2(-(at.z-Q.z),at.x-Q.x));let be=Math.hypot(at.x-Q.x,at.z-Q.z);if(mt.kind==="rail"){let Qt=l(Q.x,Q.z);Qt.setColor(1,1,1),Qt.quad([Q.x,jt+.09,Q.z],[at.x,jt+.09,at.z],[at.x,jt+1,at.z],[Q.x,jt+1,Q.z],[0,0,Math.max(1,Math.round(be/1.6)),1])}if(t.addSegment(Q.x,Q.z,at.x,at.z,.24),mt.ivy&&e){let Qt=Math.round(be*mt.h*1.6);for(let ue=0;ue<Qt;ue++){let Oe=i.next(),Ie=i.next();if(fs(Q.s*.3+Oe*be*.3,Ie*2+(Tt?Tt.seed%50:0),9)<.42)continue;let V=ht(Q.x,at.x,Oe)-Q.nx*.24,Ht=ht(Q.z,at.z,Oe)-Q.nz*.24;e.addCard("ivy",{x:V,y:se+.6+Ie*(mt.h+.15),z:Ht},{x:-Q.nx,y:0,z:-Q.nz},i.range(.55,.85),ht(.7,1,Ie),.1)}}};for(let Q=0;Q<j;Q++){let at=lt[Q],mt=lt[Q+1],Tt=(at.s+mt.s)/2,Dt=null;if(D.kind==="EW")for(let Ht of k)Tt>=Ht.s0-.01&&Tt<=Ht.s1+.01&&(Dt=Ht);else Dt=Bo((at.x+mt.x)/2+at.nx*3,(at.z+mt.z)/2+at.nz*3);let $t=Dt?Dt.wallStyle||(Dt.wallStyle=f(Dt.seed+5)):u,jt=Q%2===0||$t.kind==="rail",se=[];for(let Ht of D.kind==="EW"?k:[]){if(!Ht.villa)continue;let Kt=(Ht.s0+Ht.s1)/2+Ht.gateU;mt.s>Kt-et&&at.s<Kt+et&&se.push([Ht,Kt])}if(!se.length){bt(at,mt,$t,Dt,jt);continue}let[be,Qt]=se[0],ue=be.wallStyle||(be.wallStyle=f(be.seed+5));if(!be.gateBuilt){be.gateBuilt=!0;let Ht=Lr(D,Qt,F*(D.half+D.sw+.3)),Kt=Ht.y+yi,fe=Math.atan2(-Ht.tz,Ht.tx),dt=a(Ht.x,Ht.z);dt.setColor(...ue.tint);let Ge=Math.max(ue.h+.75,1.9);for(let Ut of[-1,1]){let Bt=Ht.x+Ht.tx*Ut*et,N=Ht.z+Ht.tz*Ut*et;Dp(dt,Bt,N,Kt-.5,Kt+Ge,.62,fe),t.addCircle(Bt,N,.36);let R=l(Ht.x,Ht.z);R.setColor(1,1,1);let q=Ht.nx*F,ct=Ht.nz*F,ot=Bt-Ht.tx*Ut*.25+q*1.35,gt=N-Ht.tz*Ut*.25+ct*1.35;R.quad([Bt,Kt,N],[ot,Kt,gt],[ot,Kt+1.7,gt],[Bt,Kt+1.7,N],[0,0,1,1])}be.gate={x:Ht.x,z:Ht.z,y:Kt,nx:Ht.nx*F,nz:Ht.nz*F}}let Oe=mt.s-at.s,Ie=(Qt-et-at.s)/Oe,V=(Qt+et-at.s)/Oe;Ie>.03&&bt(at,ut(at,mt,Math.min(Ie,1)),$t,Dt,jt),V<.97&&bt(ut(at,mt,Math.max(V,0)),mt,$t,Dt,!1)}}}{let D=new Ce;D.uvScale=.5;for(let F of Ti){let k=F.villa;if(!k||!F.gate||!k.doorLocal)continue;let $=cp(k,k.doorLocal.x,k.doorLocal.z),tt=F.gate,W=Math.hypot($.x-tt.x,$.z-tt.z);if(W<1.5)continue;let Z=($.x-tt.x)/W,j=($.z-tt.z)/W,lt=.72,et=Math.max(2,Math.round(W/1.6)),ut=null;for(let bt=0;bt<=et;bt++){let Q=bt/et,at=tt.x+($.x-tt.x)*Q,mt=tt.z+($.z-tt.z)*Q,Tt=Math.max(ye(at-j*lt,mt+Z*lt),ye(at+j*lt,mt-Z*lt),ye(at,mt))+.05,Dt={l:[at+j*lt,Tt,mt-Z*lt],r:[at-j*lt,Tt,mt+Z*lt],u:Q*W};ut&&D.quad(ut.l,ut.r,Dt.r,Dt.l,[0,ut.u,2*lt,Dt.u]),ut=Dt}}if(!D.empty){let F=Lo(),k=new Xt(D.build(),new ve({map:F.map,normalMap:F.normalMap,roughness:.92,color:13617338,side:Ne,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));k.receiveShadow=!0,s.add(k)}}for(let D of Xe)for(let k of[-1,1]){let $=Vs(D,k,D.half+.5,Z=>Z.half+Z.sw+1.5),tt=k>0?9:9+31/2,W=0;for(let Z of $)for(let j=1;j<Z.length;j++){let lt=Z[j-1],et=Z[j],ut=Math.hypot(et.x-lt.x,et.z-lt.z);for(;W+ut>=tt;){let bt=(tt-W)/ut;r.push({x:ht(lt.x,et.x,bt),y:ht(lt.y,et.y,bt)+yi,z:ht(lt.z,et.z,bt)}),tt+=31}W+=ut}}let d=[];{for(let Z=-338;Z<=138;Z+=3){let j=(Dr(Z+1)-Dr(Z-1))/2,lt=Math.hypot(1,j);d.push({x:Z,z:Dr(Z),nx:j/lt,nz:-1/lt})}let D=(Z,j)=>[Z.x+Z.nx*j,Z.z+Z.nz*j],F=new Set;for(let Z=14;Z<d.length-6;Z+=26)F.add(Z);let k=new Ce;k.uvScale=.5;for(let Z=0;Z<d.length-1;Z++){let j=d[Z],lt=d[Z+1],et=D(j,40.5),ut=D(lt,40.5),bt=D(j,41.9),Q=D(lt,41.9),at=D(j,47.6),mt=D(lt,47.6),Tt=Math.max(ye(at[0],at[1]),3.15)+.05,Dt=Math.max(ye(mt[0],mt[1]),3.15)+.05,$t=a(j.x,j.z);$t.setColor(...Ys("#f6efe4"));let jt=Z*3,se=F.has(Z)||F.has(Z-1);if(!se)$t.quad([et[0],.6,et[1]],[ut[0],.6,ut[1]],[ut[0],Dt,ut[1]],[et[0],Tt,et[1]],[jt,.6,jt+3,Tt]),$t.quad([et[0],Tt,et[1]],[ut[0],Dt,ut[1]],[Q[0],Dt,Q[1]],[bt[0],Tt,bt[1]],[jt,0,jt+3,1.4]),Ru($t,D(j,40.75)[0],D(j,40.75)[1],D(lt,40.75)[0],D(lt,40.75)[1],Math.min(Tt,Dt),Math.max(Tt,Dt)+.78,.42,jt),t.addSegment(D(j,40.75)[0],D(j,40.75)[1],D(lt,40.75)[0],D(lt,40.75)[1],.26);else if(F.has(Z)){let be=(j.x+d[Z+2].x)/2,Qt=d[Z+1];for(let ue=0;ue<8;ue++){let Oe=41.7-ue*.36,Ie=D(Qt,Oe),V=Tt-ue*.2,Ht=new Ft().makeRotationY(Math.atan2(Qt.nx,Qt.nz)).setPosition(Ie[0],0,Ie[1]);$t.setMatrix(Ht),$t.box(0,(V-1.4)/2+.2,0,5.6,V+1,.4,"xXYzZ"),$t.setMatrix(null)}}k.quad([bt[0],Tt,bt[1]],[Q[0],Dt,Q[1]],[mt[0],Dt,mt[1]],[at[0],Tt,at[1]],[jt,0,jt+3,5.7]),Z%9===4&&r.push({x:D(j,42.4)[0],y:Tt,z:D(j,42.4)[1]}),Z%9===0&&!se&&o.push({x:D(j,43.2)[0],y:Tt,z:D(j,43.2)[1],ang:Math.atan2(-j.nx,-j.nz)})}let $=Lo(),tt=new ve({map:$.map,normalMap:$.normalMap,roughness:.9,color:14275268}),W=new Xt(k.build(),tt);W.receiveShadow=!0,s.add(W)}{let D=["#f3d98a","#9cc7d8","#f0b8a2","#b8d6a8","#f4efe2","#e7a0a0","#a9b9de"];for(let F=0;F<12;F++){let k=d[52+F];if(!k)break;let $=k.x+k.nx*37.4,tt=k.z+k.nz*37.4,W=ye($,tt),Z=new Ft().makeRotationY(Math.atan2(-k.nx,-k.nz)).setPosition($,W,tt),j=c($,tt);j.setMatrix(Z),j.setColor(...Ys(D[F%D.length])),j.box(0,1.15,0,2.2,2.5,2.2,"xXzZ",.9),j.tri3([-1.1,2.4,1.1],[1.1,2.4,1.1],[0,3.25,1.1]),j.tri3([1.1,2.4,-1.1],[-1.1,2.4,-1.1],[0,3.25,-1.1]),j.setColor(...Ys("#f7f4ec")),j.box(0,1,1.11,.8,1.9,.04,"xXYZ"),j.setColor(...Ys(F%2?"#b5563a":"#8f4a36")),j.quad([-1.3,2.28,1.3],[1.3,2.28,1.3],[1.3,3.28,0],[-1.3,3.28,0]),j.quad([1.3,2.28,-1.3],[-1.3,2.28,-1.3],[-1.3,3.28,0],[1.3,3.28,0]),j.setMatrix(null),t.addBox($,tt,1.2,1.2,Math.atan2(-k.nx,-k.nz))}}let p={x:384,z:305,y:0};{p.y=ye(p.x,p.z)+.1;let D=new Ce;D.uvScale=1/1.6,D.box(p.x,p.y-.6,p.z,11,1.4,7,"xXYzZ");let F=c(p.x,p.z);F.setColor(...Ys("#5a4a3a"));let k=(tt,W,Z,j)=>{let lt=Math.hypot(Z-tt,j-W),et=Math.round(lt/1.4);for(let bt=0;bt<=et;bt++)F.box(ht(tt,Z,bt/et),p.y+.6,ht(W,j,bt/et),.09,1.1,.09);let ut=new Ft().makeRotationY(Math.atan2(-(j-W),Z-tt)).setPosition((tt+Z)/2,0,(W+j)/2);F.setMatrix(ut),F.box(0,p.y+1.12,0,lt,.07,.13),F.box(0,p.y+.62,0,lt,.05,.06),F.setMatrix(null),t.addSegment(tt,W,Z,j,.15)};k(p.x-5.4,p.z+3.4,p.x+5.4,p.z+3.4),k(p.x+5.4,p.z+3.4,p.x+5.4,p.z-3.4),k(p.x-5.4,p.z+3.4,p.x-5.4,p.z-.5),F.setColor(.3,.33,.36),F.cylinder(p.x+2.5,p.y,p.z+2.6,.07,.06,1.25,8),F.setColor(.72,.74,.76),F.box(p.x+2.5,p.y+1.36,p.z+2.6,.2,.22,.5),o.push({x:p.x-2.6,y:p.y,z:p.z-1.6,ang:0}),o.push({x:p.x+1.2,y:p.y,z:p.z-1.6,ang:0});let $=new Xt(D.build(),new ve({map:tp(),roughness:.85}));$.castShadow=$.receiveShadow=!0,s.add($)}{let D=xi.huanghai;for(let F=20;F<D.length-20;F+=36){let k=Lr(D,F,D.half+D.sw*.7),$=Lr(D,F,-(D.half+D.sw*.7)),tt=Fe(k.x,k.z)<Fe($.x,$.z)?k:$;if(Fe(tt.x,tt.z)>70)continue;let W=4,Z=Fe(tt.x+W,tt.z)-Fe(tt.x-W,tt.z),j=Fe(tt.x,tt.z+W)-Fe(tt.x,tt.z-W);o.push({x:tt.x,y:tt.y+yi,z:tt.z,ang:Math.atan2(-Z,-j)})}}for(let D of o){let F=c(D.x,D.z),k=new Ft().makeRotationY(D.ang).setPosition(D.x,D.y,D.z);F.setMatrix(k),F.setColor(.1,.13,.12);for(let $ of[-.72,.72])F.box($,.22,.05,.06,.44,.5),F.box($,.62,-.2,.06,.5,.06);F.setColor(...Ys("#7a5a3c"));for(let $=0;$<4;$++)F.box(0,.46,-.13+$*.12,1.6,.04,.09);for(let $=0;$<3;$++)F.box(0,.6+$*.13,-.23-$*.02,1.6,.09,.035);F.setMatrix(null),t.addBox(D.x,D.z,.85,.3,D.ang)}let v=new Ce;v.setColor(1,1,1),v.cylinder(0,0,0,.13,.09,.55,8),v.cylinder(0,.55,0,.055,.04,3.05,8),v.cylinder(0,3.6,0,.1,.05,.08,8),v.box(0,4.18,0,.42,.06,.42),v.cylinder(0,4.2,0,.26,.02,.2,6);for(let[D,F]of[[1,1],[1,-1],[-1,1],[-1,-1]])v.box(D*.15,3.92,F*.15,.025,.5,.025);let m=new ve({color:1581598,roughness:.5,metalness:.6}),g=new Qn(v.build(),m,r.length),y=new ho(.17,.12,.46,6,1);y.translate(0,3.92,0);let E=new ve({color:15919830,roughness:.25,emissive:16761466,emissiveIntensity:0,transparent:!0,opacity:.9}),M=new Qn(y,E,r.length),b=new Ft;r.forEach((D,F)=>{b.makeRotationY(Re(F,3,1)*6.28).setPosition(D.x,D.y,D.z),g.setMatrixAt(F,b),M.setMatrixAt(F,b),t.addCircle(D.x,D.z,.16)}),g.castShadow=!0,g.frustumCulled=M.frustumCulled=!1,s.add(g,M);let S=new De,x=new Float32Array(r.length*3);r.forEach((D,F)=>x.set([D.x,D.y+3.95,D.z],F*3)),S.setAttribute("position",new Ze(x,3));let _=new Te({uniforms:{uNight:ge.uNight,uScale:{value:1}},vertexShader:`
			uniform float uScale;
			varying float vFade;
			void main() {
				vec4 mv = modelViewMatrix * vec4( position, 1.0 );
				gl_Position = projectionMatrix * mv;
				float d = - mv.z;
				gl_PointSize = clamp( uScale * 1.7 / d, 2.0, 160.0 );
				vFade = smoothstep( 900.0, 300.0, d );
			}`,fragmentShader:`
			uniform float uNight;
			varying float vFade;
			void main() {
				vec2 p = gl_PointCoord - 0.5;
				float r = length( p ) * 2.0;
				float g = exp( - r * r * 7.0 ) + 0.35 * exp( - r * r * 1.6 );
				g *= smoothstep( 1.0, 0.7, r );
				gl_FragColor = vec4( vec3( 1.0, 0.66, 0.34 ) * g * uNight * 0.9 * vFade, 1.0 );
			}`,blending:hs,depthWrite:!1,transparent:!0}),T=new ro(S,_);T.frustumCulled=!1,T.renderOrder=960,s.add(T);let w=new ti(1,1);w.rotateX(-Math.PI/2);let A=new Te({uniforms:{uNight:ge.uNight},vertexShader:`
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * viewMatrix * instanceMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			uniform float uNight;
			varying vec2 vUv;
			void main() {
				float r = length( vUv - 0.5 ) * 2.0;
				float g = exp( - r * r * 4.5 ) * smoothstep( 1.0, 0.5, r );
				gl_FragColor = vec4( vec3( 1.0, 0.66, 0.34 ) * g * uNight * 0.26, 1.0 );
			}`,blending:hs,depthWrite:!1,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),C=new Qn(w,A,r.length);r.forEach((D,F)=>{b.makeScale(12,1,12).setPosition(D.x,D.y+.05,D.z),C.setMatrixAt(F,b)}),C.frustumCulled=!1,C.renderOrder=940,s.add(C);let L=[];for(let D=0;D<3;D++){let F=new go(16757865,0,26,1.6);s.add(F),L.push(F)}let I=0;function U(D,F,k,$){if(E.emissiveIntensity=k*2.2,_.uniforms.uScale.value=$,T.visible=C.visible=k>.01,I-=D,k<.01){for(let tt of L)tt.intensity=0;return}I<=0&&(I=.4,r.map(W=>({l:W,d:(W.x-F.x)**2+(W.z-F.z)**2})).sort((W,Z)=>W.d-Z.d).slice(0,L.length).forEach((W,Z)=>L[Z].position.set(W.l.x,W.l.y+3.9,W.l.z)));for(let tt of L)tt.intensity=k*46}{let F=ze(1024),k=F.getContext("2d"),$=et=>[0,et*85];Xe.forEach((et,ut)=>{let[bt,Q]=$(ut);k.fillStyle=et.kind==="NS"?"#1f7a4d":"#1c5fae",k.fillRect(bt,Q,1024,85),k.strokeStyle="#ffffff",k.lineWidth=4,k.strokeRect(bt+5,Q+5,1014,75),k.fillStyle="#ffffff",k.textAlign="center",k.textBaseline="middle",k.font='bold 50px "PingFang SC","Microsoft YaHei","Noto Sans CJK SC","Source Han Sans SC","WenQuanYi Zen Hei",sans-serif';let at=[...et.sc],mt=500;at.forEach((Tt,Dt)=>k.fillText(Tt,bt+1024*.3-mt/2+mt*(Dt+.5)/at.length,Q+43)),k.font='600 30px "Helvetica Neue",Arial,sans-serif',k.fillText(et.en.replace(" Rd"," LU").toUpperCase(),bt+1024*.78,Q+45)});let tt=ke(F,{repeat:!1}),W=new Ce,Z=new Ce;for(let et of Ai){let ut=xi[et.a],bt=xi[et.b],Q=be=>be.pts.reduce((Qt,ue)=>(ue.x-et.x)**2+(ue.z-et.z)**2<(Qt.x-et.x)**2+(Qt.z-et.z)**2?ue:Qt,be.pts[0]),at=Q(ut),mt=Q(bt),Tt=et.x+at.nx*-(ut.half+.8)+mt.nx*(bt.half+.8),Dt=et.z+at.nz*-(ut.half+.8)+mt.nz*(bt.half+.8);if(!oi(Tt,Dt,20))continue;let jt=at.y+yi;Z.cylinder(Tt,jt,Dt,.04,.035,2.95,6,{capTop:!0}),t.addCircle(Tt,Dt,.12);let se=(be,Qt,ue)=>{let Oe=be.index,Ie=1-(Oe+1)*85/1024,V=1-Oe*85/1024,Ht=Qt.tx*.62,Kt=Qt.tz*.62,fe=[Tt-Ht,ue,Dt-Kt],dt=[Tt+Ht,ue,Dt+Kt];W.quad(fe,dt,[dt[0],ue+.3,dt[2]],[fe[0],ue+.3,fe[2]],[0,Ie,1,V]),W.quad(dt,fe,[fe[0],ue+.3,fe[2]],[dt[0],ue+.3,dt[2]],[0,Ie,1,V])};se(ut,at,jt+2.55),se(bt,mt,jt+2.2)}let j=new Xt(W.build(),new ve({map:tt,roughness:.5,metalness:.1}));s.add(j);let lt=new Xt(Z.build(),new ve({color:9080982,roughness:.45,metalness:.7}));lt.castShadow=!0,s.add(lt)}{let D=Io(),F=[];for(let et=0;et<3;et++){let ut=new rs(1,2),bt=ut.getAttribute("position");for(let Q=0;Q<bt.count;Q++){let at=bt.getX(Q),mt=bt.getY(Q),Tt=bt.getZ(Q),Dt=.72+.5*fs(at*1.7+et*9,mt*1.7+Tt*1.3,77+et)+.2*fs(at*4+3,Tt*4+mt*3,91);bt.setXYZ(Q,at*Dt,mt*Dt*.7,Tt*Dt)}ut.computeVertexNormals(),F.push(ut)}let k=new ve({map:D.map,normalMap:D.normalMap,roughness:.92,color:13615800}),$=[[],[],[]],tt=new ne(4141);for(let et=0;et<5200;et++){let ut=tt.range(-470,495),bt=tt.range(130,405),Q=Fe(ut,bt);if(Q<-30||Q>11||Yi(ut,bt)<.6||Math.hypot(ut-p.x,bt-p.z)<8)continue;let at=tt.range(.5,2.6)*(Q<-10?1.25:1);$[et%3].push({x:ut,z:bt,y:ye(ut,bt)+at*.12,s:at,r:tt.range(0,6.28),sy:tt.range(.6,1.1)}),at>1.3&&Q>-2&&t.addCircle(ut,bt,at*.75)}let W=new je,Z=new Kn,j=new H,lt=new H;$.forEach((et,ut)=>{let bt=new Qn(F[ut],k,et.length);et.forEach((Q,at)=>{Z.set(tt.range(-.3,.3),Q.r,tt.range(-.3,.3)),W.setFromEuler(Z),b.compose(lt.set(Q.x,Q.y,Q.z),W,j.set(Q.s,Q.s*Q.sy,Q.s)),bt.setMatrixAt(at,b)}),bt.castShadow=bt.receiveShadow=!0,bt.frustumCulled=!1,s.add(bt)})}{let F=rc(9)+12,k=ye(9,F),$=new rs(1,2),tt=$.getAttribute("position");for(let ut=0;ut<tt.count;ut++){let bt=tt.getX(ut),Q=tt.getY(ut),at=tt.getZ(ut),mt=.86+.26*fs(bt*1.4+5,Q*1.4+at,301);tt.setXYZ(ut,bt*mt*2.5,Q*mt*1.25,at*mt*.85)}$.computeVertexNormals();let W=new Xt($,new ve({color:12168862,roughness:.9,normalMap:Io().normalMap}));W.position.set(9,k+.75,F),W.rotation.y=Math.PI,W.castShadow=W.receiveShadow=!0,s.add(W);let Z=ze(512,256),j=Z.getContext("2d");j.clearRect(0,0,512,256),j.fillStyle="#b3201a",j.textAlign="center",j.textBaseline="middle",j.font='900 150px "STKaiti","KaiTi","Kaiti SC","BiauKai","AR PL UKai CN","Noto Serif CJK SC","Songti SC",serif',j.fillText("\u516B\u5927\u5173",256,132);let lt=ke(Z,{repeat:!1}),et=new Xt(new ti(3.3,1.65),new ve({map:lt,alphaTest:.45,roughness:.7,side:Ne}));et.position.set(9,k+.95,F-1),et.rotation.y=Math.PI,s.add(et),t.addBox(9,F,2.4,.9,0)}let O=Do("rubble"),z={granite:new ve({map:O.map,normalMap:O.normalMap,vertexColors:!0,roughness:.9}),fence:new ve({map:jl(),alphaTest:.5,side:Ne,roughness:.55,metalness:.4,vertexColors:!0}),trim:new ve({vertexColors:!0,roughness:.8})};z.granite.normalScale.set(.45,.45);let X=new Ke;return X.name="props",n.buildMeshes(z,X,{fence:{cast:!1}}),s.add(X),{lamps:r,updateLamps:U,deck:p,prom:d}}function Up(s){let t=new Ke;t.name="backdrop";let e=new ne(2008),n=new Ce;n.setColor(.2,.24,.2);let i=2.5,r=M=>n.poly(M.map(b=>[b[0],i,b[1]]),[1,0,0],[0,0,1],[0,0,0]);r([[2250,-2600],[2250,900],[6e3,900],[6e3,-2600]].reverse()),r([[1e3,-6e3],[1e3,-2500],[6e3,-2500],[6e3,-6e3]].reverse());let o=new Xt(n.build(),new Nn({vertexColors:!0}));t.add(o);let a=[],l=(M,b,S,x,_,T,w)=>{for(let A=0;A<_;A++){let C=M+e.gauss()*S,L=b+e.gauss()*x;if(C<2280&&L>-2480)continue;let I=ht(T,w,Math.pow(e.next(),2.2)),U=e.range(22,46);a.push({x:C,z:L,h:I,w:U,d:U*e.range(.7,1.3),tone:e.range(.75,1.1)})}};l(2600,-700,260,520,46,50,250),l(2900,-1700,420,420,34,40,190),l(1900,-2900,620,260,36,30,130),l(2700,250,260,300,18,30,110);let c=ze(64,128);{let M=c.getContext("2d");M.fillStyle="#000",M.fillRect(0,0,64,128);let b=new ne(88);for(let S=2;S<128;S+=4)for(let x=2;x<64;x+=4)if(b.chance(.38)){let _=b.chance(.6),T=b.range(120,255);M.fillStyle=_?`rgb(${T},${T*.78},${T*.45})`:`rgb(${T*.8},${T*.9},${T})`,M.fillRect(x,S,2,2)}}let h=ke(c,{repeat:!0,aniso:!1});h.magFilter=Je;let f=new ve({color:9411238,roughness:.35,metalness:.3,emissiveMap:h,emissive:16777215,emissiveIntensity:0}),u=new ss(1,1,1);u.translate(0,.5,0);let d=u.getAttribute("uv"),p=new Qn(u,f,a.length),v=new Ft,m=new Rt;a.forEach((M,b)=>{v.makeScale(M.w,M.h,M.d).setPosition(M.x,i,M.z),p.setMatrixAt(b,v),p.setColorAt(b,m.setRGB(.56*M.tone,.6*M.tone,.66*M.tone))}),p.frustumCulled=!1,t.add(p);let g=(M,b,S,x,_,T,w,A)=>{let C=new Ce;C.setColor(...A);let L=46,I=S-M,U=x-b,O=Math.hypot(I,U),z=-U/O,X=I/O,D=null;for(let k=0;k<=L;k++){let $=k/L,tt=Math.pow(Math.sin(Math.PI*$),.6),W=_*tt*(.45+.75*zs($*5+w,w*1.7,4,w)),Z={x:M+I*$,z:b+U*$,h:W};if(D)for(let j of[-1,1]){let lt=[D.x,D.h,D.z],et=[Z.x,Z.h,Z.z],ut=[D.x+z*j*T,0,D.z+X*j*T],bt=[Z.x+z*j*T,0,Z.z+X*j*T];j>0?C.quad(ut,bt,et,lt):C.quad(bt,ut,lt,et)}D=Z}let F=new Xt(C.build(),new Nn({vertexColors:!0}));t.add(F)};g(3900,-3200,4300,900,330,900,3,[.24,.28,.25]),g(5200,-6200,7400,-1200,760,1500,7,[.26,.3,.3]),g(-4200,-4800,-1500,-5600,260,900,11,[.24,.28,.25]);{let S=zo(-180,-1560),x=new Ce;x.setColor(.72,.74,.76),x.cylinder(-180,S-5,-1560,9,5,125,12),x.setColor(.62,.66,.72),x.cylinder(-180,S+108,-1560,6,17,10,16),x.cylinder(-180,S+118,-1560,17,15,12,16),x.cylinder(-180,S+130,-1560,15,4,12,16),x.setColor(.75,.3,.26),x.cylinder(-180,S+142,-1560,3,1.2,46,8),x.setColor(.86,.86,.86),x.cylinder(-180,S+188,-1560,1.2,.5,30,6);let _=new Xt(x.build(),new Nn({vertexColors:!0}));t.add(_);let T=new Xt(new uo(3.2,8,6),new dr({color:16722458}));T.position.set(-180,S+219,-1560),t.add(T),t.userData.beacon=T}{let M=new Ce;for(let S=0;S<46;S++){let x=e.range(-1050,-560),_=e.range(60,500),T=zo(x,_);if(T<3.5)continue;let w=e.chance(.16),A=w?e.range(18,30):e.range(10,20),C=w?e.range(40,78):e.range(8,16),L=e.range(.8,1.05);M.setColor(.86*L,.82*L,.72*L),M.box(x,T+C/2-2,_,A,C+4,A*e.range(.7,1.2),"xXzZ"),M.setColor(.62,.26,.17),M.box(x,T+C+.8,_,A+1,2.2,A+1)}let b=new Xt(M.build(),new Nn({vertexColors:!0}));t.add(b)}let y=[];{let M=(S,x)=>{let _=new Ce;_.setColor(...x),_.box(0,5,0,S,12,S*.15),_.setColor(.9,.9,.88),_.box(-S*.36,17,0,S*.12,14,S*.13);let T=[[.7,.3,.2],[.2,.4,.6],[.75,.6,.25],[.3,.5,.4]];for(let A=0;A<7;A++)_.setColor(...T[A%T.length]),_.box(-S*.2+A*S*.09,13.5,0,S*.08,5+A%3*2.5,S*.12);return new Xt(_.build(),new Nn({vertexColors:!0}))},b=[[-900,3300,230,[.2,.22,.28],.35,5],[1400,4600,300,[.5,.16,.12],Math.PI+.2,4],[3200,2600,190,[.16,.24,.2],.1,6]];for(let[S,x,_,T,w,A]of b){let C=M(_,T);C.position.set(S,0,x),C.rotation.y=w,t.add(C),y.push({m:C,heading:w,speed:A})}}s.add(t);function E(M,b,S){f.emissiveIntensity=S*1.6;let x=t.userData.beacon;x&&(x.visible=S>.3&&Math.sin(b*2.2)>-.2);for(let _ of y)_.m.position.x+=Math.cos(_.heading)*_.speed*M,_.m.position.z-=Math.sin(_.heading)*_.speed*M}return{group:t,update:E}}function Fp(s,t,e,n=1500){let i=new ti(1,1),r=new xr;r.index=i.index,r.setAttribute("position",i.getAttribute("position")),r.setAttribute("uv",i.getAttribute("uv"));let o=new Float32Array(n*4),a=new ne(1212);for(let f=0;f<n*4;f++)o[f]=a.next();r.setAttribute("aSeed",new Vn(o,4)),r.instanceCount=n;let l={tDepth:{value:t.depthTexture},uGrid:t.uniforms.uGrid,tLeafMap:{value:e},uMapRect:{value:new ee(he.minX,he.minZ,1/(he.maxX-he.minX),1/(he.maxZ-he.minZ))},uAmount:{value:1}},c=new Te({uniforms:l,vertexShader:`
			attribute vec4 aSeed;
			uniform float uTime;
			uniform vec3 uCamPos;
			uniform vec4 uWind;
			uniform sampler2D tDepth;
			uniform vec4 uGrid;
			uniform sampler2D tLeafMap;
			uniform vec4 uMapRect;
			uniform float uAmount;
			varying vec3 vColor;
			varying vec2 vUv;
			varying vec3 vNrm;
			varying vec3 vWorld;
			const vec3 BOX = vec3( 62.0, 0.0, 62.0 );
			void main() {
				vUv = uv;
				vec2 base = aSeed.xy * BOX.xz;
				vec2 rel = mod( base - uCamPos.xz + BOX.xz * 0.5, BOX.xz ) - BOX.xz * 0.5;
				vec2 wxz = uCamPos.xz + rel;
				float t = uTime * ( 0.5 + aSeed.z * 0.45 ) + aSeed.w * 61.0;
				float cycle = fract( t / 8.5 );
				// which fall of this slot are we in \u2192 re-randomise each time round
				float gen = floor( t / 8.5 );
				float r1 = fract( sin( gen * 12.9898 + aSeed.x * 78.233 ) * 43758.5453 );
				wxz += uWind.xy * uWind.z * cycle * 6.0;
				wxz += vec2( sin( t * 1.1 + aSeed.x * 20.0 ), cos( t * 0.83 + aSeed.y * 20.0 ) ) * 0.75;
				float ground = texture2D( tDepth, ( wxz - uGrid.xy ) * uGrid.zw ).r;
				float top = 4.0 + r1 * 8.5;
				float y = ground + 0.06 + top * ( 1.0 - cycle );
				vec4 lm = texture2D( tLeafMap, ( wxz - uMapRect.xy ) * uMapRect.zw );
				float present = step( fract( aSeed.x * 91.7 + r1 * 13.3 ), lm.a * uAmount );
				// only where it is land
				present *= step( 0.5, ground );
				// tumble
				float a1 = t * ( 2.2 + aSeed.x * 3.0 ) + aSeed.y * 6.0;
				float a2 = t * ( 1.4 + aSeed.y * 2.2 ) + aSeed.x * 6.0;
				float c1 = cos( a1 ), s1 = sin( a1 ), c2 = cos( a2 ), s2 = sin( a2 );
				float size = ( 0.11 + 0.07 * aSeed.z ) * present * smoothstep( 0.0, 0.05, cycle );
				vec3 p = vec3( position.xy * size, 0.0 );
				p = vec3( p.x, p.y * c2, p.y * s2 );
				p = vec3( p.x * c1 + p.z * s1, p.y, - p.x * s1 + p.z * c1 );
				vec3 n = vec3( s1 * c2, - s2, c1 * c2 );
				vNrm = n;
				vec3 wp = vec3( wxz.x, y, wxz.y ) + p;
				vWorld = wp;
				vColor = lm.rgb * ( 0.8 + 0.4 * aSeed.w );
				gl_Position = projectionMatrix * viewMatrix * vec4( wp, 1.0 );
			}`,fragmentShader:`
			uniform vec3 uLightDir;
			uniform vec3 uLightColor;
			uniform vec3 uAmbient;
			varying vec3 vColor;
			varying vec2 vUv;
			varying vec3 vNrm;
			varying vec3 vWorld;
			${ds}
			void main() {
				// a little fan-shaped blade
				vec2 q = vUv - vec2( 0.5, 0.12 );
				float r = length( q );
				float ang = abs( atan( q.x, q.y ) );
				float leaf = step( r, 0.78 - 0.1 * cos( ang * 6.0 ) ) * step( ang, 1.0 );
				leaf = max( leaf, step( abs( q.x ), 0.03 ) * step( - 0.12, q.y ) * step( q.y, 0.1 ) );
				if ( leaf < 0.5 ) discard;
				vec3 V = normalize( cameraPosition - vWorld );
				float ndl = abs( dot( normalize( vNrm ), uLightDir ) );
				float back = pow( max( dot( V, - uLightDir ), 0.0 ), 3.0 );
				vec3 col = vColor * ( uAmbient * 1.1 + uLightColor * ( 0.12 + 0.2 * ndl + 0.35 * back ) );
				vec3 ray = vWorld - cameraPosition;
				float dist = length( ray );
				vec4 fog = atmosFog( cameraPosition, ray / dist, dist );
				gl_FragColor = vec4( mix( col, fog.rgb, fog.a ), 1.0 );
			}`,side:Ne,fog:!1});c.onBeforeCompile=f=>mi(f),c.customProgramCacheKey=()=>"fallingLeaves";let h=new Xt(r,c);return h.frustumCulled=!1,h.name="falling-leaves",s.add(h),{mesh:h,uniforms:l}}function Op(s,t=34){let e=[],n=[],i=[],r=[],o=(M,b,S,x,_)=>(e.push(M,b,S),n.push(x),i.push(_,_,_),e.length/3-1),a=o(0,0,-.26,0,.95),l=o(.06,0,0,0,.95),c=o(0,0,.24,0,.9),h=o(-.06,0,0,0,.95),f=o(0,.05,-.02,0,1);r.push(a,f,l,l,f,c,c,f,h,h,f,a,a,l,h,l,c,h);for(let M of[-1,1]){let b=o(M*.05,.01,-.1,0,.92),S=o(M*.05,.01,.08,0,.92),x=o(M*.36,.02,-.12,.5,.82),_=o(M*.36,.02,.06,.5,.82),T=o(M*.72,0,-.03,1,.25),w=o(M*.66,0,.07,1,.3);r.push(b,x,S,S,x,_,x,T,_,_,T,w)}let u=new xr;u.setAttribute("position",new le(e,3)),u.setAttribute("aWing",new le(n,1)),u.setAttribute("aShade",new le(i,3)),u.setIndex(r);let d=new Float32Array(t*4),p=new Float32Array(t*4),v=new ne(7007),m=Ue.huashi,g=[[-150,250,70],[0,235,60],[90,262,45],[m.x-10,m.z+40,45],[300,290,60],[390,330,55],[-280,270,60],[60,330,110]];for(let M=0;M<t;M++){let b=g[M%g.length];d.set([b[0]+v.range(-25,25),v.range(7,34),b[1]+v.range(-20,25),b[2]*v.range(.35,1)],M*4),p.set([v.range(5.5,9)*v.sign(),v.range(0,en),v.range(5,7.5),v.range(.85,1.25)],M*4)}u.setAttribute("aOrbit",new Vn(d,4)),u.setAttribute("aPar",new Vn(p,4)),u.instanceCount=t;let y=new Te({vertexShader:`
			attribute float aWing;
			attribute vec3 aShade;
			attribute vec4 aOrbit;
			attribute vec4 aPar;
			uniform float uTime;
			varying vec3 vShade;
			varying vec3 vWorld;
			void main() {
				float speed = aPar.x;
				float ang = aPar.y + uTime * speed / aOrbit.w;
				// a wobbling, slowly breathing circle
				float rad = aOrbit.w * ( 1.0 + 0.25 * sin( uTime * 0.11 + aPar.y * 3.0 ) );
				vec3 c = vec3( aOrbit.x + cos( ang ) * rad, aOrbit.y + 3.0 * sin( uTime * 0.23 + aPar.y * 5.0 ), aOrbit.z + sin( ang ) * rad );
				vec2 fwd = vec2( - sin( ang ), cos( ang ) ) * sign( speed );
				// flap in bursts, glide in between
				float burst = smoothstep( 0.1, 0.7, sin( uTime * 0.37 + aPar.y * 7.0 ) );
				float flap = sin( uTime * aPar.z + aPar.y * 11.0 ) * mix( 0.1, 0.55, burst );
				vec3 p = position * aPar.w * 1.5;
				p.y += flap * aWing * aWing * 0.75 * aPar.w + aWing * 0.1;
				// bank into the turn
				float bank = 0.35 * sign( speed );
				float cb = cos( bank ), sb = sin( bank );
				p = vec3( p.x * cb - p.y * sb, p.x * sb + p.y * cb, p.z );
				// local +z \u2192 travel direction
				vec3 right = vec3( fwd.y, 0.0, - fwd.x );
				vec3 w = c + right * p.x + vec3( 0.0, p.y, 0.0 ) + vec3( fwd.x, 0.0, fwd.y ) * ( - p.z );
				vShade = aShade;
				vWorld = w;
				gl_Position = projectionMatrix * viewMatrix * vec4( w, 1.0 );
			}`,fragmentShader:`
			uniform vec3 uLightColor;
			uniform vec3 uAmbient;
			varying vec3 vShade;
			varying vec3 vWorld;
			${ds}
			void main() {
				vec3 col = vShade * ( uAmbient * 1.6 + uLightColor * 0.22 );
				vec3 ray = vWorld - cameraPosition;
				float dist = length( ray );
				vec4 fog = atmosFog( cameraPosition, ray / dist, dist );
				gl_FragColor = vec4( mix( col, fog.rgb, fog.a ), 1.0 );
			}`,side:Ne,fog:!1});y.onBeforeCompile=M=>mi(M),y.customProgramCacheKey=()=>"gulls";let E=new Xt(u,y);return E.frustumCulled=!1,E.name="gulls",s.add(E),E}function zp(s){let t=[],e=new ne(470),n=o=>{let a=new Ce;a.setColor(.93,.93,.9);let l=6.4,c=2.1,h=.8,f=[[-l/2,c*.42],[l*.1,c/2],[l/2,0],[l*.1,-c/2],[-l/2,-c*.42]];a.prism(f.map(E=>[E[0],E[1]]),-.25,h,{capTop:!0}),a.setColor(.25,.3,.38),a.box(-.4,h+.18,0,1.9,.36,1.1),a.setColor(.8,.8,.8),a.cylinder(.6,h,0,.05,.035,8.6,5),a.box(-.9,h+1.05,0,3,.06,.06);let u=a.build(),d=new Xt(u,new Nn({vertexColors:!0,side:Ne})),p=new Ce;p.setColor(...o);let v=h+1.1,m=h+8.5;p.tri3([.55,v,0],[-2.35,v,.25],[.55,m,0]),p.setColor(o[0]*.96,o[1]*.96,o[2]*.96),p.tri3([.7,v-.2,0],[3.1,h+.2,.2],[.65,m-1.4,0]);let g=new Xt(p.build(),new Nn({vertexColors:!0,side:Ne})),y=new Ke;return y.add(d,g),y};[[1,1,.97],[1,1,.97],[.98,.96,.9],[.92,.3,.22],[1,1,.97],[.2,.42,.72],[1,.97,.9],[.96,.78,.25],[1,1,.97]].forEach((o,a)=>{let l=n(o),c=e.range(-320,420),h=Dr(Math.max(-330,Math.min(420,c)))+e.range(170,620),f={grp:l,cx:c,cz:h,rx:e.range(70,190),rz:e.range(40,120),speed:e.range(1.6,3)*e.sign(),phase:e.range(0,en),heel:e.range(.1,.24)};s.add(l),t.push(f)});function r(o){for(let a of t){let l=a.phase+o*a.speed/((a.rx+a.rz)*.5),c=a.cx+Math.cos(l)*a.rx,h=a.cz+Math.sin(l)*a.rz,f=-Math.sin(l)*a.rx*Math.sign(a.speed),u=Math.cos(l)*a.rz*Math.sign(a.speed);a.grp.position.set(c,.05+.12*Math.sin(o*.9+a.phase*3),h),a.grp.rotation.set(a.heel+.04*Math.sin(o*.7+a.phase),Math.atan2(-u,f),.03*Math.sin(o*1.1+a.phase),"YXZ")}}return r(0),{boats:t,update:r}}var oy=new Gi(-1,1,1,-1,0,1),Cu=class extends De{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}},ay=new Cu,vc=class{constructor(t){this._mesh=new Xt(ay,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,oy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Or=`
varying vec2 vUv;
void main() {
	vUv = uv;
	gl_Position = vec4( position.xy, 0.0, 1.0 );
}`,Bp=An;function _c(s,t,e={}){return new Tn(Math.max(1,s|0),Math.max(1,t|0),{type:Bp,format:Ve,minFilter:Ee,magFilter:Ee,depthBuffer:!1,stencilBuffer:!1,...e})}var ly=5,yc=class{constructor(t,{samples:e=4}={}){this.renderer=t;let n=t.extensions;!n.has("EXT_color_buffer_float")&&!n.has("EXT_color_buffer_half_float")&&(Bp=yn),this.samples=Math.min(e,t.capabilities.maxSamples||0),this.quad=new vc,this.enabled={bloom:!0,godrays:!0},this.sunScreen=new H,this.rtScene=null,this.matMask=new Te({uniforms:{tScene:{value:null},uSun:{value:new Gt},uAspect:{value:1}},vertexShader:Or,fragmentShader:`
				uniform sampler2D tScene;
				uniform vec2 uSun;
				uniform float uAspect;
				varying vec2 vUv;
				void main() {
					vec4 c = texture2D( tScene, vUv );
					float sky = 1.0 - c.a;
					vec2 d = ( vUv - uSun ) * vec2( uAspect, 1.0 );
					float r = length( d );
					float l = dot( c.rgb, vec3( 0.3, 0.55, 0.15 ) );
					vec3 col = c.rgb * ( 1.0 / max( l, 1e-3 ) ) * min( l, 6.0 );
					float w = sky * ( exp( - r * r * 9.0 ) + 0.18 * exp( - r * r * 1.4 ) );
					gl_FragColor = vec4( col * w, 1.0 );
				}`,depthTest:!1,depthWrite:!1}),this.matRadial=new Te({uniforms:{tMap:{value:null},uSun:{value:new Gt},uStep:{value:.1}},vertexShader:Or,fragmentShader:`
				uniform sampler2D tMap;
				uniform vec2 uSun;
				uniform float uStep;
				varying vec2 vUv;
				const int TAPS = 8;
				void main() {
					vec2 delta = ( uSun - vUv ) * uStep;
					vec3 acc = vec3( 0.0 );
					vec2 uv = vUv;
					for ( int i = 0; i < TAPS; i ++ ) {
						acc += texture2D( tMap, uv ).rgb;
						uv += delta;
					}
					gl_FragColor = vec4( acc / float( TAPS ), 1.0 );
				}`,depthTest:!1,depthWrite:!1}),this.matPrefilter=new Te({uniforms:{tMap:{value:null},uTexel:{value:new Gt},uThreshold:{value:1},uKnee:{value:.6}},vertexShader:Or,fragmentShader:`
				uniform sampler2D tMap;
				uniform vec2 uTexel;
				uniform float uThreshold;
				uniform float uKnee;
				varying vec2 vUv;
				vec3 pre( vec3 c ) {
					c = min( c, vec3( 40.0 ) );
					float br = max( c.r, max( c.g, c.b ) );
					float soft = clamp( br - uThreshold + uKnee, 0.0, 2.0 * uKnee );
					soft = soft * soft / ( 4.0 * uKnee + 1e-4 );
					float contrib = max( soft, br - uThreshold ) / max( br, 1e-4 );
					return c * contrib;
				}
				void main() {
					// 4-tap box with per-tap weighting to tame fireflies
					vec3 a = pre( texture2D( tMap, vUv + uTexel * vec2( - 1.0, - 1.0 ) ).rgb );
					vec3 b = pre( texture2D( tMap, vUv + uTexel * vec2( 1.0, - 1.0 ) ).rgb );
					vec3 c = pre( texture2D( tMap, vUv + uTexel * vec2( - 1.0, 1.0 ) ).rgb );
					vec3 d = pre( texture2D( tMap, vUv + uTexel * vec2( 1.0, 1.0 ) ).rgb );
					float wa = 1.0 / ( 1.0 + max( a.r, max( a.g, a.b ) ) );
					float wb = 1.0 / ( 1.0 + max( b.r, max( b.g, b.b ) ) );
					float wc = 1.0 / ( 1.0 + max( c.r, max( c.g, c.b ) ) );
					float wd = 1.0 / ( 1.0 + max( d.r, max( d.g, d.b ) ) );
					gl_FragColor = vec4( ( a * wa + b * wb + c * wc + d * wd ) / ( wa + wb + wc + wd ), 1.0 );
				}`,depthTest:!1,depthWrite:!1}),this.matDown=new Te({uniforms:{tMap:{value:null},uTexel:{value:new Gt}},vertexShader:Or,fragmentShader:`
				uniform sampler2D tMap;
				uniform vec2 uTexel;
				varying vec2 vUv;
				void main() {
					// 13-tap downsample (Jimenez, "Next Generation Post Processing in Call of Duty: AW")
					vec3 A = texture2D( tMap, vUv + uTexel * vec2( - 2.0, - 2.0 ) ).rgb;
					vec3 B = texture2D( tMap, vUv + uTexel * vec2( 0.0, - 2.0 ) ).rgb;
					vec3 C = texture2D( tMap, vUv + uTexel * vec2( 2.0, - 2.0 ) ).rgb;
					vec3 D = texture2D( tMap, vUv + uTexel * vec2( - 1.0, - 1.0 ) ).rgb;
					vec3 E = texture2D( tMap, vUv + uTexel * vec2( 1.0, - 1.0 ) ).rgb;
					vec3 F = texture2D( tMap, vUv + uTexel * vec2( - 2.0, 0.0 ) ).rgb;
					vec3 G = texture2D( tMap, vUv ).rgb;
					vec3 H = texture2D( tMap, vUv + uTexel * vec2( 2.0, 0.0 ) ).rgb;
					vec3 I = texture2D( tMap, vUv + uTexel * vec2( - 1.0, 1.0 ) ).rgb;
					vec3 J = texture2D( tMap, vUv + uTexel * vec2( 1.0, 1.0 ) ).rgb;
					vec3 K = texture2D( tMap, vUv + uTexel * vec2( - 2.0, 2.0 ) ).rgb;
					vec3 L = texture2D( tMap, vUv + uTexel * vec2( 0.0, 2.0 ) ).rgb;
					vec3 M = texture2D( tMap, vUv + uTexel * vec2( 2.0, 2.0 ) ).rgb;
					vec3 c = ( D + E + I + J ) * 0.125;
					c += ( A + B + G + F ) * 0.03125;
					c += ( B + C + H + G ) * 0.03125;
					c += ( F + G + L + K ) * 0.03125;
					c += ( G + H + M + L ) * 0.03125;
					gl_FragColor = vec4( c, 1.0 );
				}`,depthTest:!1,depthWrite:!1}),this.matUp=new Te({uniforms:{tMap:{value:null},uTexel:{value:new Gt}},vertexShader:Or,fragmentShader:`
				uniform sampler2D tMap;
				uniform vec2 uTexel;
				varying vec2 vUv;
				void main() {
					// 3\xD73 tent
					vec3 c = texture2D( tMap, vUv ).rgb * 4.0;
					c += texture2D( tMap, vUv + uTexel * vec2( - 1.0, 0.0 ) ).rgb * 2.0;
					c += texture2D( tMap, vUv + uTexel * vec2( 1.0, 0.0 ) ).rgb * 2.0;
					c += texture2D( tMap, vUv + uTexel * vec2( 0.0, - 1.0 ) ).rgb * 2.0;
					c += texture2D( tMap, vUv + uTexel * vec2( 0.0, 1.0 ) ).rgb * 2.0;
					c += texture2D( tMap, vUv + uTexel * vec2( - 1.0, - 1.0 ) ).rgb;
					c += texture2D( tMap, vUv + uTexel * vec2( 1.0, - 1.0 ) ).rgb;
					c += texture2D( tMap, vUv + uTexel * vec2( - 1.0, 1.0 ) ).rgb;
					c += texture2D( tMap, vUv + uTexel * vec2( 1.0, 1.0 ) ).rgb;
					gl_FragColor = vec4( c / 16.0, 1.0 );
				}`,depthTest:!1,depthWrite:!1,blending:hs,transparent:!0}),this.matFinal=new Te({uniforms:{tScene:{value:null},tBloom:{value:null},tRays:{value:null},uBloom:{value:.5},uRays:{value:.5},uRayColor:{value:new Rt(1,.8,.6)},uExposure:{value:1},uSaturation:{value:1},uContrast:{value:1},uWarmth:{value:0},uVignette:{value:.3},uTime:{value:0},uFade:{value:1},uRes:{value:new Gt(1,1)}},vertexShader:Or,fragmentShader:`
				uniform sampler2D tScene;
				uniform sampler2D tBloom;
				uniform sampler2D tRays;
				uniform float uBloom;
				uniform float uRays;
				uniform vec3 uRayColor;
				uniform float uExposure;
				uniform float uSaturation;
				uniform float uContrast;
				uniform float uWarmth;
				uniform float uVignette;
				uniform float uTime;
				uniform float uFade;
				uniform vec2 uRes;
				varying vec2 vUv;

				// ACES filmic fit (Stephen Hill)
				vec3 RRTAndODTFit( vec3 v ) {
					vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
					vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
					return a / b;
				}
				vec3 aces( vec3 color ) {
					const mat3 inM = mat3( 0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777 );
					const mat3 outM = mat3( 1.60475, - 0.10208, - 0.00327, - 0.53108, 1.10813, - 0.07276, - 0.07367, - 0.00605, 1.07602 );
					color = inM * color;
					color = RRTAndODTFit( color );
					color = outM * color;
					return clamp( color, 0.0, 1.0 );
				}
				float hash12( vec2 p ) {
					vec3 p3 = fract( vec3( p.xyx ) * 0.1031 );
					p3 += dot( p3, p3.yzx + 33.33 );
					return fract( ( p3.x + p3.y ) * p3.z );
				}
				void main() {
					vec3 col = texture2D( tScene, vUv ).rgb;
					col += texture2D( tRays, vUv ).rgb * uRayColor * uRays;
					col += texture2D( tBloom, vUv ).rgb * uBloom;

					// white balance: warm \u2194 cool
					col *= vec3( 1.0 + uWarmth, 1.0, 1.0 - uWarmth * 1.4 );
					col *= uExposure;

					// vignette in scene-referred space
					vec2 q = vUv - 0.5;
					float vig = 1.0 - uVignette * smoothstep( 0.25, 0.95, dot( q, q ) * 2.2 );
					col *= vig;

					col = aces( col / 0.6 );

					// display-referred grade
					float l = dot( col, vec3( 0.2126, 0.7152, 0.0722 ) );
					col = mix( vec3( l ), col, uSaturation );
					col = ( col - 0.5 ) * uContrast + 0.5;
					col = clamp( col, 0.0, 1.0 );

					// sRGB
					col = mix( col * 12.92, 1.055 * pow( col, vec3( 1.0 / 2.4 ) ) - 0.055, step( 0.0031308, col ) );

					// fine grain + dither against banding in the sky
					float g = hash12( vUv * uRes + fract( uTime ) * 61.0 ) - 0.5;
					col += g * ( 0.022 * ( 1.0 - l * 0.6 ) + 1.0 / 255.0 );
					gl_FragColor = vec4( col * uFade, 1.0 );
				}`,depthTest:!1,depthWrite:!1}),this.bloomRTs=[],this.rayRTs=[],this.setSize(1,1)}setSize(t,e){this.w=t,this.h=e,this.rtScene&&this.rtScene.dispose(),this.rtScene=_c(t,e,{depthBuffer:!0,samples:this.samples});for(let r of this.bloomRTs)r.dispose();for(let r of this.rayRTs)r.dispose();this.bloomRTs=[];let n=t>>1,i=e>>1;for(let r=0;r<ly;r++)this.bloomRTs.push(_c(n,i)),n>>=1,i>>=1;this.rayRTs=[_c(t/3,e/3),_c(t/3,e/3)],this.matFinal.uniforms.uRes.value.set(t,e)}setSamples(t){t=Math.min(t,this.renderer.capabilities.maxSamples||0),t!==this.samples&&(this.samples=t,this.setSize(this.w,this.h))}_blit(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.quad.render(this.renderer)}render(t,e,n,i,r=1){let o=this.renderer,a=n.state;o.setRenderTarget(this.rtScene),o.setClearColor(0,1),o.clear(),o.render(t,e);let l=0;if(this.enabled.godrays&&a.godrays>.01){let f=ge.uSunDir.value,u=this.sunScreen.copy(e.position).addScaledVector(f,1e3).project(e),p=e.getWorldDirection(cy).dot(f);if(p>.05&&u.z<1){let v=Math.max(Math.abs(u.x),Math.abs(u.y));l=a.godrays*Math.min(1,(p-.05)*4)*(1-Math.min(1,Math.max(0,v-1)/.7))}if(l>.003){let v=this.matMask.uniforms.uSun.value.set(u.x*.5+.5,u.y*.5+.5);this.matMask.uniforms.tScene.value=this.rtScene.texture,this.matMask.uniforms.uAspect.value=this.w/this.h,this._blit(this.matMask,this.rayRTs[0]),this.matRadial.uniforms.uSun.value.copy(v);let m=0,g=.9;for(let y=1;y<=3;y++)this.matRadial.uniforms.tMap.value=this.rayRTs[m].texture,this.matRadial.uniforms.uStep.value=g*Math.pow(8,-y),this._blit(this.matRadial,this.rayRTs[1-m]),m=1-m;this.matFinal.uniforms.tRays.value=this.rayRTs[m].texture}}let c=this.enabled.bloom&&a.bloom>.01;if(c){let f=this.bloomRTs;this.matPrefilter.uniforms.tMap.value=this.rtScene.texture,this.matPrefilter.uniforms.uTexel.value.set(.5/this.w,.5/this.h),this._blit(this.matPrefilter,f[0]);for(let u=1;u<f.length;u++)this.matDown.uniforms.tMap.value=f[u-1].texture,this.matDown.uniforms.uTexel.value.set(1/f[u-1].width,1/f[u-1].height),this._blit(this.matDown,f[u]);o.autoClear=!1;for(let u=f.length-1;u>0;u--)this.matUp.uniforms.tMap.value=f[u].texture,this.matUp.uniforms.uTexel.value.set(1/f[u].width,1/f[u].height),this._blit(this.matUp,f[u-1]);o.autoClear=!0}let h=this.matFinal.uniforms;h.tScene.value=this.rtScene.texture,h.tBloom.value=c?this.bloomRTs[0].texture:null,h.uBloom.value=c?a.bloom*.16:0,h.uRays.value=l>.003?l*.9:0,h.uRayColor.value.copy(ge.uFogSunColor.value).multiplyScalar(.55),h.uExposure.value=a.exposure,h.uSaturation.value=a.saturation,h.uContrast.value=a.contrast,h.uWarmth.value=a.warmth,h.uVignette.value=a.vignette,h.uTime.value=i,h.uFade.value=r,this._blit(this.matFinal,null)}},cy=new H;var Sc=class{constructor(t=8){this.cell=t,this.map=new Map,this.items=[],this._stamp=0}_insert(t,e,n,i,r){t.stamp=0,this.items.push(t);let o=this.cell;for(let a=Math.floor(e/o);a<=Math.floor(i/o);a++)for(let l=Math.floor(n/o);l<=Math.floor(r/o);l++){let c=a*8192+l,h=this.map.get(c);h||this.map.set(c,h=[]),h.push(t)}}addCircle(t,e,n){this._insert({t:0,x:t,z:e,r:n},t-n,e-n,t+n,e+n)}addBox(t,e,n,i,r=0){let o=Math.cos(r),a=Math.sin(r),l=Math.abs(n*o)+Math.abs(i*a),c=Math.abs(n*a)+Math.abs(i*o);this._insert({t:1,x:t,z:e,hw:n,hd:i,c:o,s:a},t-l,e-c,t+l,e+c)}addSegment(t,e,n,i,r=.25){this._insert({t:2,x0:t,z0:e,x1:n,z1:i,half:r},Math.min(t,n)-r,Math.min(e,i)-r,Math.max(t,n)+r,Math.max(e,i)+r)}resolve(t,e){let n=this.cell,i=!1;for(let r=0;r<2;r++){let o=++this._stamp,a=Math.floor((t.x-e)/n),l=Math.floor((t.x+e)/n),c=Math.floor((t.z-e)/n),h=Math.floor((t.z+e)/n);for(let f=a;f<=l;f++)for(let u=c;u<=h;u++){let d=this.map.get(f*8192+u);if(d)for(let p=0;p<d.length;p++){let v=d[p];if(v.stamp!==o)if(v.stamp=o,v.t===0){let m=t.x-v.x,g=t.z-v.z,y=v.r+e,E=m*m+g*g;if(E<y*y&&E>1e-8){let M=Math.sqrt(E);t.x=v.x+m/M*y,t.z=v.z+g/M*y,i=!0}}else if(v.t===1){let m=t.x-v.x,g=t.z-v.z,y=m*v.c-g*v.s,E=m*v.s+g*v.c,M=ie(y,-v.hw,v.hw),b=ie(E,-v.hd,v.hd),S=y-M,x=E-b,_=S*S+x*x,T=y,w=E;if(_<1e-10){let A=v.hw-Math.abs(y),C=v.hd-Math.abs(E);A<C?T=Math.sign(y||1)*(v.hw+e):w=Math.sign(E||1)*(v.hd+e)}else if(_<e*e){let A=Math.sqrt(_);T=M+S/A*e,w=b+x/A*e}else continue;t.x=v.x+T*v.c+w*v.s,t.z=v.z-T*v.s+w*v.c,i=!0}else{let m=v.x1-v.x0,g=v.z1-v.z0,y=m*m+g*g,E=y>0?((t.x-v.x0)*m+(t.z-v.z0)*g)/y:0;E=ie(E,0,1);let M=v.x0+m*E,b=v.z0+g*E,S=t.x-M,x=t.z-b,_=e+v.half,T=S*S+x*x;if(T<_*_&&T>1e-8){let w=Math.sqrt(T);t.x=M+S/w*_,t.z=b+x/w*_,i=!0}}}}if(!i)break}return i}},kp=1.66,hy=.38,Hp=-.75,Mc=8.5,bc=class{constructor(t,e,n){this.camera=t,this.dom=e,this.colliders=n,this.pos=new H(0,10,0),this.vel=new H,this.yaw=0,this.pitch=0,this.mode="walk",this.onGround=!0,this.vy=0,this.enabled=!1,this.locked=!1,this.dragging=!1,this.keys=new Set,this.bob=0,this.bobAmp=0,this.speed=0,this.sensitivity=.0022,this.touchMove={id:-1,x0:0,y0:0,x:0,y:0},this.touchLook={id:-1,x:0,y:0},this.vertical=0,this.onLockChange=null,this.onModeChange=null,this.onBlocked=null,this._tmp={x:0,z:0},this._bind()}setPose(t,e,n,i=0,r=0){this.pos.set(t,e,n),this.yaw=-i*Math.PI/180,this.pitch=r*Math.PI/180,this.vel.set(0,0,0),this.vy=0,this._apply(0)}place(t,e,n=0){let i=this.mode!=="walk";this.mode="walk",this.onGround=!0,this.setPose(t,ye(t,e)+kp,e,n,0),i&&this.onModeChange&&this.onModeChange("walk")}walkBlock(t,e){return t<He.minX||t>He.maxX||e<He.minZ||e>He.maxZ?"bounds":ye(t,e)<Hp?"water":null}get heading(){return(-this.yaw*180/Math.PI%360+360)%360}setMode(t){if(t===this.mode)return!0;if(t==="walk"){let e=this.walkBlock(this.pos.x,this.pos.z);if(e)return this.onBlocked&&this.onBlocked(e),!1}if(this.mode=t,t==="fly")this.vel.y=2.5,this.onGround=!1;else{this.vy=this.vel.y,this.onGround=!1;let e=Math.hypot(this.vel.x,this.vel.z);e>Mc&&(this.vel.x*=Mc/e,this.vel.z*=Mc/e)}return this.onModeChange&&this.onModeChange(t),!0}requestLock(t=!1){if(!(!this.enabled&&!t||this.locked))try{let e=this.dom.requestPointerLock?.();e&&e.catch&&e.catch(()=>{})}catch{}}_bind(){let t=this.dom;document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.onLockChange&&this.onLockChange(this.locked)}),t.addEventListener("mousedown",r=>{this.enabled&&r.button===0&&(this.dragging=!0,this.requestLock())}),window.addEventListener("mouseup",()=>this.dragging=!1),window.addEventListener("mousemove",r=>{if(this.enabled&&(this.locked||this.dragging)){let o=ie(r.movementX||0,-200,200),a=ie(r.movementY||0,-200,200);this.yaw-=o*this.sensitivity,this.pitch-=a*this.sensitivity,this.pitch=ie(this.pitch,-1.5,1.5)}}),window.addEventListener("keydown",r=>{r.metaKey||r.ctrlKey||r.altKey||(this.keys.add(r.code),this.enabled&&(r.code==="KeyF"&&!r.repeat&&this.setMode(this.mode==="fly"?"walk":"fly"),r.code==="Space"&&this.mode==="walk"&&this.onGround&&(this.vy=4.7,this.onGround=!1),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(r.code)&&r.preventDefault()))}),window.addEventListener("keyup",r=>this.keys.delete(r.code)),window.addEventListener("blur",()=>this.keys.clear());let e=this.touchMove,n=this.touchLook;t.addEventListener("touchstart",r=>{if(this.enabled){for(let o of r.changedTouches)o.clientX<window.innerWidth*.4&&e.id<0?(e.id=o.identifier,e.x0=e.x=o.clientX,e.y0=e.y=o.clientY):n.id<0&&(n.id=o.identifier,n.x=o.clientX,n.y=o.clientY);r.preventDefault()}},{passive:!1}),t.addEventListener("touchmove",r=>{for(let o of r.changedTouches)o.identifier===e.id?(e.x=o.clientX,e.y=o.clientY):o.identifier===n.id&&(this.yaw-=(o.clientX-n.x)*.0045,this.pitch=ie(this.pitch-(o.clientY-n.y)*.0045,-1.5,1.5),n.x=o.clientX,n.y=o.clientY);r.preventDefault()},{passive:!1});let i=r=>{for(let o of r.changedTouches)o.identifier===e.id&&(e.id=-1),o.identifier===n.id&&(n.id=-1)};t.addEventListener("touchend",i),t.addEventListener("touchcancel",i)}_input(){let t=this.keys,e=0,n=0,i=0;(t.has("KeyW")||t.has("ArrowUp"))&&(n+=1),(t.has("KeyS")||t.has("ArrowDown"))&&(n-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(e+=1),(t.has("KeyA")||t.has("ArrowLeft"))&&(e-=1),(t.has("KeyE")||t.has("Space"))&&(i+=1),(t.has("KeyQ")||t.has("KeyC"))&&(i-=1),i+=this.vertical;let r=this.touchMove;if(r.id>=0){let a=(r.x-r.x0)/60,l=(r.y-r.y0)/60;e+=ie(a,-1,1),n+=ie(-l,-1,1)}let o=Math.hypot(e,n);return o>1&&(e/=o,n/=o),{ix:e,iz:n,iy:ie(i,-1,1),run:t.has("ShiftLeft")||t.has("ShiftRight")}}update(t){t=Math.min(t,.1);let e=this.enabled?this._input():{ix:0,iz:0,iy:0,run:!1},n=Math.sin(this.yaw),i=Math.cos(this.yaw),r=this.pos,o=this.vel;if(this.mode==="fly"){let a=e.run?55:15,l=Math.cos(this.pitch),c=Math.sin(this.pitch),h=(-n*l*e.iz+i*e.ix)*a,f=(-i*l*e.iz-n*e.ix)*a,u=(c*e.iz+e.iy)*a,d=1-Math.exp(-t*5);o.x+=(h-o.x)*d,o.y+=(u-o.y)*d,o.z+=(f-o.z)*d,r.addScaledVector(o,t),r.x=ie(r.x,He.minX-900,He.maxX+900),r.z=ie(r.z,He.minZ-900,He.maxZ+1100);let p=Math.max(ye(r.x,r.z),0)+1.3;r.y<p&&(r.y=p,o.y<0&&(o.y=0)),r.y=Math.min(r.y,700),this.bobAmp*=Math.exp(-t*8)}else{let a=e.run?Mc:3.6,l=(-n*e.iz+i*e.ix)*a,c=(-i*e.iz-n*e.ix)*a,h=1-Math.exp(-t*(this.onGround?11:3));o.x+=(l-o.x)*h,o.z+=(c-o.z)*h;let f=this._tmp,u=Math.min(12,Math.max(1,Math.ceil(Math.hypot(o.x,o.z)*t/.3)));for(let m=0;m<u;m++){f.x=r.x+o.x*t/u,f.z=r.z+o.z*t/u,this.colliders&&this.colliders.resolve(f,hy),f.x=ie(f.x,He.minX,He.maxX),f.z=ie(f.z,He.minZ,He.maxZ);let g=ye(r.x,r.z);this._tooDeep(f.x,f.z,g)&&(this._tooDeep(f.x,r.z,g)?this._tooDeep(r.x,f.z,g)?(f.x=r.x,f.z=r.z):f.x=r.x:f.z=r.z),r.x=f.x,r.z=f.z}let d=ye(r.x,r.z)+kp;this.onGround?(r.y+=(d-r.y)*(1-Math.exp(-t*16)),d-r.y>.6&&(r.y=d-.6)):(this.vy-=13.5*t,r.y+=this.vy*t,r.y<=d&&(r.y=d,this.vy=0,this.onGround=!0)),o.y=0;let p=Math.hypot(o.x,o.z);this.speed=p;let v=this.onGround?Math.min(p/3.6,1.6):0;this.bobAmp+=(v-this.bobAmp)*(1-Math.exp(-t*6)),this.bob+=t*(5.2+p*1.25)}this._apply(t)}_tooDeep(t,e,n){let i=ye(t,e);return i<Hp&&i<n}_apply(){let t=this.camera,e=this.mode==="walk"?Math.sin(this.bob*2)*.028*this.bobAmp:0,n=this.mode==="walk"?Math.cos(this.bob)*.016*this.bobAmp:0;t.position.set(this.pos.x+Math.cos(this.yaw)*n,this.pos.y+e,this.pos.z-Math.sin(this.yaw)*n),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}};function wc(s,t){let e=xi[s],n=e.pts[0],i=1e9;for(let r of e.pts){let o=Math.abs((e.kind==="NS"?r.z:r.x)-t);o<i&&(i=o,n=r)}return n}var Ec=class{constructor(t){this.camera=t,this.active=!1,this.u=0,this.speed=7.5;let e=l=>wc("juyong",l),n=l=>wc("jiayu",l),i=l=>wc("zijing",l),r=l=>wc("shaoguan",l),o=[[[-250,34,430],[-40,4,190]],[[-120,14,300],[70,5,215]],[[-20,5,236],[150,6,255]],[[105,7,270],[203,8,257]],[[200,14,322],[203,7,257]],[[282,10,276],[384,3,302]],[[376,9,322],[300,5,150]],[[330,30,215],[216,8,110]],[[i(150).x+3,9,150],[i(60).x,5,60]],[[i(98).x,3.4,98],[e(150).x,3,e(150).z]],[[170,2.8,e(170).z],[60,3,e(60).z]],[[70,2.7,e(70).z],[-40,3.5,e(-40).z]],[[14,2.9,e(14).z],[-80,4.5,e(-80).z]],[[-30,2.8,e(-30).z],[-120,6,20]],[[-90,22,10],[-170,6,-100]],[[-190,27,-110],[r(-200).x,4,-200]],[[r(-208).x+1.5,12,-208],[-170,3,n(-170).z]],[[-196,4.4,n(-196).z],[-100,3.5,n(-100).z]],[[-90,3,n(-90).z],[30,3.5,n(30).z]],[[-36,3,n(-36).z],[70,4,n(70).z]],[[10,3,n(10).z],[120,5,n(120).z]],[[110,30,-230],[40,5,-60]],[[60,100,-120],[-20,0,200]],[[-120,88,190],[-60,0,330]]],a=([l,c,h])=>new H(l,Math.max(ye(l,h),0)+c,h);this.posCurve=new pr(o.map(l=>a(l[0])),!0,"centripetal"),this.lookCurve=new pr(o.map(l=>a(l[1])),!0,"centripetal"),this.length=this.posCurve.getLength(),this._p=new H,this._l=new H,this._m=new Ft,this._q=new je,this._first=!0}start(t=null){this.active=!0,t!==null&&(this.u=t),this._first=!0}stop(){this.active=!1}update(t){if(!this.active)return;this.u=(this.u+this.speed*t/this.length)%1;let e=this.posCurve.getUtoTmapping(this.u);this.posCurve.getPoint(e,this._p),this.lookCurve.getPoint(e,this._l);let n=this.camera;n.position.copy(this._p),this._m.lookAt(this._p,this._l,n.up),this._q.setFromRotationMatrix(this._m),this._first?(n.quaternion.copy(this._q),this._first=!1):n.quaternion.slerp(this._q,1-Math.exp(-t*2.2))}pose(){let t=this.camera.getWorldDirection(this._l);return{heading:Math.atan2(t.x,-t.z)*180/Math.PI,pitch:Math.asin(Math.max(-1,Math.min(1,t.y)))*180/Math.PI}}};var $e=s=>document.querySelector(s),zn={x0:-400,x1:500,z0:-390,z1:390},Vp={ginkgo:"#e0ad2a",maple:"#d2552a",plane:"#a8843c",cedar:"#2f6b4f",juniper:"#4c8a3a",peach:"#e58fb0",crabapple:"#d96a8a",crape:"#b05ac0",pine:"#2f7f86"},uy=["\u6625","\u590F","\u79CB","\u51AC"],fy={high:"\u9AD8",medium:"\u4E2D",low:"\u4F4E"},dy=["\u5317","\u6771\u5317","\u6771","\u6771\u5357","\u5357","\u897F\u5357","\u897F","\u897F\u5317"];function Gp(s,t){let e=s.getContext("2d"),n=s.width,i=s.height,r=n/(zn.x1-zn.x0),o=i/(zn.z1-zn.z0),a=p=>(p-zn.x0)*r,l=p=>(p-zn.z0)*o,c=2,h=e.createImageData(n,i),f=h.data,u=t?{sea:[178,205,212],shallow:[200,221,222],sand:[229,211,160],rock:[176,160,140],land:[226,218,190],park:[205,211,170]}:{sea:[22,44,56],shallow:[34,64,76],sand:[150,136,100],rock:[84,76,68],land:[48,56,46],park:[58,70,50]};for(let p=0;p<i;p+=c)for(let v=0;v<n;v+=c){let m=zn.x0+(v+c/2)/r,g=zn.z0+(p+c/2)/o,y=ye(m,g),E;if(y<-1.2)E=u.sea;else if(y<.02)E=u.shallow;else{let M=Fe(m,g);M<42&&Yi(m,g)<.5?E=u.sand:M<14?E=u.rock:E=M<90||m>236?u.park:u.land}for(let M=0;M<c;M++)for(let b=0;b<c;b++){let S=((p+M)*n+v+b)*4;f[S]=E[0],f[S+1]=E[1],f[S+2]=E[2],f[S+3]=t?255:235}}e.putImageData(h,0,0),e.fillStyle=t?"#b4553a":"#c0624a";for(let p of Gs)e.save(),e.translate(a(p.x),l(p.z)),e.rotate(-p.rot),e.fillRect(-p.w/2*r,-p.d/2*o,p.w*r,p.d*o),e.restore();e.lineCap="round",e.lineJoin="round";for(let p of[0,1])for(let v of Xe)e.beginPath(),v.pts.forEach((m,g)=>g?e.lineTo(a(m.x),l(m.z)):e.moveTo(a(m.x),l(m.z))),p===0?(e.strokeStyle=t?"#fbf6ea":"rgba(244,236,220,0.9)",e.lineWidth=Math.max(2.2,v.half*2*r*1.25)):(e.strokeStyle=Vp[v.tree],e.lineWidth=Math.max(1.2,v.half*2*r*.55)),e.stroke();let d=(p,v,m)=>{e.fillStyle=m,e.beginPath(),e.arc(a(p),l(v),t?7:4,0,Math.PI*2),e.fill(),e.strokeStyle=t?"#2a2622":"#f4ecdc",e.lineWidth=t?1.5:1,e.stroke()};if(d(Ue.huashi.x,Ue.huashi.z,"#8d8676"),d(Ue.princess.x,Ue.princess.z,"#5fb3a8"),t){e.fillStyle="#2a2622",e.textBaseline="middle";let p='"Songti TC","Noto Serif TC","Noto Serif CJK TC","Source Han Serif TC","PMingLiU","Songti SC","SimSun","WenQuanYi Zen Hei",serif';for(let y of Xe){let E=nc[y.tree];e.font=`700 17px ${p}`,e.lineWidth=4,e.strokeStyle="rgba(239,229,207,0.92)";let M=(b,S,x,_="left")=>{e.textAlign=_,e.strokeText(b,S,x),e.fillText(b,S,x)};if(y.kind==="EW"){let b=y.pts[Math.floor(y.pts.length*.045)];e.fillStyle="#2a2622",M(y.tc,a(b.x)-8,l(b.z)-14),e.font=`13px ${p}`,e.fillStyle="#6b6258",M(E.tc,a(b.x)+e.measureText(y.tc).width*1.32,l(b.z)-14)}else if(y.kind==="NS"){let b=y.pts[Math.floor(y.pts.length*.5)],S=[...y.tc];e.fillStyle="#2a2622",S.forEach((x,_)=>M(x,a(b.x)+16,l(b.z)-152+_*19,"center")),e.font=`13px ${p}`,e.fillStyle="#6b6258",[...E.tc].forEach((x,_)=>M(x,a(b.x)+16,l(b.z)-152+(S.length+.6+_)*19*.86+6,"center"))}else{let b=y.pts[Math.floor(y.pts.length*.3)];e.fillStyle="#2a2622",M(y.tc,a(b.x)+14,l(b.z)+4),e.font=`13px ${p}`,e.fillStyle="#6b6258",M(E.tc,a(b.x)+14,l(b.z)+23)}}e.font=`700 17px ${p}`,e.lineWidth=4,e.strokeStyle="rgba(239,229,207,0.92)";let v=(y,E,M,b="#2a2622",S=17,x=!1)=>{e.font=`${x?"italic ":"700 "}${S}px ${p}`,e.textAlign="center",e.fillStyle=b,e.strokeText(y,a(E),l(M)),e.fillText(y,a(E),l(M))};v("\u82B1\u77F3\u6A13",Ue.huashi.x-4,Ue.huashi.z+20),v("\u516C\u4E3B\u6A13",Ue.princess.x,Ue.princess.z-16),v("\u7B2C\u4E8C\u6D77\u6C34\u6D74\u5834",-80,192,"#7a6230"),v("\u592A\u5E73\u89D2",352,216,"#4a5a3a"),e.strokeStyle="rgba(178,205,212,0.0)",v("\u592A \u5E73 \u7063",-40,318,"#4d7480",24),v("\u6D6E\u5C71\u7063",488,60,"#4d7480",15),v("\u9EC3 \u6D77",250,366,"#4d7480",15),e.strokeStyle="#2a2622",e.fillStyle="#2a2622",e.lineWidth=1.5;let m=n-46,g=56;e.beginPath(),e.moveTo(m,g-26),e.lineTo(m-8,g+6),e.lineTo(m,g),e.lineTo(m+8,g+6),e.closePath(),e.fill(),e.font=`700 15px ${p}`,e.textAlign="center",e.fillText("\u5317",m,g+22),e.beginPath(),e.moveTo(40,i-30),e.lineTo(40+100*r,i-30),e.moveTo(40,i-35),e.lineTo(40,i-25),e.moveTo(40+100*r,i-35),e.lineTo(40+100*r,i-25),e.stroke(),e.font=`12px ${p}`,e.fillText("100 m",40+50*r,i-42)}return{X:a,Z:l,sx:r,sz:o}}var Tc=class{constructor(t){this.app=t,this.el=$e("#hud"),this.place=$e("#place"),this.placeKey=null,this.placeTimer=0,this.tick=0,this.hintTimer=14,this.toastTimer=0,this.started=!1;let e=$e("#times");$l.forEach((o,a)=>{let l=document.createElement("button");l.textContent=Sn[o].label.length>2?Sn[o].label.slice(-2):Sn[o].label,l.title=`${Sn[o].label} \xB7 ${Sn[o].en} (${a+1})`,l.dataset.k=o,l.addEventListener("click",()=>t.setPreset(o)),e.appendChild(l)});let n=$e("#seasons");uy.forEach((o,a)=>{let l=document.createElement("button");l.textContent=o,l.dataset.i=a,l.addEventListener("click",()=>t.setSeason(a)),n.appendChild(l)}),this.toolBtns={},document.querySelectorAll("#tools button").forEach(o=>{this.toolBtns[o.dataset.act]=o,o.addEventListener("click",()=>{let a=o.dataset.act;a==="tour"?t.toggleTour():a==="fly"?t.toggleFly():a==="sound"?t.toggleSound():a==="quality"?t.cycleQuality():a==="help"&&this.toggle("help")})}),document.querySelectorAll("[data-close]").forEach(o=>o.addEventListener("click",()=>this.toggle(o.dataset.close,!1)));for(let o of["bigmap","help"])$e("#"+o).addEventListener("mousedown",a=>{a.target.id===o&&this.toggle(o,!1)});this.mini=$e("#map canvas"),this.miniBase=document.createElement("canvas"),this.miniBase.width=this.mini.width,this.miniBase.height=this.mini.height,this.miniT=Gp(this.miniBase,!1),$e("#map").addEventListener("click",()=>this.toggle("bigmap")),this.big=$e("#bigmap canvas"),this.bigBase=null,this.big.addEventListener("click",o=>{let a=this.big.getBoundingClientRect(),l=zn.x0+(o.clientX-a.left)/a.width*(zn.x1-zn.x0),c=zn.z0+(o.clientY-a.top)/a.height*(zn.z1-zn.z0);if(ye(l,c)<.3)return this.toast("\u90A3\u88E1\u662F\u6D77");this.toggle("bigmap",!1),t.teleport(Math.min(Math.max(l,He.minX+2),He.maxX-2),Math.min(Math.max(c,He.minZ+2),He.maxZ-2))});let i=$e("#legend"),r=new Set;for(let o of Xe){if(r.has(o.tree))continue;r.add(o.tree);let a=Xe.filter(h=>h.tree===o.tree).map(h=>h.tc).join("\u3001"),l=document.createElement("span"),c=document.createElement("i");c.style.background=Vp[o.tree],l.append(c,`${nc[o.tree].tc} \u2014 ${a}`),i.appendChild(l)}window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&document.body.classList.add("touch"),window.addEventListener("touchstart",()=>{document.body.classList.add("touch")},{once:!0,passive:!0}),document.querySelectorAll("[data-touch]").forEach(o=>{let a=o.dataset.touch==="up"?1:-1,l=h=>{h.preventDefault(),t.player.mode!=="fly"&&t.toggleFly(),t.player.vertical=a},c=()=>t.player.vertical=0;o.addEventListener("touchstart",l,{passive:!1}),o.addEventListener("touchend",c),o.addEventListener("touchcancel",c)}),this.stick=$e("#stick i"),this.syncButtons()}get overlayOpen(){return $e("#bigmap").classList.contains("on")||$e("#help").classList.contains("on")}toggle(t,e){let n=$e("#"+t),i=e??!n.classList.contains("on");if(i){for(let r of["bigmap","help"])r!==t&&$e("#"+r).classList.remove("on");t==="bigmap"&&(this.bigBase||(this.bigBase=document.createElement("canvas"),this.bigBase.width=this.big.width,this.bigBase.height=this.big.height,this.bigT=Gp(this.bigBase,!0)),this.drawBig()),document.pointerLockElement&&document.exitPointerLock()}n.classList.toggle("on",i),this.app.player.enabled=this.app.started&&!this.overlayOpen&&!this.app.tour.active}start(){this.started=!0,this.el.classList.add("on"),this.hintTimer=16}toast(t,e=2.4){let n=$e("#toast");n.textContent=t,n.classList.add("on"),this.toastTimer=e}setPhoto(t){this.el.classList.toggle("photo",t),document.body.classList.toggle("photo",t)}syncButtons(){let t=this.app;document.querySelectorAll("#times button").forEach(n=>n.classList.toggle("on",n.dataset.k===t.atmosphere.name)),document.querySelectorAll("#seasons button").forEach(n=>n.classList.toggle("on",Number(n.dataset.i)===t.season));let e=this.toolBtns;e.tour.classList.toggle("on",t.tour.active&&this.started),e.fly.classList.toggle("on",t.player.mode==="fly"),e.fly.textContent=t.player.mode==="fly"?"\u6B65\u884C":"\u98DB\u884C",e.sound.classList.toggle("on",t.audio.enabled),e.quality.textContent="\u756B\u8CEA\xB7"+fy[t.quality],$e("#modeLabel").textContent=t.tour.active?"\u5C0E\u89BD\u4E2D":t.player.mode==="fly"?"\u98DB\u884C":"\u6B65\u884C"}_marker(t,e,n,i,r,o){t.save(),t.translate(e.X(n),e.Z(i)),t.rotate(r*Math.PI/180),t.fillStyle="#ffd35c",t.strokeStyle="#1a1a1a",t.lineWidth=1.5*o,t.beginPath(),t.moveTo(0,-11*o),t.lineTo(7*o,8*o),t.lineTo(0,4*o),t.lineTo(-7*o,8*o),t.closePath(),t.fill(),t.stroke(),t.restore()}drawBig(){if(!this.bigBase)return;let t=this.big.getContext("2d");t.drawImage(this.bigBase,0,0);let e=this.app.camera.position;this._marker(t,this.bigT,e.x,e.z,this._heading(),1.5)}_heading(){let t=this.app.camera.getWorldDirection(this._v||(this._v=this.app.camera.position.clone()));return(Math.atan2(t.x,-t.z)*180/Math.PI+360)%360}update(t){let e=this.app;if(this.toastTimer>0&&(this.toastTimer-=t,this.toastTimer<=0&&$e("#toast").classList.remove("on")),!this.started)return;let n=e.player.touchMove;if(this.stick){let d=n.id>=0?Math.max(-32,Math.min(32,n.x-n.x0)):0,p=n.id>=0?Math.max(-32,Math.min(32,n.y-n.y0)):0;this.stick.style.transform=`translate(${d}px, ${p}px)`}if(this.hintTimer>0&&(this.hintTimer-=t,this.hintTimer<=0&&$e("#hint").classList.add("off")),this.tick-=t,this.tick>0)return;this.tick=.2;let i=e.camera.position,r=this._heading(),o=null,a="",l="",c="",h="";if(!(i.y-Math.max(ye(i.x,i.z),0)>45)){for(let d of hp)if(Math.hypot(i.x-d.x,i.z-d.z)<d.r){let p=oi(i.x,i.z,6);if(d.id==="beach"&&(Fe(i.x,i.z)>47||p))continue;o=d.id,a=d.tc,l=d.en,c=d.sub;break}if(!o){let d=oi(i.x,i.z,11);if(d){let p=d.road,v=nc[p.tree];o=p.id,a=p.tc,l=p.en,h=v.tc,c=v.note}}}o!==this.placeKey&&(this.placeKey=o,this.place.classList.remove("show"),clearTimeout(this._pt),o&&(this._pt=setTimeout(()=>{this.place.querySelector(".name").textContent=a,this.place.querySelector(".en").textContent=l;let d=this.place.querySelector(".note");if(d.textContent="",h){let p=document.createElement("b");p.textContent=h,d.append(p)}d.append(c),this.place.classList.add("show")},650))),$e("#compass").textContent=dy[Math.round(r/45)%8];let u=this.mini.getContext("2d");u.clearRect(0,0,this.mini.width,this.mini.height),u.drawImage(this.miniBase,0,0),this._marker(u,this.miniT,i.x,i.z,r,1.5),$e("#bigmap").classList.contains("on")&&this.drawBig()}};var Ac=class{constructor(){this.ctx=null,this.enabled=!1,this.volume=.6,this.t=0,this.nextGull=6,this.nextHorn=9,this.stepPhase=0}_noise(t,e){let n=this.ctx,i=Math.floor(n.sampleRate*t),r=n.createBuffer(1,i,n.sampleRate),o=r.getChannelData(0),a=0,l=0,c=0;for(let f=0;f<i;f++){let u=Math.random()*2-1;e?(a=.99765*a+u*.099046,l=.963*l+u*.2965164,c=.57*c+u*1.0526913,o[f]=(a+l+c+u*.1848)*.22):o[f]=u}let h=Math.floor(n.sampleRate*.25);for(let f=0;f<h;f++){let u=f/h;o[f]=o[f]*u+o[i-h+f]*(1-u)}return r}_loop(t,e,n,i){let r=this.ctx,o=r.createBufferSource();o.buffer=t,o.loop=!0,o.loopEnd=t.duration-.25;let a=r.createBiquadFilter();a.type=e,a.frequency.value=n,a.Q.value=i;let l=r.createGain();return l.gain.value=0,o.connect(a).connect(l).connect(this.master),o.start(0,Math.random()*(t.duration-.5)),{src:o,filter:a,gain:l}}start(){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}let e=this.ctx;this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination),this.pink=this._noise(6,!0),this.white=this._noise(3,!1),this.sea=this._loop(this.pink,"lowpass",520,.3),this.swash=this._loop(this.white,"bandpass",2600,.5),this.wind=this._loop(this.pink,"bandpass",620,.35),this.leavesN=this._loop(this.white,"highpass",4200,.4),this.enabled=!0,this.master.gain.setTargetAtTime(this.volume,e.currentTime,1.2),this._resume(),document.addEventListener("visibilitychange",()=>{!document.hidden&&this.enabled&&this._resume()})}_resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume&&this.ctx.resume().catch(()=>{})}toggle(){return this.ctx?(this.enabled=!this.enabled,this.enabled&&this._resume(),this.master.gain.setTargetAtTime(this.enabled?this.volume:0,this.ctx.currentTime,.4),this.enabled):(this.start(),this.enabled)}_gull(t){let e=this.ctx,n=e.currentTime+.05,i=e.createStereoPanner?e.createStereoPanner():null,r=e.createGain();r.gain.value=t,i?(i.pan.value=Math.random()*1.6-.8,r.connect(i).connect(this.master)):r.connect(this.master);let o=2+Math.floor(Math.random()*4),a=1500+Math.random()*500;for(let l=0;l<o;l++){let c=n+l*(.3+Math.random()*.08),h=e.createOscillator();h.type="sawtooth";let f=e.createBiquadFilter();f.type="bandpass",f.frequency.value=a*1.25,f.Q.value=5;let u=e.createGain();u.gain.setValueAtTime(0,c),u.gain.linearRampToValueAtTime(.9,c+.04),u.gain.exponentialRampToValueAtTime(.001,c+.27),h.frequency.setValueAtTime(a*.8,c),h.frequency.linearRampToValueAtTime(a*1.28,c+.07),h.frequency.exponentialRampToValueAtTime(a*.7,c+.26),h.connect(f).connect(u).connect(r),h.start(c),h.stop(c+.3)}}_horn(t){let e=this.ctx,n=e.currentTime+.05,i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=340;let r=e.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(t,n+.5),r.gain.setValueAtTime(t,n+2.6),r.gain.exponentialRampToValueAtTime(5e-4,n+4.4),i.connect(r).connect(this.master);for(let o of[98,147.5]){let a=e.createOscillator();a.type="sawtooth",a.frequency.value=o,a.connect(i),a.start(n),a.stop(n+4.5)}}_step(t,e){let n=this.ctx,i=n.currentTime,r=n.createBufferSource();r.buffer=this.white;let o=n.createBiquadFilter();o.type="bandpass",o.frequency.value=e?2800+Math.random()*1400:700+Math.random()*300,o.Q.value=e?.7:1.4;let a=n.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(t,i+.012),a.gain.exponentialRampToValueAtTime(8e-4,i+(e?.2:.09)),r.connect(o).connect(a).connect(this.master),r.start(i,Math.random()*2,.3)}update(t,e){if(!this.ctx||!this.enabled)return;let n=this.ctx;if(n.state!=="running")return;let i=n.currentTime;this.t+=t;let r=Math.max(0,1-e.altitude/220),o=Math.pow(Math.max(0,1-Math.max(e.coast,0)/320),1.6)*(.35+.65*r),a=this.t*.118*Math.PI*2,l=Math.pow(.5+.5*Math.sin(a),2.4)*.75+Math.pow(.5+.5*Math.sin(a*.63+1.7),2)*.25,c=Math.pow(.5+.5*Math.sin(a-1.1),3);this.sea.gain.gain.setTargetAtTime((.1+.5*l)*(.06+.94*o),i,.25),this.sea.filter.frequency.setTargetAtTime(380+420*l,i,.3),this.swash.gain.gain.setTargetAtTime(.05*c*o*o,i,.2);let h=.35+.65*(1-o);if(this.wind.gain.gain.setTargetAtTime((.05+.13*e.gust)*(.7+.3*(1-r)),i,.6),this.wind.filter.frequency.setTargetAtTime(480+380*e.gust,i,.8),this.leavesN.gain.gain.setTargetAtTime(.012*e.gust*e.gust*h*r*(.4+.6*e.leaves),i,.5),this.nextGull-=t,this.nextGull<=0&&(this.nextGull=5+Math.random()*14,o>.2&&e.night<.5&&this._gull(.035*o*(.5+Math.random()*.5))),this.nextHorn-=t,this.nextHorn<=0&&(this.nextHorn=21+Math.random()*9,e.fog>.6&&this._horn(.07)),e.walking&&e.speed>.8){let f=Math.floor(e.bob/Math.PI);f!==this.stepPhase&&(this.stepPhase=f,this._step(.05+.03*Math.min(e.speed/8,1),e.leaves>.45))}}};var Bn=new URLSearchParams(location.search),ai=s=>document.querySelector(s),py=()=>new Promise(s=>requestAnimationFrame(()=>setTimeout(s,0))),Rc={high:{maxPixels:33e5,prCap:2,samples:4,shadow:2048,shadowDist:300,leaf:1,godrays:!0},medium:{maxPixels:2e6,prCap:1.5,samples:2,shadow:1536,shadowDist:240,leaf:.72,godrays:!0},low:{maxPixels:115e4,prCap:1,samples:0,shadow:1024,shadowDist:170,leaf:.45,godrays:!1}},zr=["high","medium","low"],ys=[{litter:.1,fall:0,dry:.1,name:"\u6625 \xB7 \u78A7\u6843\u6D77\u68E0"},{litter:.04,fall:0,dry:0,name:"\u590F \xB7 \u7D2B\u8587\u6FC3\u852D"},{litter:1,fall:1,dry:1,name:"\u79CB \xB7 \u9280\u674F\u6953\u7D05"},{litter:.5,fall:.06,dry:1.5,name:"\u51AC \xB7 \u96EA\u677E\u5E38\u9752"}],Pu=class{constructor(){this.canvas=ai("#scene"),this.lastFrame=0,this.time=0,this.frames=0,this.ready=!1,this.started=!1,this.quality=Rc[Bn.get("q")]?Bn.get("q"):"high",this.autoQuality=!Bn.get("q"),this.season=2,this._seasonCap=null,this._seasonT=1,this.slow=0,this.shotMode=Bn.has("shot")}async init(){let t=this.renderer=new Bl({canvas:this.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!1,alpha:!1});t.outputColorSpace=ln,t.toneMapping=ei,t.shadowMap.enabled=!0,t.shadowMap.type=Ls,Wd(Math.min(8,t.capabilities.getMaxAnisotropy())),this.scene=new to,this.camera=new vn(62,1,.25,Zl),this.scene.add(this.camera),this.atmosphere=new Jl(this.scene),this.post=new yc(t,{samples:Rc[this.quality].samples}),this.colliders=new Sc(8),this.player=new bc(this.camera,this.canvas,this.colliders),this.audio=new Ac;let e=[["\u92EA\u958B\u6D77\u8207\u5929",()=>{this.sky=new Ql(this.scene,this.atmosphere),this.ocean=new oc(this.scene,this.atmosphere)}],["\u5806\u8D77\u5C71\u52E2\u8207\u6C99\u7058",()=>{this.terrain=dp(this.scene)}],["\u4FEE\u7BC9\u5341\u689D\u95DC\u8DEF",()=>{this.roads=mp(this.scene)}],["\u4E00\u95DC\u4E00\u6A39",()=>{this.forest=new dc,this.planting=Sp(this.forest,this.colliders,this.scene)}],["\u84CB\u8D77\u842C\u570B\u5EFA\u7BC9",()=>{this.buildings=Lp(this.scene,this.colliders,this.forest)}],["\u780C\u77F3\u7246 \xB7 \u7ACB\u8857\u71C8",()=>{this.props=Np(this.scene,this.colliders,this.forest)}],["\u9060\u5C71 \xB7 \u5E06\u5F71 \xB7 \u6D77\u9DD7",()=>{this.backdrop=Up(this.scene),this.gulls=Op(this.scene),this.boats=zp(this.scene),this.leaves=Fp(this.scene,this.ocean,this.planting.leafMap)}],["\u679D\u8449\u6210\u852D",()=>{let o=this.forest.build(this.scene);console.info("forest",JSON.stringify(o)),this.terrain.paintLitter(this.planting.litterAt)}]];for(let o=0;o<e.length;o++)this.progress(o/e.length,e[o][0]+"\u2026"),await py(),e[o][1]();this.progress(1,""),this.tour=new Ec(this.camera),this.hud=new Tc(this),this.applyQuality(),Sn[Bn.get("preset")]&&this.atmosphere.set(Bn.get("preset"),0);let n=Number.parseInt(Bn.get("season"),10);n>=0&&n<=3&&this.setSeason(n,!0),this.applySeasonUniforms(this.season,this.season,1),this.hud.syncButtons(),window.addEventListener("resize",()=>this.resize()),this.bindKeys(),this.player.onLockChange=o=>{!o&&this.started&&!this.hud.overlayOpen&&!this.tour.active&&!document.body.classList.contains("touch")&&this.hud.toast("\u9EDE\u64CA\u756B\u9762\uFF0C\u7E7C\u7E8C\u904A\u89BD",3.5)},this.player.onModeChange=()=>this.hud.syncButtons(),this.player.onBlocked=o=>this.hud.toast(o==="water"?"\u6D77\u9762\u4E0A\u7121\u6CD5\u6B65\u884C \xB7 \u8ACB\u5148\u98DB\u56DE\u5CB8\u4E0A":"\u9019\u88E1\u5DF2\u5728\u666F\u5340\u4E4B\u5916 \xB7 \u8ACB\u5148\u98DB\u56DE\u516B\u5927\u95DC",3),this.tour.start(.02);let i=Bn.get("cam");if(i||this.shotMode)if(this.tour.stop(),this.started=!0,ai("#intro").classList.add("hidden"),Bn.has("ui")&&this.hud.start(),this.player.enabled=!0,i){let[o,a,l,c,h]=i.split(",").map(Number);this.player.mode="fly",this.player.setPose(o,a,l,c||0,h||0)}else this.placeAtStart();this.ready=!0,ai("#intro").classList.remove("loading"),ai("#progress").style.opacity=0;let r=ai("#start");r.disabled=!1,r.addEventListener("click",()=>this.start()),t.setAnimationLoop(()=>this.frame())}progress(t,e){ai("#loadbar").style.transform=`scaleX(${t})`,ai("#loadlabel").textContent=e}placeAtStart(){let t=xi.juyong,e=t.pts[0];for(let n of t.pts)Math.abs(n.x-62)<Math.abs(e.x-62)&&(e=n);this.player.place(e.x,e.z+.8,268)}async start(){if(this.started)return;this.started=!0,this.audio.start(),this.player.requestLock(!0);let t=ai("#fade");t.classList.add("on"),ai("#intro").classList.add("hidden"),await new Promise(e=>setTimeout(e,750)),this.tour.stop(),this.placeAtStart(),this.hud.start(),this.player.enabled=!this.hud.overlayOpen,this.hud.syncButtons(),t.classList.remove("on"),this.adaptAt=this.time+4}setPreset(t){!Sn[t]||t===this.atmosphere.name||(this.atmosphere.set(t,4.5),this.hud.syncButtons(),this.hud.toast(Sn[t].label))}setSeason(t,e=!1){Number.isInteger(t)&&(t=(t%4+4)%4,!(t===this.season&&!e)&&(this.forest.capture(),this._seasonCap={litter:Fn.uLitterAmount.value,dry:Fn.uDry.value,fall:this.leaves.uniforms.uAmount.value},this.season=t,this._seasonT=e?1:0,e&&this.applySeasonUniforms(t,t,1),this.hud&&(this.hud.syncButtons(),e||this.hud.toast(ys[t].name))))}applySeasonUniforms(t,e,n){this.forest.blendSeason(t,e,n),Fn.uLitterAmount.value=ht(ys[t].litter,ys[e].litter,n),Fn.uDry.value=ht(ys[t].dry,ys[e].dry,n),this.leaves.uniforms.uAmount.value=ht(ys[t].fall,ys[e].fall,n)}toggleTour(){if(this.started){if(this.tour.active){this.tour.stop();let t=this.camera.position,e=this.tour.pose();this.player.mode="fly",this.player.setPose(t.x,t.y,t.z,e.heading,e.pitch),this.player.enabled=!this.hud.overlayOpen,this.hud.toast("\u7531\u4F60\u63A5\u624B \xB7 \u98DB\u884C\u4E2D")}else this.tour.start(),this.player.enabled=!1,this.hud.toast("\u81EA\u52D5\u5C0E\u89BD \xB7 \u6309 T \u63A5\u624B",3);this.hud.syncButtons()}}toggleFly(){if(this.tour.active)return this.toggleTour();this.player.setMode(this.player.mode==="fly"?"walk":"fly")&&this.hud.toast(this.player.mode==="fly"?"\u98DB\u884C \xB7 E \u5347 Q \u964D":"\u6B65\u884C")}toggleSound(){let t=this.audio.toggle();this.hud.syncButtons(),this.hud.toast(t?"\u74B0\u5883\u8072 \u958B":"\u74B0\u5883\u8072 \u95DC",1.4)}cycleQuality(){this.autoQuality=!1,this.quality=zr[(zr.indexOf(this.quality)+1)%zr.length],this.applyQuality(),this.hud.syncButtons()}applyQuality(){let t=Rc[this.quality],e=Number(Bn.get("shadow"))||t.shadow;this.atmosphere.setShadowQuality(e,t.shadowDist),this.forest.setFraction(Number(Bn.get("leaf"))||t.leaf),this.post.setSamples(t.samples),this.forest.setAlphaToCoverage(this.post.samples>0&&!Bn.has("noa2c")),this.post.enabled.godrays=t.godrays,this.resize()}async teleport(t,e){let n=ai("#fade");n.classList.add("on"),await new Promise(r=>setTimeout(r,500)),this.tour.active&&(this.tour.stop(),this.hud.syncButtons());let i=this.player.heading;this.player.place(t,e,i),this.player.enabled=!this.hud.overlayOpen,this.hud.syncButtons(),n.classList.remove("on")}bindKeys(){window.addEventListener("keydown",t=>{if(t.metaKey||t.ctrlKey||t.altKey||t.repeat)return;if(t.code==="Escape"){this.hud.toggle("bigmap",!1),this.hud.toggle("help",!1);return}if(!this.started){t.code==="Enter"&&this.ready&&this.start();return}let e=/^Digit([1-4])$/.exec(t.code);e?this.setPreset($l[Number(e[1])-1]):t.code==="KeyT"?this.toggleTour():t.code==="KeyM"?this.hud.toggle("bigmap"):t.code==="KeyH"?this.hud.toggle("help"):t.code==="KeyN"?this.toggleSound():t.code==="KeyP"?(this.photo=!this.photo,this.hud.setPhoto(this.photo),this.photo&&this.hud.toast("\u62CD\u7167\u6A21\u5F0F \xB7 \u518D\u6309 P \u986F\u793A\u4ECB\u9762",1.6)):t.code==="BracketRight"?this.setSeason(this.season+1):t.code==="BracketLeft"&&this.setSeason(this.season-1)})}resize(){let t=window.innerWidth,e=window.innerHeight,n=Rc[this.quality],i=Math.min(window.devicePixelRatio||1,n.prCap);i=Math.min(i,Math.sqrt(n.maxPixels/(t*e))),i*=Number(Bn.get("scale"))||1,this.renderer.setPixelRatio(i),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.post.setSize(Math.max(2,Math.round(t*i)),Math.max(2,Math.round(e*i)))}adapt(t){if(!(!this.autoQuality||!this.started||this.time<(this.adaptAt||0)||document.hidden)&&!(t>.25)&&(this.slow=t>1/27?this.slow+t:Math.max(0,this.slow-t*2),this.slow>2.2)){this.slow=0;let e=zr.indexOf(this.quality);e<zr.length-1?(this.quality=zr[e+1],this.applyQuality(),this.hud.syncButtons(),this.hud.toast("\u5DF2\u81EA\u52D5\u8ABF\u4F4E\u756B\u8CEA\uFF0C\u8B93\u756B\u9762\u66F4\u6D41\u66A2",2.6),this.adaptAt=this.time+3):this.autoQuality=!1}}frame(){let t=performance.now(),e=this.lastFrame?(t-this.lastFrame)/1e3:1/60;this.lastFrame=t;let n=Math.min(e,.1);this.time+=n;let i=this.camera;this.tour.active?this.tour.update(n):this.player.update(n);let r=i.position.y-Math.max(ye(i.position.x,i.position.z),0),o=r>30?1.2:.25;if(o!==i.near&&(i.near=o,i.updateProjectionMatrix()),this._seasonT<1){this._seasonT=Math.min(1,this._seasonT+n/2.6);let l=this._seasonT,c=l*l*(3-2*l),h=ys[this.season],f=this._seasonCap;this.forest.blendFromCapture(this.season,c),Fn.uLitterAmount.value=ht(f.litter,h.litter,c),Fn.uDry.value=ht(f.dry,h.dry,c),this.leaves.uniforms.uAmount.value=ht(f.fall,h.fall,c)}ge.uCamPos.value.copy(i.position),this.atmosphere.update(n,this.time),this.sky.update(),this.ocean.update(i);let a=ge.uNight.value;if(this.props.updateLamps(n,i.position,a,this.post.h*.83),this.buildings.mats.window.emissiveIntensity=a*2.4,this.backdrop.update(n,this.time,a),this.boats.update(this.time),this.hud.update(n),this.audio.enabled){let l=i.position,c=this.planting.litterAt(l.x,l.z);this.audio.update(n,{coast:Fe(l.x,l.z),gust:ge.uWind.value.z,night:a,fog:We(this.atmosphere.state.fogDensity/.012),walking:!this.tour.active&&this.player.mode==="walk"&&this.player.onGround,speed:this.player.speed,bob:this.player.bob,leaves:c?c[3]*Fn.uLitterAmount.value:0,altitude:r})}this.post.render(this.scene,i,this.atmosphere,this.time,1),this.frames++,this.adapt(e),Bn.has("fps")&&this.frames%20===0&&(ai("#fps").textContent=`${Math.round(1/Math.max(e,.001))} fps`)}},Wp=new Pu;window.__app=Wp;Wp.init().catch(s=>{console.error(s),ai("#loadlabel").textContent="\u8F09\u5165\u5931\u6557\uFF1A"+(s&&s.message?s.message:s)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
