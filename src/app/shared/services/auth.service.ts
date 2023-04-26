import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';
import * as jwt_decode from 'jwt-decode';
// import { Permiso } from '../models/permiso.model';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // public usuario: Observable<Usuario>;

  private usuarioSubject: BehaviorSubject<Usuario>;
  public usuario: Observable<Usuario>;

  constructor(
    private http: HttpClient,
    private usuarioSrv: UsuarioService,
    private auth: AngularFireAuth
  ) {
    this.usuarioSubject = new BehaviorSubject<Usuario>(null);
    this.usuario = this.usuarioSubject.asObservable();
    this.auth.authState.subscribe((user:any) => {
      this.usuarioSrv.getOne(user.uid).subscribe(user => {
        this.usuarioSubject.next(user);
      })
      
    })
  }

  public get usuarioValue(): Usuario {
    return this.usuarioSubject.value;
  }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  register(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  emailVerified() {
    this.auth.currentUser.then(user => {
      if (user) {
        user.sendEmailVerification();
      }
    })
  }

  googleAuth() {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // solicitarPassword(email: string): Observable<string> {
  //   return this.http.post<any>(`${environment.apiUrl}/usuarios/reset-password?email=${email}`, {});
  // }

  // recuperarPassword(token: string, password: string): Observable<string> {
  //   return this.http.put<any>(`${environment.apiUrl}/usuarios/reset-password/${token}`, { password: password });
  // }

  authenticated() {
    return this.auth.authState.pipe(
      map(user => user != null)
    );
  }

  getUsuario() {
    return this.auth.authState
  }

  // getPermisos(): Observable<Permiso[]> {
  //   return this.http.get<Permiso[]>(`${environment.apiUrl}/account/permisos`);
  // }

  getToken(): string {
    return JSON.parse(localStorage.getItem('usuario')).token;
  }

}
