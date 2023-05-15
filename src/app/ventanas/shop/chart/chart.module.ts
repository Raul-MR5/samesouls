import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../auth/auth.guard';
// import { CancionComponent } from '../../canciones/cancion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: ChartComponent,
    // canActivate: [AuthGuard],
    children: [
      // { path: '', loadChildren: () => import('src/app/ventanas/canciones/cancion.module').then(m => m.CancionModule), canActivate: [AuthGuard]},
      // { path: ':id', component: CancionComponent, canActivate: [AuthGuard]},
      // { path: 'artistas',  loadChildren: () => import('src/app/ventanas/artistas/artistas.module').then(m => m.ArtistasModule), canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  declarations: [
    ChartComponent,
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
export class ChartModule { }
