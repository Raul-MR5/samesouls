import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore'
import { PhotoType } from '../models/photo_type.model';

@Injectable({
    providedIn: 'root'
})
export class PhotoTypesService {

    photo_type: PhotoType;

    constructor(private firestore: AngularFirestore) {

    }


    getAll(): Observable<PhotoType[]> {
        return this.firestore.collection<PhotoType>('photo_types', ref => ref.orderBy('name')).valueChanges({ idField: 'id' });
    }

    getAllMatches(match: string): Observable<PhotoType[]> {
        return this.firestore.collection<PhotoType>('photo_types', ref => ref.orderBy('name').startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getOne(id: string): Observable<PhotoType> {
        return this.firestore.collection<PhotoType>('photo_types').doc(id).valueChanges({ idField: 'id' });
    }

    getByName(name: string): Observable<PhotoType[]> {
        return this.firestore.collection<PhotoType>('photo_types', ref => ref.where('name', '==', name)).valueChanges({ idField: 'id' });
    }

    setPhotoType(payload: PhotoType) {
        this.photo_type = payload;
    }

    getPhotoType(): PhotoType {
        return this.photo_type;
    }

    async create(payload: PhotoType): Promise<any> {
        try {
            const res = await this.firestore.collection('photo_types').doc(payload.doc_id).set(payload);
            return res;
        } catch (err) {
            return err;
        }
    }

    async update(photo_type: PhotoType) {
        try {
            const res = await this.firestore.collection('photo_types').doc(photo_type.doc_id).update({ ...photo_type });

            return res;
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            const res = await this.firestore.collection('photo_types').doc(id).delete();

            return res;
        } catch (err) {
            return err;
        }
    }
}
