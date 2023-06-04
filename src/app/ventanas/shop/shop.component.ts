import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BannerPhotos } from 'src/app/shared/models/banner_photos.model';
import { Genre } from 'src/app/shared/models/genre.model';
import { Merchandising } from 'src/app/shared/models/merchandising.model';
import { ProductPhotos } from 'src/app/shared/models/product_photos.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { BannerPhotosService } from 'src/app/shared/services/banner_photos.service';
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
  merchanPhotos: ProductPhotos[] = []
  form: FormGroup;
  busqueda: boolean;
  banner: BannerPhotos[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioSrv: ProfilesService,
    private merchandisingSrv: MerchandisingService,
    private productPhotoSrv: ProductPhotosService,
    private bannerSrv: BannerPhotosService,
    private genreSrv: GenresService,
  ) { }

  ngOnInit(): void {
    // document.getElementById("shop").className += " active"

    this.bannerSrv.getByType('BANNER_SHOP').subscribe(banner => {
      this.banner = banner;
    })
    
    this.form = this.formBuilder.group({
      search: ['']
    });

    this.usuario = this.usuarioSrv.getUsuario();

    this.merchandisingSrv.getAllOrdered().subscribe(merchan => {
      console.log("m", merchan)
      const unique = merchan.filter(
        (obj, index) =>
          merchan.findIndex((item) => item.code === obj.code) === index
      );

      // this.productPhotoSrv.getAll().subscribe(photos => {
      //   photos.forEach(p => {
      //     if ((p.photo_type.name == 'DISK') || (p.photo_type.name == 'FRONT')) {
      //       console.log(p.photo)
      //       return p.photo
      //     } else {
      //       return '';
      //     }
      //   })
      // })

      unique.forEach(u => {
        this.productPhotoSrv.getOrderedTypeName().subscribe(photo => {
          photo.forEach(p => {
            if (((p.photo_type.name == 'DISK') || (p.photo_type.name == 'FRONT')) && (p.product.id == u.product.id)) {
              this.merchan.push({
                ...u,
                photo: p
              })
            }
          })
        })
      })

      console.log("unique", unique);
      console.log("merchan", this.merchan);
      // // this.merchan = unique;
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

  // getProductPhoto(product) {
  //   this.productPhotoSrv.getByProduct(product.id).subscribe(photo => {
  //     photo.forEach(p => {
  //       if ((p.photo_type.name == 'DISK') || (p.photo_type.name == 'FRONT')) {
  //         console.log(p.photo)
  //         return p.photo
  //       } else {
  //         return '';
  //       }
  //     })
  //   })
  // }

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
