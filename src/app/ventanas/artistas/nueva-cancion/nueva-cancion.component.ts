import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Song } from 'src/app/shared/models/song.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SongsService } from 'src/app/shared/services/songs.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ProfilesService } from 'src/app/shared/services/profiles.service';
import { v4 as uuidv4 } from 'uuid';
import { Release } from 'src/app/shared/models/release.model';
import { ReleasesService } from 'src/app/shared/services/releases.service';
import { ReleaseTypesService } from 'src/app/shared/services/release_types.service';
import { ReleaseType } from 'src/app/shared/models/release_type.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-cancion',
  templateUrl: './nueva-cancion.component.html',
  styleUrls: ['./nueva-cancion.component.scss']
})
export class NuevaCancionComponent implements OnInit {

  myuuid;
  view = 'release';

  form: FormGroup;
  user;
  name;
  photo;
  foto;

  music;

  release: Release;
  canciones: any[] = [];

  nSong;
  songTitle;
  songAudio;
  releaseTitle;

  releaseType: ReleaseType
  releaseTypes: ReleaseType[]

  prueba = []

  constructor(
    private formBuilder: FormBuilder,
    private authSrv: AuthService,
    private usuarioSrv: ProfilesService,
    private cancionSrv: SongsService,
    private releaseSrv: ReleasesService,
    private releaseTypeSrv: ReleaseTypesService,
    private storageSrv: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.foto = "https://firebasestorage.googleapis.com/v0/b/samesouls-a0c25.appspot.com/o/portadas%2Fdefault-cover-art.png?alt=media&token=bcb81ed2-8616-4704-a407-cccaed8f388e&_gl=1*1illzu0*_ga*MjEyNDUxODY3Ny4xNjY2MzY4MTYz*_ga_CW55HF8NVT*MTY4NTg3MDY4NC40Mi4xLjE2ODU4NzA4MDAuMC4wLjA.";

    this.releaseTypeSrv.getAll().subscribe(type => this.releaseTypes = type);
  }

  ngOnDestroy(): void {
    // document.getElementById("canciones").classList.remove("active")
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


    // this.storageSrv.uploadImg(this.name, this.name, cover).then(url => {
    //   console.log(url);
    // });
  }

  onUploadMusic(event) {

    this.music = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(this.music);
    reader.onloadend = () => {
      // console.log(reader.result);
      // this.foto = reader.result;
      // console.log(this.foto);
    }


    // this.storageSrv.uploadMusic(this.name, this.name, music).then(url => {
    //   console.log(url);
    // });
  }

  async submit() {
    try {

      let user: Usuario = this.usuarioSrv.getUsuario();

      this.storageSrv.uploadImg("portadas/release/" + user.email, this.releaseTitle, this.foto).then(async urlImagen => {

        if (this.canciones.length == 1) {
          this.releaseType = this.releaseTypes.filter(type => type.type == 'SINGLE')[0];
        } else if (this.canciones.length > 1 && this.canciones.length < 8) {
          this.releaseType = this.releaseTypes.filter(type => type.type == 'EP')[0];
        } else if (this.canciones.length > 8) {
          this.releaseType = this.releaseTypes.filter(type => type.type == 'ALBUM')[0];
        } else {
          this.releaseType = null;
        }

        this.myuuid = uuidv4();

        if (this.releaseType) {
          let nRelease: Release = {
            id: this.myuuid,
            photo: urlImagen ? urlImagen : this.foto,
            title: this.releaseTitle,
            release_type: this.releaseType,
            artist: user,
            created_at: new Date().getTime()
          }

          await this.releaseSrv.create(nRelease);

          this.canciones.forEach(async element => {
            this.storageSrv.uploadMusic(user.email + '/' + this.releaseTitle, element.title, element.audio).then(async url => {

              console.log("url", url)

              console.log("element", element)
              this.myuuid = uuidv4();
              console.log("myuuid", this.myuuid)

              let cancion: Song;
              cancion = {
                id: this.myuuid,
                title: element.title,
                release: nRelease,
                audio: url,
                created_at: new Date().getTime()
              }
              console.log("cancion", cancion)

              await this.cancionSrv.create(cancion);

            });
          })
          this.router.navigate(['/artistas/' + user.id]);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'No se ha añadido ninguna canción'
          })
        }

      });

    } catch (e: any) {
      // alert(e.message)
    }
  }


  newSong() {

    this.view = 'song';
  }

  addSong() {
    this.nSong = {
      title: this.songTitle,
      audio: this.music
    }

    this.canciones.push(this.nSong);

    this.songTitle = '';
    this.songAudio = '';
    this.view = 'release';
  }

  cancel() {
    this.songTitle = '';
    this.songAudio = '';
    this.view = 'release';
  }
}
