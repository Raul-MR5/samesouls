"use strict";(self.webpackChunkprueba=self.webpackChunkprueba||[]).push([[876],{7876:(_,c,o)=>{o.r(c),o.d(c,{HomeModule:()=>f});var u=o(9808),t=o(5e3),s=o(2382),d=o(629),p=o(3632),g=o(364),l=o(6115);function m(i,a){if(1&i&&t._UZ(0,"button",19),2&i){const e=a.index;t.Tol(0==e?"active":""),t.Q2q("aria-label","Slide ",e,""),t.uIk("data-bs-slide-to",e)}}function h(i,a){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"img",20),t.TgZ(2,"div",21)(3,"h5"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"a",22),t._uU(8,"Escuchar ahora"),t.qZA()()()),2&i){const e=a.$implicit;t.Gre("carousel-item ",0==a.index?"active":"",""),t.xp6(1),t.s9C("src",e.photo,t.LSH),t.xp6(3),t.Oqu(e.artist.username),t.xp6(2),t.Oqu(e.description),t.xp6(1),t.s9C("href",e.url,t.LSH)}}const v=[{path:"",component:(()=>{class i{constructor(e,n,r,b,x){this.formBuilder=e,this.authSrv=n,this.usuarioSrv=r,this.bannerSrv=b,this.router=x,this.prueba=[1,2,3,4],this.title="SameSouls",this.busqueda=!1}ngOnInit(){this.bannerSrv.getByType("BANNER_HOME").subscribe(e=>{this.banner=e}),this.form=this.formBuilder.group({search:[""]}),this.user=this.usuarioSrv.getUsuario(),this.authSrv.authenticated().subscribe(e=>{e&&this.authSrv.getUsuario().subscribe(n=>{this.usuarioSrv.getOne(n.uid).subscribe(r=>{this.user=r})})})}ngOnDestroy(){}titulo(){this.title="Hola"}goTo(e){this.router.navigate([e])}search(){this.form.value.search.length>0?(this.busqueda=!0,this.usuarioSrv.getAllMatches(this.form.value.search).subscribe(e=>{this.artistas=e})):this.busqueda=!1}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(s.qu),t.Y36(d.e),t.Y36(p.L),t.Y36(g.n),t.Y36(l.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],decls:36,vars:2,consts:[["id","carouselExampleCaptions",1,"carousel","slide",2,"height","90vh"],[1,"carousel-indicators"],["type","button","data-bs-target","#carouselExampleCaptions","aria-current","true",3,"class",4,"ngFor","ngForOf"],[1,"carousel-inner"],[3,"class",4,"ngFor","ngForOf"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],["id","section-dispatcher",1,"section-dispatcher"],[1,"container"],[1,"row"],[1,"section-dispatcher-title"],[1,"col-md-6",3,"click"],["data-tilt-perspective","1000","data-tilt-scale","1.05","data-tilt-speed","400","data-tilt-max","10",1,"c-example__tilt","js-tilt","js-tilt-music","transition-btn-one",2,"will-change","transform","transform","perspective(1000px) rotateX(0deg) rotateY(0deg)"],[1,"c-example__tilt-overlay"],[1,"c-example__tilt-txt"],["data-tilt-perspective","1000","data-tilt-scale","1.05","data-tilt-speed","400","data-tilt-max","10",1,"c-example__tilt","js-tilt","js-tilt-experiences","transition-btn-two",2,"will-change","transform","transform","perspective(1000px) rotateX(0deg) rotateY(0deg)"],["type","button","data-bs-target","#carouselExampleCaptions","aria-current","true"],["alt","",1,"d-block","w-100",2,"height","90vh","object-fit","cover","opacity","0.5",3,"src"],[1,"carousel-caption","d-none","d-md-block"],["target","_blank",1,"btn","btn-light","mb-3",3,"href"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,m,1,5,"button",2),t.qZA(),t.TgZ(3,"div",3),t.YNc(4,h,9,7,"div",4),t.qZA(),t.TgZ(5,"button",5),t._UZ(6,"span",6),t.TgZ(7,"span",7),t._uU(8,"Previous"),t.qZA()(),t.TgZ(9,"button",8),t._UZ(10,"span",9),t.TgZ(11,"span",7),t._uU(12,"Next"),t.qZA()()(),t.TgZ(13,"section",10)(14,"div",11)(15,"div",12)(16,"div",13),t._uU(17,"Descubre todo lo que ofrecemos"),t.qZA(),t.TgZ(18,"div",14),t.NdJ("click",function(){return n.goTo("/artistas")}),t.TgZ(19,"div",15)(20,"div",16)(21,"div",17)(22,"div")(23,"h2"),t._uU(24,"Artistas."),t.qZA(),t.TgZ(25,"p"),t._uU(26," Prep\xe1rate para sentir la m\xfasica en tu piel y deja que nuestros artistas te lleven a un mundo lleno de emociones y experiencias \xfanicas. "),t.qZA()()()()()(),t.TgZ(27,"div",14),t.NdJ("click",function(){return n.goTo("/shop")}),t.TgZ(28,"div",18)(29,"div",16)(30,"div",17)(31,"div")(32,"h2"),t._uU(33,"Tienda."),t.qZA(),t.TgZ(34,"p"),t._uU(35," \xbfBuscas llevar contigo la m\xfasica de tus artistas favoritos? \xa1Entra en nuestra tienda y encuentra lo que necesitas para hacerlo realidad! "),t.qZA()()()()()()()()()),2&e&&(t.xp6(2),t.Q6J("ngForOf",n.banner),t.xp6(2),t.Q6J("ngForOf",n.banner))},directives:[u.sg],styles:[".music-cover[_ngcontent-%COMP%]{margin-bottom:15px}.title[_ngcontent-%COMP%]{margin-left:5px}.no-salir[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.section-dispatcher[_ngcontent-%COMP%]{background-color:#f2ebdc;padding:100px 0;height:970px;overflow:hidden;transition:height 1s cubic-bezier(.2,.84,.5,1)}.container[_ngcontent-%COMP%]{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;max-width:1450px}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.section-dispatcher-title[_ngcontent-%COMP%]{color:#0d0d0d;margin-bottom:90px;padding:0 62px;font-size:2.1rem;font-weight:600;line-height:1em}.c-example__tilt[_ngcontent-%COMP%]{position:relative}.c-example__tilt[_ngcontent-%COMP%]{width:40vw;height:70vh;max-width:596px;max-height:640px;background:url(concierto2.40448e476a77d388.jpg) no-repeat left -250px top -100px;cursor:pointer;margin:0 auto;transition:transform 1s cubic-bezier(.2,.84,.5,1)}.c-example__tilt-overlay[_ngcontent-%COMP%]{transform:translateZ(50px);background-color:#00000038;display:flex;justify-content:center;align-items:center;position:absolute;top:0;bottom:0;width:100%;padding:14%;align-items:stretch}.c-example__tilt-txt[_ngcontent-%COMP%]{transform:translateZ(50px);color:#fff;padding:30px;border:10px solid #f2ebdc;display:flex;align-items:center;background-color:#0d0d0d4d}.c-example__tilt-txt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-size:3.6rem;font-weight:600;text-align:center;margin-bottom:22px}.c-example__tilt-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400}.c-example__tilt.js-tilt-experiences[_ngcontent-%COMP%]{background:url(modelaje-urbano.6d431bcd0ef34d95.jpg) no-repeat center;background-size:cover}"]}),i})(),pathMatch:"full"}];let f=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[u.ez,l.Bz.forChild(v),s.u5,s.UX],l.Bz]}),i})()}}]);