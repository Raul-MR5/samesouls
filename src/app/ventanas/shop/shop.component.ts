import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Genre } from 'src/app/shared/models/genre.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { GenresService } from 'src/app/shared/services/genres.service';
import { ProfilesService } from 'src/app/shared/services/profiles.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  usuario: Usuario;
  artistas: Usuario[] = []
  allArtistas: Usuario[] = []
  genres: Genre[] = []
  form: FormGroup;
  busqueda: boolean;

  constructor(
    private router: Router,
    private usuarioSrv: ProfilesService,
    private genreSrv: GenresService,
  ) { }

  ngOnInit(): void {    
    // document.getElementById("shop").className += " active"
    
    this.usuario = this.usuarioSrv.getUsuario();

    this.usuarioSrv.getAllMatchesRol("ARTISTA").subscribe(a => {
      this.artistas = a;
      this.artistas.push(a[0]);
      this.artistas.push(a[0]);
      this.artistas.push(a[0]);
      this.artistas.push(a[0]);
      this.artistas.push(a[0]);
      this.allArtistas = this.artistas;
    })

    this.genreSrv.getAll().subscribe(g => {
      this.genres = g;
    })
  }

  ngOnDestroy(): void {
    // document.getElementById("shop").classList.remove("active")
  }

  search() {
    if (this.form.value.search.length > 0) {
      this.busqueda = true;

      this.usuarioSrv.getAllMatchesArtista(this.form.value.search).subscribe(artistas => {
        this.artistas = artistas;
      });
      // this.usuarioSrv.getAllMatches(this.form.value.search).subscribe(artistas => {
      //   this.artistas = artistas;
      // });

    } else {
      this.artistas = this.allArtistas
      this.busqueda = false;
    }
  }

  filter(genre: string) {
    if (genre.length > 0) {
      this.usuarioSrv.getAllMatchesGenre(genre).subscribe(artistas => {
        this.artistas = artistas;
      })
    } else {
      this.artistas = this.allArtistas;
    }
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
