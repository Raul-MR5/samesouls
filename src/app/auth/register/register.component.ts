import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario.model';
// import { AccountService } from 'src/app/shared/services/account.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ProfilesService } from 'src/app/shared/services/profiles.service';
import Swal from 'sweetalert2';
import { RolesService } from 'src/app/shared/services/roles.service';
import { Rol } from 'src/app/shared/models/rol.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  user: Usuario;
  name: string;

  imagenes: any[] = [];
  avatar: any;
  
  rol: Rol[];

  constructor(
    private formBuilder: FormBuilder,
    // private accountSrv: AccountService,
    private authSrv: AuthService,
    private usuarioSrv: ProfilesService,
    private rolSrv: RolesService,
    private storageSrv: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('usuario')) {
      this.router.navigate(['/']);
    }

    // this.user = this.usuarioSrv.getUsuario()
    // this.name = this.user.nombre;

    this.avatar = "https://firebasestorage.googleapis.com/v0/b/samesouls-tfg.appspot.com/o/user-photo.png?alt=media&token=c9588aa9-1450-4932-86cd-d480853474d1";

    this.form = this.formBuilder.group({
      foto: '',
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.pattern("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$")]],
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      apellidos: ['', [Validators.minLength(3), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeat_password: ['', Validators.required]
    });
  }

  // submit(): void {
  //   var nUser: any = {
  //     id: this.form.value.id,
  //     username: this.form.value.username,
  //     password: this.form.value.password,
  //     email: this.form.value.email,
  //     nombre: this.form.value.nombre,
  //     apellidos: this.form.value.apellidos,
  //     fecAlta: new Date,
  //     fecBaja: null,
  //     activo: true,
  //     rol: {
  //       id: 2
  //     }
  //   }

  //   this.usuarioSrv.create(nUser)
  //     .subscribe(
  //       () => {
  //         this.router.navigate(['/login']);
  //       }
  //     );

  //   // this.accountSrv.login(this.form.value.user, this.form.value.password)
  //   //   .subscribe(
  //   //     () => {
  //   //       this.router.navigate(['/login']);
  //   //     }
  //   //   );
  // }

  onUploadImg(event) {

    let foto = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(foto);
    reader.onloadend = () => {
      this.avatar = reader.result;
    }
  }

  async submit() {
    //this.firebase.collection('Usuarios').get();

    try {
      await this.authSrv.register(this.form.value.email, this.form.value.password).then(async user => {
        console.log(user)
        if (user) {
          user.user.updateProfile({
            displayName: this.form.value.username
          })

          this.storageSrv.uploadImg("avatar", this.form.value.email, this.avatar).then(async urlImagen => {

            if (!urlImagen) {
              urlImagen = "https://firebasestorage.googleapis.com/v0/b/samesouls-tfg.appspot.com/o/user-photo.png?alt=media&token=c9588aa9-1450-4932-86cd-d480853474d1"
            }

            // this.rolSrv.getByCode("USUARIO").subscribe(r => this.rol = r);

            let usuario: Usuario = {
              id: user.user.uid,
              username: this.form.value.username,
              nombre: this.form.value.nombre,
              apellidos: this.form.value.apellidos,
              email: this.form.value.email,
              foto: urlImagen,
              // rol: this.rol[0],
              rol: {
                id: 'V44oN0bG1LFiXdkKoE64',
                code: 'USUARIO'
              },
              enabled: 1,
              created_at: Date.now()
            }

            await this.usuarioSrv.create(usuario);

            this.authSrv.emailVerified();
            this.authSrv.logout();

            let timerInterval
            Swal.fire({
              title: 'Verifique su correo',
              html: 'Compruebe su bandeja de entrada o bandeja de spam y verifique el correo.',
              timer: 3000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                this.router.navigate(['/login']);
              }
            })

            // setTimeout(function () {
            //   this.router.navigate(['/login']);
            // }, 5000);
          });
        }
      })
    } catch (e: any) {
      Swal.fire({
        icon: 'error',
        title: 'El correo ya está en uso'
      })
    }
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
