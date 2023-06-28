import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoTypesComponent } from './photo_types.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from '../../../auth/auth.guard';


const routes: Routes = [
  { path: '', component: PhotoTypesComponent, canActivate: [AuthGuard], pathMatch: "full" }
];

@NgModule({
  declarations: [
    PhotoTypesComponent
  ],
  imports: [
    CommonModule,

    FormsModule, 
    ReactiveFormsModule,

    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class PhotoTypesModule { }
