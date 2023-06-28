import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTypesComponent } from './product_types.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from '../../../auth/auth.guard';


const routes: Routes = [
  { path: '', component: ProductTypesComponent, canActivate: [AuthGuard], pathMatch: "full" }
];

@NgModule({
  declarations: [
    ProductTypesComponent
  ],
  imports: [
    CommonModule,

    FormsModule, 
    ReactiveFormsModule,

    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class ProductTypesModule { }
