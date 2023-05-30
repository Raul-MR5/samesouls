"use strict";(self.webpackChunkprueba=self.webpackChunkprueba||[]).push([[592],{3870:(f,l,n)=>{n.d(l,{a:()=>d});var o=n(5e3),i=n(6115),u=n(629);let d=(()=>{class s{constructor(e,r){this.router=e,this.authService=r}canActivate(){return this.authService.authenticated().subscribe(e=>(e||this.router.navigate(["/login"]),this.authService.authenticated())),this.authService.authenticated()}}return s.\u0275fac=function(e){return new(e||s)(o.LFG(i.F0),o.LFG(u.e))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},364:(f,l,n)=>{n.d(l,{n:()=>d});var o=n(5861),i=n(5e3),u=n(7407);let d=(()=>{class s{constructor(e){this.firestore=e}getAll(){return this.firestore.collection("banner_photos").valueChanges({idField:"id"})}getAllMatches(e){return this.firestore.collection("banner_photos",r=>r.startAt(e).endAt(e+"\uf8ff")).valueChanges({idField:"id"})}getOne(e){return this.firestore.collection("banner_photos").doc(e).valueChanges({idField:"id"})}getByType(e){return this.firestore.collection("banner_photos",r=>r.where("type.name","==",e)).valueChanges({idField:"id"})}setBannerPhotos(e){this.bannerPhotos=e}getBannerPhotos(){return this.bannerPhotos}create(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("banner_photos").doc(e.id).set(e)}catch(t){return t}})()}update(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("banner_photos").doc(e.id).update(Object.assign({},e))}catch(t){return t}})()}delete(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("banner_photos").doc(e).delete()}catch(t){return t}})()}}return s.\u0275fac=function(e){return new(e||s)(i.LFG(u.ST))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},2368:(f,l,n)=>{n.d(l,{S:()=>d});var o=n(5861),i=n(5e3),u=n(7407);let d=(()=>{class s{constructor(e){this.firestore=e}getAll(){return this.firestore.collection("genres",e=>e.orderBy("code")).valueChanges({idField:"id"})}getAllMatches(e){return this.firestore.collection("genres",r=>r.orderBy("code").startAt(e).endAt(e+"\uf8ff")).valueChanges({idField:"id"})}getOne(e){return this.firestore.collection("genres").doc(e).valueChanges({idField:"id"})}getByCode(e){return this.firestore.collection("genres",r=>r.where("code","==",e)).valueChanges({idField:"id"})}setGenre(e){this.genre=e}getGenre(){return this.genre}create(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("genres").doc(e.id).set(e)}catch(t){return t}})()}update(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("genres").doc(e.id).update(Object.assign({},e))}catch(t){return t}})()}delete(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("genres").doc(e).delete()}catch(t){return t}})()}}return s.\u0275fac=function(e){return new(e||s)(i.LFG(u.ST))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},2436:(f,l,n)=>{n.d(l,{t:()=>d});var o=n(5861),i=n(5e3),u=n(7407);let d=(()=>{class s{constructor(e){this.firestore=e}getAll(){return this.firestore.collection("merchandising").valueChanges({idField:"id"})}getAllMatches(e){return this.firestore.collection("merchandising",r=>r.startAt(e).endAt(e+"\uf8ff")).valueChanges({idField:"id"})}getAllOrdered(){return this.firestore.collection("merchandising",e=>e.orderBy("product.name")).valueChanges({idField:"id"})}getOne(e){return this.firestore.collection("merchandising").doc(e).valueChanges({idField:"id"})}getStock(){return this.firestore.collection("merchandising",e=>e.where("stock",">","0")).valueChanges({idField:"id"})}getOutStock(){return this.firestore.collection("merchandising",e=>e.where("stock","==","0")).valueChanges({idField:"id"})}setMerchandising(e){this.merchandising=e}getMerchandising(){return this.merchandising}create(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("merchandising").doc(e.id).set(e)}catch(t){return t}})()}update(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("merchandising").doc(e.id).update(Object.assign({},e))}catch(t){return t}})()}delete(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("merchandising").doc(e).delete()}catch(t){return t}})()}}return s.\u0275fac=function(e){return new(e||s)(i.LFG(u.ST))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},887:(f,l,n)=>{n.d(l,{S:()=>d});var o=n(5861),i=n(5e3),u=n(7407);let d=(()=>{class e{constructor(t){this.firestore=t}getAll(){return this.firestore.collection("product_photos").valueChanges({idField:"id"})}getAllMatches(t){return this.firestore.collection("product_photos",g=>g.startAt(t).endAt(t+"\uf8ff")).valueChanges({idField:"id"})}getOne(t){return this.firestore.collection("product_photos").doc(t).valueChanges({idField:"id"})}getOrderedTypeName(){return this.firestore.collection("product_photos",t=>t.orderBy("photo_type.name")).valueChanges({idField:"id"})}setProductPhotos(t){this.product_photos=t}getProductPhotos(){return this.product_photos}create(t){var g=this;return(0,o.Z)(function*(){try{return yield g.firestore.collection("product_photos").doc(t.id).set(t)}catch(h){return h}})()}update(t){var g=this;return(0,o.Z)(function*(){try{return yield g.firestore.collection("product_photos").doc(t.id).update(Object.assign({},t))}catch(h){return h}})()}delete(t){var g=this;return(0,o.Z)(function*(){try{return yield g.firestore.collection("product_photos").doc(t).delete()}catch(h){return h}})()}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(u.ST))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},2019:(f,l,n)=>{n.d(l,{g:()=>d});var o=n(5861),i=n(5e3),u=n(7407);let d=(()=>{class s{constructor(e){this.firestore=e}getAll(){return this.firestore.collection("release_types",e=>e.orderBy("type")).valueChanges({idField:"id"})}getAllMatches(e){return this.firestore.collection("release_types",r=>r.orderBy("type").startAt(e).endAt(e+"\uf8ff")).valueChanges({idField:"id"})}getOne(e){return this.firestore.collection("release_types").doc(e).valueChanges({idField:"id"})}getByType(e){return this.firestore.collection("release_types",r=>r.where("type","==",e)).valueChanges({idField:"id"})}setReleaseType(e){this.release_type=e}getReleaseType(){return this.release_type}create(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("release_types").doc(e.doc_id).set(e)}catch(t){return t}})()}update(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("release_types").doc(e.doc_id).update(Object.assign({},e))}catch(t){return t}})()}delete(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("release_types").doc(e).delete()}catch(t){return t}})()}}return s.\u0275fac=function(e){return new(e||s)(i.LFG(u.ST))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},7488:(f,l,n)=>{n.d(l,{R:()=>d});var o=n(5861),i=n(5e3),u=n(7407);let d=(()=>{class s{constructor(e){this.firestore=e}getAll(){return this.firestore.collection("releases",e=>e.orderBy("title")).valueChanges({idField:"id"})}getAllMatches(e){return this.firestore.collection("releases",r=>r.orderBy("title").startAt(e).endAt(e+"\uf8ff")).valueChanges({idField:"id"})}getOne(e){return this.firestore.collection("releases").doc(e).valueChanges({idField:"id"})}setRelease(e){this.release=e}getRelease(){return this.release}create(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("releases").doc(e.id).set(e)}catch(t){return t}})()}update(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("releases").doc(e.id).update(Object.assign({},e))}catch(t){return t}})()}delete(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("releases").doc(e).delete()}catch(t){return t}})()}}return s.\u0275fac=function(e){return new(e||s)(i.LFG(u.ST))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},9958:(f,l,n)=>{n.d(l,{d:()=>d});var o=n(5861),i=n(5e3),u=n(7407);let d=(()=>{class s{constructor(e){this.firestore=e}getAll(){return this.firestore.collection("sizes").valueChanges({idField:"id"})}getAllMatches(e){return this.firestore.collection("sizes",r=>r.startAt(e).endAt(e+"\uf8ff")).valueChanges({idField:"id"})}getOne(e){return this.firestore.collection("sizes").doc(e).valueChanges({idField:"id"})}getBySize(e){return this.firestore.collection("sizes",r=>r.where("size","==",e)).valueChanges({idField:"id"})}setSize(e){this.size=e}getSize(){return this.size}create(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("sizes").doc(e.doc_id).set(e)}catch(t){return t}})()}update(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("sizes").doc(e.doc_id).update(Object.assign({},e))}catch(t){return t}})()}delete(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("sizes").doc(e).delete()}catch(t){return t}})()}}return s.\u0275fac=function(e){return new(e||s)(i.LFG(u.ST))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},1411:(f,l,n)=>{n.d(l,{e:()=>d});var o=n(5861),i=n(5e3),u=n(7407);let d=(()=>{class s{constructor(e){this.firestore=e}getAll(){return this.firestore.collection("songs",e=>e.orderBy("title")).valueChanges({idField:"id"})}getAllMatches(e){return this.firestore.collection("songs",r=>r.orderBy("title").startAt(e).endAt(e+"\uf8ff")).valueChanges({idField:"id"})}getOne(e){return this.firestore.collection("songs").doc(e).valueChanges({idField:"id"})}getByArtist(e){return this.firestore.collection("songs",r=>r.where("release.artist.username","==",e).limit(5)).valueChanges({idField:"id"})}setSong(e){this.song=e}getSong(){return this.song}playSong(e){this.audio=e,this.audio.currentTime=0,this.audio.play()}pauseSong(){this.audio&&(console.log(this.audio),this.audio.pause())}create(e){var r=this;return(0,o.Z)(function*(){try{console.log("payload",e);const t=yield r.firestore.collection("songs").doc(e.id).set(e);return console.log("res",t),t}catch(t){return console.log("err",t),t}})()}update(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("songs").doc(e.id).update(Object.assign({},e))}catch(t){return t}})()}delete(e){var r=this;return(0,o.Z)(function*(){try{return yield r.firestore.collection("songs").doc(e).delete()}catch(t){return t}})()}}return s.\u0275fac=function(e){return new(e||s)(i.LFG(u.ST))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},1042:(f,l,n)=>{n.d(l,{Z:()=>m});var o,i=new Uint8Array(16);function u(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(i)}const d=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,_=function s(c){return"string"==typeof c&&d.test(c)};for(var e=[],r=0;r<256;++r)e.push((r+256).toString(16).substr(1));const m=function h(c,a,v){var y=(c=c||{}).random||(c.rng||u)();if(y[6]=15&y[6]|64,y[8]=63&y[8]|128,a){v=v||0;for(var p=0;p<16;++p)a[v+p]=y[p];return a}return function t(c){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,v=(e[c[a+0]]+e[c[a+1]]+e[c[a+2]]+e[c[a+3]]+"-"+e[c[a+4]]+e[c[a+5]]+"-"+e[c[a+6]]+e[c[a+7]]+"-"+e[c[a+8]]+e[c[a+9]]+"-"+e[c[a+10]]+e[c[a+11]]+e[c[a+12]]+e[c[a+13]]+e[c[a+14]]+e[c[a+15]]).toLowerCase();if(!_(v))throw TypeError("Stringified UUID is invalid");return v}(y)}}}]);