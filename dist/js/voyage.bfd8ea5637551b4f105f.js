!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://raddeana-admin.oss-cn-hangzhou.aliyuncs.com/",n(n.s="KzPL")}({KzPL:function(e,t){var n=window.THREE,i=window.WEBGL;!1===i.isWebGLAvailable()&&document.body.appendChild(i.getWebGLErrorMessage());var o=void 0,r=void 0,a=void 0,u=void 0,d=void 0,s=void 0,l=void 0;function c(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)}!function(){o=document.getElementById("container"),(u=new n.WebGLRenderer).setPixelRatio(window.devicePixelRatio),u.setSize(window.innerWidth,window.innerHeight),o.appendChild(u.domElement),a=new n.Scene,(r=new n.PerspectiveCamera(55,window.innerWidth/window.innerHeight,1,2e4)).position.set(30,30,100),d=new n.DirectionalLight(16777215,.8),a.add(d);var e=new n.PlaneBufferGeometry(1e4,1e4);(l=new n.Water(e,{textureWidth:512,textureHeight:512,waterNormals:(new n.TextureLoader).load("https://raddeana-materials.oss-cn-hangzhou.aliyuncs.com/images/chartlets/waternormals.jpg",function(e){e.wrapS=e.wrapT=n.RepeatWrapping}),alpha:1,sunDirection:d.position.clone().normalize(),sunColor:16777215,waterColor:7695,distortionScale:3.7,fog:void 0!==a.fog})).rotation.x=-Math.PI/2,a.add(l);var t=new n.Sky;t.scale.setScalar(1e4),a.add(t);var i=t.material.uniforms;i.turbidity.value=10,i.rayleigh.value=2,i.luminance.value=1,i.mieCoefficient.value=.005,i.mieDirectionalG.value=.8;var p={distance:400,inclination:.49,azimuth:.205},f=new n.CubeCamera(1,2e4,256);f.renderTarget.texture.generateMipmaps=!0,f.renderTarget.texture.minFilter=n.LinearMipMapLinearFilter,m=Math.PI*(p.inclination-.5),w=2*Math.PI*(p.azimuth-.5),d.position.x=p.distance*Math.cos(w),d.position.y=p.distance*Math.sin(w)*Math.sin(m),d.position.z=p.distance*Math.sin(w)*Math.cos(m),t.material.uniforms.sunPosition.value=d.position.copy(d.position),l.material.uniforms.sunDirection.value.copy(d.position).normalize(),f.update(u,a);var m,w;for(var h=new n.IcosahedronBufferGeometry(20,1),v=h.attributes.position.count,g=[],b=new n.Color,y=0;y<v;y+=3)b.setHex(16777215*Math.random()),g.push(b.r,b.g,b.b),g.push(b.r,b.g,b.b),g.push(b.r,b.g,b.b);h.addAttribute("color",new n.Float32BufferAttribute(g,3)),(s=new n.OrbitControls(r,u.domElement)).maxPolarAngle=.495*Math.PI,s.target.set(0,10,0),s.minDistance=40,s.maxDistance=200,r.lookAt(s.target),window.addEventListener("resize",c,!1)}(),function e(){l.material.uniforms.time.value+=1/60;requestAnimationFrame(e);u.render(a,r)}()}})});
//# sourceMappingURL=voyage.bfd8ea5637551b4f105f.js.map