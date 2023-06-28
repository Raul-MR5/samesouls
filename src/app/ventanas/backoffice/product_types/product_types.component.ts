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
import { ReleaseType } from 'src/app/shared/models/release_type.model';
import { ReleasesService } from 'src/app/shared/services/releases.service';
import { ReleaseTypesService } from 'src/app/shared/services/release_types.service';
import Swal from 'sweetalert2';
import { SizesService } from 'src/app/shared/services/sizes.service';
import { Size } from 'src/app/shared/models/size.model';
import { ProductsService } from 'src/app/shared/services/product.service';
import { ProductPhotosService } from 'src/app/shared/services/product_photos.service';
import { ProductTypesService } from 'src/app/shared/services/product_types.service';
import { ProductType } from 'src/app/shared/models/product_type.model';
import { PhotoTypesService } from 'src/app/shared/services/photo_types.service';
import { PhotoType } from 'src/app/shared/models/photo_type.model';
import { Product } from 'src/app/shared/models/product.model';
import { ProductPhotos } from 'src/app/shared/models/product_photos.model';
import { MerchandisingService } from 'src/app/shared/services/merchandising.service';
import { Merchandising } from 'src/app/shared/models/merchandising.model';
import { BannerPhotos } from 'src/app/shared/models/banner_photos.model';
import { BannerPhotosService } from 'src/app/shared/services/banner_photos.service';
import { Genre } from 'src/app/shared/models/genre.model';
import { GenresService } from 'src/app/shared/services/genres.service';

@Component({
  selector: 'app-product_types',
  templateUrl: './product_types.component.html',
  styleUrls: ['./product_types.component.scss']
})
export class ProductTypesComponent implements OnInit {

  myuuid;

  form: FormGroup;
  usuario: Usuario;
  name;
  photo;

  foto;
  front;
  back;
  model_front;
  model_back;
  model_side;

  music;

  release: Release;
  canciones: any[] = [];

  sizes: Size[];
  productType: string;
  productTypes: ProductType[];
  photoType: PhotoType[];

  nSong;
  songTitle;
  songAudio;
  releaseTitle;

  releaseType: ReleaseType
  releaseTypes: ReleaseType[]

  profile: string
  profiles: Usuario[]

  bannerType: string
  bannerTypes: PhotoType[]

  code;

  prueba = []

  constructor(
    private formBuilder: FormBuilder,
    private authSrv: AuthService,
    private usuarioSrv: ProfilesService,
    private cancionSrv: SongsService,
    private sizesSrv: SizesService,
    private productSrv: ProductsService,
    private productTypeSrv: ProductTypesService,
    private productPhotoSrv: ProductPhotosService,
    private photoTypeSrv: PhotoTypesService,
    private merchandisingSrv: MerchandisingService,
    private releaseSrv: ReleasesService,
    private releaseTypeSrv: ReleaseTypesService,
    private storageSrv: StorageService,
    private profileSrv: ProfilesService,
    private bannerPhotosSrv: BannerPhotosService,
    private genresSrv: GenresService,
    private router: Router
  ) { }

  ngOnInit(): void {    
    this.usuario = this.usuarioSrv.getUsuario();
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

  async submit() {
    try {

      this.myuuid = uuidv4();

      let nProductType: ProductType = {
        id: this.myuuid,
        code: this.code
      }

      await this.productTypeSrv.create(nProductType);
      
      let timerInterval
      Swal.fire({
        title: 'Se han actualizado los tipos de producto',
        html: 'Se ha añadido un nuevo tipo de producto.',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          this.router.navigate(['/backoffice']);
        }
      })

    } catch (e: any) {
      // alert(e.message)
    }
  }
}
