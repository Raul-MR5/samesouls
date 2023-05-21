import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore'
import { Size } from '../models/size.model';

@Injectable({
    providedIn: 'root'
})
export class SizesService {

    size: Size;

    constructor(private firestore: AngularFirestore) {

    }


    getAll(): Observable<Size[]> {
        return this.firestore.collection<Size>('sizes').valueChanges({ idField: 'id' });
    }

    getAllMatches(match: string): Observable<Size[]> {
        return this.firestore.collection<Size>('sizes', ref => ref.startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getOne(id: string): Observable<Size> {
        return this.firestore.collection<Size>('sizes').doc(id).valueChanges({ idField: 'id' });
    }

    getBySize(size: string): Observable<Size[]> {
        return this.firestore.collection<Size>('sizes', ref => ref.where('size', '==', size)).valueChanges({ idField: 'id' });
    }

    setSize(payload: Size) {
        this.size = payload;
    }

    getSize(): Size {
        return this.size;
    }

    async create(payload: Size): Promise<any> {
        try {
            const res = await this.firestore.collection('sizes').doc(payload.doc_id).set(payload);
            return res;
        } catch (err) {
            return err;
        }
    }

    async update(size: Size) {
        try {
            const res = await this.firestore.collection('sizes').doc(size.doc_id).update({ ...size });

            return res;
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            const res = await this.firestore.collection('sizes').doc(id).delete();

            return res;
        } catch (err) {
            return err;
        }
    }
}
