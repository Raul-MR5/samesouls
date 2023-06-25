import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersComponent } from './banners.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from '../../../auth/auth.guard';


const routes: Routes = [
  { path: '', component: BannersComponent, canActivate: [AuthGuard], pathMatch: "full" }
];

@NgModule({
  declarations: [
    BannersComponent
  ],
  imports: [
    CommonModule,

    FormsModule, 
    ReactiveFormsModule,

    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class BannersModule { }
