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
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    // private accountSrv: AccountService,
    public authSrv: AuthService,
    private usuarioSrv: UsuarioService,
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
            if (user.emailVerified) {
              this.router.navigate(['/']);
            } else {
              this.authSrv.logout();
            }
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
          let usuario: Usuario = {
            id: user.user.uid,
            username: user.user.displayName,
            nombre: user.user.displayName,
            email: user.user.email,
            foto: user.user.photoURL
          }
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
