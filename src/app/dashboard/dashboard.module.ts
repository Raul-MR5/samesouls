import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

import { AuthGuard } from '../auth/auth.guard';

import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RecuperarPasswordComponent } from '../auth/recuperar-password/recuperar-password.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    /* canActivate: [AuthGuard], */
    children: [
      { path: '', loadChildren: () => import('src/app/ventanas/home/home.module').then(m => m.HomeModule), /* canActivate: [AuthGuard], */ pathMatch: "full" },
      { path: 'backoffice', loadChildren: () => import('src/app/ventanas/backoffice/backoffice.module').then(m => m.BackofficeModule), /* canActivate: [AuthGuard], */ pathMatch: "full" },
      { path: 'artistas', loadChildren: () => import('src/app/ventanas/artistas/artistas.module').then(m => m.ArtistasModule)/* , canActivate: [AuthGuard] */ },
      { path: 'shop', loadChildren: () => import('src/app/ventanas/shop/shop.module').then(m => m.ShopModule)/* , canActivate: [AuthGuard] */ },
      { path: 'profile', loadChildren: () => import('src/app/ventanas/profile/profile.module').then(m => m.ProfileModule)/* , canActivate: [AuthGuard] */ },
      { path: 'cart', loadChildren: () => import('src/app/ventanas/shop/cart/cart.module').then(m => m.CartModule)/* , canActivate: [AuthGuard] */ },
      { path: 'artistas/:id',  loadChildren: () => import('src/app/ventanas/artistas/artista-profile/artista-profile.module').then(m => m.ArtistaProfileModule)/* , canActivate: [AuthGuard]*/}, 
      { path: 'shop/:id',  loadChildren: () => import('src/app/ventanas/shop/merchandising/merchandising.module').then(m => m.MerchandisingModule)/* , canActivate: [AuthGuard]*/}, 
      { path: 'checkout', loadChildren: () => import('src/app/ventanas/shop/checkout/checkout.module').then(m => m.CheckoutModule), /* canActivate: [AuthGuard] */},
      { path: 'new-song', loadChildren: () => import('src/app/ventanas/artistas/nueva-cancion/nueva-cancion.module').then(m => m.NuevaCancionModule)/* , canActivate: [AuthGuard] */ },
      { path: 'new-merchandising', loadChildren: () => import('src/app/ventanas/shop/merchandising/nuevo-merchan/nuevo-merchan.module').then(m => m.NuevoMerchanModule)/* , canActivate: [AuthGuard] */ },
      { path: 'new-artist', loadChildren: () => import('src/app/ventanas/artistas/nuevo-artista/nuevo-artista.module').then(m => m.NuevoArtistaModule)/* , canActivate: [AuthGuard] */ },
      { path: 'artist-profile', loadChildren: () => import('src/app/ventanas/artistas/edit-artista/edit-artista.module').then(m => m.EditArtistaModule)/* , canActivate: [AuthGuard] */ },
      
      { path: 'backoffice/banners', loadChildren: () => import('src/app/ventanas/backoffice/banners/banners.module').then(m => m.BannersModule), /* canActivate: [AuthGuard], */},
      { path: 'backoffice/genres', loadChildren: () => import('src/app/ventanas/backoffice/genres/genres.module').then(m => m.GenresModule)/* , canActivate: [AuthGuard] */ },
      { path: 'backoffice/photo_types', loadChildren: () => import('src/app/ventanas/backoffice/backoffice.module').then(m => m.BackofficeModule)/* , canActivate: [AuthGuard] */ },
      { path: 'backoffice/product_types', loadChildren: () => import('src/app/ventanas/backoffice/backoffice.module').then(m => m.BackofficeModule)/* , canActivate: [AuthGuard] */ },
      { path: 'backoffice/profiles', loadChildren: () => import('src/app/ventanas/backoffice/backoffice.module').then(m => m.BackofficeModule)/* , canActivate: [AuthGuard] */ },
      { path: 'backoffice/release_types',  loadChildren: () => import('src/app/ventanas/backoffice/backoffice.module').then(m => m.BackofficeModule)/* , canActivate: [AuthGuard]*/}, 
      { path: 'backoffice/roles',  loadChildren: () => import('src/app/ventanas/backoffice/backoffice.module').then(m => m.BackofficeModule)/* , canActivate: [AuthGuard]*/}, 
      { path: 'backoffice/sizes', loadChildren: () => import('src/app/ventanas/backoffice/backoffice.module').then(m => m.BackofficeModule), /* canActivate: [AuthGuard] */},
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: RecuperarPasswordComponent }
];

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    RecuperarPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    FormsModule,
    ReactiveFormsModule,

    AngularFirestoreModule,
    AngularFireAuthModule,

    HttpClientModule,
    ToastModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MessageService
  ]
})
export class DashboardModule { }
