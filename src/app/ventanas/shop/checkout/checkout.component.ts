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
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { environment } from 'src/environments/environment';
import { CountryService } from 'src/app/shared/services/country.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { Cart } from 'src/app/shared/models/cart.model';
import { PurchasesService } from 'src/app/shared/services/purchases.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  payPalConfig?: IPayPalConfig;

  step: string = 'address';

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


  type = 'clothing'
  photo1 = 'front'
  photo2 = 'back'
  photo3 = 'model_front'
  photo4 = 'model_back'
  photo5 = 'model_side'

  countries = []
  states = []
  cities = []

  usuario: Usuario;
  cart: Cart[];
  total = 0

  constructor(
    private formBuilder: FormBuilder,
    private authSrv: AuthService,
    private usuarioSrv: ProfilesService,
    // private cancionSrv: CancionService,
    private storageSrv: StorageService,
    private countrySrv: CountryService,
    private cartSrv: CartService,
    private purchaseSrv: PurchasesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.countries = this.countrySrv.getAllCountries()

    this.usuario = this.usuarioSrv.getUsuario();
    this.cartSrv.getByUser(this.usuario.username).subscribe(c => {
      c = c.filter(cf => !cf.purchase.paid)
      this.cart = c;
      console.log("cart", this.cart)
      c.forEach(cart => {
        this.total += (cart.merchandising.prize * cart.amount)
      })
    })

    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$")]],
      phone: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      address: ['', [Validators.required]],
      cp: ['', [Validators.required]]
    });

    this.initConfig();

    console.log(this.suscriptions)
  }

  ngOnDestroy(): void {
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: environment.clientId,
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'EUR',
            value: this.total.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: this.total.toFixed(2)
              }
            }
          },
          items: [{
            name: 'Enterprise Subscription',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'EUR',
              value: this.total.toFixed(2),
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);

        this.cart.forEach(c => {
          this.purchaseSrv.getOne(c.purchase.id).subscribe(p => {
            p.paid = true;
            this.purchaseSrv.update(p)
            c.purchase = p;
            this.cartSrv.update(c);
          })
        })

        this.step = 'resume';
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);

      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }
    };
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

  download() {
    const a = document.createElement('a')
    let url = "../../../../assets/img/recibo01.png"
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
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

    this.step = 'purchase';

    // try {
    //   this.storageSrv.uploadImg("avatar/", this.user.email, this.foto).then(async urlImagen => {

    //     let usuario: Usuario;
    //     if (urlImagen) {
    //       usuario = {
    //         id: this.user.id,
    //         nombre: this.form.value.nombre,
    //         apellidos: this.form.value.apellidos,
    //         email: this.user.email,
    //         foto: urlImagen,
    //         username: this.form.value.username
    //       }
    //     } else{
    //       usuario = {
    //         id: this.user.id,
    //         nombre: this.form.value.nombre,
    //         apellidos: this.form.value.apellidos,
    //         email: this.user.email,
    //         foto: this.foto,
    //         username: this.form.value.username
    //       }
    //     }


    //     await this.usuarioSrv.update(usuario);

    //     this.router.navigate(['/profile']);
    //   });

    // } catch (e: any) {
    //   alert(e.message)
    // }
  }

  reset() {
    this.form = this.formBuilder.group({
      foto: [this.user.foto],
      username: [this.user.username, [Validators.required]],
      nombre: [this.user.nombre, [Validators.required]],
      apellidos: [this.user.apellidos],
      email: [{ value: this.user.email, disabled: true }, [Validators.required]]
    });
  }

  volver() {
    this.step = 'resume';
  }

  selectState() {
    this.states = this.countrySrv.getAllStates()
  }

  selectCity() {
    this.cities = this.countrySrv.getAllCities()
  }

}
