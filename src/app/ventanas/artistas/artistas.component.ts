import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { ProfilesService } from 'src/app/shared/services/profiles.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {

  usuario: Usuario;
  artistas: Usuario[] = []
  allArtistas: Usuario[] = []
  form: FormGroup;
  busqueda: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioSrv: ProfilesService,
  ) { }

  ngOnInit(): void {    
    // document.getElementById("artistas").className += " active"
    
    this.form = this.formBuilder.group({
      search: ['']
    });

    this.usuario = this.usuarioSrv.getUsuario();

    this.usuarioSrv.getAllMatchesRol("ARTISTA").subscribe(a => {
      // this.artistas = a;
      this.artistas.push(a[0]);
      this.artistas.push(a[0]);
      this.artistas.push(a[0]);
      this.artistas.push(a[0]);
      this.artistas.push(a[0]);
      this.allArtistas = this.artistas;
    })
  }

  ngOnDestroy(): void {
    // document.getElementById("artistas").classList.remove("active")
  }

  search() {
    if (this.form.value.search.length > 0) {
      this.busqueda = true;

      this.usuarioSrv.getAllMatches(this.form.value.search).subscribe(artistas => {
        this.artistas = artistas;
      });

    } else {
      this.artistas = this.allArtistas
      this.busqueda = false;
    }
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
