import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('src/app/ventanas/profile/edit-profile/edit-profile.module').then(m => m.EditProfileModule), canActivate: [AuthGuard]},
      // { path: 'change-password', loadChildren: () => import('src/app/ventanas/profile/change-password/change-password.module').then(m => m.ChangePasswordModule), canActivate: [AuthGuard]},
      { path: 'invoice', loadChildren: () => import('src/app/ventanas/profile/invoice/invoice.module').then(m => m.InvoiceModule), canActivate: [AuthGuard]},
      // { path: ':id', component: CancionComponent, canActivate: [AuthGuard]},
      // { path: 'artistas',  loadChildren: () => import('src/app/ventanas/artistas/artistas.module').then(m => m.ArtistasModule), canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
    // CancionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class ProfileModule { }
