"use strict";(self.webpackChunkprueba=self.webpackChunkprueba||[]).push([[19],{9019:(P,C,a)=>{a.r(C),a.d(C,{NuevaCancionModule:()=>J});var d=a(9808),g=a(5861),_=a(1042),x=a(5226),T=a.n(x),e=a(5e3),r=a(2382),b=a(629),y=a(3632),M=a(1411),Z=a(7488),w=a(2019),N=a(1962),p=a(6115);function A(i,s){if(1&i&&(e.TgZ(0,"div",24)(1,"div",25)(2,"div",26)(3,"div",27)(4,"div",15)(5,"strong",28),e._uU(6),e.qZA()(),e.TgZ(7,"div",29)(8,"strong",28),e._uU(9),e.qZA()()()()()()),2&i){const n=s.$implicit,t=s.index;e.xp6(6),e.hij("#",t+1,""),e.xp6(3),e.Oqu(n.title)}}function S(i,s){if(1&i){const n=e.EpF();e.TgZ(0,"div",3)(1,"main")(2,"div",4)(3,"div",5)(4,"div",6)(5,"div",7)(6,"input",8),e.NdJ("change",function(o){return e.CHM(n),e.oxw().onUploadImg(o)}),e.qZA(),e.TgZ(7,"label",9),e._UZ(8,"img",10),e.qZA()(),e.TgZ(9,"div",11)(10,"label",12)(11,"b"),e._uU(12,"T\xedtulo"),e.qZA()(),e.TgZ(13,"input",13),e.NdJ("ngModelChange",function(o){return e.CHM(n),e.oxw().releaseTitle=o}),e.qZA()()()()(),e.TgZ(14,"div",14),e._UZ(15,"div",15),e.TgZ(16,"div",16),e._UZ(17,"hr",17),e.YNc(18,A,10,2,"div",18),e.TgZ(19,"div",19)(20,"button",20),e.NdJ("click",function(){return e.CHM(n),e.oxw().newSong()}),e._uU(21," A\xf1adir Canci\xf3n "),e.qZA()()()(),e.TgZ(22,"div",21)(23,"button",22),e.NdJ("click",function(){return e.CHM(n),e.oxw().goTo("")}),e._uU(24,"Cancelar"),e.qZA(),e.TgZ(25,"button",23),e.NdJ("click",function(){return e.CHM(n),e.oxw().submit()}),e._uU(26,"Realizar lanzamiento"),e.qZA()()()()}if(2&i){const n=e.oxw();e.xp6(8),e.s9C("src",n.foto,e.LSH),e.xp6(5),e.Q6J("ngModel",n.releaseTitle),e.xp6(5),e.Q6J("ngForOf",n.canciones)}}function F(i,s){if(1&i){const n=e.EpF();e.TgZ(0,"div")(1,"div",30)(2,"main")(3,"div")(4,"div",31)(5,"div",32)(6,"div",33)(7,"div",34)(8,"label",35)(9,"b"),e._uU(10,"T\xedtulo"),e.qZA()(),e.TgZ(11,"input",36),e.NdJ("ngModelChange",function(o){return e.CHM(n),e.oxw().songTitle=o}),e.qZA()(),e.TgZ(12,"div",34)(13,"label",37)(14,"b"),e._uU(15,"Archivo"),e.qZA()(),e.TgZ(16,"input",38),e.NdJ("ngModelChange",function(o){return e.CHM(n),e.oxw().songAudio=o})("change",function(o){return e.CHM(n),e.oxw().onUploadMusic(o)}),e.qZA()()(),e.TgZ(17,"div",39)(18,"button",22),e.NdJ("click",function(){return e.CHM(n),e.oxw().cancel()}),e._uU(19,"Cancelar"),e.qZA(),e.TgZ(20,"button",23),e.NdJ("click",function(){return e.CHM(n),e.oxw().addSong()}),e._uU(21,"Subir canci\xf3n"),e.qZA()()()()()()()()}if(2&i){const n=e.oxw();e.xp6(11),e.Q6J("ngModel",n.songTitle),e.xp6(5),e.Q6J("ngModel",n.songAudio)}}const k=[{path:"",component:(()=>{class i{constructor(n,t,o,l,c,m,u,v){this.formBuilder=n,this.authSrv=t,this.usuarioSrv=o,this.cancionSrv=l,this.releaseSrv=c,this.releaseTypeSrv=m,this.storageSrv=u,this.router=v,this.view="release",this.canciones=[],this.prueba=[]}ngOnInit(){this.foto="https://firebasestorage.googleapis.com/v0/b/boomclub-tfg.appspot.com/o/portadas%2Fdefault-cover-art.png?alt=media&token=39a74894-86e2-4413-81f0-b8584a500b36",this.releaseTypeSrv.getAll().subscribe(n=>this.releaseTypes=n)}ngOnDestroy(){}goTo(n){this.router.navigate([n])}logout(){var n=this;return(0,g.Z)(function*(){yield n.authSrv.logout().then(()=>{console.log(n.authSrv.getUsuario())}),n.router.navigate(["/login"])})()}follow(){}onUploadImg(n){let t=n.target.files[0],o=new FileReader;o.readAsDataURL(t),o.onloadend=()=>{this.foto=o.result}}onUploadMusic(n){this.music=n.target.files[0];let t=new FileReader;t.readAsDataURL(this.music),t.onloadend=()=>{}}submit(){var n=this;return(0,g.Z)(function*(){try{let t=n.usuarioSrv.getUsuario();n.storageSrv.uploadImg("portadas/release/"+t.email,n.releaseTitle,n.foto).then(function(){var o=(0,g.Z)(function*(l){if(n.releaseType=1==n.canciones.length?n.releaseTypes.filter(c=>"SINGLE"==c.type)[0]:n.canciones.length>1&&n.canciones.length<8?n.releaseTypes.filter(c=>"EP"==c.type)[0]:n.canciones.length>8?n.releaseTypes.filter(c=>"ALBUM"==c.type)[0]:null,n.myuuid=(0,_.Z)(),n.releaseType){let c={id:n.myuuid,photo:l||n.foto,title:n.releaseTitle,release_type:n.releaseType,artist:t,created_at:(new Date).getTime()};yield n.releaseSrv.create(c),n.canciones.forEach(function(){var m=(0,g.Z)(function*(u){n.storageSrv.uploadMusic(t.email+"/"+n.releaseTitle,u.title,u.audio).then(function(){var v=(0,g.Z)(function*(f){let h;console.log("url",f),console.log("element",u),n.myuuid=(0,_.Z)(),console.log("myuuid",n.myuuid),h={id:n.myuuid,title:u.title,release:c,audio:f,created_at:(new Date).getTime()},console.log("cancion",h),yield n.cancionSrv.create(h)});return function(f){return v.apply(this,arguments)}}())});return function(u){return m.apply(this,arguments)}}()),n.router.navigate(["/artistas/"+t.id])}else T().fire({icon:"error",title:"No se ha a\xf1adido ninguna canci\xf3n"})});return function(l){return o.apply(this,arguments)}}())}catch(t){}})()}newSong(){this.view="song"}addSong(){this.nSong={title:this.songTitle,audio:this.music},this.canciones.push(this.nSong),this.songTitle="",this.songAudio="",this.view="release"}cancel(){this.songTitle="",this.songAudio="",this.view="release"}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(r.qu),e.Y36(b.e),e.Y36(y.L),e.Y36(M.e),e.Y36(Z.R),e.Y36(w.g),e.Y36(N.V),e.Y36(p.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-nueva-cancion"]],decls:3,vars:2,consts:[[1,"form-signin","needs-validation"],["class","form-back bg-size",4,"ngIf"],[4,"ngIf"],[1,"form-back","bg-size"],[1,"row","mx-auto"],[1,"col-lg-10","mx-auto","py-md-5"],[1,"test","mt-3","d-flex","align-items-center","row","row-cols-1","row-cols-sm-2","row-cols-md-3","g-1"],[1,"col-lg-2"],["name","foto","type","file","accept",".png, .jpg,.jpeg","multiple","","id","inputFile",3,"change"],["for","inputFile",1,"labelInputFile"],["alt","upload file",2,"object-fit","cover",3,"src"],[1,"col-lg-10"],["for","releaseTitle",1,"form-label","text-pink","title-new-song"],["name","releaseTitle","type","text","id","releaseTitle","placeholder","","value","",1,"form-control",3,"ngModel","ngModelChange"],[1,"row-custom","mx-auto"],[1,"col-lg-1"],[1,"col-lg-10","mx-auto"],[1,"text-pink"],["class","col mt-music-panel mb-2",4,"ngFor","ngForOf"],[1,"mt-5","mb-5","d-flex","justify-content-center","align-items-center"],[1,"btn","btn-light",3,"click"],[1,"col-10","mx-auto","d-flex","justify-content-end","mt-5"],[1,"btn","btn-outline-light","me-3",3,"click"],[1,"btn","btn-light","me-4",3,"click"],[1,"col","mt-music-panel","mb-2"],[1,"shadow-sm"],[1,"card-body","card-back","padding-btw-col","border-music-panel"],[1,"row","row-cols-1","row-cols-sm-4","row-cols-md-4","g-3","song-selector"],[1,"text-pink","no-salir"],[1,"col-lg-4","d-flex","align-items-center"],[1,"form-back","bg-dark"],[1,"col-lg-10","mx-auto","p-3","py-md-5"],[1,"test","mt-3","d-flex","align-items-center","justify-content-center","row","g-1"],[1,"row","row-cols-2","col-lg-12"],[1,"col-6"],["for","songTitle",1,"form-label","text-pink","title-new-song"],["name","songTitle","type","text","id","songTitle","placeholder","","value","",1,"form-control",3,"ngModel","ngModelChange"],["for","inputSong",1,"form-label","text-pink","title-new-song"],["name","cancion","type","file","accept",".mp3, .wav","id","inputSong",1,"form-control",3,"ngModel","ngModelChange","change"],[1,"col-12","d-flex","justify-content-end","mt-5"]],template:function(n,t){1&n&&(e.TgZ(0,"form",0),e.YNc(1,S,27,3,"div",1),e.YNc(2,F,22,2,"div",2),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngIf","release"==t.view),e.xp6(1),e.Q6J("ngIf","song"==t.view))},directives:[r._Y,r.JL,r.F,d.O5,r.Fj,r.JJ,r.On,d.sg],styles:[".name[_ngcontent-%COMP%]{font-size:450%;color:#ab6c6c;margin-left:5%}.title-new-song[_ngcontent-%COMP%]{font-size:125%}.test[_ngcontent-%COMP%]{max-width:100%}.arreglo[_ngcontent-%COMP%]{margin-top:25px;width:100%}.btn-back[_ngcontent-%COMP%]{background-color:#ab6c6c;border-radius:20px}.info[_ngcontent-%COMP%]{padding:30px}.color-link[_ngcontent-%COMP%]{color:#ab6c6c}.div-pointer[_ngcontent-%COMP%]{text-align:center;width:50%;cursor:pointer}.bg-profile[_ngcontent-%COMP%]{background-image:url(https://firebasestorage.googleapis.com/v0/b/boomclub-tfg.appspot.com/o/backOG3.png?alt=media&token=07ca8e3a-0ce0-49a8-95d6-4a8c2add230d);background-size:cover}#inputFile[_ngcontent-%COMP%]{display:none}.labelInputFile[_ngcontent-%COMP%]{width:200px;height:200px;padding:1rem;box-shadow:0 0 10px -1px gray;display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.labelInputFile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px}.labelInputFile[_ngcontent-%COMP%]:active{transform:scale(.9)}@media screen and (max-width: 767px){.ocultar[_ngcontent-%COMP%]{display:none}}"]}),i})(),canActivate:[a(3870).a],pathMatch:"full"}];let J=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[d.ez,r.u5,r.UX,p.Bz.forChild(k)],p.Bz]}),i})()}}]);