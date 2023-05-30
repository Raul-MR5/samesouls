import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Genre } from 'src/app/shared/models/genre.model';
import { Merchandising } from 'src/app/shared/models/merchandising.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { GenresService } from 'src/app/shared/services/genres.service';
import { MerchandisingService } from 'src/app/shared/services/merchandising.service';
import { ProductPhotosService } from 'src/app/shared/services/product_photos.service';
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
  merchan = []
  allMerchan = []
  genres: Genre[] = []
  form: FormGroup;
  busqueda: boolean;

  constructor(
    private router: Router,
    private usuarioSrv: ProfilesService,
    private merchandisingSrv: MerchandisingService,
    private productPhotoSrv: ProductPhotosService,
    private genreSrv: GenresService,
  ) { }

  ngOnInit(): void {
    // document.getElementById("shop").className += " active"

    this.usuario = this.usuarioSrv.getUsuario();

    this.merchandisingSrv.getAllOrdered().subscribe(merchan => {
      const unique = merchan.filter(
        (obj, index) =>
          merchan.findIndex((item) => item.code === obj.code) === index
      );

      unique.forEach(u => {
        this.productPhotoSrv.getByProduct(u.product.id).subscribe(photo => {
          photo.forEach(p => {
            if ((p.photo_type.name == 'DISK') || (p.photo_type.name == 'FRONT')) {
              this.merchan.push({
                ...u,
                photo: this.getProductPhoto(u.product)
              })
            }
          })
        })
        
      })

      console.log("unique", unique);
      console.log("merchan", this.merchan);
      // this.merchan = unique;
      this.allMerchan = this.merchan;

      // this.artistas = a;
      // this.allArtistas = this.artistas;
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

  getProductPhoto(product) {
    this.productPhotoSrv.getByProduct(product.id).subscribe(photo => {
      photo.forEach(p => {
        if ((p.photo_type.name == 'DISK') || (p.photo_type.name == 'FRONT')) {
          console.log(p.photo)
          return p.photo
        } else {
          return '';
        }
      })
    })
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
