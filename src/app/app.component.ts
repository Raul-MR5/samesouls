import { Component, OnInit } from '@angular/core';
import { Usuario } from './shared/models/usuario.model';
import { AuthService } from './shared/services/auth.service';
import { UsuarioService } from './shared/services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'samesouls';

  constructor(
    private authSrv: AuthService,
    private usuarioSrv: UsuarioService,
  ) { }

  ngOnInit(): void {
    // this.authSrv.authenticated().subscribe(bool => {
    //   if (bool) {
    //     this.authSrv.getUsuario().subscribe(user => {
    //       this.usuarioSrv.getOne(user.uid).subscribe(usuario => {
    //         this.usuarioSrv.setUsuario(usuario);
    //       })
    //     });
    //   }
    // })
  }
}
