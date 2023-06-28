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
import { GenresService } from 'src/app/shared/services/genres.service';
import { Genre } from 'src/app/shared/models/genre.model';

@Component({
  selector: 'app-nuevo-artista',
  templateUrl: './nuevo-artista.component.html',
  styleUrls: ['./nuevo-artista.component.scss']
})
export class NuevoArtistaComponent implements OnInit {

  form: FormGroup;
  user: Usuario;
  name: string;

  imagenes: any[] = [];
  avatar: any;
  
  rol: Rol[];
  genre: Genre[];

  constructor(
    private formBuilder: FormBuilder,
    // private accountSrv: AccountService,
    private authSrv: AuthService,
    private usuarioSrv: ProfilesService,
    private rolSrv: RolesService,
    private genreSrv: GenresService,
    private storageSrv: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('usuario')) {
      this.router.navigate(['/']);
    }

    this.rolSrv.getByCode("ARTISTA").subscribe(r => {
      this.rol = r
    });

    this.genreSrv.getAll().subscribe(g => {
      this.genre = g;
    });

    this.avatar = "https://firebasestorage.googleapis.com/v0/b/samesouls-a0c25.appspot.com/o/user-photo.png?alt=media&token=04f07362-f1be-4501-a038-fdd7cec3bb2a";

    this.form = this.formBuilder.group({
      foto: '',
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.pattern("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$")]],
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      apellidos: ['', [Validators.minLength(3), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      description: [''],
      genre: ['', [Validators.required]],
      repeat_password: ['', Validators.required]
    });
  }

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
        if (user) {
          user.user.updateProfile({
            displayName: this.form.value.username
          })

          this.storageSrv.uploadImg("avatar", this.form.value.email, this.avatar).then(async urlImagen => {

            console.log("urlImagen", urlImagen)

            if (!urlImagen) {
              urlImagen = "https://firebasestorage.googleapis.com/v0/b/samesouls-a0c25.appspot.com/o/user-photo.png?alt=media&token=04f07362-f1be-4501-a038-fdd7cec3bb2a"
            }

            let usuario: Usuario = {
              id: user.user.uid,
              username: this.form.value.username,
              nombre: this.form.value.nombre,
              apellidos: this.form.value.apellidos,
              description: this.form.value.description,
              genre: this.form.value.genre,
              email: this.form.value.email,
              foto: urlImagen,
              rol: this.rol[0],
              enabled: 1,
              created_at: Date.now()
            }
            console.log("usuario", usuario)

            await this.usuarioSrv.create(usuario);

            this.router.navigate(['']);
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
