import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

import { AuthGuard } from '../auth/auth.guard';

import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { VistaCancionComponent } from '../ventanas/canciones/vista-cancion/vista-cancion.component';
import { VistaListaComponent } from '../ventanas/biblioteca/listas/vista-lista/vista-lista.component';
import { AddSongComponent } from '../ventanas/biblioteca/listas/add-song/add-song.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    /* canActivate: [AuthGuard], */
    children: [
      { path: '', loadChildren: () => import('src/app/ventanas/home/home.module').then(m => m.HomeModule), /* canActivate: [AuthGuard], */ pathMatch: "full" },
      { path: 'biblioteca', loadChildren: () => import('src/app/ventanas/biblioteca/biblioteca.module').then(m => m.BibliotecaModule)/* , canActivate: [AuthGuard] */ },
      { path: 'profile/:id', loadChildren: () => import('src/app/ventanas/profile/profile.module').then(m => m.ProfileModule)/* , canActivate: [AuthGuard] */ },
      { path: 'edit-profile', loadChildren: () => import('src/app/ventanas/profile/edit-profile/edit-profile.module').then(m => m.EditProfileModule)/* , canActivate: [AuthGuard] */ },
      { path: 'new-song', loadChildren: () => import('src/app/ventanas/canciones/nueva-cancion/nueva-cancion.module').then(m => m.NuevaCancionModule)/* , canActivate: [AuthGuard] */ },
      { path: 'new-playlist', loadChildren: () => import('src/app/ventanas/biblioteca/listas/nueva-lista/nueva-lista.module').then(m => m.NuevaListaModule)/* , canActivate: [AuthGuard] */ },
      { path: 'cancion/:id/:url', component: VistaCancionComponent/* , canActivate: [AuthGuard] */ },
      { path: 'lista/:id', component: VistaListaComponent/* , canActivate: [AuthGuard] */ },
      { path: 'addsong/:id', component: AddSongComponent/* , canActivate: [AuthGuard] */ }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    VistaCancionComponent,
    VistaListaComponent,
    AddSongComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    FormsModule,
    ReactiveFormsModule,

    AngularFirestoreModule,
    AngularFireAuthModule,

    HttpClientModule,
    ToastModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MessageService
  ]
})
export class DashboardModule { }
