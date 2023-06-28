import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizesComponent } from './sizes.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from '../../../auth/auth.guard';


const routes: Routes = [
  { path: '', component: SizesComponent, canActivate: [AuthGuard], pathMatch: "full" }
];

@NgModule({
  declarations: [
    SizesComponent
  ],
  imports: [
    CommonModule,

    FormsModule, 
    ReactiveFormsModule,

    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class SizesModule { }
