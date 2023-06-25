import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../auth/auth.guard';
// import { CancionComponent } from '../../canciones/cancion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    canActivate: [AuthGuard],
    children: [
      // { path: 'checkout', loadChildren: () => import('src/app/ventanas/shop/checkout/checkout.module').then(m => m.CheckoutModule), canActivate: [AuthGuard]},
      // { path: ':id', component: CancionComponent, canActivate: [AuthGuard]},
      // { path: 'artistas',  loadChildren: () => import('src/app/ventanas/artistas/artistas.module').then(m => m.ArtistasModule), canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  declarations: [
    CartComponent,
    // CancionComponent
  ],
  imports: [
    CommonModule,

    FormsModule, 
    ReactiveFormsModule,

    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartModule { }
