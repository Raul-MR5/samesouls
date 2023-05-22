import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { AccountService } from 'src/app/shared/services/account.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { ProfilesService } from 'src/app/shared/services/profiles.service';
import { RolesService } from 'src/app/shared/services/roles.service';
import { Rol } from 'src/app/shared/models/rol.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  rol: Rol[]

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    // private accountSrv: AccountService,
    public authSrv: AuthService,
    private usuarioSrv: ProfilesService,
    private rolSrv: RolesService,
    private firebase: AngularFirestore,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {// Validacion de si existe en local storage 'usuasio', si existe redireccion a /
    if (localStorage.getItem('usuario')) {
      this.router.navigate(['/']);
    }

    this.form = this.formBuilder.group({
      user: '',
      password: ''
    });
  }

  async submit() {
    try {
      await this.authSrv.login(this.form.value.user, this.form.value.password).then(user => {
        if (user) {
          this.authSrv.getUsuario().subscribe(user => {
            this.usuarioSrv.getOne(user.uid).subscribe(usuario => {
              if (user.emailVerified || usuario.rol.code != 'USUARIO') {
                this.usuarioSrv.setUsuario(usuario);
                this.router.navigate(['/']);
              } else {
                this.authSrv.logout();
              }
            })
          })
        }
      })

    } catch (e: any) {
      Swal.fire({
        icon: 'error',
        title: 'Correo o contraseña incorrecto'
      })
    }
  }

  async google() {
    try {
      await this.authSrv.googleAuth().then(user => {
        console.log(user)
        if (user) {
          // this.rolSrv.getByCode("USUARIO").subscribe(r => this.rol = r);

          let usuario: Usuario = {
            id: user.user.uid,
            username: user.user.displayName,
            nombre: user.user.displayName,
            email: user.user.email,
            foto: user.user.photoURL,
            // rol: this.rol[0],
            rol: {
              id: 'V44oN0bG1LFiXdkKoE64',
              code: 'USUARIO'
            },
            enabled: 1,
            created_at: Date.now()
          }
          console.log(usuario)
          this.usuarioSrv.create(usuario);
          this.router.navigate(['/']);
        }
      })

    } catch (e: any) {
    }
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
