import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { ProfilesService } from 'src/app/shared/services/profiles.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  usuario: Usuario;
  shop: Usuario[] = []

  constructor(
    private router: Router,
    private usuarioSrv: ProfilesService,
  ) { }

  ngOnInit(): void {    
    // document.getElementById("shop").className += " active"
    
    this.usuario = this.usuarioSrv.getUsuario();

    for (let i = 0; i < this.usuario.seguidos.length; i++) {
      this.usuarioSrv.getOne(this.usuario.seguidos[i]).subscribe(user => {
        this.shop.push(user);
      })
      
    }
  }

  ngOnDestroy(): void {
    // document.getElementById("shop").classList.remove("active")
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
