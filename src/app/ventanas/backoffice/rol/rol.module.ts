import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolComponent } from './rol.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from '../../../auth/auth.guard';


const routes: Routes = [
  { path: '', component: RolComponent, canActivate: [AuthGuard], pathMatch: "full" }
];

@NgModule({
  declarations: [
    RolComponent
  ],
  imports: [
    CommonModule,

    FormsModule, 
    ReactiveFormsModule,

    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class RolModule { }
