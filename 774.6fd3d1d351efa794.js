"use strict";(self.webpackChunkprueba=self.webpackChunkprueba||[]).push([[774],{9774:(y,m,r)=>{r.r(m),r.d(m,{EditProfileModule:()=>P});var f=r(9808),u=r(5861),o=r(2382),p=r(5226),h=r.n(p),e=r(5e3),g=r(629),b=r(3632),v=r(1962),d=r(6115);let C=(()=>{class n{constructor(t,l,i,s,x){this.formBuilder=t,this.authSrv=l,this.usuarioSrv=i,this.storageSrv=s,this.router=x,this.prueba=[],this.disabled=!0}ngOnInit(){this.user=this.usuarioSrv.getUsuario(),console.log("user",this.user),null==this.user?this.authSrv.authenticated().subscribe(t=>{t&&this.authSrv.getUsuario().subscribe(l=>{this.usuarioSrv.getOne(l.uid).subscribe(i=>{console.log("user",i),this.usuarioSrv.setUsuario(i),this.user=i,this.form=this.formBuilder.group({foto:"",username:[this.user.username,[o.kI.required]],nombre:[this.user.nombre,[o.kI.required]],apellidos:[this.user.apellidos],email:[{value:this.user.email,disabled:!0},[o.kI.required]]}),this.foto=this.user.foto,this.foto||(this.foto="https://firebasestorage.googleapis.com/v0/b/samesouls-a0c25.appspot.com/o/user-photo.png?alt=media&token=04f07362-f1be-4501-a038-fdd7cec3bb2a")})})}):(this.form=this.formBuilder.group({foto:"",username:[this.user.username,[o.kI.required]],nombre:[this.user.nombre,[o.kI.required]],apellidos:[this.user.apellidos],email:[{value:this.user.email,disabled:!0},[o.kI.required]]}),this.foto=this.user.foto,this.foto||(this.foto="https://firebasestorage.googleapis.com/v0/b/samesouls-a0c25.appspot.com/o/user-photo.png?alt=media&token=04f07362-f1be-4501-a038-fdd7cec3bb2a"))}ngOnDestroy(){}goTo(t){this.router.navigate([t])}logout(){var t=this;return(0,u.Z)(function*(){yield t.authSrv.logout().then(()=>{console.log(t.authSrv.getUsuario())}),t.router.navigate(["/login"])})()}follow(){}onUploadImg(t){let l=t.target.files[0],i=new FileReader;i.readAsDataURL(l),i.onloadend=()=>{this.foto=i.result}}submit(){var t=this;return(0,u.Z)(function*(){try{t.storageSrv.uploadImg("avatar/",t.user.email,t.foto).then(function(){var l=(0,u.Z)(function*(i){let s;s=i?{id:t.user.id,nombre:t.form.value.nombre,apellidos:t.form.value.apellidos,email:t.user.email,foto:i,username:t.form.value.username}:{id:t.user.id,nombre:t.form.value.nombre,apellidos:t.form.value.apellidos,email:t.user.email,foto:t.foto,username:t.form.value.username},yield t.usuarioSrv.update(s),h().fire({icon:"success",title:"Se ha actualizado el perfil"}),t.router.navigate(["/profile"])});return function(i){return l.apply(this,arguments)}}())}catch(l){}})()}reset(){this.form=this.formBuilder.group({foto:[this.user.foto],username:[this.user.username,[o.kI.required]],nombre:[this.user.nombre,[o.kI.required]],apellidos:[this.user.apellidos],email:[{value:this.user.email,disabled:!0},[o.kI.required]]})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(o.qu),e.Y36(g.e),e.Y36(b.L),e.Y36(v.V),e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit-profile"]],decls:39,vars:2,consts:[[1,"form-back","bg-dark"],[1,"form-signin","needs-validation","text-pink","mt-3",3,"formGroup"],[1,"mx-auto"],[1,"fs-4","text-pink"],[1,"text-pink"],[1,"test","mt-3","d-flex","justify-content-center","row","row-cols-1","row-cols-sm-2","row-cols-md-3","g-1"],[1,"col-lg-2","d-flex","align-items-center","justify-content-start","pe-4"],["formControlName","foto","type","file","accept",".png, .jpg,.jpeg","multiple","","id","inputFile",3,"change"],["for","inputFile",1,"labelInputFile"],["alt","upload file",2,"object-fit","cover",3,"src"],[1,"mt-2","row","col-lg-10","text-pink"],[1,"col-lg-6"],["for","nombre",1,"form-label","title-new-song"],["formControlName","nombre","type","text","id","nombre","placeholder","Nombre","value","",1,"form-control"],["for","apellidos",1,"form-label","title-new-song"],["formControlName","apellidos","type","text","id","apellidos","placeholder","Apellidos","value","",1,"form-control"],[1,"mt-2","col-lg-6"],["for","username",1,"form-label","title-new-song"],["formControlName","username","type","text","id","username","placeholder","Nombre de usuario","value","",1,"form-control"],["for","email",1,"form-label","title-new-song"],["formControlName","email","type","text","id","email","placeholder","Correo electr\xf3nico","value","",1,"form-control","text-muted"],[1,"col-12","d-flex","justify-content-end","mt-5","pe-4"],[1,"btn","btn-outline-light","me-3",3,"click"],["type","submit",1,"btn","btn-light",3,"click"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0)(1,"main")(2,"form",1)(3,"div")(4,"div",2)(5,"h3",3),e._uU(6,"Perfil"),e.qZA(),e._UZ(7,"hr",4),e.TgZ(8,"div",5)(9,"div",6)(10,"input",7),e.NdJ("change",function(s){return l.onUploadImg(s)}),e.qZA(),e.TgZ(11,"label",8),e._UZ(12,"img",9),e.qZA()(),e.TgZ(13,"div",10)(14,"div",11)(15,"label",12)(16,"b"),e._uU(17,"Nombre"),e.qZA()(),e._UZ(18,"input",13),e.qZA(),e.TgZ(19,"div",11)(20,"label",14)(21,"b"),e._uU(22,"Apellidos"),e.qZA()(),e._UZ(23,"input",15),e.qZA(),e.TgZ(24,"div",16)(25,"label",17)(26,"b"),e._uU(27,"Nombre de usuario"),e.qZA()(),e._UZ(28,"input",18),e.qZA(),e.TgZ(29,"div",16)(30,"label",19)(31,"b"),e._uU(32,"Email"),e.qZA()(),e._UZ(33,"input",20),e.qZA()()(),e.TgZ(34,"div",21)(35,"button",22),e.NdJ("click",function(){return l.reset()}),e._uU(36,"Cancelar"),e.qZA(),e.TgZ(37,"button",23),e.NdJ("click",function(){return l.submit()}),e._uU(38,"Editar"),e.qZA()()()()()()()),2&t&&(e.xp6(2),e.Q6J("formGroup",l.form),e.xp6(10),e.s9C("src",l.foto,e.LSH))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u],styles:[".name[_ngcontent-%COMP%]{font-size:450%;color:#f2ebdc;margin-left:5%}.title-new-song[_ngcontent-%COMP%]{font-size:125%}.test[_ngcontent-%COMP%]{max-width:100%}.arreglo[_ngcontent-%COMP%]{margin-top:30px;width:100%}.btn-back[_ngcontent-%COMP%], .btn-outline-back[_ngcontent-%COMP%]{background-color:#f2ebdc;border-radius:20px}.info[_ngcontent-%COMP%]{padding:30px}.color-link[_ngcontent-%COMP%]{color:#f2ebdc}.div-pointer[_ngcontent-%COMP%]{text-align:center;width:50%;cursor:pointer}.bg-profile[_ngcontent-%COMP%]{background-color:#0d0d0d}#inputFile[_ngcontent-%COMP%]{display:none}.labelInputFile[_ngcontent-%COMP%]{width:200px;height:200px;padding:1rem;box-shadow:0 0 10px -1px gray;display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.labelInputFile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px}.labelInputFile[_ngcontent-%COMP%]:active{transform:scale(.9)}@media screen and (max-width: 767px){.ocultar[_ngcontent-%COMP%]{display:none}}"]}),n})();var c=r(3870);const Z=[{path:"",component:C,canActivate:[c.a],children:[{path:"artistas",loadChildren:()=>Promise.all([r.e(592),r.e(181)]).then(r.bind(r,6181)).then(n=>n.ArtistasModule),canActivate:[c.a]}]}];let P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[f.ez,o.u5,o.UX,d.Bz.forChild(Z)],d.Bz]}),n})()}}]);