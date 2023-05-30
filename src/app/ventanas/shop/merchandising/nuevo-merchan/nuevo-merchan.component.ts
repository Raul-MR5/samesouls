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

@Component({
  selector: 'app-nuevo-merchan',
  templateUrl: './nuevo-merchan.component.html',
  styleUrls: ['./nuevo-merchan.component.scss']
})
export class NuevoMerchanComponent implements OnInit {

  myuuid;
  view = 'release';

  form: FormGroup;
  user;
  name;
  photo;
  foto;

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.foto = "https://firebasestorage.googleapis.com/v0/b/boomclub-tfg.appspot.com/o/portadas%2Fdefault-cover-art.png?alt=media&token=39a74894-86e2-4413-81f0-b8584a500b36";

    this.sizesSrv.getAll().subscribe(sizes => this.sizes = sizes);
    this.releaseTypeSrv.getAll().subscribe(type => this.releaseTypes = type);
    this.productTypeSrv.getAll().subscribe(type => { this.productTypes = type; this.productType = type[1].code });
    this.photoTypeSrv.getAll().subscribe(type => this.photoType = type);
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

  async submit() {
    try {

      let user: Usuario = this.usuarioSrv.getUsuario();

      this.storageSrv.uploadImg("merchan/" + user.email, this.releaseTitle, this.foto).then(async urlImagen => {

        this.myuuid = uuidv4();

        let nProduct: Product = {
          id: this.myuuid,
          name: 'name',
          description: 'description',
          product_type: this.productTypes.filter(product => this.productType == product.code)[0]
        }

        await this.productSrv.create(nProduct);

        this.myuuid = uuidv4();

        let nProductPhoto: ProductPhotos = {
          id: this.myuuid,
          photo: urlImagen,
          photo_type: this.photoType.filter(type => type.name == 'DISK')[0],
          product: nProduct
        }

        await this.productPhotoSrv.create(nProductPhoto);

        let merchanCode = uuidv4();

        this.sizes.forEach(async element => {

          console.log("element", element)
          this.myuuid = uuidv4();
          console.log("myuuid", this.myuuid)

          let merchandising: Merchandising;
          merchandising = {
            id: this.myuuid,
            code: merchanCode,
            product: nProduct,
            prize: 9.99,
            stock: 100,
            size: element,
            created_at: new Date().getTime()
          }
          console.log("merchandising", merchandising)

          await this.merchandisingSrv.create(merchandising);

        })
        this.router.navigate(['/shop']);

      });

    } catch (e: any) {
      // alert(e.message)
    }
  }


  newSong() {

    this.view = 'song';
  }

  addSong() {
    this.nSong = {
      title: this.songTitle,
      audio: this.music
    }

    this.canciones.push(this.nSong);

    this.songTitle = '';
    this.songAudio = '';
    this.view = 'release';
  }

  cancel() {
    this.songTitle = '';
    this.songAudio = '';
    this.view = 'release';
  }
}
