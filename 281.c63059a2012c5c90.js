"use strict";(self.webpackChunkprueba=self.webpackChunkprueba||[]).push([[281],{5281:(E,u,e)=>{e.r(u),e.d(u,{ProductTypesModule:()=>J});var v=e(9808),p=e(5861),h=e(1042),m=e(5226),l=e.n(m),t=e(5e3),i=e(2382),f=e(629),g=e(3632),y=e(1411),C=e(9958),P=e(773),M=e(9599),T=e(887),x=e(1694),O=e(2436),S=e(7488),b=e(2019),F=e(1962),Y=e(364),Z=e(2368),d=e(6115);const I=[{path:"",component:(()=>{class o{constructor(n,r,s,c,U,B,k,j,D,L,N,G,R,X,Q,V,w){this.formBuilder=n,this.authSrv=r,this.usuarioSrv=s,this.cancionSrv=c,this.sizesSrv=U,this.productSrv=B,this.productTypeSrv=k,this.productPhotoSrv=j,this.photoTypeSrv=D,this.merchandisingSrv=L,this.releaseSrv=N,this.releaseTypeSrv=G,this.storageSrv=R,this.profileSrv=X,this.bannerPhotosSrv=Q,this.genresSrv=V,this.router=w,this.canciones=[],this.prueba=[]}ngOnInit(){this.usuario=this.usuarioSrv.getUsuario()}ngOnDestroy(){}goTo(n){this.router.navigate([n])}logout(){var n=this;return(0,p.Z)(function*(){yield n.authSrv.logout().then(()=>{console.log(n.authSrv.getUsuario())}),n.router.navigate(["/login"])})()}submit(){var n=this;return(0,p.Z)(function*(){try{n.myuuid=(0,h.Z)();let s,r={id:n.myuuid,code:n.code};yield n.productTypeSrv.create(r),l().fire({title:"Se han actualizado los tipos de producto",html:"Se ha a\xf1adido un nuevo tipo de producto.",timer:3e3,timerProgressBar:!0,didOpen:()=>{l().showLoading()},willClose:()=>{clearInterval(s)}}).then(c=>{c.dismiss===l().DismissReason.timer&&n.router.navigate(["/backoffice"])})}catch(r){}})()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(i.qu),t.Y36(f.e),t.Y36(g.L),t.Y36(y.e),t.Y36(C.d),t.Y36(P.s),t.Y36(M.z),t.Y36(T.S),t.Y36(x.q),t.Y36(O.t),t.Y36(S.R),t.Y36(b.g),t.Y36(F.V),t.Y36(g.L),t.Y36(Y.n),t.Y36(Z.S),t.Y36(d.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product_types"]],decls:19,vars:1,consts:[[1,"form-back","bg-size"],[1,"row","mx-auto"],[1,"col-lg-10","mx-auto","py-md-5"],[1,"fs-4","text-pink"],[1,"text-pink"],[1,"form-signin","needs-validation"],[1,"d-flex","align-items-center","row","col-lg-10","mx-auto","text-pink"],[1,"row","col-lg-12"],[1,"col-12"],["for","code",1,"form-label","text-pink","title-new-song"],["name","code_product_type","type","text","id","code","placeholder","","value","",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-10","mx-auto","d-flex","justify-content-end","mt-5"],[1,"btn","btn-outline-light","me-3",3,"click"],[1,"btn","btn-light","me-4",3,"click"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),t._uU(4,"Tipo de productos"),t.qZA(),t._UZ(5,"hr",4),t.qZA()(),t.TgZ(6,"form",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"label",9)(11,"b"),t._uU(12,"Code"),t.qZA()(),t.TgZ(13,"input",10),t.NdJ("ngModelChange",function(c){return r.code=c}),t.qZA()()()(),t.TgZ(14,"div",11)(15,"button",12),t.NdJ("click",function(){return r.goTo("backoffice")}),t._uU(16,"Cancelar"),t.qZA(),t.TgZ(17,"button",13),t.NdJ("click",function(){return r.submit()}),t._uU(18,"A\xf1adir tipo de producto"),t.qZA()()()()),2&n&&(t.xp6(13),t.Q6J("ngModel",r.code))},directives:[i._Y,i.JL,i.F,i.Fj,i.JJ,i.On],styles:[".name[_ngcontent-%COMP%]{font-size:450%;color:#ab6c6c;margin-left:5%}.title-new-song[_ngcontent-%COMP%]{font-size:125%}.test[_ngcontent-%COMP%]{max-width:100%}.arreglo[_ngcontent-%COMP%]{margin-top:25px;width:100%}.btn-back[_ngcontent-%COMP%]{background-color:#ab6c6c;border-radius:20px}.info[_ngcontent-%COMP%]{padding:30px}.color-link[_ngcontent-%COMP%]{color:#ab6c6c}.div-pointer[_ngcontent-%COMP%]{text-align:center;width:50%;cursor:pointer}.bg-profile[_ngcontent-%COMP%]{background-image:url(https://firebasestorage.googleapis.com/v0/b/boomclub-tfg.appspot.com/o/backOG3.png?alt=media&token=07ca8e3a-0ce0-49a8-95d6-4a8c2add230d);background-size:cover}#inputFile[_ngcontent-%COMP%], #inputFileFront[_ngcontent-%COMP%], #inputFileBack[_ngcontent-%COMP%], #inputFileModelFront[_ngcontent-%COMP%], #inputFileModelBack[_ngcontent-%COMP%]{display:none}.labelInputFile[_ngcontent-%COMP%]{width:200px;height:200px;padding:1rem;box-shadow:0 0 10px -1px gray;display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.labelInputFile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px}.labelInputFileDisk[_ngcontent-%COMP%]{width:350px;height:350px;padding:1rem;display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.labelInputFileDisk[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.labelInputFile[_ngcontent-%COMP%]:active{transform:scale(.9)}@media screen and (max-width: 767px){.ocultar[_ngcontent-%COMP%]{display:none}}"]}),o})(),canActivate:[e(3870).a],pathMatch:"full"}];let J=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[v.ez,i.u5,i.UX,d.Bz.forChild(I)],d.Bz]}),o})()}}]);