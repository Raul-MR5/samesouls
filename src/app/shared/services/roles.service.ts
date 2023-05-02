import { Injectable } from '@angular/core';
import { Rol } from '../models/rol.model';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore'

@Injectable({
    providedIn: 'root'
})
export class RolesService {

    rol: Rol;

    constructor(private firestore: AngularFirestore) {

    }


    getAll(): Observable<Rol[]> {
        return this.firestore.collection<Rol>('roles').valueChanges({ idField: 'id' });
    }

    getAllMatches(match: string): Observable<Rol[]> {
        return this.firestore.collection<Rol>('roles', ref => ref.orderBy('code').startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getOne(id: string): Observable<Rol> {
        return this.firestore.collection<Rol>('roles').doc(id).valueChanges({ idField: 'id' });
    }

    getByCode(code: string): Observable<Rol[]> {
        return this.firestore.collection<Rol>('roles', ref => ref.where('code', '==', code)).valueChanges({ idField: 'id' });
    }

    setRol(payload: Rol) {
        this.rol = payload;
    }

    getRol(): Rol {
        return this.rol;
    }

    async create(payload: Rol): Promise<any> {
        try {
            const res = await this.firestore.collection('roles').doc(payload.id).set(payload);
            return res;
        } catch (err) {
            return err;
        }
    }

    async update(rol: Rol) {
        try {
            const res = await this.firestore.collection('roles').doc(rol.id).update({ ...rol });

            return res;
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            const res = await this.firestore.collection('roles').doc(id).delete();

            return res;
        } catch (err) {
            return err;
        }
    }
}
