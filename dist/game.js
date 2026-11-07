(()=>{var rc="170";var Fh=0,Dc=1,Oh=2;var Hl=1,zh=2,Sn=3,Yn=0,Te=1,wn=2,Xn=0,qn=1,ms=2,Uc=3,Nc=4,kh=5,ci=100,Bh=101,Hh=102,Vh=103,Gh=104,Wh=200,Xh=201,qh=202,Yh=203,Oa=204,za=205,Zh=206,Jh=207,$h=208,Kh=209,jh=210,Qh=211,tu=212,eu=213,nu=214,ka=0,Ba=1,Ha=2,Hi=3,Va=4,Ga=5,Wa=6,Xa=7,Vl=0,iu=1,su=2,dn=0,ru=1,au=2,ou=3,cu=4,lu=5,hu=6,uu=7;var Gl=300,Vi=301,Gi=302,qa=303,Ya=304,Ir=306,Za=1e3,ui=1001,Ja=1002,nn=1003,du=1004;var Ps=1005;var un=1006,aa=1007;var di=1008;var Rn=1009,Wl=1010,Xl=1011,gs=1012,ac=1013,fi=1014,En=1015,bs=1016,oc=1017,cc=1018,Wi=1020,ql=35902,Yl=1021,Zl=1022,en=1023,Jl=1024,$l=1025,zi=1026,Xi=1027,Kl=1028,lc=1029,jl=1030,hc=1031;var uc=1033,sr=33776,rr=33777,ar=33778,or=33779,$a=35840,Ka=35841,ja=35842,Qa=35843,to=36196,eo=37492,no=37496,io=37808,so=37809,ro=37810,ao=37811,oo=37812,co=37813,lo=37814,ho=37815,uo=37816,fo=37817,po=37818,mo=37819,go=37820,vo=37821,cr=36492,xo=36494,_o=36495,Ql=36283,yo=36284,Mo=36285,So=36286;var lr=2300,bo=2301,oa=2302,Fc=2400,Oc=2401,zc=2402;var fu=3200,pu=3201;var mu=0,gu=1,Gn="",$e="srgb",Kn="srgb-linear",Lr="linear",ie="srgb";var Si=7680;var kc=519,vu=512,xu=513,_u=514,th=515,yu=516,Mu=517,Su=518,bu=519,Bc=35044,jn=35048;var Hc="300 es",Tn=2e3,hr=2001,Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ca=Math.PI/180,wo=180/Math.PI;function ws(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[s&255]+Ie[s>>8&255]+Ie[s>>16&255]+Ie[s>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Oe(s,t,e){return Math.max(t,Math.min(e,s))}function wu(s,t){return(s%t+t)%t}function la(s,t,e){return(1-e)*s+e*t}function as(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Yt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class s{constructor(t,e,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],v=i[0],g=i[3],f=i[6],E=i[1],_=i[4],x=i[7],R=i[2],A=i[5],w=i[8];return r[0]=a*v+o*E+c*R,r[3]=a*g+o*_+c*A,r[6]=a*f+o*x+c*w,r[1]=l*v+h*E+u*R,r[4]=l*g+h*_+u*A,r[7]=l*f+h*x+u*w,r[2]=d*v+p*E+m*R,r[5]=d*g+p*_+m*A,r[8]=d*f+p*x+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,m=e*u+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=d*v,t[4]=(h*e-i*c)*v,t[5]=(i*r-o*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ha.makeScale(t,e)),this}rotate(t){return this.premultiply(ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ha=new Ht;function eh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Eu(){let s=ur("canvas");return s.style.display="block",s}var Vc={};function ds(s){s in Vc||(Vc[s]=!0,console.warn(s))}function Tu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Au(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ru(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qt={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?Lr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function An(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Gc=[.64,.33,.3,.6,.15,.06],Wc=[.2126,.7152,.0722],Xc=[.3127,.329],qc=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[Kn]:{primaries:Gc,whitePoint:Xc,transfer:Lr,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:Wc,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:Gc,whitePoint:Xc,transfer:ie,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:Wc,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}});var bi,Eo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bi===void 0&&(bi=ur("canvas")),bi.width=t.width,bi.height=t.height;let n=bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ur("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cu=0,dr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=ws(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ua(i[a].image)):r.push(ua(i[a]))}else r=ua(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function ua(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Eo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pu=0,Ke=class s extends Zn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ui,i=ui,r=un,a=di,o=en,c=Rn,l=s.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=ws(),this.name="",this.source=new dr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Za:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Za:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Gl;Ke.DEFAULT_ANISOTROPY=1;var me=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],v=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,x=(p+1)/2,R=(f+1)/2,A=(h+d)/4,w=(u+v)/4,C=(m+g)/4;return _>x&&_>R?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=A/n,r=w/n):x>R?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=C/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=w/r,i=C/r),this.set(n,i,r,e),this}let E=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(u-v)/E,this.z=(d-h)/E,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},To=class extends Zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new dr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends To{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fr=class extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ao=class extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],p=r[a+1],m=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=v;return}if(u!==v||c!==d||l!==p||h!==m){let g=1-o,f=c*d+l*p+h*m+u*v,E=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let R=Math.sqrt(_),A=Math.atan2(R,f*E);g=Math.sin(g*A)/R,o=Math.sin(o*A)/R}let x=o*E;if(c=c*g+d*x,l=l*g+p*x,h=h*g+m*x,u=u*g+v*x,g===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*p-l*d,t[e+1]=c*m+h*d+l*u-o*p,t[e+2]=l*m+h*p+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),p=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return da.copy(this).projectOnVector(t),this.sub(da)}reflect(t){return this.sub(da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},da=new z,Zc=new fn,pi=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(r,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),Ls.subVectors(this.max,os),wi.subVectors(t.a,os),Ei.subVectors(t.b,os),Ti.subVectors(t.c,os),On.subVectors(Ei,wi),zn.subVectors(Ti,Ei),ei.subVectors(wi,Ti);let e=[0,-On.z,On.y,0,-zn.z,zn.y,0,-ei.z,ei.y,On.z,0,-On.x,zn.z,0,-zn.x,ei.z,0,-ei.x,-On.y,On.x,0,-zn.y,zn.x,0,-ei.y,ei.x,0];return!fa(e,wi,Ei,Ti,Ls)||(e=[1,0,0,0,1,0,0,0,1],!fa(e,wi,Ei,Ti,Ls))?!1:(Ds.crossVectors(On,zn),e=[Ds.x,Ds.y,Ds.z],fa(e,wi,Ei,Ti,Ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},vn=[new z,new z,new z,new z,new z,new z,new z,new z],je=new z,Is=new pi,wi=new z,Ei=new z,Ti=new z,On=new z,zn=new z,ei=new z,os=new z,Ls=new z,Ds=new z,ni=new z;function fa(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ni.fromArray(s,r);let o=i.x*Math.abs(ni.x)+i.y*Math.abs(ni.y)+i.z*Math.abs(ni.z),c=t.dot(ni),l=e.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Iu=new pi,cs=new z,pa=new z,mi=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Iu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);let e=cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(cs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(pa)),this.expandByPoint(cs.copy(t.center).sub(pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},xn=new z,ma=new z,Us=new z,kn=new z,ga=new z,Ns=new z,va=new z,vs=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ma.copy(t).add(e).multiplyScalar(.5),Us.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(ma);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Us),o=kn.dot(this.direction),c=-kn.dot(Us),l=kn.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ma).addScaledVector(Us,d),p}intersectSphere(t,e){xn.subVectors(t.center,this.origin);let n=xn.dot(this.direction),i=xn.dot(xn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,i,r){ga.subVectors(e,t),Ns.subVectors(n,t),va.crossVectors(ga,Ns);let a=this.direction.dot(va),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,t);let c=o*this.direction.dot(Ns.crossVectors(kn,Ns));if(c<0)return null;let l=o*this.direction.dot(ga.cross(kn));if(l<0||c+l>a)return null;let h=-o*kn.dot(va);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class s{constructor(t,e,n,i,r,a,o,c,l,h,u,d,p,m,v,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,d,p,m,v,g)}set(t,e,n,i,r,a,o,c,l,h,u,d,p,m,v,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=v,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),a=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,m=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+m*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=m+p*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,m=l*h,v=l*u;e[0]=d+v*o,e[4]=m*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,m=l*h,v=l*u;e[0]=d-v*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,p=a*u,m=o*h,v=o*u;e[0]=c*h,e[4]=m*l-p,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=p*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,p=a*l,m=o*c,v=o*l;e[0]=c*h,e[4]=v-d*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+m,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*c,p=a*l,m=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lu,t,Du)}lookAt(t,e,n){let i=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Bn.crossVectors(n,Be),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Bn.crossVectors(n,Be)),Bn.normalize(),Fs.crossVectors(Be,Bn),i[0]=Bn.x,i[4]=Fs.x,i[8]=Be.x,i[1]=Bn.y,i[5]=Fs.y,i[9]=Be.y,i[2]=Bn.z,i[6]=Fs.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],v=n[6],g=n[10],f=n[14],E=n[3],_=n[7],x=n[11],R=n[15],A=i[0],w=i[4],C=i[8],S=i[12],y=i[1],P=i[5],U=i[9],N=i[13],H=i[2],G=i[6],B=i[10],Y=i[14],L=i[3],K=i[7],et=i[11],ot=i[15];return r[0]=a*A+o*y+c*H+l*L,r[4]=a*w+o*P+c*G+l*K,r[8]=a*C+o*U+c*B+l*et,r[12]=a*S+o*N+c*Y+l*ot,r[1]=h*A+u*y+d*H+p*L,r[5]=h*w+u*P+d*G+p*K,r[9]=h*C+u*U+d*B+p*et,r[13]=h*S+u*N+d*Y+p*ot,r[2]=m*A+v*y+g*H+f*L,r[6]=m*w+v*P+g*G+f*K,r[10]=m*C+v*U+g*B+f*et,r[14]=m*S+v*N+g*Y+f*ot,r[3]=E*A+_*y+x*H+R*L,r[7]=E*w+_*P+x*G+R*K,r[11]=E*C+_*U+x*B+R*et,r[15]=E*S+_*N+x*Y+R*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],v=t[7],g=t[11],f=t[15];return m*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*p-n*c*p)+v*(+e*c*p-e*l*d+r*a*d-i*a*p+i*l*h-r*c*h)+g*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+f*(-i*o*h-e*c*u+e*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],v=t[13],g=t[14],f=t[15],E=u*g*l-v*d*l+v*c*p-o*g*p-u*c*f+o*d*f,_=m*d*l-h*g*l-m*c*p+a*g*p+h*c*f-a*d*f,x=h*v*l-m*u*l+m*o*p-a*v*p-h*o*f+a*u*f,R=m*u*c-h*v*c-m*o*d+a*v*d+h*o*g-a*u*g,A=e*E+n*_+i*x+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return t[0]=E*w,t[1]=(v*d*r-u*g*r-v*i*p+n*g*p+u*i*f-n*d*f)*w,t[2]=(o*g*r-v*c*r+v*i*l-n*g*l-o*i*f+n*c*f)*w,t[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*p-n*c*p)*w,t[4]=_*w,t[5]=(h*g*r-m*d*r+m*i*p-e*g*p-h*i*f+e*d*f)*w,t[6]=(m*c*r-a*g*r-m*i*l+e*g*l+a*i*f-e*c*f)*w,t[7]=(a*d*r-h*c*r+h*i*l-e*d*l-a*i*p+e*c*p)*w,t[8]=x*w,t[9]=(m*u*r-h*v*r-m*n*p+e*v*p+h*n*f-e*u*f)*w,t[10]=(a*v*r-m*o*r+m*n*l-e*v*l-a*n*f+e*o*f)*w,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*w,t[12]=R*w,t[13]=(h*v*i-m*u*i+m*n*d-e*v*d-h*n*g+e*u*g)*w,t[14]=(m*o*i-a*v*i-m*n*c+e*v*c+a*n*g-e*o*g)*w,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*d+e*o*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,m=r*u,v=a*h,g=a*u,f=o*u,E=c*l,_=c*h,x=c*u,R=n.x,A=n.y,w=n.z;return i[0]=(1-(v+f))*R,i[1]=(p+x)*R,i[2]=(m-_)*R,i[3]=0,i[4]=(p-x)*A,i[5]=(1-(d+f))*A,i[6]=(g+E)*A,i[7]=0,i[8]=(m+_)*w,i[9]=(g-E)*w,i[10]=(1-(d+v))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ai.set(i[0],i[1],i[2]).length(),a=Ai.set(i[4],i[5],i[6]).length(),o=Ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Qe.copy(this);let l=1/r,h=1/a,u=1/o;return Qe.elements[0]*=l,Qe.elements[1]*=l,Qe.elements[2]*=l,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Tn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,m;if(o===Tn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===hr)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Tn){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*l,p=(n+i)*h,m,v;if(o===Tn)m=(a+r)*u,v=-2*u;else if(o===hr)m=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ai=new z,Qe=new ue,Lu=new z(0,0,0),Du=new z(1,1,1),Bn=new z,Fs=new z,Be=new z,Jc=new ue,$c=new fn,sn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $c.setFromEuler(this),this.setFromQuaternion($c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Uu=0,Kc=new z,Ri=new fn,_n=new ue,Os=new z,ls=new z,Nu=new z,Fu=new fn,jc=new z(1,0,0),Qc=new z(0,1,0),tl=new z(0,0,1),el={type:"added"},Ou={type:"removed"},Ci={type:"childadded",child:null},xa={type:"childremoved",child:null},Ve=class s extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new z,e=new sn,n=new fn,i=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ht}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(jc,t)}rotateY(t){return this.rotateOnAxis(Qc,t)}rotateZ(t){return this.rotateOnAxis(tl,t)}translateOnAxis(t,e){return Kc.copy(t).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jc,t)}translateY(t){return this.translateOnAxis(Qc,t)}translateZ(t){return this.translateOnAxis(tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(ls,Os,this.up):_n.lookAt(Os,ls,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(_n),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(el),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ou),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(el),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,Nu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ve.DEFAULT_UP=new z(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new z,yn=new z,_a=new z,Mn=new z,Pi=new z,Ii=new z,nl=new z,ya=new z,Ma=new z,Sa=new z,ba=new me,wa=new me,Ea=new me,li=class s{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),tn.subVectors(t,e),i.cross(tn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){tn.subVectors(i,e),yn.subVectors(n,e),_a.subVectors(t,e);let a=tn.dot(tn),o=tn.dot(yn),c=tn.dot(_a),l=yn.dot(yn),h=yn.dot(_a),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mn.x),c.addScaledVector(a,Mn.y),c.addScaledVector(o,Mn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return ba.setScalar(0),wa.setScalar(0),Ea.setScalar(0),ba.fromBufferAttribute(t,e),wa.fromBufferAttribute(t,n),Ea.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ba,r.x),a.addScaledVector(wa,r.y),a.addScaledVector(Ea,r.z),a}static isFrontFacing(t,e,n,i){return tn.subVectors(n,e),yn.subVectors(t,e),tn.cross(yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),tn.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Pi.subVectors(i,n),Ii.subVectors(r,n),ya.subVectors(t,n);let c=Pi.dot(ya),l=Ii.dot(ya);if(c<=0&&l<=0)return e.copy(n);Ma.subVectors(t,i);let h=Pi.dot(Ma),u=Ii.dot(Ma);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Pi,a);Sa.subVectors(t,r);let p=Pi.dot(Sa),m=Ii.dot(Sa);if(m>=0&&p<=m)return e.copy(r);let v=p*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(Ii,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return nl.subVectors(r,i),o=(u-h)/(u-h+(p-m)),e.copy(i).addScaledVector(nl,o);let f=1/(g+v+d);return a=v*f,o=d*f,e.copy(n).addScaledVector(Pi,a).addScaledVector(Ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Ta(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=wu(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ta(a,r,t+1/3),this.g=Ta(a,r,t),this.b=Ta(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=nh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return Qt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Oe(Le.r*255,0,255))*65536+Math.round(Oe(Le.g*255,0,255))*256+Math.round(Oe(Le.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Le.copy(this),e);let n=Le.r,i=Le.g,r=Le.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=$e){Qt.fromWorkingColorSpace(Le.copy(this),t);let e=Le.r,n=Le.g,i=Le.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(zs);let n=la(Hn.h,zs.h,e),i=la(Hn.s,zs.s,e),r=la(Hn.l,zs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new Xt;Xt.NAMES=nh;var zu=0,Jn=class extends Zn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=ws(),this.name="",this.blending=qn,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=za,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qn&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==za&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mr=class extends Jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ve=new z,ks=new Yt,Wt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bc,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=as(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=as(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=as(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=as(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=as(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bc&&(t.usage=this.usage),t}};var gr=class extends Wt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vr=class extends Wt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends Wt{constructor(t,e,n){super(new Float32Array(t),e,n)}},ku=0,Je=new ue,Aa=new Ve,Li=new z,He=new pi,hs=new pi,Ee=new z,_e=class s extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eh(t)?vr:gr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(He.min,hs.min),He.expandByPoint(Ee),Ee.addVectors(He.max,hs.max),He.expandByPoint(Ee)):(He.expandByPoint(hs.min),He.expandByPoint(hs.max))}He.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ee.fromBufferAttribute(o,l),c&&(Li.fromBufferAttribute(t,l),Ee.add(Li)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new z,c[C]=new z;let l=new z,h=new z,u=new z,d=new Yt,p=new Yt,m=new Yt,v=new z,g=new z;function f(C,S,y){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),m.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(d),m.sub(d);let P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(P),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(P),o[C].add(v),o[S].add(v),o[y].add(v),c[C].add(g),c[S].add(g),c[y].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let C=0,S=E.length;C<S;++C){let y=E[C],P=y.start,U=y.count;for(let N=P,H=P+U;N<H;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let _=new z,x=new z,R=new z,A=new z;function w(C){R.fromBufferAttribute(i,C),A.copy(R);let S=o[C];_.copy(S),_.sub(R.multiplyScalar(R.dot(S))).normalize(),x.crossVectors(A,S);let P=x.dot(c[C])<0?-1:1;a.setXYZW(C,_.x,_.y,_.z,P)}for(let C=0,S=E.length;C<S;++C){let y=E[C],P=y.start,U=y.count;for(let N=P,H=P+U;N<H;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new z,r=new z,a=new z,o=new z,c=new z,l=new z,h=new z,u=new z;if(t)for(let d=0,p=t.count;d<p;d+=3){let m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let f=0;f<h;f++)d[m++]=l[p++]}return new Wt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},il=new ue,ii=new vs,Bs=new mi,sl=new z,Hs=new z,Vs=new z,Gs=new z,Ra=new z,Ws=new z,rl=new z,Xs=new z,se=class extends Ve{constructor(t=new _e,e=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Ws.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Ra.fromBufferAttribute(u,t),a?Ws.addScaledVector(Ra,h):Ws.addScaledVector(Ra.sub(e),h))}e.add(Ws)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(Bs.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Bs,sl)===null||ii.origin.distanceToSquared(sl)>(t.far-t.near)**2))&&(il.copy(r).invert(),ii.copy(t.ray).applyMatrix4(il),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],f=a[g.materialIndex],E=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let x=E,R=_;x<R;x+=3){let A=o.getX(x),w=o.getX(x+1),C=o.getX(x+2);i=qs(this,f,t,n,l,h,u,A,w,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=m,f=v;g<f;g+=3){let E=o.getX(g),_=o.getX(g+1),x=o.getX(g+2);i=qs(this,a,t,n,l,h,u,E,_,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],f=a[g.materialIndex],E=Math.max(g.start,p.start),_=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let x=E,R=_;x<R;x+=3){let A=x,w=x+1,C=x+2;i=qs(this,f,t,n,l,h,u,A,w,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let g=m,f=v;g<f;g+=3){let E=g,_=g+1,x=g+2;i=qs(this,a,t,n,l,h,u,E,_,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Bu(s,t,e,n,i,r,a,o){let c;if(t.side===Te?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Yn,o),c===null)return null;Xs.copy(o),Xs.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Xs);return l<e.near||l>e.far?null:{distance:l,point:Xs.clone(),object:s}}function qs(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Hs),s.getVertexPosition(c,Vs),s.getVertexPosition(l,Gs);let h=Bu(s,t,e,n,Hs,Vs,Gs,rl);if(h){let u=new z;li.getBarycoord(rl,Hs,Vs,Gs,u),i&&(h.uv=li.getInterpolatedAttribute(i,o,c,l,u,new Yt)),r&&(h.uv1=li.getInterpolatedAttribute(r,o,c,l,u,new Yt)),a&&(h.normal=li.getInterpolatedAttribute(a,o,c,l,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new z,materialIndex:0};li.getNormal(Hs,Vs,Gs,d.normal),h.face=d,h.barycoord=u}return h}var xs=class s extends _e{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function m(v,g,f,E,_,x,R,A,w,C,S){let y=x/w,P=R/C,U=x/2,N=R/2,H=A/2,G=w+1,B=C+1,Y=0,L=0,K=new z;for(let et=0;et<B;et++){let ot=et*P-N;for(let _t=0;_t<G;_t++){let Pt=_t*y-U;K[v]=Pt*E,K[g]=ot*_,K[f]=H,l.push(K.x,K.y,K.z),K[v]=0,K[g]=0,K[f]=A>0?1:-1,h.push(K.x,K.y,K.z),u.push(_t/w),u.push(1-et/C),Y+=1}}for(let et=0;et<C;et++)for(let ot=0;ot<w;ot++){let _t=d+ot+G*et,Pt=d+ot+G*(et+1),X=d+(ot+1)+G*(et+1),it=d+(ot+1)+G*et;c.push(_t,Pt,it),c.push(Pt,X,it),L+=6}o.addGroup(p,L,S),p+=L,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(s){let t={};for(let e=0;e<s.length;e++){let n=qi(s[e]);for(let i in n)t[i]=n[i]}return t}function Hu(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ih(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var Vu={clone:qi,merge:Ue},Gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,de=class extends Jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gu,this.fragmentShader=Wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Hu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},xr=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new z,al=new Yt,ol=new Yt,Ce=class extends xr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,al,ol),e.subVectors(ol,al)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ca*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Di=-90,Ui=1,Ro=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ce(Di,Ui,t,e);i.layers=this.layers,this.add(i);let r=new Ce(Di,Ui,t,e);r.layers=this.layers,this.add(r);let a=new Ce(Di,Ui,t,e);a.layers=this.layers,this.add(a);let o=new Ce(Di,Ui,t,e);o.layers=this.layers,this.add(o);let c=new Ce(Di,Ui,t,e);c.layers=this.layers,this.add(c);let l=new Ce(Di,Ui,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},_r=class extends Ke{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Vi,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Co=class extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new _r(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xs(5,5,5),r=new de({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:Xn});r.uniforms.tEquirect.value=e;let a=new se(i,r),o=e.minFilter;return e.minFilter===di&&(e.minFilter=un),new Ro(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Ca=new z,Xu=new z,qu=new Ht,bn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ca.subVectors(n,e).cross(Xu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ca),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||qu.getNormalMatrix(t),i=this.coplanarPoint(Ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},si=new mi,Ys=new z,yr=class{constructor(t=new bn,e=new bn,n=new bn,i=new bn,r=new bn,a=new bn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],m=i[9],v=i[10],g=i[11],f=i[12],E=i[13],_=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,g-p,x-f).normalize(),n[1].setComponents(c+r,d+l,g+p,x+f).normalize(),n[2].setComponents(c+a,d+h,g+m,x+E).normalize(),n[3].setComponents(c-a,d-h,g-m,x-E).normalize(),n[4].setComponents(c-o,d-u,g-v,x-_).normalize(),e===Tn)n[5].setComponents(c+o,d+u,g+v,x+_).normalize();else if(e===hr)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ys.x=i.normal.x>0?t.max.x:t.min.x,Ys.y=i.normal.y>0?t.max.y:t.min.y,Ys.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sh(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Yu(s){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],v=u[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let v=u[p];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var $n=class s extends _e{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,d=e/c,p=[],m=[],v=[],g=[];for(let f=0;f<h;f++){let E=f*d-a;for(let _=0;_<l;_++){let x=_*u-r;m.push(x,-E,0),v.push(0,0,1),g.push(_/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<o;E++){let _=E+l*f,x=E+l*(f+1),R=E+1+l*(f+1),A=E+1+l*f;p.push(_,x,A),p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Zu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ju=`#ifdef USE_ALPHAHASH
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
#endif`,$u=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ku=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,td=`#ifdef USE_AOMAP
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
#endif`,ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nd=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ad=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,od=`#ifdef USE_IRIDESCENCE
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
#endif`,cd=`#ifdef USE_BUMPMAP
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
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vd=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,xd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_d=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ed=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nd=`#ifdef USE_GRADIENTMAP
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
}`,Fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Bd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,qd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yd=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$d=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sf=`#if defined( USE_POINTS_UV )
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
#endif`,rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hf=`#ifdef USE_MORPHTARGETS
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
#endif`,uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vf=`#ifdef USE_NORMALMAP
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
#endif`,xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_f=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ef=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Df=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nf=`#ifdef USE_SKINNING
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
#endif`,Ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Of=`#ifdef USE_SKINNING
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
#endif`,zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vf=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gf=`#ifdef USE_TRANSMISSION
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
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jf=`uniform sampler2D t2D;
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
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`#include <common>
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
}`,ep=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,np=`#define DISTANCE
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
}`,ip=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`uniform float scale;
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
}`,op=`uniform vec3 diffuse;
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
}`,cp=`#include <common>
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
}`,lp=`uniform vec3 diffuse;
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
}`,hp=`#define LAMBERT
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
}`,up=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,dp=`#define MATCAP
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
}`,fp=`#define MATCAP
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
}`,pp=`#define NORMAL
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
}`,mp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gp=`#define PHONG
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
}`,vp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,xp=`#define STANDARD
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
}`,_p=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,yp=`#define TOON
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
}`,Mp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Sp=`uniform float size;
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
}`,bp=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Ep=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Tp=`uniform float rotation;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Zu,alphahash_pars_fragment:Ju,alphamap_fragment:$u,alphamap_pars_fragment:Ku,alphatest_fragment:ju,alphatest_pars_fragment:Qu,aomap_fragment:td,aomap_pars_fragment:ed,batching_pars_vertex:nd,batching_vertex:id,begin_vertex:sd,beginnormal_vertex:rd,bsdfs:ad,iridescence_fragment:od,bumpmap_pars_fragment:cd,clipping_planes_fragment:ld,clipping_planes_pars_fragment:hd,clipping_planes_pars_vertex:ud,clipping_planes_vertex:dd,color_fragment:fd,color_pars_fragment:pd,color_pars_vertex:md,color_vertex:gd,common:vd,cube_uv_reflection_fragment:xd,defaultnormal_vertex:_d,displacementmap_pars_vertex:yd,displacementmap_vertex:Md,emissivemap_fragment:Sd,emissivemap_pars_fragment:bd,colorspace_fragment:wd,colorspace_pars_fragment:Ed,envmap_fragment:Td,envmap_common_pars_fragment:Ad,envmap_pars_fragment:Rd,envmap_pars_vertex:Cd,envmap_physical_pars_fragment:Bd,envmap_vertex:Pd,fog_vertex:Id,fog_pars_vertex:Ld,fog_fragment:Dd,fog_pars_fragment:Ud,gradientmap_pars_fragment:Nd,lightmap_pars_fragment:Fd,lights_lambert_fragment:Od,lights_lambert_pars_fragment:zd,lights_pars_begin:kd,lights_toon_fragment:Hd,lights_toon_pars_fragment:Vd,lights_phong_fragment:Gd,lights_phong_pars_fragment:Wd,lights_physical_fragment:Xd,lights_physical_pars_fragment:qd,lights_fragment_begin:Yd,lights_fragment_maps:Zd,lights_fragment_end:Jd,logdepthbuf_fragment:$d,logdepthbuf_pars_fragment:Kd,logdepthbuf_pars_vertex:jd,logdepthbuf_vertex:Qd,map_fragment:tf,map_pars_fragment:ef,map_particle_fragment:nf,map_particle_pars_fragment:sf,metalnessmap_fragment:rf,metalnessmap_pars_fragment:af,morphinstance_vertex:of,morphcolor_vertex:cf,morphnormal_vertex:lf,morphtarget_pars_vertex:hf,morphtarget_vertex:uf,normal_fragment_begin:df,normal_fragment_maps:ff,normal_pars_fragment:pf,normal_pars_vertex:mf,normal_vertex:gf,normalmap_pars_fragment:vf,clearcoat_normal_fragment_begin:xf,clearcoat_normal_fragment_maps:_f,clearcoat_pars_fragment:yf,iridescence_pars_fragment:Mf,opaque_fragment:Sf,packing:bf,premultiplied_alpha_fragment:wf,project_vertex:Ef,dithering_fragment:Tf,dithering_pars_fragment:Af,roughnessmap_fragment:Rf,roughnessmap_pars_fragment:Cf,shadowmap_pars_fragment:Pf,shadowmap_pars_vertex:If,shadowmap_vertex:Lf,shadowmask_pars_fragment:Df,skinbase_vertex:Uf,skinning_pars_vertex:Nf,skinning_vertex:Ff,skinnormal_vertex:Of,specularmap_fragment:zf,specularmap_pars_fragment:kf,tonemapping_fragment:Bf,tonemapping_pars_fragment:Hf,transmission_fragment:Vf,transmission_pars_fragment:Gf,uv_pars_fragment:Wf,uv_pars_vertex:Xf,uv_vertex:qf,worldpos_vertex:Yf,background_vert:Zf,background_frag:Jf,backgroundCube_vert:$f,backgroundCube_frag:Kf,cube_vert:jf,cube_frag:Qf,depth_vert:tp,depth_frag:ep,distanceRGBA_vert:np,distanceRGBA_frag:ip,equirect_vert:sp,equirect_frag:rp,linedashed_vert:ap,linedashed_frag:op,meshbasic_vert:cp,meshbasic_frag:lp,meshlambert_vert:hp,meshlambert_frag:up,meshmatcap_vert:dp,meshmatcap_frag:fp,meshnormal_vert:pp,meshnormal_frag:mp,meshphong_vert:gp,meshphong_frag:vp,meshphysical_vert:xp,meshphysical_frag:_p,meshtoon_vert:yp,meshtoon_frag:Mp,points_vert:Sp,points_frag:bp,shadow_vert:wp,shadow_frag:Ep,sprite_vert:Tp,sprite_frag:Ap},ft={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},hn={basic:{uniforms:Ue([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ue([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ue([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ue([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ue([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ue([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ue([ft.points,ft.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ue([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ue([ft.common,ft.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ue([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ue([ft.sprite,ft.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ue([ft.common,ft.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ue([ft.lights,ft.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};hn.physical={uniforms:Ue([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var Zs={r:0,b:0,g:0},ri=new sn,Rp=new ue;function Cp(s,t,e,n,i,r,a){let o=new Xt(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function m(E){let _=E.isScene===!0?E.background:null;return _&&_.isTexture&&(_=(E.backgroundBlurriness>0?e:t).get(_)),_}function v(E){let _=!1,x=m(E);x===null?f(o,c):x&&x.isColor&&(f(x,1),_=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(E,_){let x=m(_);x&&(x.isCubeTexture||x.mapping===Ir)?(h===void 0&&(h=new se(new xs(1,1,1),new de({name:"BackgroundCubeMaterial",uniforms:qi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ri.copy(_.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rp.makeRotationFromEuler(ri)),h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ie,(u!==x||d!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new se(new $n(2,2),new de({name:"BackgroundMaterial",uniforms:qi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,_){E.getRGB(Zs,ih(s)),n.buffers.color.setClear(Zs.r,Zs.g,Zs.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(E,_=1){o.set(E),c=_,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(o,c)},render:v,addToRenderList:g}}function Pp(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(y,P,U,N,H){let G=!1,B=u(N,U,P);r!==B&&(r=B,l(r.object)),G=p(y,N,U,H),G&&m(y,N,U,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,x(y,P,U,N),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,P,U){let N=U.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let G=H[P.id];G===void 0&&(G={},H[P.id]=G);let B=G[N];return B===void 0&&(B=d(c()),G[N]=B),B}function d(y){let P=[],U=[],N=[];for(let H=0;H<e;H++)P[H]=0,U[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,P,U,N){let H=r.attributes,G=P.attributes,B=0,Y=U.getAttributes();for(let L in Y)if(Y[L].location>=0){let et=H[L],ot=G[L];if(ot===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor)),et===void 0||et.attribute!==ot||ot&&et.data!==ot.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function m(y,P,U,N){let H={},G=P.attributes,B=0,Y=U.getAttributes();for(let L in Y)if(Y[L].location>=0){let et=G[L];et===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(et=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(et=y.instanceColor));let ot={};ot.attribute=et,et&&et.data&&(ot.data=et.data),H[L]=ot,B++}r.attributes=H,r.attributesNum=B,r.index=N}function v(){let y=r.newAttributes;for(let P=0,U=y.length;P<U;P++)y[P]=0}function g(y){f(y,0)}function f(y,P){let U=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;U[y]=1,N[y]===0&&(s.enableVertexAttribArray(y),N[y]=1),H[y]!==P&&(s.vertexAttribDivisor(y,P),H[y]=P)}function E(){let y=r.newAttributes,P=r.enabledAttributes;for(let U=0,N=P.length;U<N;U++)P[U]!==y[U]&&(s.disableVertexAttribArray(U),P[U]=0)}function _(y,P,U,N,H,G,B){B===!0?s.vertexAttribIPointer(y,P,U,H,G):s.vertexAttribPointer(y,P,U,N,H,G)}function x(y,P,U,N){v();let H=N.attributes,G=U.getAttributes(),B=P.defaultAttributeValues;for(let Y in G){let L=G[Y];if(L.location>=0){let K=H[Y];if(K===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){let et=K.normalized,ot=K.itemSize,_t=t.get(K);if(_t===void 0)continue;let Pt=_t.buffer,X=_t.type,it=_t.bytesPerElement,ht=X===s.INT||X===s.UNSIGNED_INT||K.gpuType===ac;if(K.isInterleavedBufferAttribute){let rt=K.data,Tt=rt.stride,It=K.offset;if(rt.isInstancedInterleavedBuffer){for(let Et=0;Et<L.locationSize;Et++)f(L.location+Et,rt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Et=0;Et<L.locationSize;Et++)g(L.location+Et);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let Et=0;Et<L.locationSize;Et++)_(L.location+Et,ot/L.locationSize,X,et,Tt*it,(It+ot/L.locationSize*Et)*it,ht)}else{if(K.isInstancedBufferAttribute){for(let rt=0;rt<L.locationSize;rt++)f(L.location+rt,K.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let rt=0;rt<L.locationSize;rt++)g(L.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let rt=0;rt<L.locationSize;rt++)_(L.location+rt,ot/L.locationSize,X,et,ot*it,ot/L.locationSize*rt*it,ht)}}else if(B!==void 0){let et=B[Y];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(L.location,et);break;case 3:s.vertexAttrib3fv(L.location,et);break;case 4:s.vertexAttrib4fv(L.location,et);break;default:s.vertexAttrib1fv(L.location,et)}}}}E()}function R(){C();for(let y in n){let P=n[y];for(let U in P){let N=P[U];for(let H in N)h(N[H].object),delete N[H];delete P[U]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let U in P){let N=P[U];for(let H in N)h(N[H].object),delete N[H];delete P[U]}delete n[y.id]}function w(y){for(let P in n){let U=n[P];if(U[y.id]===void 0)continue;let N=U[y.id];for(let H in N)h(N[H].object),delete N[H];delete U[y.id]}}function C(){S(),a=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:E}}function Ip(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Lp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==en&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let C=w===bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Rn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==En&&!C)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:E,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function Dp(s){let t=this,e=null,n=0,i=!1,r=!1,a=new bn,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,f=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let E=r?0:n,_=E*4,x=f.clippingState||null;c.value=x,x=h(m,d,_,p);for(let R=0;R!==_;++R)x[R]=e[R];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,m!==!0||g===null){let f=p+v*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,x=p;_!==v;++_,x+=4)a.copy(u[_]).applyMatrix4(E,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Up(s){let t=new WeakMap;function e(a,o){return o===qa?a.mapping=Vi:o===Ya&&(a.mapping=Gi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===qa||o===Ya)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Co(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Po=class extends xr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fi=4,cl=[.125,.215,.35,.446,.526,.582],hi=20,Pa=new Po,ll=new Xt,Ia=null,La=0,Da=0,Ua=!1,oi=(1+Math.sqrt(5))/2,Ni=1/oi,hl=[new z(-oi,Ni,0),new z(oi,Ni,0),new z(-Ni,0,oi),new z(Ni,0,oi),new z(0,oi,-Ni),new z(0,oi,Ni),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Mr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ia=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ia,La,Da),this._renderer.xr.enabled=Ua,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ia=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:bs,format:en,colorSpace:Kn,depthBuffer:!1},i=ul(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ul(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Np(r)),this._blurMaterial=Fp(r,t,e)}return i}_compileMaterial(t){let e=new se(this._lodPlanes[0],t);this._renderer.compile(e,Pa)}_sceneToCubeUV(t,e,n,i){let o=new Ce(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ll),h.toneMapping=dn,h.autoClear=!1;let p=new mr({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),m=new se(new xs,p),v=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,v=!0):(p.color.copy(ll),v=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):E===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let _=this._cubeSize;Js(i,E*_,f>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Vi||t.mapping===Gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dl());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Js(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hl[(i-r-1)%hl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new se(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*hi-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):hi;g>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hi}`);let f=[],E=0;for(let w=0;w<hi;++w){let C=w/v,S=Math.exp(-C*C/2);f.push(S),w===0?E+=S:w<g&&(E+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/E;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let x=this._sizeLods[i],R=3*x*(i>_-Fi?i-_+Fi:0),A=4*(this._cubeSize-x);Js(e,R,A,3*x,2*x),c.setRenderTarget(e),c.render(u,Pa)}};function Np(s){let t=[],e=[],n=[],i=s,r=s-Fi+1+cl.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Fi?c=cl[a-s+Fi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,v=3,g=2,f=1,E=new Float32Array(v*m*p),_=new Float32Array(g*m*p),x=new Float32Array(f*m*p);for(let A=0;A<p;A++){let w=A%3*2/3-1,C=A>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];E.set(S,v*m*A),_.set(d,g*m*A);let y=[A,A,A,A,A,A];x.set(y,f*m*A)}let R=new _e;R.setAttribute("position",new Wt(E,v)),R.setAttribute("uv",new Wt(_,g)),R.setAttribute("faceIndex",new Wt(x,f)),t.push(R),i>Fi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ul(s,t,e){let n=new Cn(s,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Fp(s,t,e){let n=new Float32Array(hi),i=new z(0,1,0);return new de({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function dl(){return new de({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function fl(){return new de({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Op(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===qa||c===Ya,h=c===Vi||c===Gi;if(l||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Mr(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Mr(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function zp(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kp(s,t,e,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let v=d.morphAttributes[m];for(let g=0,f=v.length;g<f;g++)t.remove(v[g])}d.removeEventListener("dispose",a),delete i[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let v=p[m];for(let g=0,f=v.length;g<f;g++)t.update(v[g],s.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,m=u.attributes.position,v=0;if(p!==null){let E=p.array;v=p.version;for(let _=0,x=E.length;_<x;_+=3){let R=E[_+0],A=E[_+1],w=E[_+2];d.push(R,A,A,w,w,R)}}else if(m!==void 0){let E=m.array;v=m.version;for(let _=0,x=E.length/3-1;_<x;_+=3){let R=_+0,A=_+1,w=_+2;d.push(R,A,A,w,w,R)}}else return;let g=new(eh(d)?vr:gr)(d,1);g.version=v;let f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Bp(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*a),e.update(p,n,1)}function l(d,p,m){m!==0&&(s.drawElementsInstanced(n,p,r,d*a,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function u(d,p,m,v){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],v[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,m);let f=0;for(let E=0;E<m;E++)f+=p[E]*v[E];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hp(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Vp(s,t,e){let n=new WeakMap,i=new me;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let S=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],_=0;p===!0&&(_=1),m===!0&&(_=2),v===!0&&(_=3);let x=o.attributes.position.count*_,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let A=new Float32Array(x*R*4*u),w=new fr(A,x,R,u);w.type=En,w.needsUpdate=!0;let C=_*4;for(let y=0;y<u;y++){let P=g[y],U=f[y],N=E[y],H=x*R*4*y;for(let G=0;G<P.count;G++){let B=G*C;p===!0&&(i.fromBufferAttribute(P,G),A[H+B+0]=i.x,A[H+B+1]=i.y,A[H+B+2]=i.z,A[H+B+3]=0),m===!0&&(i.fromBufferAttribute(U,G),A[H+B+4]=i.x,A[H+B+5]=i.y,A[H+B+6]=i.z,A[H+B+7]=0),v===!0&&(i.fromBufferAttribute(N,G),A[H+B+8]=i.x,A[H+B+9]=i.y,A[H+B+10]=i.z,A[H+B+11]=N.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new Yt(x,R)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Gp(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Sr=class extends Ke{constructor(t,e,n,i,r,a,o,c,l,h=zi){if(h!==zi&&h!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=fi),n===void 0&&h===Xi&&(n=Wi),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},rh=new Ke,pl=new Sr(1,1),ah=new fr,oh=new Ao,ch=new _r,ml=[],gl=[],vl=new Float32Array(16),xl=new Float32Array(9),_l=new Float32Array(4);function $i(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=ml[i];if(r===void 0&&(r=new Float32Array(i),ml[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Se(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Dr(s,t){let e=gl[t];e===void 0&&(e=new Int32Array(t),gl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Wp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Xp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2fv(this.addr,t),Se(e,t)}}function qp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;s.uniform3fv(this.addr,t),Se(e,t)}}function Yp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4fv(this.addr,t),Se(e,t)}}function Zp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;_l.set(n),s.uniformMatrix2fv(this.addr,!1,_l),Se(e,n)}}function Jp(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;xl.set(n),s.uniformMatrix3fv(this.addr,!1,xl),Se(e,n)}}function $p(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;vl.set(n),s.uniformMatrix4fv(this.addr,!1,vl),Se(e,n)}}function Kp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function jp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2iv(this.addr,t),Se(e,t)}}function Qp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3iv(this.addr,t),Se(e,t)}}function tm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4iv(this.addr,t),Se(e,t)}}function em(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function nm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2uiv(this.addr,t),Se(e,t)}}function im(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3uiv(this.addr,t),Se(e,t)}}function sm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4uiv(this.addr,t),Se(e,t)}}function rm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(pl.compareFunction=th,r=pl):r=rh,e.setTexture2D(t||r,i)}function am(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||oh,i)}function om(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ch,i)}function cm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ah,i)}function lm(s){switch(s){case 5126:return Wp;case 35664:return Xp;case 35665:return qp;case 35666:return Yp;case 35674:return Zp;case 35675:return Jp;case 35676:return $p;case 5124:case 35670:return Kp;case 35667:case 35671:return jp;case 35668:case 35672:return Qp;case 35669:case 35673:return tm;case 5125:return em;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return cm}}function hm(s,t){s.uniform1fv(this.addr,t)}function um(s,t){let e=$i(t,this.size,2);s.uniform2fv(this.addr,e)}function dm(s,t){let e=$i(t,this.size,3);s.uniform3fv(this.addr,e)}function fm(s,t){let e=$i(t,this.size,4);s.uniform4fv(this.addr,e)}function pm(s,t){let e=$i(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function mm(s,t){let e=$i(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function gm(s,t){let e=$i(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function vm(s,t){s.uniform1iv(this.addr,t)}function xm(s,t){s.uniform2iv(this.addr,t)}function _m(s,t){s.uniform3iv(this.addr,t)}function ym(s,t){s.uniform4iv(this.addr,t)}function Mm(s,t){s.uniform1uiv(this.addr,t)}function Sm(s,t){s.uniform2uiv(this.addr,t)}function bm(s,t){s.uniform3uiv(this.addr,t)}function wm(s,t){s.uniform4uiv(this.addr,t)}function Em(s,t,e){let n=this.cache,i=t.length,r=Dr(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||rh,r[a])}function Tm(s,t,e){let n=this.cache,i=t.length,r=Dr(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||oh,r[a])}function Am(s,t,e){let n=this.cache,i=t.length,r=Dr(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ch,r[a])}function Rm(s,t,e){let n=this.cache,i=t.length,r=Dr(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ah,r[a])}function Cm(s){switch(s){case 5126:return hm;case 35664:return um;case 35665:return dm;case 35666:return fm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return vm;case 35667:case 35671:return xm;case 35668:case 35672:return _m;case 35669:case 35673:return ym;case 5125:return Mm;case 36294:return Sm;case 36295:return bm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Rm}}var Io=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lm(e.type)}},Lo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cm(e.type)}},Do=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Na=/(\w+)(\])?(\[|\.)?/g;function yl(s,t){s.seq.push(t),s.map[t.id]=t}function Pm(s,t,e){let n=s.name,i=n.length;for(Na.lastIndex=0;;){let r=Na.exec(n),a=Na.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){yl(e,l===void 0?new Io(o,s,t):new Lo(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Do(o),yl(e,u)),e=u}}}var Bi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Pm(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Ml(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Im=37297,Lm=0;function Dm(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Sl=new Ht;function Um(s){Qt._getMatrix(Sl,Qt.workingColorSpace,s);let t=`mat3( ${Sl.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(s)){case Lr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function bl(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Dm(s.getShaderSource(t),a)}else return i}function Nm(s,t){let e=Um(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fm(s,t){let e;switch(t){case ru:e="Linear";break;case au:e="Reinhard";break;case ou:e="Cineon";break;case cu:e="ACESFilmic";break;case hu:e="AgX";break;case uu:e="Neutral";break;case lu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $s=new z;function Om(){Qt.getLuminanceCoefficients($s);let s=$s.x.toFixed(4),t=$s.y.toFixed(4),e=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function km(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bm(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function fs(s){return s!==""}function wl(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function El(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(s){return s.replace(Hm,Gm)}var Vm=new Map;function Gm(s,t){let e=Gt[t];if(e===void 0){let n=Vm.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Uo(e)}var Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tl(s){return s.replace(Wm,Xm)}function Xm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Al(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function qm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===zh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ym(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vi:case Gi:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function Jm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vl:t="ENVMAP_BLENDING_MULTIPLY";break;case iu:t="ENVMAP_BLENDING_MIX";break;case su:t="ENVMAP_BLENDING_ADD";break}return t}function $m(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Km(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=qm(e),l=Ym(e),h=Zm(e),u=Jm(e),d=$m(e),p=zm(e),m=km(r),v=i.createProgram(),g,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fs).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fs).join(`
`),f.length>0&&(f+=`
`)):(g=[Al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),f=[Al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dn?"#define TONE_MAPPING":"",e.toneMapping!==dn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==dn?Fm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Nm("linearToOutputTexel",e.outputColorSpace),Om(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),a=Uo(a),a=wl(a,e),a=El(a,e),o=Uo(o),o=wl(o,e),o=El(o,e),a=Tl(a),o=Tl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=E+g+a,x=E+f+o,R=Ml(i,i.VERTEX_SHADER,_),A=Ml(i,i.FRAGMENT_SHADER,x);i.attachShader(v,R),i.attachShader(v,A),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(P){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(R).trim(),H=i.getShaderInfoLog(A).trim(),G=!0,B=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,R,A);else{let Y=bl(i,R,"vertex"),L=bl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+Y+`
`+L)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||H==="")&&(B=!1);B&&(P.diagnostics={runnable:G,programLog:U,vertexShader:{log:N,prefix:g},fragmentShader:{log:H,prefix:f}})}i.deleteShader(R),i.deleteShader(A),C=new Bi(i,v),S=Bm(i,v)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,Im)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}var jm=0,No=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fo(t),e.set(t,n)),n}},Fo=class{constructor(t){this.id=jm++,this.code=t,this.usedTimes=0}};function Qm(s,t,e,n,i,r,a){let o=new pr,c=new No,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,y,P,U,N){let H=U.fog,G=N.geometry,B=S.isMeshStandardMaterial?U.environment:null,Y=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),L=Y&&Y.mapping===Ir?Y.image.height:null,K=m[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let et=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ot=et!==void 0?et.length:0,_t=0;G.morphAttributes.position!==void 0&&(_t=1),G.morphAttributes.normal!==void 0&&(_t=2),G.morphAttributes.color!==void 0&&(_t=3);let Pt,X,it,ht;if(K){let Kt=hn[K];Pt=Kt.vertexShader,X=Kt.fragmentShader}else Pt=S.vertexShader,X=S.fragmentShader,c.update(S),it=c.getVertexShaderID(S),ht=c.getFragmentShaderID(S);let rt=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),It=N.isInstancedMesh===!0,Et=N.isBatchedMesh===!0,Vt=!!S.map,Ot=!!S.matcap,ae=!!Y,I=!!S.aoMap,ye=!!S.lightMap,Bt=!!S.bumpMap,kt=!!S.normalMap,Ct=!!S.displacementMap,te=!!S.emissiveMap,Lt=!!S.metalnessMap,T=!!S.roughnessMap,M=S.anisotropy>0,V=S.clearcoat>0,nt=S.dispersion>0,st=S.iridescence>0,j=S.sheen>0,St=S.transmission>0,dt=M&&!!S.anisotropyMap,vt=V&&!!S.clearcoatMap,xt=V&&!!S.clearcoatNormalMap,k=V&&!!S.clearcoatRoughnessMap,lt=st&&!!S.iridescenceMap,Mt=st&&!!S.iridescenceThicknessMap,Dt=j&&!!S.sheenColorMap,gt=j&&!!S.sheenRoughnessMap,Nt=!!S.specularMap,Ut=!!S.specularColorMap,$t=!!S.specularIntensityMap,D=St&&!!S.transmissionMap,ut=St&&!!S.thicknessMap,Z=!!S.gradientMap,tt=!!S.alphaMap,ct=S.alphaTest>0,pt=!!S.alphaHash,zt=!!S.extensions,oe=dn;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(oe=s.toneMapping);let ge={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:Pt,fragmentShader:X,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:ht,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Et,batchingColor:Et&&N._colorsTexture!==null,instancing:It,instancingColor:It&&N.instanceColor!==null,instancingMorph:It&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Kn,alphaToCoverage:!!S.alphaToCoverage,map:Vt,matcap:Ot,envMap:ae,envMapMode:ae&&Y.mapping,envMapCubeUVHeight:L,aoMap:I,lightMap:ye,bumpMap:Bt,normalMap:kt,displacementMap:d&&Ct,emissiveMap:te,normalMapObjectSpace:kt&&S.normalMapType===gu,normalMapTangentSpace:kt&&S.normalMapType===mu,metalnessMap:Lt,roughnessMap:T,anisotropy:M,anisotropyMap:dt,clearcoat:V,clearcoatMap:vt,clearcoatNormalMap:xt,clearcoatRoughnessMap:k,dispersion:nt,iridescence:st,iridescenceMap:lt,iridescenceThicknessMap:Mt,sheen:j,sheenColorMap:Dt,sheenRoughnessMap:gt,specularMap:Nt,specularColorMap:Ut,specularIntensityMap:$t,transmission:St,transmissionMap:D,thicknessMap:ut,gradientMap:Z,opaque:S.transparent===!1&&S.blending===qn&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:ct,alphaHash:pt,combine:S.combine,mapUv:Vt&&v(S.map.channel),aoMapUv:I&&v(S.aoMap.channel),lightMapUv:ye&&v(S.lightMap.channel),bumpMapUv:Bt&&v(S.bumpMap.channel),normalMapUv:kt&&v(S.normalMap.channel),displacementMapUv:Ct&&v(S.displacementMap.channel),emissiveMapUv:te&&v(S.emissiveMap.channel),metalnessMapUv:Lt&&v(S.metalnessMap.channel),roughnessMapUv:T&&v(S.roughnessMap.channel),anisotropyMapUv:dt&&v(S.anisotropyMap.channel),clearcoatMapUv:vt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:xt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:gt&&v(S.sheenRoughnessMap.channel),specularMapUv:Nt&&v(S.specularMap.channel),specularColorMapUv:Ut&&v(S.specularColorMap.channel),specularIntensityMapUv:$t&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:ut&&v(S.thicknessMap.channel),alphaMapUv:tt&&v(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(kt||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(Vt||tt),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:_t,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:Vt&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===ie,decodeVideoTextureEmissive:te&&S.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(S.emissiveMap.colorSpace)===ie,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wn,flipSided:S.side===Te,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:zt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&S.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ge.vertexUv1s=l.has(1),ge.vertexUv2s=l.has(2),ge.vertexUv3s=l.has(3),l.clear(),ge}function f(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(E(y,S),_(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function _(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){let y=m[S.type],P;if(y){let U=hn[y];P=Vu.clone(U.uniforms)}else P=S.uniforms;return P}function R(S,y){let P;for(let U=0,N=h.length;U<N;U++){let H=h[U];if(H.cacheKey===y){P=H,++P.usedTimes;break}}return P===void 0&&(P=new Km(s,y,S,r),h.push(P)),P}function A(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function w(S){c.remove(S)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:C}}function t0(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function e0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Rl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Cl(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,m,v,g){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=v,f.group=g),t++,f}function o(u,d,p,m,v,g){let f=a(u,d,p,m,v,g);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function c(u,d,p,m,v,g){let f=a(u,d,p,m,v,g);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||e0),n.length>1&&n.sort(d||Rl),i.length>1&&i.sort(d||Rl)}function h(){for(let u=t,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function n0(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Cl,s.set(n,[a])):i>=r.length?(a=new Cl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function i0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Xt};break;case"SpotLight":e={position:new z,direction:new z,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new z,halfWidth:new z,halfHeight:new z};break}return s[t.id]=e,e}}}function s0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var r0=0;function a0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function o0(s){let t=new i0,e=s0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);let i=new z,r=new ue,a=new ue;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,m=0,v=0,g=0,f=0,E=0,_=0,x=0,R=0,A=0,w=0;l.sort(a0);for(let S=0,y=l.length;S<y;S++){let P=l[S],U=P.color,N=P.intensity,H=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=U.r*N,u+=U.g*N,d+=U.b*N;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],N);w++}else if(P.isDirectionalLight){let B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Y=P.shadow,L=e.get(P);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,n.directionalShadow[p]=L,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=P.shadow.matrix,E++}n.directional[p]=B,p++}else if(P.isSpotLight){let B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(U).multiplyScalar(N),B.distance=H,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[v]=B;let Y=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,Y.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[v]=Y.matrix,P.castShadow){let L=e.get(P);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,n.spotShadow[v]=L,n.spotShadowMap[v]=G,x++}v++}else if(P.isRectAreaLight){let B=t.get(P);B.color.copy(U).multiplyScalar(N),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=B,g++}else if(P.isPointLight){let B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){let Y=P.shadow,L=e.get(P);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,L.shadowCameraNear=Y.camera.near,L.shadowCameraFar=Y.camera.far,n.pointShadow[m]=L,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=P.shadow.matrix,_++}n.point[m]=B,m++}else if(P.isHemisphereLight){let B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(N),B.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[f]=B,f++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==p||C.pointLength!==m||C.spotLength!==v||C.rectAreaLength!==g||C.hemiLength!==f||C.numDirectionalShadows!==E||C.numPointShadows!==_||C.numSpotShadows!==x||C.numSpotMaps!==R||C.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,C.directionalLength=p,C.pointLength=m,C.spotLength=v,C.rectAreaLength=g,C.hemiLength=f,C.numDirectionalShadows=E,C.numPointShadows=_,C.numSpotShadows=x,C.numSpotMaps=R,C.numLightProbes=w,n.version=r0++)}function c(l,h){let u=0,d=0,p=0,m=0,v=0,g=h.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){let _=l[f];if(_.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(_.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:n}}function Pl(s){let t=new o0(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function c0(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Pl(s),t.set(i,[o])):r>=a.length?(o=new Pl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Oo=class extends Jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zo=class extends Jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u0(s,t,e){let n=new yr,i=new Yt,r=new Yt,a=new me,o=new Oo({depthPacking:pu}),c=new zo,l={},h=e.maxTextureSize,u={[Yn]:Te,[Te]:Yn,[wn]:wn},d=new de({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:l0,fragmentShader:h0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new _e;m.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new se(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let f=this.type;this.render=function(A,w,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let S=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Xn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let N=f!==Sn&&this.type===Sn,H=f===Sn&&this.type!==Sn;for(let G=0,B=A.length;G<B;G++){let Y=A[G],L=Y.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);let K=L.getFrameExtents();if(i.multiply(K),r.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,L.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,L.mapSize.y=r.y)),L.map===null||N===!0||H===!0){let ot=this.type!==Sn?{minFilter:nn,magFilter:nn}:{};L.map!==null&&L.map.dispose(),L.map=new Cn(i.x,i.y,ot),L.map.texture.name=Y.name+".shadowMap",L.camera.updateProjectionMatrix()}s.setRenderTarget(L.map),s.clear();let et=L.getViewportCount();for(let ot=0;ot<et;ot++){let _t=L.getViewport(ot);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),U.viewport(a),L.updateMatrices(Y,ot),n=L.getFrustum(),x(w,C,L.camera,Y,this.type)}L.isPointLightShadow!==!0&&this.type===Sn&&E(L,C),L.needsUpdate=!1}f=this.type,g.needsUpdate=!1,s.setRenderTarget(S,y,P)};function E(A,w){let C=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Cn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,C,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,C,p,v,null)}function _(A,w,C,S){let y=null,P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let U=y.uuid,N=w.uuid,H=l[U];H===void 0&&(H={},l[U]=H);let G=H[N];G===void 0&&(G=y.clone(),H[N]=G,w.addEventListener("dispose",R)),y=G}if(y.visible=w.visible,y.wireframe=w.wireframe,S===Sn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=s.properties.get(y);U.light=C}return y}function x(A,w,C,S,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Sn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let N=t.update(A),H=A.material;if(Array.isArray(H)){let G=N.groups;for(let B=0,Y=G.length;B<Y;B++){let L=G[B],K=H[L.materialIndex];if(K&&K.visible){let et=_(A,K,S,y);A.onBeforeShadow(s,A,w,C,N,et,L),s.renderBufferDirect(C,null,N,et,A,L),A.onAfterShadow(s,A,w,C,N,et,L)}}}else if(H.visible){let G=_(A,H,S,y);A.onBeforeShadow(s,A,w,C,N,G,null),s.renderBufferDirect(C,null,N,G,A,null),A.onAfterShadow(s,A,w,C,N,G,null)}}let U=A.children;for(let N=0,H=U.length;N<H;N++)x(U[N],w,C,S,y)}function R(A){A.target.removeEventListener("dispose",R);for(let C in l){let S=l[C],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var d0={[ka]:Ba,[Ha]:Wa,[Va]:Xa,[Hi]:Ga,[Ba]:ka,[Wa]:Ha,[Xa]:Va,[Ga]:Hi};function f0(s,t){function e(){let D=!1,ut=new me,Z=null,tt=new me(0,0,0,0);return{setMask:function(ct){Z!==ct&&!D&&(s.colorMask(ct,ct,ct,ct),Z=ct)},setLocked:function(ct){D=ct},setClear:function(ct,pt,zt,oe,ge){ge===!0&&(ct*=oe,pt*=oe,zt*=oe),ut.set(ct,pt,zt,oe),tt.equals(ut)===!1&&(s.clearColor(ct,pt,zt,oe),tt.copy(ut))},reset:function(){D=!1,Z=null,tt.set(-1,0,0,0)}}}function n(){let D=!1,ut=!1,Z=null,tt=null,ct=null;return{setReversed:function(pt){if(ut!==pt){let zt=t.get("EXT_clip_control");ut?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);let oe=ct;ct=null,this.setClear(oe)}ut=pt},getReversed:function(){return ut},setTest:function(pt){pt?rt(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(pt){Z!==pt&&!D&&(s.depthMask(pt),Z=pt)},setFunc:function(pt){if(ut&&(pt=d0[pt]),tt!==pt){switch(pt){case ka:s.depthFunc(s.NEVER);break;case Ba:s.depthFunc(s.ALWAYS);break;case Ha:s.depthFunc(s.LESS);break;case Hi:s.depthFunc(s.LEQUAL);break;case Va:s.depthFunc(s.EQUAL);break;case Ga:s.depthFunc(s.GEQUAL);break;case Wa:s.depthFunc(s.GREATER);break;case Xa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=pt}},setLocked:function(pt){D=pt},setClear:function(pt){ct!==pt&&(ut&&(pt=1-pt),s.clearDepth(pt),ct=pt)},reset:function(){D=!1,Z=null,tt=null,ct=null,ut=!1}}}function i(){let D=!1,ut=null,Z=null,tt=null,ct=null,pt=null,zt=null,oe=null,ge=null;return{setTest:function(Kt){D||(Kt?rt(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(Kt){ut!==Kt&&!D&&(s.stencilMask(Kt),ut=Kt)},setFunc:function(Kt,De,Xe){(Z!==Kt||tt!==De||ct!==Xe)&&(s.stencilFunc(Kt,De,Xe),Z=Kt,tt=De,ct=Xe)},setOp:function(Kt,De,Xe){(pt!==Kt||zt!==De||oe!==Xe)&&(s.stencilOp(Kt,De,Xe),pt=Kt,zt=De,oe=Xe)},setLocked:function(Kt){D=Kt},setClear:function(Kt){ge!==Kt&&(s.clearStencil(Kt),ge=Kt)},reset:function(){D=!1,ut=null,Z=null,tt=null,ct=null,pt=null,zt=null,oe=null,ge=null}}}let r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,v=!1,g=null,f=null,E=null,_=null,x=null,R=null,A=null,w=new Xt(0,0,0),C=0,S=!1,y=null,P=null,U=null,N=null,H=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Y=0,L=s.getParameter(s.VERSION);L.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(L)[1]),B=Y>=1):L.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),B=Y>=2);let K=null,et={},ot=s.getParameter(s.SCISSOR_BOX),_t=s.getParameter(s.VIEWPORT),Pt=new me().fromArray(ot),X=new me().fromArray(_t);function it(D,ut,Z,tt){let ct=new Uint8Array(4),pt=s.createTexture();s.bindTexture(D,pt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let zt=0;zt<Z;zt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ut,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D(ut+zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return pt}let ht={};ht[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),ht[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ht[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),a.setFunc(Hi),Bt(!1),kt(Dc),rt(s.CULL_FACE),I(Xn);function rt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Tt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function It(D,ut){return u[D]!==ut?(s.bindFramebuffer(D,ut),u[D]=ut,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ut),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ut),!0):!1}function Et(D,ut){let Z=p,tt=!1;if(D){Z=d.get(ut),Z===void 0&&(Z=[],d.set(ut,Z));let ct=D.textures;if(Z.length!==ct.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,zt=ct.length;pt<zt;pt++)Z[pt]=s.COLOR_ATTACHMENT0+pt;Z.length=ct.length,tt=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,tt=!0);tt&&s.drawBuffers(Z)}function Vt(D){return m!==D?(s.useProgram(D),m=D,!0):!1}let Ot={[ci]:s.FUNC_ADD,[Bh]:s.FUNC_SUBTRACT,[Hh]:s.FUNC_REVERSE_SUBTRACT};Ot[Vh]=s.MIN,Ot[Gh]=s.MAX;let ae={[Wh]:s.ZERO,[Xh]:s.ONE,[qh]:s.SRC_COLOR,[Oa]:s.SRC_ALPHA,[jh]:s.SRC_ALPHA_SATURATE,[$h]:s.DST_COLOR,[Zh]:s.DST_ALPHA,[Yh]:s.ONE_MINUS_SRC_COLOR,[za]:s.ONE_MINUS_SRC_ALPHA,[Kh]:s.ONE_MINUS_DST_COLOR,[Jh]:s.ONE_MINUS_DST_ALPHA,[Qh]:s.CONSTANT_COLOR,[tu]:s.ONE_MINUS_CONSTANT_COLOR,[eu]:s.CONSTANT_ALPHA,[nu]:s.ONE_MINUS_CONSTANT_ALPHA};function I(D,ut,Z,tt,ct,pt,zt,oe,ge,Kt){if(D===Xn){v===!0&&(Tt(s.BLEND),v=!1);return}if(v===!1&&(rt(s.BLEND),v=!0),D!==kh){if(D!==g||Kt!==S){if((f!==ci||x!==ci)&&(s.blendEquation(s.FUNC_ADD),f=ci,x=ci),Kt)switch(D){case qn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ms:s.blendFunc(s.ONE,s.ONE);break;case Uc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case qn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ms:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Uc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,_=null,R=null,A=null,w.set(0,0,0),C=0,g=D,S=Kt}return}ct=ct||ut,pt=pt||Z,zt=zt||tt,(ut!==f||ct!==x)&&(s.blendEquationSeparate(Ot[ut],Ot[ct]),f=ut,x=ct),(Z!==E||tt!==_||pt!==R||zt!==A)&&(s.blendFuncSeparate(ae[Z],ae[tt],ae[pt],ae[zt]),E=Z,_=tt,R=pt,A=zt),(oe.equals(w)===!1||ge!==C)&&(s.blendColor(oe.r,oe.g,oe.b,ge),w.copy(oe),C=ge),g=D,S=!1}function ye(D,ut){D.side===wn?Tt(s.CULL_FACE):rt(s.CULL_FACE);let Z=D.side===Te;ut&&(Z=!Z),Bt(Z),D.blending===qn&&D.transparent===!1?I(Xn):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let tt=D.stencilWrite;o.setTest(tt),tt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),te(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(D){y!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),y=D)}function kt(D){D!==Fh?(rt(s.CULL_FACE),D!==P&&(D===Dc?s.cullFace(s.BACK):D===Oh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),P=D}function Ct(D){D!==U&&(B&&s.lineWidth(D),U=D)}function te(D,ut,Z){D?(rt(s.POLYGON_OFFSET_FILL),(N!==ut||H!==Z)&&(s.polygonOffset(ut,Z),N=ut,H=Z)):Tt(s.POLYGON_OFFSET_FILL)}function Lt(D){D?rt(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function T(D){D===void 0&&(D=s.TEXTURE0+G-1),K!==D&&(s.activeTexture(D),K=D)}function M(D,ut,Z){Z===void 0&&(K===null?Z=s.TEXTURE0+G-1:Z=K);let tt=et[Z];tt===void 0&&(tt={type:void 0,texture:void 0},et[Z]=tt),(tt.type!==D||tt.texture!==ut)&&(K!==Z&&(s.activeTexture(Z),K=Z),s.bindTexture(D,ut||ht[D]),tt.type=D,tt.texture=ut)}function V(){let D=et[K];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function nt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(D){Pt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Pt.copy(D))}function gt(D){X.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function Nt(D,ut){let Z=l.get(ut);Z===void 0&&(Z=new WeakMap,l.set(ut,Z));let tt=Z.get(D);tt===void 0&&(tt=s.getUniformBlockIndex(ut,D.name),Z.set(D,tt))}function Ut(D,ut){let tt=l.get(ut).get(D);c.get(ut)!==tt&&(s.uniformBlockBinding(ut,tt,D.__bindingPointIndex),c.set(ut,tt))}function $t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},K=null,et={},u={},d=new WeakMap,p=[],m=null,v=!1,g=null,f=null,E=null,_=null,x=null,R=null,A=null,w=new Xt(0,0,0),C=0,S=!1,y=null,P=null,U=null,N=null,H=null,Pt.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Tt,bindFramebuffer:It,drawBuffers:Et,useProgram:Vt,setBlending:I,setMaterial:ye,setFlipSided:Bt,setCullFace:kt,setLineWidth:Ct,setPolygonOffset:te,setScissorTest:Lt,activeTexture:T,bindTexture:M,unbindTexture:V,compressedTexImage2D:nt,compressedTexImage3D:st,texImage2D:lt,texImage3D:Mt,updateUBOMapping:Nt,uniformBlockBinding:Ut,texStorage2D:xt,texStorage3D:k,texSubImage2D:j,texSubImage3D:St,compressedTexSubImage2D:dt,compressedTexSubImage3D:vt,scissor:Dt,viewport:gt,reset:$t}}function Il(s,t,e,n){let i=p0(n);switch(e){case Yl:return s*t;case Jl:return s*t;case $l:return s*t*2;case Kl:return s*t/i.components*i.byteLength;case lc:return s*t/i.components*i.byteLength;case jl:return s*t*2/i.components*i.byteLength;case hc:return s*t*2/i.components*i.byteLength;case Zl:return s*t*3/i.components*i.byteLength;case en:return s*t*4/i.components*i.byteLength;case uc:return s*t*4/i.components*i.byteLength;case sr:case rr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ar:case or:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ka:case Qa:return Math.max(s,16)*Math.max(t,8)/4;case $a:case ja:return Math.max(s,8)*Math.max(t,8)/2;case to:case eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case no:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case io:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ro:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ao:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case oo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case co:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case lo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ho:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case uo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case fo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case po:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case mo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case go:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case vo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case cr:case xo:case _o:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ql:case yo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Mo:case So:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function p0(s){switch(s){case Rn:case Wl:return{byteLength:1,components:1};case gs:case Xl:case bs:return{byteLength:2,components:1};case oc:case cc:return{byteLength:2,components:4};case fi:case ac:case En:return{byteLength:4,components:1};case ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function m0(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Yt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,M){return p?new OffscreenCanvas(T,M):ur("canvas")}function v(T,M,V){let nt=1,st=Lt(T);if((st.width>V||st.height>V)&&(nt=V/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let j=Math.floor(nt*st.width),St=Math.floor(nt*st.height);u===void 0&&(u=m(j,St));let dt=M?m(j,St):u;return dt.width=j,dt.height=St,dt.getContext("2d").drawImage(T,0,0,j,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+j+"x"+St+")."),dt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function g(T){return T.generateMipmaps}function f(T){s.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(T,M,V,nt,st=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=M;if(M===s.RED&&(V===s.FLOAT&&(j=s.R32F),V===s.HALF_FLOAT&&(j=s.R16F),V===s.UNSIGNED_BYTE&&(j=s.R8)),M===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(j=s.R8UI),V===s.UNSIGNED_SHORT&&(j=s.R16UI),V===s.UNSIGNED_INT&&(j=s.R32UI),V===s.BYTE&&(j=s.R8I),V===s.SHORT&&(j=s.R16I),V===s.INT&&(j=s.R32I)),M===s.RG&&(V===s.FLOAT&&(j=s.RG32F),V===s.HALF_FLOAT&&(j=s.RG16F),V===s.UNSIGNED_BYTE&&(j=s.RG8)),M===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(j=s.RG8UI),V===s.UNSIGNED_SHORT&&(j=s.RG16UI),V===s.UNSIGNED_INT&&(j=s.RG32UI),V===s.BYTE&&(j=s.RG8I),V===s.SHORT&&(j=s.RG16I),V===s.INT&&(j=s.RG32I)),M===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(j=s.RGB8UI),V===s.UNSIGNED_SHORT&&(j=s.RGB16UI),V===s.UNSIGNED_INT&&(j=s.RGB32UI),V===s.BYTE&&(j=s.RGB8I),V===s.SHORT&&(j=s.RGB16I),V===s.INT&&(j=s.RGB32I)),M===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),V===s.UNSIGNED_INT&&(j=s.RGBA32UI),V===s.BYTE&&(j=s.RGBA8I),V===s.SHORT&&(j=s.RGBA16I),V===s.INT&&(j=s.RGBA32I)),M===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),M===s.RGBA){let St=st?Lr:Qt.getTransfer(nt);V===s.FLOAT&&(j=s.RGBA32F),V===s.HALF_FLOAT&&(j=s.RGBA16F),V===s.UNSIGNED_BYTE&&(j=St===ie?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(T,M){let V;return T?M===null||M===fi||M===Wi?V=s.DEPTH24_STENCIL8:M===En?V=s.DEPTH32F_STENCIL8:M===gs&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===fi||M===Wi?V=s.DEPTH_COMPONENT24:M===En?V=s.DEPTH_COMPONENT32F:M===gs&&(V=s.DEPTH_COMPONENT16),V}function R(T,M){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==nn&&T.minFilter!==un?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){let M=T.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&h.delete(M)}function w(T){let M=T.target;M.removeEventListener("dispose",w),y(M)}function C(T){let M=n.get(T);if(M.__webglInit===void 0)return;let V=T.source,nt=d.get(V);if(nt){let st=nt[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&S(T),Object.keys(nt).length===0&&d.delete(V)}n.remove(T)}function S(T){let M=n.get(T);s.deleteTexture(M.__webglTexture);let V=T.source,nt=d.get(V);delete nt[M.__cacheKey],a.memory.textures--}function y(T){let M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(M.__webglFramebuffer[nt]))for(let st=0;st<M.__webglFramebuffer[nt].length;st++)s.deleteFramebuffer(M.__webglFramebuffer[nt][st]);else s.deleteFramebuffer(M.__webglFramebuffer[nt]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[nt])}else{if(Array.isArray(M.__webglFramebuffer))for(let nt=0;nt<M.__webglFramebuffer.length;nt++)s.deleteFramebuffer(M.__webglFramebuffer[nt]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let nt=0;nt<M.__webglColorRenderbuffer.length;nt++)M.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[nt]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let V=T.textures;for(let nt=0,st=V.length;nt<st;nt++){let j=n.get(V[nt]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(V[nt])}n.remove(T)}let P=0;function U(){P=0}function N(){let T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function H(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function G(T,M){let V=n.get(T);if(T.isVideoTexture&&Ct(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){let nt=T.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(V,T,M);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+M)}function B(T,M){let V=n.get(T);if(T.version>0&&V.__version!==T.version){X(V,T,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+M)}function Y(T,M){let V=n.get(T);if(T.version>0&&V.__version!==T.version){X(V,T,M);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+M)}function L(T,M){let V=n.get(T);if(T.version>0&&V.__version!==T.version){it(V,T,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+M)}let K={[Za]:s.REPEAT,[ui]:s.CLAMP_TO_EDGE,[Ja]:s.MIRRORED_REPEAT},et={[nn]:s.NEAREST,[du]:s.NEAREST_MIPMAP_NEAREST,[Ps]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[aa]:s.LINEAR_MIPMAP_NEAREST,[di]:s.LINEAR_MIPMAP_LINEAR},ot={[vu]:s.NEVER,[bu]:s.ALWAYS,[xu]:s.LESS,[th]:s.LEQUAL,[_u]:s.EQUAL,[Su]:s.GEQUAL,[yu]:s.GREATER,[Mu]:s.NOTEQUAL};function _t(T,M){if(M.type===En&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===un||M.magFilter===aa||M.magFilter===Ps||M.magFilter===di||M.minFilter===un||M.minFilter===aa||M.minFilter===Ps||M.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,K[M.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,K[M.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,K[M.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,et[M.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,et[M.minFilter]),M.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ot[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===nn||M.minFilter!==Ps&&M.minFilter!==di||M.type===En&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Pt(T,M){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));let nt=M.source,st=d.get(nt);st===void 0&&(st={},d.set(nt,st));let j=H(M);if(j!==T.__cacheKey){st[j]===void 0&&(st[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),st[j].usedTimes++;let St=st[T.__cacheKey];St!==void 0&&(st[T.__cacheKey].usedTimes--,St.usedTimes===0&&S(M)),T.__cacheKey=j,T.__webglTexture=st[j].texture}return V}function X(T,M,V){let nt=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(nt=s.TEXTURE_3D);let st=Pt(T,M),j=M.source;e.bindTexture(nt,T.__webglTexture,s.TEXTURE0+V);let St=n.get(j);if(j.version!==St.__version||st===!0){e.activeTexture(s.TEXTURE0+V);let dt=Qt.getPrimaries(Qt.workingColorSpace),vt=M.colorSpace===Gn?null:Qt.getPrimaries(M.colorSpace),xt=M.colorSpace===Gn||dt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let k=v(M.image,!1,i.maxTextureSize);k=te(M,k);let lt=r.convert(M.format,M.colorSpace),Mt=r.convert(M.type),Dt=_(M.internalFormat,lt,Mt,M.colorSpace,M.isVideoTexture);_t(nt,M);let gt,Nt=M.mipmaps,Ut=M.isVideoTexture!==!0,$t=St.__version===void 0||st===!0,D=j.dataReady,ut=R(M,k);if(M.isDepthTexture)Dt=x(M.format===Xi,M.type),$t&&(Ut?e.texStorage2D(s.TEXTURE_2D,1,Dt,k.width,k.height):e.texImage2D(s.TEXTURE_2D,0,Dt,k.width,k.height,0,lt,Mt,null));else if(M.isDataTexture)if(Nt.length>0){Ut&&$t&&e.texStorage2D(s.TEXTURE_2D,ut,Dt,Nt[0].width,Nt[0].height);for(let Z=0,tt=Nt.length;Z<tt;Z++)gt=Nt[Z],Ut?D&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,gt.width,gt.height,lt,Mt,gt.data):e.texImage2D(s.TEXTURE_2D,Z,Dt,gt.width,gt.height,0,lt,Mt,gt.data);M.generateMipmaps=!1}else Ut?($t&&e.texStorage2D(s.TEXTURE_2D,ut,Dt,k.width,k.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,k.width,k.height,lt,Mt,k.data)):e.texImage2D(s.TEXTURE_2D,0,Dt,k.width,k.height,0,lt,Mt,k.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ut&&$t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Dt,Nt[0].width,Nt[0].height,k.depth);for(let Z=0,tt=Nt.length;Z<tt;Z++)if(gt=Nt[Z],M.format!==en)if(lt!==null)if(Ut){if(D)if(M.layerUpdates.size>0){let ct=Il(gt.width,gt.height,M.format,M.type);for(let pt of M.layerUpdates){let zt=gt.data.subarray(pt*ct/gt.data.BYTES_PER_ELEMENT,(pt+1)*ct/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,pt,gt.width,gt.height,1,lt,zt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,gt.width,gt.height,k.depth,lt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Dt,gt.width,gt.height,k.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,gt.width,gt.height,k.depth,lt,Mt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,Dt,gt.width,gt.height,k.depth,0,lt,Mt,gt.data)}else{Ut&&$t&&e.texStorage2D(s.TEXTURE_2D,ut,Dt,Nt[0].width,Nt[0].height);for(let Z=0,tt=Nt.length;Z<tt;Z++)gt=Nt[Z],M.format!==en?lt!==null?Ut?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,gt.width,gt.height,lt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,Dt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?D&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,gt.width,gt.height,lt,Mt,gt.data):e.texImage2D(s.TEXTURE_2D,Z,Dt,gt.width,gt.height,0,lt,Mt,gt.data)}else if(M.isDataArrayTexture)if(Ut){if($t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Dt,k.width,k.height,k.depth),D)if(M.layerUpdates.size>0){let Z=Il(k.width,k.height,M.format,M.type);for(let tt of M.layerUpdates){let ct=k.data.subarray(tt*Z/k.data.BYTES_PER_ELEMENT,(tt+1)*Z/k.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,k.width,k.height,1,lt,Mt,ct)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,lt,Mt,k.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,k.width,k.height,k.depth,0,lt,Mt,k.data);else if(M.isData3DTexture)Ut?($t&&e.texStorage3D(s.TEXTURE_3D,ut,Dt,k.width,k.height,k.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,lt,Mt,k.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,k.width,k.height,k.depth,0,lt,Mt,k.data);else if(M.isFramebufferTexture){if($t)if(Ut)e.texStorage2D(s.TEXTURE_2D,ut,Dt,k.width,k.height);else{let Z=k.width,tt=k.height;for(let ct=0;ct<ut;ct++)e.texImage2D(s.TEXTURE_2D,ct,Dt,Z,tt,0,lt,Mt,null),Z>>=1,tt>>=1}}else if(Nt.length>0){if(Ut&&$t){let Z=Lt(Nt[0]);e.texStorage2D(s.TEXTURE_2D,ut,Dt,Z.width,Z.height)}for(let Z=0,tt=Nt.length;Z<tt;Z++)gt=Nt[Z],Ut?D&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,lt,Mt,gt):e.texImage2D(s.TEXTURE_2D,Z,Dt,lt,Mt,gt);M.generateMipmaps=!1}else if(Ut){if($t){let Z=Lt(k);e.texStorage2D(s.TEXTURE_2D,ut,Dt,Z.width,Z.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt,Mt,k)}else e.texImage2D(s.TEXTURE_2D,0,Dt,lt,Mt,k);g(M)&&f(nt),St.__version=j.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function it(T,M,V){if(M.image.length!==6)return;let nt=Pt(T,M),st=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+V);let j=n.get(st);if(st.version!==j.__version||nt===!0){e.activeTexture(s.TEXTURE0+V);let St=Qt.getPrimaries(Qt.workingColorSpace),dt=M.colorSpace===Gn?null:Qt.getPrimaries(M.colorSpace),vt=M.colorSpace===Gn||St===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let xt=M.isCompressedTexture||M.image[0].isCompressedTexture,k=M.image[0]&&M.image[0].isDataTexture,lt=[];for(let tt=0;tt<6;tt++)!xt&&!k?lt[tt]=v(M.image[tt],!0,i.maxCubemapSize):lt[tt]=k?M.image[tt].image:M.image[tt],lt[tt]=te(M,lt[tt]);let Mt=lt[0],Dt=r.convert(M.format,M.colorSpace),gt=r.convert(M.type),Nt=_(M.internalFormat,Dt,gt,M.colorSpace),Ut=M.isVideoTexture!==!0,$t=j.__version===void 0||nt===!0,D=st.dataReady,ut=R(M,Mt);_t(s.TEXTURE_CUBE_MAP,M);let Z;if(xt){Ut&&$t&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Nt,Mt.width,Mt.height);for(let tt=0;tt<6;tt++){Z=lt[tt].mipmaps;for(let ct=0;ct<Z.length;ct++){let pt=Z[ct];M.format!==en?Dt!==null?Ut?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct,0,0,pt.width,pt.height,Dt,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct,Nt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct,0,0,pt.width,pt.height,Dt,gt,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct,Nt,pt.width,pt.height,0,Dt,gt,pt.data)}}}else{if(Z=M.mipmaps,Ut&&$t){Z.length>0&&ut++;let tt=Lt(lt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Nt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(k){Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,lt[tt].width,lt[tt].height,Dt,gt,lt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Nt,lt[tt].width,lt[tt].height,0,Dt,gt,lt[tt].data);for(let ct=0;ct<Z.length;ct++){let zt=Z[ct].image[tt].image;Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct+1,0,0,zt.width,zt.height,Dt,gt,zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct+1,Nt,zt.width,zt.height,0,Dt,gt,zt.data)}}else{Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,gt,lt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Nt,Dt,gt,lt[tt]);for(let ct=0;ct<Z.length;ct++){let pt=Z[ct];Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct+1,0,0,Dt,gt,pt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct+1,Nt,Dt,gt,pt.image[tt])}}}g(M)&&f(s.TEXTURE_CUBE_MAP),j.__version=st.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ht(T,M,V,nt,st,j){let St=r.convert(V.format,V.colorSpace),dt=r.convert(V.type),vt=_(V.internalFormat,St,dt,V.colorSpace),xt=n.get(M),k=n.get(V);if(k.__renderTarget=M,!xt.__hasExternalTextures){let lt=Math.max(1,M.width>>j),Mt=Math.max(1,M.height>>j);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,j,vt,lt,Mt,M.depth,0,St,dt,null):e.texImage2D(st,j,vt,lt,Mt,0,St,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),kt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,st,k.__webglTexture,0,Bt(M)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,st,k.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(T,M,V){if(s.bindRenderbuffer(s.RENDERBUFFER,T),M.depthBuffer){let nt=M.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,j=x(M.stencilBuffer,st),St=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=Bt(M);kt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,j,M.width,M.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,j,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,j,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,T)}else{let nt=M.textures;for(let st=0;st<nt.length;st++){let j=nt[st],St=r.convert(j.format,j.colorSpace),dt=r.convert(j.type),vt=_(j.internalFormat,St,dt,j.colorSpace),xt=Bt(M);V&&kt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,vt,M.width,M.height):kt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,vt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,vt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let nt=n.get(M.depthTexture);nt.__renderTarget=M,(!nt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);let st=nt.__webglTexture,j=Bt(M);if(M.depthTexture.format===zi)kt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0);else if(M.depthTexture.format===Xi)kt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function It(T){let M=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let nt=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),nt){let st=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,nt.removeEventListener("dispose",st)};nt.addEventListener("dispose",st),M.__depthDisposeCallback=st}M.__boundDepthTexture=nt}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Tt(M.__webglFramebuffer,T)}else if(V){M.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[nt]),M.__webglDepthbuffer[nt]===void 0)M.__webglDepthbuffer[nt]=s.createRenderbuffer(),rt(M.__webglDepthbuffer[nt],T,!1);else{let st=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),rt(M.__webglDepthbuffer,T,!1);else{let nt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,st)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(T,M,V){let nt=n.get(T);M!==void 0&&ht(nt.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&It(T)}function Vt(T){let M=T.texture,V=n.get(T),nt=n.get(M);T.addEventListener("dispose",w);let st=T.textures,j=T.isWebGLCubeRenderTarget===!0,St=st.length>1;if(St||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=M.version,a.memory.textures++),j){V.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[dt]=[];for(let vt=0;vt<M.mipmaps.length;vt++)V.__webglFramebuffer[dt][vt]=s.createFramebuffer()}else V.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let dt=0;dt<M.mipmaps.length;dt++)V.__webglFramebuffer[dt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(St)for(let dt=0,vt=st.length;dt<vt;dt++){let xt=n.get(st[dt]);xt.__webglTexture===void 0&&(xt.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&kt(T)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let dt=0;dt<st.length;dt++){let vt=st[dt];V.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[dt]);let xt=r.convert(vt.format,vt.colorSpace),k=r.convert(vt.type),lt=_(vt.internalFormat,xt,k,vt.colorSpace,T.isXRRenderTarget===!0),Mt=Bt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,lt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,V.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),_t(s.TEXTURE_CUBE_MAP,M);for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)ht(V.__webglFramebuffer[dt][vt],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else ht(V.__webglFramebuffer[dt],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(M)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let dt=0,vt=st.length;dt<vt;dt++){let xt=st[dt],k=n.get(xt);e.bindTexture(s.TEXTURE_2D,k.__webglTexture),_t(s.TEXTURE_2D,xt),ht(V.__webglFramebuffer,T,xt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),g(xt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(dt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,nt.__webglTexture),_t(dt,M),M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)ht(V.__webglFramebuffer[vt],T,M,s.COLOR_ATTACHMENT0,dt,vt);else ht(V.__webglFramebuffer,T,M,s.COLOR_ATTACHMENT0,dt,0);g(M)&&f(dt),e.unbindTexture()}T.depthBuffer&&It(T)}function Ot(T){let M=T.textures;for(let V=0,nt=M.length;V<nt;V++){let st=M[V];if(g(st)){let j=E(T),St=n.get(st).__webglTexture;e.bindTexture(j,St),f(j),e.unbindTexture()}}}let ae=[],I=[];function ye(T){if(T.samples>0){if(kt(T)===!1){let M=T.textures,V=T.width,nt=T.height,st=s.COLOR_BUFFER_BIT,j=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(T),dt=M.length>1;if(dt)for(let vt=0;vt<M.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[vt]);let xt=n.get(M[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xt,0)}s.blitFramebuffer(0,0,V,nt,0,0,V,nt,st,s.NEAREST),c===!0&&(ae.length=0,I.length=0,ae.push(s.COLOR_ATTACHMENT0+vt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ae.push(j),I.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<M.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,St.__webglColorRenderbuffer[vt]);let xt=n.get(M[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let M=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Bt(T){return Math.min(i.maxSamples,T.samples)}function kt(T){let M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(T){let M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function te(T,M){let V=T.colorSpace,nt=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==Kn&&V!==Gn&&(Qt.getTransfer(V)===ie?(nt!==en||st!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Lt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=L,this.rebindTextures=Et,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=kt}function g0(s,t){function e(n,i=Gn){let r,a=Qt.getTransfer(i);if(n===Rn)return s.UNSIGNED_BYTE;if(n===oc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Wl)return s.BYTE;if(n===Xl)return s.SHORT;if(n===gs)return s.UNSIGNED_SHORT;if(n===ac)return s.INT;if(n===fi)return s.UNSIGNED_INT;if(n===En)return s.FLOAT;if(n===bs)return s.HALF_FLOAT;if(n===Yl)return s.ALPHA;if(n===Zl)return s.RGB;if(n===en)return s.RGBA;if(n===Jl)return s.LUMINANCE;if(n===$l)return s.LUMINANCE_ALPHA;if(n===zi)return s.DEPTH_COMPONENT;if(n===Xi)return s.DEPTH_STENCIL;if(n===Kl)return s.RED;if(n===lc)return s.RED_INTEGER;if(n===jl)return s.RG;if(n===hc)return s.RG_INTEGER;if(n===uc)return s.RGBA_INTEGER;if(n===sr||n===rr||n===ar||n===or)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Ka||n===ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===to||n===eo||n===no)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===to||n===eo)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===no)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===io||n===so||n===ro||n===ao||n===oo||n===co||n===lo||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===vo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===io)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===so)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ro)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ao)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===co)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ho)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===po)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===go)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cr||n===xo||n===_o)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===cr)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ql||n===yo||n===Mo||n===So)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===cr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var ko=class extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Wn=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},v0={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),f=this._getHandJoint(l,v);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(v0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Wn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},x0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_0=`
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

}`,Bo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ke,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new de({vertexShader:x0,fragmentShader:_0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ho=class extends Zn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null,v=new Bo,g=e.getContextAttributes(),f=null,E=null,_=[],x=[],R=new Yt,A=null,w=new Ce;w.viewport=new me;let C=new Ce;C.viewport=new me;let S=[w,C],y=new ko,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let it=_[X];return it===void 0&&(it=new ps,_[X]=it),it.getTargetRaySpace()},this.getControllerGrip=function(X){let it=_[X];return it===void 0&&(it=new ps,_[X]=it),it.getGripSpace()},this.getHand=function(X){let it=_[X];return it===void 0&&(it=new ps,_[X]=it),it.getHandSpace()};function N(X){let it=x.indexOf(X.inputSource);if(it===-1)return;let ht=_[it];ht!==void 0&&(ht.update(X.inputSource,X.frame,l||a),ht.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",G);for(let X=0;X<_.length;X++){let it=x[X];it!==null&&(x[X]=null,_[X].disconnect(it))}P=null,U=null,v.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,E=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",H),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){let it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Cn(p.framebufferWidth,p.framebufferHeight,{format:en,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let it=null,ht=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=g.stencil?Xi:zi,ht=g.stencil?Wi:fi);let Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Tt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Cn(d.textureWidth,d.textureHeight,{format:en,type:Rn,depthTexture:new Sr(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Pt.setContext(i),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(X){for(let it=0;it<X.removed.length;it++){let ht=X.removed[it],rt=x.indexOf(ht);rt>=0&&(x[rt]=null,_[rt].disconnect(ht))}for(let it=0;it<X.added.length;it++){let ht=X.added[it],rt=x.indexOf(ht);if(rt===-1){for(let It=0;It<_.length;It++)if(It>=x.length){x.push(ht),rt=It;break}else if(x[It]===null){x[It]=ht,rt=It;break}if(rt===-1)break}let Tt=_[rt];Tt&&Tt.connect(ht)}}let B=new z,Y=new z;function L(X,it,ht){B.setFromMatrixPosition(it.matrixWorld),Y.setFromMatrixPosition(ht.matrixWorld);let rt=B.distanceTo(Y),Tt=it.projectionMatrix.elements,It=ht.projectionMatrix.elements,Et=Tt[14]/(Tt[10]-1),Vt=Tt[14]/(Tt[10]+1),Ot=(Tt[9]+1)/Tt[5],ae=(Tt[9]-1)/Tt[5],I=(Tt[8]-1)/Tt[0],ye=(It[8]+1)/It[0],Bt=Et*I,kt=Et*ye,Ct=rt/(-I+ye),te=Ct*-I;if(it.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(te),X.translateZ(Ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Tt[10]===-1)X.projectionMatrix.copy(it.projectionMatrix),X.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Lt=Et+Ct,T=Vt+Ct,M=Bt-te,V=kt+(rt-te),nt=Ot*Vt/T*Lt,st=ae*Vt/T*Lt;X.projectionMatrix.makePerspective(M,V,nt,st,Lt,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function K(X,it){it===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(it.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let it=X.near,ht=X.far;v.texture!==null&&(v.depthNear>0&&(it=v.depthNear),v.depthFar>0&&(ht=v.depthFar)),y.near=C.near=w.near=it,y.far=C.far=w.far=ht,(P!==y.near||U!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,U=y.far),w.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,y.layers.mask=w.layers.mask|C.layers.mask;let rt=X.parent,Tt=y.cameras;K(y,rt);for(let It=0;It<Tt.length;It++)K(Tt[It],rt);Tt.length===2?L(y,w,C):y.projectionMatrix.copy(w.projectionMatrix),et(X,y,rt)};function et(X,it,ht){ht===null?X.matrix.copy(it.matrixWorld):(X.matrix.copy(ht.matrixWorld),X.matrix.invert(),X.matrix.multiply(it.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(it.projectionMatrix),X.projectionMatrixInverse.copy(it.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=wo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ot=null;function _t(X,it){if(h=it.getViewerPose(l||a),m=it,h!==null){let ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let rt=!1;ht.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let It=0;It<ht.length;It++){let Et=ht[It],Vt=null;if(p!==null)Vt=p.getViewport(Et);else{let ae=u.getViewSubImage(d,Et);Vt=ae.viewport,It===0&&(t.setRenderTargetTextures(E,ae.colorTexture,d.ignoreDepthValues?void 0:ae.depthStencilTexture),t.setRenderTarget(E))}let Ot=S[It];Ot===void 0&&(Ot=new Ce,Ot.layers.enable(It),Ot.viewport=new me,S[It]=Ot),Ot.matrix.fromArray(Et.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Et.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),It===0&&(y.matrix.copy(Ot.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(Ot)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let It=u.getDepthInformation(ht[0]);It&&It.isValid&&It.texture&&v.init(t,It,i.renderState)}}for(let ht=0;ht<_.length;ht++){let rt=x[ht],Tt=_[ht];rt!==null&&Tt!==void 0&&Tt.update(rt,it,l||a)}ot&&ot(X,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}let Pt=new sh;Pt.setAnimationLoop(_t),this.setAnimationLoop=function(X){ot=X},this.dispose=function(){}}},ai=new sn,y0=new ue;function M0(s,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,ih(s)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function i(g,f,E,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,x)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),v(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,E,_):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Te&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Te&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let E=t.get(f),_=E.envMap,x=E.envMapRotation;_&&(g.envMap.value=_,ai.copy(x),ai.x*=-1,ai.y*=-1,ai.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),g.envMapRotation.value.setFromMatrix4(y0.makeRotationFromEuler(ai)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,E,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*E,g.scale.value=_*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,E){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Te&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function v(g,f){let E=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function S0(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,_){let x=_.program;n.uniformBlockBinding(E,x)}function l(E,_){let x=i[E.id];x===void 0&&(m(E),x=h(E),i[E.id]=x,E.addEventListener("dispose",g));let R=_.program;n.updateUBOMapping(E,R);let A=t.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function h(E){let _=u();E.__bindingPointIndex=_;let x=s.createBuffer(),R=E.__size,A=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,R,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,x),x}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let _=i[E.id],x=E.uniforms,R=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let A=0,w=x.length;A<w;A++){let C=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,y=C.length;S<y;S++){let P=C[S];if(p(P,A,S,R)===!0){let U=P.__offset,N=Array.isArray(P.value)?P.value:[P.value],H=0;for(let G=0;G<N.length;G++){let B=N[G],Y=v(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,U+H,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(E,_,x,R){let A=E.value,w=_+"_"+x;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{let C=R[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return R[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function m(E){let _=E.uniforms,x=0,R=16;for(let w=0,C=_.length;w<C;w++){let S=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,P=S.length;y<P;y++){let U=S[y],N=Array.isArray(U.value)?U.value:[U.value];for(let H=0,G=N.length;H<G;H++){let B=N[H],Y=v(B),L=x%R,K=L%Y.boundary,et=L+K;x+=K,et!==0&&R-et<Y.storage&&(x+=R-et),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=Y.storage}}}let A=x%R;return A>0&&(x+=R-A),E.__size=x,E.__cache={},this}function v(E){let _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function g(E){let _=E.target;_.removeEventListener("dispose",g);let x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function f(){for(let E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}var br=class{constructor(t={}){let{canvas:e=Eu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),v=new Int32Array(4),g=null,f=null,E=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=dn,this.toneMappingExposure=1;let x=this,R=!1,A=0,w=0,C=null,S=-1,y=null,P=new me,U=new me,N=null,H=new Xt(0),G=0,B=e.width,Y=e.height,L=1,K=null,et=null,ot=new me(0,0,B,Y),_t=new me(0,0,B,Y),Pt=!1,X=new yr,it=!1,ht=!1,rt=new ue,Tt=new ue,It=new z,Et=new me,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ot=!1;function ae(){return C===null?L:1}let I=n;function ye(b,O){return e.getContext(b,O)}try{let b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",pt,!1),I===null){let O="webgl2";if(I=ye(O,b),I===null)throw ye(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Bt,kt,Ct,te,Lt,T,M,V,nt,st,j,St,dt,vt,xt,k,lt,Mt,Dt,gt,Nt,Ut,$t,D;function ut(){Bt=new zp(I),Bt.init(),Ut=new g0(I,Bt),kt=new Lp(I,Bt,t,Ut),Ct=new f0(I,Bt),kt.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),te=new Hp(I),Lt=new t0,T=new m0(I,Bt,Ct,Lt,kt,Ut,te),M=new Up(x),V=new Op(x),nt=new Yu(I),$t=new Pp(I,nt),st=new kp(I,nt,te,$t),j=new Gp(I,st,nt,te),Dt=new Vp(I,kt,T),k=new Dp(Lt),St=new Qm(x,M,V,Bt,kt,$t,k),dt=new M0(x,Lt),vt=new n0,xt=new c0(Bt),Mt=new Cp(x,M,V,Ct,j,p,c),lt=new u0(x,j,kt),D=new S0(I,te,kt,Ct),gt=new Ip(I,Bt,te),Nt=new Bp(I,Bt,te),te.programs=St.programs,x.capabilities=kt,x.extensions=Bt,x.properties=Lt,x.renderLists=vt,x.shadowMap=lt,x.state=Ct,x.info=te}ut();let Z=new Ho(x,I);this.xr=Z,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=Bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(b){b!==void 0&&(L=b,this.setSize(B,Y,!1))},this.getSize=function(b){return b.set(B,Y)},this.setSize=function(b,O,W=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,Y=O,e.width=Math.floor(b*L),e.height=Math.floor(O*L),W===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(B*L,Y*L).floor()},this.setDrawingBufferSize=function(b,O,W){B=b,Y=O,L=W,e.width=Math.floor(b*W),e.height=Math.floor(O*W),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(ot)},this.setViewport=function(b,O,W,q){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,O,W,q),Ct.viewport(P.copy(ot).multiplyScalar(L).round())},this.getScissor=function(b){return b.copy(_t)},this.setScissor=function(b,O,W,q){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,O,W,q),Ct.scissor(U.copy(_t).multiplyScalar(L).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(b){Ct.setScissorTest(Pt=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){et=b},this.getClearColor=function(b){return b.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(b=!0,O=!0,W=!0){let q=0;if(b){let F=!1;if(C!==null){let at=C.texture.format;F=at===uc||at===hc||at===lc}if(F){let at=C.texture.type,mt=at===Rn||at===fi||at===gs||at===Wi||at===oc||at===cc,yt=Mt.getClearColor(),bt=Mt.getClearAlpha(),Rt=yt.r,Ft=yt.g,wt=yt.b;mt?(m[0]=Rt,m[1]=Ft,m[2]=wt,m[3]=bt,I.clearBufferuiv(I.COLOR,0,m)):(v[0]=Rt,v[1]=Ft,v[2]=wt,v[3]=bt,I.clearBufferiv(I.COLOR,0,v))}else q|=I.COLOR_BUFFER_BIT}O&&(q|=I.DEPTH_BUFFER_BIT),W&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),xt.dispose(),Lt.dispose(),M.dispose(),V.dispose(),j.dispose(),$t.dispose(),D.dispose(),St.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",es),Z.removeEventListener("sessionend",ns),Re.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let b=te.autoReset,O=lt.enabled,W=lt.autoUpdate,q=lt.needsUpdate,F=lt.type;ut(),te.autoReset=b,lt.enabled=O,lt.autoUpdate=W,lt.needsUpdate=q,lt.type=F}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function zt(b){let O=b.target;O.removeEventListener("dispose",zt),oe(O)}function oe(b){ge(b),Lt.remove(b)}function ge(b){let O=Lt.get(b).programs;O!==void 0&&(O.forEach(function(W){St.releaseProgram(W)}),b.isShaderMaterial&&St.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,W,q,F,at){O===null&&(O=Vt);let mt=F.isMesh&&F.matrixWorld.determinant()<0,yt=Rs(b,O,W,q,F);Ct.setMaterial(q,mt);let bt=W.index,Rt=1;if(q.wireframe===!0){if(bt=st.getWireframeAttribute(W),bt===void 0)return;Rt=2}let Ft=W.drawRange,wt=W.attributes.position,qt=Ft.start*Rt,ne=(Ft.start+Ft.count)*Rt;at!==null&&(qt=Math.max(qt,at.start*Rt),ne=Math.min(ne,(at.start+at.count)*Rt)),bt!==null?(qt=Math.max(qt,0),ne=Math.min(ne,bt.count)):wt!=null&&(qt=Math.max(qt,0),ne=Math.min(ne,wt.count));let ee=ne-qt;if(ee<0||ee===1/0)return;$t.setup(F,q,yt,W,bt);let we,Zt=gt;if(bt!==null&&(we=nt.get(bt),Zt=Nt,Zt.setIndex(we)),F.isMesh)q.wireframe===!0?(Ct.setLineWidth(q.wireframeLinewidth*ae()),Zt.setMode(I.LINES)):Zt.setMode(I.TRIANGLES);else if(F.isLine){let At=q.linewidth;At===void 0&&(At=1),Ct.setLineWidth(At*ae()),F.isLineSegments?Zt.setMode(I.LINES):F.isLineLoop?Zt.setMode(I.LINE_LOOP):Zt.setMode(I.LINE_STRIP)}else F.isPoints?Zt.setMode(I.POINTS):F.isSprite&&Zt.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Zt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let At=F._multiDrawStarts,Ye=F._multiDrawCounts,jt=F._multiDrawCount,Pe=bt?nt.get(bt).bytesPerElement:1,gn=Lt.get(q).currentProgram.getUniforms();for(let ke=0;ke<jt;ke++)gn.setValue(I,"_gl_DrawID",ke),Zt.render(At[ke]/Pe,Ye[ke])}else if(F.isInstancedMesh)Zt.renderInstances(qt,ee,F.count);else if(W.isInstancedBufferGeometry){let At=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ye=Math.min(W.instanceCount,At);Zt.renderInstances(qt,ee,Ye)}else Zt.render(qt,ee)};function Kt(b,O,W){b.transparent===!0&&b.side===wn&&b.forceSinglePass===!1?(b.side=Te,b.needsUpdate=!0,Un(b,O,W),b.side=Yn,b.needsUpdate=!0,Un(b,O,W),b.side=wn):Un(b,O,W)}this.compile=function(b,O,W=null){W===null&&(W=b),f=xt.get(W),f.init(O),_.push(f),W.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),b!==W&&b.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();let q=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let at=F.material;if(at)if(Array.isArray(at))for(let mt=0;mt<at.length;mt++){let yt=at[mt];Kt(yt,W,F),q.add(yt)}else Kt(at,W,F),q.add(at)}),_.pop(),f=null,q},this.compileAsync=function(b,O,W=null){let q=this.compile(b,O,W);return new Promise(F=>{function at(){if(q.forEach(function(mt){Lt.get(mt).currentProgram.isReady()&&q.delete(mt)}),q.size===0){F(b);return}setTimeout(at,10)}Bt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let De=null;function Xe(b){De&&De(b)}function es(){Re.stop()}function ns(){Re.start()}let Re=new sh;Re.setAnimationLoop(Xe),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(b){De=b,Z.setAnimationLoop(b),b===null?Re.stop():Re.start()},Z.addEventListener("sessionstart",es),Z.addEventListener("sessionend",ns),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,O,C),f=xt.get(b,_.length),f.init(O),_.push(f),Tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(Tt),ht=this.localClippingEnabled,it=k.init(this.clippingPlanes,ht),g=vt.get(b,E.length),g.init(),E.push(g),Z.enabled===!0&&Z.isPresenting===!0){let at=x.xr.getDepthSensingMesh();at!==null&&ze(at,O,-1/0,x.sortObjects)}ze(b,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(K,et),Ot=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ot&&Mt.addToRenderList(g,b),this.info.render.frame++,it===!0&&k.beginShadows();let W=f.state.shadowsArray;lt.render(W,b,O),it===!0&&k.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,F=g.transmissive;if(f.setupLights(),O.isArrayCamera){let at=O.cameras;if(F.length>0)for(let mt=0,yt=at.length;mt<yt;mt++){let bt=at[mt];Ln(q,F,b,bt)}Ot&&Mt.render(b);for(let mt=0,yt=at.length;mt<yt;mt++){let bt=at[mt];qe(g,b,bt,bt.viewport)}}else F.length>0&&Ln(q,F,b,O),Ot&&Mt.render(b),qe(g,b,O);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,O),$t.resetDefaultState(),S=-1,y=null,_.pop(),_.length>0?(f=_[_.length-1],it===!0&&k.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function ze(b,O,W,q){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){q&&Et.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Tt);let mt=j.update(b),yt=b.material;yt.visible&&g.push(b,mt,yt,W,Et.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){let mt=j.update(b),yt=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Et.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Et.copy(mt.boundingSphere.center)),Et.applyMatrix4(b.matrixWorld).applyMatrix4(Tt)),Array.isArray(yt)){let bt=mt.groups;for(let Rt=0,Ft=bt.length;Rt<Ft;Rt++){let wt=bt[Rt],qt=yt[wt.materialIndex];qt&&qt.visible&&g.push(b,mt,qt,W,Et.z,wt)}}else yt.visible&&g.push(b,mt,yt,W,Et.z,null)}}let at=b.children;for(let mt=0,yt=at.length;mt<yt;mt++)ze(at[mt],O,W,q)}function qe(b,O,W,q){let F=b.opaque,at=b.transmissive,mt=b.transparent;f.setupLightsView(W),it===!0&&k.setGlobalState(x.clippingPlanes,W),q&&Ct.viewport(P.copy(q)),F.length>0&&cn(F,O,W),at.length>0&&cn(at,O,W),mt.length>0&&cn(mt,O,W),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Ln(b,O,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new Cn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?bs:Rn,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let at=f.state.transmissionRenderTarget[q.id],mt=q.viewport||P;at.setSize(mt.z,mt.w);let yt=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(H),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),Ot&&Mt.render(W);let bt=x.toneMapping;x.toneMapping=dn;let Rt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),it===!0&&k.setGlobalState(x.clippingPlanes,q),cn(b,W,q),T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let wt=0,qt=O.length;wt<qt;wt++){let ne=O[wt],ee=ne.object,we=ne.geometry,Zt=ne.material,At=ne.group;if(Zt.side===wn&&ee.layers.test(q.layers)){let Ye=Zt.side;Zt.side=Te,Zt.needsUpdate=!0,Dn(ee,W,q,we,Zt,At),Zt.side=Ye,Zt.needsUpdate=!0,Ft=!0}}Ft===!0&&(T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at))}x.setRenderTarget(yt),x.setClearColor(H,G),Rt!==void 0&&(q.viewport=Rt),x.toneMapping=bt}function cn(b,O,W){let q=O.isScene===!0?O.overrideMaterial:null;for(let F=0,at=b.length;F<at;F++){let mt=b[F],yt=mt.object,bt=mt.geometry,Rt=q===null?mt.material:q,Ft=mt.group;yt.layers.test(W.layers)&&Dn(yt,O,W,bt,Rt,Ft)}}function Dn(b,O,W,q,F,at){b.onBeforeRender(x,O,W,q,F,at),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,O,W,q,b,at),F.transparent===!0&&F.side===wn&&F.forceSinglePass===!1?(F.side=Te,F.needsUpdate=!0,x.renderBufferDirect(W,O,q,F,b,at),F.side=Yn,F.needsUpdate=!0,x.renderBufferDirect(W,O,q,F,b,at),F.side=wn):x.renderBufferDirect(W,O,q,F,b,at),b.onAfterRender(x,O,W,q,F,at)}function Un(b,O,W){O.isScene!==!0&&(O=Vt);let q=Lt.get(b),F=f.state.lights,at=f.state.shadowsArray,mt=F.state.version,yt=St.getParameters(b,F.state,at,O,W),bt=St.getProgramCacheKey(yt),Rt=q.programs;q.environment=b.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(b.isMeshStandardMaterial?V:M).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Rt===void 0&&(b.addEventListener("dispose",zt),Rt=new Map,q.programs=Rt);let Ft=Rt.get(bt);if(Ft!==void 0){if(q.currentProgram===Ft&&q.lightsStateVersion===mt)return is(b,yt),Ft}else yt.uniforms=St.getUniforms(b),b.onBeforeCompile(yt,x),Ft=St.acquireProgram(yt,bt),Rt.set(bt,Ft),q.uniforms=yt.uniforms;let wt=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(wt.clippingPlanes=k.uniform),is(b,yt),q.needsLights=mn(b),q.lightsStateVersion=mt,q.needsLights&&(wt.ambientLightColor.value=F.state.ambient,wt.lightProbe.value=F.state.probe,wt.directionalLights.value=F.state.directional,wt.directionalLightShadows.value=F.state.directionalShadow,wt.spotLights.value=F.state.spot,wt.spotLightShadows.value=F.state.spotShadow,wt.rectAreaLights.value=F.state.rectArea,wt.ltc_1.value=F.state.rectAreaLTC1,wt.ltc_2.value=F.state.rectAreaLTC2,wt.pointLights.value=F.state.point,wt.pointLightShadows.value=F.state.pointShadow,wt.hemisphereLights.value=F.state.hemi,wt.directionalShadowMap.value=F.state.directionalShadowMap,wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,wt.spotShadowMap.value=F.state.spotShadowMap,wt.spotLightMatrix.value=F.state.spotLightMatrix,wt.spotLightMap.value=F.state.spotLightMap,wt.pointShadowMap.value=F.state.pointShadowMap,wt.pointShadowMatrix.value=F.state.pointShadowMatrix),q.currentProgram=Ft,q.uniformsList=null,Ft}function Mi(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Bi.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function is(b,O){let W=Lt.get(b);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Rs(b,O,W,q,F){O.isScene!==!0&&(O=Vt),T.resetTextureUnits();let at=O.fog,mt=q.isMeshStandardMaterial?O.environment:null,yt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Kn,bt=(q.isMeshStandardMaterial?V:M).get(q.envMap||mt),Rt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ft=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),wt=!!W.morphAttributes.position,qt=!!W.morphAttributes.normal,ne=!!W.morphAttributes.color,ee=dn;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ee=x.toneMapping);let we=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Zt=we!==void 0?we.length:0,At=Lt.get(q),Ye=f.state.lights;if(it===!0&&(ht===!0||b!==y)){let Ze=b===y&&q.id===S;k.setState(q,b,Ze)}let jt=!1;q.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Ye.state.version||At.outputColorSpace!==yt||F.isBatchedMesh&&At.batching===!1||!F.isBatchedMesh&&At.batching===!0||F.isBatchedMesh&&At.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&At.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&At.instancing===!1||!F.isInstancedMesh&&At.instancing===!0||F.isSkinnedMesh&&At.skinning===!1||!F.isSkinnedMesh&&At.skinning===!0||F.isInstancedMesh&&At.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&At.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&At.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&At.instancingMorph===!1&&F.morphTexture!==null||At.envMap!==bt||q.fog===!0&&At.fog!==at||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==k.numPlanes||At.numIntersection!==k.numIntersection)||At.vertexAlphas!==Rt||At.vertexTangents!==Ft||At.morphTargets!==wt||At.morphNormals!==qt||At.morphColors!==ne||At.toneMapping!==ee||At.morphTargetsCount!==Zt)&&(jt=!0):(jt=!0,At.__version=q.version);let Pe=At.currentProgram;jt===!0&&(Pe=Un(q,O,F));let gn=!1,ke=!1,ss=!1,ce=Pe.getUniforms(),ln=At.uniforms;if(Ct.useProgram(Pe.program)&&(gn=!0,ke=!0,ss=!0),q.id!==S&&(S=q.id,ke=!0),gn||y!==b){Ct.buffers.depth.getReversed()?(rt.copy(b.projectionMatrix),Au(rt),Ru(rt),ce.setValue(I,"projectionMatrix",rt)):ce.setValue(I,"projectionMatrix",b.projectionMatrix),ce.setValue(I,"viewMatrix",b.matrixWorldInverse);let Nn=ce.map.cameraPosition;Nn!==void 0&&Nn.setValue(I,It.setFromMatrixPosition(b.matrixWorld)),kt.logarithmicDepthBuffer&&ce.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ce.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,ke=!0,ss=!0)}if(F.isSkinnedMesh){ce.setOptional(I,F,"bindMatrix"),ce.setOptional(I,F,"bindMatrixInverse");let Ze=F.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),ce.setValue(I,"boneTexture",Ze.boneTexture,T))}F.isBatchedMesh&&(ce.setOptional(I,F,"batchingTexture"),ce.setValue(I,"batchingTexture",F._matricesTexture,T),ce.setOptional(I,F,"batchingIdTexture"),ce.setValue(I,"batchingIdTexture",F._indirectTexture,T),ce.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&ce.setValue(I,"batchingColorTexture",F._colorsTexture,T));let rs=W.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&Dt.update(F,W,Pe),(ke||At.receiveShadow!==F.receiveShadow)&&(At.receiveShadow=F.receiveShadow,ce.setValue(I,"receiveShadow",F.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ln.envMap.value=bt,ln.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(ln.envMapIntensity.value=O.environmentIntensity),ke&&(ce.setValue(I,"toneMappingExposure",x.toneMappingExposure),At.needsLights&&Cs(ln,ss),at&&q.fog===!0&&dt.refreshFogUniforms(ln,at),dt.refreshMaterialUniforms(ln,q,L,Y,f.state.transmissionRenderTarget[b.id]),Bi.upload(I,Mi(At),ln,T)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Bi.upload(I,Mi(At),ln,T),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ce.setValue(I,"center",F.center),ce.setValue(I,"modelViewMatrix",F.modelViewMatrix),ce.setValue(I,"normalMatrix",F.normalMatrix),ce.setValue(I,"modelMatrix",F.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Ze=q.uniformsGroups;for(let Nn=0,Fn=Ze.length;Nn<Fn;Nn++){let Lc=Ze[Nn];D.update(Lc,Pe),D.bind(Lc,Pe)}}return Pe}function Cs(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function mn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,O,W){Lt.get(b.texture).__webglTexture=O,Lt.get(b.depthTexture).__webglTexture=W;let q=Lt.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){let W=Lt.get(b);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,W=0){C=b,A=O,w=W;let q=!0,F=null,at=!1,mt=!1;if(b){let bt=Lt.get(b);if(bt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(bt.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(bt.__hasExternalTextures)T.rebindTextures(b,Lt.get(b.texture).__webglTexture,Lt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let wt=b.depthTexture;if(bt.__boundDepthTexture!==wt){if(wt!==null&&Lt.has(wt)&&(b.width!==wt.image.width||b.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}let Rt=b.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(mt=!0);let Ft=Lt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ft[O])?F=Ft[O][W]:F=Ft[O],at=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?F=Lt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[W]:F=Ft,P.copy(b.viewport),U.copy(b.scissor),N=b.scissorTest}else P.copy(ot).multiplyScalar(L).floor(),U.copy(_t).multiplyScalar(L).floor(),N=Pt;if(Ct.bindFramebuffer(I.FRAMEBUFFER,F)&&q&&Ct.drawBuffers(b,F),Ct.viewport(P),Ct.scissor(U),Ct.setScissorTest(N),at){let bt=Lt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,bt.__webglTexture,W)}else if(mt){let bt=Lt.get(b.texture),Rt=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.__webglTexture,W||0,Rt)}S=-1},this.readRenderTargetPixels=function(b,O,W,q,F,at,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(yt=yt[mt]),yt){Ct.bindFramebuffer(I.FRAMEBUFFER,yt);try{let bt=b.texture,Rt=bt.format,Ft=bt.type;if(!kt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-q&&W>=0&&W<=b.height-F&&I.readPixels(O,W,q,F,Ut.convert(Rt),Ut.convert(Ft),at)}finally{let bt=C!==null?Lt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(I.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(b,O,W,q,F,at,mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(yt=yt[mt]),yt){let bt=b.texture,Rt=bt.format,Ft=bt.type;if(!kt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-q&&W>=0&&W<=b.height-F){Ct.bindFramebuffer(I.FRAMEBUFFER,yt);let wt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,wt),I.bufferData(I.PIXEL_PACK_BUFFER,at.byteLength,I.STREAM_READ),I.readPixels(O,W,q,F,Ut.convert(Rt),Ut.convert(Ft),0);let qt=C!==null?Lt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(I.FRAMEBUFFER,qt);let ne=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Tu(I,ne,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,wt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,at),I.deleteBuffer(wt),I.deleteSync(ne),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,W=0){b.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);let q=Math.pow(2,-W),F=Math.floor(b.image.width*q),at=Math.floor(b.image.height*q),mt=O!==null?O.x:0,yt=O!==null?O.y:0;T.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,mt,yt,F,at),Ct.unbindTexture()},this.copyTextureToTexture=function(b,O,W=null,q=null,F=0){b.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],O=arguments[2],F=arguments[3]||0,W=null);let at,mt,yt,bt,Rt,Ft,wt,qt,ne,ee=b.isCompressedTexture?b.mipmaps[F]:b.image;W!==null?(at=W.max.x-W.min.x,mt=W.max.y-W.min.y,yt=W.isBox3?W.max.z-W.min.z:1,bt=W.min.x,Rt=W.min.y,Ft=W.isBox3?W.min.z:0):(at=ee.width,mt=ee.height,yt=ee.depth||1,bt=0,Rt=0,Ft=0),q!==null?(wt=q.x,qt=q.y,ne=q.z):(wt=0,qt=0,ne=0);let we=Ut.convert(O.format),Zt=Ut.convert(O.type),At;O.isData3DTexture?(T.setTexture3D(O,0),At=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),At=I.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),At=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let Ye=I.getParameter(I.UNPACK_ROW_LENGTH),jt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Pe=I.getParameter(I.UNPACK_SKIP_PIXELS),gn=I.getParameter(I.UNPACK_SKIP_ROWS),ke=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ee.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ee.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Rt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ft);let ss=b.isDataArrayTexture||b.isData3DTexture,ce=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let ln=Lt.get(b),rs=Lt.get(O),Ze=Lt.get(ln.__renderTarget),Nn=Lt.get(rs.__renderTarget);Ct.bindFramebuffer(I.READ_FRAMEBUFFER,Ze.__webglFramebuffer),Ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Fn=0;Fn<yt;Fn++)ss&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Lt.get(b).__webglTexture,F,Ft+Fn),b.isDepthTexture?(ce&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Lt.get(O).__webglTexture,F,ne+Fn),I.blitFramebuffer(bt,Rt,at,mt,wt,qt,at,mt,I.DEPTH_BUFFER_BIT,I.NEAREST)):ce?I.copyTexSubImage3D(At,F,wt,qt,ne+Fn,bt,Rt,at,mt):I.copyTexSubImage2D(At,F,wt,qt,ne+Fn,bt,Rt,at,mt);Ct.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ce?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(At,F,wt,qt,ne,at,mt,yt,we,Zt,ee.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(At,F,wt,qt,ne,at,mt,yt,we,ee.data):I.texSubImage3D(At,F,wt,qt,ne,at,mt,yt,we,Zt,ee):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,wt,qt,at,mt,we,Zt,ee.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,wt,qt,ee.width,ee.height,we,ee.data):I.texSubImage2D(I.TEXTURE_2D,F,wt,qt,at,mt,we,Zt,ee);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ye),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,jt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pe),I.pixelStorei(I.UNPACK_SKIP_ROWS,gn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke),F===0&&O.generateMipmaps&&I.generateMipmap(At),Ct.unbindTexture()},this.copyTextureToTexture3D=function(b,O,W=null,q=null,F=0){return b.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,b=arguments[2],O=arguments[3],F=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,W,q,F)},this.initRenderTarget=function(b){Lt.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),Ct.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,Ct.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var Yi=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Vo=class extends Jn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},wr=new z,Er=new z,Ll=new ue,us=new vs,Ks=new mi,Fa=new z,Dl=new z,Go=class extends Ve{constructor(t=new _e,e=new Vo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)wr.fromBufferAttribute(e,i-1),Er.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=wr.distanceTo(Er);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(i),Ks.radius+=r,t.ray.intersectsSphere(Ks)===!1)return;Ll.copy(i).invert(),us.copy(t.ray).applyMatrix4(Ll);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=p,g=m-1;v<g;v+=l){let f=h.getX(v),E=h.getX(v+1),_=js(this,t,us,c,f,E);_&&e.push(_)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(p),f=js(this,t,us,c,v,g);f&&e.push(f)}}else{let p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=p,g=m-1;v<g;v+=l){let f=js(this,t,us,c,v,v+1);f&&e.push(f)}if(this.isLineLoop){let v=js(this,t,us,c,m-1,p);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function js(s,t,e,n,i,r){let a=s.geometry.attributes.position;if(wr.fromBufferAttribute(a,i),Er.fromBufferAttribute(a,r),e.distanceSqToSegment(wr,Er,Fa,Dl)>n)return;Fa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Fa);if(!(c<t.near||c>t.far))return{distance:c,point:Dl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Ul=new z,Nl=new z,Tr=class extends Go{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ul.fromBufferAttribute(e,i),Nl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ul.distanceTo(Nl);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Wo=class extends Jn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fl=new ue,Xo=new vs,Qs=new mi,tr=new z,Ar=class extends Ve{constructor(t=new _e,e=new Wo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(i),Qs.radius+=r,t.ray.intersectsSphere(Qs)===!1)return;Fl.copy(i).invert(),Xo.copy(t.ray).applyMatrix4(Fl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let m=d,v=p;m<v;m++){let g=l.getX(m);tr.fromBufferAttribute(u,g),Ol(tr,g,c,i,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=d,v=p;m<v;m++)tr.fromBufferAttribute(u,m),Ol(tr,m,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ol(s,t,e,n,i,r,a){let o=Xo.distanceSqToPoint(s);if(o<e){let c=new z;Xo.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Rr=class s extends _e{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new z,h=new Yt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qo=class s extends _e{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,v=[],g=n/2,f=0;E(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(p,2));function E(){let x=new z,R=new z,A=0,w=(e-t)/n;for(let C=0;C<=r;C++){let S=[],y=C/r,P=y*(e-t)+t;for(let U=0;U<=i;U++){let N=U/i,H=N*c+o,G=Math.sin(H),B=Math.cos(H);R.x=P*G,R.y=-y*n+g,R.z=P*B,u.push(R.x,R.y,R.z),x.set(G,w,B).normalize(),d.push(x.x,x.y,x.z),p.push(N,1-y),S.push(m++)}v.push(S)}for(let C=0;C<i;C++)for(let S=0;S<r;S++){let y=v[S][C],P=v[S+1][C],U=v[S+1][C+1],N=v[S][C+1];(t>0||S!==0)&&(h.push(y,P,N),A+=3),(e>0||S!==r-1)&&(h.push(P,U,N),A+=3)}l.addGroup(f,A,0),f+=A}function _(x){let R=m,A=new Yt,w=new z,C=0,S=x===!0?t:e,y=x===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,g*y,0),d.push(0,y,0),p.push(.5,.5),m++;let P=m;for(let U=0;U<=i;U++){let H=U/i*c+o,G=Math.cos(H),B=Math.sin(H);w.x=S*B,w.y=g*y,w.z=S*G,u.push(w.x,w.y,w.z),d.push(0,y,0),A.x=G*.5+.5,A.y=B*.5*y+.5,p.push(A.x,A.y),m++}for(let U=0;U<i;U++){let N=R+U,H=P+U;x===!0?h.push(H,H+1,N):h.push(H+1,H,N),C+=3}l.addGroup(f,C,x===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cr=class s extends qo{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var b0={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=lh(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,p;if(n&&(r=R0(s,t,r,e)),s.length>80*e){o=l=s[0],c=h=s[1];for(let m=e;m<i;m+=e)u=s[m],d=s[m+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return _s(r,a,e,o,c,p,0),a}};function lh(s,t,e,n,i){let r,a;if(i===k0(s,t,e,n)>0)for(r=t;r<e;r+=n)a=zl(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=zl(r,s[r],s[r+1],a);return a&&Ur(a,a.next)&&(Ms(a),a=a.next),a}function gi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ur(e,e.next)||he(e.prev,e,e.next)===0)){if(Ms(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _s(s,t,e,n,i,r,a){if(!s)return;!a&&r&&D0(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?E0(s,n,i,r):w0(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Ms(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=T0(gi(s),t,e),_s(s,t,e,n,i,r,2)):a===2&&A0(s,t,e,n,i,r):_s(gi(s),t,e,n,i,r,1);break}}}function w0(s){let t=s.prev,e=s,n=s.next;if(he(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=i>r?i>a?i:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&Oi(i,o,r,c,a,l,m.x,m.y)&&he(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function E0(s,t,e,n){let i=s.prev,r=s,a=s.next;if(he(i,r,a)>=0)return!1;let o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,v=o>c?o>l?o:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,f=Yo(p,m,t,e,n),E=Yo(v,g,t,e,n),_=s.prevZ,x=s.nextZ;for(;_&&_.z>=f&&x&&x.z<=E;){if(_.x>=p&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Oi(o,h,c,u,l,d,_.x,_.y)&&he(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=p&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Oi(o,h,c,u,l,d,x.x,x.y)&&he(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Oi(o,h,c,u,l,d,_.x,_.y)&&he(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=E;){if(x.x>=p&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Oi(o,h,c,u,l,d,x.x,x.y)&&he(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function T0(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Ur(i,r)&&hh(i,n,n.next,r)&&ys(i,r)&&ys(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ms(n),Ms(n.next),n=s=r),n=n.next}while(n!==s);return gi(n)}function A0(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&F0(a,o)){let c=uh(a,o);a=gi(a,a.next),c=gi(c,c.next),_s(a,t,e,n,i,r,0),_s(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function R0(s,t,e,n){let i=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=lh(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(N0(l));for(i.sort(C0),r=0;r<i.length;r++)e=P0(i[r],e);return e}function C0(s,t){return s.x-t.x}function P0(s,t){let e=I0(s,t);if(!e)return t;let n=uh(e,s);return gi(n,n.next),gi(e,e.next)}function I0(s,t){let e=t,n=-1/0,i,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let o=i,c=i.x,l=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Oi(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),ys(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&L0(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function L0(s,t){return he(s.prev,s,t.prev)<0&&he(t.next,s,s.next)<0}function D0(s,t,e,n){let i=s;do i.z===0&&(i.z=Yo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,U0(i)}function U0(s){let t,e,n,i,r,a,o,c,l=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(a>1);return s}function Yo(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function N0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Oi(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function F0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!O0(s,t)&&(ys(s,t)&&ys(t,s)&&z0(s,t)&&(he(s.prev,s,t.prev)||he(s,t.prev,t))||Ur(s,t)&&he(s.prev,s,s.next)>0&&he(t.prev,t,t.next)>0)}function he(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ur(s,t){return s.x===t.x&&s.y===t.y}function hh(s,t,e,n){let i=nr(he(s,t,e)),r=nr(he(s,t,n)),a=nr(he(e,n,s)),o=nr(he(e,n,t));return!!(i!==r&&a!==o||i===0&&er(s,e,t)||r===0&&er(s,n,t)||a===0&&er(e,s,n)||o===0&&er(e,t,n))}function er(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function nr(s){return s>0?1:s<0?-1:0}function O0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&hh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ys(s,t){return he(s.prev,s,s.next)<0?he(s,t,s.next)>=0&&he(s,s.prev,t)>=0:he(s,t,s.prev)<0||he(s,s.next,t)<0}function z0(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function uh(s,t){let e=new Zo(s.i,s.x,s.y),n=new Zo(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function zl(s,t,e,n){let i=new Zo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ms(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Zo(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function k0(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Ss=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];kl(t),Bl(n,t);let a=t.length;e.forEach(kl);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,Bl(n,e[c]);let o=b0.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function kl(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Bl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Zi=class s extends _e{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new z,d=new z,p=[],m=[],v=[],g=[];for(let f=0;f<=n;f++){let E=[],_=f/n,x=0;f===0&&a===0?x=.5/e:f===n&&c===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){let A=R/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(A+x,1-_),E.push(l++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){let _=h[f][E+1],x=h[f][E],R=h[f+1][E],A=h[f+1][E+1];(f!==0||a>0)&&p.push(_,x,A),(f!==n-1||c<Math.PI)&&p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ir(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function B0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ji=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jo=class extends Ji{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fc,endingEnd:Fc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oc:r=t,o=2*e-n;break;case zc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Oc:a=t,c=2*n-e;break;case zc:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(i-e),v=m*m,g=v*m,f=-d*g+2*d*v-d*m,E=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,_=(-1-p)*g+(1.5+p)*v+.5*m,x=p*g-p*v;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+E*a[l+R]+_*a[c+R]+x*a[u+R];return r}},$o=class extends Ji{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Ko=class extends Ji{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},rn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ir(e,this.TimeBufferType),this.values=ir(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ir(t.times,Array),values:ir(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case lr:e=this.InterpolantFactoryMethodDiscrete;break;case bo:e=this.InterpolantFactoryMethodLinear;break;case oa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return bo;case this.InterpolantFactoryMethodSmooth:return oa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&B0(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===oa,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let v=e[u+m];if(v!==e[d+m]||v!==e[p+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=bo;var vi=class extends rn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=lr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends rn{};jo.prototype.ValueTypeName="color";var Qo=class extends rn{};Qo.prototype.ValueTypeName="number";var tc=class extends Ji{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let h=l+o;l!==h;l+=4)fn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Pr=class extends rn{InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}};Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends rn{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=lr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends rn{};ec.prototype.ValueTypeName="vector";var nc=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},H0=new nc,ic=class{constructor(t){this.manager=t!==void 0?t:H0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var fc="\\[\\]\\.:\\/",V0=new RegExp("["+fc+"]","g"),pc="[^"+fc+"]",G0="[^"+fc.replace("\\.","")+"]",W0=/((?:WC+[\/:])*)/.source.replace("WC",pc),X0=/(WCOD+)?/.source.replace("WCOD",G0),q0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pc),Y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pc),Z0=new RegExp("^"+W0+X0+q0+Y0+"$"),J0=["material","materials","bones","map"],sc=class{constructor(t,e,n){let i=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(V0,"")}static parseTrackName(t){let e=Z0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);J0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[i];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=sc;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);var an="0.2.2";var Qn={index:null,buf:null,geo:{}};async function dh(s){let[t,e]=await Promise.all([fetch("assets/models.json?v="+an).then(n=>n.json()),fh("assets/models.bin?v="+an,s)]);Qn.index=t,Qn.buf=e}async function fh(s,t){let e=await fetch(s);if(!e.ok)throw new Error(s+" "+e.status);if(!t||!e.body||!e.headers.get("content-length"))return e.arrayBuffer();let n=+e.headers.get("content-length"),i=e.body.getReader(),r=[],a=0;for(;;){let{done:l,value:h}=await i.read();if(l)break;r.push(h),a+=h.length,t(Math.min(.99,a/n))}let o=new Uint8Array(a),c=0;for(let l of r)o.set(l,c),c+=l.length;return t(1),o.buffer}function mc(s,t){let e=Qn.index[s],n=e.parts.find(r=>r.name===t)||e.parts[0],i=Qn.buf;return{part:n,pos:new Float32Array(i,n.pos,n.n*3),nrm:new Int8Array(i,n.nrm,n.n*4),col:new Uint8Array(i,n.col,n.n*4),idx:new Uint16Array(i,n.idx,n.i)}}function _i(s,t){let e=s+"/"+t;if(Qn.geo[e])return Qn.geo[e];let n=mc(s,t),i=new _e;return i.setAttribute("position",new Wt(n.pos,3)),i.setAttribute("normal",new Wt(n.nrm,4,!0)),i.setAttribute("col",new Wt(n.col,4,!0)),i.setIndex(new Wt(n.idx,1)),i.computeBoundingSphere(),Qn.geo[e]=i,i}function Es(s){return Qn.index[s]}async function ph(){return fetch("assets/routes.json?v="+an).then(s=>s.json())}async function mh(s){let[t,e,n]=await Promise.all([fh("assets/routes/"+s+".bin?v="+an),fetch("assets/routes/"+s+".bld.json?v="+an).then(i=>i.ok?i.json():[]).catch(()=>[]),fetch("assets/routes/"+s+".ter.bin?v="+an).then(i=>i.ok?i.arrayBuffer():null).catch(()=>null)]);return{bin:t,bld:e,ter:n}}var Nr=class{constructor(t,e){this.meta=t,this.n=t.n,this.closed=!!t.closed;let n=0,i=r=>{let a=new Float32Array(e,n,r);return n+=r*4,a};this.px=i(this.n),this.py=i(this.n),this.pz=i(this.n),this.hl=i(this.n),this.hr=i(this.n),this.gl=i(this.n*t.ground.length),this.gr=i(this.n*t.ground.length),this.flags=new Uint8Array(e,n,this.n),n+=this.n,this.tx=new Float32Array(this.n),this.tz=new Float32Array(this.n),this.slope=new Float32Array(this.n),this.curv=new Float32Array(this.n);for(let r=0;r<this.n;r++){let a=Math.max(0,r-1),o=Math.min(this.n-1,r+1),c=this.px[o]-this.px[a],l=this.pz[o]-this.pz[a],h=Math.hypot(c,l)||1;c/=h,l/=h,this.tx[r]=c,this.tz[r]=l,this.slope[r]=(this.py[o]-this.py[a])/h}for(let r=0;r<this.n;r++){let a=Math.max(0,r-3),o=Math.min(this.n-1,r+3),c=this.tx[a]*this.tz[o]-this.tz[a]*this.tx[o],l=Math.max(.001,(o-a)*2);this.curv[r]=Math.asin(Math.max(-1,Math.min(1,c)))/l}this.length=(this.n-1)*2,this.ramps=t.ramps||[],this.rampIdx=new Int16Array(this.n).fill(-1);for(let r=0;r<this.ramps.length;r++){let a=this.ramps[r],o=Math.max(0,Math.floor(a.s/2)-1),c=Math.min(this.n-1,Math.ceil((a.s+a.len)/2)+1);for(let l=o;l<=c;l++)this.rampIdx[l]=r}}lx(t){return this.tz[t]}lz(t){return-this.tx[t]}query(t,e,n,i){let r=this.n,a=n<0?0:n>=r-1?r-2:n;for(let K=0;K<400;K++){let et=this.px[a],ot=this.pz[a],_t=this.px[a+1]-et,Pt=this.pz[a+1]-ot,X=_t*_t+Pt*Pt||1,it=((t-et)*_t+(e-ot)*Pt)/X;if(it<0&&a>0){a--;continue}if(it>1&&a<r-2){a++;continue}break}let o=this.px[a],c=this.pz[a],l=this.px[a+1]-o,h=this.pz[a+1]-c,u=Math.hypot(l,h)||1,d=((t-o)*l+(e-c)*h)/(u*u);d<0?d=0:d>1&&(d=1);let p=h/u,m=-l/u,v=o+l*d,g=c+h*d,f=(t-v)*p+(e-g)*m,E=this.py[a]+(this.py[a+1]-this.py[a])*d,_=this.hl[a]+(this.hl[a+1]-this.hl[a])*d,x=this.hr[a]+(this.hr[a+1]-this.hr[a])*d,R=(this.py[a+1]-this.py[a])/u,A=E,w=R,C=0,S=f>=0?f-_:-f-x,y=0;if(S>0){y=1;let K=S<.4?S/.4:1;A+=.15*K,S<.4&&(C=(f>=0?1:-1)*.15/.4),S>3&&(y=2)}let P=(a+d)*2,U=this.rampIdx[a];if(U>=0){let K=this.ramps[U],et=P-K.s,ot=f-K.d;if(et>=0&&et<=K.len&&ot>=-K.w/2&&ot<=K.w/2){let _t=K.h/K.len;A+=et*_t,w+=_t}}let N=l/u,H=h/u,G=C*H-m*w,B=m*N-p*H,Y=p*w-C*N;B<0&&(G=-G,B=-B,Y=-Y);let L=Math.hypot(G,B,Y)||1;return i.i=a,i.t=d,i.s=P,i.d=f,i.y=A,i.nx=G/L,i.ny=B/L,i.nz=Y/L,i.hl=_,i.hr=x,i.off=y,i.lx=p,i.lz=m,i.fx=N,i.fz=H,i}at(t,e,n){let i=t/2;i<0&&(i=0),i>this.n-1.001&&(i=this.n-1.001);let r=i|0,a=i-r,o=this.px[r],c=this.pz[r],l=this.px[r+1],h=this.pz[r+1],u=Math.hypot(l-o,h-c)||1,d=(l-o)/u,p=(h-c)/u,m=p,v=-d;return n.x=o+(l-o)*a+m*e,n.z=c+(h-c)*a+v*e,n.y=this.py[r]+(this.py[r+1]-this.py[r])*a,n.fx=d,n.fz=p,n.lx=m,n.lz=v,n.i=r,n.hl=this.hl[r],n.hr=this.hr[r],n}};var Jt={uSun:{value:new z(.45,.75,-.48).normalize()},uSunCol:{value:new Xt(1,.94,.84)},uSky:{value:new Xt(.55,.72,.95)},uGround:{value:new Xt(.42,.38,.32)},uFog:{value:new Xt(.74,.82,.92)},uFogNear:{value:220},uFogFar:{value:900},uTime:{value:0},uNight:{value:0}},pn=`
varying float vFog;
`,Ts=`
  vFog = clamp((length(mv.xyz) - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
`,on=`
uniform vec3 uSun; uniform vec3 uSunCol; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uFog;
uniform float uFogNear; uniform float uFogFar; uniform float uTime; uniform float uNight;
`,gc=`
vec3 light(vec3 n) {
  float d = max(dot(n, uSun), 0.0);
  vec3 amb = mix(uGround, uSky, n.y * 0.5 + 0.5) * 0.55;
  return amb + uSunCol * d * (1.0 - uNight * 0.85);
}
`;function gh(){return new de({uniforms:Jt,vertexShader:on+pn+`
attribute vec4 col;
varying vec3 vCol; varying vec3 vN;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vN = normalize(mat3(modelMatrix) * normal);
  vCol = col.rgb;
  float lightFlag = step(0.2, col.a) * (1.0 - step(0.3, col.a));
  vCol += lightFlag * vec3(1.0, 0.9, 0.6) * uNight * 2.0;
  `+Ts+`
}`,fragmentShader:on+gc+pn+`
varying vec3 vCol; varying vec3 vN;
void main() {
  vec3 c = vCol * light(normalize(vN));
  gl_FragColor = vec4(mix(c, uFog, vFog), 1.0);
}`})}function vh(){return new de({uniforms:Jt,vertexShader:on+pn+`
attribute vec4 ds;   // x = d, y = s, z = half width left, w = half width right
varying vec4 vDs; varying vec3 vWp;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vDs = ds; vWp = wp.xyz;
  `+Ts+`
}`,fragmentShader:on+pn+`
varying vec4 vDs; varying vec3 vWp;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  float d = vDs.x, s = vDs.y, hl = vDs.z, hr = vDs.w;
  float n = hash(floor(vWp.xz * 12.0)) * 0.035 + (sin(vWp.x * 0.21 + sin(vWp.z * 0.13) * 2.0) * 0.5 + 0.5) * 0.03;
  vec3 c = vec3(0.24, 0.245, 0.26) + n;
  // tyre-worn racing line (darker) in each lane
  float hw = d >= 0.0 ? hl : hr;
  float ad = abs(d);
  // lane dashes: lanes ~3.6 m
  float lanes = max(1.0, floor(hw / 3.6 + 0.5));
  float lw = hw / lanes;
  float fw = fwidth(d) * 1.2 + 0.02;
  float lane = abs(fract(ad / lw + 0.5) - 0.5) * lw;            // distance to the nearest lane line
  float dash = step(0.45, fract(s / 9.0));
  float inner = step(lw * 0.5, ad) * (1.0 - step(hw - lw * 0.5, ad));
  c = mix(c, vec3(0.92), (1.0 - smoothstep(0.07, 0.07 + fw, lane)) * dash * inner);
  // centre double line
  float cl = abs(ad - 0.18);
  c = mix(c, vec3(0.95, 0.78, 0.2), 1.0 - smoothstep(0.07, 0.07 + fw, cl));
  // edge lines
  float el = abs(ad - (hw - 0.45));
  c = mix(c, vec3(0.93), 1.0 - smoothstep(0.1, 0.1 + fw, el));
  // kerb: red / white blocks
  float kerb = step(hw, ad) * (1.0 - step(hw + 0.45, ad));
  vec3 kc = mod(floor(s / 2.0), 2.0) < 1.0 ? vec3(0.8, 0.12, 0.1) : vec3(0.92);
  c = mix(c, kc, kerb);
  // pavement: light stone slabs
  float pav = step(hw + 0.45, ad);
  vec2 sl = fract(vec2(s, ad) / 1.2);
  float joint = step(0.94, max(sl.x, sl.y));
  vec3 pc = vec3(0.68, 0.64, 0.58) * (0.95 + hash(floor(vec2(s, ad) / 1.2)) * 0.1) * (1.0 - joint * 0.25);
  c = mix(c, pc, pav);
  float sunk = max(uSun.y, 0.0);
  vec3 lit = c * (mix(uGround, uSky, 0.8) * 0.55 + uSunCol * sunk * (1.0 - uNight * 0.85));
  // street lamps at night: warm pools of light every 36 m, alternating sides (world.js places the lamps)
  if (uNight > 0.5) {
    float sL = mod(s, 36.0), sR = mod(s - 18.0, 36.0);
    float pl = exp(-pow(min(sL, 36.0 - sL) / 7.0, 2.0)) * exp(-pow((d - hl) / 7.0, 2.0));
    float pr = exp(-pow(min(sR, 36.0 - sR) / 7.0, 2.0)) * exp(-pow((d + hr) / 7.0, 2.0));
    lit += c * vec3(1.0, 0.78, 0.45) * (pl + pr) * 2.2 * uNight;
  }
  // a soft sheen toward the sun (wet-looking asphalt at grazing angles), cheap
  vec3 v = normalize(cameraPosition - vWp);
  float sh = pow(max(dot(reflect(-v, vec3(0.0, 1.0, 0.0)), uSun), 0.0), 24.0) * 0.25 * (1.0 - pav);
  lit += sh * uSunCol;
  gl_FragColor = vec4(mix(lit, uFog, vFog), 1.0);
}`,extensions:{derivatives:!0}})}function xh(){return new de({uniforms:Jt,vertexShader:on+pn+`
attribute vec4 col; attribute vec2 wuv;
varying vec3 vCol; varying vec3 vN; varying vec2 vUv;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vN = normalize(mat3(modelMatrix) * normal);
  vCol = col.rgb; vUv = wuv;
  `+Ts+`
}`,fragmentShader:on+gc+pn+`
varying vec3 vCol; varying vec3 vN; varying vec2 vUv;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec3 n = normalize(vN);
  vec3 c = vCol;
  float wall = 1.0 - step(0.5, n.y);
  vec2 cell = vec2(vUv.x / 3.4, (vUv.y - 1.2) / 3.2);
  vec2 f = fract(cell);
  float win = step(0.22, f.x) * step(f.x, 0.78) * step(0.25, f.y) * step(f.y, 0.8) * step(0.0, cell.y) * step(0.6, vUv.y);
  float h = hash(floor(cell) + floor(vCol.rg * 50.0));
  vec3 glass = mix(vec3(0.16, 0.22, 0.3), vec3(0.3, 0.42, 0.55), h);
  c = mix(c, glass, win * wall);
  vec3 lit = c * light(n);
  // lit windows at night
  lit += win * wall * step(0.45, h) * uNight * vec3(1.0, 0.82, 0.5) * 0.9;
  gl_FragColor = vec4(mix(lit, uFog, vFog), 1.0);
}`})}function Fr(s,t,e){return new de({uniforms:Object.assign({uPaint:{value:new Xt(s||13639712)},uRoof:{value:new Xt(t>=0?t:s||13639712)},uRoofY:{value:e||99},uBrake:{value:0}},Jt),vertexShader:on+pn+`
attribute vec4 col;
uniform vec3 uPaint; uniform vec3 uRoof; uniform float uBrake;
varying vec3 vCol; varying vec3 vN; varying vec3 vWp; varying float vKind; varying float vY; varying float vSh;
void main() {
  vY = position.y; vSh = col.r * 1.25;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vN = normalize(mat3(modelMatrix) * normal);
  vWp = wp.xyz;
  float a = col.a;
  vKind = a > 0.9 ? 3.0 : a > 0.7 ? 4.0 : a > 0.45 ? 2.0 : a > 0.2 ? 1.0 : 0.0;   // 4: accent parts in the roof colour
  vCol = a > 0.9 ? uPaint * col.r * 1.25 : a > 0.7 ? uRoof * col.r * 1.25 : col.rgb;
  if (vKind > 0.5 && vKind < 1.5) {     // lights: red at the back glow when braking
    bool rear = position.z < 0.0;
    vCol = rear ? vec3(0.8, 0.05, 0.03) * (1.0 + uBrake * 2.5) : vec3(1.0, 0.97, 0.85) * (1.0 + uNight * 1.5);
  }
  `+Ts+`
}`,fragmentShader:on+gc+pn+`
uniform vec3 uRoof; uniform float uRoofY;
varying vec3 vCol; varying vec3 vN; varying vec3 vWp; varying float vKind; varying float vY; varying float vSh;
void main() {
  vec3 n = normalize(vN);
  vec3 base = vKind > 2.5 && vKind < 3.5 && vY > uRoofY ? uRoof * vSh : vCol;   // two-tone: the roof panel
  vec3 v = normalize(cameraPosition - vWp);
  vec3 c = base * light(n);
  float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
  vec3 r = reflect(-v, n);
  vec3 env = mix(uGround * 0.6, uSky * 1.1, smoothstep(-0.15, 0.25, r.y));
  float spec = pow(max(dot(r, uSun), 0.0), 60.0);
  if (vKind > 2.5) {         // paint (varyings are not exact: compare with ranges): clear coat
    c = c + env * (0.12 + fres * 0.45) + uSunCol * spec * 1.2;
  } else if (vKind > 1.5) {  // glass
    c = vec3(0.05, 0.06, 0.08) + env * (0.35 + fres * 0.5) + uSunCol * spec * 1.5;
  } else if (vKind > 0.5) {
    c = vCol;
  } else {
    c += uSunCol * spec * 0.2;
  }
  gl_FragColor = vec4(mix(c, uFog, vFog), 1.0);
}`})}function _h(){return new de({uniforms:Jt,depthWrite:!1,side:Te,vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:on+`
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = max(d.y, 0.0);
  vec3 top = mix(vec3(0.22, 0.45, 0.85), vec3(0.02, 0.03, 0.08), uNight);
  vec3 c = mix(uFog, top, pow(h, 0.55));
  float s = max(dot(d, uSun), 0.0);
  c += uSunCol * (pow(s, 600.0) * 3.0 + pow(s, 12.0) * 0.25) * (1.0 - uNight);
  // a few far hills on the horizon (the other shore across the strait, to the north)
  gl_FragColor = vec4(c, 1.0);
}`})}function yh(){return new de({uniforms:Jt,vertexShader:on+pn+`
varying vec3 vWp;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vWp = wp.xyz; vec4 mv = viewMatrix * wp; gl_Position = projectionMatrix * mv; `+Ts+" }",fragmentShader:on+pn+`
varying vec3 vWp;
void main() {
  vec2 p = vWp.xz;
  float w = sin(p.x * 0.11 + uTime * 0.9) * 0.5 + sin(p.y * 0.07 - uTime * 0.7) * 0.5 + sin((p.x + p.y) * 0.23 + uTime * 1.6) * 0.25;
  vec3 n = normalize(vec3(w * 0.08, 1.0, cos(p.x * 0.09 + uTime) * 0.06));
  vec3 v = normalize(cameraPosition - vWp);
  float fres = pow(1.0 - max(dot(n, v), 0.0), 4.0);
  vec3 deep = mix(vec3(0.02, 0.22, 0.36), vec3(0.0, 0.03, 0.06), uNight);
  vec3 c = mix(deep, uSky * 0.75, fres * 0.35);
  float spec = pow(max(dot(reflect(-v, n), uSun), 0.0), 120.0);
  c += uSunCol * spec * 2.0 * (1.0 - uNight);
  // lighter fog on the water than on land, so the sea keeps its colour and the horizon line shows
  gl_FragColor = vec4(mix(c, uFog, vFog * 0.55), 1.0);
}`})}function Or(){return new de({uniforms:{uAlpha:{value:1}},transparent:!0,depthWrite:!1,blending:ms,vertexShader:"attribute vec4 col; varying vec4 vCol; void main() { vCol = col; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uAlpha; varying vec4 vCol; void main() { gl_FragColor = vec4(vCol.rgb * vCol.a * uAlpha, 1.0); }"})}function Mh(s){return new de({uniforms:{uScale:{value:600},uNight:Jt.uNight},transparent:!0,depthWrite:!1,blending:s?ms:qn,vertexShader:`attribute vec4 col; attribute float size; uniform float uScale; varying vec4 vCol;
void main() { vCol = col; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * uScale / max(1.0, -mv.z); }`,fragmentShader:"uniform float uNight; varying vec4 vCol; void main() { vec2 p = gl_PointCoord * 2.0 - 1.0; float r = dot(p, p); if (r > 1.0) discard; float a = vCol.a * (1.0 - r); float lum = max(vCol.r, max(vCol.g, vCol.b)); vec3 c = vCol.rgb * mix(1.0, 0.3, uNight * step(abs(vCol.r - vCol.b), 0.1)); gl_FragColor = vec4(c, a); }"})}function zr(){return new de({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:"attribute vec4 col; varying vec4 vCol; varying vec2 vUv; void main() { vCol = col; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec4 vCol; varying vec2 vUv; void main() { vec2 p = vUv * 2.0 - 1.0; float e = 1.0 - smoothstep(0.55, 1.0, max(abs(p.x), abs(p.y))); gl_FragColor = vec4(vCol.rgb, vCol.a * mix(1.0, e, step(0.5, vCol.b + 0.5) * 0.0 + 1.0)); }"})}var kr=50,ti=3.5,yi=class{constructor(){this.p=[],this.n=[],this.c=[],this.i=[],this.extra=null}get count(){return this.p.length/3}vert(t,e,n,i,r,a,o,c,l,h){return this.p.push(t,e,n),this.n.push(i*127|0,r*127|0,a*127|0,0),this.c.push(o,c,l,h||0),this.count-1}tri(t,e,n){this.i.push(t,e,n)}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}model(t,e,n,i,r,a,o,c){let l=mc(t,e),h=Math.cos(a),u=Math.sin(a),d=o||1,p=this.count;for(let m=0;m<l.part.n;m++){let v=l.pos[m*3]*d,g=l.pos[m*3+1]*d,f=l.pos[m*3+2]*d,E=l.nrm[m*4]/127,_=l.nrm[m*4+1]/127,x=l.nrm[m*4+2]/127,R=l.col[m*4],A=l.col[m*4+1],w=l.col[m*4+2];c&&(R=R*c[0]|0,A=A*c[1]|0,w=w*c[2]|0),this.p.push(n+v*h+f*u,i+g,r-v*u+f*h),this.n.push(Math.round((E*h+x*u)*127),Math.round(_*127),Math.round((-E*u+x*h)*127),0),this.c.push(Math.min(255,R),Math.min(255,A),Math.min(255,w),l.col[m*4+3]===64?64:0)}for(let m=0;m<l.idx.length;m++)this.i.push(p+l.idx[m])}build(t=!0){let e=new _e;e.setAttribute("position",new Wt(new Float32Array(this.p),3)),t&&e.setAttribute("normal",new Wt(new Int8Array(this.n),4,!0)),e.setAttribute("col",new Wt(new Uint8Array(this.c),4,!0));let n=this.count>65535;if(e.setIndex(new Wt(n?new Uint32Array(this.i):new Uint16Array(this.i),1)),this.extra)for(let i in this.extra){let r=this.extra[i];e.setAttribute(i,Array.isArray(r)?new Wt(new Float32Array(r),2):r)}return e.computeBoundingSphere(),e}};function $0(s){let t=s>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var Sh=[[236,234,226],[240,236,224],[230,218,192],[222,206,176],[214,190,160],[228,226,220],[205,214,220],[232,206,196]],Br=class{constructor(t,e,n,i,r){this.scene=t,this.track=e,this.chunks=[],this.mats={world:gh(),road:vh(),bld:xh()},this.theme=i||{};let a=Math.ceil((e.n-1)/kr),o=[];for(let h of n||[]){let u=Math.min(a-1,Math.floor(h[0]/kr));(o[u]||(o[u]=[])).push(h)}for(let h=0;h<a;h++)this.chunks.push(this.buildChunk(h,o[h]||[]));this.tiles=r?this.buildTerrain(r):[];let c=!1;for(let h=0;h<e.n;h++)if(e.flags[h]&3){c=!0;break}if(c){let h=new $n(3e4,3e4,1,1);h.rotateX(-Math.PI/2),this.sea=new se(h,yh()),this.sea.position.y=0,this.sea.frustumCulled=!1,this.sea.renderOrder=-1,t.add(this.sea)}let l=new se(new Zi(5e3,16,8),_h());l.frustumCulled=!1,l.renderOrder=10,this.sky=l,t.add(l)}buildChunk(t,e){let n=this.track,i=n.n,r=t*kr,a=Math.min(i-1,r+kr),o=new yi,c=new yi,l=new yi,h=new yi,u=[],d=$0(t*7919+17),p=9,m=n.meta.ground,v=m.length;for(let w=r;w<=a;w++){let C=n.px[w],S=n.py[w],y=n.pz[w],P=n.tz[w],U=-n.tx[w],N=n.hl[w],H=n.hr[w],G=w*2,B=[N+ti,N+.4,N,N*.5,0,-H*.5,-H,-H-.4,-H-ti],Y=[.15,.15,0,0,0,0,0,.15,.15];for(let L=0;L<p;L++){let K=B[L];o.vert(C+P*K,S+Y[L],y+U*K,0,1,0,0,0,0,0),u.push(K,G,N,H)}if(w>r){let L=(w-r-1)*p,K=(w-r)*p;for(let et=0;et<p-1;et++)o.quad(L+et,L+et+1,K+et+1,K+et)}for(let L=0;L<2;L++){let K=L?-1:1,et=L?H:N,ot=L?n.gr:n.gl,_t=c.count,Pt=this.innerLimit(w,L);for(let X=-1;X<v;X++){let it=X<0?et+ti:et+m[X];it=Math.min(it,Math.max(et+ti+.5+X,Pt));let ht=X<0?S+.15:ot[w*v+X],rt,Tt,It,Et=ht<1.5&&n.flags[w]&(L?2:1),Vt=(Math.sin(C*.05+X)+Math.sin(y*.07-X*2))*.5;ht<-.5?(rt=190,Tt=175,It=140):Et?(rt=222+Vt*10,Tt=205+Vt*10,It=160):X<=0?(rt=150+Vt*8,Tt=140+Vt*8,It=118):(rt=104+Vt*22,Tt=132+Vt*18,It=70+Vt*8),this.theme.dry&&ht>=1.5&&(rt+=30,Tt+=10,It+=5),c.vert(C+P*it*K,ht,y+U*it*K,0,1,0,rt,Tt,It)}if(w>r){let X=(v+1)*2,it=_t-X;for(let ht=0;ht<v;ht++)L?c.quad(it+ht,_t+ht,_t+ht+1,it+ht+1):c.quad(it+ht,it+ht+1,_t+ht+1,_t+ht)}}}for(let w=0;w<2;w++){let C=w?-1:1,S=0,y=0,P=0,U=0,N=0,H=!1;for(let G=r;G<=a;G++){if(n.flags[G]&4){H=!1;continue}let B=w?n.hr[G]:n.hl[G],Y=n.tz[G],L=-n.tx[G],K=(B+ti-.25)*C,et=n.px[G]+Y*K,ot=n.pz[G]+L*K,_t=n.py[G]+.15,Pt=-Y*C,X=-L*C;if(H){let ht=Math.abs(n.curv[G])>.012&&G&1,rt=ht?205:232,Tt=ht?36:232,It=ht?28:226,Et=.25,Vt=[[S-U*Et,P,y-N*Et],[S-U*Et,P+.95,y-N*Et],[S+U*Et,P+.95,y+N*Et],[S+U*Et,P,y+N*Et]],Ot=[[et-Pt*Et,_t,ot-X*Et],[et-Pt*Et,_t+.95,ot-X*Et],[et+Pt*Et,_t+.95,ot+X*Et],[et+Pt*Et,_t,ot+X*Et]],ae=[[0,1,Pt,.2,X,rt,Tt,It],[1,2,0,1,0,200,200,196],[2,3,-Pt,0,-X,150,150,150]];for(let I of ae){let ye=c.vert(Vt[I[0]][0],Vt[I[0]][1],Vt[I[0]][2],I[2],I[3],I[4],I[5],I[6],I[7]),Bt=c.vert(Vt[I[1]][0],Vt[I[1]][1],Vt[I[1]][2],I[2],I[3],I[4],I[5],I[6],I[7]),kt=c.vert(Ot[I[1]][0],Ot[I[1]][1],Ot[I[1]][2],I[2],I[3],I[4],I[5],I[6],I[7]),Ct=c.vert(Ot[I[0]][0],Ot[I[0]][1],Ot[I[0]][2],I[2],I[3],I[4],I[5],I[6],I[7]);w?c.quad(ye,Bt,kt,Ct):c.quad(ye,Ct,kt,Bt)}}S=et,y=ot,P=_t,U=Pt,N=X,H=!0}}let g=e.length>4;for(let w=r;w<a;w++){if(n.flags[w]&4)continue;let C=w*2,S=n.tz[w],y=-n.tx[w],P=Math.atan2(n.tx[w],n.tz[w]);for(let U=0;U<2;U++){let N=U?-1:1,H=U?n.hr[w]:n.hl[w],G=n.flags[w]&(U?2:1);if(w%18===(U?9:0)){let Y=(H+1.6)*N;l.model("light_modern","body",n.px[w]+S*Y,n.py[w]+.15,n.pz[w]+y*Y,P+(U?-Math.PI/2:Math.PI/2),1)}let B=G||this.theme.palms?7:11;if(w%B===(U?3:0)&&d()<.85){let Y=ti+3+d()*6,L=(H+Y)*N,K=n.px[w]+S*L,et=n.pz[w]+y*L,ot=this.groundAt(w,U,Y)-.15;if(ot>.5&&H+Y+4<this.innerLimit(w,U)){let _t=G?.3:this.theme.palms?.15:.05,Pt=d(),X=Pt<_t?d()<.5?"palm_tall":"palm_detailed":Pt<_t+.35?"tree_oak":Pt<_t+.7?"tree_fat":"tree",it=X[0]==="p"?.55+d()*.12:X==="tree"?.36+d()*.1:X==="bush"?.9+d()*.5:.48+d()*.14;l.model(X,"body",K,ot,et,d()*6.28,it)}}if(this.theme.rocks&&w%9===4&&d()<.6){let Y=ti+8+d()*20,L=(H+Y)*N,K=this.groundAt(w,U,Y)-.4;K>.3&&H+Y+6<this.innerLimit(w,U)&&l.model(d()<.5?"rock_a":"rock_tall","body",n.px[w]+S*L,K,n.pz[w]+y*L,d()*6.28,.7+d())}if(w%160===80&&U===(t&1)){let Y=(H+ti+4)*N;l.model("billboard","body",n.px[w]+S*Y,n.py[w],n.pz[w]+y*Y,P+(U?-Math.PI/2:Math.PI/2),1.3)}}(w===8||w===n.n-12&&!n.closed)&&this.gantry(c,w)}for(let w of n.ramps){let C=Math.floor(w.s/2);C<r||C>=a||this.ramp(c,w)}for(let w of e)this.building(h,w);let f={i0:r,i1:a,meshes:[]};o.extra={ds:new Wt(new Float32Array(u),4)};let E=(w,C,S)=>{if(!w.count)return;let y=new se(w.build(S!=="road"),C);y.matrixAutoUpdate=!1,y.updateMatrix(),y.userData.kind=S,this.scene.add(y),f.meshes.push(y)};E(o,this.mats.road,"road"),E(c,this.mats.world,"core"),E(l,this.mats.world,"detail"),E(h,this.mats.bld,"bld");let _=0,x=0,R=0,A=0;for(let w=r;w<=a;w+=5)_+=n.px[w],x+=n.py[w],R+=n.pz[w],A++;f.cx=_/A,f.cy=x/A,f.cz=R/A,f.r=0;for(let w of f.meshes)f.r=Math.max(f.r,w.geometry.boundingSphere.radius+w.geometry.boundingSphere.center.distanceTo(new z(f.cx,f.cy,f.cz)));return f}buildTerrain(t){let e=new Float32Array(t,0,5),n=e[0],i=e[1],r=e[2],a=e[3]|0,o=e[4]|0,c=new Int16Array(t,20,a*o),l=(p,m)=>c[m*a+p],h=[],u=16,d=this.theme.dry;for(let p=0;p<o-1;p+=u)for(let m=0;m<a-1;m+=u){let v=new yi,g=new Map,f=(x,R)=>{let A=R*a+x,w=g.get(A);if(w!==void 0)return w;let C=l(x,R)/10,S=(l(Math.min(a-1,x+1),R)-l(Math.max(0,x-1),R))/10,y=(l(x,Math.min(o-1,R+1))-l(x,Math.max(0,R-1)))/10,P=l(Math.min(a-1,x+1),R)===-32768||l(Math.max(0,x-1),R)===-32768?0:S/(2*r),U=l(x,Math.min(o-1,R+1))===-32768||l(x,Math.max(0,R-1))===-32768?0:y/(2*r),N=Math.hypot(P,1,U),H=1/N,G=(Math.sin(x*.9)+Math.sin(R*1.3))*.5,B,Y,L;return C<.5?(B=196,Y=182,L=146):C<3?(B=220+G*8,Y=204+G*8,L=160):H<.8?(B=128+G*10,Y=116+G*8,L=96):(B=100+G*18,Y=128+G*16,L=68+G*6),d&&C>=3&&(B+=34,Y+=12,L+=6),w=v.vert(n+x*r,C,i+R*r,-P/N,H,-U/N,B,Y,L),g.set(A,w),w};for(let x=p;x<Math.min(o-1,p+u);x++)for(let R=m;R<Math.min(a-1,m+u);R++){if(l(R,x)===-32768||l(R+1,x)===-32768||l(R,x+1)===-32768||l(R+1,x+1)===-32768)continue;let A=f(R,x),w=f(R+1,x),C=f(R+1,x+1),S=f(R,x+1);v.quad(A,S,C,w)}if(!v.count)continue;let E=new se(v.build(!0),this.mats.world);E.matrixAutoUpdate=!1,E.updateMatrix(),this.scene.add(E);let _=E.geometry.boundingSphere;h.push({mesh:E,cx:_.center.x,cz:_.center.z,r:_.radius})}return h}groundAt(t,e,n){let i=this.track,r=i.meta.ground,a=r.length,o=e?i.gr:i.gl;if(n<=r[0])return i.py[t]+.15;let c=1;for(;c<a-1&&r[c]<n;)c++;let l=Math.min(1,(n-r[c-1])/(r[c]-r[c-1]));return o[t*a+c-1]+(o[t*a+c]-o[t*a+c-1])*l}innerLimit(t,e){let n=this.track,i=0;for(let r=Math.max(0,t-12);r<=Math.min(n.n-1,t+12);r++){let a=n.curv[r];(a>0&&e===1||a<0&&e===0)&&(i=Math.max(i,Math.abs(a)))}return i>1e-4?.7/i:1e9}gantry(t,e){let n=this.track,i=n.tz[e],r=-n.tx[e],a=n.tx[e],o=n.tz[e],c=n.px[e],l=n.py[e],h=n.pz[e],u=n.hl[e]+1.2,d=n.hr[e]+1.2,p=7.5,m=(_,x,R,A,w,C,S,y,P,U,N)=>{let H=-N,G=U,B=[];for(let L=0;L<8;L++){let K=L&1?A:-A,et=L&2?w:0,ot=L&4?C:-C;B.push([_+U*K+H*ot,x+et,R+N*K+G*ot])}let Y=[[0,1,3,2,0,-1,0],[4,6,7,5,0,1,0],[0,4,5,1,0,0,-1],[2,3,7,6,0,0,1],[0,2,6,4,-1,0,0],[1,5,7,3,1,0,0]];for(let L of Y){let K=[];for(let et=0;et<4;et++){let ot=B[L[et]];K.push(t.vert(ot[0],ot[1],ot[2],L[4]*U+L[6]*H,L[5],L[4]*N+L[6]*G,S,y,P))}t.quad(K[0],K[3],K[2],K[1])}};m(c+i*u,l,h+r*u,.45,p,.45,40,40,46,i,r),m(c-i*d,l,h-r*d,.45,p,.45,40,40,46,i,r);let v=(u+d)/2,g=c+i*(u-d)/2,f=h+r*(u-d)/2,E=Math.max(8,Math.round(v*2/1.2));for(let _=0;_<E;_++){let x=-v+(_+.5)*(2*v/E),R=_&1;m(g+i*x,l+p-1.6,f+r*x,v/E,.8,.3,R?20:240,R?20:240,R?24:240,i,r),m(g+i*x,l+p-.8,f+r*x,v/E,.8,.3,R?240:20,R?240:20,R?240:24,i,r)}m(g,l+p,f,v+.5,.35,.5,210,40,40,i,r)}ramp(t,e){let n=this.track,i={},r=6,a=[];for(let p=0;p<=r;p++){let m=p/r*e.len;n.at(e.s+m,e.d,i);let v=e.h*p/r;a.push({x:i.x,y:i.y+v+.02,z:i.z,lx:i.lx,lz:i.lz,by:i.y,h:v})}let o=e.w/2;for(let p=0;p<r;p++){let m=a[p],v=a[p+1],g=p&1,f=g?30:245,E=g?30:200,_=30,x=t.vert(m.x+m.lx*o,m.y,m.z+m.lz*o,0,1,0,f,E,_),R=t.vert(m.x-m.lx*o,m.y,m.z-m.lz*o,0,1,0,f,E,_),A=t.vert(v.x-v.lx*o,v.y,v.z-v.lz*o,0,1,0,f,E,_),w=t.vert(v.x+v.lx*o,v.y,v.z+v.lz*o,0,1,0,f,E,_);t.quad(x,R,A,w);for(let C of[1,-1]){let S=t.vert(m.x+m.lx*o*C,m.by,m.z+m.lz*o*C,m.lx*C,0,m.lz*C,120,120,125),y=t.vert(m.x+m.lx*o*C,m.y,m.z+m.lz*o*C,m.lx*C,0,m.lz*C,120,120,125),P=t.vert(v.x+v.lx*o*C,v.y,v.z+v.lz*o*C,v.lx*C,0,v.lz*C,120,120,125),U=t.vert(v.x+v.lx*o*C,v.by,v.z+v.lz*o*C,v.lx*C,0,v.lz*C,120,120,125);C>0?t.quad(S,y,P,U):t.quad(S,U,P,y)}}let c=a[r],l=t.vert(c.x+c.lx*o,c.by,c.z+c.lz*o,n.tx[0],0,n.tz[0],90,90,95),h=t.vert(c.x-c.lx*o,c.by,c.z-c.lz*o,n.tx[0],0,n.tz[0],90,90,95),u=t.vert(c.x-c.lx*o,c.y,c.z-c.lz*o,n.tx[0],0,n.tz[0],90,90,95),d=t.vert(c.x+c.lx*o,c.y,c.z+c.lz*o,n.tx[0],0,n.tz[0],90,90,95);t.quad(l,d,u,h)}building(t,e){let[,n,i,r]=e,a=[];for(let f=0;f<r.length;f+=2)a.push(new Yt(r[f],r[f+1]));if(a.length<3)return;Ss.isClockWise(a)&&a.reverse();let o=Sh[Math.abs(Math.round(r[0]*3+r[1]*7))%Sh.length],l=n>24?[196,204,212]:o,h=i-3,u=i+n;t.extra||(t.extra={wuv:[]});let d=t.extra.wuv,p=0;for(let f=0;f<a.length;f++){let E=a[f],_=a[(f+1)%a.length],x=_.x-E.x,R=_.y-E.y,A=Math.hypot(x,R);if(A<.05)continue;let w=R/A,C=-x/A,S=t.vert(E.x,h,E.y,w,0,C,l[0],l[1],l[2]),y=t.vert(_.x,h,_.y,w,0,C,l[0],l[1],l[2]),P=t.vert(_.x,u,_.y,w,0,C,l[0],l[1],l[2]),U=t.vert(E.x,u,E.y,w,0,C,l[0],l[1],l[2]);d.push(p,-3,p+A,-3,p+A,n,p,n),t.quad(S,U,P,y),t.quad(S,y,P,U),p+=A}let m=Ss.triangulateShape(a,[]),v=t.count,g=[l[0]*.86|0,l[1]*.84|0,l[2]*.8|0];for(let f of a)t.vert(f.x,u,f.y,0,1,0,g[0],g[1],g[2]),d.push(0,0);for(let f of m)t.tri(v+f[0],v+f[2],v+f[1]),t.tri(v+f[0],v+f[1],v+f[2])}finishBuildingUV(){}cull(t,e,n,i){for(let r=0;r<this.tiles.length;r++){let a=this.tiles[r];a.mesh.visible=Math.hypot(a.cx-t,a.cz-e)-a.r<n}for(let r=0;r<this.chunks.length;r++){let a=this.chunks[r],o=Math.hypot(a.cx-t,a.cz-e)-a.r;for(let c=0;c<a.meshes.length;c++){let l=a.meshes[c];l.visible=o<(l.userData.kind==="detail"?i:n)}}}dispose(){for(let t of this.chunks)for(let e of t.meshes)this.scene.remove(e),e.geometry.dispose();for(let t of this.tiles)this.scene.remove(t.mesh),t.mesh.geometry.dispose();this.sea&&(this.scene.remove(this.sea),this.sea.geometry.dispose(),this.sea.material.dispose()),this.scene.remove(this.sky),this.sky.geometry.dispose(),this.sky.material.dispose();for(let t in this.mats)this.mats[t].dispose()}};var pe={city:{model:"car_city",cls:"D",mass:1165,power:81,torque:205,rpm:6e3,gears:[3.42,1.95,1.36,1.05,.87,.73],final:4.05,cda:.71,cl:.02,mu:.98,steer:.62,nitro:3.2,drive:"f",turbo:1,cyl:3,shift:.45},hatch:{model:"car_hatch",cls:"D",mass:1235,power:96,torque:230,rpm:6200,gears:[3.42,1.95,1.36,1.05,.87,.73],final:4.05,cda:.64,cl:.03,mu:1,steer:.62,nitro:3.6,drive:"f",turbo:1,cyl:3,shift:.45},volt:{model:"car_volt",cls:"C",mass:1920,power:366,torque:510,rpm:16500,gears:[1],final:9,cda:.5,cl:.04,mu:1.04,steer:.58,nitro:7,drive:"a",ev:1},suvlux:{model:"car_suvlux",cls:"C",mass:2250,power:300,torque:620,rpm:6500,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:3.3,cda:1.05,cl:.03,mu:1,steer:.56,nitro:8,drive:"a",turbo:1,cyl:8},wedge:{model:"car_wedge",cls:"B",mass:3150,power:447,torque:960,rpm:12800,gears:[1],final:9,cda:1,cl:.02,mu:1,steer:.52,nitro:11,drive:"a",ev:1},police:{model:"car_police",cls:"A",mass:1900,power:330,torque:570,rpm:6600,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:3.2,cda:.74,cl:.06,mu:1.08,steer:.56,nitro:8.5,drive:"a",turbo:1,cyl:6},gt:{model:"car_gt",cls:"S",mass:1150,power:620,torque:760,rpm:9200,gears:[3,2.1,1.62,1.31,1.1,.94,.82],final:3.3,cda:.7,cl:.7,mu:1.32,steer:.52,nitro:11,drive:"r",cyl:10},t_small:{model:"tr_sedan",cls:"T",mass:1250,power:85,torque:170,rpm:6e3,gears:[3.5,2,1.3,1,.8],final:4,cda:.7,cl:0,mu:.95,steer:.6,nitro:0,drive:"f",cyl:4},t_heavy:{model:"tr_truck",cls:"T",mass:3500,power:120,torque:450,rpm:4e3,gears:[5,3,1.9,1.3,1,.8],final:4.1,cda:1.6,cl:0,mu:.9,steer:.55,nitro:0,drive:"r",cyl:6,diesel:1}};function K0(s){return Math.sin(1.45*Math.atan(9*s))}var Ki=class{constructor(t,e,n){this.spec=t;let i=n||{engine:0,nitro:0,grip:0};this.power=t.power*(1+.06*i.engine),this.torqueMax=t.torque*(1+.06*i.engine),this.nitroForce=t.nitro*1e3*(1+.08*i.nitro),this.mu=t.mu*(1+.025*i.grip),this.mass=t.mass,this.invMass=1/t.mass;let r=e.w,a=e.h*.8,o=e.l,c=t.mass;this.Ix=c*(a*a+o*o)/12,this.Iy=c*(r*r+o*o)/12,this.Iz=c*(r*r+a*a)/12,this.half={x:r/2,y:e.h/2,z:o/2},this.cgY=e.cg,this.px=0,this.py=0,this.pz=0,this.vx=0,this.vy=0,this.vz=0,this.qx=0,this.qy=0,this.qz=0,this.qw=1,this.wx=0,this.wy=0,this.wz=0,this.R=new Float32Array(9),this.wheels=[];let l=(e.wheels[0].z+e.wheels[1].z)/2,h=(e.wheels[2].z+e.wheels[3].z)/2,u=t.drive==="r"?.45:t.drive==="f"?.6:.5;this.cgZ=h+u*(l-h);for(let p=0;p<4;p++){let m=e.wheels[p];this.wheels.push({mx:m.x,my:m.y-this.cgY+.18,mz:m.z-this.cgZ,r:m.r,front:p<2,rest:.36,comp:0,prevComp:0,contact:!1,load:0,spin:0,spinAngle:0,steer:0,slipLat:0,slipLong:0,cx:0,cy:0,cz:0,surf:0,hint:0,travel:0})}let d=.11;this.k=t.mass*9.81/4/d,this.c=2*.32*Math.sqrt(this.k*t.mass/4),this.input={throttle:0,brake:0,steer:0,handbrake:0,nitro:0},this.steerNow=0,this.gear=1,this.rpm=t.ev?0:900,this.shiftT=0,this.nitroOn=0,this.grounded=0,this.airTime=0,this.speed=0,this.fwdSpeed=0,this.latSpeed=0,this.hint=0,this.assist={esc:1,tc:1,air:1},this.reverse=!1,this.stopT=0,this.hold=!1,this.wrecked=0,this.topSpeedCap=1e9,this.updateR()}updateR(){let t=this.qx,e=this.qy,n=this.qz,i=this.qw,r=this.R;r[0]=1-2*(e*e+n*n),r[1]=2*(t*e+n*i),r[2]=2*(t*n-e*i),r[3]=2*(t*e-n*i),r[4]=1-2*(t*t+n*n),r[5]=2*(e*n+t*i),r[6]=2*(t*n+e*i),r[7]=2*(e*n-t*i),r[8]=1-2*(t*t+e*e)}setPose(t,e,n,i){this.px=t,this.py=e,this.pz=n;let r=i/2;this.qx=0,this.qy=Math.sin(r),this.qz=0,this.qw=Math.cos(r),this.vx=this.vy=this.vz=0,this.wx=this.wy=this.wz=0;for(let a of this.wheels)a.comp=a.prevComp=.1,a.spin=0;this.updateR()}yaw(){return Math.atan2(this.R[6],this.R[8])}applyAngular(t,e,n,i){let r=this.R,a=r[0]*t+r[1]*e+r[2]*n,o=r[3]*t+r[4]*e+r[5]*n,c=r[6]*t+r[7]*e+r[8]*n,l=a/this.Ix,h=o/this.Iy,u=c/this.Iz;this.wx+=(r[0]*l+r[3]*h+r[6]*u)*i,this.wy+=(r[1]*l+r[4]*h+r[7]*u)*i,this.wz+=(r[2]*l+r[5]*h+r[8]*u)*i}impulse(t,e,n,i,r,a){this.vx+=t*this.invMass,this.vy+=e*this.invMass,this.vz+=n*this.invMass,this.applyAngular(r*n-a*e,a*t-i*n,i*e-r*t,1)}invMassAt(t,e,n,i,r,a){let o=e*a-n*r,c=n*i-t*a,l=t*r-e*i,h=this.R,u=h[0]*o+h[1]*c+h[2]*l,d=h[3]*o+h[4]*c+h[5]*l,p=h[6]*o+h[7]*c+h[8]*l;return this.invMass+u*u/this.Ix+d*d/this.Iy+p*p/this.Iz}engineTorque(t){let e=t/this.spec.rpm,n=this.spec,i=n.ev?0:n.turbo?.33:.55,r=e<i?.55+.45*(e/i):e<.9?1:1-(e-.9)*(n.ev?1.5:2.5);r<0&&(r=0);let a=this.torqueMax*r,o=this.power*1e3/Math.max(100,t*Math.PI/30);return Math.min(a,o)}step(t,e,n){let i=this.spec,r=this.R,a=this.input,o=r[0],c=r[1],l=r[2],h=r[3],u=r[4],d=r[5],p=r[6],m=r[7],v=r[8],g=Math.hypot(this.vx,this.vy,this.vz),f=this.vx*p+this.vy*m+this.vz*v;this.speed=g,this.fwdSpeed=f,this.latSpeed=this.vx*o+this.vy*c+this.vz*l;let E=i.steer*(1/(1+Math.max(0,f)*.035)),_=a.steer*E,x=2.6*t;this.steerNow+=Math.max(-x,Math.min(x,_-this.steerNow));let R=this.wheels[2].r,A=0,w=0;for(let xt=0;xt<4;xt++){let k=this.wheels[xt];(i.drive==="a"||i.drive==="f"===k.front)&&(A+=Math.abs(k.spin),w++)}let C=A/Math.max(1,w)*R/.34,S=i.gears[this.gear-1]*i.final,y=Math.abs(f)/.34,P=Math.max(i.ev?0:900,Math.min(i.rpm*1.02,Math.max(y,C)*S*30/Math.PI));this.rpm+=(P-this.rpm)*Math.min(1,t*25),this.shiftT>0?this.shiftT-=t:!this.reverse&&this.grounded&&(y*S*30/Math.PI>i.rpm*.95&&this.gear<i.gears.length?(this.gear++,this.shiftT=i.shift||.15):this.gear>1&&y*i.gears[this.gear-2]*i.final*30/Math.PI<i.rpm*(a.throttle>.5?.72:.6)&&(this.gear--,this.shiftT=.1)),a.brake>.5&&f<.8&&a.throttle<.1&&!this.hold?this.stopT+=t:this.stopT=0,this.stopT>.35&&(this.reverse=!0),a.throttle>.1&&this.reverse&&(this.reverse=!1),this.reverse&&(this.gear=1);let U=0,N=this.reverse?a.brake:a.throttle;this.shiftT<=0&&N>0&&(U=this.engineTorque(this.rpm)*N*i.gears[this.gear-1]*i.final*.88/.34,this.reverse&&(U=-Math.min(U,4e3)),this.rpm>=i.rpm*1&&!this.reverse&&(U*=.2)),f>this.topSpeedCap&&(U=Math.min(U,0));let H=this.nitroOn>0?this.nitroForce*this.nitroOn:0,G=this.reverse?0:a.brake;!this.reverse&&a.throttle<.05&&a.brake<.05&&Math.abs(f)<.8&&(G=.5),this.hold&&(G=1);let B=G*this.mass*9.81*1.15,Y=0,L=-this.mass*9.81,K=0,et=0,ot=0,_t=0,Pt=0,X=this.steerNow,it=Math.cos(X),ht=Math.sin(X),rt=a.handbrake,Tt=this.mass/4;for(let xt=0;xt<4;xt++){let k=this.wheels[xt],lt=o*k.mx+h*k.my+p*k.mz,Mt=c*k.mx+u*k.my+m*k.mz,Dt=l*k.mx+d*k.my+v*k.mz,gt=this.px+lt,Nt=this.py+Mt,Ut=this.pz+Dt;e.query(gt,Ut,k.hint,n),k.hint=n.i,k.surf=n.off;let $t=u>.25?u:.25,D=(Nt-n.y)/$t,ut=k.rest+k.r-D;if(k.prevComp=k.comp,ut<=0||u<.2){k.contact=!1,k.comp=0,k.load=0,k.slipLat=0,k.slipLong=0,k.travel=k.rest,k.spin*=.995;continue}let Z=Math.min(ut,k.rest+.12);k.comp=Z,k.travel=k.rest-Z,k.contact=!0,Pt++;let tt=(Z-k.prevComp)/t,ct=this.k*Z+this.c*tt*(tt<0?1.7:1);ut>k.rest+.12&&(ct+=(ut-k.rest-.12)*this.k*6+Math.max(0,tt)*this.c*2),ct<0&&(ct=0),k.load=ct;let pt=gt-h*D,zt=Nt-u*D,oe=Ut-d*D;k.cx=pt,k.cy=zt,k.cz=oe;let ge=pt-this.px,Kt=zt-this.py,De=oe-this.pz,Xe=this.vx+(this.wy*De-this.wz*Kt),es=this.vy+(this.wz*ge-this.wx*De),ns=this.vz+(this.wx*Kt-this.wy*ge),Re=p,ze=m,qe=v;k.front&&(Re=p*it+o*ht,ze=m*it+c*ht,qe=v*it+l*ht);let Ln=n.nx,cn=n.ny,Dn=n.nz,Un=Re*Ln+ze*cn+qe*Dn;Re-=Ln*Un,ze-=cn*Un,qe-=Dn*Un;let Mi=Math.hypot(Re,ze,qe)||1;Re/=Mi,ze/=Mi,qe/=Mi;let is=cn*qe-Dn*ze,Rs=Dn*Re-Ln*qe,Cs=Ln*ze-cn*Re,mn=Xe*Re+es*ze+ns*qe,b=Xe*is+es*Rs+ns*Cs,O=this.mu*(n.off===0?1:.85),W=ct,F=O*(1.08-.08*Math.min(2,W/(this.mass*9.81/4)))*W,at=Math.atan2(b,Math.abs(mn)+1.5),mt=1;!k.front&&rt>0&&(mt=.42);let yt=-K0(at)*F*mt,bt=Math.abs(b)*Tt/t;Math.abs(yt)>bt&&(yt=yt>0?bt:-bt);let Rt=0,Ft=i.drive==="a"||i.drive==="f"===k.front;Ft&&(Rt+=U/w),H&&!k.front&&(Rt+=H/2);let wt=B*(k.front?.32:.18);if(!k.front&&rt>0&&(wt+=rt*this.mass*9.81*.35),wt>0){let Pe=Math.abs(mn)*Tt/t,gn=Math.min(wt,Pe);Rt-=mn>0?gn:-gn}Rt-=.013*ct*Math.max(-1,Math.min(1,mn)),k.slipLong=0,Math.abs(Rt)>F&&(k.slipLong=Math.min(1,(Math.abs(Rt)-F)/F),this.assist.tc&&Ft&&U>0&&(Rt=Math.sign(Rt)*F*.98));let qt=Math.hypot(Rt,yt);if(qt>F){let Pe=F/qt;Rt*=Pe,yt*=Pe}k.slipLat=Math.abs(b)>1.5?Math.min(1,(Math.abs(at)-.08)*4):0,k.slipLat<0&&(k.slipLat=0),!k.front&&rt>0&&Math.abs(mn)>6&&(k.slipLat=Math.max(k.slipLat,.6));let ne=mn/k.r;k.spin=ne*(1+k.slipLong*.6)+(Ft&&U>0&&k.slipLong>0?6*k.slipLong:0),!k.front&&rt>0&&Math.abs(mn)>1&&(k.spin*=.2);let ee=Ln*ct+Re*Rt+is*yt,we=cn*ct+ze*Rt+Rs*yt,Zt=Dn*ct+qe*Rt+Cs*yt;Y+=ee,L+=we,K+=Zt;let At=ge,Ye=Kt+.25*D,jt=De;et+=Ye*Zt-jt*we,ot+=jt*ee-At*Zt,_t+=At*we-Ye*ee}for(let xt=0;xt<4;xt++){let k=this.wheels[xt];k.spinAngle+=k.spin*t,k.spinAngle>1e4&&(k.spinAngle-=1e4)}let It=.5*1.225*i.cda*g;Y-=It*this.vx,L-=It*this.vy,K-=It*this.vz;let Et=.5*1.225*i.cl*f*Math.abs(f)*(Pt>0?1:.2);Y-=h*Et,L-=u*Et,K-=d*Et,this.grounded=Pt,Pt===0?this.airTime+=t:this.airTime=0;let Vt=this.wx*h+this.wy*u+this.wz*d;if(Pt>=3&&this.assist.esc&&rt===0&&f>5){let xt=this.wheels[0].mz-this.wheels[2].mz,k=f*Math.tan(X)/xt,Mt=-(Vt-k)*this.Iy*3.2*this.assist.esc;et+=h*Mt,ot+=u*Mt,_t+=d*Mt}if(Pt>=3&&rt>0&&f>12){let xt=a.steer*this.Iy*1.4;et+=h*xt,ot+=u*xt,_t+=d*xt}if(Pt===0&&g>8){let xt=Math.atan2(this.latSpeed,Math.max(1,Math.abs(f))),k=this.wx*h+this.wy*u+this.wz*d,lt=this.Iy*((.6+2.4*this.assist.air)*xt-(.3+1.5*this.assist.air)*k);et+=h*lt,ot+=u*lt,_t+=d*lt}if(Pt===0&&this.assist.air&&!this.wrecked){let xt=-d,k=h,lt=7*this.assist.air,Mt=3.2*this.assist.air;et+=(xt*lt-this.wx*Mt)*this.Ix,_t+=(k*lt-this.wz*Mt)*this.Iz}this.vx+=Y*this.invMass*t,this.vy+=L*this.invMass*t,this.vz+=K*this.invMass*t,this.applyAngular(et,ot,_t,t);let Ot=Pt?.995:.999;this.wx*=Ot,this.wy*=Ot,this.wz*=Ot,this.px+=this.vx*t,this.py+=this.vy*t,this.pz+=this.vz*t;let ae=this.qx,I=this.qy,ye=this.qz,Bt=this.qw,kt=this.wx,Ct=this.wy,te=this.wz;this.qx+=.5*t*(kt*Bt+Ct*ye-te*I),this.qy+=.5*t*(Ct*Bt+te*ae-kt*ye),this.qz+=.5*t*(te*Bt+kt*I-Ct*ae),this.qw+=.5*t*(-kt*ae-Ct*I-te*ye);let Lt=Math.hypot(this.qx,this.qy,this.qz,this.qw);this.qx/=Lt,this.qy/=Lt,this.qz/=Lt,this.qw/=Lt,this.updateR(),e.query(this.px,this.pz,this.hint,n),this.hint=n.i,this.trackQ_s=n.s,this.trackQ_d=n.d;let T=n.y+.25,M=this.half.x,V=this.half.y*.9,nt=this.half.z,st=1e9,j=0,St=0,dt=0;for(let xt=0;xt<8;xt++){let k=xt&1?M:-M,lt=xt&2?V:-V*.4,Mt=(xt&4?nt:-nt)-this.cgZ,Dt=o*k+h*lt+p*Mt,gt=c*k+u*lt+m*Mt,Nt=l*k+d*lt+v*Mt,Ut=this.py+gt;Ut<st&&(st=Ut,j=Dt,St=gt,dt=Nt)}let vt=n.y-st;if(this.bodyHit=0,vt>0){this.py+=vt*.8;let xt=n.nx,k=n.ny,lt=n.nz,Mt=this.vx+(this.wy*dt-this.wz*St),Dt=this.vy+(this.wz*j-this.wx*dt),gt=this.vz+(this.wx*St-this.wy*j),Nt=Mt*xt+Dt*k+gt*lt;if(Nt<0){let Ut=this.invMassAt(j,St,dt,xt,k,lt),$t=-1.25*Nt/Ut;this.impulse(xt*$t,k*$t,lt*$t,j,St,dt);let D=Mt-xt*Nt,ut=Dt-k*Nt,Z=gt-lt*Nt,tt=Math.hypot(D,ut,Z);if(tt>.01){let ct=Math.min($t*.6,tt/Ut);this.impulse(-D/tt*ct,-ut/tt*ct,-Z/tt*ct,j,St,dt)}this.bodyHit=-Nt}}T>this.py&&Pt===0&&vt<=0}};var Mc=["wfl","wfr","wbl","wbr"];function As(s){let t=Es(s),e=t.parts.find(o=>o.name==="body"),n=Mc.map(o=>{let c=t.parts.find(l=>l.name===o);return c?{x:c.pivot[0],y:c.pivot[1],z:c.pivot[2],r:c.radius}:null}),i=e.max[0]-e.min[0],r=e.max[2]-e.min[2],a=e.max[1];for(let o=0;o<4;o++)n[o]||(n[o]={x:(o&1?-1:1)*i*.4,y:.35,z:(o<2?1:-1)*r*.32,r:.35});return{w:i,l:r,h:a,cg:Math.min(.62,a*.38),wheels:n,front:e.max[2],back:e.min[2]}}var vc=null,xc=null;function j0(){if(vc)return vc;let s=new Cr(.16,1,8,1,!0);s.rotateX(-Math.PI/2),s.translate(0,0,-.5);let t=s.attributes.position.count,e=new Uint8Array(t*4);for(let n=0;n<t;n++){let r=-s.attributes.position.getZ(n);e[n*4]=120+135*(1-r),e[n*4+1]=160*(1-r)+60,e[n*4+2]=255,e[n*4+3]=255*(1-r*.9)}return s.setAttribute("col",new Wt(e,4,!0)),vc=s,s}function Q0(){if(xc)return xc;let s=new $n(1,1);s.rotateX(-Math.PI/2);let t=new Uint8Array(4*4);for(let e=0;e<4;e++)t[e*4+3]=140;return s.setAttribute("col",new Wt(t,4,!0)),xc=s,s}var _c=null,yc=null,ji=class{constructor(t,e,n,i){this.scene=t,this.root=new Wn,this.root.matrixAutoUpdate=!1;let r=Es(e);this.mat=Fr(n,i,r.roofY),this.body=new se(_i(e,"body"),this.mat),this.body.matrixAutoUpdate=!1,this.root.add(this.body);for(let o of r.parts)if(o.name!=="body"&&o.name[0]!=="w"){let c=new se(_i(e,o.name),this.mat);c.matrixAutoUpdate=!1,this.root.add(c)}this.wheels=[];let a=As(e);this.dims=a;for(let o=0;o<4;o++){let c=r.parts.find(h=>h.name===Mc[o]),l=new se(c?_i(e,Mc[o]):_i("debris_tire","body"),this.mat);l.matrixAutoUpdate=!1,l.userData.base=new z(a.wheels[o].x,a.wheels[o].y,a.wheels[o].z),this.root.add(l),this.wheels.push(l)}_c=_c||zr(),this.shadow=new se(Q0(),_c),this.shadow.matrixAutoUpdate=!1,this.shadow.renderOrder=1,t.add(this.shadow),yc=yc||Or(),this.flames=[];for(let o of[.35,-.35]){let c=new se(j0(),yc);c.position.set(o*a.w*.6,a.h*.28,a.back-.05),c.visible=!1,c.renderOrder=2,this.root.add(c),this.flames.push(c)}this.q=new fn,this.e=new sn,this.tmp=new ue,this.v3=new z,this.s3=new z(1,1,1),t.add(this.root),this.lod=0}setPaint(t,e){this.mat.uniforms.uPaint.value.setHex(t),this.mat.uniforms.uRoof.value.setHex(e>=0?e:t)}sync(t,e,n,i){let r=t.R,a=this.root.matrix.elements,o=this.dims.cg;a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=0,a[4]=r[3],a[5]=r[4],a[6]=r[5],a[7]=0,a[8]=r[6],a[9]=r[7],a[10]=r[8],a[11]=0;let c=t.cgZ||0;a[12]=t.px-r[3]*o-r[6]*c,a[13]=t.py-r[4]*o-r[7]*c,a[14]=t.pz-r[5]*o-r[8]*c,a[15]=1,this.root.matrixWorldNeedsUpdate=!0;let l=e<140;this.lod=e>900?2:l?0:1,this.root.visible=this.lod<2;for(let x=0;x<4;x++){let R=this.wheels[x],A=t.wheels[x];if(R.visible=this.lod===0||e<260,!R.visible)continue;let w=R.userData.base,C=A.front?t.steerNow:0;this.e.set(A.spinAngle,C,0,"YXZ"),this.q.setFromEuler(this.e),this.v3.set(w.x,w.y+(.1-(A.contact?A.travel-.25:.12))*.6,w.z),R.matrix.compose(this.v3,this.q,this.s3)}let h=n>0&&this.lod===0;for(let x of this.flames)if(x.visible=h,h){let R=.7+n*(.8+Math.random()*.5);x.scale.set(1,1,R*1.6),x.updateMatrix()}this.mat.uniforms.uBrake.value=i;let u=this.shadow.matrix.elements,d=Math.atan2(r[6],r[8]),p=Math.cos(d),m=Math.sin(d),v=t.groundY!==void 0?t.groundY:t.py-.6,g=Math.max(0,t.py-v-.5),f=Math.max(.3,1-g*.12),E=this.dims.w*1.15*f,_=this.dims.l*1.05*f;u[0]=p*E,u[1]=0,u[2]=-m*E,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=m*_,u[9]=0,u[10]=p*_,u[11]=0,u[12]=t.px,u[13]=v+.06,u[14]=t.pz,u[15]=1,this.shadow.matrixWorldNeedsUpdate=!0,this.shadow.visible=this.lod===0&&g<8}dispose(){this.scene.remove(this.root),this.scene.remove(this.shadow),this.mat.dispose()}};var Ae={nx:0,nz:0,depth:0,px:0,pz:0},Ge=new Float32Array(8);function Sc(s,t){let e=s.R,n=s.half.x,i=s.half.z,r=e[0],a=e[2],o=Math.hypot(r,a)||1;r/=o,a/=o;let c=e[6],l=e[8],h=Math.hypot(c,l)||1;c/=h,l/=h;let u=0;for(let d=-1;d<=1;d+=2)for(let p=-1;p<=1;p+=2)t[u++]=s.px-e[6]*s.cgZ+r*n*d+c*i*p,t[u++]=s.pz-e[8]*s.cgZ+a*n*d+l*i*p;return t}function tg(s,t){let e=1e9;for(let l=0;l<2;l++){let h=l?t:s,u=h.R;for(let d=0;d<2;d++){let p=d?u[6]:u[0],m=d?u[8]:u[2],v=Math.hypot(p,m)||1;p/=v,m/=v;let g=bh(s,p,m),f=bh(t,p,m),E=(s.px-s.R[6]*s.cgZ)*p+(s.pz-s.R[8]*s.cgZ)*m,_=(t.px-t.R[6]*t.cgZ)*p+(t.pz-t.R[8]*t.cgZ)*m,x=g+f-Math.abs(_-E);if(x<=0)return!1;if(x<e){e=x;let R=_-E>=0?1:-1;Ae.nx=p*R,Ae.nz=m*R}}}Ae.depth=e,Sc(t,Ge);let n=1e9,i=0,r=0;for(let l=0;l<4;l++){let h=Ge[l*2]*Ae.nx+Ge[l*2+1]*Ae.nz;h<n&&(n=h,i=Ge[l*2],r=Ge[l*2+1])}Sc(s,Ge);let a=-1e9,o=0,c=0;for(let l=0;l<4;l++){let h=Ge[l*2]*Ae.nx+Ge[l*2+1]*Ae.nz;h>a&&(a=h,o=Ge[l*2],c=Ge[l*2+1])}return Ae.px=(i+o)/2,Ae.pz=(r+c)/2,!0}function bh(s,t,e){let n=s.R,i=n[0],r=n[2],a=Math.hypot(i,r)||1;i/=a,r/=a;let o=n[6],c=n[8],l=Math.hypot(o,c)||1;return o/=l,c/=l,Math.abs(i*t+r*e)*s.half.x+Math.abs(o*t+c*e)*s.half.z}var re={j:0,rel:0,nx:0,nz:0,px:0,py:0,pz:0};function Eh(s,t){if(Math.abs(s.py-t.py)>2.2)return 0;let e=s.px-t.px,n=s.pz-t.pz,i=s.half.z+t.half.z;if(e*e+n*n>i*i||!tg(s,t))return 0;let r=Ae.nx,a=Ae.nz,o=s.invMass/(s.invMass+t.invMass),c=1-o,l=Ae.depth+.01;s.px-=r*l*o,s.pz-=a*l*o,t.px+=r*l*c,t.pz+=a*l*c;let h=(s.py+t.py)/2+.1,u=Ae.px-s.px,d=h-s.py,p=Ae.pz-s.pz,m=Ae.px-t.px,v=h-t.py,g=Ae.pz-t.pz,f=s.vx+(s.wy*p-s.wz*d),E=s.vy+(s.wz*u-s.wx*p),_=s.vz+(s.wx*d-s.wy*u),x=t.vx+(t.wy*g-t.wz*v),R=t.vy+(t.wz*m-t.wx*g),A=t.vz+(t.wx*v-t.wy*m),w=x-f,C=R-E,S=A-_,y=w*r+S*a;if(y>=0)return 0;let P=.25,U=s.invMassAt(u,d,p,r,0,a)+t.invMassAt(m,v,g,r,0,a),N=-(1+P)*y/U;s.impulse(-r*N,0,-a*N,u,d,p),t.impulse(r*N,0,a*N,m,v,g);let H=w-r*y,G=C,B=S-a*y,Y=Math.hypot(H,G,B);if(Y>.05){let L=Math.min(N*.35,Y/U),K=H/Y,et=G/Y,ot=B/Y;s.impulse(K*L,et*L,ot*L,u,d,p),t.impulse(-K*L,-et*L,-ot*L,m,v,g)}return re.j=N,re.rel=-y,re.nx=r,re.nz=a,re.px=Ae.px,re.py=h,re.pz=Ae.pz,N}var wh=3.25;function Th(s,t,e){Sc(s,Ge);let n=0,i=0,r=0,a=0,o=0;for(let R=0;R<4;R++){let A=Ge[R*2],w=Ge[R*2+1];if(t.query(A,w,s.hint,e),t.flags[e.i]&4)continue;let C=e.d>=0?e.d-(e.hl+wh):-e.d-(e.hr+wh);if(C>n){n=C,i=A,r=w;let S=e.d>=0?-1:1;a=e.lx*S,o=e.lz*S}}if(n<=0)return 0;s.px+=a*n,s.pz+=o*n;let c=s.py+.15,l=i-s.px,h=c-s.py,u=r-s.pz,d=s.vx+(s.wy*u-s.wz*h),p=s.vy+(s.wz*l-s.wx*u),m=s.vz+(s.wx*h-s.wy*l),v=d*a+m*o;if(v>=0)return 0;let g=s.invMassAt(l,h,u,a,0,o),f=-(1+.2)*v/g;s.impulse(a*f,0,o*f,l,h,u);let E=d-a*v,_=m-o*v,x=Math.hypot(E,_);if(x>.05){let R=Math.min(f*.3,x/g);s.impulse(-E/x*R,0,-_/x*R,l,h,u)}return re.j=f,re.rel=-v,re.nx=a,re.nz=o,re.px=i,re.py=c,re.pz=r,f}var eg=1/120,ng=.2,Ah=[["tr_taxi",2068392],["tr_sedan",15197144],["tr_suv",4212303],["tr_van",15921906],["tr_sedan",9182493],["tr_delivery",16053492],["tr_truck",2906784],["tr_taxi",2068392],["tr_sedan",13224393]],Hr=class{constructor(t,e,n,i){this.race=t,this.spec=e;let r=As(e.model);this.veh=new Ki(e,r,i.upgrades),this.view=new ji(t.scene,e.model,n,i.roof),this.player=i.player,this.name=i.name||"",this.skill=i.skill||.9,this.ctl={steer:0,throttle:0,brake:0,nitro:0,handbrake:0},this.nitro=i.player>=0?.35:.3,this.nitroLevel=0,this.nitroT=0,this.perfectWin=0,this.over=0,this.s=0,this.lap=0,this.prog=0,this.place=0,this.finished=!1,this.finishTime=0,this.wreck=0,this.wrecks=0,this.takedowns=0,this.nearMiss=0,this.driftT=0,this.driftScore=0,this.airMax=0,this.lane=i.lane||0,this.laneT=0,this.stuckT=0,this.upsideT=0,this.lastS=0,this.q={},this.q2={},this.at={},this.events=i.events,this.hitCool=0,this.traffic=!1}},Vr=class{constructor(t,e,n){this.scene=t,this.track=e,this.opts=n,this.racers=[],this.traffic=[],this.time=-3.5,this.state="countdown",this.laps=e.closed?Math.max(1,n.laps||2):1,this.total=e.closed?e.length*this.laps:e.length-40,this.events=[],this.slowmo=0,this.q={},this.mode=n.mode||"race",this.elimT=0;let i=n.grid,r=30;for(let a=0;a<i.length;a++){let o=i[a],c=new Hr(this,pe[o.spec],o.paint,{roof:o.roof,player:o.player,name:o.name,skill:o.skill,upgrades:o.upgrades,events:this.events});c.assist=o.assist||{easy:0,auto:1},c.bot=!!(o.assist&&o.assist.bot),c.player>=0&&o.assist&&(c.veh.assist.esc=o.assist.esc===0?0:1);let l=Math.floor(a/2),h=a%2,u=r-l*9,d=(h?-1:1)*Math.min(e.hl[0],e.hr[0])*.4;this.place(c,u,d,0),c.lane=d,this.racers.push(c)}if(this.players=this.racers.filter(a=>a.player>=0).sort((a,o)=>a.player-o.player),this.trafficOn=n.traffic!==!1,this.trafficOn)for(let a=0;a<(n.trafficCount||10);a++){let[o,c]=Ah[a%Ah.length],l=Object.assign({},o==="tr_truck"||o==="tr_delivery"?pe.t_heavy:pe.t_small,{model:o}),h=new Hr(this,l,c,{player:-1,events:this.events});h.traffic=!0,h.active=!1,h.veh.assist.air=0,this.traffic.push(h)}this.all=this.racers.concat(this.traffic)}place(t,e,n,i){let r=this.track.at(e,n,t.at),a=Math.atan2(r.fx,r.fz),o=t.veh;o.setPose(r.x,r.y+o.cgY+.45,r.z,a),o.hint=r.i;for(let c of o.wheels)c.hint=r.i;o.vx=r.fx*i,o.vz=r.fz*i,o.gear=i>20?3:1,t.s=e,t.lastS=e}say(t,e,n){t.player>=0&&this.events.push({player:t.player,text:e,kind:n||"info",t:0})}update(t){this.slowmo>0&&(this.slowmo-=t,t*=.35),this.time+=t,this.state==="countdown"&&this.time>=0&&(this.state="race",this.events.push({player:-1,text:"GO",kind:"go",t:0}));let e=this.state!=="countdown";for(let r of this.racers)this.drive(r,t,e);e&&this.trafficOn&&this.updateTraffic(t);let n=Math.max(1,Math.round(t/eg)),i=t/n;for(let r=0;r<n;r++)this.physics(i,e);for(let r of this.racers)this.after(r,t);this.rank()}physics(t,e){let n=this.track,i=this.q,r=this.all;for(let a=0;a<r.length;a++){let o=r[a];if(o.traffic&&!o.active)continue;let c=o.veh;c.hold=!e&&!o.traffic,c.step(t,n,i),c.groundY=i.y,Th(c,n,i)>0&&this.wallHit(o,re.j,re.rel)}for(let a=0;a<r.length;a++){let o=r[a];if(!(o.traffic&&!o.active))for(let c=a+1;c<r.length;c++){let l=r[c];if(l.traffic&&!l.active)continue;let h=Eh(o.veh,l.veh);h>0&&this.carHit(o,l,h,re.rel)}}}drive(t,e,n){let i=t.veh,r=this.track;if(t.wreck>0){i.input.throttle=0,i.input.brake=0,i.input.steer=0,i.input.handbrake=0,i.nitroOn=0;return}let a,o,c,l=0,h=0;if(t.player>=0&&!t.assist.easy){let u=t.ctl;a=u.steer,o=t.assist.auto?Math.max(u.throttle,u.brake>.1?0:1):u.throttle,c=u.brake,l=u.handbrake,h=u.nitro,t.finished&&(o=0,c=.3)}else{t.player>=0&&(t.lane+=t.ctl.steer*e*9,h=t.ctl.nitro);let u=this.aiDrive(t,e);a=u.steer,o=u.throttle,c=u.brake,t.player<0&&(h=u.nitro),t.player>=0&&t.ctl.brake>.3&&(c=Math.max(c,t.ctl.brake),o=0),t.finished&&t.player>=0&&(o=0,c=.25)}n&&h&&t.nitro>.02&&!t.finished?(t.nitroLevel===0&&(t.nitroLevel=t.perfectWin>0?2:1,t.nitroLevel===2&&this.say(t,"PERFECT NITRO","nitro")),t.nitro-=ng*e*(t.nitroLevel===2?.8:1)):t.over<=0&&(t.nitroLevel=0),t.over>0&&(t.over-=e,t.nitroLevel=3,t.over<=0&&(t.nitroLevel=0)),t.nitro<0&&(t.nitro=0),t.perfectWin>0&&(t.perfectWin-=e),i.nitroOn=t.nitroLevel===0?0:t.nitroLevel===1?1:t.nitroLevel===2?1.35:1.8,i.nitroOn&&(o=1,c=0),i.input.steer=a,i.input.throttle=o,i.input.brake=c,i.input.handbrake=l,i.topSpeedCap=1e9}overdrive(t){if(t.nitro<.98||t.over>0||this.state!=="race")return!1;t.nitro=0,t.over=3.2,t.nitroLevel=3,this.say(t,"OVERDRIVE","nitro");let e=t.veh;for(let n of this.all){if(n===t||n.traffic&&!n.active)continue;let i=n.veh.px-e.px,r=n.veh.pz-e.pz,a=Math.hypot(i,r);a<14&&a>.1&&n.veh.impulse(i/a*n.veh.mass*6,n.veh.mass*1.5,r/a*n.veh.mass*6,0,.6,0)}return!0}aiDrive(t,e){let n=t.veh,i=this.track,r=t.q2,a=Math.max(0,n.fwdSpeed),o=i.hl[n.hint],c=i.hr[n.hint];!t.traffic&&(t.player<0||t.bot)&&(t.laneT-=e,t.laneT<=0&&(t.laneT=.25,t.lane=this.pickLane(t,a,o,c))),t.lane>o-1.4&&(t.lane=o-1.4),t.lane<-c+1.4&&(t.lane=-c+1.4);let l=7+a*.42,h=i.at(t.s+l,t.lane,t.at),u=h.x-n.px,d=h.z-n.pz,p=n.R,m=p[6],v=p[8],g=p[0],f=p[2],E=u*m+d*v,_=u*g+d*f,x=n.wheels[0].mz-n.wheels[2].mz,R=Math.atan2(2*x*_,E*E+_*_)/(n.spec.steer/(1+Math.max(0,n.fwdSpeed)*.035));R=Math.max(-1,Math.min(1,R*1.1));let A=n.mu*(t.traffic?.45:.86*t.skill+.08),w=n.hint,C=Math.min(i.n-2,w+Math.ceil((40+a*a/14)/2)),S=t.traffic?t.cruise:95*t.skill;for(let B=w+2;B<=C;B+=2){let Y=Math.abs(i.curv[B])+1e-4,L=Math.sqrt(A*9.81/Y)*(t.traffic?1:1.08),K=(B-w)*2,et=Math.sqrt(L*L+2*7.5*K);et<S&&(S=et)}let y=n.trackQ_d;for(let B of this.all){if(B===t||B.traffic&&!B.active)continue;let Y=B.s-t.s;if(Y<1||Y>10+a*.4+a*a/14||Math.abs(B.d-y)>2.3||Math.abs(B.d-t.lane)>2.3)continue;let L=B.traffic?B.veh.fwdSpeed*B.dir:B.veh.fwdSpeed;L<-1&&(t.laneT=0);let K=Math.max(0,L);S=Math.min(S,Math.sqrt(K*K+2*7*Math.max(0,Y-7)))}if(!t.traffic&&this.players.length){let B=this.players[0].prog>(this.players[1]?this.players[1].prog:-1e9)?this.players[0]:this.players[1],Y=t.prog-B.prog,L=Y<-60?1.07:Y>150?.9:1;S*=L,n.topSpeedCap=1e9}let P=0,U=0,N=S-a;N>0?P=Math.min(1,N*.25+.3):U=Math.min(1,-N*.12),t.traffic&&a>S&&(P=0);let H=0;!t.traffic&&t.player<0&&this.state==="race"&&t.nitro>.3&&S>a+10&&Math.abs(R)<.2&&(H=1);let G=t.aiOut||(t.aiOut={steer:0,throttle:0,brake:0,nitro:0});return G.steer=R,G.throttle=P,G.brake=U,G.nitro=H,G}pickLane(t,e,n,i){let r=t.lane,a=1e9;for(let o=-i+1.6;o<=n-1.6+.001;o+=1.75){let c=Math.abs(o-t.lane)*.12+(o>1?.8:0);for(let l of this.all){if(l===t||l.traffic&&!l.active)continue;let h=l.s-t.s,u=l.traffic?l.veh.fwdSpeed*l.dir:l.veh.fwdSpeed;if(!(Math.abs(l.d-o)>(u<-1?2.9:2.4)))if(u<-1){let d=(e-u)*4+30;h>-4&&h<d&&(c+=12+10*(1-h/d))}else{let d=e-u,p=8+Math.max(0,d)*2.5;h>-3&&h<p&&(c+=(l.traffic?6:3)*(1-Math.max(0,h)/p)+1)}}c<a&&(a=c,r=o)}return r}after(t,e){let n=t.veh,i=this.track,r=n.hint*2;if(i.closed&&(t.lastS>i.length*.8&&r<i.length*.2?t.lap++:t.lastS<i.length*.2&&r>i.length*.8&&t.lap--),t.lastS=r,t.s=r,t.d=n.trackQ_d||0,t.prog=t.lap*i.length+r,this.state!=="race")return;if(!t.finished&&t.prog>=this.total&&(t.finished=!0,t.finishTime=this.time,t.player>=0&&this.say(t,"FINISH","finish")),t.hitCool>0&&(t.hitCool-=e),t.wreck>0){t.wreck-=e,t.wreck<=0&&this.respawn(t);return}if(n.R[4]<.25){if(t.upsideT+=e,t.upsideT>.8){this.wrecked(t,"flip");return}}else t.upsideT=0;if(Math.abs(n.fwdSpeed)<2&&this.time>3&&!t.finished?(t.stuckT+=e,t.stuckT>4&&(t.player<0||t.bot||t.assist.auto||t.ctl.throttle>.5)&&this.respawn(t)):t.stuckT=0,t.player<0)return;let o=Math.atan2(Math.abs(n.latSpeed),Math.max(1,Math.abs(n.fwdSpeed)));if(n.grounded>=3&&n.fwdSpeed>15&&o>.2?(t.driftT+=e,t.nitro=Math.min(1,t.nitro+e*.14),t.driftT>.6&&!t.driftSaid&&(t.driftSaid=!0,this.say(t,"DRIFT","drift"))):t.driftT>0&&(t.driftT>.8&&(t.driftScore+=t.driftT,t.perfectWin=.6),t.driftT=0,t.driftSaid=!1),n.airTime>0?t.airMax=Math.max(t.airMax,n.airTime):t.airMax>0&&(t.airMax>.45&&(this.say(t,"AIR "+t.airMax.toFixed(1)+" s","air"),t.nitro=Math.min(1,t.nitro+t.airMax*.18),t.perfectWin=.6),t.airMax=0,n.bodyHit>9&&this.wrecked(t,"landing")),this.trafficOn)for(let c of this.traffic){if(!c.active||c.nearDone)continue;let l=c.s-t.s;l<0&&l>-6&&Math.abs(c.d-t.d)<3.6&&n.fwdSpeed-c.veh.fwdSpeed*c.dir>15&&(c.nearDone=!0,t.nearMiss++,t.nitro=Math.min(1,t.nitro+.06),this.say(t,"NEAR MISS","near"))}}wallHit(t,e,n){if(t.wreck>0||this.state!=="race")return;let i=t.veh,r=Math.abs(i.vx*re.nx+i.vz*re.nz);n>19&&r>17&&!t.traffic?this.wrecked(t,"wall"):t.player>=0&&n>4&&this.events.push({player:t.player,text:"",kind:"scrape",t:0,j:e}),this.onImpact&&this.onImpact(t,e,n,re)}carHit(t,e,n,i){if(this.state!=="race")return;this.onImpact&&this.onImpact(t,n,i,re);let r=t.veh,a=e.veh,o=-(r.vx*re.nx+r.vz*re.nz)*-1,c=-(a.vx*re.nx+a.vz*re.nz),l=o>c?t:e,h=l===t?e:t;if(r.R[6]*a.R[6]+r.R[8]*a.R[8]<-.6&&i>16){this.wrecked(t,"head"),this.wrecked(e,"head");return}if(h.wreck>0||l.hitCool>0)return;l.hitCool=.4;let d=h.veh,p=Math.abs(re.nx*d.R[0]+re.nz*d.R[2]);(h.traffic?i>6:p>.55?i>7:i>11)&&n>(h.traffic?2500:4200)&&l.veh.fwdSpeed>15&&(this.wrecked(h,"takedown",l),(l.player>=0||l.player<0)&&(l.takedowns++,l.nitro=Math.min(1,l.nitro+(h.traffic?.12:.3)),this.say(l,h.traffic?"TRAFFIC CHECK":"TAKEDOWN","takedown"),l.player>=0&&this.players.length===1&&!h.traffic&&(this.slowmo=.5)))}wrecked(t,e,n){if(t.wreck>0)return;let i=t.veh;this.log&&this.log.push(this.time.toFixed(1)+" "+(t.traffic?"traffic":t.name)+" "+e+(n?" by "+(n.traffic?"traffic":n.name):"")+" s"+Math.round(t.s)+" d"+t.d.toFixed(1)+" v"+Math.round(i.speed*3.6)+" hl"+this.track.hl[i.hint].toFixed(1)+" hr"+this.track.hr[i.hint].toFixed(1)),t.wreck=t.traffic?6:2.6,t.wrecks++,t.nitroLevel=0,t.over=0,i.nitroOn=0,i.assist.air=0;let r=Math.max(8,i.speed),a=Math.random()<.5?-1:1;i.impulse(0,i.mass*(2.2+r*.06),0,0,0,0),i.wx+=i.R[6]*a*(2+r*.06)+i.R[0]*.8,i.wz+=i.R[8]*a*(2+r*.06)+i.R[2]*.8,i.wy+=a*1.4,t.player>=0&&this.say(t,e==="takedown"?"TAKEN DOWN":"WRECKED","wreck"),this.onWreck&&this.onWreck(t,e,n)}respawn(t){let e=t.veh,n=this.track,i=Math.max(10,Math.min(n.length-10,t.s+5)),r=Math.max(-n.hr[e.hint]+2,Math.min(n.hl[e.hint]-2,t.player>=0?-2:t.lane));this.place(t,i,r,t.traffic?0:26),t.wreck=0,t.upsideT=0,t.stuckT=0,e.assist.air=t.traffic?0:1,t.lane=r,t.traffic&&(t.active=!1)}updateTraffic(t){let e=this.track,n=1e9,i=-1e9;for(let r of this.players)n=Math.min(n,r.s),i=Math.max(i,r.s);for(let r of this.traffic){if(r.active){let E=r.s<n-120,_=r.s>i+900;if((E||_)&&r.wreck<=0&&(r.active=!1),r.wreck>0&&(r.wreck-=t,r.wreck<=0&&(r.active=!1)),r.active&&r.wreck<=0&&Math.abs(r.veh.fwdSpeed)<1?(r.stuckT=(r.stuckT||0)+t,r.stuckT>5&&!this.nearAny(r,70)&&(r.active=!1)):r.stuckT=0,r.active&&r.wreck<=0){let x=this.trafficDrive(r,t);r.veh.input.steer=x.steer,r.veh.input.throttle=x.throttle,r.veh.input.brake=x.brake}r.view.root.visible=r.active;continue}if(r.view.root.visible=!1,r.view.shadow.visible=!1,r.spawnT=(r.spawnT||0)-t,r.spawnT>0)continue;r.spawnT=.6+Math.random()*1.2;let a=i+260+Math.random()*520;if(a>e.length-30&&!e.closed)continue;let o=Math.min(e.n-2,Math.floor(a/2));if(e.flags[o]&4)continue;let c=e.hl[o],l=e.hr[o],h=Math.random()<.33,u=Math.max(1,Math.floor(l/3.6)),d=Math.max(1,Math.floor(c/3.6)),p=h?d>1?(d-.5)*c/d:.5*c:-(Math.floor(Math.random()*u)+.5)*l/u,m=!0;for(let E of this.all)if(E!==r&&(!E.traffic||E.active)&&Math.abs(E.s-a)<25&&Math.abs((E.d||0)-p)<3){m=!1;break}if(!m)continue;r.dir=h?-1:1,r.cruise=13+Math.random()*7;let v=e.at(a,p,r.at),g=Math.atan2(v.fx*r.dir,v.fz*r.dir),f=r.veh;f.setPose(v.x,v.y+f.cgY+.45,v.z,g),f.hint=v.i;for(let E of f.wheels)E.hint=v.i;f.vx=v.fx*r.dir*r.cruise,f.vz=v.fz*r.dir*r.cruise,f.gear=3,f.assist.air=0,r.s=a,r.lastS=a,r.d=p,r.lane=p,r.active=!0,r.wreck=0,r.nearDone=!1}}trafficDrive(t,e){let n=t.veh,i=this.track;t.s=n.hint*2,t.d=n.trackQ_d||t.d;let r=Math.max(0,n.fwdSpeed),a=6+r*.5,o=i.at(t.s+a*t.dir,t.lane,t.at),c=o.x-n.px,l=o.z-n.pz,h=n.R,u=c*h[6]+l*h[8],d=c*h[0]+l*h[2],p=n.wheels[0].mz-n.wheels[2].mz,m=Math.atan2(2*p*d,u*u+d*d)/(n.spec.steer/(1+Math.max(0,n.fwdSpeed)*.035));m=Math.max(-1,Math.min(1,m));let v=t.cruise,g=n.hint;for(let _=2;_<40;_+=3){let x=Math.max(0,Math.min(i.n-1,g+_*t.dir)),R=Math.abs(i.curv[x])+1e-4;v=Math.min(v,Math.sqrt(.35*9.81/R))}for(let _ of this.traffic){if(_===t||!_.active)continue;let x=(_.s-t.s)*t.dir;x>0&&x<22&&Math.abs(_.d-t.d)<2.5&&(v=Math.min(v,Math.max(0,_.veh.speed-2)))}let f=v-r,E=t.aiOut||(t.aiOut={steer:0,throttle:0,brake:0,nitro:0});return E.steer=m,E.throttle=f>0?Math.min(1,f*.3):0,E.brake=f<-2?Math.min(1,-f*.1):0,E}nearAny(t,e){for(let n of this.players){let i=n.veh.px-t.veh.px,r=n.veh.pz-t.veh.pz;if(i*i+r*r<e*e)return!0}return!1}rank(){let t=this.racers,e=this._rank||(this._rank=t.slice());for(let n=1;n<e.length;n++){let i=e[n],r=n-1;for(;r>=0&&ig(i,e[r]);)e[r+1]=e[r],r--;e[r+1]=i}for(let n=0;n<e.length;n++)e[n].place=n+1}allPlayersDone(){for(let t of this.players)if(!t.finished)return!1;return!0}dispose(){for(let t of this.all)t.view.dispose()}};function ig(s,t){return s.finished&&t.finished?s.finishTime<t.finishTime:s.finished!==t.finished?s.finished:s.prog>t.prog}var Gr=class{constructor(t,e){this.cam=new Ce(64,t,.3,e),this.mode=0,this.pos=new z,this.vel=new z,this.look=new z,this.dir=new z(0,0,1),this.shake=0,this.shakeOn=!0,this.init=!1,this.wreckA=0,this.back=!1,this.t=new z,this.l=new z}kick(t){this.shakeOn&&(this.shake=Math.min(1,this.shake+t))}update(t,e){let n=e.veh,i=n.R,r=this.cam,a=Math.max(0,n.fwdSpeed),o=i[6],c=i[8];n.speed>4&&e.wreck<=0&&(o=o*(1-.65)+n.vx/n.speed*.65,c=c*(1-.65)+n.vz/n.speed*.65);let l=Math.hypot(o,c)||1;o/=l,c/=l;let h=1-Math.exp(-t*7);this.dir.x+=(o-this.dir.x)*h,this.dir.z+=(c-this.dir.z)*h;let u=Math.hypot(this.dir.x,this.dir.z)||1,d=this.dir.x/u,p=this.dir.z/u,m,v,g;this.mode===1?(m=9+a*.03,v=3.4,g=6):this.mode===2?(m=-.6,v=1.05,g=30):(m=6.2+a*.022,v=2.25+a*.004,g=5);let f=this.back?-1:1;if(e.wreck>0?(this.wreckA+=t*.9,this.t.set(n.px+Math.sin(this.wreckA)*9,n.py+3.5,n.pz+Math.cos(this.wreckA)*9),this.l.set(n.px,n.py,n.pz)):(this.t.set(n.px-d*m*f,n.py+v,n.pz-p*m*f),this.l.set(n.px+d*g*f,n.py+(this.mode===2?.9:.8),n.pz+p*g*f)),!this.init||this.mode===2||this.back)this.pos.copy(this.t),this.init=!0;else{let _=1-Math.exp(-t*12);this.pos.lerp(this.t,_),this.pos.y<n.py+.8&&(this.pos.y=n.py+.8)}if(r.position.copy(this.pos),this.shake>0){this.shake=Math.max(0,this.shake-t*2.2);let _=this.shake*this.shake*.35;r.position.x+=(Math.random()-.5)*_,r.position.y+=(Math.random()-.5)*_}r.lookAt(this.l);let E=62+Math.min(16,a*.13)+(e.veh.nitroOn?8*Math.min(1.5,e.veh.nitroOn):0);r.fov+=(E-r.fov)*(1-Math.exp(-t*4)),r.updateProjectionMatrix()}};var Wr=class{constructor(t,e,n){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Uint8Array(e*4),this.size=new Float32Array(e),this.life=new Float32Array(e),this.age=new Float32Array(e),this.grow=new Float32Array(e),this.base=new Uint8Array(e*4);let i=new _e;this.aPos=new Wt(this.pos,3),this.aPos.setUsage(jn),this.aCol=new Wt(this.col,4,!0),this.aCol.setUsage(jn),this.aSize=new Wt(this.size,1),this.aSize.setUsage(jn),i.setAttribute("position",this.aPos),i.setAttribute("col",this.aCol),i.setAttribute("size",this.aSize),i.setDrawRange(0,0),this.mat=Mh(n),this.points=new Ar(i,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=3,this.gravity=n?-9.8:.6,t.add(this.points),this.next=0}emit(t,e,n,i,r,a,o,c,l,h,u,d,p){let m=this.next;this.next=(this.next+1)%this.max,this.n<this.max&&this.n++,this.pos[m*3]=t,this.pos[m*3+1]=e,this.pos[m*3+2]=n,this.vel[m*3]=i,this.vel[m*3+1]=r,this.vel[m*3+2]=a,this.base[m*4]=o,this.base[m*4+1]=c,this.base[m*4+2]=l,this.base[m*4+3]=h,this.size[m]=u,this.life[m]=d,this.age[m]=0,this.grow[m]=p||0}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.age[n]>=this.life[n]){this.col[n*4+3]=0;continue}this.age[n]+=t;let i=1-this.age[n]/this.life[n];this.vel[n*3+1]+=this.gravity*t,this.vel[n*3]*=.985,this.vel[n*3+2]*=.985,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.size[n]+=this.grow[n]*t,this.col[n*4]=this.base[n*4],this.col[n*4+1]=this.base[n*4+1],this.col[n*4+2]=this.base[n*4+2],this.col[n*4+3]=this.base[n*4+3]*i}this.points.geometry.setDrawRange(0,e),this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSize.needsUpdate=!0}},bc=class{constructor(t,e){this.max=e,this.next=0,this.pos=new Float32Array(e*4*3),this.col=new Uint8Array(e*4*4),this.uv=new Float32Array(e*4*2);let n=new Uint16Array(e*6);for(let r=0;r<e;r++){let a=r*4;n.set([a,a+1,a+2,a,a+2,a+3],r*6)}for(let r=0;r<e*4;r++)this.uv[r*2]=.5,this.uv[r*2+1]=.5;let i=new _e;this.aPos=new Wt(this.pos,3),this.aPos.setUsage(jn),this.aCol=new Wt(this.col,4,!0),this.aCol.setUsage(jn),i.setAttribute("position",this.aPos),i.setAttribute("col",this.aCol),i.setAttribute("uv",new Wt(this.uv,2)),i.setIndex(new Wt(n,1)),this.mesh=new se(i,zr()),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,t.add(this.mesh),this.last=new Float32Array(16*4).fill(NaN),this.dirty=!1}add(t,e,n,i,r,a,o){let c=this.last,l=t*4;if(o<=0||isNaN(c[l])){c[l]=e,c[l+1]=n,c[l+2]=i,c[l+3]=o>0?1:NaN,o<=0&&(c[l]=NaN);return}let h=e-c[l],u=i-c[l+2];if(h*h+u*u<.36)return;let d=this.next;this.next=(this.next+1)%this.max;let p=.13,m=this.pos,v=this.col,g=d*12;m[g]=c[l]+r*p,m[g+1]=c[l+1]+.03,m[g+2]=c[l+2]+a*p,m[g+3]=c[l]-r*p,m[g+4]=c[l+1]+.03,m[g+5]=c[l+2]-a*p,m[g+6]=e-r*p,m[g+7]=n+.03,m[g+8]=i-a*p,m[g+9]=e+r*p,m[g+10]=n+.03,m[g+11]=i+a*p;let f=Math.min(200,60+o*150);for(let E=0;E<4;E++)v[d*16+E*4]=12,v[d*16+E*4+1]=12,v[d*16+E*4+2]=12,v[d*16+E*4+3]=f;c[l]=e,c[l+1]=n,c[l+2]=i,this.dirty=!0}reset(t){this.last[t*4]=NaN}update(){this.dirty&&(this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.dirty=!1)}},wc=class{constructor(t,e){this.n=e,this.pos=new Float32Array(e*6),this.col=new Uint8Array(e*8),this.seed=new Float32Array(e*3);for(let i=0;i<e;i++)this.seed[i*3]=Math.random()*6.28,this.seed[i*3+1]=2+Math.random()*3,this.seed[i*3+2]=Math.random()*40;let n=new _e;this.aPos=new Wt(this.pos,3),this.aPos.setUsage(jn),this.aCol=new Wt(this.col,4,!0),this.aCol.setUsage(jn),n.setAttribute("position",this.aPos),n.setAttribute("col",this.aCol),this.lines=new Tr(n,Or()),this.lines.frustumCulled=!1,this.lines.renderOrder=4,t.add(this.lines)}update(t,e,n,i){let r=Math.max(0,Math.min(1,(n-45)/40))*.6+(i?.4:0);if(this.lines.visible=r>.02,!this.lines.visible)return;let a=e.matrixWorld.elements,o=a[0],c=a[1],l=a[2],h=a[4],u=a[5],d=a[6],p=-a[8],m=-a[9],v=-a[10],g=a[12],f=a[13],E=a[14];for(let _=0;_<this.n;_++){let x=this.seed[_*3+2]-t*n*1.4;x<2&&(x+=40),this.seed[_*3+2]=x;let R=this.seed[_*3],A=this.seed[_*3+1],w=Math.cos(R)*A,C=Math.sin(R)*A*.6,S=2+n*.06,y=g+o*w+h*C+p*x,P=f+c*w+u*C+m*x,U=E+l*w+d*C+v*x;this.pos[_*6]=y,this.pos[_*6+1]=P,this.pos[_*6+2]=U,this.pos[_*6+3]=y+p*S,this.pos[_*6+4]=P+m*S,this.pos[_*6+5]=U+v*S;let N=140*r,H=i?255:220;this.col[_*8]=i?120:220,this.col[_*8+1]=i?190:220,this.col[_*8+2]=H,this.col[_*8+3]=N,this.col[_*8+4]=0,this.col[_*8+5]=0,this.col[_*8+6]=0,this.col[_*8+7]=0}this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0}},Ec=class{constructor(t,e){this.items=[];let n=["debris_bumper","debris_door","debris_tire","debris_spoiler","debris_plate"];for(let i=0;i<10;i++){let r=new se(_i(n[i%n.length],"body"),e);r.userData.s0=n[i%n.length]==="debris_tire"?.65:.85,r.visible=!1,r.userData.v=new z,r.userData.w=new z,r.userData.t=0,t.add(r),this.items.push(r)}this.next=0}burst(t,e,n,i,r,a,o){for(let c=0;c<o;c++){let l=this.items[this.next];this.next=(this.next+1)%this.items.length,l.visible=!0,l.position.set(t,e+.6,n),l.userData.v.set(i*.5+(Math.random()-.5)*6,2.5+Math.random()*3.5,a*.5+(Math.random()-.5)*6),l.userData.w.set(Math.random()*10,Math.random()*10,Math.random()*10),l.userData.t=2.2,l.userData.floor=e-.4,l.scale.setScalar(l.userData.s0||1)}}update(t){for(let e of this.items){if(!e.visible)continue;let n=e.userData;if(n.t-=t,n.t<=0){e.visible=!1;continue}n.t<.5&&e.scale.setScalar(n.s0*n.t/.5),n.v.y-=9.8*t,e.position.x+=n.v.x*t,e.position.y+=n.v.y*t,e.position.z+=n.v.z*t,e.position.y<n.floor&&(e.position.y=n.floor,n.v.y*=-.3,n.v.x*=.7,n.v.z*=.7,n.w.multiplyScalar(.7)),e.rotation.x+=n.w.x*t,e.rotation.y+=n.w.y*t,e.rotation.z+=n.w.z*t}}},Xr=class{constructor(t,e,n){let i=e==="low";this.sparks=new Wr(t,i?80:200,!0),this.smoke=new Wr(t,i?60:160,!1),this.skids=new bc(t,i?300:700),this.streaks=new wc(t,i?24:48),this.debris=new Ec(t,n),this.low=i}spark(t,e,n,i,r,a){for(let o=0;o<a;o++)this.sparks.emit(t,e,n,i*.5+(Math.random()-.5)*6,1+Math.random()*4,r*.5+(Math.random()-.5)*6,255,190+Math.random()*60,90,255,.12,.25+Math.random()*.3)}puff(t,e,n,i,r,a){this.smoke.emit(t,e+.2,n,i*.2+(Math.random()-.5),.6+Math.random()*.6,r*.2+(Math.random()-.5),225,225,228,110*a,.8,1.1,2.6)}update(t){this.sparks.update(t),this.smoke.update(t),this.skids.update(),this.debris.update(t)}};var sg={corniche:{palms:1,time:"day"},marina:{palms:1,time:"sunset"},harris:{palms:1,time:"day"},rmilat:{time:"day"},achakar:{rocks:1,dry:1,time:"sunset"},mesnana:{time:"day"},zonefranche:{dry:1,time:"day"},rabat:{dry:1,time:"day"},kawassim:{time:"night"},dradeb:{time:"day"}};function Tc(s){s==="night"?(Jt.uSun.value.set(-.3,.55,.4).normalize(),Jt.uSunCol.value.setRGB(.7,.75,.95),Jt.uSky.value.setRGB(.3,.36,.55),Jt.uGround.value.setRGB(.2,.17,.16),Jt.uFog.value.setRGB(.07,.09,.16),Jt.uNight.value=1):s==="sunset"?(Jt.uSun.value.set(-.6,.22,-.7).normalize(),Jt.uSunCol.value.setRGB(1,.72,.45),Jt.uSky.value.setRGB(.6,.6,.78),Jt.uGround.value.setRGB(.4,.3,.26),Jt.uFog.value.setRGB(.93,.72,.6),Jt.uNight.value=.15):(Jt.uSun.value.set(.45,.75,-.48).normalize(),Jt.uSunCol.value.setRGB(1,.95,.86),Jt.uSky.value.setRGB(.55,.72,.95),Jt.uGround.value.setRGB(.42,.38,.32),Jt.uFog.value.setRGB(.74,.82,.92),Jt.uNight.value=0)}var qr=class{constructor(t,e,n,i,r){this.renderer=t,this.quality=r,this.scene=new Yi,this.scene.matrixWorldAutoUpdate=!0,this.track=new Nr(e,n.bin);let a=sg[e.id]||{};Tc(i.time||a.time);let o=r.tier==="low"?520:r.tier==="mid"?700:900;Jt.uFogFar.value=o,Jt.uFogNear.value=o*.3,this.far=o,this.detailFar=o*.55,this.world=new Br(this.scene,this.track,n.bld,a,n.ter),this.race=new Vr(this.scene,this.track,i),this.views=this.race.players.map(()=>new Gr(16/9,o+60));for(let c of this.views)c.shakeOn=r.tier!=="low";this.fx=new Xr(this.scene,r.tier,Fr(8947848)),this.race.onImpact=(c,l,h,u)=>{h>3&&this.fx.spark(u.px,u.py,u.pz,c.veh.vx,c.veh.vz,Math.min(14,2+h*.5|0)),c.player>=0&&this.views[c.player].kick(Math.min(.8,h*.04)),this.onSound&&this.onSound("hit",c,h)},this.race.onWreck=(c,l)=>{let h=c.veh;this.fx.debris.burst(h.px,h.py,h.pz,h.vx,h.vy,h.vz,this.fx.low?2:4),this.fx.spark(h.px,h.py,h.pz,h.vx,h.vz,18),this.onSound&&this.onSound("wreck",c,l)},this.size=new Yt,this.frameMs=16.7,this.scale=r.scale||1,this.lateFrames=0,this.goodFrames=0}update(t,e){let n=this.race;for(let r of n.players){let a=e.players[r.player];Object.assign(r.ctl,a.ctl),r.assist.auto=a.auto?1:0,a.double&&n.overdrive(r);let o=this.views[r.player];a.edge.camera&&(o.mode=(o.mode+1)%3),o.back=!!a.ctl.look}n.update(t),Jt.uTime.value+=t;let i=this.fx;for(let r=0;r<n.all.length;r++){let a=n.all[r];if(a.traffic&&!a.active)continue;let o=a.veh,c=a.player>=0||this.nearPlayer(o);for(let l=0;l<4;l++){let h=o.wheels[l],u=Math.max(h.slipLat,h.slipLong),d=r*4+l;d<64&&h.contact&&u>.35&&o.speed>4&&c?(i.skids.add(d,h.cx,h.cy,h.cz,o.R[0],o.R[2],u),(!i.low||r&1)&&Math.random()<u*.5&&i.puff(h.cx,h.cy,h.cz,o.vx,o.vz,u)):d<64&&i.skids.add(d,0,0,0,0,0,0)}a.wreck>0&&Math.random()<.3&&c&&i.puff(o.px,o.py,o.pz,0,0,1)}i.update(t);for(let r=0;r<this.views.length;r++)this.views[r].update(t,n.players[r])}nearPlayer(t){for(let e of this.race.players){let n=e.veh.px-t.px,i=e.veh.pz-t.pz;if(n*n+i*i<160*160)return!0}return!1}render(t){let e=this.renderer;this.budget(t),e.getSize(this.size);let n=this.size.x,i=this.size.y,r=this.views.length;e.setScissorTest(r>1);for(let a=0;a<r;a++){let o=this.views[a],c=this.race.players[a],l=i/r,h=i-l*(a+1);o.cam.aspect=n/l,o.cam.updateProjectionMatrix(),e.setViewport(0,h,n,l),e.setScissor(0,h,n,l),this.world.cull(o.cam.position.x,o.cam.position.z,this.far,this.detailFar),this.world.sky.position.copy(o.cam.position);for(let u of this.race.all){if(u.traffic&&!u.active){u.view.root.visible=!1,u.view.shadow.visible=!1;continue}let d=u.veh.px-o.cam.position.x,p=u.veh.pz-o.cam.position.z;u.view.sync(u.veh,Math.sqrt(d*d+p*p),u.veh.nitroOn,u.veh.input.brake>.2?1:0)}this.fx.streaks.update(1/60,o.cam,Math.max(0,c.veh.fwdSpeed),c.veh.nitroOn>0),e.render(this.scene,o.cam)}e.setScissorTest(!1)}budget(t){if(!t)return;this.frameMs=this.frameMs*.9+t*.1,t>18.5?this.lateFrames++:this.lateFrames=Math.max(0,this.lateFrames-1),t<15.5?this.goodFrames++:this.goodFrames=0;let e=this.quality.minScale||.5,n=this.quality.scale||1;this.lateFrames>10&&this.scale>e?(this.scale=Math.max(e,this.scale-.1),this.lateFrames=0,this.onScale&&this.onScale(this.scale)):this.goodFrames>240&&this.scale<n&&(this.scale=Math.min(n,this.scale+.05),this.goodFrames=0,this.onScale&&this.onScale(this.scale))}dispose(){this.race.dispose(),this.world.dispose();let t=this.fx;for(let e of[t.sparks.points,t.smoke.points,t.skids.mesh,t.streaks.lines])e.geometry.dispose(),e.material.dispose()}};var Yr=["accel","brake","left","right","nitro","drift","look","camera"],rg=["B","A","Y","X","L","R","ZL","ZR","\u2212","+","L3","R3","Up","Down","Left","Right","Home","Capture"],ag={left:"\u25C0",right:"\u25B6",up:"\u25B2",down:"\u25BC",jump:"OK",confirm:"OK",run:"Run",cancel:"Back"};function $r(){return{accel:[{b:7}],brake:[{b:6},{k:"down"}],left:[{a:0,s:-1},{b:14},{k:"left"}],right:[{a:0,s:1},{b:15},{k:"right"}],nitro:[{b:0},{b:5},{k:"jump"},{k:"up"}],drift:[{b:1},{b:4},{k:"run"}],look:[{b:2},{k:"cancel"}],camera:[{b:3},{b:11}]}}var og={ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Space:"Space",Enter:"Enter",ShiftLeft:"Shift",ShiftRight:"R Shift",ControlLeft:"Ctrl",ControlRight:"R Ctrl",AltLeft:"Alt",AltRight:"R Alt"};function Ac(s){return s?s.c?"\u2328 "+(og[s.c]||s.c.replace(/^Key|^Digit/,"").replace(/^Numpad/,"Num ")):s.b!==void 0?rg[s.b]||"Button "+s.b:s.a!==void 0?(s.a<2?"L stick ":"R stick ")+(s.a%2===0?s.s<0?"\u25C0":"\u25B6":s.s<0?"\u25B2":"\u25BC"):s.k?ag[s.k]||s.k:"?":"\u2014"}var Zr=class{constructor(){this.map=$r(),this.devs=null,this.ctl={steer:0,throttle:0,brake:0,nitro:0,handbrake:0,look:0},this.edge={camera:0,nitro:0},this.prev={camera:0,nitro:0},this.lastNitroDown=-1,this.double=!1,this.auto=!0,this.curve=1.4,this.dead=.15}},Jr=class{constructor(){this.players=[new Zr,new Zr],this.pads={},this.acts={},this.capture=null,this.keys={},this.join=null,this.menuCb=null,this.time=0,this.onKey=t=>{let e=t.type==="keydown";e&&t.repeat||(this.keys[t.code]=e,this.capture&&(e?this.offer({c:t.code},3,"key:"+t.code):this.capture.held.delete("key:"+t.code)))},window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKey)}load(t){if(t){for(let e=0;e<2;e++)if(t[e]){let n=$r();for(let i of Yr)Array.isArray(t[e].map&&t[e].map[i])&&(n[i]=t[e].map[i]);this.players[e].map=n,this.players[e].auto=t[e].auto!==!1,t[e].curve&&(this.players[e].curve=t[e].curve),t[e].dead!==void 0&&(this.players[e].dead=t[e].dead)}}}save(){return this.players.map(t=>({map:t.map,auto:t.auto,curve:t.curve,dead:t.dead}))}pad(t){return this.pads[t]||(this.pads[t]={b:new Float32Array(24),a:new Float32Array(4)})}owner(t){return!this.players[1].devs||this.players[0].devs&&this.players[0].devs.has(t)?0:this.players[1].devs.has(t)?1:-1}onAction(t,e,n,i){let r=this.acts[i]||(this.acts[i]={});if(n){this.menuCb&&this.menuCb(t,i,!0);return}if(r[t]=e,!(e&&this.join&&this.join(i,"act:"+t))){if(this.capture&&this.mine(i)){e?this.offer({k:t},t==="confirm"?0:1,"act:"+t):this.capture.held.delete("act:"+t);return}e&&this.menuCb&&this.menuCb(t,i,!1)}}onButton(t,e,n,i){let r=this.pad(i);r.b[t]=e?Math.max(.01,n||1):0,!(e&&this.join&&this.join(i,"btn:"+t))&&this.capture&&this.mine(i)&&(e?this.offer({b:t},2,i+":b"+t):this.capture.held.delete(i+":b"+t))}onAxes(t,e){let n=this.pad(e);for(let i=0;i<4&&i<t.length;i++){let r=t[i];if(this.capture&&this.mine(e)){let a=e+":a"+i+(r<0?"-":"+");Math.abs(r)>.7&&Math.abs(n.a[i])<=.7&&this.offer({a:i,s:r<0?-1:1},2,a),Math.abs(r)<.3&&(this.capture.held.delete(e+":a"+i+"-"),this.capture.held.delete(e+":a"+i+"+"))}n.a[i]=r}}mine(t){return this.capture.player===0?this.owner(t)!==1:this.owner(t)===1||!this.players[1].devs}startCapture(t,e,n,i,r){let a=new Set;for(let o in this.pads){let c=this.pads[o];for(let l=0;l<c.b.length;l++)c.b[l]>0&&a.add(o+":b"+l);for(let l=0;l<4;l++)Math.abs(c.a[l])>.5&&a.add(o+":a"+l+(c.a[l]<0?"-":"+"))}for(let o in this.acts)for(let c in this.acts[o])this.acts[o][c]&&a.add("act:"+c);for(let o in this.keys)this.keys[o]&&a.add("key:"+o);this.capture={player:t,action:e,slot:n,until:performance.now()+(r||3)*1e3,cb:i,held:a,best:null,at:0,start:performance.now()},this.capTimer=setInterval(()=>this.tickCapture(),30)}offer(t,e,n){let i=this.capture;i.held.has(n)||performance.now()-i.start<120||(!i.best||e>i.bestP)&&(i.best=t,i.bestP=e,i.at||(i.at=performance.now()))}tickCapture(){let t=this.capture;if(!t){clearInterval(this.capTimer);return}let e=performance.now();if(t.best&&e-t.at>80){this.finishCapture(t.best);return}!t.best&&e>t.until&&(this.capture=null,clearInterval(this.capTimer),t.cb&&t.cb(null))}cancelCapture(){this.capture&&(this.capture=null,clearInterval(this.capTimer))}finishCapture(t){let e=this.capture;this.capture=null,clearInterval(this.capTimer);let n=this.players[e.player].map[e.action],i=r=>r.b!==void 0&&r.b===t.b||r.a!==void 0&&r.a===t.a&&r.s===t.s||r.k&&r.k===t.k||r.c&&r.c===t.c;for(let r of Yr){let a=this.players[e.player].map[r];for(let o=a.length-1;o>=0;o--)i(a[o])&&a.splice(o,1)}e.slot<n.length?n[e.slot]=t:n.push(t),e.cb&&e.cb(t)}value(t,e){let n=this.players[t],i=0;if(e.b!==void 0||e.a!==void 0)for(let r in this.pads){if(n.devs&&!n.devs.has(r)||!n.devs&&this.players[1].devs&&this.players[1].devs.has(r))continue;let a=this.pads[r],o=0;if(e.b!==void 0)o=a.b[e.b];else{let c=a.a[e.a]*e.s,l=n.dead;o=c>l?(c-l)/(1-l):0}o>i&&(i=o)}else if(e.c)this.keys[e.c]&&(i=1);else if(e.k)for(let r in this.acts)n.devs&&!n.devs.has(r)||!n.devs&&this.players[1].devs&&this.players[1].devs.has(r)||this.acts[r][e.k]&&(i=1);return i}act(t,e){let n=this.players[t].map[e],i=0;for(let r=0;r<n.length;r++){let a=this.value(t,n[r]);a>i&&(i=a)}return i}poll(t){this.time+=t;for(let e=0;e<2;e++){let n=this.players[e],i=n.ctl,r=this.act(e,"left"),a=this.act(e,"right"),o=r-a;o=Math.sign(o)*Math.pow(Math.abs(o),n.curve),i.steer=o,i.throttle=this.act(e,"accel"),i.brake=this.act(e,"brake"),i.handbrake=this.act(e,"drift")>.3?1:0;let c=this.act(e,"nitro")>.3?1:0;i.nitro=c,i.look=this.act(e,"look")>.3?1:0;let l=this.act(e,"camera")>.3?1:0;n.edge.camera=l&&!n.prev.camera?1:0,n.prev.camera=l,n.double=!1,c&&!n.prev.nitro&&(this.time-n.lastNitroDown<.32&&(n.double=!0),n.lastNitroDown=this.time),n.prev.nitro=c}}dispose(){window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKey),this.cancelCapture()}clearHeld(){this.keys={};for(let t in this.acts)this.acts[t]={};for(let t in this.pads)this.pads[t].b.fill(0),this.pads[t].a.fill(0)}};var Kr={en:{press:"Press B to start",career:"Career",quick:"Quick race",two:"2 players",garage:"Garage",settings:"Settings",back:"Back",go:"Race!",locked:"Locked",stars:"stars",credits:"credits",need:"Needs",choose:"Choose your car",route:"Route",laps:"Laps",rivals:"Rivals",traffic:"Traffic",time:"Time of day",day:"Day",sunset:"Sunset",night:"Night",on:"On",off:"Off",sprint:"Sprint",race:"Race",takedown:"Takedown hunt",timeattack:"Beat the clock",raceD:"Finish in the top 3",takedownD:"Take down rivals before the finish",timeD:"Reach the finish before the clock runs out",restart:"Restart race",quitRace:"Quit race",pos:"POS",lap:"LAP",kmh:"km/h",nitro:"NITRO",results:"Results",cont:"Continue",retry:"Retry",place:"Place",best:"Best",vol_engine:"Engine volume",vol_sfx:"Effects volume",vol_music:"Music volume",roof:"Roof",sameRoof:"Roof the same colour",yourCar:"Your car",electric:"Electric",upgrade:"Upgrade",engine:"Engine",grip:"Tyres",paint:"Paint",buy:"Unlock",owned:"Owned",select:"Select",selected:"Selected",speed:"Top speed",accel:"Acceleration",handling:"Handling",nitroS:"Nitro",controls:"Controls",player:"Player",graphics:"Graphics",auto:"Automatic",low:"Low",mid:"Medium",high:"High",autoAcc:"Auto accelerate",easy:"Easy drive (the car steers itself)",esc:"Stability control",fps:"Show frame rate",camera:"Camera",a_accel:"Accelerate",a_brake:"Brake / reverse",a_left:"Steer left",a_right:"Steer right",a_nitro:"Nitro (twice: Overdrive)",a_drift:"Drift / handbrake",a_look:"Look back",a_camera:"Change camera",pressBtn:"Press any button\u2026",clearB:"Clear",addB:"Add",steerFeel:"Steering response",gentle:"Gentle",normal:"Normal",direct:"Direct",deadZone:"Stick dead zone",mapHelp:"OK on a button box, then press the new button within 3 seconds (any button works). Up to 4 buttons per action.",reset:"Back to defaults",join:"Player 1 and player 2: press any button on your controller",p1:"Player 1",p2:"Player 2",ready:"Ready",waiting:"Press a button",chapter:"Chapter",loading:"Loading Tangier\u2026",wrecked:"WRECKED",finish:"FINISH",takedowns:"Takedowns",nearMiss:"Near misses",drift:"Drift",air:"Airtime",credits_title:"Credits",creditsText:"Road shapes \xA9 OpenStreetMap contributors (ODbL). Heights: AWS Terrain Tiles (public). Cars, props and sounds: Kenney (CC0). Font: Chakra Petch (OFL).",goal:"Goal",reward:"Reward",mode:"Mode",controlsHelp:"B nitro \xB7 A drift \xB7 ZL brake \xB7 ZR accelerate \xB7 Y look back \xB7 X camera \xB7 + pause",controlsHelpRemote:"Remote: \u25C0 \u25B6 steer \xB7 OK nitro \xB7 \u25BC brake"},fr:{press:"Appuyez sur B pour commencer",career:"Carri\xE8re",quick:"Course rapide",two:"2 joueurs",garage:"Garage",settings:"R\xE9glages",back:"Retour",go:"Course !",locked:"Verrouill\xE9",stars:"\xE9toiles",credits:"cr\xE9dits",need:"Il faut",choose:"Choisissez votre voiture",route:"Parcours",laps:"Tours",rivals:"Rivaux",traffic:"Circulation",time:"Moment",day:"Jour",sunset:"Coucher de soleil",night:"Nuit",on:"Oui",off:"Non",sprint:"Sprint",race:"Course",takedown:"Chasse aux takedowns",timeattack:"Contre la montre",raceD:"Finir dans les 3 premiers",takedownD:"\xC9liminez des rivaux avant l\u2019arriv\xE9e",timeD:"Arrivez avant la fin du chrono",restart:"Recommencer",quitRace:"Quitter la course",pos:"POS",lap:"TOUR",kmh:"km/h",nitro:"NITRO",results:"R\xE9sultats",cont:"Continuer",retry:"R\xE9essayer",place:"Place",best:"Record",vol_engine:"Volume du moteur",vol_sfx:"Volume des effets",vol_music:"Volume de la musique",roof:"Toit",sameRoof:"Toit de la m\xEAme couleur",yourCar:"Votre voiture",electric:"\xC9lectrique",upgrade:"Am\xE9liorer",engine:"Moteur",grip:"Pneus",paint:"Peinture",buy:"D\xE9bloquer",owned:"Poss\xE9d\xE9e",select:"Choisir",selected:"Choisie",speed:"Vitesse max",accel:"Acc\xE9l\xE9ration",handling:"Tenue de route",nitroS:"Nitro",controls:"Commandes",player:"Joueur",graphics:"Graphismes",auto:"Automatique",low:"Bas",mid:"Moyen",high:"\xC9lev\xE9",autoAcc:"Acc\xE9l\xE9ration automatique",easy:"Conduite facile (la voiture se dirige seule)",esc:"Contr\xF4le de stabilit\xE9",fps:"Afficher les images/s",camera:"Cam\xE9ra",a_accel:"Acc\xE9l\xE9rer",a_brake:"Freiner / reculer",a_left:"Tourner \xE0 gauche",a_right:"Tourner \xE0 droite",a_nitro:"Nitro (deux fois : Overdrive)",a_drift:"Drift / frein \xE0 main",a_look:"Regarder derri\xE8re",a_camera:"Changer de cam\xE9ra",pressBtn:"Appuyez sur un bouton\u2026",clearB:"Effacer",addB:"Ajouter",steerFeel:"R\xE9ponse de la direction",gentle:"Douce",normal:"Normale",direct:"Directe",deadZone:"Zone morte du stick",mapHelp:"OK sur une case, puis appuyez sur le nouveau bouton dans les 3 secondes (tous les boutons marchent). Jusqu\u2019\xE0 4 boutons par action.",reset:"Par d\xE9faut",join:"Joueur 1 et joueur 2 : appuyez sur un bouton de votre manette",p1:"Joueur 1",p2:"Joueur 2",ready:"Pr\xEAt",waiting:"Appuyez sur un bouton",chapter:"Chapitre",loading:"Chargement de Tanger\u2026",wrecked:"\xC9PAVE",finish:"ARRIV\xC9E",takedowns:"Takedowns",nearMiss:"Fr\xF4lements",drift:"Drift",air:"Saut",credits_title:"Cr\xE9dits",creditsText:"Routes \xA9 contributeurs OpenStreetMap (ODbL). Relief : AWS Terrain Tiles (public). Voitures, d\xE9cors et sons : Kenney (CC0). Police : Chakra Petch (OFL).",goal:"Objectif",reward:"R\xE9compense",mode:"Mode",controlsHelp:"B nitro \xB7 A drift \xB7 ZL frein \xB7 ZR acc\xE9l\xE9rer \xB7 Y regarder derri\xE8re \xB7 X cam\xE9ra \xB7 + pause",controlsHelpRemote:"T\xE9l\xE9commande : \u25C0 \u25B6 diriger \xB7 OK nitro \xB7 \u25BC freiner"},es:{press:"Pulsa B para empezar",career:"Carrera",quick:"Carrera r\xE1pida",two:"2 jugadores",garage:"Garaje",settings:"Ajustes",back:"Atr\xE1s",go:"\xA1A correr!",locked:"Bloqueado",stars:"estrellas",credits:"cr\xE9ditos",need:"Necesita",choose:"Elige tu coche",route:"Ruta",laps:"Vueltas",rivals:"Rivales",traffic:"Tr\xE1fico",time:"Hora",day:"D\xEDa",sunset:"Atardecer",night:"Noche",on:"S\xED",off:"No",sprint:"Sprint",race:"Carrera",takedown:"Caza de takedowns",timeattack:"Contrarreloj",raceD:"Termina entre los 3 primeros",takedownD:"Derriba rivales antes de la meta",timeD:"Llega a la meta antes de que acabe el tiempo",restart:"Reiniciar carrera",quitRace:"Salir de la carrera",pos:"POS",lap:"VUELTA",kmh:"km/h",nitro:"NITRO",results:"Resultados",cont:"Continuar",retry:"Reintentar",place:"Puesto",best:"R\xE9cord",vol_engine:"Volumen del motor",vol_sfx:"Volumen de efectos",vol_music:"Volumen de la m\xFAsica",roof:"Techo",sameRoof:"Techo del mismo color",yourCar:"Tu coche",electric:"El\xE9ctrico",upgrade:"Mejorar",engine:"Motor",grip:"Neum\xE1ticos",paint:"Pintura",buy:"Desbloquear",owned:"Tuyo",select:"Elegir",selected:"Elegido",speed:"Velocidad m\xE1x.",accel:"Aceleraci\xF3n",handling:"Manejo",nitroS:"Nitro",controls:"Controles",player:"Jugador",graphics:"Gr\xE1ficos",auto:"Autom\xE1tico",low:"Bajo",mid:"Medio",high:"Alto",autoAcc:"Acelerar solo",easy:"Conducci\xF3n f\xE1cil (el coche gira solo)",esc:"Control de estabilidad",fps:"Mostrar FPS",camera:"C\xE1mara",a_accel:"Acelerar",a_brake:"Frenar / marcha atr\xE1s",a_left:"Girar a la izquierda",a_right:"Girar a la derecha",a_nitro:"Nitro (dos veces: Overdrive)",a_drift:"Derrape / freno de mano",a_look:"Mirar atr\xE1s",a_camera:"Cambiar c\xE1mara",pressBtn:"Pulsa cualquier bot\xF3n\u2026",clearB:"Borrar",addB:"A\xF1adir",steerFeel:"Respuesta de la direcci\xF3n",gentle:"Suave",normal:"Normal",direct:"Directa",deadZone:"Zona muerta del stick",mapHelp:"OK en una casilla y pulsa el bot\xF3n nuevo en 3 segundos (vale cualquier bot\xF3n). Hasta 4 botones por acci\xF3n.",reset:"Por defecto",join:"Jugador 1 y jugador 2: pulsad un bot\xF3n de vuestro mando",p1:"Jugador 1",p2:"Jugador 2",ready:"Listo",waiting:"Pulsa un bot\xF3n",chapter:"Cap\xEDtulo",loading:"Cargando T\xE1nger\u2026",wrecked:"DESTROZADO",finish:"META",takedowns:"Takedowns",nearMiss:"Roces",drift:"Derrape",air:"Salto",credits_title:"Cr\xE9ditos",creditsText:"Carreteras \xA9 colaboradores de OpenStreetMap (ODbL). Relieve: AWS Terrain Tiles (p\xFAblico). Coches, objetos y sonidos: Kenney (CC0). Fuente: Chakra Petch (OFL).",goal:"Objetivo",reward:"Premio",mode:"Modo",controlsHelp:"B nitro \xB7 A derrape \xB7 ZL frenar \xB7 ZR acelerar \xB7 Y mirar atr\xE1s \xB7 X c\xE1mara \xB7 + pausa",controlsHelpRemote:"Mando a distancia: \u25C0 \u25B6 girar \xB7 OK nitro \xB7 \u25BC frenar"},ar:{press:"\u0627\u0636\u063A\u0637 B \u0644\u0644\u0628\u062F\u0621",career:"\u0627\u0644\u0645\u0633\u064A\u0631\u0629",quick:"\u0633\u0628\u0627\u0642 \u0633\u0631\u064A\u0639",two:"\u0644\u0627\u0639\u0628\u0627\u0646",garage:"\u0627\u0644\u0645\u0631\u0622\u0628",settings:"\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",back:"\u0631\u062C\u0648\u0639",go:"\u0627\u0646\u0637\u0644\u0642!",locked:"\u0645\u0642\u0641\u0644",stars:"\u0646\u062C\u0648\u0645",credits:"\u0631\u0635\u064A\u062F",need:"\u064A\u062A\u0637\u0644\u0628",choose:"\u0627\u062E\u062A\u0631 \u0633\u064A\u0627\u0631\u062A\u0643",route:"\u0627\u0644\u0645\u0633\u0627\u0631",laps:"\u0627\u0644\u0644\u0641\u0627\u062A",rivals:"\u0627\u0644\u0645\u0646\u0627\u0641\u0633\u0648\u0646",traffic:"\u062D\u0631\u0643\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",time:"\u0627\u0644\u0648\u0642\u062A",day:"\u0646\u0647\u0627\u0631",sunset:"\u063A\u0631\u0648\u0628",night:"\u0644\u064A\u0644",on:"\u0646\u0639\u0645",off:"\u0644\u0627",sprint:"\u0633\u0628\u0627\u0642 \u0645\u0633\u062A\u0642\u064A\u0645",race:"\u0633\u0628\u0627\u0642",takedown:"\u0635\u064A\u062F \u0627\u0644\u0625\u0633\u0642\u0627\u0637\u0627\u062A",timeattack:"\u0636\u062F \u0627\u0644\u0633\u0627\u0639\u0629",raceD:"\u0623\u0646\u0647\u0650 \u0636\u0645\u0646 \u0627\u0644\u062B\u0644\u0627\u062B\u0629 \u0627\u0644\u0623\u0648\u0627\u0626\u0644",takedownD:"\u0623\u0633\u0642\u0637 \u0627\u0644\u0645\u0646\u0627\u0641\u0633\u064A\u0646 \u0642\u0628\u0644 \u062E\u0637 \u0627\u0644\u0646\u0647\u0627\u064A\u0629",timeD:"\u0627\u0635\u0644 \u0642\u0628\u0644 \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u0648\u0642\u062A",restart:"\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0633\u0628\u0627\u0642",quitRace:"\u0627\u0644\u062E\u0631\u0648\u062C \u0645\u0646 \u0627\u0644\u0633\u0628\u0627\u0642",pos:"\u0627\u0644\u0645\u0631\u0643\u0632",lap:"\u0644\u0641\u0629",kmh:"\u0643\u0645/\u0633",nitro:"\u0646\u064A\u062A\u0631\u0648",results:"\u0627\u0644\u0646\u062A\u0627\u0626\u062C",cont:"\u0645\u062A\u0627\u0628\u0639\u0629",retry:"\u0625\u0639\u0627\u062F\u0629",place:"\u0627\u0644\u0645\u0631\u0643\u0632",best:"\u0627\u0644\u0623\u0641\u0636\u0644",vol_engine:"\u0635\u0648\u062A \u0627\u0644\u0645\u062D\u0631\u0643",vol_sfx:"\u0635\u0648\u062A \u0627\u0644\u0645\u0624\u062B\u0631\u0627\u062A",vol_music:"\u0635\u0648\u062A \u0627\u0644\u0645\u0648\u0633\u064A\u0642\u0649",roof:"\u0627\u0644\u0633\u0642\u0641",sameRoof:"\u0627\u0644\u0633\u0642\u0641 \u0628\u0646\u0641\u0633 \u0627\u0644\u0644\u0648\u0646",yourCar:"\u0633\u064A\u0627\u0631\u062A\u0643",electric:"\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629",upgrade:"\u062A\u0637\u0648\u064A\u0631",engine:"\u0627\u0644\u0645\u062D\u0631\u0643",grip:"\u0627\u0644\u0625\u0637\u0627\u0631\u0627\u062A",paint:"\u0627\u0644\u0637\u0644\u0627\u0621",buy:"\u0641\u062A\u062D",owned:"\u0645\u0645\u0644\u0648\u0643\u0629",select:"\u0627\u062E\u062A\u064A\u0627\u0631",selected:"\u0645\u062E\u062A\u0627\u0631\u0629",speed:"\u0627\u0644\u0633\u0631\u0639\u0629 \u0627\u0644\u0642\u0635\u0648\u0649",accel:"\u0627\u0644\u062A\u0633\u0627\u0631\u0639",handling:"\u0627\u0644\u062A\u062D\u0643\u0645",nitroS:"\u0646\u064A\u062A\u0631\u0648",controls:"\u0627\u0644\u062A\u062D\u0643\u0645",player:"\u0627\u0644\u0644\u0627\u0639\u0628",graphics:"\u0627\u0644\u0631\u0633\u0648\u0645\u0627\u062A",auto:"\u062A\u0644\u0642\u0627\u0626\u064A",low:"\u0645\u0646\u062E\u0641\u0636",mid:"\u0645\u062A\u0648\u0633\u0637",high:"\u0645\u0631\u062A\u0641\u0639",autoAcc:"\u062A\u0633\u0627\u0631\u0639 \u062A\u0644\u0642\u0627\u0626\u064A",easy:"\u0642\u064A\u0627\u062F\u0629 \u0633\u0647\u0644\u0629 (\u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u062A\u0648\u062C\u0647 \u0646\u0641\u0633\u0647\u0627)",esc:"\u0627\u0644\u062A\u062D\u0643\u0645 \u0628\u0627\u0644\u062B\u0628\u0627\u062A",fps:"\u0639\u0631\u0636 \u0645\u0639\u062F\u0644 \u0627\u0644\u0625\u0637\u0627\u0631\u0627\u062A",camera:"\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627",a_accel:"\u062A\u0633\u0627\u0631\u0639",a_brake:"\u0641\u0631\u0627\u0645\u0644 / \u0631\u062C\u0648\u0639",a_left:"\u064A\u0633\u0627\u0631",a_right:"\u064A\u0645\u064A\u0646",a_nitro:"\u0646\u064A\u062A\u0631\u0648 (\u0645\u0631\u062A\u064A\u0646: \u0623\u0648\u0641\u0631\u062F\u0631\u0627\u064A\u0641)",a_drift:"\u0627\u0646\u062C\u0631\u0627\u0641 / \u0641\u0631\u0627\u0645\u0644 \u0627\u0644\u064A\u062F",a_look:"\u0627\u0644\u0646\u0638\u0631 \u0644\u0644\u062E\u0644\u0641",a_camera:"\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627",pressBtn:"\u0627\u0636\u063A\u0637 \u0623\u064A \u0632\u0631\u2026",clearB:"\u0645\u0633\u062D",addB:"\u0625\u0636\u0627\u0641\u0629",steerFeel:"\u0627\u0633\u062A\u062C\u0627\u0628\u0629 \u0627\u0644\u062A\u0648\u062C\u064A\u0647",gentle:"\u0646\u0627\u0639\u0645\u0629",normal:"\u0639\u0627\u062F\u064A\u0629",direct:"\u0645\u0628\u0627\u0634\u0631\u0629",deadZone:"\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0645\u064A\u062A\u0629 \u0644\u0639\u0635\u0627 \u0627\u0644\u062A\u062D\u0643\u0645",mapHelp:"\u0627\u0636\u063A\u0637 OK \u0639\u0644\u0649 \u062E\u0627\u0646\u0629 \u062B\u0645 \u0627\u0636\u063A\u0637 \u0627\u0644\u0632\u0631 \u0627\u0644\u062C\u062F\u064A\u062F \u062E\u0644\u0627\u0644 3 \u062B\u0648\u0627\u0646\u064D (\u0623\u064A \u0632\u0631 \u064A\u0639\u0645\u0644). \u062D\u062A\u0649 4 \u0623\u0632\u0631\u0627\u0631 \u0644\u0643\u0644 \u0625\u062C\u0631\u0627\u0621.",reset:"\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0623\u0635\u0644\u064A\u0629",join:"\u0627\u0644\u0644\u0627\u0639\u0628 1 \u0648\u0627\u0644\u0644\u0627\u0639\u0628 2: \u0627\u0636\u063A\u0637\u0627 \u0623\u064A \u0632\u0631 \u0641\u064A \u064A\u062F \u0627\u0644\u062A\u062D\u0643\u0645",p1:"\u0627\u0644\u0644\u0627\u0639\u0628 1",p2:"\u0627\u0644\u0644\u0627\u0639\u0628 2",ready:"\u062C\u0627\u0647\u0632",waiting:"\u0627\u0636\u063A\u0637 \u0632\u0631\u064B\u0627",chapter:"\u0627\u0644\u0641\u0635\u0644",loading:"\u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 \u0637\u0646\u062C\u0629\u2026",wrecked:"\u062A\u062D\u0637\u0645\u062A",finish:"\u0627\u0644\u0646\u0647\u0627\u064A\u0629",takedowns:"\u0625\u0633\u0642\u0627\u0637\u0627\u062A",nearMiss:"\u062A\u062C\u0627\u0648\u0632\u0627\u062A \u062E\u0637\u0631\u0629",drift:"\u0627\u0646\u062C\u0631\u0627\u0641",air:"\u0637\u064A\u0631\u0627\u0646",credits_title:"\u0627\u0644\u0634\u0643\u0631",creditsText:"\u0627\u0644\u0637\u0631\u0642 \xA9 \u0645\u0633\u0627\u0647\u0645\u0648 OpenStreetMap (ODbL). \u0627\u0644\u062A\u0636\u0627\u0631\u064A\u0633: AWS Terrain Tiles. \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0623\u0635\u0648\u0627\u062A: Kenney (CC0). \u0627\u0644\u062E\u0637: Chakra Petch (OFL).",goal:"\u0627\u0644\u0647\u062F\u0641",reward:"\u0627\u0644\u0645\u0643\u0627\u0641\u0623\u0629",mode:"\u0627\u0644\u0646\u0645\u0637",controlsHelp:"B \u0646\u064A\u062A\u0631\u0648 \xB7 A \u0627\u0646\u062C\u0631\u0627\u0641 \xB7 ZL \u0641\u0631\u0627\u0645\u0644 \xB7 ZR \u062A\u0633\u0627\u0631\u0639 \xB7 Y \u062E\u0644\u0641 \xB7 X \u0643\u0627\u0645\u064A\u0631\u0627 \xB7 + \u0625\u064A\u0642\u0627\u0641",controlsHelpRemote:"\u062C\u0647\u0627\u0632 \u0627\u0644\u062A\u062D\u0643\u0645: \u25C0 \u25B6 \u062A\u0648\u062C\u064A\u0647 \xB7 OK \u0646\u064A\u062A\u0631\u0648 \xB7 \u25BC \u0641\u0631\u0627\u0645\u0644"}},Ne={lang:"en",set(s){this.lang=Kr[s]?s:"en",document.documentElement.lang=this.lang,document.documentElement.dir=this.lang==="ar"?"rtl":"ltr"},t(s){return Kr[this.lang]&&Kr[this.lang][s]||Kr.en[s]||s}};var We=[{id:"city",name:"Kasbah City",stars:0,paint:16053492,roof:13111342,mine:1},{id:"hatch",name:"Medina Hatch",stars:0,paint:15906565,roof:723726},{id:"volt",name:"Volta Saloon",stars:8,paint:16053492,roof:-1},{id:"suvlux",name:"Atlas Cruiser",stars:18,paint:2830134,roof:-1},{id:"wedge",name:"Spartel Wedge",stars:30,paint:12172996,roof:-1},{id:"police",name:"Interceptor",stars:44,paint:16053492,roof:-1},{id:"gt",name:"Hercules GT",stars:62,paint:14163500,roof:-1}],Qi=[16053492,13111342,14163500,14696490,15906565,1623730,1926102,1780298,5974998,2830134,1014332,12172996,10134445,723726],Rh=["Yassine","Salma","Karim","Nora","Omar","Imane","Hamza","Rania","Mehdi","Aya"],Ch=[15263976,2793952,3816006,12597547,10134445,15891205,1780298,8110147,15122985,1482885],Ph=[723726,-1,16053492,-1,13111342,-1],Qr=5;function Rc(s,t){let e=pe[s];t=t||{engine:0,nitro:0,grip:0};let n=e.power*(1+.06*t.engine),i=e.rpm*Math.PI/30/(e.gears[e.gears.length-1]*e.final)*.34*3.6,r=Math.round(Math.min(i,Math.cbrt(n*1e3/(.5*1.225*e.cda))*3.6*.9)),a=Math.min(100,Math.round(n/e.mass*1e3/5.2)),o=Math.min(100,Math.round((e.mu*(1+.025*t.grip)-.9)*180+e.cl*25)),c=Math.min(100,Math.round(e.nitro*(1+.08*t.nitro)/e.mass*1e3*8));return{top:r,acc:a,hand:o,nit:c}}var jr=class{constructor(t,e){this.routes=e.routes;let n=t||{},i=We.map(o=>o.id),r=o=>i.includes(o);this.d={stars:n.stars||{},credits:n.credits||3e3,owned:["city","hatch"].concat((n.owned||[]).filter(o=>r(o)&&o!=="city"&&o!=="hatch")),up:n.up||{},paint:n.paint||{},roof:n.roof||{},car:r(n.car)?n.car:"city",best:n.best||{},settings:Object.assign({quality:"auto",fps:0,units:"kmh",easy:[0,0],esc:[1,1],cam:0,mix:{engine:1,sfx:1,music:1}},n.settings||{})},this.events=[];let a=["race","takedown","time"];this.routes.forEach((o,c)=>{a.forEach((l,h)=>{this.events.push({id:o.id+":"+l,route:o.id,mode:l,chapter:c,need:c*4+h*2,laps:o.laps,rivals:l==="time"?0:5,goal:l==="takedown"?3+Math.min(4,c>>1):l==="time"?Math.round(o.length/(32+c*.6)):3,reward:1500+c*400+h*300})})})}save(){window.MyPC.save("career",this.d)}totalStars(){let t=0;for(let e in this.d.stars)t+=this.d.stars[e];return t}up(t){return this.d.up[t]||(this.d.up[t]={engine:0,nitro:0,grip:0})}paintOf(t){let e=We.find(n=>n.id===t)||We[0];return this.d.paint[t]!==void 0?this.d.paint[t]:e.paint}roofOf(t){let e=We.find(n=>n.id===t)||We[0];return this.d.roof[t]!==void 0?this.d.roof[t]:e.roof}upCost(t,e){let n=this.up(t)[e],i={D:1,C:1.4,B:1.9,A:2.6,S:3.4}[pe[t].cls]||1;return Math.round((n+1)*900*i/100)*100}buyUp(t,e){let n=this.up(t);if(n[e]>=Qr)return!1;let i=this.upCost(t,e);return this.d.credits<i?!1:(this.d.credits-=i,n[e]++,this.save(),!0)}unlocked(t){return this.d.owned.includes(t)||this.totalStars()>=We.find(e=>e.id===t).stars}eventOpen(t){return this.totalStars()>=t.need}grid(t){let e=[];for(let h of t.players)(!pe[h.car]||pe[h.car].cls==="T")&&(h.car="city");let n=t.players.length,i=pe[t.players[0].car].cls,r=["D","C","B","A","S"],a=r.indexOf(i),o=Object.keys(pe).filter(h=>pe[h].cls===i);o.length<2&&(o=Object.keys(pe).filter(h=>pe[h].cls!=="T"&&Math.abs(r.indexOf(pe[h].cls)-a)<=1));let c=t.rivals!==void 0?t.rivals:5,l=t.event?t.event.chapter:3;for(let h=0;h<c;h++){let u=o[(h*3+l)%o.length];e.push({spec:u,paint:Ch[(h+l)%Ch.length],roof:Ph[(h+l)%Ph.length],player:-1,name:Rh[(h+l)%Rh.length],skill:Math.min(1,.8+l*.018+h%3*.03),upgrades:{engine:Math.min(5,l>>1),nitro:1,grip:Math.min(5,l>>1)}})}for(let h=0;h<n;h++){let u=t.players[h];e.push({spec:u.car,paint:u.paint!==void 0?u.paint:this.paintOf(u.car),roof:u.roof!==void 0?u.roof:this.roofOf(u.car),player:h,name:u.name||"P"+(h+1),upgrades:this.up(u.car),assist:{easy:this.d.settings.easy[h]||u.bot?1:0,bot:!!u.bot,auto:1,esc:this.d.settings.esc[h]}})}return e}result(t,e){let n={cfg:t,rows:[],players:[]},i=e.racers.slice().sort((a,o)=>a.place-o.place);for(let a of i)n.rows.push({place:a.place,name:a.player>=0?e.players.length>1?"P"+(a.player+1):window.TA&&window.TA.info&&window.TA.info.profile?window.TA.info.profile.name:"You":a.name,player:a.player,time:a.finished?a.finishTime:0,car:a.spec.model});for(let a of e.players){let o={place:a.place,time:a.finished?a.finishTime:0,takedowns:a.takedowns,near:a.nearMiss,drift:a.driftScore,wrecks:a.wrecks,stars:0,credits:0},c=t.event;if(c){c.mode==="race"?o.stars=a.place===1?3:a.place===2?2:a.place===3?1:0:c.mode==="takedown"?o.stars=a.takedowns>=c.goal+2?3:a.takedowns>=c.goal+1?2:a.takedowns>=c.goal?1:0:c.mode==="time"&&(o.stars=a.finished?a.finishTime<=c.goal*.92?3:a.finishTime<=c.goal*.97?2:a.finishTime<=c.goal?1:0:0);let h=this.d.stars[c.id]||0;o.stars>h&&(this.d.stars[c.id]=o.stars),o.credits=Math.round(c.reward*(.35+o.stars*.3))+a.takedowns*120}else o.credits=Math.round(400+Math.max(0,6-a.place)*120+a.takedowns*80);this.d.credits+=o.credits;let l=t.route+(c?":"+c.mode:"");a.finished&&(!this.d.best[l]||a.finishTime<this.d.best[l])&&(this.d.best[l]=+a.finishTime.toFixed(2),o.record=!0),n.players.push(o)}let r=n.players[0];return n.score=Math.max(0,Math.round((10-r.place)*1e3+r.takedowns*250+r.near*40+(r.time?Math.max(0,600-r.time)*5:0))),this.save(),n}};var Q=s=>Ne.t(s);function J(s,t,...e){let n=document.createElement(s);if(t)for(let i in t)i==="class"?n.className=t[i]:i==="on"?n.addEventListener("click",t[i]):i==="style"?n.setAttribute("style",t[i]):t[i]!==void 0&&t[i]!==!1&&n.setAttribute(i,t[i]);for(let i of e.flat())i!=null&&i!==!1&&n.appendChild(typeof i=="string"||typeof i=="number"?document.createTextNode(String(i)):i);return n}var Cc=(s,t)=>"\u2605".repeat(s)+"\u2606".repeat(Math.max(0,(t||3)-s)),Ih=s=>{let t=Math.floor(s/60),e=s-t*60;return t+":"+(e<10?"0":"")+e.toFixed(2)},ta=class{constructor(t,e){this.app=t,this.root=e,this.stack=[],this.focus=null,this.screen="",this.show=!0,this.carSel=null,this.quickCfg={route:t.routes.routes[0].id,laps:0,rivals:5,traffic:1,time:""},e.addEventListener("mouseover",n=>{let i=n.target.closest("[data-f]");i&&this.setFocus(i)})}wantsShowroom(){return this.show}hide(){this.root.style.display="none",this.show=!1}loading(t){let e=document.getElementById("loading");t?(e||(e=J("div",{id:"loading"},J("div",{class:"spin"}),J("div",null,Q("loading"))),document.body.appendChild(e)),e.style.display="flex"):e&&(e.style.display="none")}tick(){}render(t,e,n){this.screen=t,this.root.style.display="block",this.show=!0,this.root.innerHTML="",this.root.className="ui s-"+t;let i=e();this.root.appendChild(i),this.onBack=n&&n.back,this.onLR=null;let r=this.root.querySelector("[data-first]")||this.root.querySelector("[data-f]");this.setFocus(r),this.app.sound&&this.app.sound.ui("switch")}setFocus(t){this.focus&&this.focus.classList.remove("focus"),this.focus=t,t&&(t.classList.add("focus"),t.scrollIntoView&&t.scrollIntoView({block:"nearest",inline:"nearest"}),t.dataset.say&&window.MyPC.announce&&window.MyPC.announce(t.dataset.say),t._onFocus&&t._onFocus())}move(t,e){let n=Array.from(this.root.querySelectorAll("[data-f]"));if(!this.focus){this.setFocus(n[0]);return}let i=this.focus.getBoundingClientRect(),r=i.left+i.width/2,a=i.top+i.height/2,o=null,c=1e9;for(let l of n){if(l===this.focus)continue;let h=l.getBoundingClientRect(),u=h.left+h.width/2,d=h.top+h.height/2,p=u-r,m=d-a,v=p*t+m*e;if(v<=4)continue;let g=Math.abs(p*e-m*t),f=v+g*2.2;f<c&&(c=f,o=l)}o&&(this.setFocus(o),this.app.sound&&this.app.sound.ui("move"))}input(t,e,n){if(this.app.state==="race"||this.app.state==="loading"||this.app.input.capture||this.joinMode&&!n)return;let i=Ne.lang==="ar";if(t==="up")this.move(0,-1);else if(t==="down")this.move(0,1);else if(t==="left"||t==="right"){let r=(t==="left"?-1:1)*(i?-1:1);this.focus&&this.focus._lr?(this.focus._lr(r*(i?-1:1)),this.app.sound&&this.app.sound.ui("move")):this.move(t==="left"?-1:1,0)}else t==="confirm"&&!n?this.focus&&(this.app.sound&&this.app.sound.ui("ok"),this.focus.click()):t==="cancel"&&!n&&this.onBack&&(this.app.sound&&this.app.sound.ui("back"),this.onBack())}btn(t,e,n,i){return J("button",Object.assign({class:"btn "+(n||""),"data-f":"1","data-say":typeof t=="string"?t:"",on:e},i||{}),t)}opt(t,e,n,i){let r=J("span",{class:"ov"}),a=J("div",{class:"opt","data-f":"1"},J("span",{class:"ol"},t),J("span",{class:"oa"},"\u25C0"),r,J("span",{class:"oa"},"\u25B6")),o=()=>{let c=e.find(l=>l.v===n());r.textContent=c?c.l:String(n()),a.dataset.say=t+" "+r.textContent};return a._lr=c=>{let l=e.findIndex(u=>u.v===n()),h=e[(l+c+e.length)%e.length];i(h.v),o()},a.addEventListener("click",()=>a._lr(1)),o(),a}title(){this.render("title",()=>J("div",{class:"title"},J("div",{class:"logo"},J("span",{class:"l1"},"TANGIER"),J("span",{class:"l2"},"ASPHALT")),J("div",{class:"tag"},"Corniche \xB7 Marina Bay \xB7 Rmilat \xB7 Achakar \xB7 Mesnana \xB7 Dradeb"),this.btn(Q("press"),()=>this.home(),"press",{"data-first":"1"}),J("div",{class:"foot"},Q("creditsText")))),this.app.showroom.show(this.app.career.d.car,this.app.career.paintOf(this.app.career.d.car),this.app.career.roofOf(this.app.career.d.car))}topbar(){let t=this.app.career;return J("div",{class:"topbar"},J("div",{class:"brand"},"TANGIER",J("b",null,"ASPHALT")),J("div",{class:"wallet"},J("span",{class:"st"},"\u2605 "+t.totalStars()),J("span",{class:"cr"},"\u25C6 "+t.d.credits.toLocaleString())))}home(){let t=this.app.career;this.app.showroom.show(t.d.car,t.paintOf(t.d.car),t.roofOf(t.d.car)),this.render("home",()=>J("div",{class:"wrap"},this.topbar(),J("div",{class:"tiles"},this.tile("career",Q("career"),t.totalStars()+" / "+t.events.length*3+" \u2605",()=>this.career(),!0),this.tile("quick",Q("quick"),this.app.routes.routes.length+" Tangier routes",()=>this.quick()),this.tile("two",Q("two"),"Split screen",()=>this.twoPlayers()),this.tile("garage",Q("garage"),We.find(e=>e.id===t.d.car).name,()=>this.garage()),this.tile("settings",Q("settings"),Q("controls")+" \xB7 "+Q("graphics"),()=>this.settings())),J("div",{class:"hint"},Q("controlsHelp"))),{back:()=>this.title()})}tile(t,e,n,i,r){return J("div",{class:"tile t-"+t,"data-f":"1","data-say":e,"data-first":r?"1":void 0,on:i},J("div",{class:"tn"},e),J("div",{class:"ts"},n))}career(){let t=this.app.career,e=this.app.routes.routes;this.render("career",()=>J("div",{class:"wrap"},this.topbar(),J("h1",null,Q("career")),J("div",{class:"routes"},e.map((n,i)=>{let r=t.events.filter(l=>l.route===n.id),a=r.reduce((l,h)=>l+(t.d.stars[h.id]||0),0),o=t.eventOpen(r[0]);return J("div",{class:"rcard"+(o?"":" locked"),"data-f":"1","data-say":n.name,"data-first":i===0?"1":void 0,on:()=>o?this.events(n):null},J("div",{class:"rk"},Q("chapter")+" "+(i+1)),this.mini(n),J("div",{class:"rn"},n.name),J("div",{class:"ra"},n.area+" \xB7 "+(n.length/1e3).toFixed(1)+" km"+(n.laps?" \xB7 "+n.laps+" "+Q("laps"):"")),J("div",{class:"rs"},o?Cc(Math.min(9,a),9):"\u{1F512} "+Q("need")+" "+r[0].need+" \u2605"))}))),{back:()=>this.home()})}mini(t){let e=t.minimap,n=1e9,i=-1e9,r=1e9,a=-1e9;for(let h=0;h<e.length;h+=2)n=Math.min(n,e[h]),i=Math.max(i,e[h]),r=Math.min(r,e[h+1]),a=Math.max(a,e[h+1]);let o=100/Math.max(i-n,a-r,1),c="";for(let h=0;h<e.length;h+=2)c+=(h?"L":"M")+((e[h]-n)*o+(100-(i-n)*o)/2).toFixed(1)+" "+((e[h+1]-r)*o+(100-(a-r)*o)/2).toFixed(1);let l=document.createElementNS("http://www.w3.org/2000/svg","svg");return l.setAttribute("viewBox","-6 -6 112 112"),l.setAttribute("class","rmap"),l.innerHTML='<path d="'+c+'" fill="none" stroke="rgba(0,0,0,.5)" stroke-width="7" stroke-linejoin="round"/><path d="'+c+'" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>',l}events(t){let e=this.app.career,n=e.events.filter(i=>i.route===t.id);this.render("events",()=>J("div",{class:"wrap"},this.topbar(),J("h1",null,t.name),J("div",{class:"sub"},t.area+" \xB7 "+(t.roads||[]).slice(0,3).join(" \xB7 ")),J("div",{class:"evs"},n.map((i,r)=>{let a=e.eventOpen(i),o=i.mode==="race"?Q("raceD"):i.mode==="takedown"?Q("takedownD")+" ("+i.goal+")":Q("timeD")+" ("+Ih(i.goal)+")";return J("div",{class:"ev"+(a?"":" locked"),"data-f":"1","data-first":r===0?"1":void 0,"data-say":Q(i.mode==="time"?"timeattack":i.mode),on:()=>a?this.pickCar({route:t.id,event:i,laps:i.laps,rivals:i.rivals,mode:i.mode}):null},J("div",{class:"em"},Q(i.mode==="time"?"timeattack":i.mode)),J("div",{class:"eg"},o),J("div",{class:"er"},a?Cc(e.d.stars[i.id]||0)+"   \u25C6 "+i.reward:"\u{1F512} "+Q("need")+" "+i.need+" \u2605"))}))),{back:()=>this.career()})}quick(){let t=this.quickCfg,e=this.app.routes.routes;this.render("quick",()=>J("div",{class:"wrap"},this.topbar(),J("h1",null,Q("quick")),J("div",{class:"form"},this.opt(Q("route"),e.map(n=>({v:n.id,l:n.name})),()=>t.route,n=>{t.route=n}),this.opt(Q("laps"),[{v:0,l:"Auto"},{v:1,l:"1"},{v:2,l:"2"},{v:3,l:"3"}],()=>t.laps,n=>{t.laps=n}),this.opt(Q("rivals"),[0,1,3,5,7].map(n=>({v:n,l:String(n)})),()=>t.rivals,n=>{t.rivals=n}),this.opt(Q("traffic"),[{v:1,l:Q("on")},{v:0,l:Q("off")}],()=>t.traffic,n=>{t.traffic=n}),this.opt(Q("time"),[{v:"",l:Q("auto")},{v:"day",l:Q("day")},{v:"sunset",l:Q("sunset")},{v:"night",l:Q("night")}],()=>t.time,n=>{t.time=n}),this.btn(Q("choose"),()=>this.pickCar({route:t.route,laps:t.laps||void 0,rivals:t.rivals,traffic:!!t.traffic,time:t.time||void 0,mode:"race"}),"go"))),{back:()=>this.home()})}pickCar(t,e,n){e=e||0,n=n||[];let i=this.app.career,r=t.twoP,a=e===0?i.d.car:n[0]?n[0].car:i.d.car,o=J("div",{class:"carinfo"}),c=h=>{a=h;let u=We.find(p=>p.id===h),d=Rc(h,i.up(h));o.innerHTML="",o.appendChild(J("div",{class:"cn"},u.name)),o.appendChild(J("div",{class:"cc"},this.carTag(h)+(r?" \xB7 "+Q(e?"p2":"p1"):""))),o.appendChild(this.bars(d)),this.app.showroom.show(h,i.paintOf(h),i.roofOf(h))},l=J("div",{class:"carlist"},We.map(h=>{let u=i.unlocked(h.id),d=J("div",{class:"ccard"+(u?"":" locked")+(h.id===a?" sel":""),"data-f":"1","data-say":h.name,"data-first":h.id===a?"1":void 0,on:()=>{u&&(n[e]={car:h.id},r&&e===0?this.pickCar(t,1,n):this.go(t,n))}},J("div",{class:"ccl"},pe[h.id].cls),J("div",{class:"ccn"},h.name),u?null:J("div",{class:"ccs"},"\u{1F512} "+h.stars+" \u2605"));return d._onFocus=()=>c(h.id),d}));this.render("pick",()=>J("div",{class:"wrap"},this.topbar(),J("h1",null,Q("choose")+(r?" \u2014 "+Q(e?"p2":"p1"):"")),J("div",{class:"pick"},l,o)),{back:()=>r&&e===1?this.pickCar(t,0,n):t.event?this.career():r?this.twoPlayers():this.quick()}),c(a)}carTag(t){let e=We.find(i=>i.id===t),n=pe[t];return"Class "+n.cls+(e.mine?" \xB7 "+Q("yourCar"):"")+(n.ev?" \xB7 "+Q("electric"):"")}bars(t){let e=(n,i,r)=>J("div",{class:"bar"},J("span",null,Q(n)),J("i",null,J("b",{style:"transform:scaleX("+Math.min(1,i/r).toFixed(3)+")"})),J("em",null,n==="speed"?i+" km/h":String(i)));return J("div",{class:"bars"},e("speed",t.top,420),e("accel",t.acc,100),e("handling",t.hand,100),e("nitroS",t.nit,100))}go(t,e){let n=this.app.career;t.twoP||(n.d.car=e[0].car,n.save()),t.players=e.map((i,r)=>({car:i.car,roof:n.roofOf(i.car),paint:r===1&&e[0].car===i.car?Qi[(Qi.indexOf(n.paintOf(i.car))+4)%Qi.length]:n.paintOf(i.car)})),this.app.input.players[1].devs=t.twoP?this.app.input.players[1].devs:null,t.twoP||(this.app.input.players[0].devs=null),this.app.startRace(t)}twoPlayers(){let t=this.app.input,e=[new Set,new Set],n=0,i=J("div",{class:"joinp"},J("div",{class:"jn"},Q("p1")),J("div",{class:"js"},Q("waiting"))),r=J("div",{class:"joinp"},J("div",{class:"jn"},Q("p2")),J("div",{class:"js"},Q("waiting")));this.render("two",()=>J("div",{class:"wrap"},this.topbar(),J("h1",null,Q("two")),J("div",{class:"sub"},Q("join")),J("div",{class:"join"},i,r),J("div",{class:"sub small"},"Keyboard: player 1 = arrows + Enter, player 2 = W A S D + F")),{back:()=>{this.joinMode=!1,t.join=null,this.home()}}),this.joinMode=!0,t.join=(a,o)=>o==="act:cancel"&&n===0?(this.joinMode=!1,t.join=null,this.home(),!0):(e[0].has(a)||e[1].has(a)||(e[n].add(a),(n?r:i).classList.add("ok"),(n?r:i).querySelector(".js").textContent=Q("ready")+" \xB7 "+a,this.app.sound&&this.app.sound.ui("ok"),n++,n===2&&(t.players[0].devs=e[0],t.players[1].devs=e[1],t.join=null,setTimeout(()=>{this.joinMode=!1,this.twoOptions()},500))),!0)}twoOptions(){let t=Object.assign({},this.quickCfg,{rivals:3}),e=this.app.routes.routes;this.render("quick",()=>J("div",{class:"wrap"},this.topbar(),J("h1",null,Q("two")),J("div",{class:"form"},this.opt(Q("route"),e.map(n=>({v:n.id,l:n.name})),()=>t.route,n=>{t.route=n}),this.opt(Q("rivals"),[0,1,3,5].map(n=>({v:n,l:String(n)})),()=>t.rivals,n=>{t.rivals=n}),this.opt(Q("traffic"),[{v:1,l:Q("on")},{v:0,l:Q("off")}],()=>t.traffic,n=>{t.traffic=n}),this.opt(Q("time"),[{v:"",l:Q("auto")},{v:"day",l:Q("day")},{v:"sunset",l:Q("sunset")},{v:"night",l:Q("night")}],()=>t.time,n=>{t.time=n}),this.btn(Q("choose"),()=>this.pickCar({route:t.route,rivals:t.rivals,traffic:!!t.traffic,time:t.time||void 0,twoP:!0,mode:"race"}),"go"))),{back:()=>{this.app.input.players[1].devs=null,this.app.input.players[0].devs=null,this.home()}})}garage(t){let e=this.app.career;t=t||e.d.car;let n=We.find(d=>d.id===t),i=e.unlocked(t);this.app.showroom.show(t,e.paintOf(t),e.roofOf(t));let r=J("div",{class:"carlist"},We.map(d=>{let p=J("div",{class:"ccard"+(e.unlocked(d.id)?"":" locked")+(d.id===t?" sel":""),"data-f":"1","data-say":d.name,"data-first":d.id===t?"1":void 0,on:()=>this.garage(d.id)},J("div",{class:"ccl"},pe[d.id].cls),J("div",{class:"ccn"},d.name),e.unlocked(d.id)?null:J("div",{class:"ccs"},"\u{1F512} "+d.stars+" \u2605"));return p._onFocus=()=>this.app.showroom.show(d.id,e.paintOf(d.id),e.roofOf(d.id)),p})),a=e.up(t),o=d=>{let p=a[d]>=Qr;return J("div",{class:"uprow"+(i?"":" locked"),"data-f":"1","data-say":Q(d==="nitro"?"nitroS":d),on:()=>{i&&e.buyUp(t,d)&&(this.app.sound.ui("ok"),this.garage(t),this.focusSel(".uprow",["engine","nitro","grip"].indexOf(d)))}},J("span",{class:"un"},Q(d==="nitro"?"nitroS":d)),J("span",{class:"ul"},"\u25A0".repeat(a[d])+"\u25A1".repeat(Qr-a[d])),J("span",{class:"uc"},p?"MAX":"\u25C6 "+e.upCost(t,d)))},c=J("div",{class:"swatches"},Qi.map((d,p)=>{let m=J("div",{class:"sw"+(e.paintOf(t)===d?" sel":""),"data-f":"1",style:"background:#"+d.toString(16).padStart(6,"0"),on:()=>{e.d.paint[t]=d,e.save(),this.app.showroom.show(t,d,e.roofOf(t)),this.garage(t),this.focusSel(".sw",p)}});return m._onFocus=()=>this.app.showroom.show(t,d,e.roofOf(t)),m})),l=Es(pe[t].model).roofY<50,h=[-1].concat(Qi),u=l?J("div",{class:"swatches"},h.map((d,p)=>{let m=d<0?"background:linear-gradient(135deg,#"+e.paintOf(t).toString(16).padStart(6,"0")+" 50%,#555 50%)":"background:#"+d.toString(16).padStart(6,"0"),v=J("div",{class:"sw rf"+(e.roofOf(t)===d?" sel":""),"data-f":"1","data-say":d<0?Q("sameRoof"):Q("roof"),style:m,on:()=>{e.d.roof[t]=d,e.save(),this.app.showroom.show(t,e.paintOf(t),d),this.garage(t),this.focusSel(".sw.rf",p)}});return v._onFocus=()=>this.app.showroom.show(t,e.paintOf(t),d),v})):null;this.render("garage",()=>J("div",{class:"wrap"},this.topbar(),J("h1",null,Q("garage")),J("div",{class:"pick"},r,J("div",{class:"carinfo"},J("div",{class:"cn"},n.name),J("div",{class:"cc"},this.carTag(t)),this.bars(Rc(t,a)),i?this.btn(e.d.car===t?Q("selected"):Q("select"),()=>{e.d.car=t,e.save(),this.garage(t)},"go"):J("div",{class:"need"},"\u{1F512} "+Q("need")+" "+n.stars+" \u2605"),J("h3",null,Q("upgrade")),o("engine"),o("nitro"),o("grip"),J("h3",null,Q("paint")),c,l?J("h3",null,Q("roof")):null,u))),{back:()=>this.home()})}focusSel(t,e){let n=this.root.querySelectorAll(t);n[e]&&this.setFocus(n[e])}settings(){let t=this.app.career,e=t.d.settings,n=()=>t.save();this.render("settings",()=>J("div",{class:"wrap"},this.topbar(),J("h1",null,Q("settings")),J("div",{class:"form"},this.btn(Q("controls")+" \u2014 "+Q("p1"),()=>this.controls(0),"",{"data-first":"1"}),this.btn(Q("controls")+" \u2014 "+Q("p2"),()=>this.controls(1)),this.opt(Q("graphics"),[{v:"auto",l:Q("auto")},{v:"low",l:Q("low")},{v:"mid",l:Q("mid")},{v:"high",l:Q("high")}],()=>e.quality,i=>{e.quality=i,n(),this.app.setQuality&&this.app.setQuality(i)}),this.opt(Q("fps"),[{v:0,l:Q("off")},{v:1,l:Q("on")}],()=>e.fps,i=>{e.fps=i,n()}),...["engine","sfx","music"].map(i=>this.opt(Q("vol_"+i),[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1].map(r=>({v:r,l:Math.round(r*100)+" %"})),()=>e.mix[i],r=>{e.mix[i]=r,n(),this.app.sound.setMix(e.mix),i==="sfx"&&this.app.sound.ui("switch")})),J("div",{class:"credits"},J("b",null,Q("credits_title"))," ",Q("creditsText")))),{back:()=>this.home()})}controls(t,e){let n=this.app.input,i=n.players[t],r=this.app.career,a=r.d.settings,o=()=>{window.MyPC.save("controls",n.save()),r.save()},c=h=>{this.controls(t,h)},l=Yr.map(h=>{let u=i.map[h],d=v=>{let g=u[v],f=h+":"+v,E=J("i",{class:"cslot"+(g?"":" add"),"data-f":"1","data-id":f,"data-say":Q("a_"+h)+" "+(g?Ac(g):Q("addB")),on:()=>{let _=3;E.className="cslot wait",E.textContent=Q("pressBtn")+" 3";let x=setInterval(()=>{_--,_>0&&E.isConnected&&(E.textContent=Q("pressBtn")+" "+_)},1e3);n.startCapture(t,h,v,R=>{clearInterval(x),R&&(o(),this.app.sound&&this.app.sound.ui("ok")),c(f)},3)}},g?Ac(g):"\uFF0B");return E},p=[];for(let v=0;v<Math.min(4,u.length+1);v++)p.push(d(v));let m=J("i",{class:"cslot clr","data-f":"1","data-id":h+":x","data-say":Q("clearB")+" "+Q("a_"+h),on:()=>{i.map[h]=[],o(),c(h+":0")}},"\u2715");return J("div",{class:"crow"},J("span",{class:"ca"},Q("a_"+h)),J("span",{class:"chips"},p,m))});if(this.render("controls",()=>J("div",{class:"wrap"},this.topbar(),J("h1",null,Q("controls")+" \u2014 "+Q(t?"p2":"p1")),J("div",{class:"maphelp"},Q("mapHelp")),J("div",{class:"form wide"},l,this.opt(Q("autoAcc"),[{v:!0,l:Q("on")},{v:!1,l:Q("off")}],()=>i.auto,h=>{i.auto=h,o()}),this.opt(Q("easy"),[{v:0,l:Q("off")},{v:1,l:Q("on")}],()=>a.easy[t],h=>{a.easy[t]=h,o()}),this.opt(Q("esc"),[{v:1,l:Q("on")},{v:0,l:Q("off")}],()=>a.esc[t],h=>{a.esc[t]=h,o()}),this.opt(Q("steerFeel"),[{v:2,l:Q("gentle")},{v:1.4,l:Q("normal")},{v:1,l:Q("direct")}],()=>i.curve,h=>{i.curve=h,o()}),this.opt(Q("deadZone"),[.05,.1,.15,.25].map(h=>({v:h,l:Math.round(h*100)+" %"})),()=>i.dead,h=>{i.dead=h,o()}),this.btn(Q("reset"),()=>{i.map=$r(),o(),this.controls(t)}))),{back:()=>{n.cancelCapture(),this.settings()}}),e){let h=this.root.querySelector('[data-id="'+e+'"]')||this.root.querySelector('[data-id="'+e.split(":")[0]+':0"]');h&&this.setFocus(h)}}results(t){let e=t.players;this.render("results",()=>J("div",{class:"wrap"},this.topbar(),J("h1",null,Q("results")),J("div",{class:"res"},J("table",{class:"rtab"},t.rows.map(n=>J("tr",{class:n.player>=0?"me":""},J("td",null,String(n.place)),J("td",null,n.name),J("td",null,n.time?Ih(n.time):"\u2014")))),J("div",{class:"rsum"},e.map((n,i)=>J("div",{class:"rp"},e.length>1?J("div",{class:"rpn"},Q(i?"p2":"p1")):null,t.cfg.event?J("div",{class:"rstars"},Cc(n.stars)):null,J("div",null,Q("takedowns")+": "+n.takedowns),J("div",null,Q("nearMiss")+": "+n.near),J("div",null,Q("drift")+": "+n.drift.toFixed(1)+" s"),J("div",{class:"rcr"},"+ \u25C6 "+n.credits),n.record?J("div",{class:"rrec"},Q("best")+"!"):null)))),J("div",{class:"row"},this.btn(Q("cont"),()=>t.cfg.event?this.career():t.cfg.twoP?this.twoOptions():this.home(),"go",{"data-first":"1"}),this.btn(Q("retry"),()=>this.app.startRace(t.cfg)))),{back:()=>this.home()})}};function fe(s,t,e,n){let i=document.createElement(s);return t&&(i.className=t),n!==void 0&&(i.textContent=n),e&&e.appendChild(i),i}function Lh(s){s<0&&(s=0);let t=Math.floor(s/60),e=s-t*60;return t+":"+(e<10?"0":"")+e.toFixed(2)}var Pc=class{constructor(t,e,n,i){this.p=e,this.root=fe("div","hud-p",t),this.top=fe("div","h-top",this.root),this.posBox=fe("div","h-pos",this.top),this.posN=fe("span","n",this.posBox),this.posD=fe("span","d",this.posBox),this.lapBox=fe("div","h-lap",this.top),this.timeBox=fe("div","h-time",this.root),this.goalBox=fe("div","h-goal",this.root),this.msg=fe("div","h-msg",this.root),this.speedo=fe("div","h-speedo",this.root),this.spd=fe("div","h-spd",this.speedo,"0"),fe("div","h-unit",this.speedo,Ne.t("kmh")),this.gear=fe("div","h-gear",this.speedo,"1"),this.bars=fe("div","h-nitro",this.speedo),this.seg=[];for(let r=0;r<3;r++){let a=fe("div","seg",this.bars);this.seg.push(fe("i","",a))}fe("div","h-nlabel",this.speedo,Ne.t("nitro")),this.map=fe("canvas","h-map",this.root),this.map.width=220,this.map.height=220,this.ctx=this.map.getContext("2d"),this.cache={},this.mapT=0,this.msgT=0,this.buildMap(n.track),this.wreck=fe("div","h-wreck",this.root,Ne.t("wrecked")),this.fps=fe("div","h-fps",this.root)}buildMap(t){let e=1e9,n=-1e9,i=1e9,r=-1e9;for(let h=0;h<t.n;h+=4)e=Math.min(e,t.px[h]),n=Math.max(n,t.px[h]),i=Math.min(i,t.pz[h]),r=Math.max(r,t.pz[h]);let a=Math.max(n-e,r-i)*1.12;this.mx=(e+n)/2,this.mz=(i+r)/2,this.ms=200/a;let o=document.createElement("canvas");o.width=220,o.height=220;let c=o.getContext("2d");c.lineJoin="round",c.lineCap="round",c.beginPath();for(let h=0;h<t.n;h+=3){let u=110+(t.px[h]-this.mx)*this.ms,d=110+(t.pz[h]-this.mz)*this.ms;h?c.lineTo(u,d):c.moveTo(u,d)}c.strokeStyle="rgba(0,0,0,0.55)",c.lineWidth=10,c.stroke(),c.strokeStyle="#e8edf5",c.lineWidth=4,c.stroke();let l=t.closed?0:t.n-1;c.fillStyle="#ff3b30",c.beginPath(),c.arc(110+(t.px[l]-this.mx)*this.ms,110+(t.pz[l]-this.mz)*this.ms,6,0,7),c.fill(),this.base=o}set(t,e,n){this.cache[t]!==n&&(this.cache[t]=n,e.textContent=n)}update(t,e){let n=t.race,i=n.players[this.p],r=n.racers.length;n.mode!=="time"?(this.set("pos",this.posN,String(i.place)),this.set("posd",this.posD,"/"+r)):(this.set("pos",this.posN,""),this.set("posd",this.posD,"")),n.track.closed?this.set("lap",this.lapBox,Ne.t("lap")+" "+Math.min(n.laps,Math.max(1,i.lap+1))+"/"+n.laps):this.set("lap",this.lapBox,Math.max(0,Math.round((n.total-i.prog)/100)/10).toFixed(1)+" km");let a=i.finished?i.finishTime:Math.max(0,n.time);this.set("time",this.timeBox,Lh(a));let o=n.opts.event;o&&o.mode==="takedown"?this.set("goal",this.goalBox,Ne.t("takedowns")+" "+i.takedowns+" / "+o.goal):o&&o.mode==="time"?this.set("goal",this.goalBox,Ne.t("goal")+" "+Lh(o.goal)):this.set("goal",this.goalBox,"");let c=Math.round(Math.max(0,i.veh.fwdSpeed)*3.6);this.set("spd",this.spd,String(c)),this.set("gear",this.gear,i.veh.reverse?"R":String(i.veh.gear));let l=i.nitro*3;for(let d=0;d<3;d++){let p=Math.max(0,Math.min(1,l-d)),m=(p*100|0)+"%";this.cache["s"+d]!==m&&(this.cache["s"+d]=m,this.seg[d].style.transform="scaleX("+p.toFixed(2)+")")}let h="h-speedo"+(i.veh.nitroOn?i.nitroLevel===3?" over":i.nitroLevel===2?" perfect":" on":"")+(i.nitro>=.98?" full":"");this.cache.cls!==h&&(this.cache.cls=h,this.speedo.className=h);let u=i.wreck>0&&!i.traffic?"h-wreck show":"h-wreck";this.cache.wr!==u&&(this.cache.wr=u,this.wreck.className=u),this.msgT>0&&(this.msgT-=e,this.msgT<=0&&(this.msg.className="h-msg")),this.mapT-=e,this.mapT<=0&&(this.mapT=1/15,this.drawMap(n,i))}say(t,e){this.msg.textContent=t,this.msg.className="h-msg",this.msg.offsetWidth,this.msg.className="h-msg show k-"+e,this.msgT=1.6}drawMap(t,e){let n=this.ctx;n.clearRect(0,0,220,220),n.drawImage(this.base,0,0);for(let i of t.racers){let r=110+(i.veh.px-this.mx)*this.ms,a=110+(i.veh.pz-this.mz)*this.ms;n.fillStyle=i===e?"#ffd400":i.player>=0?"#3cf":"#ff5a4f",n.beginPath(),n.arc(r,a,i===e?7:5,0,6.3),n.fill(),i===e&&(n.strokeStyle="#000",n.lineWidth=2,n.stroke())}}},ea=class{constructor(t){this.root=t,this.panels=[],this.count=fe("div","h-count",null)}begin(t,e){this.root.innerHTML="",this.root.className="hud"+(t.race.players.length>1?" split":""),this.panels=t.race.players.map((n,i)=>new Pc(this.root,i,t,e)),this.count=fe("div","h-count",this.root),this.lastCount="",this.help=fe("div","h-help",this.root,Ne.t("controlsHelp")),this.helpT=6,this.root.style.display="block",this.showFps=!!(window.TA&&window.TA.career&&window.TA.career.d.settings.fps),this.fpsT=0}update(t,e){let n=t.race;for(let r of this.panels)r.update(t,e);let i="";for(n.state==="countdown"&&(i=String(Math.ceil(-n.time))),i==="4"&&(i=""),i!==this.lastCount&&(this.lastCount=i,this.count.textContent=i,this.count.className="h-count"+(i?" show":""));n.events.length;){let r=n.events.shift();if(r.kind==="scrape")continue;if(r.kind==="go"){this.count.textContent="GO!",this.count.className="h-count show go",setTimeout(()=>{this.count.textContent==="GO!"&&(this.count.className="h-count")},900);continue}let a=this.panels[r.player];a&&a.say(r.text,r.kind)}if(this.helpT>0&&(this.helpT-=e,this.helpT<=0&&(this.help.style.opacity="0")),this.showFps&&(this.fpsT-=e,this.fpsT<=0)){this.fpsT=.5;let r=window.TA.fpsLog,a=0,o=0;for(let c=Math.max(0,r.length-30);c<r.length;c++)a+=r[c],o++;this.panels[0].fps.textContent=o?Math.round(1e3/(a/o))+" fps \xB7 "+Math.round(t.scale*100)+"%":""}}end(){this.root.innerHTML="",this.root.style.display="none",this.panels=[]}};var cg=["impactMetal_heavy_000","impactMetal_heavy_001","impactMetal_heavy_002","impactMetal_light_000","impactGlass_heavy_000","impactPlate_heavy_000","select_001","confirmation_001","back_001","switch_001","explosionCrunch_000","forceField_000"],na=class{constructor(t){this.vol={music:t.music??.7,sfx:t.sfx??.8},this.mix={engine:1,sfx:1,music:1},this.ctx=null,this.buf={},this.engines=[],this.music=null,this.musicName=""}start(){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.vol.sfx,this.master.connect(e.destination);let n=e.createBuffer(1,e.sampleRate,e.sampleRate),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;this.noise=n,this.worklet=null,e.audioWorklet&&(this.worklet=e.audioWorklet.addModule("assets/engine-worklet.js?v="+an).then(()=>!0).catch(()=>!1));for(let r of cg)fetch("assets/sfx/"+r+".ogg?v="+an).then(a=>a.arrayBuffer()).then(a=>e.decodeAudioData(a)).then(a=>{this.buf[r]=a}).catch(()=>{});this.playMusic("alpha-dance")}noiseSrc(){let t=this.ctx.createBufferSource();return t.buffer=this.noise,t.loop=!0,t}playMusic(t){if(this.musicName===t)return;this.musicName=t,this.music||(this.music=new Audio,this.music.loop=!0),this.music.src="assets/music/"+t+".ogg?v="+an,this.music.volume=this.vol.music*.45*this.mix.music;let e=this.music.play();e&&e.catch&&e.catch(()=>{})}volume(t){this.vol={music:t.music??this.vol.music,sfx:t.sfx??this.vol.sfx},this.master&&(this.master.gain.value=this.vol.sfx),this.music&&(this.music.volume=this.vol.music*.45*this.mix.music)}setMix(t){this.mix={engine:t.engine??1,sfx:t.sfx??1,music:t.music??1},this.volume({})}play(t,e,n){let i=this.buf[t];if(!i||!this.ctx)return;let r=this.ctx.createBufferSource();r.buffer=i,r.playbackRate.value=n||1;let a=this.ctx.createGain();a.gain.value=(e===void 0?1:e)*this.mix.sfx,r.connect(a),a.connect(this.master),r.start()}ui(t){this.play(t==="ok"?"confirmation_001":t==="back"?"back_001":t==="switch"?"switch_001":"select_001",.5)}engineNode(t,e){let n=this.ctx;if(this.workletOk){let i=new AudioWorkletNode(n,"engine",{numberOfInputs:0,outputChannelCount:[1],processorOptions:{cyl:t.cyl||4,turbo:!!t.turbo,ev:!!t.ev,diesel:!!t.diesel,rpmMax:t.rpm,seed:e}}),r=i.parameters;return{node:i,rpm:r.get("rpm"),load:r.get("load"),speed:r.get("speed"),gain:r.get("gain"),nodes:[]}}return null}engineVoice(t,e){let n=this.ctx,i=t?this.engineNode(t,e||1):null,r=n.createOscillator();r.type="sawtooth";let a=n.createOscillator();a.type="square";let o=this.noiseSrc(),c=n.createGain();c.gain.value=.12;let l=n.createBiquadFilter();l.type="lowpass",l.Q.value=3;let h=n.createGain();h.gain.value=0;let u=n.createGain();u.gain.value=.5,r.connect(l),a.connect(u),u.connect(l),o.connect(c),c.connect(l),l.connect(h);let d=this.noiseSrc(),p=n.createBiquadFilter();p.type="bandpass",p.frequency.value=1700,p.Q.value=4;let m=n.createGain();m.gain.value=0,d.connect(p),p.connect(m);let v=this.noiseSrc(),g=n.createBiquadFilter();g.type="lowpass",g.frequency.value=500;let f=n.createGain();f.gain.value=0,v.connect(g),g.connect(f);let E=this.noiseSrc(),_=n.createBiquadFilter();_.type="bandpass",_.frequency.value=900,_.Q.value=.8;let x=n.createGain();x.gain.value=0,E.connect(_),_.connect(x);let R=n.createStereoPanner?n.createStereoPanner():null,A=R||n.createGain();return i?i.node.connect(A):h.connect(A),m.connect(A),f.connect(A),x.connect(A),A.connect(this.master),i||(r.start(),a.start(),o.start()),d.start(),v.start(),E.start(),{wk:i,spec:t,o1:r,o2:a,f:l,g:h,tg:m,wg:f,ngn:x,nf:_,pan:R,nodes:i?[d,v,E]:[r,a,o,d,v,E],out:A}}async begin(t){if(!this.ctx||(this.end(),this.cur=t,this.worklet&&(this.workletOk=await this.worklet),this.cur!==t||this.engines.length))return;let e=t.race.players.length;for(let n=0;n<e;n++){let i=this.engineVoice(t.race.players[n].spec,n+1);i.pan&&(i.pan.pan.value=e>1?n?.5:-.5:0),this.engines.push(i)}this.rival=null,this.playMusic("time-driving")}update(t,e){if(!this.ctx||!this.engines.length)return;let n=this.ctx.currentTime,i=t.race,r=i.players.length>1?.6:1;for(let l=0;l<this.engines.length;l++){let h=this.engines[l],u=i.players[l],d=u.veh;this.voice(h,d,u,n,r,1)}let a=null,o=1e9,c=i.players[0].veh;for(let l of i.racers){if(l.player>=0)continue;let h=Math.hypot(l.veh.px-c.px,l.veh.pz-c.pz);h<o&&(o=h,a=l)}a&&(!this.rival||this.rival.spec!==a.spec)&&(this.rival&&this.drop(this.rival),this.rival=this.engineVoice(a.spec,7)),a&&this.voice(this.rival,a.veh,a,n,r*Math.max(0,1-o/60)*.6,0)}voice(t,e,n,i,r,a){let o=e.rpm,c=Math.max(e.input.throttle,e.nitroOn?1:0),l=n.wreck>0;if(t.wk){let d=l?0:e.shiftT>0?.04:c;t.wk.rpm.setValueAtTime(l?800:o,i),t.wk.load.setValueAtTime(d,i),t.wk.speed.setValueAtTime(a?e.speed:0,i),t.wk.gain.setTargetAtTime((l?.15*r:(e.spec.ev?.9:.55+.25*d)*r)*this.mix.engine,i,.05)}let h=28+o/60*1.6;t.o1.frequency.setTargetAtTime(h,i,.03),t.o2.frequency.setTargetAtTime(h*.5,i,.03),t.f.frequency.setTargetAtTime(300+o*.32*(.5+c*.5),i,.05),t.g.gain.setTargetAtTime((l?.02:(.1+c*.14)*r)*this.mix.engine,i,.05);let u=0;for(let d=0;d<4;d++){let p=e.wheels[d];p.contact&&(u=Math.max(u,p.slipLat,p.slipLong))}t.tg.gain.setTargetAtTime(u>.3&&e.speed>5?Math.min(.22,(u-.3)*.4)*r*this.mix.sfx:0,i,.04),t.wg.gain.setTargetAtTime(a?Math.min(.18,e.speed*e.speed*2e-5)*r*this.mix.sfx:0,i,.1),t.ngn.gain.setTargetAtTime(e.nitroOn?.16*r*Math.min(1.6,e.nitroOn)*this.mix.sfx:0,i,.06),t.nf.frequency.setTargetAtTime(e.nitroOn>1.5?600:1100,i,.1)}event(t,e,n,i){if(!this.ctx)return;let a=e.player>=0;if(!a)for(let o of i.race.players)Math.hypot(o.veh.px-e.veh.px,o.veh.pz-e.veh.pz)<50&&(a=!0);if(a)if(t==="hit"){let o=this.ctx.currentTime;if(o-(this.lastHit||0)<.12)return;this.lastHit=o;let c=Math.min(1,n/18);if(c<.1)return;this.play(c>.5?"impactMetal_heavy_00"+(Math.random()*3|0):"impactMetal_light_000",.4+c*.6,.9+Math.random()*.2)}else t==="wreck"&&(this.play("explosionCrunch_000",.9,.8),this.play("impactGlass_heavy_000",.7),this.play("impactPlate_heavy_000",.8,.85))}drop(t){for(let e of t.nodes)try{e.stop()}catch{}t.wk&&t.wk.node.disconnect(),t.out.disconnect()}end(){for(let t of this.engines.concat(this.rival?[this.rival]:[]))this.drop(t);this.engines=[],this.rival=null,this.cur=null,this.ctx&&this.playMusic("alpha-dance")}pause(){this.ctx&&this.ctx.suspend(),this.music&&this.music.pause()}resume(){if(this.ctx&&this.ctx.resume(),this.music){let t=this.music.play();t&&t.catch&&t.catch(()=>{})}}close(){this.end(),this.music&&(this.music.pause(),this.music.src=""),this.ctx&&this.ctx.close(),this.ctx=null}};var ia=class{constructor(t){this.scene=new Yi,this.cam=new Ce(34,16/9,.5,200),this.angle=.6,this.car=null,this.carId="";let e=new Rr(9,64,0,Math.PI*2);e.rotateX(-Math.PI/2);let n=e.attributes.position.count,i=new Uint8Array(n*4),r=new Int8Array(n*4);for(let o=0;o<n;o++){let c=e.attributes.position.getX(o),l=e.attributes.position.getZ(o),h=Math.hypot(c,l)/9,u=h>.97?1:0,d=u?230:40+(1-h)*30;i[o*4]=u?255:d,i[o*4+1]=u?190:d,i[o*4+2]=u?40:d+6,i[o*4+3]=0,r[o*4+1]=127}e.setAttribute("col",new Wt(i,4,!0)),e.setAttribute("normal",new Wt(r,4,!0)),this.floor=new se(e,new de({uniforms:Jt,vertexShader:"attribute vec4 col; varying vec3 vC; varying vec2 vP; void main(){ vC = col.rgb; vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying vec3 vC; varying vec2 vP; void main(){ float r = length(vP) / 9.0; float g = 0.5 + 0.5 * sin(r * 70.0); vec3 c = vec3(0.07, 0.075, 0.09) * (1.6 - r) * (0.9 + 0.1 * g); c += vec3(1.0, 0.62, 0.12) * smoothstep(0.955, 0.975, r) * (1.0 - smoothstep(0.985, 1.0, r)) * 1.2; c += vec3(1.0, 0.62, 0.12) * exp(-abs(r - 0.62) * 80.0) * 0.25; gl_FragColor = vec4(c, 1.0); }"})),this.scene.add(this.floor);let a=new se(new Zi(80,24,12),new de({side:Te,depthWrite:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying vec3 vD; void main(){ float h = vD.y; vec3 c = mix(vec3(0.02,0.03,0.06), vec3(0.06,0.12,0.22), smoothstep(-0.1, 0.6, h)); c += vec3(1.0,0.45,0.1) * exp(-abs(h - 0.02) * 30.0) * 0.35; gl_FragColor = vec4(c,1.0); }"}));this.scene.add(a),this.veh=null}show(t,e,n){if(this.carId!==t){this.car&&this.car.dispose();let i=pe[t];this.car=new ji(this.scene,i.model,e,n),this.veh=new Ki(i,As(i.model)),this.veh.setPose(0,this.car.dims.cg+.03,0,0);for(let r of this.veh.wheels)r.contact=!0,r.travel=.25;this.carId=t}this.car.setPaint(e,n)}update(t){if(this.angle+=t*.35,!this.veh)return;let e=this.angle/2;this.veh.qy=Math.sin(e),this.veh.qw=Math.cos(e),this.veh.qx=0,this.veh.qz=0,this.veh.updateR(),this.veh.groundY=0,this.car.sync(this.veh,5,0,0)}render(t){Tc("day"),Jt.uSun.value.set(-.55,.7,-.45).normalize(),Jt.uFogFar.value=1e4,Jt.uFogNear.value=9999;let e=t.getSize(this.sz||(this.sz=new Yt));this.cam.aspect=e.x/e.y,this.cam.updateProjectionMatrix(),this.cam.position.set(-7.5,2.6,-9.2),this.cam.lookAt(2.6,.9,0),t.setViewport(0,0,e.x,e.y),t.render(this.scene,this.cam)}};var be=window.MyPC,sa=1/60,$={renderer:null,canvas:null,info:null,quality:null,input:new Jr,session:null,routes:null,hud:null,ui:null,sound:null,career:null,showroom:null,raf:0,last:0,acc:0,running:!1,frameMs:0,state:"boot",paused:!1,fpsLog:[],workLog:[],logicLog:[],resizes:0};window.TA=$;function lg(s){let n=new URLSearchParams(location.search).get("q")||s.quality&&s.quality.tier||"mid",i={low:.6,mid:.8,high:1}[n]||.8;return{tier:n,scale:i,minScale:n==="low"?.45:.55}}function hg(){let s=document.getElementById("c"),t=new br({canvas:s,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1,preserveDrawingBuffer:/proof/.test(location.search)});return t.setPixelRatio(1),t.outputColorSpace=Kn,t.toneMapping=dn,t.sortObjects=!0,t.info.autoReset=!0,$.canvas=s,t}function ts(){$.resizes++;let s=$.session?$.session.scale:$.quality.scale,t=Math.round(1920*s*Math.min(1,window.innerWidth/1920*1.5)),e=Math.round(t*window.innerHeight/window.innerWidth);$.renderer.setSize(t,e,!1),$.canvas.style.width="100vw",$.canvas.style.height="100vh"}function Nh(s){$.raf=requestAnimationFrame(Nh);let t=performance.now();$.last||($.last=s);let e=s-$.last;$.last=s,$.acc+=Math.min(100,e);let n=0;for(;$.acc>=sa*1e3-.5&&n<4;)ug(sa),$.acc-=sa*1e3,n++;let i=performance.now();$.acc>sa*1e3*2&&($.acc=0),dg(e),$.frameMs=e,$.fpsLog.length<2e4&&($.fpsLog.push(e),$.workLog.push(performance.now()-t),$.logicLog.push(i-t))}function Dh(){$.raf||($.last=0,$.acc=0,$.raf=requestAnimationFrame(Nh)),$.running=!0}function Uh(){$.raf&&cancelAnimationFrame($.raf),$.raf=0,$.running=!1}function ug(s){$.input.poll(s),$.state==="race"&&$.session?($.session.update(s,$.input),$.hud.update($.session,s),$.sound.update($.session,s),$.session.race.allPlayersDone()&&!$.finishT&&($.finishT=3.5),$.finishT&&($.finishT-=s,$.finishT<=0&&($.finishT=0,ra()))):$.showroom&&$.ui.wantsShowroom()&&$.showroom.update(s),$.ui.tick(s)}function dg(s){$.state==="race"&&$.session?$.session.render(s):$.showroom&&$.ui.wantsShowroom()&&$.showroom.render($.renderer)}async function Ic(s){$.ui.loading(!0),$.state="loading";let t=$.routes.routes.find(r=>r.id===s.route),e=await mh(s.route);$.session&&($.session.dispose(),$.session=null);let n=$.career.grid(s),i=new qr($.renderer,t,e,{grid:n,laps:s.laps||t.laps,mode:s.mode,traffic:s.traffic!==!1,trafficCount:$.quality.tier==="low"?7:10,time:s.time},$.quality);i.onScale=()=>ts(),i.onSound=(r,a,o)=>$.sound.event(r,a,o,i),$.session=i,$.cfg=s,$.hud.begin(i,s),$.sound.begin(i),$.input.clearHeld(),ts(),$.state="race",$.ui.loading(!1),$.ui.hide(),be.setMenu([{id:"restart",label:Ne.t("restart")},{id:"quit",label:Ne.t("quitRace")}]),be.announce&&be.announce(t.name)}function ra(s){let t=$.session;if(!t)return;let e=s?null:$.career.result($.cfg,t.race);$.sound.end(),$.hud.end(),t.dispose(),$.session=null,$.state="menu",be.setMenu([]),ts(),e?(e.score&&be.submitScore(e.score,{}),$.ui.results(e)):$.ui.home()}$.startRace=Ic;$.endRace=ra;be.init({ownMenu:!0,onInit:async function(s){$.info=s;try{Ne.set(s.lang),$.quality=lg(s),$.renderer=hg(),ts(),window.addEventListener("resize",ts),await dh(t=>be.progress(t*.8)),$.routes=await ph(),be.progress(.9),$.input.load(be.load("controls",null)),$.career=new jr(be.load("career",null),$.routes),$.hud=new ea(document.getElementById("hud")),$.sound=new na(s.volume||{music:.7,sfx:.8}),$.sound.setMix($.career.d.settings.mix),$.showroom=new ia($.quality),$.ui=new ta($,document.getElementById("ui")),$.input.menuCb=(t,e,n)=>$.ui.input(t,e,n),be.progress(1),be.ready()}catch(t){be.report&&be.report(t,{where:"init"}),be.fail(String(t&&t.message||t))}},onStart:function(){$.sound.start(),Dh();let s=new URLSearchParams(location.search).get("dev");if(s){let t=new URLSearchParams(location.search),e=t.has("bot"),i=[{car:t.get("car")||"city",bot:e}];t.has("2p")&&i.push({car:t.get("car2")||"hatch",bot:e}),Ic({route:s,players:i,rivals:5,quick:!0,time:t.get("time")||void 0})}else $.ui.title()},onPause:function(){Uh(),$.sound.pause(),$.paused=!0},onResume:function(){$.paused=!1,$.input.clearHeld(),$.sound.resume(),Dh()},onDestroy:function(){Uh(),window.removeEventListener("resize",ts),$.session&&$.session.dispose(),$.sound&&$.sound.close(),$.renderer&&$.renderer.dispose()},onInput:function(s,t,e,n){if(s==="menu"&&t===!1){$.state==="race"?be.pause():$.ui.input("cancel",n,!1);return}$.input.onAction(s,t,e,n)},onMenu:function(s){if(s==="restart"&&$.cfg){let t=$.cfg;ra(!0),Ic(t)}s==="quit"&&ra(!0)},onVolume:function(s){$.sound&&$.sound.volume(s)}});be.gamepad&&(be.gamepad.on("button",(s,t,e,n)=>$.input.onButton(s,t,e,n)),be.gamepad.on("axes",(s,t)=>$.input.onAxes(s,t)));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
