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
              this.photo = "https://firebasestorage.googleapis.com/v0/b/samesouls-tfg.appspot.com/o/user-photo.png?alt=media&token=c9588aa9-1450-4932-86cd-d480853474d1"
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
    }
    );

    // this.cancionSrv.pauseSong();
    // this.cancionSrv.cleanSong();

    this.router.navigate(['/']);
  }
}
