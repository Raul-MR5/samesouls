import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BannerPhotos } from 'src/app/shared/models/banner_photos.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BannerPhotosService } from 'src/app/shared/services/banner_photos.service';
// import { CancionService } from 'src/app/shared/services/cancion.service';
import { ProfilesService } from 'src/app/shared/services/profiles.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  form: FormGroup;

  prueba = [1, 2, 3, 4]
  user;
  photo;
  title: string = 'SameSouls';

  // friendSongs: Cancion[] = [];
  // newSongs: Cancion[] = [];

  // canciones: Cancion[];
  artistas: Usuario[];
  banner: BannerPhotos[];

  busqueda: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authSrv: AuthService,
    private usuarioSrv: ProfilesService,
    private bannerSrv: BannerPhotosService,
    // private cancionSrv: CancionService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // document.getElementById("sidebarhome").className += " active"

    this.bannerSrv.getByType('BANNER_HOME').subscribe(banner => {
      this.banner = banner;
    })

    this.form = this.formBuilder.group({
      search: ['']
    });

    this.user = this.usuarioSrv.getUsuario()
    this.authSrv.authenticated().subscribe(bool => {
      if (bool) {
        this.authSrv.getUsuario().subscribe(user => {
          this.usuarioSrv.getOne(user.uid).subscribe(usuario => {

            this.user = usuario;

            // this.cancionSrv.getAllByDate().subscribe(music => {
            //   if (this.user.seguidos) {
            //     if (this.user.seguidos.length > 0) {
            //       for (let j = 0; j < this.user.seguidos.length; j++) {
            //         for (let i = 0; i < music.length; i++) {
            //           if (music[i].usuario.id != this.user.id) {

            //             if (this.user.seguidos.includes(music[i].usuario.id)) {
            //               if (this.friendSongs.length < 4) {
            //                 this.friendSongs.push(music[i]);
            //               }
            //             } else {
            //               if (this.newSongs.length < 4) {
            //                 this.newSongs.push(music[i]);
            //               }
            //             }

            //           }
            //         }
            //       }
            //     } else {
            //       for (let i = 0; i < music.length; i++) {
            //         if (music[i].usuario.id != this.user.id) {
            //           if (this.newSongs.length < 4) {
            //             this.newSongs.push(music[i])
            //           }
            //         }
            //       }
            //     }
            //   } else {
            //     for (let i = 0; i < music.length; i++) {
            //       if (music[i].usuario.id != this.user.id) {
            //         if (this.newSongs.length < 4) {
            //           this.newSongs.push(music[i])
            //         }
            //       }
            //     }
            //   }
            // })

          })
        });
      }
    })
  }

  ngOnDestroy(): void {
    // document.getElementById("sidebarhome").classList.remove("active")
  }

  titulo() {
    this.title = 'Hola'
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }

  search() {
    if (this.form.value.search.length > 0) {
      this.busqueda = true;

      this.usuarioSrv.getAllMatches(this.form.value.search).subscribe(artistas => {
        this.artistas = artistas;
      });

      // this.cancionSrv.getAllMatches(this.form.value.search).subscribe(canciones => {
      //   this.canciones = canciones;
      // });

    } else {
      this.busqueda = false;
    }
  }
}
