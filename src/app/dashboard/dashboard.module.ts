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
      { path: 'artistas', loadChildren: () => import('src/app/ventanas/artistas/artistas.module').then(m => m.ArtistasModule)/* , canActivate: [AuthGuard] */ },
      { path: 'shop', loadChildren: () => import('src/app/ventanas/shop/shop.module').then(m => m.ShopModule)/* , canActivate: [AuthGuard] */ },
      { path: 'profile', loadChildren: () => import('src/app/ventanas/profile/profile.module').then(m => m.ProfileModule)/* , canActivate: [AuthGuard] */ },
      { path: 'cart', loadChildren: () => import('src/app/ventanas/shop/cart/cart.module').then(m => m.CartModule)/* , canActivate: [AuthGuard] */ },
      { path: 'artistas/:id',  loadChildren: () => import('src/app/ventanas/artistas/artista-profile/artista-profile.module').then(m => m.ArtistaProfileModule)/* , canActivate: [AuthGuard]*/}, 
      { path: 'shop/:id',  loadChildren: () => import('src/app/ventanas/shop/merchandising/merchandising.module').then(m => m.MerchandisingModule)/* , canActivate: [AuthGuard]*/}, 
      { path: 'checkout', loadChildren: () => import('src/app/ventanas/shop/checkout/checkout.module').then(m => m.CheckoutModule), /* canActivate: [AuthGuard] */},
      // { path: 'artista/:id', loadChildren: () => import('src/app/ventanas/profile/profile.module').then(m => m.ProfileModule)/* , canActivate: [AuthGuard] */ },
      // { path: 'edit-profile', loadChildren: () => import('src/app/ventanas/profile/edit-profile/edit-profile.module').then(m => m.EditProfileModule)/* , canActivate: [AuthGuard] */ } 
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
