import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../auth/auth.guard';
// import { CancionComponent } from '../../canciones/cancion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPayPalModule } from 'ngx-paypal';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    // canActivate: [AuthGuard],
    children: [
      // { path: '', loadChildren: () => import('src/app/ventanas/shop/checkout/checkout.module').then(m => m.CheckoutModule), canActivate: [AuthGuard]},
      // { path: ':id', component: CancionComponent, canActivate: [AuthGuard]},
      // { path: 'artistas',  loadChildren: () => import('src/app/ventanas/artistas/artistas.module').then(m => m.ArtistasModule), canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  declarations: [
    CheckoutComponent,
    // CancionComponent
  ],
  imports: [
    CommonModule,

    FormsModule, 
    ReactiveFormsModule,

    NgxPayPalModule,

    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CheckoutModule { }
