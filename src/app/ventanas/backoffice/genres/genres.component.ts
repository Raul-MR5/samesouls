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

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

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

  artista;
  banner_type;
  url;
  description;

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.foto = "https://firebasestorage.googleapis.com/v0/b/samesouls-a0c25.appspot.com/o/merchan%2Fshirt-default.png?alt=media&token=7a0a9551-4c22-435f-8c26-5c1db4d3356a&_gl=1*wyidpd*_ga*MjEyNDUxODY3Ny4xNjY2MzY4MTYz*_ga_CW55HF8NVT*MTY4NTg3MDY4NC40Mi4xLjE2ODU4NzEwMzYuMC4wLjA.";

    this.front = this.foto;
    this.back = this.foto;
    this.model_front = this.foto;
    this.model_back = this.foto;
    
    this.usuario = this.usuarioSrv.getUsuario();

    // this.form = this.formBuilder.group({
    //   artista: '',
    //   banner_type: '',
    //   url: '',
    //   description: ''
    // });

    this.sizesSrv.getAll().subscribe(sizes => this.sizes = sizes);
    this.releaseTypeSrv.getAll().subscribe(type => this.releaseTypes = type);
    this.productTypeSrv.getAll().subscribe(type => { this.productTypes = type; this.productType = type[0].code });
    this.photoTypeSrv.getAll().subscribe(type => this.photoType = type);
    
    this.profileSrv.getAllMatchesRol('ARTISTA').subscribe(type => this.profiles = type);
    this.photoTypeSrv.getAll().subscribe(type => {this.bannerTypes = type.filter(t => t.name == "BANNER_HOME" || t.name == "BANNER_SHOP"); console.log("this.bannerTypes", this.bannerTypes)});
    this.photoTypeSrv.getAll().subscribe(type => {this.bannerTypes = type.filter(t => t.name == "BANNER_HOME" || t.name == "BANNER_SHOP"); console.log("this.bannerTypes", this.bannerTypes)});

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

  follow() {

  }

  onUploadImg(event) {

    let cover = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(cover);
    reader.onloadend = () => {
      this.foto = reader.result;
    }


    // this.storageSrv.uploadImg(this.name, this.name, cover).then(url => {
    //   console.log(url);
    // });
  }

  onUploadImgCloth(event, type) {

    let cover = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(cover);
    reader.onloadend = () => {
      console.log("type", type)
      switch (type) {
        case 'front':
          this.front = reader.result;
          break;
        case 'back':
          this.back = reader.result;
          break;
        case 'model_front':
          this.model_front = reader.result;
          break;
        case 'model_back':
          this.model_back = reader.result;
          break;
        // case 'model_side':
        //   this.model_side = reader.result;
        //   break;
      }
      this.foto = this.front;
    }


    // this.storageSrv.uploadImg(this.name, this.name, cover).then(url => {
    //   console.log(url);
    // });
  }

  onUploadMusic(event) {

    this.music = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(this.music);
    reader.onloadend = () => {
      // console.log(reader.result);
      this.foto = reader.result;
      // console.log(this.foto);
    }


    // this.storageSrv.uploadMusic(this.name, this.name, music).then(url => {
    //   console.log(url);
    // });
  }

  changePhoto() {
    console.log("entar")
    switch (this.productType) {
      case 'CLOTHING':
        this.foto = "https://firebasestorage.googleapis.com/v0/b/samesouls-a0c25.appspot.com/o/merchan%2Fshirt-default.png?alt=media&token=7a0a9551-4c22-435f-8c26-5c1db4d3356a&_gl=1*wyidpd*_ga*MjEyNDUxODY3Ny4xNjY2MzY4MTYz*_ga_CW55HF8NVT*MTY4NTg3MDY4NC40Mi4xLjE2ODU4NzEwMzYuMC4wLjA.";
        this.front = this.foto;
        this.back = this.foto;
        this.model_front = this.foto;
        this.model_back = this.foto;
        break;
      case 'MUSIC':
        this.foto = "https://firebasestorage.googleapis.com/v0/b/samesouls-a0c25.appspot.com/o/merchan%2Fdisk-default.png?alt=media&token=2df902ef-f2a8-4968-87f8-edefc65e706b&_gl=1*y3wz8w*_ga*MjEyNDUxODY3Ny4xNjY2MzY4MTYz*_ga_CW55HF8NVT*MTY4NTg3MDY4NC40Mi4xLjE2ODU4NzEwMDguMC4wLjA.";
        break;
    }
  }

  async submit() {
    try {

      let user: Usuario = this.profiles.filter(p => p.username == this.profile)[0];
      let type: PhotoType = this.bannerTypes.filter(b => b.name == this.bannerType)[0];

      console.log("entra")

      this.myuuid = uuidv4();

      let nBannerPhotos: BannerPhotos = {
        id: this.myuuid,
        artist: user,
        type: type,
        url: this.url,
        description: this.description,
        photo: user.foto
      }

      console.log("nBannerPhotos", nBannerPhotos)
      await this.bannerPhotosSrv.create(nBannerPhotos);

      console.log("hola")

    } catch (e: any) {
      // alert(e.message)
    }
  }
}
