import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cancion } from 'src/app/shared/models/cancion.model';
import { Lista } from 'src/app/shared/models/lista.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CancionService } from 'src/app/shared/services/cancion.service';
import { ListaService } from 'src/app/shared/services/lista.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-nueva-lista',
  templateUrl: './nueva-lista.component.html',
  styleUrls: ['./nueva-lista.component.scss']
})
export class NuevaListaComponent implements OnInit {

  form: FormGroup;
  user;
  name;
  photo;
  foto;

  music;

  prueba = []

  constructor(
    private formBuilder: FormBuilder,
    private authSrv: AuthService,
    private usuarioSrv: UsuarioService,
    private cancionSrv: CancionService,
    private listaSrv: ListaService,
    private storageSrv: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.usuarioSrv.getUsuario();

    this.form = this.formBuilder.group({
      foto: [''],
      titulo: ['', [Validators.required]]
    });

    this.foto = "https://firebasestorage.googleapis.com/v0/b/samesouls-tfg.appspot.com/o/portadas%2Fdefault-cover-art.png?alt=media&token=39a74894-86e2-4413-81f0-b8584a500b36";
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
      this.storageSrv.uploadImg("portadas/lista/" + this.user.email, this.form.value.titulo, this.foto).then(async urlImagen => {
        
        let myuuid = uuidv4();
        let lista: Lista;
        if (urlImagen) {
          lista = {
            id: myuuid,
            nombre: this.form.value.titulo,
            usuario: this.user,
            foto: urlImagen
          }
        } else{
          lista = {
            id: myuuid,
            nombre: this.form.value.titulo,
            usuario: this.user,
            foto: this.foto
          }
        }


        await this.listaSrv.create(lista);

        this.router.navigate(['/profile/' + this.user.id]);
      });

    } catch (e: any) {
      // alert(e.message)
    }
  }

}
