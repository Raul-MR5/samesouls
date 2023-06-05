import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { AuthService } from 'src/app/shared/services/auth.service';
// import { CancionService } from 'src/app/shared/services/cancion.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ProfilesService } from 'src/app/shared/services/profiles.service';
import { v4 as uuidv4 } from 'uuid';
import { Subscription } from 'rxjs';
import { SizesService } from 'src/app/shared/services/sizes.service';
import { Size } from 'src/app/shared/models/size.model';
import { MerchandisingService } from 'src/app/shared/services/merchandising.service';
import { Merchandising } from 'src/app/shared/models/merchandising.model';
import { ProductPhotos } from 'src/app/shared/models/product_photos.model';
import { ProductPhotosService } from 'src/app/shared/services/product_photos.service';
import { Purchase } from 'src/app/shared/models/purchase.model';
import { PurchasesService } from 'src/app/shared/services/purchases.service';
import { Cart } from 'src/app/shared/models/cart.model';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-merchandising',
  templateUrl: './merchandising.component.html',
  styleUrls: ['./merchandising.component.scss']
})
export class MerchandisingComponent implements OnInit {

  id: string;
  form: FormGroup;
  user: Usuario;

  name;
  photo;
  foto;

  music;

  prueba = []

  disabled = true;

  suscriptions: Subscription[] = [];

  sizes: Size[];
  merchandising: Merchandising;
  productPhotos: ProductPhotos[];

  type = 'clothing'
  photo1 = 'front'
  photo2 = 'back'
  photo3 = 'model_front'
  photo4 = 'model_back'
  photo5 = 'model_side'

  constructor(
    private formBuilder: FormBuilder,
    private authSrv: AuthService,
    private usuarioSrv: ProfilesService,
    private sizesSrv: SizesService,
    private merchandisingSrv: MerchandisingService,
    private productPhotosSrv: ProductPhotosService,
    private purchaseSrv: PurchasesService,
    private cartSrv: CartService,
    // private cancionSrv: CancionService,
    private storageSrv: StorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const paramsSubscription: Subscription = this.activatedRoute.params.subscribe((params: Params) => { this.id = params['id']; console.log(this.id, "hola"); /* let p = this.prueba(); console.log(p) */ });

    this.suscriptions.push(paramsSubscription);
    
    this.user = this.usuarioSrv.getUsuario();

    this.sizesSrv.getAll().subscribe(sizes => this.sizes = sizes);
    this.merchandisingSrv.getByCode(this.id).subscribe(merchan => {
      this.merchandising = merchan[0]; // modificar
      this.type = this.merchandising.product.product_type.code;
      this.productPhotosSrv.getByProduct(this.merchandising.product.id).subscribe(productPhotos => this.productPhotos = productPhotos);
    });
    console.log(this.suscriptions)

    // this.user = this.usuarioSrv.getUsuario();
    // console.log(this.user)

    this.form = this.formBuilder.group({
      // foto: [''],
      // username: [this.user.username, [Validators.required]],
      // nombre: [this.user.nombre, [Validators.required]],
      // apellidos: [this.user.apellidos],
      // email: [{ value: this.user.email, disabled: true }, [Validators.required]]
    });

    // this.foto = this.user.foto;
  }

  ngOnDestroy(): void {
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
  }

  async submit() {
    console.log("entra")
    try {
      let myuuid = uuidv4();

      let purchase: Purchase;
      purchase = {
        id: myuuid,
        usuario: this.user,
        paid: false,
        created_at: Date.now()
      }

      await this.purchaseSrv.create(purchase);
      
      myuuid = uuidv4();
      let cart: Cart;
      cart = {
        id: myuuid,
        purchase: purchase,
        merchandising: this.merchandising,
        amount: 1
      }

      await this.cartSrv.create(cart);

      this.router.navigate(['/shop']);

    } catch (e: any) {
      // alert(e.message)
    }
  }

  back() {
    history.back();
  }

}
