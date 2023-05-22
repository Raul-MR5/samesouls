import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
// import { CancionService } from 'src/app/shared/services/cancion.service';
import { ProfilesService } from 'src/app/shared/services/profiles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user;
  name;
  photo;

  constructor(
    private authSrv: AuthService,
    private usuarioSrv: ProfilesService,
    // private cancionSrv: CancionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authSrv.authenticated().subscribe(bool => {

      if (bool) {
        this.authSrv.getUsuario().subscribe(user => {
          this.usuarioSrv.getOne(user.uid).subscribe(usuario => {
            console.log("user", usuario)
            this.usuarioSrv.setUsuario(usuario);

            this.user = usuario;

            this.photo = usuario.foto
            this.name = usuario.username;

            if (!this.photo) {
              this.photo = "https://firebasestorage.googleapis.com/v0/b/samesouls-a0c25.appspot.com/o/user-photo.png?alt=media&token=04f07362-f1be-4501-a038-fdd7cec3bb2a"
            }
          })
        });
      }
    })    
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }

  async logout() {
    await this.authSrv.logout().then( ()=>{
      // this.user = false;
      // this.authSrv.authenticated().subscribe(bool => {
      //   console.log(bool)
      // })
      location.reload();
      // this.router.navigate(['/']);
    }
    );

    // this.cancionSrv.pauseSong();
    // this.cancionSrv.cleanSong();

    // this.router.navigate(['/']);
  }
}
