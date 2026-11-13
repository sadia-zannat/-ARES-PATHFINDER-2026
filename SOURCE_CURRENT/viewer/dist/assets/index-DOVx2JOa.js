const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/runtime_qa-DwhR1-oG.js","assets/save-Wskmz71n.js","assets/three.core-D4HbIbV9.js","assets/submission_audit-t-7n-aoW.js","assets/preload-helper-BXl3LOEh.js"])))=>i.map(i=>d[i]);
import{_ as Ua}from"./preload-helper-BXl3LOEh.js";import{c as to,N as fn,S as Zt,C as ze,R as no,w as nt,V as It,l as Na,e as Ut,a as ia,M as an,F as rs,W as Oa,b as Bn,d as pt,L as Mn,H as si,U as wn,D as Xt,B as Nt,f as Gn,g as he,h as Bt,p as io,i as ti,j as kn,k as mt,m as Vt,O as ss,P as Tn,n as oi,o as cn,E as ao,q as gt,A as ro,r as ki,s as nn,t as Mi,u as va,v as ni,x as ii,y as os,z as so,G as oo,I as ls,J as Kt,K as bi,Q as rn,T as un,X as Ci,Y as hn,Z as In,_ as Ti,$ as lo,a0 as co,a1 as Xn,a2 as fo,a3 as uo,a4 as ho,a5 as po,a6 as mo,a7 as xo,a8 as go,a9 as _o,aa as vo,ab as So,ac as Eo,ad as Mo,ae as bo,af as To,ag as Ao,ah as cs,ai,aj as xi,ak as $n,al as ds,am as An,an as Ro,ao as yo,ap as wo,aq as Co,ar as fs,as as Lo,at as Po,au as Do,av as Io,aw as Ke,ax as Uo,ay as No,az as Oo,aA as us,aB as Qt,aC as hs,aD as ps,aE as ms,aF as Ai,aG as xs,aH as gs,aI as _s,aJ as Zn,aK as Fo,aL as Bo,aM as Go,aN as ko,aO as vs,aP as bn,aQ as Ho,aR as Vo,aS as zo,aT as Hi,aU as Vi,aV as zi,aW as Wi,aX as tt,aY as Fa,aZ as Ba,a_ as Ga,a$ as ka,b0 as Ha,b1 as Va,b2 as za,b3 as Wa,b4 as Xa,b5 as Ka,b6 as qa,b7 as Ya,b8 as $a,b9 as ja,ba as Za,bb as Ja,bc as Qa,bd as er,be as tr,bf as nr,bg as ir,bh as ar,bi as rr,bj as sr,bk as or,bl as lr,bm as cr,bn as dr,bo as aa,bp as ra,bq as sa,br as oa,bs as la,bt as ca,bu as da,bv as Wo,bw as fr,bx as Xo,by as gi,bz as Ko,bA as ur,bB as hr,bC as pr,bD as fa,bE as ua,bF as qo,bG as Ss,bH as Yo,bI as $o,bJ as jo,bK as Es,bL as mr,bM as Ms,bN as xr,bO as bs,bP as Zo,bQ as Jo,bR as Qo,bS as gr,bT as Lt,bU as el,bV as Ts,bW as tl,bX as nl,bY as il,bZ as As,b_ as al,b$ as rl,c0 as sl,c1 as ol,c2 as ll,c3 as ha,c4 as cl,c5 as dl,c6 as fl,c7 as ul,c8 as hl,c9 as pl,ca as Sa,cb as jt,cc as Rs,cd as Ea,ce as Li,cf as ml,cg as xl,ch as pa,ci as ys,cj as gl,ck as Jn,cl as ws,cm as zt,cn as _l,co as Ma,cp as Cs,cq as vl,cr as _i,cs as Sl,ct as El,cu as Ls,cv as Xi,cw as Pi,cx as Ml,cy as bl,cz as Ps,cA as Di,cB as Tl,cC as Ds,cD as ht,cE as yt,cF as Al,cG as Rl,cH as yl,cI as wl,cJ as Is,cK as Cl,cL as _r,cM as vr,cN as Sr,cO as Ll,cP as Un,cQ as Pl,cR as Us,cS as Ri,cT as Er,cU as Dl,cV as Ns,cW as Il,cX as Ul,cY as vi,cZ as Nl,c_ as Mr,c$ as Hn,d0 as Ol,d1 as Fl}from"./three.core-D4HbIbV9.js";import{C as Qn,M as Dt,c as ei,l as Bl,v as Gl,n as br,a as kl,b as Hl,H as Tr,S as Ar,r as Rr,d as Vl,f as zl,t as Wl,s as Xl,e as Kl,g as ql}from"./save-Wskmz71n.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();function Os(){let n=null,t=!1,e=null,i=null;function a(r,s){e(r,s),i=n.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(a),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Yl(n){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let x;if(l instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)x=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)x=n.SHORT;else if(l instanceof Uint32Array)x=n.UNSIGNED_INT;else if(l instanceof Int32Array)x=n.INT;else if(l instanceof Int8Array)x=n.BYTE;else if(l instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:x,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((x,M)=>x.start-M.start);let f=0;for(let x=1;x<d.length;x++){const M=d[f],S=d[x];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++f,d[f]=S)}d.length=f+1;for(let x=0,M=d.length;x<M;x++){const S=d[x];n.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:a,remove:r,update:s}}var $l=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jl=`#ifdef USE_ALPHAHASH
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
#endif`,Zl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ql=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ec=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tc=`#ifdef USE_AOMAP
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
#endif`,nc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ic=`#ifdef USE_BATCHING
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
#endif`,ac=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lc=`#ifdef USE_IRIDESCENCE
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
#endif`,cc=`#ifdef USE_BUMPMAP
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
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gc=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_c=`#define PI 3.141592653589793
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
} // validated`,vc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sc=`vec3 transformedNormal = objectNormal;
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
#endif`,Ec=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ac="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yc=`#ifdef USE_ENVMAP
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
#endif`,wc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cc=`#ifdef USE_ENVMAP
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
#endif`,Lc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pc=`#ifdef USE_ENVMAP
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
#endif`,Dc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ic=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oc=`#ifdef USE_GRADIENTMAP
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
}`,Fc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kc=`uniform bool receiveShadow;
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
#endif`,Hc=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Vc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kc=`PhysicalMaterial material;
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
#endif`,qc=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Yc=`
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
#endif`,$c=`#if defined( RE_IndirectDiffuse )
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
#endif`,jc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ad=`#if defined( USE_POINTS_UV )
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
#endif`,rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,od=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ld=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dd=`#ifdef USE_MORPHTARGETS
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
#endif`,fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gd=`#ifdef USE_NORMALMAP
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
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Id=`float getShadowMask() {
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
}`,Ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nd=`#ifdef USE_SKINNING
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
#endif`,Od=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,Bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vd=`#ifdef USE_TRANSMISSION
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
#endif`,zd=`#ifdef USE_TRANSMISSION
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$d=`uniform sampler2D t2D;
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`#include <common>
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
}`,tf=`#if DEPTH_PACKING == 3200
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
}`,nf=`#define DISTANCE
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
}`,af=`#define DISTANCE
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
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`uniform float scale;
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
}`,lf=`uniform vec3 diffuse;
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
}`,cf=`#include <common>
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
}`,df=`uniform vec3 diffuse;
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
}`,ff=`#define LAMBERT
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
}`,uf=`#define LAMBERT
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
}`,hf=`#define MATCAP
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
}`,pf=`#define MATCAP
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
}`,mf=`#define NORMAL
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
}`,xf=`#define NORMAL
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
}`,gf=`#define PHONG
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
}`,_f=`#define PHONG
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
}`,vf=`#define STANDARD
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
}`,Sf=`#define STANDARD
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
}`,Ef=`#define TOON
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
}`,Mf=`#define TOON
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
}`,bf=`uniform float size;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Af=`#include <common>
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
}`,Rf=`uniform vec3 color;
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
}`,yf=`uniform float rotation;
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
}`,wf=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:$l,alphahash_pars_fragment:jl,alphamap_fragment:Zl,alphamap_pars_fragment:Jl,alphatest_fragment:Ql,alphatest_pars_fragment:ec,aomap_fragment:tc,aomap_pars_fragment:nc,batching_pars_vertex:ic,batching_vertex:ac,begin_vertex:rc,beginnormal_vertex:sc,bsdfs:oc,iridescence_fragment:lc,bumpmap_pars_fragment:cc,clipping_planes_fragment:dc,clipping_planes_pars_fragment:fc,clipping_planes_pars_vertex:uc,clipping_planes_vertex:hc,color_fragment:pc,color_pars_fragment:mc,color_pars_vertex:xc,color_vertex:gc,common:_c,cube_uv_reflection_fragment:vc,defaultnormal_vertex:Sc,displacementmap_pars_vertex:Ec,displacementmap_vertex:Mc,emissivemap_fragment:bc,emissivemap_pars_fragment:Tc,colorspace_fragment:Ac,colorspace_pars_fragment:Rc,envmap_fragment:yc,envmap_common_pars_fragment:wc,envmap_pars_fragment:Cc,envmap_pars_vertex:Lc,envmap_physical_pars_fragment:Hc,envmap_vertex:Pc,fog_vertex:Dc,fog_pars_vertex:Ic,fog_fragment:Uc,fog_pars_fragment:Nc,gradientmap_pars_fragment:Oc,lightmap_pars_fragment:Fc,lights_lambert_fragment:Bc,lights_lambert_pars_fragment:Gc,lights_pars_begin:kc,lights_toon_fragment:Vc,lights_toon_pars_fragment:zc,lights_phong_fragment:Wc,lights_phong_pars_fragment:Xc,lights_physical_fragment:Kc,lights_physical_pars_fragment:qc,lights_fragment_begin:Yc,lights_fragment_maps:$c,lights_fragment_end:jc,logdepthbuf_fragment:Zc,logdepthbuf_pars_fragment:Jc,logdepthbuf_pars_vertex:Qc,logdepthbuf_vertex:ed,map_fragment:td,map_pars_fragment:nd,map_particle_fragment:id,map_particle_pars_fragment:ad,metalnessmap_fragment:rd,metalnessmap_pars_fragment:sd,morphinstance_vertex:od,morphcolor_vertex:ld,morphnormal_vertex:cd,morphtarget_pars_vertex:dd,morphtarget_vertex:fd,normal_fragment_begin:ud,normal_fragment_maps:hd,normal_pars_fragment:pd,normal_pars_vertex:md,normal_vertex:xd,normalmap_pars_fragment:gd,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:vd,clearcoat_pars_fragment:Sd,iridescence_pars_fragment:Ed,opaque_fragment:Md,packing:bd,premultiplied_alpha_fragment:Td,project_vertex:Ad,dithering_fragment:Rd,dithering_pars_fragment:yd,roughnessmap_fragment:wd,roughnessmap_pars_fragment:Cd,shadowmap_pars_fragment:Ld,shadowmap_pars_vertex:Pd,shadowmap_vertex:Dd,shadowmask_pars_fragment:Id,skinbase_vertex:Ud,skinning_pars_vertex:Nd,skinning_vertex:Od,skinnormal_vertex:Fd,specularmap_fragment:Bd,specularmap_pars_fragment:Gd,tonemapping_fragment:kd,tonemapping_pars_fragment:Hd,transmission_fragment:Vd,transmission_pars_fragment:zd,uv_pars_fragment:Wd,uv_pars_vertex:Xd,uv_vertex:Kd,worldpos_vertex:qd,background_vert:Yd,background_frag:$d,backgroundCube_vert:jd,backgroundCube_frag:Zd,cube_vert:Jd,cube_frag:Qd,depth_vert:ef,depth_frag:tf,distanceRGBA_vert:nf,distanceRGBA_frag:af,equirect_vert:rf,equirect_frag:sf,linedashed_vert:of,linedashed_frag:lf,meshbasic_vert:cf,meshbasic_frag:df,meshlambert_vert:ff,meshlambert_frag:uf,meshmatcap_vert:hf,meshmatcap_frag:pf,meshnormal_vert:mf,meshnormal_frag:xf,meshphong_vert:gf,meshphong_frag:_f,meshphysical_vert:vf,meshphysical_frag:Sf,meshtoon_vert:Ef,meshtoon_frag:Mf,points_vert:bf,points_frag:Tf,shadow_vert:Af,shadow_frag:Rf,sprite_vert:yf,sprite_frag:wf},re={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},$t={basic:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Lt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Lt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Lt([re.points,re.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Lt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Lt([re.common,re.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Lt([re.sprite,re.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Lt([re.common,re.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Lt([re.lights,re.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};$t.physical={uniforms:Lt([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const hi={r:0,b:0,g:0},xn=new Ms,Cf=new an;function Lf(n,t,e,i,a,r,s){const o=new ze(0);let c=r===!0?0:1,l,h,d=null,f=0,x=null;function M(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?e:t).get(w)),w}function S(b){let w=!1;const P=M(b);P===null?u(o,c):P&&P.isColor&&(u(P,1),w=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,w){const P=M(w);P&&(P.isCubeTexture||P.mapping===Ci)?(h===void 0&&(h=new mt(new oi(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:mr($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,U,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),xn.copy(w.backgroundRotation),xn.x*=-1,xn.y*=-1,xn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(xn.y*=-1,xn.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cf.makeRotationFromEuler(xn)),h.material.toneMapped=pt.getTransfer(P.colorSpace)!==tt,(d!==P||f!==P.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,d=P,f=P.version,x=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new mt(new Zn(2,2),new rn({name:"BackgroundMaterial",uniforms:mr($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=pt.getTransfer(P.colorSpace)!==tt,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||f!==P.version||x!==n.toneMapping)&&(l.material.needsUpdate=!0,d=P,f=P.version,x=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function u(b,w){b.getRGB(hi,Es(n)),i.buffers.color.setClear(hi.r,hi.g,hi.b,w,s)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),c=w,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,u(o,c)},render:S,addToRenderList:p,dispose:R}}function Pf(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=f(null);let r=a,s=!1;function o(_,D,H,K,q){let Q=!1;const Y=d(K,H,D);r!==Y&&(r=Y,l(r.object)),Q=x(_,K,H,q),Q&&M(_,K,H,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(Q||s)&&(s=!1,w(_,D,H,K),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function d(_,D,H){const K=H.wireframe===!0;let q=i[_.id];q===void 0&&(q={},i[_.id]=q);let Q=q[D.id];Q===void 0&&(Q={},q[D.id]=Q);let Y=Q[K];return Y===void 0&&(Y=f(c()),Q[K]=Y),Y}function f(_){const D=[],H=[],K=[];for(let q=0;q<e;q++)D[q]=0,H[q]=0,K[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:K,object:_,attributes:{},index:null}}function x(_,D,H,K){const q=r.attributes,Q=D.attributes;let Y=0;const le=H.getAttributes();for(const z in le)if(le[z].location>=0){const ge=q[z];let Oe=Q[z];if(Oe===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(Oe=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(Oe=_.instanceColor)),ge===void 0||ge.attribute!==Oe||Oe&&ge.data!==Oe.data)return!0;Y++}return r.attributesNum!==Y||r.index!==K}function M(_,D,H,K){const q={},Q=D.attributes;let Y=0;const le=H.getAttributes();for(const z in le)if(le[z].location>=0){let ge=Q[z];ge===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(ge=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(ge=_.instanceColor));const Oe={};Oe.attribute=ge,ge&&ge.data&&(Oe.data=ge.data),q[z]=Oe,Y++}r.attributes=q,r.attributesNum=Y,r.index=K}function S(){const _=r.newAttributes;for(let D=0,H=_.length;D<H;D++)_[D]=0}function p(_){u(_,0)}function u(_,D){const H=r.newAttributes,K=r.enabledAttributes,q=r.attributeDivisors;H[_]=1,K[_]===0&&(n.enableVertexAttribArray(_),K[_]=1),q[_]!==D&&(n.vertexAttribDivisor(_,D),q[_]=D)}function R(){const _=r.newAttributes,D=r.enabledAttributes;for(let H=0,K=D.length;H<K;H++)D[H]!==_[H]&&(n.disableVertexAttribArray(H),D[H]=0)}function b(_,D,H,K,q,Q,Y){Y===!0?n.vertexAttribIPointer(_,D,H,q,Q):n.vertexAttribPointer(_,D,H,K,q,Q)}function w(_,D,H,K){S();const q=K.attributes,Q=H.getAttributes(),Y=D.defaultAttributeValues;for(const le in Q){const z=Q[le];if(z.location>=0){let pe=q[le];if(pe===void 0&&(le==="instanceMatrix"&&_.instanceMatrix&&(pe=_.instanceMatrix),le==="instanceColor"&&_.instanceColor&&(pe=_.instanceColor)),pe!==void 0){const ge=pe.normalized,Oe=pe.itemSize,je=t.get(pe);if(je===void 0)continue;const rt=je.buffer,it=je.type,st=je.bytesPerElement,W=it===n.INT||it===n.UNSIGNED_INT||pe.gpuType===vs;if(pe.isInterleavedBufferAttribute){const j=pe.data,ue=j.stride,Ie=pe.offset;if(j.isInstancedInterleavedBuffer){for(let Ee=0;Ee<z.locationSize;Ee++)u(z.location+Ee,j.meshPerAttribute);_.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ee=0;Ee<z.locationSize;Ee++)p(z.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let Ee=0;Ee<z.locationSize;Ee++)b(z.location+Ee,Oe/z.locationSize,it,ge,ue*st,(Ie+Oe/z.locationSize*Ee)*st,W)}else{if(pe.isInstancedBufferAttribute){for(let j=0;j<z.locationSize;j++)u(z.location+j,pe.meshPerAttribute);_.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let j=0;j<z.locationSize;j++)p(z.location+j);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let j=0;j<z.locationSize;j++)b(z.location+j,Oe/z.locationSize,it,ge,Oe*st,Oe/z.locationSize*j*st,W)}}else if(Y!==void 0){const ge=Y[le];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(z.location,ge);break;case 3:n.vertexAttrib3fv(z.location,ge);break;case 4:n.vertexAttrib4fv(z.location,ge);break;default:n.vertexAttrib1fv(z.location,ge)}}}}R()}function P(){Z();for(const _ in i){const D=i[_];for(const H in D){const K=D[H];for(const q in K)h(K[q].object),delete K[q];delete D[H]}delete i[_]}}function T(_){if(i[_.id]===void 0)return;const D=i[_.id];for(const H in D){const K=D[H];for(const q in K)h(K[q].object),delete K[q];delete D[H]}delete i[_.id]}function U(_){for(const D in i){const H=i[D];if(H[_.id]===void 0)continue;const K=H[_.id];for(const q in K)h(K[q].object),delete K[q];delete H[_.id]}}function Z(){E(),s=!0,r!==a&&(r=a,l(r.object))}function E(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:Z,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:S,enableAttribute:p,disableUnusedAttributes:R}}function Df(n,t,e){let i;function a(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function s(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),e.update(h,i,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let x=0;for(let M=0;M<d;M++)x+=h[M];e.update(x,i,1)}function c(l,h,d,f){if(d===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<l.length;M++)s(l[M],h[M],f[M]);else{x.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,d);let M=0;for(let S=0;S<d;S++)M+=h[S]*f[S];e.update(M,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function If(n,t,e,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");a=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(U){return!(U!==nn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const Z=U===si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==wn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==bn&&!Z)}function c(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(nt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=M>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:x,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:w,vertexTextures:P,maxSamples:T}}function Uf(n){const t=this;let e=null,i=0,a=!1,r=!1;const s=new Io,o=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const x=d.length!==0||f||i!==0||a;return a=f,i=d.length,x},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,x){const M=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!a||M===null||M.length===0||r&&!p)r?h(null):l();else{const R=r?0:i,b=R*4;let w=u.clippingState||null;c.value=w,w=h(M,f,b,x);for(let P=0;P!==b;++P)w[P]=e[P];u.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,x,M){const S=d!==null?d.length:0;let p=null;if(S!==0){if(p=c.value,M!==!0||p===null){const u=x+S*4,R=f.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<u)&&(p=new Float32Array(u));for(let b=0,w=x;b!==S;++b,w+=4)s.copy(d[b]).applyMatrix4(R,o),s.normal.toArray(p,w),p[w+3]=s.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}function Nf(n){let t=new WeakMap;function e(s,o){return o===fa?s.mapping=ti:o===ua&&(s.mapping=kn),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===fa||o===ua)if(t.has(s)){const c=t.get(s).texture;return e(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new qo(c.height);return l.fromEquirectangularTexture(n,s),t.set(s,l),s.addEventListener("dispose",a),e(l.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const dn=4,yr=[.125,.215,.35,.446,.526,.582],En=20,Of=256,Kn=new ss,wr=new ze;let Ki=null,qi=0,Yi=0,$i=!1;const Ff=new he;class ma{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,a=100,r={}){const{size:s=256,position:o=Ff}=r;Ki=this._renderer.getRenderTarget(),qi=this._renderer.getActiveCubeFace(),Yi=this._renderer.getActiveMipmapLevel(),$i=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,a,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ki,qi,Yi),this._renderer.xr.enabled=$i,t.scissorTest=!1,Pn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ti||t.mapping===kn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ki=this._renderer.getRenderTarget(),qi=this._renderer.getActiveCubeFace(),Yi=this._renderer.getActiveMipmapLevel(),$i=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:si,format:nn,colorSpace:Bt,depthBuffer:!1},a=Cr(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cr(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bf(r)),this._blurMaterial=kf(r,t,e),this._ggxMaterial=Gf(r,t,e)}return a}_compileMaterial(t){const e=new mt(new Vt,t);this._renderer.compile(e,Kn)}_sceneToCubeUV(t,e,i,a,r){const c=new Tn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,x=d.toneMapping;d.getClearColor(wr),d.toneMapping=fn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new oi,new cn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,p=S.material;let u=!1;const R=t.background;R?R.isColor&&(p.color.copy(R),t.background=null,u=!0):(p.color.copy(wr),u=!0);for(let b=0;b<6;b++){const w=b%3;w===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):w===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));const P=this._cubeSize;Pn(a,w*P,b>2?P:0,P,P),d.setRenderTarget(a),u&&d.render(S,c),d.render(t,c)}d.toneMapping=x,d.autoClear=f,t.background=R}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===ti||t.mapping===kn;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lr());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Pn(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(s,Kn)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const c=s.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),f=.05+l*.95,x=d*f,{_lodMax:M}=this,S=this._sizeLods[i],p=3*S*(i>M-dn?i-M+dn:0),u=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=x,c.mipInt.value=M-e,Pn(r,p,u,3*S,2*S),a.setRenderTarget(r),a.render(o,Kn),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=M-i,Pn(t,p,u,3*S,2*S),a.setRenderTarget(t),a.render(o,Kn)}_blur(t,e,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,i,a,"latitudinal",r),this._halfBlur(s,t,i,i,a,"longitudinal",r)}_halfBlur(t,e,i,a,r,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[a];d.material=l;const f=l.uniforms,x=this._sizeLods[i]-1,M=isFinite(r)?Math.PI/(2*x):2*Math.PI/(2*En-1),S=r/M,p=isFinite(r)?1+Math.floor(h*S):En;p>En&&nt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${En}`);const u=[];let R=0;for(let U=0;U<En;++U){const Z=U/S,E=Math.exp(-Z*Z/2);u.push(E),U===0?R+=E:U<p&&(R+=2*E)}for(let U=0;U<u.length;U++)u[U]=u[U]/R;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=M,f.mipInt.value=b-i;const w=this._sizeLods[a],P=3*w*(a>b-dn?a-b+dn:0),T=4*(this._cubeSize-w);Pn(e,P,T,3*w,2*w),c.setRenderTarget(e),c.render(d,Kn)}}function Bf(n){const t=[],e=[],i=[];let a=n;const r=n-dn+1+yr.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);t.push(o);let c=1/o;s>n-dn?c=yr[s-n+dn-1]:s===0&&(c=0),e.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],x=6,M=6,S=3,p=2,u=1,R=new Float32Array(S*M*x),b=new Float32Array(p*M*x),w=new Float32Array(u*M*x);for(let T=0;T<x;T++){const U=T%3*2/3-1,Z=T>2?0:-1,E=[U,Z,0,U+2/3,Z,0,U+2/3,Z+1,0,U,Z,0,U+2/3,Z+1,0,U,Z+1,0];R.set(E,S*M*T),b.set(f,p*M*T);const _=[T,T,T,T,T,T];w.set(_,u*M*T)}const P=new Vt;P.setAttribute("position",new hn(R,S)),P.setAttribute("uv",new hn(b,p)),P.setAttribute("faceIndex",new hn(w,u)),i.push(new mt(P,null)),a>dn&&a--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Cr(n,t,e){const i=new Bn(n,t,e);return i.texture.mapping=Ci,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pn(n,t,e,i,a){n.viewport.set(t,e,i,a),n.scissor.set(t,e,i,a)}function Gf(n,t,e){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Of,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ii(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function kf(n,t,e){const i=new Float32Array(En),a=new he(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ii(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Lr(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ii(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Pr(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ii(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Ii(){return`

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
	`}function Hf(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===fa||c===ua,h=c===ti||c===kn;if(l||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ma(n)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const x=o.image;return l&&x&&x.height>0||h&&x&&a(x)?(e===null&&(e=new ma(n)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function a(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:s}}function Vf(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const a=n.getExtension(i);return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const a=e(i);return a===null&&ia("WebGLRenderer: "+i+" extension not supported."),a}}}function zf(n,t,e,i){const a={},r=new WeakMap;function s(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const M in f.attributes)t.remove(f.attributes[M]);f.removeEventListener("dispose",s),delete a[f.id];const x=r.get(f);x&&(t.remove(x),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const x in f)t.update(f[x],n.ARRAY_BUFFER)}function l(d){const f=[],x=d.index,M=d.attributes.position;let S=0;if(x!==null){const R=x.array;S=x.version;for(let b=0,w=R.length;b<w;b+=3){const P=R[b+0],T=R[b+1],U=R[b+2];f.push(P,T,T,U,U,P)}}else if(M!==void 0){const R=M.array;S=M.version;for(let b=0,w=R.length/3-1;b<w;b+=3){const P=b+0,T=b+1,U=b+2;f.push(P,T,T,U,U,P)}}else return;const p=new(Qo(f)?Zo:Jo)(f,1);p.version=S;const u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const x=d.index;x!==null&&f.version<x.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Wf(n,t,e){let i;function a(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function c(f,x){n.drawElements(i,x,r,f*s),e.update(x,i,1)}function l(f,x,M){M!==0&&(n.drawElementsInstanced(i,x,r,f*s,M),e.update(x,i,M))}function h(f,x,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,r,f,0,M);let p=0;for(let u=0;u<M;u++)p+=x[u];e.update(p,i,1)}function d(f,x,M,S){if(M===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)l(f[u]/s,x[u],S[u]);else{p.multiDrawElementsInstancedWEBGL(i,x,0,r,f,0,S,0,M);let u=0;for(let R=0;R<M;R++)u+=x[R]*S[R];e.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Xf(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(e.calls++,s){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Ut("WebGLInfo: Unknown draw mode:",s);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function Kf(n,t,e){const i=new WeakMap,a=new It;function r(s,o,c){const l=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let E=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let b=0;x===!0&&(b=1),M===!0&&(b=2),S===!0&&(b=3);let w=o.attributes.position.count*b,P=1;w>t.maxTextureSize&&(P=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const T=new Float32Array(w*P*4*d),U=new Ss(T,w,P,d);U.type=bn,U.needsUpdate=!0;const Z=b*4;for(let _=0;_<d;_++){const D=p[_],H=u[_],K=R[_],q=w*P*4*_;for(let Q=0;Q<D.count;Q++){const Y=Q*Z;x===!0&&(a.fromBufferAttribute(D,Q),T[q+Y+0]=a.x,T[q+Y+1]=a.y,T[q+Y+2]=a.z,T[q+Y+3]=0),M===!0&&(a.fromBufferAttribute(H,Q),T[q+Y+4]=a.x,T[q+Y+5]=a.y,T[q+Y+6]=a.z,T[q+Y+7]=0),S===!0&&(a.fromBufferAttribute(K,Q),T[q+Y+8]=a.x,T[q+Y+9]=a.y,T[q+Y+10]=a.z,T[q+Y+11]=K.itemSize===4?a.w:1)}}f={count:d,texture:U,size:new gt(w,P)},i.set(o,f),o.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,e);else{let x=0;for(let S=0;S<l.length;S++)x+=l[S];const M=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(n,"morphTargetBaseInfluence",M),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function qf(n,t,e,i){let a=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,d=t.get(c,h);if(a.get(d)!==l&&(t.update(d),a.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),a.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;a.get(f)!==l&&(f.update(),a.set(f,l))}return d}function s(){a=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:s}}const Fs=new ha,Dr=new os(1,1),Bs=new Ss,Gs=new ll,ks=new ol,Ir=[],Ur=[],Nr=new Float32Array(16),Or=new Float32Array(9),Fr=new Float32Array(4);function zn(n,t,e){const i=n[0];if(i<=0||i>0)return n;const a=t*e;let r=Ir[a];if(r===void 0&&(r=new Float32Array(a),Ir[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=e,n[s].toArray(r,o)}return r}function vt(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function St(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ui(n,t){let e=Ur[t];e===void 0&&(e=new Int32Array(t),Ur[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Yf(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $f(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vt(e,t))return;n.uniform2fv(this.addr,t),St(e,t)}}function jf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(vt(e,t))return;n.uniform3fv(this.addr,t),St(e,t)}}function Zf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vt(e,t))return;n.uniform4fv(this.addr,t),St(e,t)}}function Jf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(vt(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),St(e,t)}else{if(vt(e,i))return;Fr.set(i),n.uniformMatrix2fv(this.addr,!1,Fr),St(e,i)}}function Qf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(vt(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),St(e,t)}else{if(vt(e,i))return;Or.set(i),n.uniformMatrix3fv(this.addr,!1,Or),St(e,i)}}function eu(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(vt(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),St(e,t)}else{if(vt(e,i))return;Nr.set(i),n.uniformMatrix4fv(this.addr,!1,Nr),St(e,i)}}function tu(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function nu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vt(e,t))return;n.uniform2iv(this.addr,t),St(e,t)}}function iu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vt(e,t))return;n.uniform3iv(this.addr,t),St(e,t)}}function au(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vt(e,t))return;n.uniform4iv(this.addr,t),St(e,t)}}function ru(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function su(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vt(e,t))return;n.uniform2uiv(this.addr,t),St(e,t)}}function ou(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vt(e,t))return;n.uniform3uiv(this.addr,t),St(e,t)}}function lu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vt(e,t))return;n.uniform4uiv(this.addr,t),St(e,t)}}function cu(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(Dr.compareFunction=fs,r=Dr):r=Fs,e.setTexture2D(t||r,a)}function du(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||Gs,a)}function fu(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||ks,a)}function uu(n,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||Bs,a)}function hu(n){switch(n){case 5126:return Yf;case 35664:return $f;case 35665:return jf;case 35666:return Zf;case 35674:return Jf;case 35675:return Qf;case 35676:return eu;case 5124:case 35670:return tu;case 35667:case 35671:return nu;case 35668:case 35672:return iu;case 35669:case 35673:return au;case 5125:return ru;case 36294:return su;case 36295:return ou;case 36296:return lu;case 35678:case 36198:case 36298:case 36306:case 35682:return cu;case 35679:case 36299:case 36307:return du;case 35680:case 36300:case 36308:case 36293:return fu;case 36289:case 36303:case 36311:case 36292:return uu}}function pu(n,t){n.uniform1fv(this.addr,t)}function mu(n,t){const e=zn(t,this.size,2);n.uniform2fv(this.addr,e)}function xu(n,t){const e=zn(t,this.size,3);n.uniform3fv(this.addr,e)}function gu(n,t){const e=zn(t,this.size,4);n.uniform4fv(this.addr,e)}function _u(n,t){const e=zn(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function vu(n,t){const e=zn(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Su(n,t){const e=zn(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Eu(n,t){n.uniform1iv(this.addr,t)}function Mu(n,t){n.uniform2iv(this.addr,t)}function bu(n,t){n.uniform3iv(this.addr,t)}function Tu(n,t){n.uniform4iv(this.addr,t)}function Au(n,t){n.uniform1uiv(this.addr,t)}function Ru(n,t){n.uniform2uiv(this.addr,t)}function yu(n,t){n.uniform3uiv(this.addr,t)}function wu(n,t){n.uniform4uiv(this.addr,t)}function Cu(n,t,e){const i=this.cache,a=t.length,r=Ui(e,a);vt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let s=0;s!==a;++s)e.setTexture2D(t[s]||Fs,r[s])}function Lu(n,t,e){const i=this.cache,a=t.length,r=Ui(e,a);vt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let s=0;s!==a;++s)e.setTexture3D(t[s]||Gs,r[s])}function Pu(n,t,e){const i=this.cache,a=t.length,r=Ui(e,a);vt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let s=0;s!==a;++s)e.setTextureCube(t[s]||ks,r[s])}function Du(n,t,e){const i=this.cache,a=t.length,r=Ui(e,a);vt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let s=0;s!==a;++s)e.setTexture2DArray(t[s]||Bs,r[s])}function Iu(n){switch(n){case 5126:return pu;case 35664:return mu;case 35665:return xu;case 35666:return gu;case 35674:return _u;case 35675:return vu;case 35676:return Su;case 5124:case 35670:return Eu;case 35667:case 35671:return Mu;case 35668:case 35672:return bu;case 35669:case 35673:return Tu;case 5125:return Au;case 36294:return Ru;case 36295:return yu;case 36296:return wu;case 35678:case 36198:case 36298:case 36306:case 35682:return Cu;case 35679:case 36299:case 36307:return Lu;case 35680:case 36300:case 36308:case 36293:return Pu;case 36289:case 36303:case 36311:case 36292:return Du}}class Uu{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=hu(e.type)}}class Nu{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Iu(e.type)}}class Ou{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,e[o.id],i)}}}const ji=/(\w+)(\])?(\[|\.)?/g;function Br(n,t){n.seq.push(t),n.map[t.id]=t}function Fu(n,t,e){const i=n.name,a=i.length;for(ji.lastIndex=0;;){const r=ji.exec(i),s=ji.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===a){Br(e,l===void 0?new Uu(o,n,t):new Nu(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Ou(o),Br(e,d)),e=d}}}class Si{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(e,a),s=t.getUniformLocation(e,r.name);Fu(r,s,this)}}setValue(t,e,i,a){const r=this.map[e];r!==void 0&&r.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let r=0,s=e.length;r!==s;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in e&&i.push(s)}return i}}function Gr(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Bu=37297;let Gu=0;function ku(n,t){const e=n.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${e[s]}`)}return i.join(`
`)}const kr=new Ke;function Hu(n){pt._getMatrix(kr,pt.workingColorSpace,n);const t=`mat3( ${kr.elements.map(e=>e.toFixed(4))} )`;switch(pt.getTransfer(n)){case bs:return[t,"LinearTransferOETF"];case tt:return[t,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Hr(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+ku(n.getShaderSource(t),o)}else return r}function Vu(n,t){const e=Hu(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zu(n,t){let e;switch(t){case sl:e="Linear";break;case rl:e="Reinhard";break;case al:e="Cineon";break;case As:e="ACESFilmic";break;case il:e="AgX";break;case nl:e="Neutral";break;case tl:e="Custom";break;default:nt("WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pi=new he;function Wu(){pt.getLuminanceCoefficients(pi);const n=pi.x.toFixed(4),t=pi.y.toFixed(4),e=pi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xu(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jn).join(`
`)}function Ku(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function qu(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(t,a),s=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[s]={type:r.type,location:n.getAttribLocation(t,s),locationSize:o}}return e}function jn(n){return n!==""}function Vr(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zr(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yu=/^[ \t]*#include +<([\w\d./]+)>/gm;function xa(n){return n.replace(Yu,ju)}const $u=new Map;function ju(n,t){let e=Ne[t];if(e===void 0){const i=$u.get(t);if(i!==void 0)e=Ne[i],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return xa(e)}const Zu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wr(n){return n.replace(Zu,Ju)}function Ju(n,t,e,i){let a="";for(let r=parseInt(t);r<parseInt(e);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Xr(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qu(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===us?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ts?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qt&&(t="SHADOWMAP_TYPE_VSM"),t}function eh(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ti:case kn:t="ENVMAP_TYPE_CUBE";break;case Ci:t="ENVMAP_TYPE_CUBE_UV";break}return t}function th(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===kn&&(t="ENVMAP_MODE_REFRACTION"),t}function nh(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case fl:t="ENVMAP_BLENDING_MIX";break;case dl:t="ENVMAP_BLENDING_ADD";break}return t}function ih(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ah(n,t,e,i){const a=n.getContext(),r=e.defines;let s=e.vertexShader,o=e.fragmentShader;const c=Qu(e),l=eh(e),h=th(e),d=nh(e),f=ih(e),x=Xu(e),M=Ku(r),S=a.createProgram();let p,u,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(jn).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(jn).join(`
`),u.length>0&&(u+=`
`)):(p=[Xr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jn).join(`
`),u=[Xr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?Ne.tonemapping_pars_fragment:"",e.toneMapping!==fn?zu("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Vu("linearToOutputTexel",e.outputColorSpace),Wu(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jn).join(`
`)),s=xa(s),s=Vr(s,e),s=zr(s,e),o=xa(o),o=Vr(o,e),o=zr(o,e),s=Wr(s),o=Wr(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===gr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=R+p+s,w=R+u+o,P=Gr(a,a.VERTEX_SHADER,b),T=Gr(a,a.FRAGMENT_SHADER,w);a.attachShader(S,P),a.attachShader(S,T),e.index0AttributeName!==void 0?a.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function U(D){if(n.debug.checkShaderErrors){const H=a.getProgramInfoLog(S)||"",K=a.getShaderInfoLog(P)||"",q=a.getShaderInfoLog(T)||"",Q=H.trim(),Y=K.trim(),le=q.trim();let z=!0,pe=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,S,P,T);else{const ge=Hr(a,P,"vertex"),Oe=Hr(a,T,"fragment");Ut("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Q+`
`+ge+`
`+Oe)}else Q!==""?nt("WebGLProgram: Program Info Log:",Q):(Y===""||le==="")&&(pe=!1);pe&&(D.diagnostics={runnable:z,programLog:Q,vertexShader:{log:Y,prefix:p},fragmentShader:{log:le,prefix:u}})}a.deleteShader(P),a.deleteShader(T),Z=new Si(a,S),E=qu(a,S)}let Z;this.getUniforms=function(){return Z===void 0&&U(this),Z};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=a.getProgramParameter(S,Bu)),_},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gu++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=T,this}let rh=0;class sh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new oh(t),e.set(t,i)),i}}class oh{constructor(t){this.id=rh++,this.code=t,this.usedTimes=0}}function lh(n,t,e,i,a,r,s){const o=new el,c=new sh,l=new Set,h=[],d=a.logarithmicDepthBuffer,f=a.vertexTextures;let x=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return l.add(E),E===0?"uv":`uv${E}`}function p(E,_,D,H,K){const q=H.fog,Q=K.geometry,Y=E.isMeshStandardMaterial?H.environment:null,le=(E.isMeshStandardMaterial?e:t).get(E.envMap||Y),z=le&&le.mapping===Ci?le.image.height:null,pe=M[E.type];E.precision!==null&&(x=a.getMaxPrecision(E.precision),x!==E.precision&&nt("WebGLProgram.getParameters:",E.precision,"not supported, using",x,"instead."));const ge=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Oe=ge!==void 0?ge.length:0;let je=0;Q.morphAttributes.position!==void 0&&(je=1),Q.morphAttributes.normal!==void 0&&(je=2),Q.morphAttributes.color!==void 0&&(je=3);let rt,it,st,W;if(pe){const qe=$t[pe];rt=qe.vertexShader,it=qe.fragmentShader}else rt=E.vertexShader,it=E.fragmentShader,c.update(E),st=c.getVertexShaderID(E),W=c.getFragmentShaderID(E);const j=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),Ie=K.isInstancedMesh===!0,Ee=K.isBatchedMesh===!0,Ge=!!E.map,Et=!!E.matcap,Fe=!!le,at=!!E.aoMap,A=!!E.lightMap,ke=!!E.bumpMap,He=!!E.normalMap,Je=!!E.displacementMap,_e=!!E.emissiveMap,ot=!!E.metalnessMap,be=!!E.roughnessMap,De=E.anisotropy>0,v=E.clearcoat>0,m=E.dispersion>0,I=E.iridescence>0,V=E.sheen>0,$=E.transmission>0,k=De&&!!E.anisotropyMap,Se=v&&!!E.clearcoatMap,se=v&&!!E.clearcoatNormalMap,Te=v&&!!E.clearcoatRoughnessMap,ve=I&&!!E.iridescenceMap,J=I&&!!E.iridescenceThicknessMap,ne=V&&!!E.sheenColorMap,we=V&&!!E.sheenRoughnessMap,Re=!!E.specularMap,de=!!E.specularColorMap,Le=!!E.specularIntensityMap,y=$&&!!E.transmissionMap,oe=$&&!!E.thicknessMap,ie=!!E.gradientMap,ae=!!E.alphaMap,ee=E.alphaTest>0,X=!!E.alphaHash,me=!!E.extensions;let Pe=fn;E.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Pe=n.toneMapping);const Qe={shaderID:pe,shaderType:E.type,shaderName:E.name,vertexShader:rt,fragmentShader:it,defines:E.defines,customVertexShaderID:st,customFragmentShaderID:W,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:x,batching:Ee,batchingColor:Ee&&K._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&K.instanceColor!==null,instancingMorph:Ie&&K.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Bt,alphaToCoverage:!!E.alphaToCoverage,map:Ge,matcap:Et,envMap:Fe,envMapMode:Fe&&le.mapping,envMapCubeUVHeight:z,aoMap:at,lightMap:A,bumpMap:ke,normalMap:He,displacementMap:f&&Je,emissiveMap:_e,normalMapObjectSpace:He&&E.normalMapType===jo,normalMapTangentSpace:He&&E.normalMapType===$o,metalnessMap:ot,roughnessMap:be,anisotropy:De,anisotropyMap:k,clearcoat:v,clearcoatMap:Se,clearcoatNormalMap:se,clearcoatRoughnessMap:Te,dispersion:m,iridescence:I,iridescenceMap:ve,iridescenceThicknessMap:J,sheen:V,sheenColorMap:ne,sheenRoughnessMap:we,specularMap:Re,specularColorMap:de,specularIntensityMap:Le,transmission:$,transmissionMap:y,thicknessMap:oe,gradientMap:ie,opaque:E.transparent===!1&&E.blending===gi&&E.alphaToCoverage===!1,alphaMap:ae,alphaTest:ee,alphaHash:X,combine:E.combine,mapUv:Ge&&S(E.map.channel),aoMapUv:at&&S(E.aoMap.channel),lightMapUv:A&&S(E.lightMap.channel),bumpMapUv:ke&&S(E.bumpMap.channel),normalMapUv:He&&S(E.normalMap.channel),displacementMapUv:Je&&S(E.displacementMap.channel),emissiveMapUv:_e&&S(E.emissiveMap.channel),metalnessMapUv:ot&&S(E.metalnessMap.channel),roughnessMapUv:be&&S(E.roughnessMap.channel),anisotropyMapUv:k&&S(E.anisotropyMap.channel),clearcoatMapUv:Se&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:se&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:J&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&S(E.sheenRoughnessMap.channel),specularMapUv:Re&&S(E.specularMap.channel),specularColorMapUv:de&&S(E.specularColorMap.channel),specularIntensityMapUv:Le&&S(E.specularIntensityMap.channel),transmissionMapUv:y&&S(E.transmissionMap.channel),thicknessMapUv:oe&&S(E.thicknessMap.channel),alphaMapUv:ae&&S(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(He||De),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!Q.attributes.uv&&(Ge||ae),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:K.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:je,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ge&&E.map.isVideoTexture===!0&&pt.getTransfer(E.map.colorSpace)===tt,decodeVideoTextureEmissive:_e&&E.emissiveMap.isVideoTexture===!0&&pt.getTransfer(E.emissiveMap.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Xt,flipSided:E.side===Nt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:me&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&E.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function u(E){const _=[];if(E.shaderID?_.push(E.shaderID):(_.push(E.customVertexShaderID),_.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)_.push(D),_.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(R(_,E),b(_,E),_.push(n.outputColorSpace)),_.push(E.customProgramCacheKey),_.join()}function R(E,_){E.push(_.precision),E.push(_.outputColorSpace),E.push(_.envMapMode),E.push(_.envMapCubeUVHeight),E.push(_.mapUv),E.push(_.alphaMapUv),E.push(_.lightMapUv),E.push(_.aoMapUv),E.push(_.bumpMapUv),E.push(_.normalMapUv),E.push(_.displacementMapUv),E.push(_.emissiveMapUv),E.push(_.metalnessMapUv),E.push(_.roughnessMapUv),E.push(_.anisotropyMapUv),E.push(_.clearcoatMapUv),E.push(_.clearcoatNormalMapUv),E.push(_.clearcoatRoughnessMapUv),E.push(_.iridescenceMapUv),E.push(_.iridescenceThicknessMapUv),E.push(_.sheenColorMapUv),E.push(_.sheenRoughnessMapUv),E.push(_.specularMapUv),E.push(_.specularColorMapUv),E.push(_.specularIntensityMapUv),E.push(_.transmissionMapUv),E.push(_.thicknessMapUv),E.push(_.combine),E.push(_.fogExp2),E.push(_.sizeAttenuation),E.push(_.morphTargetsCount),E.push(_.morphAttributeCount),E.push(_.numDirLights),E.push(_.numPointLights),E.push(_.numSpotLights),E.push(_.numSpotLightMaps),E.push(_.numHemiLights),E.push(_.numRectAreaLights),E.push(_.numDirLightShadows),E.push(_.numPointLightShadows),E.push(_.numSpotLightShadows),E.push(_.numSpotLightShadowsWithMaps),E.push(_.numLightProbes),E.push(_.shadowMapType),E.push(_.toneMapping),E.push(_.numClippingPlanes),E.push(_.numClipIntersection),E.push(_.depthPacking)}function b(E,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),E.push(o.mask)}function w(E){const _=M[E.type];let D;if(_){const H=$t[_];D=Yo.clone(H.uniforms)}else D=E.uniforms;return D}function P(E,_){let D;for(let H=0,K=h.length;H<K;H++){const q=h[H];if(q.cacheKey===_){D=q,++D.usedTimes;break}}return D===void 0&&(D=new ah(n,_,E,r),h.push(D)),D}function T(E){if(--E.usedTimes===0){const _=h.indexOf(E);h[_]=h[h.length-1],h.pop(),E.destroy()}}function U(E){c.remove(E)}function Z(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:w,acquireProgram:P,releaseProgram:T,releaseShaderCache:U,programs:h,dispose:Z}}function ch(){let n=new WeakMap;function t(s){return n.has(s)}function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function a(s,o,c){n.get(s)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:a,dispose:r}}function dh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Kr(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function qr(){const n=[];let t=0;const e=[],i=[],a=[];function r(){t=0,e.length=0,i.length=0,a.length=0}function s(d,f,x,M,S,p){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:x,groupOrder:M,renderOrder:d.renderOrder,z:S,group:p},n[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=x,u.groupOrder=M,u.renderOrder=d.renderOrder,u.z=S,u.group=p),t++,u}function o(d,f,x,M,S,p){const u=s(d,f,x,M,S,p);x.transmission>0?i.push(u):x.transparent===!0?a.push(u):e.push(u)}function c(d,f,x,M,S,p){const u=s(d,f,x,M,S,p);x.transmission>0?i.unshift(u):x.transparent===!0?a.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||dh),i.length>1&&i.sort(f||Kr),a.length>1&&a.sort(f||Kr)}function h(){for(let d=t,f=n.length;d<f;d++){const x=n[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:a,init:r,push:o,unshift:c,finish:h,sort:l}}function fh(){let n=new WeakMap;function t(i,a){const r=n.get(i);let s;return r===void 0?(s=new qr,n.set(i,[s])):a>=r.length?(s=new qr,r.push(s)):s=r[a],s}function e(){n=new WeakMap}return{get:t,dispose:e}}function uh(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new he,color:new ze};break;case"SpotLight":e={position:new he,direction:new he,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new he,color:new ze,distance:0,decay:0};break;case"HemisphereLight":e={direction:new he,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":e={color:new ze,position:new he,halfWidth:new he,halfHeight:new he};break}return n[t.id]=e,e}}}function hh(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ph=0;function mh(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function xh(n){const t=new uh,e=hh(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new he);const a=new he,r=new an,s=new an;function o(l){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let x=0,M=0,S=0,p=0,u=0,R=0,b=0,w=0,P=0,T=0,U=0;l.sort(mh);for(let E=0,_=l.length;E<_;E++){const D=l[E],H=D.color,K=D.intensity,q=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=H.r*K,d+=H.g*K,f+=H.b*K;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],K);U++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const le=D.shadow,z=e.get(D);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,i.directionalShadow[x]=z,i.directionalShadowMap[x]=Q,i.directionalShadowMatrix[x]=D.shadow.matrix,R++}i.directional[x]=Y,x++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(H).multiplyScalar(K),Y.distance=q,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[S]=Y;const le=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,le.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[S]=le.matrix,D.castShadow){const z=e.get(D);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,i.spotShadow[S]=z,i.spotShadowMap[S]=Q,w++}S++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(H).multiplyScalar(K),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=Y,p++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const le=D.shadow,z=e.get(D);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,z.shadowCameraNear=le.camera.near,z.shadowCameraFar=le.camera.far,i.pointShadow[M]=z,i.pointShadowMap[M]=Q,i.pointShadowMatrix[M]=D.shadow.matrix,b++}i.point[M]=Y,M++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(K),Y.groundColor.copy(D.groundColor).multiplyScalar(K),i.hemi[u]=Y,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const Z=i.hash;(Z.directionalLength!==x||Z.pointLength!==M||Z.spotLength!==S||Z.rectAreaLength!==p||Z.hemiLength!==u||Z.numDirectionalShadows!==R||Z.numPointShadows!==b||Z.numSpotShadows!==w||Z.numSpotMaps!==P||Z.numLightProbes!==U)&&(i.directional.length=x,i.spot.length=S,i.rectArea.length=p,i.point.length=M,i.hemi.length=u,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=U,Z.directionalLength=x,Z.pointLength=M,Z.spotLength=S,Z.rectAreaLength=p,Z.hemiLength=u,Z.numDirectionalShadows=R,Z.numPointShadows=b,Z.numSpotShadows=w,Z.numSpotMaps=P,Z.numLightProbes=U,i.version=ph++)}function c(l,h){let d=0,f=0,x=0,M=0,S=0;const p=h.matrixWorldInverse;for(let u=0,R=l.length;u<R;u++){const b=l[u];if(b.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(p),d++}else if(b.isSpotLight){const w=i.spot[x];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(p),x++}else if(b.isRectAreaLight){const w=i.rectArea[M];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),s.identity(),r.copy(b.matrixWorld),r.premultiply(p),s.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),M++}else if(b.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const w=i.hemi[S];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),S++}}}return{setup:o,setupView:c,state:i}}function Yr(n){const t=new xh(n),e=[],i=[];function a(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function s(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:s}}function gh(n){let t=new WeakMap;function e(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new Yr(n),t.set(a,[o])):r>=s.length?(o=new Yr(n),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const _h=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vh=`uniform sampler2D shadow_pass;
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
}`;function Sh(n,t,e){let i=new rs;const a=new gt,r=new gt,s=new It,o=new Uo({depthPacking:No}),c=new Oo,l={},h=e.maxTextureSize,d={[Gn]:Nt,[Nt]:Gn,[Xt]:Xt},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:_h,fragmentShader:vh}),x=f.clone();x.defines.HORIZONTAL_PASS=1;const M=new Vt;M.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new mt(M,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let u=this.type;this.render=function(T,U,Z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const E=n.getRenderTarget(),_=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),H=n.state;H.setBlending(un),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const K=u!==Qt&&this.type===Qt,q=u===Qt&&this.type!==Qt;for(let Q=0,Y=T.length;Q<Y;Q++){const le=T[Q],z=le.shadow;if(z===void 0){nt("WebGLShadowMap:",le,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const pe=z.getFrameExtents();if(a.multiply(pe),r.copy(z.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/pe.x),a.x=r.x*pe.x,z.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/pe.y),a.y=r.y*pe.y,z.mapSize.y=r.y)),z.map===null||K===!0||q===!0){const Oe=this.type!==Qt?{minFilter:An,magFilter:An}:{};z.map!==null&&z.map.dispose(),z.map=new Bn(a.x,a.y,Oe),z.map.texture.name=le.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ge=z.getViewportCount();for(let Oe=0;Oe<ge;Oe++){const je=z.getViewport(Oe);s.set(r.x*je.x,r.y*je.y,r.x*je.z,r.y*je.w),H.viewport(s),z.updateMatrices(le,Oe),i=z.getFrustum(),w(U,Z,z.camera,le,this.type)}z.isPointLightShadow!==!0&&this.type===Qt&&R(z,Z),z.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(E,_,D)};function R(T,U){const Z=t.update(S);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,x.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,x.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Bn(a.x,a.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(U,null,Z,f,S,null),x.uniforms.shadow_pass.value=T.mapPass.texture,x.uniforms.resolution.value=T.mapSize,x.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(U,null,Z,x,S,null)}function b(T,U,Z,E){let _=null;const D=Z.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)_=D;else if(_=Z.isPointLight===!0?c:o,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const H=_.uuid,K=U.uuid;let q=l[H];q===void 0&&(q={},l[H]=q);let Q=q[K];Q===void 0&&(Q=_.clone(),q[K]=Q,U.addEventListener("dispose",P)),_=Q}if(_.visible=U.visible,_.wireframe=U.wireframe,E===Qt?_.side=U.shadowSide!==null?U.shadowSide:U.side:_.side=U.shadowSide!==null?U.shadowSide:d[U.side],_.alphaMap=U.alphaMap,_.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,_.map=U.map,_.clipShadows=U.clipShadows,_.clippingPlanes=U.clippingPlanes,_.clipIntersection=U.clipIntersection,_.displacementMap=U.displacementMap,_.displacementScale=U.displacementScale,_.displacementBias=U.displacementBias,_.wireframeLinewidth=U.wireframeLinewidth,_.linewidth=U.linewidth,Z.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const H=n.properties.get(_);H.light=Z}return _}function w(T,U,Z,E,_){if(T.visible===!1)return;if(T.layers.test(U.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Qt)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld);const K=t.update(T),q=T.material;if(Array.isArray(q)){const Q=K.groups;for(let Y=0,le=Q.length;Y<le;Y++){const z=Q[Y],pe=q[z.materialIndex];if(pe&&pe.visible){const ge=b(T,pe,E,_);T.onBeforeShadow(n,T,U,Z,K,ge,z),n.renderBufferDirect(Z,null,K,ge,T,z),T.onAfterShadow(n,T,U,Z,K,ge,z)}}}else if(q.visible){const Q=b(T,q,E,_);T.onBeforeShadow(n,T,U,Z,K,Q,null),n.renderBufferDirect(Z,null,K,Q,T,null),T.onAfterShadow(n,T,U,Z,K,Q,null)}}const H=T.children;for(let K=0,q=H.length;K<q;K++)w(H[K],U,Z,E,_)}function P(T){T.target.removeEventListener("dispose",P);for(const Z in l){const E=l[Z],_=T.target.uuid;_ in E&&(E[_].dispose(),delete E[_])}}}const Eh={[da]:ca,[la]:ra,[oa]:aa,[Ti]:sa,[ca]:da,[ra]:la,[aa]:oa,[sa]:Ti};function Mh(n,t){function e(){let y=!1;const oe=new It;let ie=null;const ae=new It(0,0,0,0);return{setMask:function(ee){ie!==ee&&!y&&(n.colorMask(ee,ee,ee,ee),ie=ee)},setLocked:function(ee){y=ee},setClear:function(ee,X,me,Pe,Qe){Qe===!0&&(ee*=Pe,X*=Pe,me*=Pe),oe.set(ee,X,me,Pe),ae.equals(oe)===!1&&(n.clearColor(ee,X,me,Pe),ae.copy(oe))},reset:function(){y=!1,ie=null,ae.set(-1,0,0,0)}}}function i(){let y=!1,oe=!1,ie=null,ae=null,ee=null;return{setReversed:function(X){if(oe!==X){const me=t.get("EXT_clip_control");X?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),oe=X;const Pe=ee;ee=null,this.setClear(Pe)}},getReversed:function(){return oe},setTest:function(X){X?j(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(X){ie!==X&&!y&&(n.depthMask(X),ie=X)},setFunc:function(X){if(oe&&(X=Eh[X]),ae!==X){switch(X){case da:n.depthFunc(n.NEVER);break;case ca:n.depthFunc(n.ALWAYS);break;case la:n.depthFunc(n.LESS);break;case Ti:n.depthFunc(n.LEQUAL);break;case oa:n.depthFunc(n.EQUAL);break;case sa:n.depthFunc(n.GEQUAL);break;case ra:n.depthFunc(n.GREATER);break;case aa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=X}},setLocked:function(X){y=X},setClear:function(X){ee!==X&&(oe&&(X=1-X),n.clearDepth(X),ee=X)},reset:function(){y=!1,ie=null,ae=null,ee=null,oe=!1}}}function a(){let y=!1,oe=null,ie=null,ae=null,ee=null,X=null,me=null,Pe=null,Qe=null;return{setTest:function(qe){y||(qe?j(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(qe){oe!==qe&&!y&&(n.stencilMask(qe),oe=qe)},setFunc:function(qe,qt,Wt){(ie!==qe||ae!==qt||ee!==Wt)&&(n.stencilFunc(qe,qt,Wt),ie=qe,ae=qt,ee=Wt)},setOp:function(qe,qt,Wt){(X!==qe||me!==qt||Pe!==Wt)&&(n.stencilOp(qe,qt,Wt),X=qe,me=qt,Pe=Wt)},setLocked:function(qe){y=qe},setClear:function(qe){Qe!==qe&&(n.clearStencil(qe),Qe=qe)},reset:function(){y=!1,oe=null,ie=null,ae=null,ee=null,X=null,me=null,Pe=null,Qe=null}}}const r=new e,s=new i,o=new a,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,x=[],M=null,S=!1,p=null,u=null,R=null,b=null,w=null,P=null,T=null,U=new ze(0,0,0),Z=0,E=!1,_=null,D=null,H=null,K=null,q=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,le=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=le>=1):z.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=le>=2);let pe=null,ge={};const Oe=n.getParameter(n.SCISSOR_BOX),je=n.getParameter(n.VIEWPORT),rt=new It().fromArray(Oe),it=new It().fromArray(je);function st(y,oe,ie,ae){const ee=new Uint8Array(4),X=n.createTexture();n.bindTexture(y,X),n.texParameteri(y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<ie;me++)y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(oe+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return X}const W={};W[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),j(n.DEPTH_TEST),s.setFunc(Ti),ke(!1),He(fr),j(n.CULL_FACE),at(un);function j(y){h[y]!==!0&&(n.enable(y),h[y]=!0)}function ue(y){h[y]!==!1&&(n.disable(y),h[y]=!1)}function Ie(y,oe){return d[y]!==oe?(n.bindFramebuffer(y,oe),d[y]=oe,y===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=oe),y===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ee(y,oe){let ie=x,ae=!1;if(y){ie=f.get(oe),ie===void 0&&(ie=[],f.set(oe,ie));const ee=y.textures;if(ie.length!==ee.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let X=0,me=ee.length;X<me;X++)ie[X]=n.COLOR_ATTACHMENT0+X;ie.length=ee.length,ae=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,ae=!0);ae&&n.drawBuffers(ie)}function Ge(y){return M!==y?(n.useProgram(y),M=y,!0):!1}const Et={[Xn]:n.FUNC_ADD,[co]:n.FUNC_SUBTRACT,[lo]:n.FUNC_REVERSE_SUBTRACT};Et[hl]=n.MIN,Et[pl]=n.MAX;const Fe={[Ao]:n.ZERO,[To]:n.ONE,[bo]:n.SRC_COLOR,[Mo]:n.SRC_ALPHA,[Eo]:n.SRC_ALPHA_SATURATE,[So]:n.DST_COLOR,[vo]:n.DST_ALPHA,[_o]:n.ONE_MINUS_SRC_COLOR,[go]:n.ONE_MINUS_SRC_ALPHA,[xo]:n.ONE_MINUS_DST_COLOR,[mo]:n.ONE_MINUS_DST_ALPHA,[po]:n.CONSTANT_COLOR,[ho]:n.ONE_MINUS_CONSTANT_COLOR,[uo]:n.CONSTANT_ALPHA,[fo]:n.ONE_MINUS_CONSTANT_ALPHA};function at(y,oe,ie,ae,ee,X,me,Pe,Qe,qe){if(y===un){S===!0&&(ue(n.BLEND),S=!1);return}if(S===!1&&(j(n.BLEND),S=!0),y!==Ko){if(y!==p||qe!==E){if((u!==Xn||w!==Xn)&&(n.blendEquation(n.FUNC_ADD),u=Xn,w=Xn),qe)switch(y){case gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pr:n.blendFunc(n.ONE,n.ONE);break;case hr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ur:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ut("WebGLState: Invalid blending: ",y);break}else switch(y){case gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case hr:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ur:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",y);break}R=null,b=null,P=null,T=null,U.set(0,0,0),Z=0,p=y,E=qe}return}ee=ee||oe,X=X||ie,me=me||ae,(oe!==u||ee!==w)&&(n.blendEquationSeparate(Et[oe],Et[ee]),u=oe,w=ee),(ie!==R||ae!==b||X!==P||me!==T)&&(n.blendFuncSeparate(Fe[ie],Fe[ae],Fe[X],Fe[me]),R=ie,b=ae,P=X,T=me),(Pe.equals(U)===!1||Qe!==Z)&&(n.blendColor(Pe.r,Pe.g,Pe.b,Qe),U.copy(Pe),Z=Qe),p=y,E=!1}function A(y,oe){y.side===Xt?ue(n.CULL_FACE):j(n.CULL_FACE);let ie=y.side===Nt;oe&&(ie=!ie),ke(ie),y.blending===gi&&y.transparent===!1?at(un):at(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),r.setMask(y.colorWrite);const ae=y.stencilWrite;o.setTest(ae),ae&&(o.setMask(y.stencilWriteMask),o.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),o.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),_e(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(y){_!==y&&(y?n.frontFace(n.CW):n.frontFace(n.CCW),_=y)}function He(y){y!==Wo?(j(n.CULL_FACE),y!==D&&(y===fr?n.cullFace(n.BACK):y===Xo?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),D=y}function Je(y){y!==H&&(Y&&n.lineWidth(y),H=y)}function _e(y,oe,ie){y?(j(n.POLYGON_OFFSET_FILL),(K!==oe||q!==ie)&&(n.polygonOffset(oe,ie),K=oe,q=ie)):ue(n.POLYGON_OFFSET_FILL)}function ot(y){y?j(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function be(y){y===void 0&&(y=n.TEXTURE0+Q-1),pe!==y&&(n.activeTexture(y),pe=y)}function De(y,oe,ie){ie===void 0&&(pe===null?ie=n.TEXTURE0+Q-1:ie=pe);let ae=ge[ie];ae===void 0&&(ae={type:void 0,texture:void 0},ge[ie]=ae),(ae.type!==y||ae.texture!==oe)&&(pe!==ie&&(n.activeTexture(ie),pe=ie),n.bindTexture(y,oe||W[y]),ae.type=y,ae.texture=oe)}function v(){const y=ge[pe];y!==void 0&&y.type!==void 0&&(n.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function m(){try{n.compressedTexImage2D(...arguments)}catch(y){y("WebGLState:",y)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(y){y("WebGLState:",y)}}function V(){try{n.texSubImage2D(...arguments)}catch(y){y("WebGLState:",y)}}function $(){try{n.texSubImage3D(...arguments)}catch(y){y("WebGLState:",y)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(y){y("WebGLState:",y)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(y){y("WebGLState:",y)}}function se(){try{n.texStorage2D(...arguments)}catch(y){y("WebGLState:",y)}}function Te(){try{n.texStorage3D(...arguments)}catch(y){y("WebGLState:",y)}}function ve(){try{n.texImage2D(...arguments)}catch(y){y("WebGLState:",y)}}function J(){try{n.texImage3D(...arguments)}catch(y){y("WebGLState:",y)}}function ne(y){rt.equals(y)===!1&&(n.scissor(y.x,y.y,y.z,y.w),rt.copy(y))}function we(y){it.equals(y)===!1&&(n.viewport(y.x,y.y,y.z,y.w),it.copy(y))}function Re(y,oe){let ie=l.get(oe);ie===void 0&&(ie=new WeakMap,l.set(oe,ie));let ae=ie.get(y);ae===void 0&&(ae=n.getUniformBlockIndex(oe,y.name),ie.set(y,ae))}function de(y,oe){const ae=l.get(oe).get(y);c.get(oe)!==ae&&(n.uniformBlockBinding(oe,ae,y.__bindingPointIndex),c.set(oe,ae))}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},pe=null,ge={},d={},f=new WeakMap,x=[],M=null,S=!1,p=null,u=null,R=null,b=null,w=null,P=null,T=null,U=new ze(0,0,0),Z=0,E=!1,_=null,D=null,H=null,K=null,q=null,rt.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:j,disable:ue,bindFramebuffer:Ie,drawBuffers:Ee,useProgram:Ge,setBlending:at,setMaterial:A,setFlipSided:ke,setCullFace:He,setLineWidth:Je,setPolygonOffset:_e,setScissorTest:ot,activeTexture:be,bindTexture:De,unbindTexture:v,compressedTexImage2D:m,compressedTexImage3D:I,texImage2D:ve,texImage3D:J,updateUBOMapping:Re,uniformBlockBinding:de,texStorage2D:se,texStorage3D:Te,texSubImage2D:V,texSubImage3D:$,compressedTexSubImage2D:k,compressedTexSubImage3D:Se,scissor:ne,viewport:we,reset:Le}}function bh(n,t,e,i,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,h=new WeakMap;let d;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(v,m){return x?new OffscreenCanvas(v,m):cl("canvas")}function S(v,m,I){let V=1;const $=De(v);if(($.width>I||$.height>I)&&(V=I/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const k=Math.floor(V*$.width),Se=Math.floor(V*$.height);d===void 0&&(d=M(k,Se));const se=m?M(k,Se):d;return se.width=k,se.height=Se,se.getContext("2d").drawImage(v,0,0,k,Se),nt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+k+"x"+Se+")."),se}else return"data"in v&&nt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),v;return v}function p(v){return v.generateMipmaps}function u(v){n.generateMipmap(v)}function R(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(v,m,I,V,$=!1){if(v!==null){if(n[v]!==void 0)return n[v];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let k=m;if(m===n.RED&&(I===n.FLOAT&&(k=n.R32F),I===n.HALF_FLOAT&&(k=n.R16F),I===n.UNSIGNED_BYTE&&(k=n.R8)),m===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.R8UI),I===n.UNSIGNED_SHORT&&(k=n.R16UI),I===n.UNSIGNED_INT&&(k=n.R32UI),I===n.BYTE&&(k=n.R8I),I===n.SHORT&&(k=n.R16I),I===n.INT&&(k=n.R32I)),m===n.RG&&(I===n.FLOAT&&(k=n.RG32F),I===n.HALF_FLOAT&&(k=n.RG16F),I===n.UNSIGNED_BYTE&&(k=n.RG8)),m===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RG8UI),I===n.UNSIGNED_SHORT&&(k=n.RG16UI),I===n.UNSIGNED_INT&&(k=n.RG32UI),I===n.BYTE&&(k=n.RG8I),I===n.SHORT&&(k=n.RG16I),I===n.INT&&(k=n.RG32I)),m===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RGB8UI),I===n.UNSIGNED_SHORT&&(k=n.RGB16UI),I===n.UNSIGNED_INT&&(k=n.RGB32UI),I===n.BYTE&&(k=n.RGB8I),I===n.SHORT&&(k=n.RGB16I),I===n.INT&&(k=n.RGB32I)),m===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),I===n.UNSIGNED_INT&&(k=n.RGBA32UI),I===n.BYTE&&(k=n.RGBA8I),I===n.SHORT&&(k=n.RGBA16I),I===n.INT&&(k=n.RGBA32I)),m===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),m===n.RGBA){const Se=$?bs:pt.getTransfer(V);I===n.FLOAT&&(k=n.RGBA32F),I===n.HALF_FLOAT&&(k=n.RGBA16F),I===n.UNSIGNED_BYTE&&(k=Se===tt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function w(v,m){let I;return v?m===null||m===ii||m===ni?I=n.DEPTH24_STENCIL8:m===bn?I=n.DEPTH32F_STENCIL8:m===Ai&&(I=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===ii||m===ni?I=n.DEPTH_COMPONENT24:m===bn?I=n.DEPTH_COMPONENT32F:m===Ai&&(I=n.DEPTH_COMPONENT16),I}function P(v,m){return p(v)===!0||v.isFramebufferTexture&&v.minFilter!==An&&v.minFilter!==Kt?Math.log2(Math.max(m.width,m.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?m.mipmaps.length:1}function T(v){const m=v.target;m.removeEventListener("dispose",T),Z(m),m.isVideoTexture&&h.delete(m)}function U(v){const m=v.target;m.removeEventListener("dispose",U),_(m)}function Z(v){const m=i.get(v);if(m.__webglInit===void 0)return;const I=v.source,V=f.get(I);if(V){const $=V[m.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(v),Object.keys(V).length===0&&f.delete(I)}i.remove(v)}function E(v){const m=i.get(v);n.deleteTexture(m.__webglTexture);const I=v.source,V=f.get(I);delete V[m.__cacheKey],s.memory.textures--}function _(v){const m=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(m.__webglFramebuffer[V]))for(let $=0;$<m.__webglFramebuffer[V].length;$++)n.deleteFramebuffer(m.__webglFramebuffer[V][$]);else n.deleteFramebuffer(m.__webglFramebuffer[V]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[V])}else{if(Array.isArray(m.__webglFramebuffer))for(let V=0;V<m.__webglFramebuffer.length;V++)n.deleteFramebuffer(m.__webglFramebuffer[V]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let V=0;V<m.__webglColorRenderbuffer.length;V++)m.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[V]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const I=v.textures;for(let V=0,$=I.length;V<$;V++){const k=i.get(I[V]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),s.memory.textures--),i.remove(I[V])}i.remove(v)}let D=0;function H(){D=0}function K(){const v=D;return v>=a.maxTextures&&nt("WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+a.maxTextures),D+=1,v}function q(v){const m=[];return m.push(v.wrapS),m.push(v.wrapT),m.push(v.wrapR||0),m.push(v.magFilter),m.push(v.minFilter),m.push(v.anisotropy),m.push(v.internalFormat),m.push(v.format),m.push(v.type),m.push(v.generateMipmaps),m.push(v.premultiplyAlpha),m.push(v.flipY),m.push(v.unpackAlignment),m.push(v.colorSpace),m.join()}function Q(v,m){const I=i.get(v);if(v.isVideoTexture&&ot(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&I.__version!==v.version){const V=v.image;if(V===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{W(I,v,m);return}}else v.isExternalTexture&&(I.__webglTexture=v.sourceTexture?v.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+m)}function Y(v,m){const I=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&I.__version!==v.version){W(I,v,m);return}else v.isExternalTexture&&(I.__webglTexture=v.sourceTexture?v.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+m)}function le(v,m){const I=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&I.__version!==v.version){W(I,v,m);return}e.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+m)}function z(v,m){const I=i.get(v);if(v.version>0&&I.__version!==v.version){j(I,v,m);return}e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+m)}const pe={[ai]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[cs]:n.MIRRORED_REPEAT},ge={[An]:n.NEAREST,[ds]:n.NEAREST_MIPMAP_NEAREST,[$n]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[xi]:n.LINEAR_MIPMAP_NEAREST,[Mn]:n.LINEAR_MIPMAP_LINEAR},Oe={[Do]:n.NEVER,[Po]:n.ALWAYS,[Lo]:n.LESS,[fs]:n.LEQUAL,[Co]:n.EQUAL,[wo]:n.GEQUAL,[yo]:n.GREATER,[Ro]:n.NOTEQUAL};function je(v,m){if(m.type===bn&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===Kt||m.magFilter===xi||m.magFilter===$n||m.magFilter===Mn||m.minFilter===Kt||m.minFilter===xi||m.minFilter===$n||m.minFilter===Mn)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,pe[m.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,pe[m.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,pe[m.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,ge[m.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,ge[m.minFilter]),m.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,Oe[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===An||m.minFilter!==$n&&m.minFilter!==Mn||m.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");n.texParameterf(v,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,a.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function rt(v,m){let I=!1;v.__webglInit===void 0&&(v.__webglInit=!0,m.addEventListener("dispose",T));const V=m.source;let $=f.get(V);$===void 0&&($={},f.set(V,$));const k=q(m);if(k!==v.__cacheKey){$[k]===void 0&&($[k]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,I=!0),$[k].usedTimes++;const Se=$[v.__cacheKey];Se!==void 0&&($[v.__cacheKey].usedTimes--,Se.usedTimes===0&&E(m)),v.__cacheKey=k,v.__webglTexture=$[k].texture}return I}function it(v,m,I){return Math.floor(Math.floor(v/I)/m)}function st(v,m,I,V){const k=v.updateRanges;if(k.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,I,V,m.data);else{k.sort((J,ne)=>J.start-ne.start);let Se=0;for(let J=1;J<k.length;J++){const ne=k[Se],we=k[J],Re=ne.start+ne.count,de=it(we.start,m.width,4),Le=it(ne.start,m.width,4);we.start<=Re+1&&de===Le&&it(we.start+we.count-1,m.width,4)===de?ne.count=Math.max(ne.count,we.start+we.count-ne.start):(++Se,k[Se]=we)}k.length=Se+1;const se=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),ve=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let J=0,ne=k.length;J<ne;J++){const we=k[J],Re=Math.floor(we.start/4),de=Math.ceil(we.count/4),Le=Re%m.width,y=Math.floor(Re/m.width),oe=de,ie=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,y),e.texSubImage2D(n.TEXTURE_2D,0,Le,y,oe,ie,I,V,m.data)}v.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function W(v,m,I){let V=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(V=n.TEXTURE_3D);const $=rt(v,m),k=m.source;e.bindTexture(V,v.__webglTexture,n.TEXTURE0+I);const Se=i.get(k);if(k.version!==Se.__version||$===!0){e.activeTexture(n.TEXTURE0+I);const se=pt.getPrimaries(pt.workingColorSpace),Te=m.colorSpace===In?null:pt.getPrimaries(m.colorSpace),ve=m.colorSpace===In||se===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let J=S(m.image,!1,a.maxTextureSize);J=be(m,J);const ne=r.convert(m.format,m.colorSpace),we=r.convert(m.type);let Re=b(m.internalFormat,ne,we,m.colorSpace,m.isVideoTexture);je(V,m);let de;const Le=m.mipmaps,y=m.isVideoTexture!==!0,oe=Se.__version===void 0||$===!0,ie=k.dataReady,ae=P(m,J);if(m.isDepthTexture)Re=w(m.format===Mi,m.type),oe&&(y?e.texStorage2D(n.TEXTURE_2D,1,Re,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,Re,J.width,J.height,0,ne,we,null));else if(m.isDataTexture)if(Le.length>0){y&&oe&&e.texStorage2D(n.TEXTURE_2D,ae,Re,Le[0].width,Le[0].height);for(let ee=0,X=Le.length;ee<X;ee++)de=Le[ee],y?ie&&e.texSubImage2D(n.TEXTURE_2D,ee,0,0,de.width,de.height,ne,we,de.data):e.texImage2D(n.TEXTURE_2D,ee,Re,de.width,de.height,0,ne,we,de.data);m.generateMipmaps=!1}else y?(oe&&e.texStorage2D(n.TEXTURE_2D,ae,Re,J.width,J.height),ie&&st(m,J,ne,we)):e.texImage2D(n.TEXTURE_2D,0,Re,J.width,J.height,0,ne,we,J.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){y&&oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Re,Le[0].width,Le[0].height,J.depth);for(let ee=0,X=Le.length;ee<X;ee++)if(de=Le[ee],m.format!==nn)if(ne!==null)if(y){if(ie)if(m.layerUpdates.size>0){const me=xr(de.width,de.height,m.format,m.type);for(const Pe of m.layerUpdates){const Qe=de.data.subarray(Pe*me/de.data.BYTES_PER_ELEMENT,(Pe+1)*me/de.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Pe,de.width,de.height,1,ne,Qe)}m.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,J.depth,ne,de.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Re,de.width,de.height,J.depth,0,de.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else y?ie&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,J.depth,ne,we,de.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ee,Re,de.width,de.height,J.depth,0,ne,we,de.data)}else{y&&oe&&e.texStorage2D(n.TEXTURE_2D,ae,Re,Le[0].width,Le[0].height);for(let ee=0,X=Le.length;ee<X;ee++)de=Le[ee],m.format!==nn?ne!==null?y?ie&&e.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,de.width,de.height,ne,de.data):e.compressedTexImage2D(n.TEXTURE_2D,ee,Re,de.width,de.height,0,de.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):y?ie&&e.texSubImage2D(n.TEXTURE_2D,ee,0,0,de.width,de.height,ne,we,de.data):e.texImage2D(n.TEXTURE_2D,ee,Re,de.width,de.height,0,ne,we,de.data)}else if(m.isDataArrayTexture)if(y){if(oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Re,J.width,J.height,J.depth),ie)if(m.layerUpdates.size>0){const ee=xr(J.width,J.height,m.format,m.type);for(const X of m.layerUpdates){const me=J.data.subarray(X*ee/J.data.BYTES_PER_ELEMENT,(X+1)*ee/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,J.width,J.height,1,ne,we,me)}m.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ne,we,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,J.width,J.height,J.depth,0,ne,we,J.data);else if(m.isData3DTexture)y?(oe&&e.texStorage3D(n.TEXTURE_3D,ae,Re,J.width,J.height,J.depth),ie&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ne,we,J.data)):e.texImage3D(n.TEXTURE_3D,0,Re,J.width,J.height,J.depth,0,ne,we,J.data);else if(m.isFramebufferTexture){if(oe)if(y)e.texStorage2D(n.TEXTURE_2D,ae,Re,J.width,J.height);else{let ee=J.width,X=J.height;for(let me=0;me<ae;me++)e.texImage2D(n.TEXTURE_2D,me,Re,ee,X,0,ne,we,null),ee>>=1,X>>=1}}else if(Le.length>0){if(y&&oe){const ee=De(Le[0]);e.texStorage2D(n.TEXTURE_2D,ae,Re,ee.width,ee.height)}for(let ee=0,X=Le.length;ee<X;ee++)de=Le[ee],y?ie&&e.texSubImage2D(n.TEXTURE_2D,ee,0,0,ne,we,de):e.texImage2D(n.TEXTURE_2D,ee,Re,ne,we,de);m.generateMipmaps=!1}else if(y){if(oe){const ee=De(J);e.texStorage2D(n.TEXTURE_2D,ae,Re,ee.width,ee.height)}ie&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ne,we,J)}else e.texImage2D(n.TEXTURE_2D,0,Re,ne,we,J);p(m)&&u(V),Se.__version=k.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function j(v,m,I){if(m.image.length!==6)return;const V=rt(v,m),$=m.source;e.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+I);const k=i.get($);if($.version!==k.__version||V===!0){e.activeTexture(n.TEXTURE0+I);const Se=pt.getPrimaries(pt.workingColorSpace),se=m.colorSpace===In?null:pt.getPrimaries(m.colorSpace),Te=m.colorSpace===In||Se===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ve=m.isCompressedTexture||m.image[0].isCompressedTexture,J=m.image[0]&&m.image[0].isDataTexture,ne=[];for(let X=0;X<6;X++)!ve&&!J?ne[X]=S(m.image[X],!0,a.maxCubemapSize):ne[X]=J?m.image[X].image:m.image[X],ne[X]=be(m,ne[X]);const we=ne[0],Re=r.convert(m.format,m.colorSpace),de=r.convert(m.type),Le=b(m.internalFormat,Re,de,m.colorSpace),y=m.isVideoTexture!==!0,oe=k.__version===void 0||V===!0,ie=$.dataReady;let ae=P(m,we);je(n.TEXTURE_CUBE_MAP,m);let ee;if(ve){y&&oe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Le,we.width,we.height);for(let X=0;X<6;X++){ee=ne[X].mipmaps;for(let me=0;me<ee.length;me++){const Pe=ee[me];m.format!==nn?Re!==null?y?ie&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,0,0,Pe.width,Pe.height,Re,Pe.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,Le,Pe.width,Pe.height,0,Pe.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):y?ie&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,0,0,Pe.width,Pe.height,Re,de,Pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,Le,Pe.width,Pe.height,0,Re,de,Pe.data)}}}else{if(ee=m.mipmaps,y&&oe){ee.length>0&&ae++;const X=De(ne[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Le,X.width,X.height)}for(let X=0;X<6;X++)if(J){y?ie&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ne[X].width,ne[X].height,Re,de,ne[X].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Le,ne[X].width,ne[X].height,0,Re,de,ne[X].data);for(let me=0;me<ee.length;me++){const Qe=ee[me].image[X].image;y?ie&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,0,0,Qe.width,Qe.height,Re,de,Qe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,Le,Qe.width,Qe.height,0,Re,de,Qe.data)}}else{y?ie&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Re,de,ne[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Le,Re,de,ne[X]);for(let me=0;me<ee.length;me++){const Pe=ee[me];y?ie&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,0,0,Re,de,Pe.image[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,Le,Re,de,Pe.image[X])}}}p(m)&&u(n.TEXTURE_CUBE_MAP),k.__version=$.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function ue(v,m,I,V,$,k){const Se=r.convert(I.format,I.colorSpace),se=r.convert(I.type),Te=b(I.internalFormat,Se,se,I.colorSpace),ve=i.get(m),J=i.get(I);if(J.__renderTarget=m,!ve.__hasExternalTextures){const ne=Math.max(1,m.width>>k),we=Math.max(1,m.height>>k);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,k,Te,ne,we,m.depth,0,Se,se,null):e.texImage2D($,k,Te,ne,we,0,Se,se,null)}e.bindFramebuffer(n.FRAMEBUFFER,v),_e(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,$,J.__webglTexture,0,Je(m)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,$,J.__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(v,m,I){if(n.bindRenderbuffer(n.RENDERBUFFER,v),m.depthBuffer){const V=m.depthTexture,$=V&&V.isDepthTexture?V.type:null,k=w(m.stencilBuffer,$),Se=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=Je(m);_e(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,k,m.width,m.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,k,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,k,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,v)}else{const V=m.textures;for(let $=0;$<V.length;$++){const k=V[$],Se=r.convert(k.format,k.colorSpace),se=r.convert(k.type),Te=b(k.internalFormat,Se,se,k.colorSpace),ve=Je(m);I&&_e(m)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,Te,m.width,m.height):_e(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,Te,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,Te,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(v,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,v),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(m.depthTexture);V.__renderTarget=m,(!V.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),Q(m.depthTexture,0);const $=V.__webglTexture,k=Je(m);if(m.depthTexture.format===va)_e(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(m.depthTexture.format===Mi)_e(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ge(v){const m=i.get(v),I=v.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==v.depthTexture){const V=v.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),V){const $=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),m.__depthDisposeCallback=$}m.__boundDepthTexture=V}if(v.depthTexture&&!m.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const V=v.texture.mipmaps;V&&V.length>0?Ee(m.__webglFramebuffer[0],v):Ee(m.__webglFramebuffer,v)}else if(I){m.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[V]),m.__webglDepthbuffer[V]===void 0)m.__webglDepthbuffer[V]=n.createRenderbuffer(),Ie(m.__webglDepthbuffer[V],v,!1);else{const $=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,k)}}else{const V=v.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),Ie(m.__webglDepthbuffer,v,!1);else{const $=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,k)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Et(v,m,I){const V=i.get(v);m!==void 0&&ue(V.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ge(v)}function Fe(v){const m=v.texture,I=i.get(v),V=i.get(m);v.addEventListener("dispose",U);const $=v.textures,k=v.isWebGLCubeRenderTarget===!0,Se=$.length>1;if(Se||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=m.version,s.memory.textures++),k){I.__webglFramebuffer=[];for(let se=0;se<6;se++)if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer[se]=[];for(let Te=0;Te<m.mipmaps.length;Te++)I.__webglFramebuffer[se][Te]=n.createFramebuffer()}else I.__webglFramebuffer[se]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){I.__webglFramebuffer=[];for(let se=0;se<m.mipmaps.length;se++)I.__webglFramebuffer[se]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Se)for(let se=0,Te=$.length;se<Te;se++){const ve=i.get($[se]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),s.memory.textures++)}if(v.samples>0&&_e(v)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let se=0;se<$.length;se++){const Te=$[se];I.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[se]);const ve=r.convert(Te.format,Te.colorSpace),J=r.convert(Te.type),ne=b(Te.internalFormat,ve,J,Te.colorSpace,v.isXRRenderTarget===!0),we=Je(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ne,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,I.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(I.__webglDepthRenderbuffer,v,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),je(n.TEXTURE_CUBE_MAP,m);for(let se=0;se<6;se++)if(m.mipmaps&&m.mipmaps.length>0)for(let Te=0;Te<m.mipmaps.length;Te++)ue(I.__webglFramebuffer[se][Te],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te);else ue(I.__webglFramebuffer[se],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(m)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Se){for(let se=0,Te=$.length;se<Te;se++){const ve=$[se],J=i.get(ve);let ne=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(ne=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ne,J.__webglTexture),je(ne,ve),ue(I.__webglFramebuffer,v,ve,n.COLOR_ATTACHMENT0+se,ne,0),p(ve)&&u(ne)}e.unbindTexture()}else{let se=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(se=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(se,V.__webglTexture),je(se,m),m.mipmaps&&m.mipmaps.length>0)for(let Te=0;Te<m.mipmaps.length;Te++)ue(I.__webglFramebuffer[Te],v,m,n.COLOR_ATTACHMENT0,se,Te);else ue(I.__webglFramebuffer,v,m,n.COLOR_ATTACHMENT0,se,0);p(m)&&u(se),e.unbindTexture()}v.depthBuffer&&Ge(v)}function at(v){const m=v.textures;for(let I=0,V=m.length;I<V;I++){const $=m[I];if(p($)){const k=R(v),Se=i.get($).__webglTexture;e.bindTexture(k,Se),u(k),e.unbindTexture()}}}const A=[],ke=[];function He(v){if(v.samples>0){if(_e(v)===!1){const m=v.textures,I=v.width,V=v.height;let $=n.COLOR_BUFFER_BIT;const k=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(v),se=m.length>1;if(se)for(let ve=0;ve<m.length;ve++)e.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Te=v.texture.mipmaps;Te&&Te.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ve=0;ve<m.length;ve++){if(v.resolveDepthBuffer&&(v.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);const J=i.get(m[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,I,V,0,0,I,V,$,n.NEAREST),c===!0&&(A.length=0,ke.length=0,A.push(n.COLOR_ATTACHMENT0+ve),v.depthBuffer&&v.resolveDepthBuffer===!1&&(A.push(k),ke.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,A))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let ve=0;ve<m.length;ve++){e.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);const J=i.get(m[ve]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,J,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&c){const m=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function Je(v){return Math.min(a.maxSamples,v.samples)}function _e(v){const m=i.get(v);return v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function ot(v){const m=s.render.frame;h.get(v)!==m&&(h.set(v,m),v.update())}function be(v,m){const I=v.colorSpace,V=v.format,$=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||I!==Bt&&I!==In&&(pt.getTransfer(I)===tt?(V!==nn||$!==wn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",I)),m}function De(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(l.width=v.naturalWidth||v.width,l.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(l.width=v.displayWidth,l.height=v.displayHeight):(l.width=v.width,l.height=v.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=le,this.setTextureCube=z,this.rebindTextures=Et,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=_e}function Th(n,t){function e(i,a=In){let r;const s=pt.getTransfer(a);if(i===wn)return n.UNSIGNED_BYTE;if(i===xs)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gs)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bo)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Go)return n.BYTE;if(i===ko)return n.SHORT;if(i===Ai)return n.UNSIGNED_SHORT;if(i===vs)return n.INT;if(i===ii)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===si)return n.HALF_FLOAT;if(i===Ho)return n.ALPHA;if(i===Vo)return n.RGB;if(i===nn)return n.RGBA;if(i===va)return n.DEPTH_COMPONENT;if(i===Mi)return n.DEPTH_STENCIL;if(i===zo)return n.RED;if(i===ms)return n.RED_INTEGER;if(i===ls)return n.RG;if(i===ps)return n.RG_INTEGER;if(i===hs)return n.RGBA_INTEGER;if(i===Hi||i===Vi||i===zi||i===Wi)if(s===tt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Hi)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Hi)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zi)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wi)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fa||i===Ba||i===Ga||i===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ha||i===Va||i===za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ha||i===Va)return s===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===za)return s===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wa||i===Xa||i===Ka||i===qa||i===Ya||i===$a||i===ja||i===Za||i===Ja||i===Qa||i===er||i===tr||i===nr||i===ir)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wa)return s===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xa)return s===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ka)return s===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qa)return s===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ya)return s===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$a)return s===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ja)return s===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Za)return s===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ja)return s===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qa)return s===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===er)return s===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tr)return s===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nr)return s===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ir)return s===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ar||i===rr||i===sr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ar)return s===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===or||i===lr||i===cr||i===dr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===or)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ni?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Ah=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rh=`
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

}`;class yh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new _s(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new rn({vertexShader:Ah,fragmentShader:Rh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new Zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wh extends ao{constructor(t,e){super();const i=this;let a=null,r=1,s=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,x=null,M=null;const S=typeof XRWebGLBinding<"u",p=new yh,u={},R=e.getContextAttributes();let b=null,w=null;const P=[],T=[],U=new gt;let Z=null;const E=new Tn;E.viewport=new It;const _=new Tn;_.viewport=new It;const D=[E,_],H=new ro;let K=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=P[W];return j===void 0&&(j=new ki,P[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=P[W];return j===void 0&&(j=new ki,P[W]=j),j.getGripSpace()},this.getHand=function(W){let j=P[W];return j===void 0&&(j=new ki,P[W]=j),j.getHandSpace()};function Q(W){const j=T.indexOf(W.inputSource);if(j===-1)return;const ue=P[j];ue!==void 0&&(ue.update(W.inputSource,W.frame,l||s),ue.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",le);for(let W=0;W<P.length;W++){const j=T[W];j!==null&&(T[W]=null,P[W].disconnect(j))}K=null,q=null,p.reset();for(const W in u)delete u[W];t.setRenderTarget(b),x=null,f=null,d=null,a=null,w=null,st.stop(),i.isPresenting=!1,t.setPixelRatio(Z),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:x},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(a,e)),d},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(b=t.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",le),R.xrCompatible!==!0&&await e.makeXRCompatible(),Z=t.getPixelRatio(),t.getSize(U),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ie=null,Ee=null;R.depth&&(Ee=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ue=R.stencil?Mi:va,Ie=R.stencil?ni:ii);const Ge={colorFormat:e.RGBA8,depthFormat:Ee,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ge),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new Bn(f.textureWidth,f.textureHeight,{format:nn,type:wn,depthTexture:new os(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(a,e,ue),a.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new Bn(x.framebufferWidth,x.framebufferHeight,{format:nn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await a.requestReferenceSpace(o),st.setContext(a),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function le(W){for(let j=0;j<W.removed.length;j++){const ue=W.removed[j],Ie=T.indexOf(ue);Ie>=0&&(T[Ie]=null,P[Ie].disconnect(ue))}for(let j=0;j<W.added.length;j++){const ue=W.added[j];let Ie=T.indexOf(ue);if(Ie===-1){for(let Ge=0;Ge<P.length;Ge++)if(Ge>=T.length){T.push(ue),Ie=Ge;break}else if(T[Ge]===null){T[Ge]=ue,Ie=Ge;break}if(Ie===-1)break}const Ee=P[Ie];Ee&&Ee.connect(ue)}}const z=new he,pe=new he;function ge(W,j,ue){z.setFromMatrixPosition(j.matrixWorld),pe.setFromMatrixPosition(ue.matrixWorld);const Ie=z.distanceTo(pe),Ee=j.projectionMatrix.elements,Ge=ue.projectionMatrix.elements,Et=Ee[14]/(Ee[10]-1),Fe=Ee[14]/(Ee[10]+1),at=(Ee[9]+1)/Ee[5],A=(Ee[9]-1)/Ee[5],ke=(Ee[8]-1)/Ee[0],He=(Ge[8]+1)/Ge[0],Je=Et*ke,_e=Et*He,ot=Ie/(-ke+He),be=ot*-ke;if(j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(be),W.translateZ(ot),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ee[10]===-1)W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const De=Et+ot,v=Fe+ot,m=Je-be,I=_e+(Ie-be),V=at*Fe/v*De,$=A*Fe/v*De;W.projectionMatrix.makePerspective(m,I,V,$,De,v),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Oe(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;let j=W.near,ue=W.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(ue=p.depthFar)),H.near=_.near=E.near=j,H.far=_.far=E.far=ue,(K!==H.near||q!==H.far)&&(a.updateRenderState({depthNear:H.near,depthFar:H.far}),K=H.near,q=H.far),H.layers.mask=W.layers.mask|6,E.layers.mask=H.layers.mask&3,_.layers.mask=H.layers.mask&5;const Ie=W.parent,Ee=H.cameras;Oe(H,Ie);for(let Ge=0;Ge<Ee.length;Ge++)Oe(Ee[Ge],Ie);Ee.length===2?ge(H,E,_):H.projectionMatrix.copy(E.projectionMatrix),je(W,H,Ie)};function je(W,j,ue){ue===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(ue.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=so*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&x===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(W){return u[W]};let rt=null;function it(W,j){if(h=j.getViewerPose(l||s),M=j,h!==null){const ue=h.views;x!==null&&(t.setRenderTargetFramebuffer(w,x.framebuffer),t.setRenderTarget(w));let Ie=!1;ue.length!==H.cameras.length&&(H.cameras.length=0,Ie=!0);for(let Fe=0;Fe<ue.length;Fe++){const at=ue[Fe];let A=null;if(x!==null)A=x.getViewport(at);else{const He=d.getViewSubImage(f,at);A=He.viewport,Fe===0&&(t.setRenderTargetTextures(w,He.colorTexture,He.depthStencilTexture),t.setRenderTarget(w))}let ke=D[Fe];ke===void 0&&(ke=new Tn,ke.layers.enable(Fe),ke.viewport=new It,D[Fe]=ke),ke.matrix.fromArray(at.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(at.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(A.x,A.y,A.width,A.height),Fe===0&&(H.matrix.copy(ke.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ie===!0&&H.cameras.push(ke)}const Ee=a.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const Fe=d.getDepthInformation(ue[0]);Fe&&Fe.isValid&&Fe.texture&&p.init(Fe,a.renderState)}if(Ee&&Ee.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let Fe=0;Fe<ue.length;Fe++){const at=ue[Fe].camera;if(at){let A=u[at];A||(A=new _s,u[at]=A);const ke=d.getCameraImage(at);A.sourceTexture=ke}}}}for(let ue=0;ue<P.length;ue++){const Ie=T[ue],Ee=P[ue];Ie!==null&&Ee!==void 0&&Ee.update(Ie,j,l||s)}rt&&rt(W,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),M=null}const st=new Os;st.setAnimationLoop(it),this.setAnimationLoop=function(W){rt=W},this.dispose=function(){}}}const gn=new Ms,Ch=new an;function Lh(n,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Es(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function a(p,u,R,b,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&x(p,u,w)):u.isMeshMatcapMaterial?(r(p,u),M(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),S(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(s(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,R,b):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Nt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Nt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const R=t.get(u),b=R.envMap,w=R.envMapRotation;b&&(p.envMap.value=b,gn.copy(w),gn.x*=-1,gn.y*=-1,gn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(gn.y*=-1,gn.z*=-1),p.envMapRotation.value.setFromMatrix4(Ch.makeRotationFromEuler(gn)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function s(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,R,b){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*R,p.scale.value=b*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function x(p,u,R){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Nt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function M(p,u){u.matcap&&(p.matcap.value=u.matcap)}function S(p,u){const R=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Ph(n,t,e,i){let a={},r={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,b){const w=b.program;i.uniformBlockBinding(R,w)}function l(R,b){let w=a[R.id];w===void 0&&(M(R),w=h(R),a[R.id]=w,R.addEventListener("dispose",p));const P=b.program;i.updateUBOMapping(R,P);const T=t.render.frame;r[R.id]!==T&&(f(R),r[R.id]=T)}function h(R){const b=d();R.__bindingPointIndex=b;const w=n.createBuffer(),P=R.__size,T=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,P,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,w),w}function d(){for(let R=0;R<o;R++)if(s.indexOf(R)===-1)return s.push(R),R;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const b=a[R.id],w=R.uniforms,P=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,U=w.length;T<U;T++){const Z=Array.isArray(w[T])?w[T]:[w[T]];for(let E=0,_=Z.length;E<_;E++){const D=Z[E];if(x(D,T,E,P)===!0){const H=D.__offset,K=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let Q=0;Q<K.length;Q++){const Y=K[Q],le=S(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,H+q,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,q),q+=le.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(R,b,w,P){const T=R.value,U=b+"_"+w;if(P[U]===void 0)return typeof T=="number"||typeof T=="boolean"?P[U]=T:P[U]=T.clone(),!0;{const Z=P[U];if(typeof T=="number"||typeof T=="boolean"){if(Z!==T)return P[U]=T,!0}else if(Z.equals(T)===!1)return Z.copy(T),!0}return!1}function M(R){const b=R.uniforms;let w=0;const P=16;for(let U=0,Z=b.length;U<Z;U++){const E=Array.isArray(b[U])?b[U]:[b[U]];for(let _=0,D=E.length;_<D;_++){const H=E[_],K=Array.isArray(H.value)?H.value:[H.value];for(let q=0,Q=K.length;q<Q;q++){const Y=K[q],le=S(Y),z=w%P,pe=z%le.boundary,ge=z+pe;w+=pe,ge!==0&&P-ge<le.storage&&(w+=P-ge),H.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=le.storage}}}const T=w%P;return T>0&&(w+=P-T),R.__size=w,R.__cache={},this}function S(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):nt("WebGLRenderer: Unsupported uniform value type.",R),b}function p(R){const b=R.target;b.removeEventListener("dispose",p);const w=s.indexOf(b.__bindingPointIndex);s.splice(w,1),n.deleteBuffer(a[b.id]),delete a[b.id],delete r[b.id]}function u(){for(const R in a)n.deleteBuffer(a[R]);s=[],a={},r={}}return{bind:c,update:l,dispose:u}}const Dh=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Jt=null;function Ih(){return Jt===null&&(Jt=new oo(Dh,32,32,ls,si),Jt.minFilter=Kt,Jt.magFilter=Kt,Jt.wrapS=bi,Jt.wrapT=bi,Jt.generateMipmaps=!1,Jt.needsUpdate=!0),Jt}class Uh{constructor(t={}){const{canvas:e=to(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=s;const M=new Set([hs,ps,ms]),S=new Set([wn,ii,Ai,ni,xs,gs]),p=new Uint32Array(4),u=new Int32Array(4);let R=null,b=null;const w=[],P=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let U=!1;this._outputColorSpace=Zt;let Z=0,E=0,_=null,D=-1,H=null;const K=new It,q=new It;let Q=null;const Y=new ze(0);let le=0,z=e.width,pe=e.height,ge=1,Oe=null,je=null;const rt=new It(0,0,z,pe),it=new It(0,0,z,pe);let st=!1;const W=new rs;let j=!1,ue=!1;const Ie=new an,Ee=new he,Ge=new It,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function at(){return _===null?ge:1}let A=i;function ke(g,C){return e.getContext(g,C)}try{const g={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${no}`),e.addEventListener("webglcontextlost",ee,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",me,!1),A===null){const C="webgl2";if(A=ke(C,g),A===null)throw ke(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw g("WebGLRenderer: "+g.message),g}let He,Je,_e,ot,be,De,v,m,I,V,$,k,Se,se,Te,ve,J,ne,we,Re,de,Le,y,oe;function ie(){He=new Vf(A),He.init(),Le=new Th(A,He),Je=new If(A,He,t,Le),_e=new Mh(A,He),Je.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),ot=new Xf(A),be=new ch,De=new bh(A,He,_e,be,Je,Le,ot),v=new Nf(T),m=new Hf(T),I=new Yl(A),y=new Pf(A,I),V=new zf(A,I,ot,y),$=new qf(A,V,I,ot),we=new Kf(A,Je,De),ve=new Uf(be),k=new lh(T,v,m,He,Je,y,ve),Se=new Lh(T,be),se=new fh,Te=new gh(He),ne=new Lf(T,v,m,_e,$,x,c),J=new Sh(T,$,Je),oe=new Ph(A,ot,Je,_e),Re=new Df(A,He,ot),de=new Wf(A,He,ot),ot.programs=k.programs,T.capabilities=Je,T.extensions=He,T.properties=be,T.renderLists=se,T.shadowMap=J,T.state=_e,T.info=ot}ie();const ae=new wh(T,A);this.xr=ae,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const g=He.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=He.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(g){g!==void 0&&(ge=g,this.setSize(z,pe,!1))},this.getSize=function(g){return g.set(z,pe)},this.setSize=function(g,C,B=!0){if(ae.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}z=g,pe=C,e.width=Math.floor(g*ge),e.height=Math.floor(C*ge),B===!0&&(e.style.width=g+"px",e.style.height=C+"px"),this.setViewport(0,0,g,C)},this.getDrawingBufferSize=function(g){return g.set(z*ge,pe*ge).floor()},this.setDrawingBufferSize=function(g,C,B){z=g,pe=C,ge=B,e.width=Math.floor(g*B),e.height=Math.floor(C*B),this.setViewport(0,0,g,C)},this.getCurrentViewport=function(g){return g.copy(K)},this.getViewport=function(g){return g.copy(rt)},this.setViewport=function(g,C,B,G){g.isVector4?rt.set(g.x,g.y,g.z,g.w):rt.set(g,C,B,G),_e.viewport(K.copy(rt).multiplyScalar(ge).round())},this.getScissor=function(g){return g.copy(it)},this.setScissor=function(g,C,B,G){g.isVector4?it.set(g.x,g.y,g.z,g.w):it.set(g,C,B,G),_e.scissor(q.copy(it).multiplyScalar(ge).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(g){_e.setScissorTest(st=g)},this.setOpaqueSort=function(g){Oe=g},this.setTransparentSort=function(g){je=g},this.getClearColor=function(g){return g.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(g=!0,C=!0,B=!0){let G=0;if(g){let L=!1;if(_!==null){const te=_.texture.format;L=M.has(te)}if(L){const te=_.texture.type,ce=S.has(te),xe=ne.getClearColor(),fe=ne.getClearAlpha(),ye=xe.r,Ce=xe.g,Me=xe.b;ce?(p[0]=ye,p[1]=Ce,p[2]=Me,p[3]=fe,A.clearBufferuiv(A.COLOR,0,p)):(u[0]=ye,u[1]=Ce,u[2]=Me,u[3]=fe,A.clearBufferiv(A.COLOR,0,u))}else G|=A.COLOR_BUFFER_BIT}C&&(G|=A.DEPTH_BUFFER_BIT),B&&(G|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",me,!1),ne.dispose(),se.dispose(),Te.dispose(),be.dispose(),v.dispose(),m.dispose(),$.dispose(),y.dispose(),oe.dispose(),k.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ya),ae.removeEventListener("sessionend",wa),pn.stop()};function ee(g){g.preventDefault(),Na("WebGLRenderer: Context Lost."),U=!0}function X(){Na("WebGLRenderer: Context Restored."),U=!1;const g=ot.autoReset,C=J.enabled,B=J.autoUpdate,G=J.needsUpdate,L=J.type;ie(),ot.autoReset=g,J.enabled=C,J.autoUpdate=B,J.needsUpdate=G,J.type=L}function me(g){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function Pe(g){const C=g.target;C.removeEventListener("dispose",Pe),Qe(C)}function Qe(g){qe(g),be.remove(g)}function qe(g){const C=be.get(g).programs;C!==void 0&&(C.forEach(function(B){k.releaseProgram(B)}),g.isShaderMaterial&&k.releaseShaderCache(g))}this.renderBufferDirect=function(g,C,B,G,L,te){C===null&&(C=Et);const ce=L.isMesh&&L.matrixWorld.determinant()<0,xe=$s(g,C,B,G,L);_e.setMaterial(G,ce);let fe=B.index,ye=1;if(G.wireframe===!0){if(fe=V.getWireframeAttribute(B),fe===void 0)return;ye=2}const Ce=B.drawRange,Me=B.attributes.position;let Ve=Ce.start*ye,Ye=(Ce.start+Ce.count)*ye;te!==null&&(Ve=Math.max(Ve,te.start*ye),Ye=Math.min(Ye,(te.start+te.count)*ye)),fe!==null?(Ve=Math.max(Ve,0),Ye=Math.min(Ye,fe.count)):Me!=null&&(Ve=Math.max(Ve,0),Ye=Math.min(Ye,Me.count));const ft=Ye-Ve;if(ft<0||ft===1/0)return;y.setup(L,G,xe,B,fe);let ut,Ze=Re;if(fe!==null&&(ut=I.get(fe),Ze=de,Ze.setIndex(ut)),L.isMesh)G.wireframe===!0?(_e.setLineWidth(G.wireframeLinewidth*at()),Ze.setMode(A.LINES)):Ze.setMode(A.TRIANGLES);else if(L.isLine){let Ae=G.linewidth;Ae===void 0&&(Ae=1),_e.setLineWidth(Ae*at()),L.isLineSegments?Ze.setMode(A.LINES):L.isLineLoop?Ze.setMode(A.LINE_LOOP):Ze.setMode(A.LINE_STRIP)}else L.isPoints?Ze.setMode(A.POINTS):L.isSprite&&Ze.setMode(A.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)ia("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Ze.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Ae=L._multiDrawStarts,lt=L._multiDrawCounts,Xe=L._multiDrawCount,Ot=fe?I.get(fe).bytesPerElement:1,Ln=be.get(G).currentProgram.getUniforms();for(let Ft=0;Ft<Xe;Ft++)Ln.setValue(A,"_gl_DrawID",Ft),Ze.render(Ae[Ft]/Ot,lt[Ft])}else if(L.isInstancedMesh)Ze.renderInstances(Ve,ft,L.count);else if(B.isInstancedBufferGeometry){const Ae=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,lt=Math.min(B.instanceCount,Ae);Ze.renderInstances(Ve,ft,lt)}else Ze.render(Ve,ft)};function qt(g,C,B){g.transparent===!0&&g.side===Xt&&g.forceSinglePass===!1?(g.side=Nt,g.needsUpdate=!0,ui(g,C,B),g.side=Gn,g.needsUpdate=!0,ui(g,C,B),g.side=Xt):ui(g,C,B)}this.compile=function(g,C,B=null){B===null&&(B=g),b=Te.get(B),b.init(C),P.push(b),B.traverseVisible(function(L){L.isLight&&L.layers.test(C.layers)&&(b.pushLight(L),L.castShadow&&b.pushShadow(L))}),g!==B&&g.traverseVisible(function(L){L.isLight&&L.layers.test(C.layers)&&(b.pushLight(L),L.castShadow&&b.pushShadow(L))}),b.setupLights();const G=new Set;return g.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const te=L.material;if(te)if(Array.isArray(te))for(let ce=0;ce<te.length;ce++){const xe=te[ce];qt(xe,B,L),G.add(xe)}else qt(te,B,L),G.add(te)}),b=P.pop(),G},this.compileAsync=function(g,C,B=null){const G=this.compile(g,C,B);return new Promise(L=>{function te(){if(G.forEach(function(ce){be.get(ce).currentProgram.isReady()&&G.delete(ce)}),G.size===0){L(g);return}setTimeout(te,10)}He.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Wt=null;function Ys(g){Wt&&Wt(g)}function ya(){pn.stop()}function wa(){pn.start()}const pn=new Os;pn.setAnimationLoop(Ys),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(g){Wt=g,ae.setAnimationLoop(g),g===null?pn.stop():pn.start()},ae.addEventListener("sessionstart",ya),ae.addEventListener("sessionend",wa),this.render=function(g,C){if(C!==void 0&&C.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(C),C=ae.getCamera()),g.isScene===!0&&g.onBeforeRender(T,g,C,_),b=Te.get(g,P.length),b.init(C),P.push(b),Ie.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),W.setFromProjectionMatrix(Ie,Oa,C.reversedDepth),ue=this.localClippingEnabled,j=ve.init(this.clippingPlanes,ue),R=se.get(g,w.length),R.init(),w.push(R),ae.enabled===!0&&ae.isPresenting===!0){const te=T.xr.getDepthSensingMesh();te!==null&&Bi(te,C,-1/0,T.sortObjects)}Bi(g,C,0,T.sortObjects),R.finish(),T.sortObjects===!0&&R.sort(Oe,je),Fe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Fe&&ne.addToRenderList(R,g),this.info.render.frame++,j===!0&&ve.beginShadows();const B=b.state.shadowsArray;J.render(B,g,C),j===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=R.opaque,L=R.transmissive;if(b.setupLights(),C.isArrayCamera){const te=C.cameras;if(L.length>0)for(let ce=0,xe=te.length;ce<xe;ce++){const fe=te[ce];La(G,L,g,fe)}Fe&&ne.render(g);for(let ce=0,xe=te.length;ce<xe;ce++){const fe=te[ce];Ca(R,g,fe,fe.viewport)}}else L.length>0&&La(G,L,g,C),Fe&&ne.render(g),Ca(R,g,C);_!==null&&E===0&&(De.updateMultisampleRenderTarget(_),De.updateRenderTargetMipmap(_)),g.isScene===!0&&g.onAfterRender(T,g,C),y.resetDefaultState(),D=-1,H=null,P.pop(),P.length>0?(b=P[P.length-1],j===!0&&ve.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?R=w[w.length-1]:R=null};function Bi(g,C,B,G){if(g.visible===!1)return;if(g.layers.test(C.layers)){if(g.isGroup)B=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(C);else if(g.isLight)b.pushLight(g),g.castShadow&&b.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||W.intersectsSprite(g)){G&&Ge.setFromMatrixPosition(g.matrixWorld).applyMatrix4(Ie);const ce=$.update(g),xe=g.material;xe.visible&&R.push(g,ce,xe,B,Ge.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||W.intersectsObject(g))){const ce=$.update(g),xe=g.material;if(G&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),Ge.copy(g.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ge.copy(ce.boundingSphere.center)),Ge.applyMatrix4(g.matrixWorld).applyMatrix4(Ie)),Array.isArray(xe)){const fe=ce.groups;for(let ye=0,Ce=fe.length;ye<Ce;ye++){const Me=fe[ye],Ve=xe[Me.materialIndex];Ve&&Ve.visible&&R.push(g,ce,Ve,B,Ge.z,Me)}}else xe.visible&&R.push(g,ce,xe,B,Ge.z,null)}}const te=g.children;for(let ce=0,xe=te.length;ce<xe;ce++)Bi(te[ce],C,B,G)}function Ca(g,C,B,G){const{opaque:L,transmissive:te,transparent:ce}=g;b.setupLightsView(B),j===!0&&ve.setGlobalState(T.clippingPlanes,B),G&&_e.viewport(K.copy(G)),L.length>0&&fi(L,C,B),te.length>0&&fi(te,C,B),ce.length>0&&fi(ce,C,B),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function La(g,C,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[G.id]===void 0&&(b.state.transmissionRenderTarget[G.id]=new Bn(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?si:wn,minFilter:Mn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const te=b.state.transmissionRenderTarget[G.id],ce=G.viewport||K;te.setSize(ce.z*T.transmissionResolutionScale,ce.w*T.transmissionResolutionScale);const xe=T.getRenderTarget(),fe=T.getActiveCubeFace(),ye=T.getActiveMipmapLevel();T.setRenderTarget(te),T.getClearColor(Y),le=T.getClearAlpha(),le<1&&T.setClearColor(16777215,.5),T.clear(),Fe&&ne.render(B);const Ce=T.toneMapping;T.toneMapping=fn;const Me=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),j===!0&&ve.setGlobalState(T.clippingPlanes,G),fi(g,B,G),De.updateMultisampleRenderTarget(te),De.updateRenderTargetMipmap(te),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ye=0,ft=C.length;Ye<ft;Ye++){const ut=C[Ye],{object:Ze,geometry:Ae,material:lt,group:Xe}=ut;if(lt.side===Xt&&Ze.layers.test(G.layers)){const Ot=lt.side;lt.side=Nt,lt.needsUpdate=!0,Pa(Ze,B,G,Ae,lt,Xe),lt.side=Ot,lt.needsUpdate=!0,Ve=!0}}Ve===!0&&(De.updateMultisampleRenderTarget(te),De.updateRenderTargetMipmap(te))}T.setRenderTarget(xe,fe,ye),T.setClearColor(Y,le),Me!==void 0&&(G.viewport=Me),T.toneMapping=Ce}function fi(g,C,B){const G=C.isScene===!0?C.overrideMaterial:null;for(let L=0,te=g.length;L<te;L++){const ce=g[L],{object:xe,geometry:fe,group:ye}=ce;let Ce=ce.material;Ce.allowOverride===!0&&G!==null&&(Ce=G),xe.layers.test(B.layers)&&Pa(xe,C,B,fe,Ce,ye)}}function Pa(g,C,B,G,L,te){g.onBeforeRender(T,C,B,G,L,te),g.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),L.onBeforeRender(T,C,B,G,g,te),L.transparent===!0&&L.side===Xt&&L.forceSinglePass===!1?(L.side=Nt,L.needsUpdate=!0,T.renderBufferDirect(B,C,G,L,g,te),L.side=Gn,L.needsUpdate=!0,T.renderBufferDirect(B,C,G,L,g,te),L.side=Xt):T.renderBufferDirect(B,C,G,L,g,te),g.onAfterRender(T,C,B,G,L,te)}function ui(g,C,B){C.isScene!==!0&&(C=Et);const G=be.get(g),L=b.state.lights,te=b.state.shadowsArray,ce=L.state.version,xe=k.getParameters(g,L.state,te,C,B),fe=k.getProgramCacheKey(xe);let ye=G.programs;G.environment=g.isMeshStandardMaterial?C.environment:null,G.fog=C.fog,G.envMap=(g.isMeshStandardMaterial?m:v).get(g.envMap||G.environment),G.envMapRotation=G.environment!==null&&g.envMap===null?C.environmentRotation:g.envMapRotation,ye===void 0&&(g.addEventListener("dispose",Pe),ye=new Map,G.programs=ye);let Ce=ye.get(fe);if(Ce!==void 0){if(G.currentProgram===Ce&&G.lightsStateVersion===ce)return Ia(g,xe),Ce}else xe.uniforms=k.getUniforms(g),g.onBeforeCompile(xe,T),Ce=k.acquireProgram(xe,fe),ye.set(fe,Ce),G.uniforms=xe.uniforms;const Me=G.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(Me.clippingPlanes=ve.uniform),Ia(g,xe),G.needsLights=Zs(g),G.lightsStateVersion=ce,G.needsLights&&(Me.ambientLightColor.value=L.state.ambient,Me.lightProbe.value=L.state.probe,Me.directionalLights.value=L.state.directional,Me.directionalLightShadows.value=L.state.directionalShadow,Me.spotLights.value=L.state.spot,Me.spotLightShadows.value=L.state.spotShadow,Me.rectAreaLights.value=L.state.rectArea,Me.ltc_1.value=L.state.rectAreaLTC1,Me.ltc_2.value=L.state.rectAreaLTC2,Me.pointLights.value=L.state.point,Me.pointLightShadows.value=L.state.pointShadow,Me.hemisphereLights.value=L.state.hemi,Me.directionalShadowMap.value=L.state.directionalShadowMap,Me.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Me.spotShadowMap.value=L.state.spotShadowMap,Me.spotLightMatrix.value=L.state.spotLightMatrix,Me.spotLightMap.value=L.state.spotLightMap,Me.pointShadowMap.value=L.state.pointShadowMap,Me.pointShadowMatrix.value=L.state.pointShadowMatrix),G.currentProgram=Ce,G.uniformsList=null,Ce}function Da(g){if(g.uniformsList===null){const C=g.currentProgram.getUniforms();g.uniformsList=Si.seqWithValue(C.seq,g.uniforms)}return g.uniformsList}function Ia(g,C){const B=be.get(g);B.outputColorSpace=C.outputColorSpace,B.batching=C.batching,B.batchingColor=C.batchingColor,B.instancing=C.instancing,B.instancingColor=C.instancingColor,B.instancingMorph=C.instancingMorph,B.skinning=C.skinning,B.morphTargets=C.morphTargets,B.morphNormals=C.morphNormals,B.morphColors=C.morphColors,B.morphTargetsCount=C.morphTargetsCount,B.numClippingPlanes=C.numClippingPlanes,B.numIntersection=C.numClipIntersection,B.vertexAlphas=C.vertexAlphas,B.vertexTangents=C.vertexTangents,B.toneMapping=C.toneMapping}function $s(g,C,B,G,L){C.isScene!==!0&&(C=Et),De.resetTextureUnits();const te=C.fog,ce=G.isMeshStandardMaterial?C.environment:null,xe=_===null?T.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Bt,fe=(G.isMeshStandardMaterial?m:v).get(G.envMap||ce),ye=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ce=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Me=!!B.morphAttributes.position,Ve=!!B.morphAttributes.normal,Ye=!!B.morphAttributes.color;let ft=fn;G.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(ft=T.toneMapping);const ut=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ze=ut!==void 0?ut.length:0,Ae=be.get(G),lt=b.state.lights;if(j===!0&&(ue===!0||g!==H)){const At=g===H&&G.id===D;ve.setState(G,g,At)}let Xe=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==lt.state.version||Ae.outputColorSpace!==xe||L.isBatchedMesh&&Ae.batching===!1||!L.isBatchedMesh&&Ae.batching===!0||L.isBatchedMesh&&Ae.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ae.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ae.instancing===!1||!L.isInstancedMesh&&Ae.instancing===!0||L.isSkinnedMesh&&Ae.skinning===!1||!L.isSkinnedMesh&&Ae.skinning===!0||L.isInstancedMesh&&Ae.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ae.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ae.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ae.instancingMorph===!1&&L.morphTexture!==null||Ae.envMap!==fe||G.fog===!0&&Ae.fog!==te||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ve.numPlanes||Ae.numIntersection!==ve.numIntersection)||Ae.vertexAlphas!==ye||Ae.vertexTangents!==Ce||Ae.morphTargets!==Me||Ae.morphNormals!==Ve||Ae.morphColors!==Ye||Ae.toneMapping!==ft||Ae.morphTargetsCount!==Ze)&&(Xe=!0):(Xe=!0,Ae.__version=G.version);let Ot=Ae.currentProgram;Xe===!0&&(Ot=ui(G,C,L));let Ln=!1,Ft=!1,Wn=!1;const ct=Ot.getUniforms(),wt=Ae.uniforms;if(_e.useProgram(Ot.program)&&(Ln=!0,Ft=!0,Wn=!0),G.id!==D&&(D=G.id,Ft=!0),Ln||H!==g){_e.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),ct.setValue(A,"projectionMatrix",g.projectionMatrix),ct.setValue(A,"viewMatrix",g.matrixWorldInverse);const Ct=ct.map.cameraPosition;Ct!==void 0&&Ct.setValue(A,Ee.setFromMatrixPosition(g.matrixWorld)),Je.logarithmicDepthBuffer&&ct.setValue(A,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ct.setValue(A,"isOrthographic",g.isOrthographicCamera===!0),H!==g&&(H=g,Ft=!0,Wn=!0)}if(L.isSkinnedMesh){ct.setOptional(A,L,"bindMatrix"),ct.setOptional(A,L,"bindMatrixInverse");const At=L.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),ct.setValue(A,"boneTexture",At.boneTexture,De))}L.isBatchedMesh&&(ct.setOptional(A,L,"batchingTexture"),ct.setValue(A,"batchingTexture",L._matricesTexture,De),ct.setOptional(A,L,"batchingIdTexture"),ct.setValue(A,"batchingIdTexture",L._indirectTexture,De),ct.setOptional(A,L,"batchingColorTexture"),L._colorsTexture!==null&&ct.setValue(A,"batchingColorTexture",L._colorsTexture,De));const Gt=B.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&we.update(L,B,Ot),(Ft||Ae.receiveShadow!==L.receiveShadow)&&(Ae.receiveShadow=L.receiveShadow,ct.setValue(A,"receiveShadow",L.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(wt.envMap.value=fe,wt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&C.environment!==null&&(wt.envMapIntensity.value=C.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=Ih()),Ft&&(ct.setValue(A,"toneMappingExposure",T.toneMappingExposure),Ae.needsLights&&js(wt,Wn),te&&G.fog===!0&&Se.refreshFogUniforms(wt,te),Se.refreshMaterialUniforms(wt,G,ge,pe,b.state.transmissionRenderTarget[g.id]),Si.upload(A,Da(Ae),wt,De)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Si.upload(A,Da(Ae),wt,De),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ct.setValue(A,"center",L.center),ct.setValue(A,"modelViewMatrix",L.modelViewMatrix),ct.setValue(A,"normalMatrix",L.normalMatrix),ct.setValue(A,"modelMatrix",L.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const At=G.uniformsGroups;for(let Ct=0,Gi=At.length;Ct<Gi;Ct++){const mn=At[Ct];oe.update(mn,Ot),oe.bind(mn,Ot)}}return Ot}function js(g,C){g.ambientLightColor.needsUpdate=C,g.lightProbe.needsUpdate=C,g.directionalLights.needsUpdate=C,g.directionalLightShadows.needsUpdate=C,g.pointLights.needsUpdate=C,g.pointLightShadows.needsUpdate=C,g.spotLights.needsUpdate=C,g.spotLightShadows.needsUpdate=C,g.rectAreaLights.needsUpdate=C,g.hemisphereLights.needsUpdate=C}function Zs(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(g,C,B){const G=be.get(g);G.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),be.get(g.texture).__webglTexture=C,be.get(g.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:B,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,C){const B=be.get(g);B.__webglFramebuffer=C,B.__useDefaultFramebuffer=C===void 0};const Js=A.createFramebuffer();this.setRenderTarget=function(g,C=0,B=0){_=g,Z=C,E=B;let G=!0,L=null,te=!1,ce=!1;if(g){const fe=be.get(g);if(fe.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(A.FRAMEBUFFER,null),G=!1;else if(fe.__webglFramebuffer===void 0)De.setupRenderTarget(g);else if(fe.__hasExternalTextures)De.rebindTextures(g,be.get(g.texture).__webglTexture,be.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const Me=g.depthTexture;if(fe.__boundDepthTexture!==Me){if(Me!==null&&be.has(Me)&&(g.width!==Me.image.width||g.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(g)}}const ye=g.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ce=!0);const Ce=be.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Ce[C])?L=Ce[C][B]:L=Ce[C],te=!0):g.samples>0&&De.useMultisampledRTT(g)===!1?L=be.get(g).__webglMultisampledFramebuffer:Array.isArray(Ce)?L=Ce[B]:L=Ce,K.copy(g.viewport),q.copy(g.scissor),Q=g.scissorTest}else K.copy(rt).multiplyScalar(ge).floor(),q.copy(it).multiplyScalar(ge).floor(),Q=st;if(B!==0&&(L=Js),_e.bindFramebuffer(A.FRAMEBUFFER,L)&&G&&_e.drawBuffers(g,L),_e.viewport(K),_e.scissor(q),_e.setScissorTest(Q),te){const fe=be.get(g.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+C,fe.__webglTexture,B)}else if(ce){const fe=C;for(let ye=0;ye<g.textures.length;ye++){const Ce=be.get(g.textures[ye]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+ye,Ce.__webglTexture,B,fe)}}else if(g!==null&&B!==0){const fe=be.get(g.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,fe.__webglTexture,B)}D=-1},this.readRenderTargetPixels=function(g,C,B,G,L,te,ce,xe=0){if(!(g&&g.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=be.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe){_e.bindFramebuffer(A.FRAMEBUFFER,fe);try{const ye=g.textures[xe],Ce=ye.format,Me=ye.type;if(!Je.textureFormatReadable(Ce)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Me)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=g.width-G&&B>=0&&B<=g.height-L&&(g.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+xe),A.readPixels(C,B,G,L,Le.convert(Ce),Le.convert(Me),te))}finally{const ye=_!==null?be.get(_).__webglFramebuffer:null;_e.bindFramebuffer(A.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(g,C,B,G,L,te,ce,xe=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=be.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe)if(C>=0&&C<=g.width-G&&B>=0&&B<=g.height-L){_e.bindFramebuffer(A.FRAMEBUFFER,fe);const ye=g.textures[xe],Ce=ye.format,Me=ye.type;if(!Je.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ve),A.bufferData(A.PIXEL_PACK_BUFFER,te.byteLength,A.STREAM_READ),g.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+xe),A.readPixels(C,B,G,L,Le.convert(Ce),Le.convert(Me),0);const Ye=_!==null?be.get(_).__webglFramebuffer:null;_e.bindFramebuffer(A.FRAMEBUFFER,Ye);const ft=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await io(A,ft,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ve),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,te),A.deleteBuffer(Ve),A.deleteSync(ft),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,C=null,B=0){const G=Math.pow(2,-B),L=Math.floor(g.image.width*G),te=Math.floor(g.image.height*G),ce=C!==null?C.x:0,xe=C!==null?C.y:0;De.setTexture2D(g,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,ce,xe,L,te),_e.unbindTexture()};const Qs=A.createFramebuffer(),eo=A.createFramebuffer();this.copyTextureToTexture=function(g,C,B=null,G=null,L=0,te=null){te===null&&(L!==0?(ia("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=L,L=0):te=0);let ce,xe,fe,ye,Ce,Me,Ve,Ye,ft;const ut=g.isCompressedTexture?g.mipmaps[te]:g.image;if(B!==null)ce=B.max.x-B.min.x,xe=B.max.y-B.min.y,fe=B.isBox3?B.max.z-B.min.z:1,ye=B.min.x,Ce=B.min.y,Me=B.isBox3?B.min.z:0;else{const Gt=Math.pow(2,-L);ce=Math.floor(ut.width*Gt),xe=Math.floor(ut.height*Gt),g.isDataArrayTexture?fe=ut.depth:g.isData3DTexture?fe=Math.floor(ut.depth*Gt):fe=1,ye=0,Ce=0,Me=0}G!==null?(Ve=G.x,Ye=G.y,ft=G.z):(Ve=0,Ye=0,ft=0);const Ze=Le.convert(C.format),Ae=Le.convert(C.type);let lt;C.isData3DTexture?(De.setTexture3D(C,0),lt=A.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(De.setTexture2DArray(C,0),lt=A.TEXTURE_2D_ARRAY):(De.setTexture2D(C,0),lt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,C.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,C.unpackAlignment);const Xe=A.getParameter(A.UNPACK_ROW_LENGTH),Ot=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Ln=A.getParameter(A.UNPACK_SKIP_PIXELS),Ft=A.getParameter(A.UNPACK_SKIP_ROWS),Wn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ut.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ut.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ye),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ce),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Me);const ct=g.isDataArrayTexture||g.isData3DTexture,wt=C.isDataArrayTexture||C.isData3DTexture;if(g.isDepthTexture){const Gt=be.get(g),At=be.get(C),Ct=be.get(Gt.__renderTarget),Gi=be.get(At.__renderTarget);_e.bindFramebuffer(A.READ_FRAMEBUFFER,Ct.__webglFramebuffer),_e.bindFramebuffer(A.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let mn=0;mn<fe;mn++)ct&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,be.get(g).__webglTexture,L,Me+mn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,be.get(C).__webglTexture,te,ft+mn)),A.blitFramebuffer(ye,Ce,ce,xe,Ve,Ye,ce,xe,A.DEPTH_BUFFER_BIT,A.NEAREST);_e.bindFramebuffer(A.READ_FRAMEBUFFER,null),_e.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(L!==0||g.isRenderTargetTexture||be.has(g)){const Gt=be.get(g),At=be.get(C);_e.bindFramebuffer(A.READ_FRAMEBUFFER,Qs),_e.bindFramebuffer(A.DRAW_FRAMEBUFFER,eo);for(let Ct=0;Ct<fe;Ct++)ct?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Gt.__webglTexture,L,Me+Ct):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Gt.__webglTexture,L),wt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,At.__webglTexture,te,ft+Ct):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,At.__webglTexture,te),L!==0?A.blitFramebuffer(ye,Ce,ce,xe,Ve,Ye,ce,xe,A.COLOR_BUFFER_BIT,A.NEAREST):wt?A.copyTexSubImage3D(lt,te,Ve,Ye,ft+Ct,ye,Ce,ce,xe):A.copyTexSubImage2D(lt,te,Ve,Ye,ye,Ce,ce,xe);_e.bindFramebuffer(A.READ_FRAMEBUFFER,null),_e.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else wt?g.isDataTexture||g.isData3DTexture?A.texSubImage3D(lt,te,Ve,Ye,ft,ce,xe,fe,Ze,Ae,ut.data):C.isCompressedArrayTexture?A.compressedTexSubImage3D(lt,te,Ve,Ye,ft,ce,xe,fe,Ze,ut.data):A.texSubImage3D(lt,te,Ve,Ye,ft,ce,xe,fe,Ze,Ae,ut):g.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,te,Ve,Ye,ce,xe,Ze,Ae,ut.data):g.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,te,Ve,Ye,ut.width,ut.height,Ze,ut.data):A.texSubImage2D(A.TEXTURE_2D,te,Ve,Ye,ce,xe,Ze,Ae,ut);A.pixelStorei(A.UNPACK_ROW_LENGTH,Xe),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ot),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ln),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ft),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Wn),te===0&&C.generateMipmaps&&A.generateMipmap(lt),_e.unbindTexture()},this.initRenderTarget=function(g){be.get(g).__webglFramebuffer===void 0&&De.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?De.setTextureCube(g,0):g.isData3DTexture?De.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?De.setTexture2DArray(g,0):De.setTexture2D(g,0),_e.unbindTexture()},this.resetState=function(){Z=0,E=0,_=null,_e.reset(),y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(t),e.unpackColorSpace=pt._getUnpackColorSpace()}}class Nh extends Sa{constructor(){super();const t=new oi;t.deleteAttribute("uv");const e=new jt({side:Nt}),i=new jt,a=new Rs(16777215,900,28,2);a.position.set(.418,16.199,.3),this.add(a);const r=new mt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const s=new Ea(t,i,6),o=new Li;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);const c=new mt(t,Dn(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new mt(t,Dn(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new mt(t,Dn(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const d=new mt(t,Dn(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const f=new mt(t,Dn(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const x=new mt(t,Dn(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Dn(n){return new ml({color:0,emissive:16777215,emissiveIntensity:n})}class Vn{static createButton(t,e={}){const i=document.createElement("button");function a(){let l=null;async function h(x){x.addEventListener("end",d),await t.xr.setSession(x),i.textContent="EXIT VR",l=x}function d(){l.removeEventListener("end",d),i.textContent="ENTER VR",l=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="ENTER VR";const f={...e,optionalFeatures:["local-floor","bounded-floor","layers",...e.optionalFeatures||[]]};i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){l===null?navigator.xr.requestSession("immersive-vr",f).then(h):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(x=>{console.warn(x)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(x=>{console.warn(x)})}function r(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function s(){r(),i.textContent="VR NOT SUPPORTED"}function o(l){r(),console.warn("Exception when trying to call xr.isSessionSupported",l),i.textContent="VR NOT ALLOWED"}function c(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return i.id="VRButton",i.style.display="none",c(i),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?a():s(),l&&Vn.xrSessionIsGranted&&i.click()}).catch(o),i;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",c(l),l}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Vn.xrSessionIsGranted=!0})}}}Vn.xrSessionIsGranted=!1;Vn.registerSessionGrantedListener();function $r(n,t){if(t===xl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(t===pa||t===ys){let e=n.getIndex();if(e===null){const s=[],o=n.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)s.push(c);n.setIndex(s),e=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=e.count-2,a=[];if(t===pa)for(let s=1;s<=i;s++)a.push(e.getX(0)),a.push(e.getX(s)),a.push(e.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(a.push(e.getX(s)),a.push(e.getX(s+1)),a.push(e.getX(s+2))):(a.push(e.getX(s+2)),a.push(e.getX(s+1)),a.push(e.getX(s)));a.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(a),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),n}class Oh extends gl{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Hh(e)}),this.register(function(e){return new Vh(e)}),this.register(function(e){return new Zh(e)}),this.register(function(e){return new Jh(e)}),this.register(function(e){return new Qh(e)}),this.register(function(e){return new Wh(e)}),this.register(function(e){return new Xh(e)}),this.register(function(e){return new Kh(e)}),this.register(function(e){return new qh(e)}),this.register(function(e){return new kh(e)}),this.register(function(e){return new Yh(e)}),this.register(function(e){return new zh(e)}),this.register(function(e){return new jh(e)}),this.register(function(e){return new $h(e)}),this.register(function(e){return new Bh(e)}),this.register(function(e){return new ep(e)}),this.register(function(e){return new tp(e)})}load(t,e,i,a){const r=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const l=Jn.extractUrlBase(t);s=Jn.resolveURL(l,this.path)}else s=Jn.extractUrlBase(t);this.manager.itemStart(t);const o=function(l){a?a(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new ws(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,s,function(h){e(h),r.manager.itemEnd(t)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,a){let r;const s={},o={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Hs){try{s[Be.KHR_BINARY_GLTF]=new np(t)}catch(d){a&&a(d);return}r=JSON.parse(s[Be.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){a&&a(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new mp(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,s[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case Be.KHR_MATERIALS_UNLIT:s[d]=new Gh;break;case Be.KHR_DRACO_MESH_COMPRESSION:s[d]=new ip(r,this.dracoLoader);break;case Be.KHR_TEXTURE_TRANSFORM:s[d]=new ap;break;case Be.KHR_MESH_QUANTIZATION:s[d]=new rp;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(s),l.setPlugins(o),l.parse(i,a)}parseAsync(t,e){const i=this;return new Promise(function(a,r){i.parse(t,e,a,r)})}}function Fh(){let n={};return{get:function(t){return n[t]},add:function(t,e){n[t]=e},remove:function(t){delete n[t]},removeAll:function(){n={}}}}const Be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Bh{constructor(t){this.parser=t,this.name=Be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let i=0,a=e.length;i<a;i++){const r=e[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,i="light:"+t;let a=e.cache.get(i);if(a)return a;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new ze(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Bt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ma(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Rs(h),l.distance=d;break;case"spot":l=new _l(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Yt(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),a=Promise.resolve(l),e.cache.add(i,a),a}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,i=this.parser,r=i.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(e.cache,o,c)})}}class Gh{constructor(){this.name=Be.KHR_MATERIALS_UNLIT}getMaterialType(){return cn}extendParams(t,e,i){const a=[];t.color=new ze(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;t.color.setRGB(s[0],s[1],s[2],Bt),t.opacity=s[3]}r.baseColorTexture!==void 0&&a.push(i.assignTexture(t,"map",r.baseColorTexture,Zt))}return Promise.all(a)}}class kh{constructor(t){this.parser=t,this.name=Be.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const a=this.parser.json.materials[t];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const r=a.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class Hh{constructor(t){this.parser=t,this.name=Be.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:zt}extendMaterialParams(t,e){const i=this.parser,a=i.json.materials[t];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const r=[],s=a.extensions[this.name];if(s.clearcoatFactor!==void 0&&(e.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(i.assignTexture(e,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(e,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(e,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new gt(o,o)}return Promise.all(r)}}class Vh{constructor(t){this.parser=t,this.name=Be.KHR_MATERIALS_DISPERSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:zt}extendMaterialParams(t,e){const a=this.parser.json.materials[t];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const r=a.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class zh{constructor(t){this.parser=t,this.name=Be.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:zt}extendMaterialParams(t,e){const i=this.parser,a=i.json.materials[t];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const r=[],s=a.extensions[this.name];return s.iridescenceFactor!==void 0&&(e.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(i.assignTexture(e,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(e.iridescenceIOR=s.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(e,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class Wh{constructor(t){this.parser=t,this.name=Be.KHR_MATERIALS_SHEEN}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:zt}extendMaterialParams(t,e){const i=this.parser,a=i.json.materials[t];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new ze(0,0,0),e.sheenRoughness=0,e.sheen=1;const s=a.extensions[this.name];if(s.sheenColorFactor!==void 0){const o=s.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],Bt)}return s.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(i.assignTexture(e,"sheenColorMap",s.sheenColorTexture,Zt)),s.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(e,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class Xh{constructor(t){this.parser=t,this.name=Be.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:zt}extendMaterialParams(t,e){const i=this.parser,a=i.json.materials[t];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const r=[],s=a.extensions[this.name];return s.transmissionFactor!==void 0&&(e.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(i.assignTexture(e,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class Kh{constructor(t){this.parser=t,this.name=Be.KHR_MATERIALS_VOLUME}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:zt}extendMaterialParams(t,e){const i=this.parser,a=i.json.materials[t];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const r=[],s=a.extensions[this.name];e.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(i.assignTexture(e,"thicknessMap",s.thicknessTexture)),e.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return e.attenuationColor=new ze().setRGB(o[0],o[1],o[2],Bt),Promise.all(r)}}class qh{constructor(t){this.parser=t,this.name=Be.KHR_MATERIALS_IOR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:zt}extendMaterialParams(t,e){const a=this.parser.json.materials[t];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const r=a.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Yh{constructor(t){this.parser=t,this.name=Be.KHR_MATERIALS_SPECULAR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:zt}extendMaterialParams(t,e){const i=this.parser,a=i.json.materials[t];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const r=[],s=a.extensions[this.name];e.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(i.assignTexture(e,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return e.specularColor=new ze().setRGB(o[0],o[1],o[2],Bt),s.specularColorTexture!==void 0&&r.push(i.assignTexture(e,"specularColorMap",s.specularColorTexture,Zt)),Promise.all(r)}}class $h{constructor(t){this.parser=t,this.name=Be.EXT_MATERIALS_BUMP}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:zt}extendMaterialParams(t,e){const i=this.parser,a=i.json.materials[t];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const r=[],s=a.extensions[this.name];return e.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&r.push(i.assignTexture(e,"bumpMap",s.bumpTexture)),Promise.all(r)}}class jh{constructor(t){this.parser=t,this.name=Be.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:zt}extendMaterialParams(t,e){const i=this.parser,a=i.json.materials[t];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const r=[],s=a.extensions[this.name];return s.anisotropyStrength!==void 0&&(e.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(e.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(i.assignTexture(e,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}}class Zh{constructor(t){this.parser=t,this.name=Be.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,i=e.json,a=i.textures[t];if(!a.extensions||!a.extensions[this.name])return null;const r=a.extensions[this.name],s=e.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,s)}}class Jh{constructor(t){this.parser=t,this.name=Be.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,i=this.parser,a=i.json,r=a.textures[t];if(!r.extensions||!r.extensions[e])return null;const s=r.extensions[e],o=a.images[s.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(t,s.source,c)}}class Qh{constructor(t){this.parser=t,this.name=Be.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,i=this.parser,a=i.json,r=a.textures[t];if(!r.extensions||!r.extensions[e])return null;const s=r.extensions[e],o=a.images[s.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(t,s.source,c)}}class ep{constructor(t){this.name=Be.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const a=i.extensions[this.name],r=this.parser.getDependency("buffer",a.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=a.byteOffset||0,l=a.byteLength||0,h=a.count,d=a.byteStride,f=new Uint8Array(o,c,l);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,d,f,a.mode,a.filter).then(function(x){return x.buffer}):s.ready.then(function(){const x=new ArrayBuffer(h*d);return s.decodeGltfBuffer(new Uint8Array(x),h,d,f,a.mode,a.filter),x})})}else return null}}class tp{constructor(t){this.name=Be.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const a=e.meshes[i.mesh];for(const l of a.primitives)if(l.mode!==Ht.TRIANGLES&&l.mode!==Ht.TRIANGLE_STRIP&&l.mode!==Ht.TRIANGLE_FAN&&l.mode!==void 0)return null;const s=i.extensions[this.name].attributes,o=[],c={};for(const l in s)o.push(this.parser.getDependency("accessor",s[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],f=l[0].count,x=[];for(const M of d){const S=new an,p=new he,u=new Cs,R=new he(1,1,1),b=new Ea(M.geometry,M.material,f);for(let w=0;w<f;w++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&u.fromBufferAttribute(c.ROTATION,w),c.SCALE&&R.fromBufferAttribute(c.SCALE,w),b.setMatrixAt(w,S.compose(p,u,R));for(const w in c)if(w==="_COLOR_0"){const P=c[w];b.instanceColor=new vl(P.array,P.itemSize,P.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&M.geometry.setAttribute(w,c[w]);Li.prototype.copy.call(b,M),this.parser.assignFinalMaterial(b),x.push(b)}return h.isGroup?(h.clear(),h.add(...x),h):x[0]}))}}const Hs="glTF",qn=12,jr={JSON:1313821514,BIN:5130562};class np{constructor(t){this.name=Be.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,qn),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Hs)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const a=this.header.length-qn,r=new DataView(t,qn);let s=0;for(;s<a;){const o=r.getUint32(s,!0);s+=4;const c=r.getUint32(s,!0);if(s+=4,c===jr.JSON){const l=new Uint8Array(t,qn+s,o);this.content=i.decode(l)}else if(c===jr.BIN){const l=qn+s;this.body=t.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ip{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Be.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const i=this.json,a=this.dracoLoader,r=t.extensions[this.name].bufferView,s=t.extensions[this.name].attributes,o={},c={},l={};for(const h in s){const d=ga[h]||h.toLowerCase();o[d]=s[h]}for(const h in t.attributes){const d=ga[h]||h.toLowerCase();if(s[h]!==void 0){const f=i.accessors[t.attributes[h]],x=On[f.componentType];l[d]=x.name,c[d]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){a.decodeDracoFile(h,function(x){for(const M in x.attributes){const S=x.attributes[M],p=c[M];p!==void 0&&(S.normalized=p)}d(x)},o,l,Bt,f)})})}}class ap{constructor(){this.name=Be.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class rp{constructor(){this.name=Be.KHR_MESH_QUANTIZATION}}class Vs extends Ll{constructor(t,e,i,a){super(t,e,i,a)}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,a=this.valueSize,r=t*a*3+a;for(let s=0;s!==a;s++)e[s]=i[r+s];return e}interpolate_(t,e,i,a){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=a-e,d=(i-e)/h,f=d*d,x=f*d,M=t*l,S=M-l,p=-2*x+3*f,u=x-f,R=1-p,b=u-f+d;for(let w=0;w!==o;w++){const P=s[S+w+o],T=s[S+w+c]*h,U=s[M+w+o],Z=s[M+w]*h;r[w]=R*P+b*T+p*U+u*Z}return r}}const sp=new Cs;class op extends Vs{interpolate_(t,e,i,a){const r=super.interpolate_(t,e,i,a);return sp.fromArray(r).normalize().toArray(r),r}}const Ht={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},On={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zr={9728:An,9729:Kt,9984:ds,9985:xi,9986:$n,9987:Mn},Jr={33071:bi,33648:cs,10497:ai},Zi={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ga={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},sn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lp={CUBICSPLINE:void 0,LINEAR:Is,STEP:wl},Ji={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cp(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),n.DefaultMaterial}function _n(n,t,e){for(const i in e.extensions)n[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function Yt(n,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(n.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function dp(n,t,e){let i=!1,a=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const d=t[l];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(a=!0),d.COLOR_0!==void 0&&(r=!0),i&&a&&r)break}if(!i&&!a&&!r)return Promise.resolve(n);const s=[],o=[],c=[];for(let l=0,h=t.length;l<h;l++){const d=t[l];if(i){const f=d.POSITION!==void 0?e.getDependency("accessor",d.POSITION):n.attributes.position;s.push(f)}if(a){const f=d.NORMAL!==void 0?e.getDependency("accessor",d.NORMAL):n.attributes.normal;o.push(f)}if(r){const f=d.COLOR_0!==void 0?e.getDependency("accessor",d.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],d=l[1],f=l[2];return i&&(n.morphAttributes.position=h),a&&(n.morphAttributes.normal=d),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function fp(n,t){if(n.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)n.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(n.morphTargetInfluences.length===e.length){n.morphTargetDictionary={};for(let i=0,a=e.length;i<a;i++)n.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function up(n){let t;const e=n.extensions&&n.extensions[Be.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Qi(e.attributes):t=n.indices+":"+Qi(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,a=n.targets.length;i<a;i++)t+=":"+Qi(n.targets[i]);return t}function Qi(n){let t="";const e=Object.keys(n).sort();for(let i=0,a=e.length;i<a;i++)t+=e[i]+":"+n[e[i]]+";";return t}function _a(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hp(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const pp=new an;class mp{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Fh,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,a=-1,r=!1,s=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);a=i&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,s=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&a<17||r&&s<98?this.textureLoader=new _i(this.options.manager):this.textureLoader=new Sl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ws(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const i=this,a=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const o={scene:s[0][a.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:a.asset,parser:i,userData:{}};return _n(r,o,a),Yt(o,a),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let a=0,r=e.length;a<r;a++){const s=e[a].joints;for(let o=0,c=s.length;o<c;o++)t[s[o]].isBone=!0}for(let a=0,r=t.length;a<r;a++){const s=t[a];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;const a=i.clone(),r=(s,o)=>{const c=this.associations.get(s);c!=null&&this.associations.set(o,c);for(const[l,h]of s.children.entries())r(h,o.children[l])};return r(i,a),a.name+="_instance_"+t.uses[e]++,a}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){const a=t(e[i]);if(a)return a}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const i=[];for(let a=0;a<e.length;a++){const r=t(e[a]);r&&i.push(r)}return i}getDependency(t,e){const i=t+":"+e;let a=this.cache.get(i);if(!a){switch(t){case"scene":a=this.loadScene(e);break;case"node":a=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":a=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":a=this.loadAccessor(e);break;case"bufferView":a=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":a=this.loadBuffer(e);break;case"material":a=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":a=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":a=this.loadSkin(e);break;case"animation":a=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":a=this.loadCamera(e);break;default:if(a=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!a)throw new Error("Unknown type: "+t);break}this.cache.add(i,a)}return a}getDependencies(t){let e=this.cache.get(t);if(!e){const i=this,a=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(a.map(function(r,s){return i.getDependency(t,s)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);const a=this.options;return new Promise(function(r,s){i.load(Jn.resolveURL(e.uri,a.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){const a=e.byteLength||0,r=e.byteOffset||0;return i.slice(r,r+a)})}loadAccessor(t){const e=this,i=this.json,a=this.json.accessors[t];if(a.bufferView===void 0&&a.sparse===void 0){const s=Zi[a.type],o=On[a.componentType],c=a.normalized===!0,l=new o(a.count*s);return Promise.resolve(new hn(l,s,c))}const r=[];return a.bufferView!==void 0?r.push(this.getDependency("bufferView",a.bufferView)):r.push(null),a.sparse!==void 0&&(r.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],c=Zi[a.type],l=On[a.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,f=a.byteOffset||0,x=a.bufferView!==void 0?i.bufferViews[a.bufferView].byteStride:void 0,M=a.normalized===!0;let S,p;if(x&&x!==d){const u=Math.floor(f/x),R="InterleavedBuffer:"+a.bufferView+":"+a.componentType+":"+u+":"+a.count;let b=e.cache.get(R);b||(S=new l(o,u*x,a.count*x/h),b=new El(S,x/h),e.cache.add(R,b)),p=new Cl(b,c,f%x/h,M)}else o===null?S=new l(a.count*c):S=new l(o,f,a.count*c),p=new hn(S,c,M);if(a.sparse!==void 0){const u=Zi.SCALAR,R=On[a.sparse.indices.componentType],b=a.sparse.indices.byteOffset||0,w=a.sparse.values.byteOffset||0,P=new R(s[1],b,a.sparse.count*u),T=new l(s[2],w,a.sparse.count*c);o!==null&&(p=new hn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let U=0,Z=P.length;U<Z;U++){const E=P[U];if(p.setX(E,T[U*c]),c>=2&&p.setY(E,T[U*c+1]),c>=3&&p.setZ(E,T[U*c+2]),c>=4&&p.setW(E,T[U*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=M}return p})}loadTexture(t){const e=this.json,i=this.options,r=e.textures[t].source,s=e.images[r];let o=this.textureLoader;if(s.uri){const c=i.manager.getHandler(s.uri);c!==null&&(o=c)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,i){const a=this,r=this.json,s=r.textures[t],o=r.images[e],c=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,i).then(function(h){h.flipY=!1,h.name=s.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[s.sampler]||{};return h.magFilter=Zr[f.magFilter]||Kt,h.minFilter=Zr[f.minFilter]||Mn,h.wrapS=Jr[f.wrapS]||ai,h.wrapT=Jr[f.wrapT]||ai,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==An&&h.minFilter!==Kt,a.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const i=this,a=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());const s=a.images[t],o=self.URL||self.webkitURL;let c=s.uri||"",l=!1;if(s.bufferView!==void 0)c=i.getDependency("bufferView",s.bufferView).then(function(d){l=!0;const f=new Blob([d],{type:s.mimeType});return c=o.createObjectURL(f),c});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(f,x){let M=f;e.isImageBitmapLoader===!0&&(M=function(S){const p=new ha(S);p.needsUpdate=!0,f(p)}),e.load(Jn.resolveURL(d,r.path),M,void 0,x)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),Yt(d,s),d.userData.mimeType=s.mimeType||hp(s.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[t]=h,h}assignTexture(t,e,i,a){const r=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),r.extensions[Be.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Be.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(s);s=r.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,c)}}return a!==void 0&&(s.colorSpace=a),t[e]=s,s})}assignFinalMaterial(t){const e=t.geometry;let i=t.material;const a=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,s=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new Ls,Xi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(t.isLine){const o="LineBasicMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new Pi,Xi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(a||r||s){let o="ClonedMaterial:"+i.uuid+":";a&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),r&&(c.vertexColors=!0),s&&(c.flatShading=!0),a&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}t.material=i}getMaterialType(){return jt}loadMaterial(t){const e=this,i=this.json,a=this.extensions,r=i.materials[t];let s;const o={},c=r.extensions||{},l=[];if(c[Be.KHR_MATERIALS_UNLIT]){const d=a[Be.KHR_MATERIALS_UNLIT];s=d.getMaterialType(),l.push(d.extendParams(o,r,e))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Bt),o.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",d.baseColorTexture,Zt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=Xt);const h=r.alphaMode||Ji.OPAQUE;if(h===Ji.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ji.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==cn&&(l.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new gt(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&s!==cn&&(l.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==cn){const d=r.emissiveFactor;o.emissive=new ze().setRGB(d[0],d[1],d[2],Bt)}return r.emissiveTexture!==void 0&&s!==cn&&l.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,Zt)),Promise.all(l).then(function(){const d=new s(o);return r.name&&(d.name=r.name),Yt(d,r),e.associations.set(d,{materials:t}),r.extensions&&_n(a,d,r),d})}createUniqueName(t){const e=Ml.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,i=this.extensions,a=this.primitiveCache;function r(o){return i[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return Qr(c,o,e)})}const s=[];for(let o=0,c=t.length;o<c;o++){const l=t[o],h=up(l),d=a[h];if(d)s.push(d.promise);else{let f;l.extensions&&l.extensions[Be.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Qr(new Vt,l,e),a[h]={primitive:l,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(t){const e=this,i=this.json,a=this.extensions,r=i.meshes[t],s=r.primitives,o=[];for(let c=0,l=s.length;c<l;c++){const h=s[c].material===void 0?cp(this.cache):this.getDependency("material",s[c].material);o.push(h)}return o.push(e.loadGeometries(s)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let x=0,M=h.length;x<M;x++){const S=h[x],p=s[x];let u;const R=l[x];if(p.mode===Ht.TRIANGLES||p.mode===Ht.TRIANGLE_STRIP||p.mode===Ht.TRIANGLE_FAN||p.mode===void 0)u=r.isSkinnedMesh===!0?new bl(S,R):new mt(S,R),u.isSkinnedMesh===!0&&u.normalizeSkinWeights(),p.mode===Ht.TRIANGLE_STRIP?u.geometry=$r(u.geometry,ys):p.mode===Ht.TRIANGLE_FAN&&(u.geometry=$r(u.geometry,pa));else if(p.mode===Ht.LINES)u=new Ps(S,R);else if(p.mode===Ht.LINE_STRIP)u=new Di(S,R);else if(p.mode===Ht.LINE_LOOP)u=new Tl(S,R);else if(p.mode===Ht.POINTS)u=new Ds(S,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(u.geometry.morphAttributes).length>0&&fp(u,r),u.name=e.createUniqueName(r.name||"mesh_"+t),Yt(u,r),p.extensions&&_n(a,u,p),e.assignFinalMaterial(u),d.push(u)}for(let x=0,M=d.length;x<M;x++)e.associations.set(d[x],{meshes:t,primitives:x});if(d.length===1)return r.extensions&&_n(a,d[0],r),d[0];const f=new ht;r.extensions&&_n(a,f,r),e.associations.set(f,{meshes:t});for(let x=0,M=d.length;x<M;x++)f.add(d[x]);return f})}loadCamera(t){let e;const i=this.json.cameras[t],a=i[i.type];if(!a){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new Tn(yt.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):i.type==="orthographic"&&(e=new ss(-a.xmag,a.xmag,a.ymag,-a.ymag,a.znear,a.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),Yt(e,i),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],i=[];for(let a=0,r=e.joints.length;a<r;a++)i.push(this._loadNodeShallow(e.joints[a]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(a){const r=a.pop(),s=a,o=[],c=[];for(let l=0,h=s.length;l<h;l++){const d=s[l];if(d){o.push(d);const f=new an;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Al(o,c)})}loadAnimation(t){const e=this.json,i=this,a=e.animations[t],r=a.name?a.name:"animation_"+t,s=[],o=[],c=[],l=[],h=[];for(let d=0,f=a.channels.length;d<f;d++){const x=a.channels[d],M=a.samplers[x.sampler],S=x.target,p=S.node,u=a.parameters!==void 0?a.parameters[M.input]:M.input,R=a.parameters!==void 0?a.parameters[M.output]:M.output;S.node!==void 0&&(s.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",u)),c.push(this.getDependency("accessor",R)),l.push(M),h.push(S))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const f=d[0],x=d[1],M=d[2],S=d[3],p=d[4],u=[];for(let b=0,w=f.length;b<w;b++){const P=f[b],T=x[b],U=M[b],Z=S[b],E=p[b];if(P===void 0)continue;P.updateMatrix&&P.updateMatrix();const _=i._createAnimationTracks(P,T,U,Z,E);if(_)for(let D=0;D<_.length;D++)u.push(_[D])}const R=new Rl(r,void 0,u);return Yt(R,a),R})}createNodeMesh(t){const e=this.json,i=this,a=e.nodes[t];return a.mesh===void 0?null:i.getDependency("mesh",a.mesh).then(function(r){const s=i._getNodeRef(i.meshCache,a.mesh,r);return a.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let c=0,l=a.weights.length;c<l;c++)o.morphTargetInfluences[c]=a.weights[c]}),s})}loadNode(t){const e=this.json,i=this,a=e.nodes[t],r=i._loadNodeShallow(t),s=[],o=a.children||[];for(let l=0,h=o.length;l<h;l++)s.push(i.getDependency("node",o[l]));const c=a.skin===void 0?Promise.resolve(null):i.getDependency("skin",a.skin);return Promise.all([r,Promise.all(s),c]).then(function(l){const h=l[0],d=l[1],f=l[2];f!==null&&h.traverse(function(x){x.isSkinnedMesh&&x.bind(f,pp)});for(let x=0,M=d.length;x<M;x++)h.add(d[x]);return h})}_loadNodeShallow(t){const e=this.json,i=this.extensions,a=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],s=r.name?a.createUniqueName(r.name):"",o=[],c=a._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),r.camera!==void 0&&o.push(a.getDependency("camera",r.camera).then(function(l){return a._getNodeRef(a.cameraCache,r.camera,l)})),a._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new yl:l.length>1?h=new ht:l.length===1?h=l[0]:h=new Li,h!==l[0])for(let d=0,f=l.length;d<f;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=s),Yt(h,r),r.extensions&&_n(i,h,r),r.matrix!==void 0){const d=new an;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!a.associations.has(h))a.associations.set(h,{});else if(r.mesh!==void 0&&a.meshCache.refs[r.mesh]>1){const d=a.associations.get(h);a.associations.set(h,{...d})}return a.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,i=this.json.scenes[t],a=this,r=new ht;i.name&&(r.name=a.createUniqueName(i.name)),Yt(r,i),i.extensions&&_n(e,r,i);const s=i.nodes||[],o=[];for(let c=0,l=s.length;c<l;c++)o.push(a.getDependency("node",s[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++)r.add(c[h]);const l=h=>{const d=new Map;for(const[f,x]of a.associations)(f instanceof Xi||f instanceof ha)&&d.set(f,x);return h.traverse(f=>{const x=a.associations.get(f);x!=null&&d.set(f,x)}),d};return a.associations=l(r),r})}_createAnimationTracks(t,e,i,a,r){const s=[],o=t.name?t.name:t.uuid,c=[];sn[r.path]===sn.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(sn[r.path]){case sn.weights:l=vr;break;case sn.rotation:l=Sr;break;case sn.translation:case sn.scale:l=_r;break;default:i.itemSize===1?l=vr:l=_r;break}const h=a.interpolation!==void 0?lp[a.interpolation]:Is,d=this._getArrayFromAccessor(i);for(let f=0,x=c.length;f<x;f++){const M=new l(c[f]+"."+sn[r.path],e.array,d,h);a.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),s.push(M)}return s}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const i=_a(e.constructor),a=new Float32Array(e.length);for(let r=0,s=e.length;r<s;r++)a[r]=e[r]*i;e=a}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){const a=this instanceof Sr?op:Vs;return new a(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function xp(n,t,e){const i=t.attributes,a=new Un;if(i.POSITION!==void 0){const o=e.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(a.set(new he(c[0],c[1],c[2]),new he(l[0],l[1],l[2])),o.normalized){const h=_a(On[o.componentType]);a.min.multiplyScalar(h),a.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new he,c=new he;for(let l=0,h=r.length;l<h;l++){const d=r[l];if(d.POSITION!==void 0){const f=e.json.accessors[d.POSITION],x=f.min,M=f.max;if(x!==void 0&&M!==void 0){if(c.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),c.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),c.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),f.normalized){const S=_a(On[f.componentType]);c.multiplyScalar(S)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(o)}n.boundingBox=a;const s=new Pl;a.getCenter(s.center),s.radius=a.min.distanceTo(a.max)/2,n.boundingSphere=s}function Qr(n,t,e){const i=t.attributes,a=[];function r(s,o){return e.getDependency("accessor",s).then(function(c){n.setAttribute(o,c)})}for(const s in i){const o=ga[s]||s.toLowerCase();o in n.attributes||a.push(r(i[s],o))}if(t.indices!==void 0&&!n.index){const s=e.getDependency("accessor",t.indices).then(function(o){n.setIndex(o)});a.push(s)}return pt.workingColorSpace!==Bt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Yt(n,t),xp(n,t,e),Promise.all(a).then(function(){return t.targets!==void 0?dp(n,t.targets,e):n})}function ea(n){const t=new Map,e=new Map,i=n.clone();return zs(n,i,function(a,r){t.set(r,a),e.set(a,r)}),i.traverse(function(a){if(!a.isSkinnedMesh)return;const r=a,s=t.get(a),o=s.skeleton.bones;r.skeleton=s.skeleton.clone(),r.bindMatrix.copy(s.bindMatrix),r.skeleton.bones=o.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function zs(n,t,e){e(n,t);for(let i=0;i<n.children.length;i++)zs(n.children[i],t.children[i],e)}const Yn=new he;function kt(n,t,e,i,a,r){const s=2*Math.PI*a/4,o=Math.max(r-2*a,0),c=Math.PI/4;Yn.copy(t),Yn[i]=0,Yn.normalize();const l=.5*s/(s+o),h=1-Yn.angleTo(n)/c;return Math.sign(Yn[e])===1?h*l:o/(s+o)+l+l*(1-h)}class ba extends oi{constructor(t=1,e=1,i=1,a=2,r=.1){const s=a*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:a,radius:r},s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new he,l=new he,h=new he(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,x=this.attributes.uv.array,M=d.length/6,S=new he,p=.5/s;for(let u=0,R=0;u<d.length;u+=3,R+=2)switch(c.fromArray(d,u),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),d[u+0]=h.x*Math.sign(c.x)+l.x*r,d[u+1]=h.y*Math.sign(c.y)+l.y*r,d[u+2]=h.z*Math.sign(c.z)+l.z*r,f[u+0]=l.x,f[u+1]=l.y,f[u+2]=l.z,Math.floor(u/M)){case 0:S.set(1,0,0),x[R+0]=kt(S,l,"z","y",r,i),x[R+1]=1-kt(S,l,"y","z",r,e);break;case 1:S.set(-1,0,0),x[R+0]=1-kt(S,l,"z","y",r,i),x[R+1]=1-kt(S,l,"y","z",r,e);break;case 2:S.set(0,1,0),x[R+0]=1-kt(S,l,"x","z",r,t),x[R+1]=kt(S,l,"z","x",r,i);break;case 3:S.set(0,-1,0),x[R+0]=1-kt(S,l,"x","z",r,t),x[R+1]=1-kt(S,l,"z","x",r,i);break;case 4:S.set(0,0,1),x[R+0]=1-kt(S,l,"x","y",r,t),x[R+1]=1-kt(S,l,"y","x",r,e);break;case 5:S.set(0,0,-1),x[R+0]=kt(S,l,"x","y",r,t),x[R+1]=1-kt(S,l,"y","x",r,e);break}}static fromJSON(t){return new ba(t.width,t.height,t.depth,t.segments,t.radius)}}class gp{constructor(){this.a=[]}push(t){let e=this.a,i=e.length;for(e.push(t);i;){let a=i-1>>1;if(e[a].f<=t.f)break;e[i]=e[a],i=a}e[i]=t}pop(){let t=this.a,e=t[0],i=t.pop();if(t.length){let a=0;for(;a*2+1<t.length;){let r=a*2+1;if(r+1<t.length&&t[r+1].f<t[r].f&&r++,t[r].f>=i.f)break;t[a]=t[r],a=r}t[a]=i}return e}}function _p(n,t,e,i,a,r="safe"){if(![...i,...a].every(Number.isInteger)||i[0]<0||i[1]<0||a[0]<0||a[1]<0||i[0]>=t||a[0]>=t||i[1]>=e||a[1]>=e)return null;const s=M=>n[M]?.valid&&!n[M]?.blocked,o=i[1]*t+i[0],c=a[1]*t+a[0];if(!s(o)||!s(c))return null;const l=new Float64Array(t*e).fill(1/0),h=new Int32Array(t*e).fill(-1),d=new Uint8Array(t*e),f=new gp,x=(M,S)=>Math.hypot(a[0]-M,a[1]-S);for(l[o]=0,f.push({i:o,f:x(...i)});f.a.length;){const{i:M}=f.pop();if(d[M])continue;if(M===c){let u=M,R=[];for(;u!==-1;)R.push([u%t,Math.floor(u/t)]),u=h[u];return{path:R.reverse(),cost:l[M],mode:r}}d[M]=1;const S=M%t,p=Math.floor(M/t);for(const[u,R]of[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,1],[-1,1],[1,-1]]){let b=S+u,w=p+R,P=w*t+b;if(b<0||w<0||b>=t||w>=e||d[P]||!s(P)||u&&R&&(!s(p*t+b)||!s(w*t+S)))continue;const T=Math.hypot(u,R),U=Math.abs(n[P].z-n[M].z)/(T*(n.cellSize||1));if(U>(n.gradeLimit??.5))continue;const Z=r==="fast"?0:(r==="safe"?22:r==="reserve"?10:1)*U**2+(r==="safe"?3:r==="reserve"?1.5:0)*(n[P].rough||0)+(r==="reserve"?2:1)*(n[P].exposure||0),E=l[M]+T*(r==="fast"?Math.sqrt(1+U*U):1)*(1+Z);E<l[P]&&(l[P]=E,h[P]=M,f.push({i:P,f:E+x(b,w)}))}}return null}function vp(n,t=2,e=1.2,i=null){if(!n)return null;let a=0,r=0,s=0,o=0,c=0,l=0,h=0;for(let d=1;d<n.path.length;d++){const f=n.path[d-1],x=n.path[d],M=Math.hypot(f[0]-x[0],f[1]-x[1])*t,S=i?i[x[1]*i.w+x[0]].z-i[f[1]*i.w+f[0]].z:0,p=Math.abs(S)/M;a+=Math.hypot(M,S),r+=Math.max(0,S),s+=Math.max(0,-S),o=Math.max(o,p),l+=i?.[x[1]*i.w+x[0]]?.rough||0,(i?.[x[1]*i.w+x[0]]?.exposure||0)>0&&(h+=M),c+=M/e*(1+Math.max(0,S/M)*2.4+p*.65)}return{meters:a,hazardMeters:h,meanSpeedMps:c?a/c:0,minutes:c/60,seconds:c,ascent:r,descent:s,maxSlopeDeg:Math.atan(o)*180/Math.PI,roughness:l/Math.max(1,n.path.length)}}function Sp(n,t,{evaMinutes:e=90,reserveMinutes:i=15,oxygenMinutes:a=120,powerWh:r=180,suitWatts:s=85,payloadKg:o=10,taskMinutes:c=8,radiationBudget:l=.15,radiationRate:h=.03}={}){if(!n||!t)return{feasible:!1,reasons:["No connected outbound and return path within coverage / slope limits."]};if(![e,i,a,r,s,o,c,l,h,n.minutes,t.minutes].every(u=>Number.isFinite(u)&&u>=0)||e<=0||a<=0||r<=0)return{feasible:!1,reasons:["Invalid or missing numeric planning budget."]};let d=n.minutes+t.minutes,f=d+c,x=f*(1+o*.012),M=f/60*s*(1+o*.009),S=[],p=(f+i)/60*h;return p>l&&S.push("Modeled radiation budget exceeded."),f+i>e&&S.push("EVA time and reserve exceeded."),x+i>a&&S.push("Oxygen reserve insufficient."),M+i/60*s>r&&S.push("Battery reserve insufficient."),{feasible:!S.length,reasons:S,radiationDose:p,radiationBudget:l,travelMinutes:d,totalMinutes:f,oxygenMinutes:x,energyWh:M,returnReserveMinutes:i,remainingMinutes:Math.min(e-f,a-x)}}const es=(n,t,e)=>[Math.round((n-e.originX)/e.cellSize),Math.round((t-e.originZ)/e.cellSize)],Ep=(n,t,e)=>({x:e.originX+n*e.cellSize,z:e.originZ+t*e.cellSize}),Ei=yt.clamp,_t=n=>{const t=Math.sin(n*12.9898+78.233)*43758.5453;return t-Math.floor(t)};function mi(n,t,e){const i=1.5*Math.sin(n*.012)*Math.cos(t*.016)+.48*Math.sin(n*.07+t*.03);if(e===2)return 6*Math.sin(n*.048+Math.sin(t*.014)*1.8)+2.1*Math.sin(n*.091+t*.025);if(e===3)return i+4.5*Math.abs(Math.sin(n*.028+t*.014))**6+Math.sin(n*.13)*Math.sin(t*.11);if(e===4)return i+(t>-108&&t<-94&&n>-4&&n<76?-7:0);if(e===5){let a=Math.max(0,Math.abs(n+20-15*Math.sin(t*.017))-39);return i+35*(1-Math.exp(-a*a/700))+19*Math.exp(-(((n+20)/8)**4)-((t+81)/20)**4)}if(e===6){let a=Math.max(0,Math.abs(n+27+9*Math.sin(t*.02))-40);return i+54*(1-Math.exp(-a*a/450))}if(e===7)return .9*Math.sin(n*.022)+1.1*Math.cos(t*.016)+.1*Math.sin(t*.34);if(e===8)return i+2*Math.sin(n*.025+t*.02);if(e===9){let a=Math.max(0,Math.abs(n+18)-68);return i+(n<-80?5*Math.sin(n*.048+t*.012):0)+28*(1-Math.exp(-a*a/2200))}return i}const vn=(n,t=0,e=.8)=>new jt({color:n,metalness:t,roughness:e});function Tt(n,t,e,i=[0,0,0]){let a=new mt(n,t);return a.position.set(...i),a.castShadow=!0,a.receiveShadow=!0,e.add(a),a}const Pt=(n,t,e,i,a=.06)=>Tt(new ba(...e,2,a),i,n,t);function Sn(n,t,e,i,a){t=new he(...t),e=new he(...e);let r=e.clone().sub(t),s=Tt(new Hn(i,i,r.length(),12),a,n,t.clone().add(e).multiplyScalar(.5).toArray());return s.quaternion.setFromUnitVectors(new he(0,1,0),r.normalize()),s}function ta(n){const e=[],i=[],a=[];for(let s=0;s<=72;s++)for(let o=0;o<=72;o++){let c=o/72*2-1,l=s/72*2-1,h=.035*Math.sin(c*7+n)+.025*Math.sin(l*9-n)+.015*Math.sin(c*19+l*13),d=(Math.abs(c+h)**6+Math.abs(l+h*.4)**6)**(1/6),f=Ei((1-d)/.26,0,1),x=f*f*(3-2*f),M=x*(.83+.1*Math.sin(c*3+l*2+n)+.035*Math.cos(c*13-l*9));if(e.push(c,M,l),i.push(c*3+n,M*4+l*.4),o<72&&s<72){let S=s*73+o;a.push(S,S+72+1,S+1,S+1,S+72+1,S+72+2)}}let r=new Vt;return r.setAttribute("position",new Ri(e,3)),r.setAttribute("uv",new Ri(i,2)),r.setIndex(a),r.computeVertexNormals(),r}class Mp{constructor(t,e,i){Object.assign(this,{renderer:t,scene:e,camera:i,ground:new ht,props:new ht,actors:new ht,effects:new ht,cache:new Map,templates:{},dynamic:[],colliders:[],taskObjects:new Map,stage:-1,base:0,region:null,surfaceMeshes:[],ray:new Us,bridge:!1,dust:0,routePoints:[],sharedGeometries:new Set,sharedMaterials:new Set}),e.add(this.ground,this.props,this.actors,this.effects),this.mats={metal:vn("#a19b8d",.7,.4),dark:vn("#20272a",.5,.56),orange:vn("#af602f",.5,.48),white:vn("#bdbdb1",.3,.56),glass:new zt({color:"#466571",metalness:.45,roughness:.19,clearcoat:1}),light:new cn({color:"#a9eced"}),cable:vn("#272e2f",.65,.45)}}async init(t=()=>{}){this.manifest=await fetch("./terrain/manifest.json").then(M=>{if(!M.ok)throw Error("NASA terrain manifest missing");return M.json()});let e=new Oh,i=0;await Promise.all(Object.entries({suit:"eva_rig",atlas:"atlas6",drone:"skyscout",alpha:"alpha",habitat:"habitat",scanRock:"scanned_boulder",scanPebble:"scanned_pebbles",...Object.fromEntries(Qn.map(([M])=>["crew_"+M,"crew_"+M.toLowerCase()]))}).map(async([M,S])=>{let p=await e.loadAsync("./assets/"+S+".glb");this.templates[M]=p,p.scene.traverse(u=>{u.isMesh&&(this.sharedGeometries.add(u.geometry),this.sharedMaterials.add(u.material),u.castShadow=u.receiveShadow=!0,u.material.envMapIntensity=.5,u.geometry.attributes.position&&u.geometry.computeBoundingBox())}),t(++i/14,"Loading "+M)}));let a=new _i,r=async(M,S=!1)=>{let p=await a.loadAsync("./assets/"+M+".webp");return S&&(p.colorSpace=Zt),p.wrapS=p.wrapT=ai,p.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),p},[s,o,c,l,h]=await Promise.all([r("aerial_rocks_02_diff",!0),r("aerial_rocks_02_nor_gl"),r("aerial_rocks_02_rough"),r("rock_face_03_diff",!0),r("rock_face_03_nor_gl")]);this.tex={diff:s,norm:o,rough:c,rockdiff:l,rocknorm:h},this.rockMat=new jt({map:l,normalMap:h,normalScale:new gt(.6,.6),roughness:1,color:11375226});let d=M=>{let S;this.templates[M].scene.updateMatrixWorld(!0),this.templates[M].scene.traverse(w=>{w.isMesh&&!S&&(S=w)});let p=S.geometry.clone().applyMatrix4(S.matrixWorld);p.computeBoundingBox();let u=p.boundingBox,R=u.getSize(new he),b=u.getCenter(new he);return p.translate(-b.x,-u.min.y,-b.z),p.scale(2/R.x,1.35/R.y,2/R.z),p.computeVertexNormals(),{geometry:p,material:S.material.clone()}},f=d("scanRock"),x=d("scanPebble");this.rockMat=f.material,this.rockMat.roughness=1,this.rockMat.metalness=0,this.rockMat.normalScale?.set(.5,.5),this.rockMat.color.set("#b99a7d"),this.rockGeo=[x.geometry,x.geometry,x.geometry],this.cliffGeo=[ta(19),ta(31),ta(43)],await this.loadRegion("JEZERO_CENTER"),t(1,"Surface ready")}async loadRegion(t){if(!this.cache.has(t)){let e=this.manifest.regions.find(a=>a.id===t);if(!e)throw Error("Unknown region");let i=await Promise.all(e.tiles.map(async a=>{let r="./terrain/"+a.path+"/",[s,o,c]=await Promise.all([fetch(r+"height.f32").then(S=>{if(!S.ok)throw Error("Missing DTM "+r);return S.arrayBuffer()}),fetch(r+"height_valid.u8").then(S=>{if(!S.ok)throw Error("Missing terrain validity "+r);return S.arrayBuffer()}),new _i().loadAsync(r+"optical_observed.png")]);c.colorSpace=Zt;let l=new Float32Array(s),h=new Uint8Array(o);if(l.length!==16641||h.length!==16641||l.some((S,p)=>h[p]&&!Number.isFinite(S)))throw Error("Invalid terrain tile "+r);let d=await new _i().loadAsync(r+"optical_valid.png"),f=document.createElement("canvas");f.width=f.height=512;let x=f.getContext("2d",{willReadFrequently:!0});x.drawImage(d.image,0,0,512,512);let M=x.getImageData(0,0,512,512).data;for(let S=0;S<129;S++)for(let p=0;p<129;p++)M[(Math.min(511,S*4)*512+Math.min(511,p*4))*4]||(h[S*129+p]=0);return d.dispose(),{...a,heights:l,valid:h,texture:c,image:c.image}}));this.cache.set(t,{...e,tiles:i})}this.region=this.cache.get(t),this.regionId=t,this.base=this.region.tiles.find(e=>e.tx===2&&e.ty===2).heights[0]}measured(t,e){if(!this.region||t<-512||t>512||e<-512||e>512)return{height:0,valid:!1};let i=Math.min(3,Math.floor((t+512)/256)),a=Math.min(3,Math.floor((e+512)/256)),r=this.region.tiles.find(M=>M.tx===i&&M.ty===a),s=(t+512-i*256)/2,o=(e+512-a*256)/2,c=Math.min(127,Math.floor(s)),l=Math.min(127,Math.floor(o)),h=s-c,d=o-l,f=l*129+c,x=r.heights;return{height:(x[f]*(1-h)+x[f+1]*h)*(1-d)+(x[f+129]*(1-h)+x[f+130]*h)*d-this.base,valid:!!(r.valid[f]&&r.valid[f+1]&&r.valid[f+129]&&r.valid[f+130])}}height(t,e){if(this.stage===4&&this.bridge&&Math.abs(t-36)<2.5&&e<-91&&e>-112)return yt.lerp(mi(t,-92,4),mi(t,-110,4),(-92-e)/18);if(this.stage>=2){let i=Math.hypot(t,e-8),a=mi(0,8,this.stage),r=yt.smoothstep(i,30,52);return yt.lerp(a,mi(t,e,this.stage),r)}return this.measured(t,e).height}valid(t,e){return Math.abs(t)<490&&Math.abs(e)<490&&(this.stage>=2||this.measured(t,e).valid)}slope(t,e){let i=this.height(t,e);return Math.max(Math.abs(this.height(t+1,e)-i),Math.abs(this.height(t,e+1)-i))}clear(t){for(let e of[...t.children])t.remove(e),e.traverse(i=>{i.geometry&&!this.sharedGeometries.has(i.geometry)&&!this.rockGeo?.includes(i.geometry)&&!this.cliffGeo?.includes(i.geometry)&&i.geometry.dispose(),i.material&&!this.sharedMaterials.has(i.material)&&i.material!==this.rockMat&&!Object.values(this.mats).includes(i.material)&&(Array.isArray(i.material)?i.material.forEach(a=>a.dispose()):i.material.dispose())})}async setStage(t,e="Sadia"){this.stage=t,this.opsRiskZone=null,this.bridge=!1,this.dust=0;for(let i of[this.ground,this.props,this.actors,this.effects])this.clear(i);if(this.dynamic=[],this.colliders=[],this.taskObjects.clear(),this.surfaceMeshes=[],this.routePoints=[],this.cableLine=null,this.routeModel=null,t<2&&await this.loadRegion(t===1?"JEZERO_NORTHWEST":"JEZERO_CENTER"),this.buildGround(),this.buildSky(t<0?"sunset":Dt[t].sky),this.scatter(),this.buildCliffs(),this.baseModel=this.createBase(),this.atlas=this.makeActor("atlas"),this.atlas.position.set(-7,this.height(-7,-6),-6),this.drone=this.makeActor("drone"),this.drone.position.set(9,this.height(9,-9)+(t<0?10:.1),-9),this.alpha=this.makeActor("alpha"),this.alpha.position.set(6,this.height(6,-5),-5),this.alpha.visible=t>=0,t>=0?(this.player=this.makeSuit(e),this.player.position.set(3,this.height(3,-4),-4),this.player.rotation.y=Math.PI,this.buildTasks(t)):this.player=null,this.makeDust(),this.makeGrid(),this.hazardModel=null,this.payload=null,t===2||t===6){this.payload=t===6?this.makeActor("atlas"):this.makeEquipment("sled");let i=t===6?[-45,-110]:[-68,-130];this.payload.position.set(i[0],this.height(...i),i[1]),this.payload.userData.payload=!0}return this}buildGround(){if(this.stage<2)for(let i of this.region.tiles){let a=129,r=[],s=[],o=[];for(let f=0;f<a;f++)for(let x=0;x<a;x++)if(r.push(i.tx*256-512+x*2,i.heights[f*a+x]-this.base,i.ty*256-512+f*2),s.push(x/128,1-f/128),x<128&&f<128){let M=f*a+x;i.valid[M]&&i.valid[M+a]&&i.valid[M+1]&&o.push(M,M+a,M+1),i.valid[M+1]&&i.valid[M+a]&&i.valid[M+a+1]&&o.push(M+1,M+a,M+a+1)}let c=new Vt;c.setAttribute("position",new Ri(r,3)),c.setAttribute("uv",new Ri(s,2)),c.setIndex(o),c.computeVertexNormals();let l=this.tileNormal||(this.tileNormal=this.tex.norm.clone());l.repeat.set(190,190),l.needsUpdate=!0;let h=new jt({map:i.texture,color:12089163,normalMap:l,normalScale:new gt(.42,.42),roughness:1});h.onBeforeCompile=f=>{f.uniforms.detailTex={value:this.tex.diff},f.vertexShader=`varying vec3 vDetail;
`+f.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vDetail=(modelMatrix*vec4(transformed,1.)).xyz;`),f.fragmentShader=`uniform sampler2D detailTex;varying vec3 vDetail;
`+f.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb*=mix(vec3(.7),texture2D(detailTex,vDetail.xz*.65).rgb*2.6,.55);`)};let d=Tt(c,h,this.ground);d.castShadow=!1,this.surfaceMeshes.push(d)}else{let i=new Zn(1100,1100,280,280);i.rotateX(-Math.PI/2);let a=i.attributes.position;for(let d=0;d<a.count;d++)a.setY(d,this.height(a.getX(d),a.getZ(d)));i.computeVertexNormals();let r=this.tex.diff.clone(),s=this.tex.norm.clone(),o=this.tex.rough.clone();for(let d of[r,s,o])d.repeat.set(500,500),d.needsUpdate=!0;let c=["#a98267","#a98267","#c8a17d","#82705d","#64584b","#ad8a70","#ac8164","#dfd8c8","#b09277","#a88c73"],l=new jt({map:r,normalMap:s,normalScale:new gt(.6,.6),roughnessMap:null,color:c[this.stage],roughness:1});this.stage===7&&(l.onBeforeCompile=d=>{d.vertexShader=`varying vec3 vFrost;
`+d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vFrost=position;`),d.fragmentShader=`varying vec3 vFrost;
`+d.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
float frost=smoothstep(-.2,.25,sin(vFrost.x*.021)+cos(vFrost.z*.026));diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.65,.63,.59),frost*.92);`)});let h=Tt(i,l,this.ground);h.castShadow=!1,this.surfaceMeshes.push(h)}let t=new Zn(1e4,1e4,80,80);t.rotateX(-Math.PI/2);let e=t.attributes.position;for(let i=0;i<e.count;i++)e.setY(i,-22+16*Math.sin(e.getX(i)*.0013)*Math.sin(e.getZ(i)*.0017));t.computeVertexNormals(),Tt(t,vn("#86593b",0,1),this.ground).castShadow=!1}buildSky(t){this.sky&&(this.scene.remove(this.sky),this.sky.geometry.dispose(),this.sky.material.dispose());let e=t==="polar",i=t==="dust",a=t==="sunset";this.sunDir=new he(.75,e?.13:a?.32:.6,-1).normalize();let r=new rn({side:Nt,depthWrite:!1,uniforms:{sunDir:{value:this.sunDir},haze:{value:i?.8:.15},upper:{value:new ze(e?"#787273":a?"#494042":"#89736a")},horizon:{value:new ze(e?"#b7aca2":i?"#b68c6c":"#c59a76")}},vertexShader:"varying vec3 dir;void main(){dir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 dir;uniform vec3 sunDir,upper,horizon;uniform float haze;void main(){vec3 d=normalize(dir);float mu=dot(d,sunDir);vec3 col=mix(horizon,upper,pow(max(0.,d.y),.48));col+=vec3(.13,.20,.25)*pow(max(0.,mu),24.)*(1.-haze*.7);col+=vec3(3.5,2.8,1.9)*smoothstep(.999974,.999985,mu)*(1.-haze*.8);gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`});this.sky=new mt(new Er(4500,36,24),r),this.sky.renderOrder=-10,this.scene.add(this.sky),this.scene.fog=new Dl(e?"#a6a09a":i?"#a17d62":"#bd9474",i?.003:75e-5),this.sun||(this.sun=new Ma("#ffe1b2",3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-55,right:55,top:55,bottom:-55,near:1,far:500}),this.sun.shadow.normalBias=.035,this.sun.shadow.bias=-12e-5,this.scene.add(this.sun,this.sun.target),this.hemi=new Ns("#eed0b1","#45352c",.74),this.scene.add(this.hemi)),this.sun.intensity=i?1.1:e?2.2:3.2,this.hemi.intensity=i?1.1:.74,this.renderer.toneMappingExposure=1.1}scatter(){for(let t=0;t<3;t++){let e=this.stage===7?200:400,i=new Ea(this.rockGeo[t],this.rockMat,e),a=new Li,r=new ze;for(let s=0;s<e;s++){let o=s+t*5e3+this.stage*17,c=4+Math.sqrt(_t(o+900))*310,l=_t(o+1100)*6.28,h=Math.cos(l)*c,d=Math.sin(l)*c,f=.07+_t(o+1200)**4*1.2;this.stage===2&&(f*=.45),this.stage===3&&(f*=1.5),a.position.set(h,this.height(h,d)-f*.08,d),a.rotation.set(_t(o)*.2,_t(o+51)*6.28,_t(o+40)*.2),a.scale.set(f*(1+_t(o+44)),f*(.6+_t(o+17)),f),a.updateMatrix(),i.setMatrixAt(s,a.matrix),r.setHSL(.06,.15+_t(o+87)*.08,.5+_t(o+23)*.18),i.setColorAt(s,r)}i.receiveShadow=!0,this.props.add(i)}}buildCliffs(){let t=this.stage===5?22:this.stage===6?25:this.stage===3?16:12;for(let e=0;e<t;e++){let i=_t(e+120),a=_t(e+190),r,s,o,c,l;if(this.stage===5||this.stage===6)r=(e%2?1:-1)*(80+i*50)-20,s=70-Math.floor(e/2)*40,o=20+i*15,c=28,l=(this.stage===6?55:35)+a*35;else if(this.stage===1)r=-160+e*28,s=-230+Math.sin(e)*15,o=23,c=18,l=20+a*22;else if(this.stage===3)r=(e%2?1:-1)*(92+i*50),s=70-Math.floor(e/2)*45,o=20,c=20,l=14+a*20;else{let f=e/t*6.28;r=Math.cos(f)*730,s=Math.sin(f)*730,o=130+i*80,c=90+a*50,l=this.stage===7?14+a*15:this.stage===2?24+a*25:this.stage===8?35+a*30:80+a*85}let h=new jt({map:this.tex.rockdiff,normalMap:this.tex.rocknorm,normalScale:new gt(.2,.2),roughness:1,color:12297098});h.color.set(this.stage===7?"#d7d1c3":this.stage===4?"#6e5b4e":"#bc997e");let d=Tt(this.cliffGeo[e%3],h,this.props,[r,this.height(r,s)-(Math.abs(r)>490||Math.abs(s)>490?32:3),s]);d.scale.set(o*.55,l/1.35,c*.65),d.rotation.y=_t(e+460)*6.28,d.castShadow=this.stage===5||this.stage===6,this.colliders.push({x:r,z:s,r:Math.min(o,c)*.72,height:l})}}createBase(){let t=new ht;this.props.add(t),t.position.set(this.stage<0?30:0,this.stage<0?this.height(30,-75):this.height(0,8),this.stage<0?-75:8);let e=ea(this.templates.habitat.scene),i=new Un().setFromObject(e),a=i.getSize(new he);e.scale.setScalar(7/Math.max(a.x,a.y,a.z));let r=new Un().setFromObject(e);e.position.set(-17,-r.min.y+this.height(t.position.x-17,t.position.z+8)-t.position.y,8),t.add(e);let s=new ht;t.add(s),s.position.set(22,this.height(t.position.x+22,t.position.z+20)-t.position.y,20),Tt(new Er(7,32,12,0,Math.PI*2,0,Math.PI/2),new zt({color:"#927859",metalness:.35,roughness:.25,transparent:!0,opacity:.86,clearcoat:1}),s,[0,.5,0]);let o=new Ps(new Il(new Ul(7.02,2),13),new Pi({color:"#cdb28b"}));o.position.y=.4,s.add(o),Pt(t,[0,1.3,0],[5,2.6,5],this.mats.white,.25),Pt(t,[0,1.35,-2.56],[1.5,2.15,.2],this.mats.dark,.15),Pt(t,[0,1.35,-2.69],[1.1,1.75,.05],this.mats.orange,.12),Sn(t,[-8,0,5],[-8,10,5],.07,this.mats.metal),Tt(new vi(.8,.05,8,40),this.mats.metal,t,[-8,9,5]);for(let c=0;c<6;c++){let l=new ht;t.add(l),l.position.set(-12+c*5,.7+this.height(t.position.x-12+c*5,t.position.z+22)-t.position.y,22),l.rotation.x=-.18,Pt(l,[0,0,0],[4,.09,2.5],this.mats.dark,.02);for(let h=0;h<8;h++)for(let d=0;d<4;d++)Pt(l,[-1.75+h*.5,.065,-.95+d*.62],[.46,.025,.56],this.mats.glass,.01);Sn(l,[0,-.6,0],[0,0,0],.09,this.mats.metal)}return t}makeActor(t){let e=ea(this.templates[t].scene),i=new ht;i.add(e),this.actors.add(i);let a=new Un().setFromObject(e),r=a.getSize(new he),s=t==="atlas"?2.85/r.x:t==="drone"?1.2/Math.max(r.x,r.z):2.3/r.y;e.scale.multiplyScalar(s);let o=new Un().setFromObject(e);return e.position.y-=o.min.y,i.userData={type:t,inner:e,scale:s,wheels:[],rotors:[],speed:0,altitude:0,roll:0},e.traverse(c=>{c.name.startsWith("Wheel_")&&(c.userData.restPosition=c.position.clone(),i.userData.wheels.push(c)),c.name.startsWith("Rotor_")&&i.userData.rotors.push(c),c.name==="MastYaw"&&(i.userData.mast=c),c.name.startsWith("AlphaLeg_")&&(i.userData.legs??=[]).push(c)}),i}makeSuit(t){let e=this.templates["crew_"+t]||this.templates.suit,i=ea(e.scene),a=new ht;a.add(i),this.actors.add(a);let r=new Un().setFromObject(i),s=r.getSize(new he),o=({Leon:1.94,Ethan:1.92,Orion:1.87,Sadia:1.76,Amelia:1.82,Noor:1.79}[t]||1.9)/s.y;i.scale.setScalar(o),i.position.y=-r.min.y*o;let c=Qn.find(d=>d[0]===t)||Qn[3];i.traverse(d=>{if(d.isMesh){if(d.frustumCulled=!1,d.material=d.material.clone(),/Visor/i.test(d.material.name)){d.material.transparent=!0,d.material.opacity=.055,d.material.metalness=0,d.material.roughness=.18,d.material.envMapIntensity=.25;return}if(/Skin|Hair/i.test(d.material.name)){d.material.roughness=.68,d.material.metalness=0,d.material.envMapIntensity=.3;return}d.material.roughness=.84,d.material.metalness=.08,d.material.onBeforeCompile=f=>{f.uniforms.suitAccent={value:new ze(c[2])},f.fragmentShader=`uniform vec3 suitAccent;
`+f.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
float accent=step(diffuseColor.r*1.22,diffuseColor.g)*step(diffuseColor.b*.9,diffuseColor.g)*smoothstep(.10,.3,diffuseColor.g-diffuseColor.r);diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*suitAccent*2.0,.45);diffuseColor.rgb=mix(diffuseColor.rgb,suitAccent,accent*.78);`)},d.material.customProgramCacheKey=()=>t}});let l=new Nl(i),h={};for(let d of e.animations.length?e.animations:this.templates.suit.animations)h[d.name]=l.clipAction(d);return a.userData={type:"suit",name:t,mixer:l,actions:h,animation:"",root:i},this.play(a,"Idle"),a}play(t,e,i=1){let a=t?.userData;a?.actions?.[e]&&(a.animation!==e?(a.actions[a.animation]?.fadeOut(.18),a.actions[e].reset().setEffectiveTimeScale(i).setEffectiveWeight(1).fadeIn(.18).play(),a.animation=e):a.actions[e].timeScale=i)}makeEquipment(t){let e=new ht,i=this.mats;if(this.props.add(e),e.userData.type=t,t==="rock")Tt(this.rockGeo[1],this.rockMat,e).scale.set(1.7,1.35,1.2);else if(["tripod","probe","relay","beacon"].includes(t)){for(let a=0;a<3;a++){let r=a*2.094;Sn(e,[0,.9,0],[Math.sin(r)*.6,0,Math.cos(r)*.6],.035,i.metal)}Sn(e,[0,.3,0],[0,t==="relay"?3.5:1.6,0],.05,i.metal),Pt(e,[0,1.1,0],[.5,.34,.27],i.orange,.05),Pt(e,[0,1.15,-.17],[.28,.12,.05],i.light,.015),t==="relay"&&Tt(new vi(.32,.028,8,30),i.metal,e,[0,3.2,0])}else if(t==="sled"){Pt(e,[0,.34,0],[1.6,.48,2.2],i.white,.12);for(let a of[-.8,.8])Sn(e,[a,.12,-1.3],[a,.12,1.3],.075,i.metal);Pt(e,[0,.8,0],[1.1,.45,1.2],i.orange,.08)}else if(t==="flag"){Sn(e,[0,0,0],[0,3.2,0],.025,i.metal);let a=document.createElement("canvas");a.width=256,a.height=160;let r=a.getContext("2d");r.fillStyle="#006a4e",r.fillRect(0,0,256,160),r.fillStyle="#f42a41",r.beginPath(),r.arc(112,80,45,0,7),r.fill();let s=new Mr(a);s.colorSpace=Zt,e.userData.cloth=Tt(new Zn(1.5,.94,18,8),new jt({map:s,side:Xt,roughness:1}),e,[.77,2.65,0]),this.dynamic.push(e)}else t==="anchor"?(Tt(new Hn(.2,.24,.25,18),i.orange,e,[0,.12,0]),Tt(new vi(.18,.04,8,24),i.metal,e,[0,.35,0])):t==="core"?(Tt(new Hn(.07,.07,.55,18),vn("#9b8067"),e,[0,.3,0]),Pt(e,[0,.1,0],[.32,.12,.7],i.dark,.03)):(Pt(e,[0,.24,0],[.8,.44,.5],i.white,.09),Pt(e,[0,.46,0],[.3,.05,.15],i.orange,.02));return e}buildTasks(t){for(let e of Dt[t].tasks){let i=`${e.x},${e.z}`;if(this.taskObjects.has(i)&&["package","tag","repair","powercell"].includes(e.type)){this.taskObjects.set(e.id,this.taskObjects.get(i));continue}let a=["scan","scout","drill","frost"].includes(e.type)?"rock":["anchor","flag","tripod","probe","relay","beacon"].includes(e.type)?e.type:e.type==="pickup"?"core":"case",r=this.makeEquipment(a);r.position.set(e.x,this.height(e.x,e.z),e.z),r.userData.taskId=e.id,["flag","tripod","probe","relay","beacon","eva","priority","payload","dock","bearing","panorama","drive","traction","tow","convoy","replan","heater","cross","link"].includes(e.type)&&(r.visible=!1),this.taskObjects.set(e.id,r),this.taskObjects.set(i,r)}}deploy(t,e="BD"){let i=this.taskObjects.get(t.id);if(i&&(i.visible=!0,i.userData.deployed=!0,t.type==="flag"&&e!=="BD")){let a=i.userData.cloth.material.map.image,r=a.getContext("2d");if(r.fillStyle=e==="JP"||e==="CA"?"white":e==="US"?"#b22234":"#223f73",r.fillRect(0,0,256,160),e==="JP")r.fillStyle="#bc002d",r.beginPath(),r.arc(128,80,44,0,7),r.fill();else if(e==="CA")r.fillStyle="#d32b32",r.fillRect(0,0,53,160),r.fillRect(203,0,53,160),r.font="80px Arial",r.fillText("✦",90,106);else if(e==="US"){r.fillStyle="white";for(let s=0;s<7;s++)r.fillRect(0,s*24,256,12);r.fillStyle="#223f73",r.fillRect(0,0,109,85),r.fillStyle="white",r.font="28px Arial",r.fillText("✦ ✦",10,34),r.fillText("✦ ✦",10,68)}else r.fillStyle="white",r.font="40px Arial",r.fillText(e,98,95);i.userData.cloth.material.map.needsUpdate=!0}return i}showBridge(){if(this.bridge)return;this.bridge=!0;let t=new ht;this.props.add(t);for(let e=0;e<27;e++){let i=-91-e*.8;Pt(t,[36,this.height(36,i)+.03,i],[4.1,.12,.72],this.mats.metal,.025)}for(let e of[33.7,38.3])Sn(t,[e,this.height(e,-92)+.8,-91],[e,this.height(e,-110)+.8,-112],.028,this.mats.cable);this.makeGrid()}makeDust(){let t=600,e=new Float32Array(t*3);for(let o=0;o<t;o++)e[o*3]=(_t(o+900)-.5)*240,e[o*3+1]=_t(o+100)*22,e[o*3+2]=(_t(o+800)-.5)*240;let i=new Vt;i.setAttribute("position",new hn(e,3));let a=document.createElement("canvas");a.width=a.height=64;let r=a.getContext("2d"),s=r.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,"rgba(205,169,125,.7)"),s.addColorStop(1,"rgba(205,169,125,0)"),r.fillStyle=s,r.fillRect(0,0,64,64),this.dustPoints=new Ds(i,new Ls({size:1.8,map:new Mr(a),transparent:!0,opacity:.1,depthWrite:!1})),this.effects.add(this.dustPoints)}makeGrid(t=0){if(t>0&&!this.hazardModel){this.hazardModel=new ht,this.props.add(this.hazardModel);let o=this.stage===6?-31:16,c=this.stage===6?-69:-70;for(let l=0;l<9;l++){let h=o+(_t(l+130)-.5)*15,d=c+(_t(l+180)-.5)*15,f=1.4+_t(l+500)*2.8,x=Tt(this.rockGeo[l%3],this.rockMat,this.hazardModel,[h,this.height(h,d)-.2,d]);x.scale.set(f*1.5,f,f),x.rotation.y=_t(l+22)*6.28,this.colliders.push({x:h,z:d,r:f*.8,height:f})}}let e=257,i=4,a=-512,r=-512,s=[];for(let o=0;o<e;o++)for(let c=0;c<e;c++){let l=a+c*i,h=r+o*i,d=this.colliders.some(f=>Math.hypot(l-f.x,h-f.z)<f.r)||t>0&&Math.hypot(l-(this.stage===6?-31:16),h-(this.stage===6?-69:-70))<13;s.push({z:this.height(l,h),valid:this.valid(l,h),blocked:d,exposure:this.opsRiskZone&&Math.hypot(l-this.opsRiskZone.x,h-this.opsRiskZone.z)<this.opsRiskZone.r?.8:0,rough:this.stage===2?Math.sin(l*.048+h*.02)>.4?.5:.1:this.slope(l,h)*.3})}return Object.assign(s,{w:e,h:e,cellSize:i,originX:a,originZ:r,gradeLimit:.5}),this.grid=s,this.gridVersion=t,s}path(t,e,i="safe",a="suit"){let r=this.grid;r.gradeLimit=a==="atlas"?.42:.5;let s=_p(r,r.w,r.h,es(t.x,t.z,r),es(e.x,e.z,r),i);if(!s)return null;let o=s.path.map(([c,l])=>{let h=Ep(c,l,r);return new he(h.x,this.height(h.x,h.z)+.13,h.z)});return{...s,points:o,stats:vp(s,r.cellSize,a==="atlas"?5:1.45,r)}}guide(t){if(this.routeModel&&this.effects.remove(this.routeModel),this.routePoints=t||[],!t?.length)return;let e=new ht;this.routeModel=e,this.effects.add(e);let i=new Di(new Vt().setFromPoints(t),new Ol({color:"#7be0df",dashSize:1.2,gapSize:1.5,transparent:!0,opacity:.8,depthWrite:!1}));i.computeLineDistances(),e.add(i);for(let a=3;a<t.length-1;a+=4){let r=t[a+1].clone().sub(t[a]),s=Tt(new Fl(.23,.65,3),new cn({color:"#b3f9ee"}),e,t[a].clone().add(new he(0,.13,0)).toArray());s.rotation.x=Math.PI/2,s.rotation.z=Math.atan2(r.x,r.z)}}blocked(t,e,i=.35){return!this.valid(t,e)||this.colliders.some(a=>Math.hypot(t-a.x,e-a.z)<a.r+i)}sight(t,e){let i=e.clone().sub(t);return this.ray.set(t,i.clone().normalize()),this.ray.far=i.length()-.18,!this.ray.intersectObjects(this.surfaceMeshes,!1).length}animate(t,e,i=!1,a=null){let r=a||new he;this.sky.position.copy(this.camera.position),this.sun.position.copy(r).addScaledVector(this.sunDir,160),this.sun.target.position.copy(r),this.sun.target.updateMatrixWorld(),this.player?.userData.mixer.update(t);for(let s of[this.atlas,this.drone,this.alpha]){if(!s)continue;let o=s.userData;if(o.type==="atlas"){o.roll-=t*(o.speed||(i?.18:0))/.265,s.updateMatrixWorld(!0);for(let h of o.wheels){let d=h.userData.restPosition;if(d){h.position.copy(d),s.updateMatrixWorld(!0);let f=h.getWorldPosition(new he),x=Ei(this.height(f.x,f.z)+.267*o.scale-f.y,-.18,.18);h.position.y+=x/o.scale}h.rotation.x=o.roll,h.rotation.y=h.name.endsWith("0")||h.name.endsWith("2")?(o.steer||0)*.28:0}o.mast&&(o.mast.rotation.y=Math.sin(e*.23)*.38);let c=s.position.x,l=s.position.z;s.rotation.z=yt.lerp(s.rotation.z,Ei(Math.atan2(this.height(c+1,l)-this.height(c-1,l),2),-.3,.3),.08),s.rotation.x=yt.lerp(s.rotation.x,Ei(Math.atan2(this.height(c,l-1)-this.height(c,l+1),2),-.3,.3),.08)}o.type==="drone"&&(o.rotors.forEach((c,l)=>c.rotation.y+=t*(s.position.y>this.height(s.position.x,s.position.z)+.5?55:0)*(l%2?-1:1)),i&&(s.position.set(8+Math.sin(e*.1)*5,this.height(8,-24)+7+Math.sin(e*.8)*.2,-24),s.rotation.z=.05*Math.sin(e*.1))),o.type==="alpha"&&o.legs&&o.legs.forEach((c,l)=>c.rotation.x=Math.sin(e*5+l*Math.PI)*(Math.abs(o.speed)>.1?.2:0))}for(let s of this.dynamic){let o=s.userData.cloth.geometry.attributes.position;for(let c=0;c<o.count;c++)o.setZ(c,Math.sin(o.getX(c)*5+e*1.1)*.04*(o.getX(c)+.75));o.needsUpdate=!0,s.userData.cloth.geometry.computeVertexNormals()}this.dustPoints&&(this.dustPoints.position.set(r.x+e*(.3+this.dust*5)%60-30,r.y,r.z),this.dustPoints.material.opacity=.04+this.dust*.28,this.dustPoints.material.size=1+this.dust*2.4),this.scene.fog&&(this.scene.fog.density=(this.stage===8?.002:75e-5)+this.dust*.014)}}const ts=(n,t,e)=>Math.max(t,Math.min(e,n));class bp{constructor(){this.ctx=null,this.enabled=!1,this.master=.3,this.mode="helmet",this.storm=0,this.vehicle=!1,this.outdoor=!1,this.wind=null,this.windGain=null,this.helmetGain=null,this.engine=null,this.engineGain=null,this.engineOsc=null,this.roverPan=null,this.recording=null,this.recordingGain=null,this.nasaLoaded=!1}async start(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.initSoundscape()),await this.ctx.resume(),this.enabled=!0,this.windGain.gain.setTargetAtTime(.07,this.ctx.currentTime,.2),!this.nasaLoaded&&window.ARES_NASA_AUDIO_PATH&&(this.nasaLoaded=!0,fetch(window.ARES_NASA_AUDIO_PATH).then(t=>t.ok?t.arrayBuffer():null).then(t=>t?this.ctx.decodeAudioData(t):null).then(t=>{if(!t||!this.ctx)return;const e=this.ctx.createBufferSource();e.buffer=t,e.loop=!0;const i=this.ctx.createGain();i.gain.value=.055*this.master,e.connect(i).connect(this.ctx.destination),e.start(),this.recording=e,this.recordingGain=i}).catch(()=>{}))}initSoundscape(){const t=this.ctx,e=t.createBuffer(1,t.sampleRate*5,t.sampleRate),i=e.getChannelData(0);let a=19317;for(let h=0;h<i.length;h++)a=1664525*a+1013904223>>>0,i[h]=(a/2147483648-1)*.78;this.wind=t.createBufferSource(),this.wind.buffer=e,this.wind.loop=!0;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=380;const s=t.createBiquadFilter();s.type="highpass",s.frequency.value=55,this.windGain=t.createGain(),this.windGain.gain.value=0,this.wind.connect(r).connect(s).connect(this.windGain).connect(t.destination),this.wind.start(),this.helmetGain=t.createGain(),this.helmetGain.gain.value=0;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=100;const c=t.createBufferSource();c.buffer=e,c.loop=!0,c.connect(o).connect(this.helmetGain).connect(t.destination),c.start(),this.engineOsc=t.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=42;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=170,this.engineGain=t.createGain(),this.engineGain.gain.value=0,this.roverPan=t.createStereoPanner(),this.engineOsc.connect(l).connect(this.engineGain).connect(this.roverPan).connect(t.destination),this.engineOsc.start()}tone(t=440,e=.1,i="sine",a=.12,r=0){if(!this.enabled||!this.ctx)return;const s=this.ctx.currentTime+r,o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type=i,o.frequency.setValueAtTime(t,s),c.gain.setValueAtTime(Math.max(1e-5,a*this.master),s),c.gain.exponentialRampToValueAtTime(1e-4,s+e),o.connect(c).connect(this.ctx.destination),o.start(s),o.stop(s+e+.025)}clickNoise(t=.1,e=250,i=.2){if(!this.enabled||!this.ctx)return;const a=this.ctx,r=a.createOscillator(),s=a.createGain(),o=a.createBiquadFilter();r.type="triangle",r.frequency.setValueAtTime(e,a.currentTime),r.frequency.exponentialRampToValueAtTime(Math.max(40,e*.37),a.currentTime+t),o.type="lowpass",o.frequency.value=800,s.gain.setValueAtTime(i*this.master,a.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,a.currentTime+t),r.connect(o).connect(s).connect(a.destination),r.start(),r.stop(a.currentTime+t+.01)}cue(t){switch(t){case"step":this.clickNoise(.09,94,.13);break;case"alert":this.tone(510,.2,"sawtooth",.26),this.tone(350,.23,"triangle",.15,.22);break;case"success":this.tone(510,.16,"sine",.16),this.tone(720,.18,"sine",.14,.17),this.tone(960,.3,"sine",.13,.34);break;case"scan":this.tone(720,.23,"sine",.14);break;case"rover":this.clickNoise(.22,115,.18);break;case"drill":this.clickNoise(.42,175,.19);break;case"wind":this.tone(72,.7,"sawtooth",.09);break;case"radio":this.tone(840,.08,"square",.07),this.tone(550,.1,"square",.07,.11);break;case"impact":this.clickNoise(.28,100,.28);break;default:this.tone(390,.09,"sine",.13)}}setMode(t){this.mode=t,this.outdoor=t==="outside",this.enabled&&this.cue("scan")}update({stage:t=0,rover:e=!1,moving:i=!1,storm:a=0,playerX:r=0,roverX:s=0,distance:o=20,oxygen:c=100}={}){if(!this.ctx||!this.enabled)return;const l=this.ctx,h=l.currentTime;this.storm=ts(a,0,1);const d=this.mode!=="outside",f=this.master;this.windGain.gain.setTargetAtTime((.05+this.storm*.22)*(d?.35:1)*f,h,.12),this.helmetGain.gain.setTargetAtTime((d?.095:.01)*f*(c<25?1.6:1),h,.3),this.engineGain.gain.setTargetAtTime((e&&i?.23:.01)*f*Math.max(.07,1-o/220),h,.13),this.engineOsc.frequency.setTargetAtTime(e&&i?57:32,h,.1),this.roverPan.pan.setTargetAtTime(ts((s-r)/35,-1,1),h,.3),this.recordingGain&&this.recordingGain.gain.setTargetAtTime((.016+this.storm*.04)*(d?.45:1)*f,h,.4)}suspend(){this.ctx&&(this.windGain?.gain.setTargetAtTime(0,this.ctx.currentTime,.05),this.engineGain?.gain.setTargetAtTime(0,this.ctx.currentTime,.05),this.ctx.suspend())}resume(){this.enabled&&this.ctx?.resume()}}class Tp extends bp{constructor(t){super(),this.settings=t,this.events=[],this.recorded=null,this.musicAt=0}async start(){await super.start(),this.master=this.settings.master,this.mode=this.settings.mode,this.applyMix()}applyMix(){this.ctx&&(this.master=this.settings.master,this.mode=this.settings.mode)}spatial(t,e,i=.16){if(!this.enabled||!this.ctx)return;let a=this.ctx,r=a.currentTime,s=a.createOscillator(),o=a.createGain(),c=a.createBiquadFilter(),l=a.createPanner(),h={scan:790,step:95,drill:165,repair:230,relay:570,rover:65,drone:150,impact:80}[t]||390;s.type=["drill","rover","drone"].includes(t)?"sawtooth":"triangle",s.frequency.setValueAtTime(h,r),s.frequency.exponentialRampToValueAtTime(h*.55,r+.15),c.type="lowpass",c.frequency.value=this.mode==="outside"?800:440,l.panningModel="HRTF",l.distanceModel="inverse",l.refDistance=1.5,l.maxDistance=90,l.rolloffFactor=1.7,l.positionX.value=e.x,l.positionY.value=e.y,l.positionZ.value=e.z,o.gain.setValueAtTime(i*this.master*(this.settings.vehicle??.5)*(this.mode==="helmet"?.3:1),r),o.gain.exponentialRampToValueAtTime(1e-4,r+.24),s.connect(c).connect(o).connect(l).connect(a.destination),s.start(),s.stop(r+.25),s.onended=()=>{s.disconnect(),c.disconnect(),o.disconnect(),l.disconnect()},this.events.push({type:t,time:r,position:{x:e.x,y:e.y,z:e.z}}),this.events.length>300&&this.events.shift()}listener(t){if(!this.ctx)return;let e=t.position,i=t.matrixWorld.elements,a=this.ctx.listener;for(let[r,s]of[["positionX",e.x],["positionY",e.y],["positionZ",e.z],["forwardX",-i[8]],["forwardY",-i[9]],["forwardZ",-i[10]],["upX",i[4]],["upY",i[5]],["upZ",i[6]]])a[r]&&(a[r].value=s)}cue(t){let e=this.master;this.master=e*(t==="radio"?this.settings?.radio??.7:this.settings?.ui??.6),super.cue(t),this.master=e,this.events.push({type:t,kind:"authored helmet / UI",time:this.ctx?.currentTime||0}),this.events.length>300&&this.events.shift()}update(t){if(super.update(t),!this.ctx)return;let e=this.ctx.currentTime;if(this.windGain.gain.setTargetAtTime((.015+(t.storm||0)*.08)*this.master*this.settings.environment*(this.mode==="outside"?1:.18),e,.2),this.helmetGain.gain.setTargetAtTime((this.mode==="helmet"?.06:.003)*this.master*this.settings.suit*(1+.15*Math.sin(e*.8)),e,.3),this.engineGain.gain.setTargetAtTime((t.rover&&t.moving?.15:0)*this.master*this.settings.vehicle,e,.2),this.mode==="cinematic"&&e-this.musicAt>4){this.musicAt=e;for(let i of[110,164.81,220])this.tone(i,3.5,"sine",.025*this.settings.music)}}async historical(){if(this.ctx||await this.start(),this.recorded)return this.recorded.stop(),this.recorded=null,!1;let t=await fetch("./assets/nasa_sol1.mp3").then(r=>{if(!r.ok)throw Error("Historical recording unavailable");return r.arrayBuffer()}),e=await this.ctx.decodeAudioData(t),i=this.ctx.createBufferSource(),a=this.ctx.createGain();return i.buffer=e,a.gain.value=this.master*.55,i.connect(a).connect(this.ctx.destination),i.start(),i.onended=()=>{this.recorded=null,i.disconnect(),a.disconnect()},this.recorded=i,!0}}const Rn=yt.clamp,Ws=(n,t)=>Math.atan2(Math.sin(t-n),Math.cos(t-n)),na=()=>({velocity:new he,vertical:0,jumpVelocity:0,speed:0,slip:0,stepDistance:0,follow:!1,cableTension:0,cableBroken:!1}),Ta=(n,t)=>t.mode==="atlas"?n.atlas:t.mode==="drone"?n.drone:t.mode==="alpha"?n.alpha:n.player;function Ap(n,t,e,i,a,r){let s=Ta(n,t);if(!s||t.mode==="alpha"&&t.flags.alphaDisabled)return{moving:!1};let o=s.userData,c=t.mode,l=Rn(i.forward||0,-1,1),h=Rn(i.side||0,-1,1),d=Math.hypot(l,h)>.05,f=0,x=0,M=0;if(c==="atlas"){let P=n.stage===2&&Math.sin(s.position.x*.048+s.position.z*.02)>.18,T=n.stage===7;e.slip=P?!t.traction&&i.running?.82:t.traction?.13:.42:T&&!t.traction?.35:.04,e.speed=yt.damp(e.speed,l*(i.running?8:4.8)*(1-e.slip)*(1-n.dust*.22),d?2.2:5.5,a),s.rotation.y-=h*a*.72*(e.speed<0?-1:1)*Math.min(1,Math.abs(e.speed)/1.3+.12),o.steer=-h,M=e.speed,f=Math.sin(s.rotation.y)*M*a,x=Math.cos(s.rotation.y)*M*a}else{let P=Math.max(1,Math.hypot(l,h)),T=c==="drone"?8:c==="alpha"?2.2:i.sliding?5.2:i.crouch?.8:i.running?2.8:1.45;M=T*Math.min(1,Math.hypot(l,h)),T*=1-n.dust*.3;let U=new he((-Math.sin(r)*l+Math.cos(r)*h)/P,0,(-Math.cos(r)*l-Math.sin(r)*h)/P).multiplyScalar(T);e.velocity.lerp(U,1-Math.exp(-a*(n.stage===7&&!t.traction?1.25:9))),f=e.velocity.x*a,x=e.velocity.z*a,Math.hypot(f,x)>.001&&(s.rotation.y+=Ws(s.rotation.y,Math.atan2(f,x))*Math.min(1,a*9))}let S=s.position.x+f,p=s.position.z+x,u=n.height(S,p),R=n.height(s.position.x,s.position.z),b=Math.hypot(f,x),w=n.blocked(S,p,c==="atlas"?1:.35);return c!=="drone"&&b>1e-4&&Math.abs(u-R)/b>(c==="atlas"?.58:.72)&&(w=!0),c==="drone"&&(w=!n.valid(S,p)),w?(e.speed*=.4,e.velocity.multiplyScalar(.35),f=x=M=0):(s.position.x=S,s.position.z=p,t.distance[c]+=b,e.stepDistance+=b),c==="drone"?(o.altitude=Rn((o.altitude||4)+(i.ascend||0)*a*3,1.2,24),s.position.y=yt.damp(s.position.y,n.height(s.position.x,s.position.z)+o.altitude,3,a),s.rotation.z=yt.damp(s.rotation.z,-h*.13,4,a)):c==="suit"?(i.jump&&e.vertical===0&&(e.jumpVelocity=1.85),(e.jumpVelocity||e.vertical>0)&&(e.jumpVelocity-=3.711*a,e.vertical=Math.max(0,e.vertical+e.jumpVelocity*a),e.vertical===0&&(e.jumpVelocity=0)),s.position.y=n.height(s.position.x,s.position.z)+e.vertical,n.play(s,e.vertical>.02?"Jump":i.crouch?"Crouch":d?i.running?"Run":"Walk":"Idle",d?i.running?1.82:1.5:1)):s.position.y=n.height(s.position.x,s.position.z),o.speed=c==="atlas"?e.speed:M,{moving:Math.hypot(f,x)>.001,speed:Math.abs(M),slip:e.slip,blocked:w,travel:Math.hypot(f,x)}}function Rp(n,t,e,i){if(!e.follow)return;let a=Ta(n,t),r=new he(0,n.height(0,8),8),s=a.position.distanceTo(r)<14;for(let[o,c]of["atlas","alpha","drone"].entries()){let l=n[c];if(l===a||c==="alpha"&&t.flags.alphaDisabled)continue;let h=s?new he(-5+o*5,0,4+o*3):a.position.clone().add(new he((o-1)*3,0,8+o*2));if(Math.hypot(l.position.x-h.x,l.position.z-h.z)<2){l.userData.speed=0;continue}let f=(c==="drone"?7:c==="atlas"?4.7:2.4)*i,x=h;if(c!=="drone"){if(!l.userData.path||!l.userData.pathTarget||l.userData.pathTarget.distanceTo(h)>9){let w=n.path(l.position,h,"safe",c);l.userData.path=w?.points||[],l.userData.pathTarget=h.clone(),l.userData.pathIndex=1}let R=l.userData.path,b=l.userData.pathIndex||1;if(!R.length)continue;x=R[Math.min(b,R.length-1)],Math.hypot(x.x-l.position.x,x.z-l.position.z)<1.2&&(l.userData.pathIndex=Math.min(b+1,R.length-1))}let M=new he(x.x-l.position.x,0,x.z-l.position.z),S=M.length();if(!S)continue;M.multiplyScalar(Math.min(f,S)/S);let p=l.position.x+M.x,u=l.position.z+M.z;c!=="drone"&&n.blocked(p,u,1)||(l.position.set(p,n.height(p,u)+(c==="drone"?s?2:7:0),u),l.rotation.y+=Ws(l.rotation.y,Math.atan2(M.x,M.z))*Math.min(1,i*5),l.userData.speed=f/i)}}function yp(n,t,e,i){if(!n.payload||!t.flags.cable)return;let a=n.atlas,r=n.payload,s=a.position.clone().sub(r.position);s.y=0;let o=s.length();if(e.cableTension=Rn(Math.max(0,o-4.3)/7+Math.abs(a.userData.speed||0)*.045,0,1.2),e.cableTension>1.02){t.flags.cable=!1,e.cableBroken=!0,t.message="Cable overloaded. Brake, approach the load and reconnect.";return}if(o>4.8){let d=Math.min((o-4.8)*i*3,i*(Math.abs(a.userData.speed||0)+1.8));s.normalize().multiplyScalar(d);let f=r.position.x+s.x,x=r.position.z+s.z;!n.blocked(f,x,.9)&&Math.abs(n.height(f,x)-r.position.y)<1.2&&(r.position.set(f,n.height(f,x),x),r.rotation.y=Math.atan2(s.x,s.z))}n.cableLine||(n.cableLine=new Di(new Vt,new Pi({color:"#9aabb0"})),n.effects.add(n.cableLine));let c=a.position.clone().add(new he(0,.4,0)),l=r.position.clone().add(new he(0,.35,0)),h=c.clone().lerp(l,.5);h.y-=Math.max(0,.35-e.cableTension*.3),n.cableLine.geometry.dispose(),n.cableLine.geometry=new Vt().setFromPoints([c,h,l])}function ns(n){let t=new ht;t.position.set(.22,1.55,.15),n.alpha.add(t);let e=(o,c)=>{let l=new ht;o.add(l);let h=new mt(new Hn(.075,.12,c,16),n.mats.metal);h.position.y=c/2,h.castShadow=!0,l.add(h);let d=new mt(new vi(.13,.026,8,20),n.mats.orange);return d.rotation.x=Math.PI/2,l.add(d),l},i=e(t,1.05),a=new ht;a.position.y=1.05,i.add(a);let r=e(a,.92),s=new ht;s.position.y=.92,r.add(s);for(let o of[-1,1]){let c=new mt(new oi(.035,.2,.12),n.mats.metal);c.position.set(o*.07,.08,0),s.add(c)}return i.rotation.x=1.8,a.rotation.x=-2,n.manipulator={root:t,upper:i,elbow:a,lower:r,tip:s}}function wp(n,t){let e=n.manipulator;if(!e)return 1/0;n.alpha.updateMatrixWorld(!0);let i=n.alpha.worldToLocal(t.clone()).sub(e.root.position),a=Math.hypot(i.x,i.z),r=Math.hypot(a,i.y),s=1.05,o=.92,c=Rn(r,.15,s+o-.01),l=Math.atan2(a,i.y)-Math.acos(Rn((s*s+c*c-o*o)/(2*s*c),-1,1)),h=Math.acos(Rn((c*c-s*s-o*o)/(2*s*o),-1,1));return e.root.rotation.y=Math.atan2(i.x,i.z),e.upper.rotation.x=l,e.elbow.rotation.x=h,n.alpha.updateMatrixWorld(!0),e.tip.getWorldPosition(new he).distanceTo(t)}class Cp{constructor(t,e,i,a,r){Object.assign(this,{world:t,mission:e,task:i,actor:a,camera:r,time:0,progress:0,pressure:.25,heat:0,integrity:1,aim:{x:["scan","scout"].includes(i.type)?0:.32,y:i.type==="relay"?.15:.12},result:null,failed:!1,ray:new Us,group:new ht}),t.effects.add(this.group),this.target=i.id==="teamrescue"?t.alpha:["scout","repair"].includes(i.type)&&t.payload?t.payload:t.taskObjects.get(i.id),this.targetPoint=new he(i.x,t.height(i.x,i.z)+(i.id==="teamrescue"?1.65:i.type==="relay"?2.15:["anchor","probe","winch"].includes(i.type)?.3:1),i.z);let s=i.type,o=t.mats;["drill","frost","repair","anchor","probe"].includes(s)?(this.instrument=new ht,this.group.add(this.instrument),Pt(this.instrument,[0,0,.2],[.22,.22,.45],o.orange,.045),this.bit=new mt(new Hn(.025,.035,.55,14),o.metal),this.bit.rotation.x=Math.PI/2,this.bit.position.z=-.18,this.instrument.add(this.bit)):s==="scan"||s==="scout"?(this.scanBeam=new Di(new Vt,new Pi({color:"#88e8d4",transparent:!0,opacity:.75})),this.group.add(this.scanBeam)):s==="relay"&&(this.held=new mt(new Hn(.08,.08,.4,14),o.orange),this.group.add(this.held)),t.play(t.player,["drill","frost"].includes(s)?"Drill":s==="repair"?"Repair":["scan","scout"].includes(s)?"Scan":"Deploy")}update(t,e){if(this.result||this.failed)return;this.time+=t;let i=this.task.type,a=this.world,r=this.mission,s=!!e.held;this.aim.x=yt.clamp(this.aim.x+(e.aimX||0)*t*.4,-.75,.75),this.aim.y=yt.clamp(this.aim.y+(e.aimY||0)*t*.4,-.75,.75);let o=Math.hypot(this.aim.x,this.aim.y);this.pressure=yt.clamp(this.pressure+t*(s?.32:-.36),0,1),this.contact=o<.18;let c=this.targetPoint.clone().add(new he(this.aim.x,this.aim.y,0));if(this.instrument){if(this.instrument.position.copy(c).add(new he(0,0,1.15)),this.task.remote){let l=this.actor.position.clone().add(new he(0,1.3,0));this.instrument.position.lerpVectors(l,c,Math.min(1,this.time/1.5)),this.contact=this.contact&&this.time>=1.5}if(this.bit.rotation.y+=t*(s?27:0),this.bit.position.z=-.15-this.progress*.17,["drill","frost","repair"].includes(i)){let l=this.targetPoint.clone().sub(this.instrument.position);this.ray.set(this.instrument.position,l.normalize()),this.ray.far=3,this.target?.updateMatrixWorld(!0),this.contact=this.contact&&!!this.target&&this.ray.intersectObject(this.target,!0).length>0}}if(i==="scan"||i==="scout"){let l=this.camera.position.clone(),h=this.targetPoint.clone().sub(l).normalize(),d=new he;this.camera.getWorldDirection(d),this.ray.set(l,d),this.ray.far=150,this.target?.updateMatrixWorld(!0),this.raycastHit=!!this.target&&this.ray.intersectObject(this.target,!0).length>0&&a.sight(l,this.targetPoint),this.alignment=d.dot(h);let f=(i==="scout"?a.drone:a.player).position.clone().add(new he(0,1.4,0));this.scanBeam.geometry.dispose(),this.scanBeam.geometry=new Vt().setFromPoints([f,this.targetPoint]),this.scanBeam.visible=s&&this.raycastHit,this.progress=s&&this.raycastHit?this.progress+t/2.4:Math.max(0,this.progress-t*.12)}else if(i==="relay"){let l=this.targetPoint.clone().add(new he(this.aim.x,this.aim.y,0));this.armError=wp(a,l)+l.distanceTo(this.targetPoint),this.held&&a.manipulator&&this.held.position.copy(a.manipulator.tip.getWorldPosition(new he)),this.contact=this.armError<.3,s&&this.contact&&(this.progress+=t/2.4)}else if(i==="traction")this.contact=r.traction&&!e.running,this.progress=this.contact?this.progress+t/2.5:0;else{let l=this.pressure>=.42&&this.pressure<=.75;["anchor","probe"].includes(i)&&(l=this.pressure>=.25&&this.pressure<=.83),s&&this.contact&&l&&(this.progress+=t/(i==="drill"?5:i==="repair"?4.2:i==="frost"?3.5:3)),s&&this.pressure>.78?(this.heat+=t*.31,this.integrity-=t*.12):this.heat=Math.max(0,this.heat-t*.16),(this.heat>1||this.integrity<.5)&&(this.failed=!0,r.power=Math.max(0,r.power-2.5),r.message=i==="winch"?"Cable overload · release tension and retry":"Instrument overheated / core damaged · reset and re-seat",r.recoveries++)}return this.progress=Math.min(1,this.progress),this.progress>=1&&(this.result={id:this.task.id,distance:Math.hypot(this.actor.position.x-this.task.x,this.actor.position.z-this.task.z),raycastHit:!!this.raycastHit,exposure:2.4,contact:this.contact,depth:1,integrity:this.integrity,altitude:a.drone.position.y-a.height(a.drone.position.x,a.drone.position.z),connected:!0,tension:this.pressure,anchored:!0,strength:this.integrity,placed:!0,armError:this.armError??0,gripped:!0,torque:this.pressure,repaired:!0,slip:r.traction?.12:.5,crawl:!e.running}),this.result}dispose(){this.world.effects.remove(this.group),this.group.traverse(t=>t.geometry?.dispose()),this.world.play(this.world.player,"Idle")}}const Lp={eva:"At the starting airlock: press INTERACT (E). Select HELMET SEAL, OXYGEN LINE and RADIO LOOP, then BEGIN EVA.",bearing:"Follow the cyan route. At the target, aim the camera toward the required compass bearing; hold steady, then press E twice as instructed.",pickup:"Reach the orange TARGET marker and press INTERACT (E) to recover the item.",tripod:"Walk to stable ground at the objective marker and press INTERACT (E) to deploy the tripod.",flag:"Reach the marker, press INTERACT (E), choose your country and select PLANT FLAG.",panorama:"At the target press E, drag the camera around the full horizon, then press E to capture.",scan:"At the marker press E, aim at the object, then HOLD E or INTERACT until scanning finishes.",scout:"Use R to select SKYSCOUT, ascend above 4 m using Q, travel to the target, then HOLD E to scan.",drill:"At the marked outcrop press E, carefully align the drill and hold E while maintaining safe pressure.",frost:"Use the drill on the marked frost sample; align and hold E to safely extract it.",package:"At the sample marker press E and choose the correct specimen ID to seal it.",tag:"At the marker press E, choose the scientifically supported classification and confirm.",drive:"Switch to ATLAS-6 (R / 2). Drive the indicated distance to the marked station and slow down before INTERACT.",traction:"Use ATLAS-6 traction control (T) and drive slowly through the objective zone; interact once slip is under control.",winch:"Control ATLAS-6 (R / 2), approach the marked recovery object and hold E to connect/tension the winch.",tow:"Tow the payload toward its target with ATLAS-6, keep cable tension safe, then press E.",anchor:"Reach the anchor point; align and hold E until the anchor is secured.",cross:"Deploy both anchors, then walk across the bridge with a safe load and press E at the crossing marker.",probe:"At the target use the probe instrument: aim and hold E to secure a valid measurement.",relay:"Switch to ALPHA with R / 4, approach the target closely, align its manipulator, and hold E.",link:"Use ALPHA and install both relays first; at the marked location press E to test the links.",powercell:"Reach the disabled robot and press E to restore power.",backup:"At the reserve-power marker press E to connect the backup cell.",repair:"Approach the damaged mechanism; aim the tool, hold E and keep its torque in the safe range.",heater:"At the target enable ECO/HIGH heater (H) and traction (T), then confirm.",beacon:"At the marker press E to install the navigation beacon.",priority:"At the marker press E and choose a science route based on risk and reserve.",payload:"At the marker press E and assign all three required robot roles with a payload at or under 12 kg.",replan:"Mission route has changed. Press E at the marked hazard and select a reserve-safe replanned return.",convoy:"Switch to ATLAS-6, bring every required vehicle home, then interact at the convoy marker.",dock:"FINAL STEP: Follow the cyan route to H (habitat). Switch to astronaut if driving. Enter the airlock zone; mission completes automatically.",observation:"Follow the minimap route and investigate the chosen terrain point."};function Aa(n,t){if(!n)return"All objectives completed.";const e=Lp[n.type]||"Follow the cyan route and INTERACT at the target.";return n.type==="bearing"?`${e} ${n.bearing===0?"Face NORTH.":"Face EAST."}`:n.mode&&t?.mode!==n.mode?`First select ${n.mode.toUpperCase()} with R. ${e}`:e}function Xs(n){return n?.type==="dock"?"Return to habitat · H":n?.title||"Mission complete"}function Pp(n,t,e){return!!(n&&!n.complete&&!n.failed&&!n.paused&&e==="suit"&&Number.isFinite(t)&&ei(n)?.type==="dock"&&t<=(ei(n).radius||7))}const F=n=>document.getElementById(n),tn=yt.clamp,Fn=["localhost","127.0.0.1","[::1]"].includes(location.hostname)&&new URLSearchParams(location.search).has("qa"),Nn=["localhost","127.0.0.1","[::1]"].includes(location.hostname)&&new URLSearchParams(location.search).get("presenter")==="1",Ra=Kl+(Fn?"_qa":Nn?"_presenter":""),Ue=Bl(localStorage,Ra),xt=new Tp;xt.settings={...Ue.settings};const Ni=[];window.addEventListener("error",n=>Ni.push(n.message));window.addEventListener("unhandledrejection",n=>Ni.push(String(n.reason)));const We=new Uh({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});We.setSize(innerWidth,innerHeight);We.setPixelRatio(Math.min(devicePixelRatio,1.5));We.outputColorSpace=Zt;We.toneMapping=As;We.toneMappingExposure=1.05;We.shadowMap.enabled=!0;We.shadowMap.type=Ts;We.xr.enabled=!0;F("canvas-root").append(We.domElement);const li=new Sa,bt=new Tn(57,innerWidth/innerHeight,.09,6500),Dp=new ma(We);li.environment=Dp.fromScene(new Nh,.04).texture;li.environmentIntensity=.35;const N=new Mp(We,li,bt),Rt=new Set;let yn={x:0,y:0},Oi=!1,Fi=!1,ci=!1,yi=0,en=null;const dt=n=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function on(n,t,e=!1){let i=document.createElement("button");return i.textContent=n,e&&(i.className="primary"),i.onclick=t,i}function ln(){Xl(Ue,localStorage,Ra)}function Cn(){Rt.clear(),yn={x:0,y:0},Oi=Fi=ci=!1,yi=0,F("knob").style.transform="translate(0,0)"}function Mt(n,t,e=[],i="MISSION CONTROL"){Cn(),O.modalOpen=!0,O.mission&&(O.mission.paused=!0),F("modal-title").textContent=n,F("modal-kicker").textContent=i,F("modal-body").innerHTML=t,F("modal-actions").replaceChildren(...e.map(([a,r,s])=>on(a,r,s))),F("overlay").classList.remove("hidden")}function $e(){O.modalOpen=!1,F("overlay").classList.add("hidden"),O.mission&&!O.mission.failed&&(O.mission.paused=!1),Cn()}function et(n){F("world-message").textContent=n,O.mission&&(O.mission.message=n),O.messageAt=performance.now()}function Ip(n){Ni.push(String(n)),F("error").classList.remove("hidden"),F("error").textContent=String(n),console.error(n)}class Up{constructor(){Object.assign(this,{page:"home",mission:null,motion:na(),yaw:0,pitch:.24,cameraDistance:6.2,tool:null,exploration:!1,returning:!1,routeMode:"safe",target:{x:0,z:-110},guide:null,opRoutes:[],opHazard:0,modalOpen:!1,portraits:{},panoramaSet:new Set,sightSeconds:0,worldReady:!1,ticks:0,autosave:0,elapsed:0,qaDriving:!1,frameTimes:[],messageAt:0}),this.renderer=We,this.world=N,this.camera=bt,this.saved=Ue,this.errors=Ni,this.saveKey=Ra,this.audio=xt,this.presenterMode=Nn,this.qaMode=Fn}cancelTool(){this.tool?.dispose(),this.tool=null,F("tool-panel").classList.add("hidden"),F("reticle").classList.add("hidden")}async navigate(t){this.snapshot(),this.cancelTool(),Cn(),$e(),this.page=t,document.querySelectorAll(".page").forEach(e=>e.classList.toggle("hidden",e.id!==t)),F("world-ui").classList.toggle("hidden",t!=="world"),F("pause").classList.toggle("hidden",t!=="world"),document.body.classList.toggle("playing",t==="world"),this.mission&&(this.mission.paused=t!=="world"),t==="home"&&(await N.setStage(-1),this.homeCamera()),t==="crew"&&(this.renderCrew(),this.renderPortraits()),t==="campaign"&&this.renderCampaign(),t==="profile"&&this.renderProfile(),t==="shop"&&this.renderShop(),(t==="atlas"||t==="ops")&&await this.prepareScience(t)}homeCamera(){bt.position.set(-2,N.height(-2,-7)+1.7,-7),bt.lookAt(3,N.height(3,-35)+3.8,-35)}async startMission(t,e=null){return t>=Ue.unlocked&&!Fn&&!Nn?(et("Complete the preceding expedition first"),!1):(this.cancelTool(),Cn(),$e(),this.page="world",this.exploration=!1,this.returning=!1,this.sightSeconds=0,this.sighting=!1,this.panorama=!1,this.panoramaSet.clear(),this.guide=null,this.mission=e||br(t,Ue.crew,Ue.loadout),this.returning=ei(this.mission)?.type==="dock",this.mission.paused=!1,this.motion=na(),this.yaw=0,this.pitch=.24,document.querySelectorAll(".page").forEach(i=>i.classList.add("hidden")),F("world-ui").classList.remove("hidden"),F("pause").classList.remove("hidden"),document.body.classList.add("playing"),await N.setStage(t,this.mission.crew),ns(N),this.restoreWorld(),this.refreshGuide(!0),this.updateCamera(1),this.updateHud(),this.snapshot(),et(Dt[t].brief),!0)}restoreWorld(){let t=this.mission;for(let e of Dt[t.index].tasks)if(t.done.includes(e.id)&&(["flag","tripod","anchor","probe","beacon","relay"].includes(e.type)&&N.deploy(e,t.country),e.type==="pickup")){let i=N.taskObjects.get(e.id);i&&(i.visible=!1)}t.flags.bridge&&N.showBridge(),t.hazardVersion&&N.makeGrid(t.hazardVersion);for(let[e,i]of Object.entries(t.poses||{})){let a=e==="suit"?N.player:N[e];a&&(a.position.set(i.x,N.height(i.x,i.z)+(i.altitude||0),i.z),a.rotation.y=i.heading,a.userData.altitude=i.altitude)}if(t.payloadPose&&N.payload){let e=t.payloadPose;N.payload.position.set(e.x,N.height(e.x,e.z),e.z)}this.motion.follow=!!t.flags.follow}snapshot(){let t=this.mission;if(this.page!=="world"||!t||this.exploration||t.complete||t.failed||!N.player)return;let e={};for(let i of["suit","atlas","drone","alpha"]){let a=i==="suit"?N.player:N[i];e[i]={x:a.position.x,z:a.position.z,heading:a.rotation.y,altitude:i==="drone"?a.userData.altitude||.1:0}}t.poses=e,N.payload&&(t.payloadPose={x:N.payload.position.x,z:N.payload.position.z}),Ue.active=JSON.parse(JSON.stringify({...t,paused:!1})),ln()}task(){return this.exploration?{id:"observation",type:"scan",title:"Explore the selected terrain · MAP for route guidance",x:this.target.x,z:this.target.z}:ei(this.mission)}actor(){return Ta(N,this.mission)}distance(t=this.task()){return t?Math.hypot(this.actor().position.x-t.x,this.actor().position.z-t.z):0}finish(t){let e=this.mission,i=this.task();if(this.exploration){et("Exploration observation recorded · no campaign reward");return}let a=kl(e,{id:i.id,distance:this.distance(i),...t});if(!a.ok)return et(a.why),!1;if(["tripod","flag","beacon","anchor","probe","relay"].includes(i.type)&&N.deploy(i,e.country),i.type==="drill"||i.type==="frost"){let r=N.makeEquipment("core");r.position.set(i.x,N.height(i.x,i.z)+1.4,i.z),N.carriedCore=r,N.play(N.player,"Sample")}return i.type==="package"&&N.carriedCore&&(N.props.remove(N.carriedCore),N.player.add(N.carriedCore),N.carriedCore.position.set(.31,.9,.13),N.carriedCore.scale.setScalar(.65)),i.type==="beacon"&&e.beacons.push({x:i.x,z:i.z}),i.type==="relay"&&e.relays.push({x:i.x,z:i.z}),e.flags.bridge&&!N.bridge&&N.showBridge(),N.gridVersion!==e.hazardVersion&&N.makeGrid(e.hazardVersion),this.sighting=!1,this.panorama=!1,this.returning=ei(e)?.type==="dock",this.refreshGuide(!0),xt.cue?.("success"),this.updateHud(),this.snapshot(),e.complete&&(Hl(Ue,e,Dt[e.index].reward),ln(),Mt("Expedition secured",`<p>${dt(Dt[e.index].name)}</p><p>${e.score} credits · ${Math.round(e.time/60)} min · O₂ ${Math.round(e.oxygen)}% · power ${Math.round(e.power)}%</p><p>Earned: ${dt(Dt[e.index].reward)}</p>`,[["MISSION HISTORY",()=>this.navigate("profile")],e.index<9?["NEXT EXPEDITION",()=>this.startMission(e.index+1),!0]:["RETURN TO CAMPAIGN",()=>this.navigate("campaign"),!0]])),!0}interact(){let t=this.mission;if(!t||t.paused||t.complete||t.failed)return;if(this.tool){this.tool.failed&&(this.cancelTool(),et("Instrument reset. Re-align and retry."));return}let e=this.task();if(!e)return;if(this.distance(e)>(e.radius||5.5)){et(`Reach ${e.title.toLowerCase()} · ${Math.round(this.distance(e))} m`);return}if(e.mode&&t.mode!==e.mode){et("Select "+e.mode.toUpperCase()+" control with R");return}let i=this.actor();if(Tr.has(e.type)||e.type==="scout"){if(e.type==="relay"&&this.distance(e)>1.7){et("Move ALPHA within 1.7 m for manipulator reach");return}if(e.type==="scout"&&i.position.y-N.height(i.position.x,i.position.z)<4){et("Ascend above 4 m with Q before scouting");return}this.tool=new Cp(N,t,e,i,bt),F("reticle").classList.remove("hidden"),F("tool-panel").classList.remove("hidden"),this.updateCamera(1);return}switch(e.type){case"eva":{let a={};Mt("EVA preparation",'<p>Inspect helmet seal, connect oxygen and confirm the radio loop.</p><div id="eva-checks" class="chips"></div>',[["BEGIN EVA",()=>{Object.keys(a).length===3&&($e(),this.finish({seal:!0,oxygen:!0,radio:!0}))},!0]]);for(let r of["HELMET SEAL","OXYGEN LINE","RADIO LOOP"])F("eva-checks").append(on(r,()=>{a[r]=!0,N.play(N.player,"Scan"),[...F("eva-checks").children].find(s=>s.textContent===r)?.classList.add("selected")}));break}case"bearing":this.sighting?this.finish({bearingError:Math.abs(Math.atan2(Math.sin(this.yaw-e.bearing),Math.cos(this.yaw-e.bearing))),sightSeconds:this.sightSeconds}):(this.sighting=!0,this.sightSeconds=0,et("Rotate the camera to "+(e.bearing===0?"NORTH":"EAST")+" and hold steady. Then press E."));break;case"pickup":{let a=N.taskObjects.get(e.id);a&&(a.visible=!1),N.play(N.player,"Sample"),this.finish({objectPicked:!0});break}case"tripod":this.finish({placed:!0,slope:N.slope(e.x,e.z),blocked:N.blocked(e.x,e.z)});break;case"flag":Mt("Deploy your flag",'<label>COUNTRY<select id="country"><option value="BD">Bangladesh</option><option value="US">United States</option><option value="CA">Canada</option><option value="JP">Japan</option><option value="GB">United Kingdom</option><option value="FR">France</option></select></label>',[["PLANT FLAG",()=>{t.country=F("country").value,$e(),N.play(N.player,"Deploy"),this.finish({placed:!0,slope:N.slope(e.x,e.z),blocked:N.blocked(e.x,e.z)})},!0]]);break;case"panorama":if(!this.panorama)this.panorama=!0,this.panoramaSet.clear(),et("Sweep the camera around the horizon, then press E to capture.");else{let a=this.panoramaSet.size/24;a<.74?et(`Panorama ${Math.round(a*100)}% · continue the horizon sweep`):(t.flags.panoramaImage=We.domElement.toDataURL("image/jpeg",.5),this.finish({coverage:a,captured:!0}))}break;case"package":Mt("Seal the specimen",'<p>Choose the specimen physically recovered by the sampling tool. Preserve its identity.</p><div id="sample-choices" class="chips"></div>');for(let a of[e.sample,"UNLABELED-00"])F("sample-choices").append(on(a,()=>{$e(),this.finish({label:a})}));break;case"tag":Mt("Evidence classification",'<p>No calibrated orbital mineral spectrum is bundled for this location. A rendered surface is insufficient to claim a mineral detection.</p><div id="classifications" class="chips"></div>');for(let a of["MEASURED","MODELED","UNKNOWN"]){let r=on(a,()=>{$e(),this.finish({classification:a,tagPlaced:!0})});r.dataset.classification=a,F("classifications").append(r)}break;case"drive":this.finish({speed:Math.abs(this.motion.speed)});break;case"tow":t.flags.cable?this.finish({payloadDistance:N.payload?Math.hypot(N.payload.position.x-e.x,N.payload.position.z-e.z):1/0,tension:this.motion.cableTension}):N.payload&&N.payload.position.distanceTo(N.atlas.position)<10?(t.flags.cable=!0,this.motion.cableBroken=!1,et("Cable reconnected. Pull gently.")):et("Approach the payload within 10 m to reconnect.");break;case"cross":this.finish({crossed:N.bridge&&i.position.z<-118,mass:6+t.loadout.reduce((a,r)=>a+(Ar.find(s=>s.id===r)?.mass||.5),0)});break;case"link":{let a=[{x:0,z:8},...t.relays],r=t.loadout.includes("Relay Extension")?115:88,s=new Set([0]),o=[0];for(;o.length;){let c=o.shift();a.forEach((l,h)=>{let d=a[c];!s.has(h)&&Math.hypot(l.x-d.x,l.z-d.z)<=r&&N.sight(new he(d.x,N.height(d.x,d.z)+3.2,d.z),new he(l.x,N.height(l.x,l.z)+3.2,l.z))&&(s.add(h),o.push(h))})}this.finish({linkConnected:t.relays.length>=2&&s.size===a.length});break}case"powercell":case"backup":N.play(N.player,"Repair"),this.finish({cellInstalled:!0,alreadyUsed:!!t.flags[e.id+"Used"]}),t.flags[e.id+"Used"]=!0;break;case"heater":this.heaterMenu(!0);break;case"beacon":this.finish({placed:!0,signal:.8});break;case"priority":Mt("Expedition priority","<p>Route and reserve change with the chosen research shelf approach.</p>",[["DIRECT SCIENCE",()=>{let a=N.path(i.position,{x:-55,z:-160},"fast");t.flags.priority="direct",$e(),this.finish({priority:"direct",routeFeasible:!!a})}],["LOWER RISK SCIENCE",()=>{let a=N.path(i.position,{x:-55,z:-160},"safe");t.flags.priority="safe",this.routeMode="safe",$e(),this.finish({priority:"safe",routeFeasible:!!a})},!0]]);break;case"payload":Mt("Assign expedition roles",'<p>ATLAS-6: transport · SKYSCOUT: scout · ALPHA: relay. Select a payload within 12 kg.</p><div id="payload-items"></div><p id="payload-mass"></p>',[["LOAD & ASSIGN",()=>{let a=[...document.querySelectorAll("[data-mass]:checked")],r=a.reduce((s,o)=>s+Number(o.dataset.mass),0);t.flags.payloadMass=r,t.flags.roles={atlas:"transport",drone:"scout",alpha:"relay"},$e(),this.finish({mass:r,allRoles:a.some(s=>s.value==="SAMPLER")&&a.some(s=>s.value==="RELAY")&&a.some(s=>s.value==="THERMAL")})},!0]]);for(let[a,r]of[["SAMPLER",4],["RELAY",2],["THERMAL",3],["BATTERY",3]]){let s=document.createElement("label");s.innerHTML=`<input type="checkbox" value="${a}" data-mass="${r}" ${a!=="BATTERY"?"checked":""}> ${a} · ${r} kg`,F("payload-items").append(s)}break;case"replan":this.emergencyPlan(!0);break;case"convoy":this.motion.follow=!0,t.flags.follow=!0,this.finish({allHome:["atlas","drone","alpha"].every(a=>Math.hypot(N[a].position.x,N[a].position.z-8)<16)});break;case"dock":if(t.mode!=="suit"){this.switchMode("suit"),et("Return the astronaut to the habitat airlock.");break}this.finish({payloadHome:!N.payload||Math.hypot(N.payload.position.x,N.payload.position.z-8)<15});break;default:et("Review the active objective.")}}switchMode(t){return!this.mission||this.modalOpen?!1:t==="drone"&&N.dust>.65?(et("SKYSCOUT grounded by modeled storm visibility"),!1):(this.cancelTool(),this.mission.mode=t,this.motion.velocity.set(0,0,0),this.motion.speed=0,t==="drone"&&(N.drone.userData.altitude=Math.max(5,N.drone.userData.altitude||0)),t==="atlas"&&(this.yaw=N.atlas.rotation.y+Math.PI),this.refreshGuide(!0),this.updateCamera(1),this.updateHud(),et(t==="suit"?"ASTRONAUT · WASD / joystick":t.toUpperCase()+" · remote control · "+(t==="atlas"?"W/S throttle · A/D steer":t==="drone"?"Q rise · Z descend":"WASD · manipulator via INTERACT")),!0)}vehicleMenu(){Mt("Robot control","<p>Remote control returns to the astronaut’s physical location. F toggles convoy follow.</p>",[["ASTRONAUT",()=>{$e(),this.switchMode("suit")}],["ATLAS-6",()=>{$e(),this.switchMode("atlas")}],["SKYSCOUT",()=>{$e(),this.switchMode("drone")}],["ALPHA",()=>{$e(),this.switchMode("alpha")}],[this.motion.follow?"HOLD POSITION":"FOLLOW LEADER",()=>{this.motion.follow=!this.motion.follow,this.mission.flags.follow=this.motion.follow,$e()}]])}heaterMenu(t=!1){let e=this.mission;const i=()=>{Mt("Thermal & traction control",`<p>Heating consumes ${[0,40,90][e.heater]} W. ECO conserves power; HIGH restores heat faster.</p><p>Thermal reserve ${Math.round(e.thermal)}%</p>`,[["HEATER: "+["OFF","ECO","HIGH"][e.heater],()=>{e.heater=(e.heater+1)%3,i()}],["TRACTION: "+(e.traction?"ON":"OFF"),()=>{e.traction=!e.traction,i()}],["CONFIRM",()=>{$e(),t&&this.finish({})},!0]])};i()}emergencyPlan(t=!1){let e=this.mission;N.makeGrid(e.hazardVersion);let i=N.path(this.actor().position,{x:0,z:8},"reserve",e.mode),a=i?Rr(e,i.stats.meters):-1;Mt("Emergency return",i?`<p>${Math.round(i.stats.meters)} m · ${Math.ceil(i.stats.seconds/60)} min travel · ${Math.floor(a/60)} min margin.</p><p>The route excludes NoData, steep cells, obstacles and the current hazard zone. These are planning assumptions, not operational certification.</p>`:"<p>No feasible route in this planning grid. Backtrack to an open cell or retry the last checkpoint.</p>",i&&a>0?[["FOLLOW RETURN ROUTE",()=>{$e(),this.returning=!0,this.routeMode="reserve",this.guide=i,N.guide(i.points),e.routeVersion=e.hazardVersion,t&&this.finish({routeFeasible:!0,routeVersion:e.hazardVersion,reserve:a}),this.refreshGuide(!0)},!0]]:[["RETRY CHECKPOINT",()=>this.restoreCheckpoint()]])}restoreCheckpoint(){let t=this.mission;return $e(),Vl(t),this.startMission(t.index,t)}pause(){this.mission&&(this.snapshot(),Mt("Mission paused","<p>WASD move · mouse drag orbit · E interact/hold tool · arrows align tool · Shift run · Space jump · C slide · R robots · M map · Q/Z drone altitude · H heat · T traction · F follow · B reserve battery.</p>",[["RESUME",$e,!0],["RETRY CHECKPOINT",()=>this.restoreCheckpoint()],["SETTINGS",()=>this.settings()],["USE RESERVE BATTERY",()=>{this.useBattery(),$e()}],["CAMPAIGN",()=>this.navigate("campaign")]]))}refreshGuide(t=!1){if(!this.mission||this.mission.complete||!this.actor())return;let e=this.task();if(!e)return;let i=this.actor().position,a=this.returning?{x:0,z:8}:e,r=[e.id,this.returning,this.routeMode,this.mission.mode,this.mission.hazardVersion].join(":");!t&&this.guideKey===r&&this.lastGuidePos?.distanceTo(i)<12||(this.guideKey=r,this.lastGuidePos=i.clone(),this.guide=N.path(i,a,this.routeMode,this.mission.mode),N.guide(this.guide?.points))}updateCamera(t){if(this.page!=="world"||!N.player)return;let e=this.actor(),i=e.position.clone().add(new he(0,this.mission.mode==="suit"?1.25:this.mission.mode==="atlas"?1.2:.9,0));if(this.tool&&["scan","scout"].includes(this.tool.task.type)){let s=this.tool.targetPoint.clone(),o=e.position.clone().sub(s);o.y=0,o.length()<1&&o.set(0,0,1),o.normalize();let c=e.position.clone().addScaledVector(o,3.5);c.y=e.position.y+(this.mission.mode==="drone"?1:1.8),bt.position.lerp(c,Math.min(1,t*9)),bt.lookAt(s);return}if(this.tool){let s=this.tool.targetPoint.clone(),o=e.position.clone().sub(s);o.y=0,o.length()<.5&&o.set(0,0,1),o.normalize();let c=s.clone().addScaledVector(o,3.4).add(new he(1.3,1.2,0));c.y=Math.max(c.y,N.height(c.x,c.z)+.7),bt.position.lerp(c,Math.min(1,t*9)),bt.lookAt(s);return}let a=this.mission.mode==="atlas"?this.cameraDistance+1.8:this.cameraDistance,r=i.clone().add(new he(Math.sin(this.yaw)*Math.cos(this.pitch)*a,Math.sin(this.pitch)*a,Math.cos(this.yaw)*Math.cos(this.pitch)*a));for(let s=1;s<=12;s++){let o=i.clone().lerp(r,s/12);if(o.y<N.height(o.x,o.z)+.45||[...N.colliders,...N.stage>=0?[{x:0,z:8,r:3.65,height:2.6},{x:22,z:28,r:7.3,height:7.5}]:[]].some(c=>Math.hypot(o.x-c.x,o.z-c.z)<c.r+.25&&o.y<N.height(o.x,o.z)+(c.height||2)+.3)){r=i.clone().lerp(r,Math.max(.1,(s-1)/12));break}}r.y=Math.max(r.y,N.height(r.x,r.z)+.45),bt.position.lerp(r,Math.min(1,t*8)),bt.lookAt(i)}updateHud(){let t=this.mission,e=this.task();if(!t||!e)return;F("mission-kicker").textContent=this.exploration?"SURFACE EXPLORER":`STAGE ${String(t.index+1).padStart(2,"0")} · ${Dt[t.index].place.toUpperCase()}`,F("mission-name").textContent=this.exploration?"Explore Mars":Dt[t.index].name,F("objective").textContent=e.title,F("task-checklist").textContent=(this.exploration?"":`${Math.min(t.done.length+1,Dt[t.index].tasks.length)}/${Dt[t.index].tasks.length} · `)+`${Math.round(this.distance(e))} m to ${e.type==="dock"?"habitat":"target"}`,F("objective-instruction").textContent=Aa(e,t),F("route-readout").textContent=this.guide?.stats?`↗ ${Math.round(this.guide.stats.meters)} m via ${this.routeMode==="safe"?"lower-risk":"direct"} route · MAP (M)`:"Open MAP (M) for navigation",F("oxygen-v").textContent=Math.ceil(t.oxygen)+"%",F("power-v").textContent=Math.ceil(t.power)+"%",F("oxygen-bar").style.width=t.oxygen+"%",F("power-bar").style.width=t.power+"%";let i=Math.hypot(this.actor().position.x,this.actor().position.z-8)*1.25,a=Rr(t,i);F("reserve-v").textContent=a>0?Math.floor(a/60)+"m":"LOW",F("reserve-bar").style.width=tn(a/900*100,0,100)+"%",F("reserve-bar").style.background=a<120?"#ea754f":"",F("drone-altitude").classList.toggle("hidden",t.mode!=="drone");let r=t.mode!=="suit",s=F("vehicle-telemetry");if(s.classList.toggle("hidden",!r&&t.index!==7),s.textContent=r?`${t.mode.toUpperCase()} · ${Math.abs(this.actor().userData.speed||0).toFixed(1)} m/s${t.mode==="atlas"?" · slip "+Math.round(this.motion.slip*100)+"%":""}${t.flags.cable?" · tension "+Math.round(this.motion.cableTension*100)+"%":""}`:`HEAT ${Math.round(t.thermal)}% · ${["OFF","ECO","HIGH"][t.heater]}`,this.tool){let o=this.tool;F("tool-panel").innerHTML=`<b>${dt(o.task.type.toUpperCase())} · ${o.failed?"RESET WITH E":Math.round(o.progress*100)+"%"}</b><p>${["scan","scout"].includes(o.task.type)?"Hold E / INTERACT while target is in sight":o.task.type==="relay"?"Arrow keys / drag to align · hold E to grip":"Arrows / drag align · pulse E to keep load in the safe band"}</p><div class="tool-track"><i style="width:${o.progress*100}%"></i></div><p>ALIGN ${Math.round(Math.hypot(o.aim.x,o.aim.y)*100)} · LOAD ${Math.round(o.pressure*100)}% · HEAT ${Math.round(o.heat*100)}%</p>`}F("interact-button").firstChild.textContent="⌖ "+(this.tool?"HOLD / ALIGN":e.type==="dock"?"RETURN":Tr.has(e.type)?e.type.toUpperCase():"INTERACT")+" "}step(t,e={}){let i=this.mission;if(!i||this.page!=="world"||i.paused||i.failed||i.complete)return;this.ticks++,i.time<(this.slideUntil||0)&&(e={...e,forward:1,sliding:!0});let a={moving:!1};if(this.tool){e.held&&this.ticks%30===0&&xt.spatial(this.tool.task.type,this.tool.targetPoint,.12);let s=this.tool.update(t,e);s&&(this.cancelTool(),this.finish(s))}else a=Ap(N,i,this.motion,e,t,this.yaw);e.sliding&&i.mode==="suit"&&N.play(N.player,"Slide"),Rp(N,i,this.motion,t),yp(N,i,this.motion,t);let r=this.task();if(this.sighting&&r?.type==="bearing"){let s=Math.abs(Math.atan2(Math.sin(this.yaw-r.bearing),Math.cos(this.yaw-r.bearing)));this.sightSeconds=s<.16?this.sightSeconds+t:0,this.ticks%40===0&&et(this.sightSeconds>=1.2?"Bearing locked · press E":"Sight "+(r.bearing===0?"NORTH":"EAST")+" with the camera")}this.panorama&&this.distance()<7&&this.panoramaSet.add((Math.round(this.yaw/(Math.PI*2)*24)%24+24)%24),N.dust=i.index===8?tn(.16+(i.done.includes("beaconC")?.55:0)+i.time*12e-5,0,.91):i.index===9&&i.hazardVersion?.62:0,N.dust>.65&&i.mode==="drone"&&this.switchMode("suit"),i.index===4&&Math.hypot(this.actor().position.x-40,this.actor().position.z+125)<35&&(i.thermal=Math.max(0,i.thermal-t*.18),i.power=Math.max(0,i.power-t*.004),i.thermal<=0&&zl(i,"Volcanic thermal exposure exceeded suit tolerance")),Wl(i,t,{...a,mode:i.mode,running:e.running,cold:i.index===7,dust:N.dust,load:i.flags.payloadMass||0}),this.motion.stepDistance>1.1&&(this.motion.stepDistance=0,xt.spatial("step",N.player.position,.12)),this.ticks%50===0&&this.refreshGuide(),!this.exploration&&Pp(i,this.distance(),i.mode)&&(!N.payload||Math.hypot(N.payload.position.x,N.payload.position.z-8)<15)&&this.finish({payloadHome:!0}),this.ticks%10===0&&this.updateHud(),this.autosave+=t,this.autosave>7&&(this.autosave=0,this.snapshot()),i.failed&&(this.cancelTool(),Mt("EVA interrupted",`<p>${dt(i.failureReason)}.</p><p>Recover from the last secured objective with a reserve pack.</p>`,[["RETRY CHECKPOINT",()=>this.restoreCheckpoint(),!0],["CAMPAIGN",()=>this.navigate("campaign")]]))}renderCrew(){let t=F("crew-picker");t.replaceChildren();for(let[e,i,a]of Qn){let r=document.createElement("button");r.className="crew-card"+(Ue.crew===e?" selected":""),r.style.setProperty("--crew-color",a),r.innerHTML=`<div class="crew-portrait">${this.portraits[e]?`<img src="${this.portraits[e]}" alt="${e} EVA suit">`:""}</div><span>${e}</span><small>${i}</small>`,r.onclick=()=>{Ue.crew=e,ln(),this.renderCrew()},t.append(r)}F("crew-credits").textContent=Ue.credits+" CREDITS",F("vehicle-picker").replaceChildren(...[["atlas","ATLAS-6"],["drone","SKYSCOUT"],["alpha","ALPHA"]].map(([e,i])=>{let a=on(i,()=>{Ue.vehicle=e,ln(),this.renderCrew()});return Ue.vehicle===e&&a.classList.add("selected"),a})),F("loadout-picker").replaceChildren(...Ue.inventory.map(e=>{let i=on(e,()=>{let a=Ue.loadout.indexOf(e);a>=0?Ue.loadout.splice(a,1):Ue.loadout.push(e),ln(),this.renderCrew()});return Ue.loadout.includes(e)&&i.classList.add("selected"),i}))}renderPortraits(){if(Object.keys(this.portraits).length)return;let t=new Sa;t.background=new ze("#14212a"),t.environment=li.environment,t.environmentIntensity=.35,t.add(new Ns("#e9e0d7","#25313b",1));let e=new Ma("#fff2df",2.4);e.position.set(-2,3,4),t.add(e);let i=new Tn(32,220/300,.05,20);i.position.set(.03,1.57,1.7),i.lookAt(0,1.45,0);let a=We.getSize(new gt),r=We.getPixelRatio();We.setPixelRatio(1),We.setSize(220,300,!1),We.setRenderTarget(null);for(let[s]of Qn){let o=N.makeSuit(s);N.actors.remove(o),t.add(o),We.render(t,i),this.portraits[s]=We.domElement.toDataURL("image/png"),t.remove(o)}We.setPixelRatio(r),We.setSize(a.x,a.y,!1),this.renderCrew()}renderCampaign(){F("presenter-tag").classList.toggle("hidden",!Nn),F("missions").replaceChildren(...Dt.map((t,e)=>{let i=document.createElement("button"),a=e>=Ue.unlocked&&!Nn&&!Fn;return i.className="mission-card"+(a?" locked":""),i.innerHTML=`<span class="stage-number">${String(e+1).padStart(2,"0")}</span><small>${dt(t.place)}</small><h3>${t.name}</h3><p>${dt(t.brief)}</p><span>${Ue.completed.includes(e)?"✓ SECURED":a?"LOCKED":"ENTER EXPEDITION →"}</span>`,i.disabled=a,i.onclick=()=>this.startMission(e),i})),F("resume").classList.toggle("hidden",!Ue.active),F("resume").onclick=()=>this.startMission(Ue.active.index,JSON.parse(JSON.stringify(Ue.active)))}renderProfile(){F("profile-body").innerHTML=`<div class="profile-stats"><div><b>${Ue.completed.length}/10</b><span>EXPEDITIONS SECURED</span></div><div><b>${Ue.credits}</b><span>EARNED CREDITS</span></div><div><b>${dt(Ue.crew)}</b><span>ACTIVE CREW</span></div></div>${Ue.completed.length===10?"<h3>MASTER EXPLORER · all expeditions secured</h3>":""}<div class="history">${Ue.history.map(t=>`<article><b>${String(t.index+1).padStart(2,"0")} · ${Dt[t.index].name}</b><span>${Math.round(t.seconds/60)} min · ${t.score} credits · ${t.recoveries} recoveries</span></article>`).join("")||"<p>No secured expeditions yet.</p>"}</div>`}renderShop(){F("shop-credits").textContent=Ue.credits+" CREDITS",F("shop-items").replaceChildren(...Ar.map(t=>{let e=document.createElement("article");e.className="shop-card",e.innerHTML=`<h3>${t.id}</h3><p>${t.desc}</p><small>${t.mass} kg</small>`;let i=on(Ue.inventory.includes(t.id)?"OWNED":t.price+" CREDITS",()=>{ql(Ue,t.id)&&(ln(),this.renderShop())},!0);return i.disabled=Ue.inventory.includes(t.id)||Ue.credits<t.price,e.append(i),e}))}async prepareScience(t){let e=t==="ops"?F("route-region").value:F("region").value,i=e==="JEZERO_CENTER"?0:e==="JEZERO_NORTHWEST"?1:Number(e);await N.setStage(i,Ue.crew),this.invalidateOps(),N.makeGrid(t==="ops"?this.opHazard:0),bt.position.set(60,140,160),bt.lookAt(0,0,0),this.drawScience()}drawMap(t,{center:e={x:0,z:0},span:i=1024,routes:a=[],target:r=null,player:s=!1,layer:o="optical"}={}){let c=t.getContext("2d"),l=t.width,h=f=>[(f.x-e.x)/i*l+l/2,(f.z-e.z)/i*l+l/2];if(c.fillStyle="#352b26",c.fillRect(0,0,l,l),o==="optical"&&N.stage<2)for(let f of N.region.tiles){let[x,M]=h({x:f.tx*256-512,z:f.ty*256-512});c.drawImage(f.image,x,M,256/i*l,256/i*l)}else{let f=96,x=c.createImageData(f,f);for(let S=0;S<f;S++)for(let p=0;p<f;p++){let u=e.x+(p/f-.5)*i,R=e.z+(S/f-.5)*i,b=N.height(u,R),w=N.slope(u,R),P=o==="valid"?N.valid(u,R)?.7:.03:tn(o==="slope"?w*1.8:o==="roughness"?w*.9:.5+b/90,0,1),T=(S*f+p)*4;x.data.set([50+P*145,38+P*115,31+P*82,255],T)}let M=document.createElement("canvas");M.width=M.height=f,M.getContext("2d").putImageData(x,0,0),c.drawImage(M,0,0,l,l)}c.strokeStyle="#d7b99a33",c.lineWidth=1;for(let f=0;f<=4;f++)c.beginPath(),c.moveTo(f*l/4,0),c.lineTo(f*l/4,l),c.moveTo(0,f*l/4),c.lineTo(l,f*l/4),c.stroke();for(let f of a)f?.points?.length&&(c.beginPath(),f.points.forEach((x,M)=>{let[S,p]=h(x);M?c.lineTo(S,p):c.moveTo(S,p)}),c.strokeStyle=f.color||"#88e8de",c.lineWidth=l<300?2:3,c.stroke());if(N.gridVersion>0){let[f,x]=h({x:N.stage===6?-31:16,z:N.stage===6?-69:-70});c.fillStyle="#ef715455",c.beginPath(),c.arc(f,x,13/i*l,0,7),c.fill()}let d=(f,x,M)=>{let[S,p]=h(f);c.fillStyle=x,c.beginPath(),c.arc(S,p,M,0,7),c.fill()};d({x:0,z:8},"#e9e4da",l<300?3:6),r&&d(r,"#efaa73",l<300?4:7);{const[f,x]=h({x:0,z:8});c.fillStyle="#fffaf1",c.font=`bold ${l<300?12:17}px Segoe UI`,c.fillText("H",f+7,x-6)}if(r){const[f,x]=h(r);c.strokeStyle="#ffc076",c.lineWidth=l<300?2:3,c.beginPath(),c.arc(f,x,l<300?8:12,0,Math.PI*2),c.stroke(),c.fillStyle="#ffd6a5",c.font=`bold ${l<300?10:15}px Segoe UI`,c.fillText("TARGET",f+11,x-11)}for(let f of this.mission?.beacons||[])d(f,"#8fe0d8",3);if(s&&this.mission&&!(this.mission.index===8&&this.mission.done.includes("beaconC")&&!this.mission.flags.navigationRestored)){let f=this.actor(),[x,M]=h(f.position);c.save(),c.translate(x,M),c.rotate(f.rotation.y),c.fillStyle="#a6f3ed",c.beginPath(),c.moveTo(0,8),c.lineTo(-5,-5),c.lineTo(5,-5),c.closePath(),c.fill(),c.restore()}c.fillStyle="#ecede8",c.font=`bold ${l<300?13:16}px Segoe UI`,c.fillText("N ↑",12,24),c.font="12px Segoe UI",c.fillText(i.toLocaleString()+" m",12,l-12)}drawScience(){let t=F("layer").value;if(this.page==="atlas"){if(t==="global"){let e=F("atlas-map"),i=e.getContext("2d");i.fillStyle="#101820",i.fillRect(0,0,e.width,e.height),Promise.all(["west","east"].map(a=>new Promise(r=>{let s=new Image;s.onload=()=>r(s),s.onerror=()=>r(null),s.src="./nasa/trek_"+a+".jpg"}))).then(a=>a.forEach((r,s)=>{r&&i.drawImage(r,s*450,225,450,450)})),F("layer-status").textContent="NASA Mars Trek · MGS MOLA global color hillshade, 463 m source product. Global context; not a local traversability map.",F("map-name").textContent="MARS TREK / MOLA GLOBAL";return}F("layer-status").textContent=["mineral","thermal"].includes(t)?"No calibrated CRISM / THEMIS coverage bundled here. Mineral and thermal observations are unavailable; no measured result is inferred.":N.stage<2?"NASA-derived DTM + optical subset. 2 m processed height grid; display tint and microdetail are modeled.":"Reconstructed scenario geography. Heights, weather and material classifications are modeled.",F("map-name").textContent=N.stage<2?N.regionId+" / METRIC FRAME":Dt[N.stage].place.toUpperCase()+" / MODELED",this.drawMap(F("atlas-map"),{layer:["mineral","thermal"].includes(t)?"valid":t,target:this.target})}else this.drawMap(F("ops-map"),{routes:this.opRoutes.map(e=>({...e.out,color:e.mode==="safe"?"#8af3dd":e.mode==="fast"?"#f4a56e":"#adb9f3"})),target:this.target})}invalidateOps(){this.opRoutes=[],this.plan=null,F("execute").disabled=!0,F("route-results").replaceChildren(),F("ops-explanation").textContent="Target or constraints changed · compare routes"}async calculateOps(){N.stage>1&&await this.prepareScience("ops");let t={north:{x:0,z:-120},east:{x:100,z:-70},west:{x:-110,z:-80}};this.target=t[F("route-target").value]||this.target,N.opsRiskZone=this.opHazard>0?{x:16,z:-70,r:40}:null,N.makeGrid(this.opHazard);let e={evaMinutes:+F("eva-budget").value,reserveMinutes:+F("reserve-budget").value,oxygenMinutes:+F("oxygen-budget").value,powerWh:+F("energy-budget").value,radiationBudget:+F("radiation-budget").value};this.opRoutes=["fast","safe","reserve"].map(i=>{let a=N.path({x:0,z:-4},this.target,i),r=N.path(this.target,{x:0,z:-4},i),s=a&&r?Sp(a.stats,r.stats,e):{feasible:!1,reasons:["No traversable route"]};return{mode:i,out:a,back:r,budget:s}}),this.plan=null,F("execute").disabled=!0,F("ops-explanation").textContent="Select a feasible route · cyan safer / orange shortest / violet reserve",F("route-results").replaceChildren(...this.opRoutes.map(i=>{let a=on((i.mode==="fast"?"SHORTEST":i.mode.toUpperCase())+" · "+(i.budget.feasible?"FEASIBLE":"REJECTED"),()=>{this.plan=i,F("execute").disabled=!1;for(let s of F("route-results").children)s.classList.remove("selected");a.classList.add("selected"),F("ops-explanation").textContent=`${i.mode==="fast"?"SHORTEST":i.mode.toUpperCase()} · ${Math.round(i.out.stats.meters+i.back.stats.meters)} m round trip · ${i.mode==="safe"?"Penalizes measured slope/roughness and modeled hazard exposure; may use more time/energy.":"Distance baseline / reserve trade-off."}`,this.drawScience()}),r=document.createElement("p");return r.className="subtle",r.textContent=i.out&&i.back?`${Math.round(i.out.stats.meters+i.back.stats.meters)} m · ${i.budget.totalMinutes?.toFixed(1)||"—"} min incl. 8 min science · ${i.out.stats.meanSpeedMps.toFixed(2)} m/s estimated · slope ≤${Math.max(i.out.stats.maxSlopeDeg,i.back.stats.maxSlopeDeg).toFixed(1)}° · O₂ ${i.budget.oxygenMinutes?.toFixed(1)||"—"} min · ${i.budget.energyWh?.toFixed(1)||"—"} Wh · reserve ${i.budget.returnReserveMinutes??"—"} min · modeled hazard ${Math.round(i.out.stats.hazardMeters+i.back.stats.hazardMeters)} m · dose ${i.budget.radiationDose?.toFixed(3)||"—"} mSv · ${i.budget.reasons?.join(" · ")||"Budgets satisfied"}`:"No connected path within coverage / slope limits",a.append(r),a.disabled=!i.budget.feasible,a})),this.drawScience()}async explore(t=!1){let e=N.stage;this.cancelTool(),this.page="world",this.exploration=!0,this.mission=br(e,Ue.crew,Ue.loadout),this.motion=na(),this.yaw=0,this.returning=!1,document.querySelectorAll(".page").forEach(i=>i.classList.add("hidden")),F("world-ui").classList.remove("hidden"),F("pause").classList.remove("hidden"),document.body.classList.add("playing"),ns(N),t&&this.plan&&(this.mission.hazardVersion=this.opHazard,this.routeMode=this.plan.mode,N.player.position.set(0,N.height(0,-4),-4),N.guide(this.plan.out.points)),this.refreshGuide(!0),this.updateCamera(1),this.updateHud(),et(N.stage<2?"NASA-derived Jezero terrain · free exploration":"Modeled mission environment · free exploration")}sourceDetails(){Mt("Scientific provenance",'<p>Stages 01–02 use the supplied Jezero DTM / optical subsets: 32 processed tiles, 2 m height samples. NoData is excluded from navigation. Image tint, PBR microdetail, rocks, structures and lighting are reconstructed.</p><p>Stages 03–10 use modeled, geographically inspired environments. Frost, temperature, dust, slip, instrument responses and budgets are scenario models. They are not live NASA observations.</p><p>The A* planner uses 4 m cells, slope limits, obstacle exclusions and modeled return reserves. Publisher alignment and raw DTM registration have not been independently revalidated here.</p><p><a href="https://trek.nasa.gov/mars/" target="_blank" rel="noreferrer">NASA Mars Trek</a> · <a href="https://pds-atmospheres.nmsu.edu/data_and_services/atmospheres_data/PERSEVERANCE/meda.html" target="_blank" rel="noreferrer">PDS MEDA archive</a></p>',[["NASA OBSERVATIONS",()=>this.nasaEvidence()],["PLAY HISTORICAL MARS AUDIO",async()=>{await xt.start(),xt.historical?.(),$e()}],["CLOSE",$e,!0]])}async nasaEvidence(){Mt("NASA data connections","<p>Loading public NASA records…</p>",[["CLOSE",$e]]);try{let t=await fetch("/api/nasa/catalog").then(r=>{if(!r.ok)throw Error("offline");return r.json()}),e=await fetch("/api/nasa/environment").then(r=>r.json()).catch(()=>null),i=await fetch("/api/nasa/orbit").then(r=>r.json()).catch(()=>null),a=await fetch("/api/nasa/insight").then(r=>r.json()).catch(()=>null);F("modal-body").innerHTML=`<p>${dt(t.mode||"cached")} · NASA Images API · historical imagery, not gameplay evidence.</p><div class="nasa-images">${(t.items||[]).slice(0,2).map(r=>`<figure><img src="${dt(r.local||r.preview||"")}" alt="${dt(r.title)}"><figcaption>${dt(r.title)} · ${dt(r.credit)} · ${dt(r.date)}</figcaption></figure>`).join("")}</div><p>${dt(e?.summary||"Historical environmental product metadata available in the offline NASA bundle.")}</p><p>${dt(e?.measurementLabel||"No live weather feed is claimed.")}</p>${e?.windSpeedRange?`<p>Sol ${e.sol} · ${e.earthDate} · ${e.validStationaryRecords.toLocaleString()} valid stationary records. Horizontal wind: ${e.windSpeedRange[0]}–${e.windSpeedRange[1]} m/s; median ${e.windSpeedMedian} m/s.</p><p class="subtle">${dt(e.filter)}</p>`:""}${a?.data?.sol_keys?.length?`<p>InSight · ${dt(a.mode)} · ${a.data.sol_keys.length} historical sols. Last available record: ${dt(a.data[a.data.sol_keys.at(-1)]?.First_UTC||"date unavailable")}. NASA archive retrieval is separate from modeled game weather.</p>`:""}${i?.sunMarsDistanceAU?`<p>JPL Horizons · ${i.epoch}: Sun–Mars ${i.sunMarsDistanceAU.toFixed(4)} AU. Sun-centered J2000 vectors; the game sky remains illustrative.</p>`:""}`}catch{let t=await fetch("./nasa/catalog.json").then(e=>e.json()).catch(()=>({items:[]}));F("modal-body").innerHTML="<p>Offline NASA snapshot · no live feed. Public endpoints can be enabled with the included Python server.</p>"+t.items?.slice(0,2).map(e=>`<p>${dt(e.title)} · ${dt(e.credit)}</p>`).join("")}}settings(){let t=Ue.settings;Mt("Experience settings",'<div id="settings-fields"></div><p class="subtle">Outside sound is muted for a thin-atmosphere interpretation. Helmet mode uses authored suit/contact cues. Historical NASA audio is played separately.</p>',[["SAVE SETTINGS",()=>{for(let i of document.querySelectorAll("[data-setting]"))t[i.dataset.setting]=i.type==="range"?Number(i.value):i.value;xt.settings={...t},We.setPixelRatio(Math.min(devicePixelRatio,t.quality==="high"?1.5:t.quality==="balanced"?1:.75)),We.shadowMap.enabled=t.quality!=="low",xt.applyMix(),ln(),$e()},!0],["VR EXPLORATION",()=>{if(!navigator.xr){et("WebXR unavailable in this browser");return}let i=Vn.createButton(We);F("modal-actions").append(i)}]]);let e=F("settings-fields");e.innerHTML='<label>GRAPHICS<select data-setting="quality"><option>high</option><option>balanced</option><option>low</option></select></label><label>AUDIO MODE<select data-setting="mode"><option>helmet</option><option>outside</option><option>cinematic</option></select></label>';for(let i of["master","environment","vehicle","suit","ui","radio","music"])e.innerHTML+=`<label>${i.toUpperCase()}<input data-setting="${i}" type="range" min="0" max="1" step=".05" value="${t[i]}"></label>`;for(let i of e.querySelectorAll("select"))i.value=t[i.dataset.setting]}useBattery(){let t=this.mission;t&&t.loadout.includes("Battery Pack")&&!t.flags.reserveCellUsed?(t.power=Math.min(100,t.power+25/180*100),t.flags.reserveCellUsed=!0,et("Reserve pack connected · 25 Wh")):et("Equip an unused Battery Pack before EVA")}}const O=new Up;window.ARES=O;document.querySelectorAll("[data-page]").forEach(n=>n.onclick=()=>O.navigate(n.dataset.page));F("start").onclick=()=>O.navigate("crew");F("crew-continue").onclick=()=>O.navigate("campaign");F("modal-close").onclick=$e;F("pause").onclick=()=>O.pause();F("settings").onclick=()=>O.settings();F("interact-button").onpointerdown=n=>{n.preventDefault(),Fi=!0,O.interact()};for(let n of["pointerup","pointercancel","pointerleave"])F("interact-button").addEventListener(n,()=>Fi=!1);F("rover-button").onclick=()=>O.vehicleMenu();F("slide-button").onclick=()=>{O.mission?.mode==="suit"&&(O.actor().userData.speed||0)>1?(O.slideUntil=O.mission.time+.8,O.crouch=!1):O.crouch=!O.crouch,F("slide-button").classList.toggle("selected",!!O.crouch)};F("jump-button").onclick=()=>ci=!0;for(let[n,t]of[["drone-up",1],["drone-down",-1]]){F(n).onpointerdown=()=>yi=t;for(let e of["pointerup","pointercancel","pointerleave"])F(n).addEventListener(e,()=>yi=0)}F("run-button").onpointerdown=()=>Oi=!0;for(let n of["pointerup","pointercancel","pointerleave"])F("run-button").addEventListener(n,()=>Oi=!1);F("sound").onclick=async()=>{xt.enabled?(xt.enabled=!1,xt.suspend(),F("sound").classList.remove("selected")):(await xt.start(),xt.settings={...Ue.settings},F("sound").classList.add("selected"))};function di(){if(!O.mission)return;Cn(),O.mission.paused=!0,F("map-overlay").classList.remove("hidden"),O.drawMap(F("map-large"),{span:520,routes:[O.guide],target:O.returning?{x:0,z:8}:O.task(),player:!0});const n=O.task();F("map-explanation").textContent=`NEXT: ${Xs(n)} · ${Aa(n,O.mission)}. Cyan line = planned route. Cyan triangle = player. H = habitat. Orange ring = target. `+(O.guide?.stats?`${Math.round(O.guide.stats.meters)} m route · ${Math.ceil(O.guide.stats.seconds/60)} min estimated · ${N.stage<2?"NASA-derived terrain":"modeled terrain"}`:"No safe route found: backtrack or choose a different route.")}function Ks(){F("map-overlay").classList.add("hidden"),O.mission&&(O.mission.paused=!1),Cn()}F("guide-button").onclick=()=>{const n=O.task(),t=O.mission;!n||!t||Mt("How to complete this mission",`<p><b>Current target:</b> ${dt(Xs(n))}</p><p>${dt(Aa(n,t))}</p><p>1. Follow the cyan route and orange TARGET marker on the upper-right minimap. Your current position is the cyan triangle.</p><p>2. On arrival, use INTERACT (E) or the indicated tool/vehicle to perform the objective. Some tools require holding E, aligning with arrow keys or using mouse drag.</p><p>3. Your next objective appears automatically. Press MAP (M) at any point for a larger route map. You can switch to a lower-risk route there.</p><p>4. After all tasks, follow the route marked H back to the habitat. Walk inside the landing zone; mission completes automatically and the next stage unlocks.</p><p>Controls: WASD / right joystick move · mouse drag rotate · Shift run · Space jump · R change robot · M map · Esc pause.</p>${Nn?"<p><b>LOCAL PRESENTER MODE:</b> All ten stages are selectable for recording; normal player progress stays separate. This is not an online admin login.</p>":""}`,[["SHOW MAP",()=>{$e(),di()},!0],["CONTINUE PLAYING",$e]])};F("map-button").onclick=di;F("map-close").onclick=Ks;F("safe-route").onclick=()=>{O.routeMode="safe",O.returning=!1,O.refreshGuide(!0),di()};F("direct-route").onclick=()=>{O.routeMode="fast",O.returning=!1,O.refreshGuide(!0),di()};F("return-route").onclick=()=>{Ks(),O.emergencyPlan(O.task()?.type==="replan")};F("region").onchange=()=>O.prepareScience("atlas");F("layer").onchange=()=>O.drawScience();F("route-region").onchange=()=>O.prepareScience("ops");F("route-target").onchange=()=>{O.target={north:{x:0,z:-120},east:{x:100,z:-70},west:{x:-110,z:-80}}[F("route-target").value]||O.target,O.invalidateOps(),O.drawScience()};for(let n of["eva-budget","reserve-budget","oxygen-budget","energy-budget","radiation-budget"])F(n).oninput=()=>O.invalidateOps();F("ops-demo").onclick=()=>{O.opHazard=1,F("route-target").value="north",O.calculateOps()};F("calculate").onclick=()=>O.calculateOps();F("execute").onclick=()=>{O.plan?.budget.feasible&&O.explore(!0)};F("ops-emergency").onclick=()=>{O.opHazard++,N.makeGrid(O.opHazard),O.calculateOps()};F("sources").onclick=()=>O.sourceDetails();F("ops-sources").onclick=()=>O.sourceDetails();F("nasa-evidence").onclick=()=>O.nasaEvidence();F("explore").onclick=()=>O.explore();for(let n of["atlas-map","ops-map"])F(n).onclick=t=>{let e=t.currentTarget.getBoundingClientRect();O.target={x:(t.clientX-e.left)/e.width*1024-512,z:(t.clientY-e.top)/e.height*1024-512},F("map-readout").textContent=`E ${Math.round(O.target.x)} m · S ${Math.round(O.target.z)} m · ${N.valid(O.target.x,O.target.z)?"valid cell":"NoData / outside bounds"}`,n==="ops-map"&&(F("route-target").value="custom",O.invalidateOps()),O.drawScience()};F("export-save").onclick=()=>{let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([JSON.stringify(Ue,null,2)],{type:"application/json"})),n.download="ARES_PATHFINDER_SAVE.json",n.click(),URL.revokeObjectURL(n.href)};F("import-save").onchange=async n=>{try{let t=JSON.parse(await n.target.files[0].text());if(t.version!==3)throw Error("Save version mismatch");Object.assign(Ue,Gl(t)),ln(),O.renderProfile()}catch(t){Mt("Save import rejected","<p>"+dt(t.message)+"</p>",[["CLOSE",$e]])}};window.addEventListener("keydown",n=>{let t=n.key.toLowerCase();["INPUT","SELECT","TEXTAREA"].includes(n.target.tagName)||([" ","arrowup","arrowdown","arrowleft","arrowright"].includes(t)&&n.preventDefault(),Rt.add(t),!n.repeat&&(t==="escape"&&(O.modalOpen?$e():O.pause()),!(O.page!=="world"||O.modalOpen)&&(t==="e"&&O.interact(),t==="r"&&O.vehicleMenu(),t==="m"&&di(),t===" "&&(ci=!0),t==="c"&&F("slide-button").click(),t==="h"&&O.heaterMenu(),t==="t"&&(O.mission.traction=!O.mission.traction,et("Traction "+(O.mission.traction?"ON":"OFF"))),t==="f"&&(O.motion.follow=!O.motion.follow,O.mission.flags.follow=O.motion.follow,et(O.motion.follow?"Robots following leader":"Robots holding position")),t==="b"&&O.useBattery(),["1","2","3","4"].includes(t)&&O.switchMode(["suit","atlas","drone","alpha"][+t-1]))))});window.addEventListener("keyup",n=>Rt.delete(n.key.toLowerCase()));window.addEventListener("blur",()=>{Cn(),O.page==="world"&&!Fn&&!O.modalOpen&&O.pause()});let wi=null;const ri=F("joystick");function qs(n){let t=ri.getBoundingClientRect(),e=t.width/2,i=(n.clientX-t.left-e)/e,a=(n.clientY-t.top-e)/e,r=Math.max(1,Math.hypot(i,a));yn={x:i/r,y:-a/r},F("knob").style.transform=`translate(${yn.x*e*.48}px,${-yn.y*e*.48}px)`}ri.onpointerdown=n=>{wi=n.pointerId,ri.setPointerCapture(wi),qs(n)};ri.onpointermove=n=>{n.pointerId===wi&&qs(n)};for(let n of["pointerup","pointercancel"])ri.addEventListener(n,()=>{wi=null,yn={x:0,y:0},F("knob").style.transform="translate(0,0)"});We.domElement.onpointerdown=n=>{O.page==="world"&&(en={id:n.pointerId,x:n.clientX,y:n.clientY},We.domElement.setPointerCapture(n.pointerId))};We.domElement.onpointermove=n=>{if(!en||en.id!==n.pointerId)return;let t=n.clientX-en.x,e=n.clientY-en.y;en.x=n.clientX,en.y=n.clientY,O.tool?(O.tool.aim.x=tn(O.tool.aim.x+t*.002,-.75,.75),O.tool.aim.y=tn(O.tool.aim.y-e*.002,-.75,.75)):(O.yaw-=t*.004,O.pitch=tn(O.pitch+e*.004,-.05,1.05))};We.domElement.onpointerup=()=>en=null;We.domElement.onpointercancel=()=>en=null;We.domElement.onwheel=n=>{O.page==="world"&&(O.cameraDistance=tn(O.cameraDistance+n.deltaY*.008,3.2,14))};function Np(){return{forward:(Rt.has("w")?1:0)-(Rt.has("s")?1:0)+yn.y,side:(Rt.has("d")?1:0)-(Rt.has("a")?1:0)+yn.x,running:Oi||Rt.has("shift"),crouch:O.crouch,jump:ci,ascend:(Rt.has("q")?1:0)-(Rt.has("z")?1:0)+yi,held:Fi||Rt.has("e"),aimX:(Rt.has("arrowright")?1:0)-(Rt.has("arrowleft")?1:0),aimY:(Rt.has("arrowup")?1:0)-(Rt.has("arrowdown")?1:0)}}window.addEventListener("resize",()=>{bt.aspect=innerWidth/innerHeight,bt.updateProjectionMatrix(),We.setSize(innerWidth,innerHeight)});window.addEventListener("beforeunload",()=>O.snapshot());let is=performance.now(),as=0;We.setAnimationLoop(n=>{let t=(n-is)/1e3,e=Math.min(.05,Math.max(0,t));if(is=n,!O.worldReady)return;O.elapsed+=e,O.frameTimes.length<600&&O.frameTimes.push(t),O.qaDriving||(O.step(e,Np()),ci=!1),O.page==="home"&&(N.atlas.position.set(-2.8+Math.sin(n*2e-4)*.35,N.height(-2.8,-14),-14),N.atlas.rotation.y=-.5,O.homeCamera()),O.page==="world"&&O.updateCamera(e);let i=O.page==="world"&&O.mission?O.actor().position:null;if(N.animate(e,n*.001,O.page==="home",i),xt.enabled&&xt.listener(bt),xt.enabled&&O.mission&&O.page==="world"&&N.player&&Math.floor(n/500)!==O.lastSpatial&&(O.lastSpatial=Math.floor(n/500),Math.abs(N.atlas.userData.speed||0)>.1&&xt.spatial("rover",N.atlas.position,.15),N.drone.position.y-N.height(N.drone.position.x,N.drone.position.z)>1&&xt.spatial("drone",N.drone.position,.1)),xt.enabled&&O.mission&&O.page==="world"&&N.player&&xt.update?.({stage:O.mission.index,rover:O.mission.mode==="atlas",moving:Math.abs(O.actor()?.userData.speed||0)>.1,storm:N.dust,playerX:N.player.position.x,roverX:N.atlas.position.x,distance:N.atlas.position.distanceTo(N.player.position),oxygen:O.mission.oxygen}),n>as&&O.page==="world"){let a=O.actor().position;const r=O.returning?{x:0,z:8}:O.task(),s=r?Math.hypot(a.x-r.x,a.z-r.z):0;O.drawMap(F("mini"),{center:{x:a.x,z:a.z},span:Math.max(160,Math.min(750,s*2.65)),routes:[O.guide],target:r,player:!0}),F("heading").textContent=["N","NE","E","SE","S","SW","W","NW"][(Math.round(-O.yaw/(Math.PI/4))%8+8)%8],as=n+250}We.render(li,bt)});try{await N.init((n,t)=>{F("load-bar").style.width=n*100+"%",F("loading-label").textContent=t}),await N.setStage(-1),O.homeCamera(),O.worldReady=!0,F("loading").classList.add("hidden"),Fn?(await Ua(()=>import("./runtime_qa-DwhR1-oG.js"),__vite__mapDeps([0,1,2]))).installQA(O):["localhost","127.0.0.1","[::1]"].includes(location.hostname)&&new URLSearchParams(location.search).has("audit")&&(await Ua(()=>import("./submission_audit-t-7n-aoW.js"),__vite__mapDeps([3,4,1]))).runSubmissionAudit(O)}catch(n){Ip(n.stack||n),F("loading").classList.add("hidden")}
