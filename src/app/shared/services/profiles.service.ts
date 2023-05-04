import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore'

@Injectable({
    providedIn: 'root'
})
export class ProfilesService {

    usuario: Usuario;

    constructor(private firestore: AngularFirestore) {

    }


    getAll(): Observable<Usuario[]> {
        return this.firestore.collection<Usuario>('profiles').valueChanges({ idField: 'id' });
    }

    getAllMatches(match: string): Observable<Usuario[]> {
        return this.firestore.collection<Usuario>('profiles', ref => ref.orderBy('username').startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getAllMatchesRol(match: string): Observable<Usuario[]> {
        return this.firestore.collection<Usuario>('profiles', ref => ref.where('rol.code', '==', match)).valueChanges({ idField: 'id' });
    }

    getAllMatchesArtista(match: string): Observable<Usuario[]> {
        return this.firestore.collection<Usuario>('profiles', ref => ref.where('rol.code', '==', 'ARTISTA').orderBy('username').startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getAllMatchesGenre(match: string): Observable<Usuario[]> {
        return this.firestore.collection<Usuario>('profiles', ref => ref.where('genre.code', '==', match).orderBy('username')).valueChanges({ idField: 'id' });
    }

    getOne(id: string): Observable<Usuario> {
        return this.firestore.collection<Usuario>('profiles').doc(id).valueChanges({ idField: 'id' });
    }

    setUsuario(payload: Usuario) {
        this.usuario = payload;
    }

    getUsuario(): Usuario {
        return this.usuario;
    }

    // followers(match: string): Observable<Usuario[]> {
    //     return this.firestore.collection<Usuario>('profiles', ref => ref.where('seguidos', 'array-contains', match)).valueChanges({ idField: 'id' });
    // }

    // followed(user: Usuario): boolean {
    //     if (this.usuario.id != user.id) {
    //         if (this.usuario.seguidos) {
    //             for (let i = 0; i < this.usuario.seguidos.length; i++) {
    //                 if (this.usuario.seguidos[i] == user.id) {
    //                     return true;
    //                 }
    //             }
    //         }
    //     }

    //     return false;
    // }

    // async newFollow(id: string, usuario: Usuario) {
    //     try {
    //         const res = await this.firestore.collection('profiles').doc(id).update({ seguidos: arrayUnion(usuario.id) });

    //         return res;
    //     } catch (err) {
    //         return err;
    //     }
    // }

    // async removeFollow(id: string, usuario: Usuario) {
    //     try {
    //         const res = await this.firestore.collection('profiles').doc(id).update({ seguidos: arrayRemove(usuario.id) });

    //         return res;
    //     } catch (err) {
    //         return err;
    //     }
    // }

    async create(payload: Usuario): Promise<any> {
        try {
            const res = await this.firestore.collection('profiles').doc(payload.id).set(payload);
            return res;
        } catch (err) {
            return err;
        }
    }

    async update(usuario: Usuario) {
        try {
            const res = await this.firestore.collection('profiles').doc(usuario.id).update({ ...usuario });

            return res;
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            const res = await this.firestore.collection('profiles').doc(id).delete();

            return res;
        } catch (err) {
            return err;
        }
    }
}
