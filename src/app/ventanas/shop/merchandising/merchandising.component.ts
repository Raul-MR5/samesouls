import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { AuthService } from 'src/app/shared/services/auth.service';
// import { CancionService } from 'src/app/shared/services/cancion.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ProfilesService } from 'src/app/shared/services/profiles.service';
import { v4 as uuidv4 } from 'uuid';
import { Subscription } from 'rxjs';
import { SizesService } from 'src/app/shared/services/sizes.service';
import { Size } from 'src/app/shared/models/size.model';

@Component({
  selector: 'app-merchandising',
  templateUrl: './merchandising.component.html',
  styleUrls: ['./merchandising.component.scss']
})
export class MerchandisingComponent implements OnInit {

  id: string;
  form: FormGroup;
  user: Usuario;
  
  name;
  photo;
  foto;

  music;

  prueba = []

  disabled = true;

  suscriptions: Subscription[] = [];

  sizes: Size[];

  type = 'music'
  photo1 = 'front'
  photo2 = 'back'
  photo3 = 'model_front'
  photo4 = 'model_back'
  photo5 = 'model_side'

  constructor(
    private formBuilder: FormBuilder,
    private authSrv: AuthService,
    private usuarioSrv: ProfilesService,
    private sizesSrv: SizesService,
    // private cancionSrv: CancionService,
    private storageSrv: StorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const paramsSubscription: Subscription = this.activatedRoute.params.subscribe((params: Params) => { this.id = params['id']; console.log(this.id, "hola"); /* let p = this.prueba(); console.log(p) */ });

    this.suscriptions.push(paramsSubscription);

    this.sizesSrv.getAll().subscribe(sizes => this.sizes = sizes);
    console.log(this.suscriptions)
    
    // this.user = this.usuarioSrv.getUsuario();
    // console.log(this.user)

    this.form = this.formBuilder.group({
      // foto: [''],
      // username: [this.user.username, [Validators.required]],
      // nombre: [this.user.nombre, [Validators.required]],
      // apellidos: [this.user.apellidos],
      // email: [{ value: this.user.email, disabled: true }, [Validators.required]]
    });

    // this.foto = this.user.foto;
  }

  ngOnDestroy(): void {
  }


  goTo(url: string) {
    this.router.navigate([url]);
  }

  async logout() {
    await this.authSrv.logout().then(() => {
      console.log(this.authSrv.getUsuario());
    }
    );
    this.router.navigate(['/login']);
  }

  follow() {

  }

  onUploadImg(event) {

    let cover = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(cover);
    reader.onloadend = () => {
      this.foto = reader.result;
    }
  }

  async submit() {
    try {
      this.storageSrv.uploadImg("avatar/", this.user.email, this.foto).then(async urlImagen => {

        let usuario: Usuario;
        if (urlImagen) {
          usuario = {
            id: this.user.id,
            nombre: this.form.value.nombre,
            apellidos: this.form.value.apellidos,
            email: this.user.email,
            foto: urlImagen,
            username: this.form.value.username
          }
        } else{
          usuario = {
            id: this.user.id,
            nombre: this.form.value.nombre,
            apellidos: this.form.value.apellidos,
            email: this.user.email,
            foto: this.foto,
            username: this.form.value.username
          }
        }


        await this.usuarioSrv.update(usuario);

        this.router.navigate(['/profile']);
      });

    } catch (e: any) {
      // alert(e.message)
    }
  }

  back() {
    history.back();
  }

}
