"use strict";(self.webpackChunkprueba=self.webpackChunkprueba||[]).push([[450],{8450:(k,g,r)=>{r.r(g),r.d(g,{MerchandisingModule:()=>O});var d=r(9808),u=r(5861),e=r(5e3),a=r(2382),m=r(629),p=r(3632),h=r(9958),f=r(1962),c=r(6115);function v(o,i){1&o&&(e.TgZ(0,"div"),e._UZ(1,"img",14),e.qZA())}function _(o,i){1&o&&(e.TgZ(0,"div"),e._UZ(1,"img",15),e.qZA())}function x(o,i){1&o&&(e.TgZ(0,"div"),e._UZ(1,"img",16),e.qZA())}function b(o,i){1&o&&(e.TgZ(0,"div"),e._UZ(1,"img",17),e.qZA())}function Z(o,i){1&o&&(e.TgZ(0,"div"),e._UZ(1,"img",18),e.qZA())}function M(o,i){if(1&o&&(e.TgZ(0,"div",12),e.YNc(1,v,2,0,"div",13),e.YNc(2,_,2,0,"div",13),e.YNc(3,x,2,0,"div",13),e.YNc(4,b,2,0,"div",13),e.YNc(5,Z,2,0,"div",13),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf","front"==t.photo1),e.xp6(1),e.Q6J("ngIf","back"==t.photo2),e.xp6(1),e.Q6J("ngIf","model_front"==t.photo3),e.xp6(1),e.Q6J("ngIf","model_back"==t.photo4),e.xp6(1),e.Q6J("ngIf","model_side"==t.photo5)}}function C(o,i){1&o&&(e.TgZ(0,"div",19),e._UZ(1,"img",20),e.qZA())}function y(o,i){if(1&o&&(e.TgZ(0,"option",36),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.s9C("value",t.code),e.xp6(1),e.hij("",t.code," - Out of stock")}}function T(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",21)(1,"form",22),e.NdJ("submit",function(){return e.CHM(t),e.oxw().submit()}),e.TgZ(2,"div")(3,"div",23)(4,"div",24)(5,"h3",25)(6,"strong"),e._uU(7,"NOMBRE MERCHAN"),e.qZA()(),e.TgZ(8,"h3",25)(9,"strong"),e._uU(10,"--,--\u20ac"),e.qZA()(),e.TgZ(11,"div",26)(12,"select",27)(13,"option",28),e._uU(14,"TALLAS"),e.qZA(),e.YNc(15,y,2,2,"option",29),e.qZA(),e.TgZ(16,"p",30),e._uU(17,"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xe1ndar de las industrias desde el a\xf1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xf3 una galer\xeda de textos y los mezcl\xf3 de tal manera que logr\xf3 hacer un libro de textos especimen. "),e.qZA(),e.TgZ(18,"div",31)(19,"span",32),e._uU(20,"Out of stock. "),e.qZA()()()(),e.TgZ(21,"div",33)(22,"div",34)(23,"button",35),e._uU(24,"A\xf1adir a mi cesta"),e.qZA()()()()()()()}if(2&o){const t=e.oxw();e.xp6(15),e.Q6J("ngForOf",t.sizes)}}function w(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",37)(1,"form",38),e.NdJ("submit",function(){return e.CHM(t),e.oxw().submit()}),e.TgZ(2,"div")(3,"div",23)(4,"div",24)(5,"h3",25)(6,"strong"),e._uU(7,"NOMBRE MERCHAN"),e.qZA()(),e.TgZ(8,"h3",25)(9,"strong"),e._uU(10,"--,--\u20ac"),e.qZA()(),e.TgZ(11,"div",26)(12,"p",30),e._uU(13,"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est\xe1ndar de las industrias desde el a\xf1o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us\xf3 una galer\xeda de textos y los mezcl\xf3 de tal manera que logr\xf3 hacer un libro de textos especimen. "),e.qZA()()(),e.TgZ(14,"div",33)(15,"div",34)(16,"button",35),e._uU(17,"A\xf1adir a mi cesta"),e.qZA()()()()()()()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.form)}}const A=[{path:"",component:(()=>{class o{constructor(t,n,s,l,F,I,U){this.formBuilder=t,this.authSrv=n,this.usuarioSrv=s,this.sizesSrv=l,this.storageSrv=F,this.router=I,this.activatedRoute=U,this.prueba=[],this.disabled=!0,this.suscriptions=[],this.type="clothing",this.photo1="front",this.photo2="back",this.photo3="model_front",this.photo4="model_back",this.photo5="model_side"}ngOnInit(){const t=this.activatedRoute.params.subscribe(n=>{this.id=n.id,console.log(this.id,"hola")});this.suscriptions.push(t),this.sizesSrv.getAll().subscribe(n=>this.sizes=n),console.log(this.suscriptions),this.form=this.formBuilder.group({})}ngOnDestroy(){}goTo(t){this.router.navigate([t])}logout(){var t=this;return(0,u.Z)(function*(){yield t.authSrv.logout().then(()=>{console.log(t.authSrv.getUsuario())}),t.router.navigate(["/login"])})()}follow(){}onUploadImg(t){let n=t.target.files[0],s=new FileReader;s.readAsDataURL(n),s.onloadend=()=>{this.foto=s.result}}submit(){var t=this;return(0,u.Z)(function*(){try{t.storageSrv.uploadImg("avatar/",t.user.email,t.foto).then(function(){var n=(0,u.Z)(function*(s){let l;l=s?{id:t.user.id,nombre:t.form.value.nombre,apellidos:t.form.value.apellidos,email:t.user.email,foto:s,username:t.form.value.username}:{id:t.user.id,nombre:t.form.value.nombre,apellidos:t.form.value.apellidos,email:t.user.email,foto:t.foto,username:t.form.value.username},yield t.usuarioSrv.update(l),t.router.navigate(["/profile"])});return function(s){return n.apply(this,arguments)}}())}catch(n){}})()}back(){history.back()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.qu),e.Y36(m.e),e.Y36(p.L),e.Y36(h.d),e.Y36(f.V),e.Y36(c.F0),e.Y36(c.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-merchandising"]],decls:12,vars:4,consts:[[1,"bg-light"],[1,"return-btn"],["xmlns","http://www.w3.org/2000/svg","width","30","height","30","fill","#0d0d0d","viewBox","0 0 16 16",1,"bi","bi-arrow-left-circle-fill","song-selector",3,"click"],["d","M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"],[1,"col-lg-9","mx-auto","py-md-4"],[1,"display-flex","row","py-4"],[1,"col-8"],["class","display-flex row row-cols-2",4,"ngIf"],["class","display-flex align-items-center justify-content-center row",4,"ngIf"],[1,"col-4"],["class","form-back",4,"ngIf"],["class","display-flex row",4,"ngIf"],[1,"display-flex","row","row-cols-2"],[4,"ngIf"],["src","../../../../assets/img/front.jpg","alt","",1,"merchan-photo"],["src","../../../../assets/img/back.jpg","alt","",1,"merchan-photo"],["src","../../../../assets/img/model_front.jpg","alt","",1,"merchan-photo"],["src","../../../../assets/img/model_side.jpg","alt","",1,"merchan-photo"],["src","../../../../assets/img/model_back.jpg","alt","",1,"merchan-photo"],[1,"display-flex","align-items-center","justify-content-center","row"],["src","../../../../assets/img/vinilo.webp","alt","",2,"width","75vh"],[1,"form-back"],[1,"form-signin","needs-validation",3,"submit"],[1,"col-lg-11","mx-auto","p-2","ps-5"],[1,"test","d-flex","align-items-center","row","row-cols-1","row-cols-sm-2","row-cols-md-3","g-1"],[1,"w-100"],[1,"w-100","pt-3"],["aria-label","Default select example",1,"form-select","col-12"],["hidden","","selected",""],["disabled","",3,"value",4,"ngFor","ngForOf"],[1,"pt-4",2,"text-align","justify","text-justify","inter-word"],[1,"d-flex","justify-content-center"],[1,"fs-5","text-danger",2,"text-align","justify","text-justify","inter-word"],[1,"d-flex","align-items-center","row","row-cols-1","row-cols-sm-1","row-cols-md-4","g-3"],[1,"col-lg-12"],["type","submit",1,"btn","btn-back","text-white","arreglo"],["disabled","",3,"value"],[1,"display-flex","row"],[1,"form-signin","needs-validation",3,"formGroup","submit"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.O4$(),e.TgZ(2,"svg",2),e.NdJ("click",function(){return n.back()}),e._UZ(3,"path",3),e.qZA()(),e.kcU(),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6),e.YNc(7,M,6,5,"div",7),e.YNc(8,C,2,0,"div",8),e.qZA(),e.TgZ(9,"div",9),e.YNc(10,T,25,1,"div",10),e.YNc(11,w,18,1,"div",11),e.qZA()()()()),2&t&&(e.xp6(7),e.Q6J("ngIf","clothing"==n.type),e.xp6(1),e.Q6J("ngIf","music"==n.type),e.xp6(2),e.Q6J("ngIf","clothing"==n.type),e.xp6(1),e.Q6J("ngIf","music"==n.type))},directives:[d.O5,a._Y,a.JL,a.F,a.YN,a.Kr,d.sg,a.sg],styles:[".name[_ngcontent-%COMP%]{font-size:450%;color:#f2ebdc;margin-left:5%}.title-new-song[_ngcontent-%COMP%]{font-size:125%}.test[_ngcontent-%COMP%]{max-width:100%}.arreglo[_ngcontent-%COMP%]{margin-top:30px;width:100%}.btn-back[_ngcontent-%COMP%]{background-color:#0d0d0d;border-radius:6px}.info[_ngcontent-%COMP%]{padding:30px}.color-link[_ngcontent-%COMP%]{color:#f2ebdc}.div-pointer[_ngcontent-%COMP%]{text-align:center;width:50%;cursor:pointer}.bg-profile[_ngcontent-%COMP%]{background-image:url(https://firebasestorage.googleapis.com/v0/b/samesouls-tfg.appspot.com/o/backOG3.png?alt=media&token=07ca8e3a-0ce0-49a8-95d6-4a8c2add230d);background-size:cover}#inputFile[_ngcontent-%COMP%]{display:none}.labelInputFile[_ngcontent-%COMP%]{width:200px;height:200px;padding:1rem;box-shadow:0 0 10px -1px gray;display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.labelInputFile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px}.labelInputFile[_ngcontent-%COMP%]:active{transform:scale(.9)}@media screen and (max-width: 767px){.ocultar[_ngcontent-%COMP%]{display:none}}.merchan-photo[_ngcontent-%COMP%]{height:78vh}.return-btn[_ngcontent-%COMP%]{position:fixed;top:12vh;left:1vw}"]}),o})(),children:[]}];let O=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.ez,a.u5,a.UX,c.Bz.forChild(A)],c.Bz]}),o})()}}]);