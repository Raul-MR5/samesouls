import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoMerchanComponent } from './nuevo-merchan.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from '../../../../auth/auth.guard';


const routes: Routes = [
  { path: '', component: NuevoMerchanComponent, canActivate: [AuthGuard], pathMatch: "full" }
];

@NgModule({
  declarations: [
    NuevoMerchanComponent
  ],
  imports: [
    CommonModule,

    FormsModule, 
    ReactiveFormsModule,

    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class NuevoMerchanModule { }
