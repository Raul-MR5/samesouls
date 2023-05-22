import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { AuthService } from 'src/app/shared/services/auth.service';
// import { CancionService } from 'src/app/shared/services/cancion.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ProfilesService } from 'src/app/shared/services/profiles.service';
import { v4 as uuidv4 } from 'uuid';
import { Subscription } from 'rxjs';
import { Song } from 'src/app/shared/models/song.model';
import { SongsService } from 'src/app/shared/services/songs.service';

@Component({
  selector: 'app-artista-profile',
  templateUrl: './artista-profile.component.html',
  styleUrls: ['./artista-profile.component.scss']
})
export class ArtistaProfileComponent implements OnInit {

  id: string;
  user: Usuario;
  
  name;
  photo;
  foto;

  music;

  canciones = [];

  playB: string = '';

  disabled = true;

  suscriptions: Subscription[] = [];

  constructor(
    private authSrv: AuthService,
    private usuarioSrv: ProfilesService,
    private songSrv: SongsService,
    private storageSrv: StorageService,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const paramsSubscription: Subscription = this.activatedRoute.params.subscribe((params: Params) => { this.id = params['id'];});

    this.suscriptions.push(paramsSubscription);

    console.log(this.suscriptions)
    
    this.usuarioSrv.getOne(this.id).subscribe(user => {
      this.user = user;
      this.foto = this.user.foto;
      this.songSrv.getByArtist(this.user.username).subscribe(song => {
        this.canciones = [];
        song.forEach(element => {
          let audio = new Audio(element.audio);
          let time = this.parseTime(Math.random() * (240 - 120) + 120);
          
          this.canciones.push({
            ...element,
            raw: audio,
            time: time
          })
        })
      })
    });
    console.log(this.user)

  }

  ngOnDestroy(): void {
    this.playB = '';
    this.pause();
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

  parseTime(time){
    if (time){
      var minute = Math.floor((time / 60) % 60);
      var second = Math.floor(time % 60);
      
      if (second < 10) {
        return (minute + ':0' + second);
      } else {
        return (minute + ':' + second);
      }
      
    }else{
      return '0:00'
    }
  }

  play(cancion) {
    this.playB = cancion.title;

    this.songSrv.playSong(cancion.raw);
  }

  pause() {
    this.playB = '';

    this.songSrv.pauseSong();
  }

  onUploadImg(event) {

    let cover = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(cover);
    reader.onloadend = () => {
      this.foto = reader.result;
    }
  }

}
