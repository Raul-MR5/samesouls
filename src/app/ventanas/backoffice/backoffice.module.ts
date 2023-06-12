import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: BackofficeComponent, /* canActivate: [AuthGuard], */ pathMatch: "full" }
];

@NgModule({
  declarations: [
    BackofficeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class BackofficeModule { }
