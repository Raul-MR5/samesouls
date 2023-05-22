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

@Component({
  selector: 'app-nueva-cancion',
  templateUrl: './nueva-cancion.component.html',
  styleUrls: ['./nueva-cancion.component.scss']
})
export class NuevaCancionComponent implements OnInit {

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

  prueba = []

  constructor(
    private formBuilder: FormBuilder,
    private authSrv: AuthService,
    private usuarioSrv: ProfilesService,
    private cancionSrv: SongsService,
    private storageSrv: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      foto: [''],
      titulo: ['', [Validators.required]],
      cancion: ['', [Validators.required]],
      lyrics: ['']
    });

    this.foto = "https://firebasestorage.googleapis.com/v0/b/boomclub-tfg.appspot.com/o/portadas%2Fdefault-cover-art.png?alt=media&token=39a74894-86e2-4413-81f0-b8584a500b36";
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
        this.foto = reader.result;
        // console.log(this.foto);
      }


    // this.storageSrv.uploadMusic(this.name, this.name, music).then(url => {
    //   console.log(url);
    // });
  }

  async submit() {
    try {

      let user: Usuario = this.usuarioSrv.getUsuario();

      this.storageSrv.uploadImg("portadas/cancion/" + user.email, this.form.value.titulo, this.foto).then(async urlImagen => {

        this.storageSrv.uploadMusic(user.email, this.form.value.titulo, this.music).then(async url => {

          let myuuid = uuidv4();

          let cancion: Song;
          // if (urlImagen) {
          //   cancion = {
          //     id: myuuid,
          //     usuario: user,
          //     titulo: this.form.value.titulo,
          //     lyrics: this.form.value.lyrics,
          //     cancion: url,
          //     foto: urlImagen,
          //     fecha: new Date()
          //   }
          // } else{
          //   cancion = {
          //     id: myuuid,
          //     usuario: user,
          //     titulo: this.form.value.titulo,
          //     lyrics: this.form.value.lyrics,
          //     cancion: url,
          //     foto: this.foto,
          //     fecha: new Date()
          //   }
          // }
          

          await this.cancionSrv.create(cancion);

          this.router.navigate(['/profile/' + user.id]);
        });

      });

    } catch (e: any) {
      // alert(e.message)
    }
  }


  newSong(){
    this.view = 'song';
  }

  addSong(){
    this.nSong = {
      title: this.songTitle,
      audio: this.music
    }

    console.log("this.nSong", this.nSong)

    this.canciones.push(this.nSong);

    this.songTitle = '';
    this.songAudio = '';
    this.view = 'release';
  }

  cancel(){
    this.songTitle = '';
    this.songAudio = '';
    this.view = 'release';
  }
}
