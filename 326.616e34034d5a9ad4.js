"use strict";(self.webpackChunkprueba=self.webpackChunkprueba||[]).push([[326],{5326:(V,h,o)=>{o.r(h),o.d(h,{BannersModule:()=>w});var u=o(9808),m=o(5861),v=o(1042),b=o(5226),p=o.n(b),e=o(5e3),a=o(2382),M=o(629),f=o(3632),T=o(1411),C=o(9958),y=o(773),O=o(9599),Y=o(887),x=o(1694),N=o(2436),A=o(7488),S=o(2019),F=o(1962),P=o(364),g=o(6115);function B(s,l){if(1&s&&(e.TgZ(0,"option"),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.xp6(1),e.Oqu(t.username)}}function Z(s,l){if(1&s&&(e.TgZ(0,"option"),e._uU(1),e.qZA()),2&s){const t=l.$implicit;e.xp6(1),e.Oqu(t.name)}}const z=[{path:"",component:(()=>{class s{constructor(t,n,r,i,d,c,D,_,j,J,E,L,R,I,H,Q){this.formBuilder=t,this.authSrv=n,this.usuarioSrv=r,this.cancionSrv=i,this.sizesSrv=d,this.productSrv=c,this.productTypeSrv=D,this.productPhotoSrv=_,this.photoTypeSrv=j,this.merchandisingSrv=J,this.releaseSrv=E,this.releaseTypeSrv=L,this.storageSrv=R,this.profileSrv=I,this.bannerPhotosSrv=H,this.router=Q,this.canciones=[],this.prueba=[]}ngOnInit(){this.foto="https://firebasestorage.googleapis.com/v0/b/samesouls-a0c25.appspot.com/o/merchan%2Fshirt-default.png?alt=media&token=7a0a9551-4c22-435f-8c26-5c1db4d3356a&_gl=1*wyidpd*_ga*MjEyNDUxODY3Ny4xNjY2MzY4MTYz*_ga_CW55HF8NVT*MTY4NTg3MDY4NC40Mi4xLjE2ODU4NzEwMzYuMC4wLjA.",this.front=this.foto,this.back=this.foto,this.model_front=this.foto,this.model_back=this.foto,this.usuario=this.usuarioSrv.getUsuario(),this.sizesSrv.getAll().subscribe(t=>this.sizes=t),this.releaseTypeSrv.getAll().subscribe(t=>this.releaseTypes=t),this.productTypeSrv.getAll().subscribe(t=>{this.productTypes=t,this.productType=t[0].code}),this.photoTypeSrv.getAll().subscribe(t=>this.photoType=t),this.profileSrv.getAllMatchesRol("ARTISTA").subscribe(t=>this.profiles=t),this.photoTypeSrv.getAll().subscribe(t=>{this.bannerTypes=t.filter(n=>"BANNER_HOME"==n.name||"BANNER_SHOP"==n.name),console.log("this.bannerTypes",this.bannerTypes)}),this.photoTypeSrv.getAll().subscribe(t=>{this.bannerTypes=t.filter(n=>"BANNER_HOME"==n.name||"BANNER_SHOP"==n.name),console.log("this.bannerTypes",this.bannerTypes)})}ngOnDestroy(){}goTo(t){this.router.navigate([t])}logout(){var t=this;return(0,m.Z)(function*(){yield t.authSrv.logout().then(()=>{console.log(t.authSrv.getUsuario())}),t.router.navigate(["/login"])})()}follow(){}onUploadImg(t){let n=t.target.files[0],r=new FileReader;r.readAsDataURL(n),r.onloadend=()=>{this.foto=r.result}}onUploadImgCloth(t,n){let r=t.target.files[0],i=new FileReader;i.readAsDataURL(r),i.onloadend=()=>{switch(console.log("type",n),n){case"front":this.front=i.result;break;case"back":this.back=i.result;break;case"model_front":this.model_front=i.result;break;case"model_back":this.model_back=i.result}this.foto=this.front}}onUploadMusic(t){this.music=t.target.files[0];let n=new FileReader;n.readAsDataURL(this.music),n.onloadend=()=>{this.foto=n.result}}changePhoto(){switch(this.productType){case"CLOTHING":this.foto="https://firebasestorage.googleapis.com/v0/b/samesouls-a0c25.appspot.com/o/merchan%2Fshirt-default.png?alt=media&token=7a0a9551-4c22-435f-8c26-5c1db4d3356a&_gl=1*wyidpd*_ga*MjEyNDUxODY3Ny4xNjY2MzY4MTYz*_ga_CW55HF8NVT*MTY4NTg3MDY4NC40Mi4xLjE2ODU4NzEwMzYuMC4wLjA.",this.front=this.foto,this.back=this.foto,this.model_front=this.foto,this.model_back=this.foto;break;case"MUSIC":this.foto="https://firebasestorage.googleapis.com/v0/b/samesouls-a0c25.appspot.com/o/merchan%2Fdisk-default.png?alt=media&token=2df902ef-f2a8-4968-87f8-edefc65e706b&_gl=1*y3wz8w*_ga*MjEyNDUxODY3Ny4xNjY2MzY4MTYz*_ga_CW55HF8NVT*MTY4NTg3MDY4NC40Mi4xLjE2ODU4NzEwMDguMC4wLjA."}}submit(){var t=this;return(0,m.Z)(function*(){try{let n=t.profiles.filter(c=>c.username==t.profile)[0],r=t.bannerTypes.filter(c=>c.name==t.bannerType)[0];t.myuuid=(0,v.Z)();let d,i={id:t.myuuid,artist:n,type:r,url:t.url,description:t.description,photo:n.foto};yield t.bannerPhotosSrv.create(i),p().fire({title:"Se han actualizado los banners",html:"Se ha a\xf1adido un nuevo banner.",timer:3e3,timerProgressBar:!0,didOpen:()=>{p().showLoading()},willClose:()=>{clearInterval(d)}}).then(c=>{c.dismiss===p().DismissReason.timer&&t.router.navigate(["/backoffice"])})}catch(n){}})()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(a.qu),e.Y36(M.e),e.Y36(f.L),e.Y36(T.e),e.Y36(C.d),e.Y36(y.s),e.Y36(O.z),e.Y36(Y.S),e.Y36(x.q),e.Y36(N.t),e.Y36(A.R),e.Y36(S.g),e.Y36(F.V),e.Y36(f.L),e.Y36(P.n),e.Y36(g.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-banners"]],decls:36,vars:6,consts:[[1,"form-back","bg-size"],[1,"row","mx-auto"],[1,"col-lg-10","mx-auto","py-md-5"],[1,"fs-4","text-pink"],[1,"text-pink"],[1,"form-signin","needs-validation"],[1,"d-flex","align-items-center","row","col-lg-10","mx-auto","text-pink"],[1,"row","col-lg-12"],[1,"col-4"],["for","artista",1,"form-label","text-pink","title-new-song"],["name","artista","id","artista","required","",1,"form-select",3,"ngModel","ngModelChange","change"],[4,"ngFor","ngForOf"],["for","banner_type",1,"form-label","text-pink","title-new-song"],["name","banner_type","id","banner_type","required","",1,"form-select",3,"ngModel","ngModelChange","change"],["for","url",1,"form-label","text-pink","title-new-song"],["name","url_photo","type","text","id","url","placeholder","","value","",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-lg-12","mt-3"],["for","description",1,"form-label","text-pink","title-new-song"],["name","descripcion","placeholder","","rows","3","id","description",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-10","mx-auto","d-flex","justify-content-end","mt-5"],[1,"btn","btn-outline-light","me-3",3,"click"],[1,"btn","btn-light","me-4",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),e._uU(4,"Banners"),e.qZA(),e._UZ(5,"hr",4),e.qZA()(),e.TgZ(6,"form",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"label",9)(11,"b"),e._uU(12,"Seleccione el artista"),e.qZA()(),e.TgZ(13,"select",10),e.NdJ("ngModelChange",function(i){return n.profile=i})("change",function(){return n.changePhoto()}),e.YNc(14,B,2,1,"option",11),e.qZA()(),e.TgZ(15,"div",8)(16,"label",12)(17,"b"),e._uU(18,"Seleccione el tipo de banner"),e.qZA()(),e.TgZ(19,"select",13),e.NdJ("ngModelChange",function(i){return n.bannerType=i})("change",function(){return n.changePhoto()}),e.YNc(20,Z,2,1,"option",11),e.qZA()(),e.TgZ(21,"div",8)(22,"label",14)(23,"b"),e._uU(24,"URL"),e.qZA()(),e.TgZ(25,"input",15),e.NdJ("ngModelChange",function(i){return n.url=i}),e.qZA()(),e.TgZ(26,"div",16)(27,"label",17)(28,"b"),e._uU(29,"Descripci\xf3n"),e.qZA()(),e.TgZ(30,"textarea",18),e.NdJ("ngModelChange",function(i){return n.description=i}),e.qZA()()()(),e.TgZ(31,"div",19)(32,"button",20),e.NdJ("click",function(){return n.goTo("backoffice")}),e._uU(33,"Cancelar"),e.qZA(),e.TgZ(34,"button",21),e.NdJ("click",function(){return n.submit()}),e._uU(35,"A\xf1dir el banner"),e.qZA()()()()),2&t&&(e.xp6(13),e.Q6J("ngModel",n.profile),e.xp6(1),e.Q6J("ngForOf",n.profiles),e.xp6(5),e.Q6J("ngModel",n.bannerType),e.xp6(1),e.Q6J("ngForOf",n.bannerTypes),e.xp6(5),e.Q6J("ngModel",n.url),e.xp6(5),e.Q6J("ngModel",n.description))},directives:[a._Y,a.JL,a.F,a.EJ,a.Q7,a.JJ,a.On,u.sg,a.YN,a.Kr,a.Fj],styles:[".name[_ngcontent-%COMP%]{font-size:450%;color:#ab6c6c;margin-left:5%}.title-new-song[_ngcontent-%COMP%]{font-size:125%}.test[_ngcontent-%COMP%]{max-width:100%}.arreglo[_ngcontent-%COMP%]{margin-top:25px;width:100%}.btn-back[_ngcontent-%COMP%]{background-color:#ab6c6c;border-radius:20px}.info[_ngcontent-%COMP%]{padding:30px}.color-link[_ngcontent-%COMP%]{color:#ab6c6c}.div-pointer[_ngcontent-%COMP%]{text-align:center;width:50%;cursor:pointer}.bg-profile[_ngcontent-%COMP%]{background-image:url(https://firebasestorage.googleapis.com/v0/b/boomclub-tfg.appspot.com/o/backOG3.png?alt=media&token=07ca8e3a-0ce0-49a8-95d6-4a8c2add230d);background-size:cover}#inputFile[_ngcontent-%COMP%], #inputFileFront[_ngcontent-%COMP%], #inputFileBack[_ngcontent-%COMP%], #inputFileModelFront[_ngcontent-%COMP%], #inputFileModelBack[_ngcontent-%COMP%]{display:none}.labelInputFile[_ngcontent-%COMP%]{width:200px;height:200px;padding:1rem;box-shadow:0 0 10px -1px gray;display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.labelInputFile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px}.labelInputFileDisk[_ngcontent-%COMP%]{width:350px;height:350px;padding:1rem;display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.labelInputFileDisk[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.labelInputFile[_ngcontent-%COMP%]:active{transform:scale(.9)}@media screen and (max-width: 767px){.ocultar[_ngcontent-%COMP%]{display:none}}"]}),s})(),canActivate:[o(3870).a],pathMatch:"full"}];let w=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[u.ez,a.u5,a.UX,g.Bz.forChild(z)],g.Bz]}),s})()}}]);