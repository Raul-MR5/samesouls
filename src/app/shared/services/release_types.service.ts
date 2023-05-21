import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore'
import { ReleaseType } from '../models/release_type.model';

@Injectable({
    providedIn: 'root'
})
export class ReleaseTypesService {

    release_type: ReleaseType;

    constructor(private firestore: AngularFirestore) {

    }


    getAll(): Observable<ReleaseType[]> {
        return this.firestore.collection<ReleaseType>('release_types', ref => ref.orderBy('type')).valueChanges({ idField: 'id' });
    }

    getAllMatches(match: string): Observable<ReleaseType[]> {
        return this.firestore.collection<ReleaseType>('release_types', ref => ref.orderBy('type').startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getOne(id: string): Observable<ReleaseType> {
        return this.firestore.collection<ReleaseType>('release_types').doc(id).valueChanges({ idField: 'id' });
    }

    getByType(type: string): Observable<ReleaseType[]> {
        return this.firestore.collection<ReleaseType>('release_types', ref => ref.where('type', '==', type)).valueChanges({ idField: 'id' });
    }

    setReleaseType(payload: ReleaseType) {
        this.release_type = payload;
    }

    getReleaseType(): ReleaseType {
        return this.release_type;
    }

    async create(payload: ReleaseType): Promise<any> {
        try {
            const res = await this.firestore.collection('release_types').doc(payload.doc_id).set(payload);
            return res;
        } catch (err) {
            return err;
        }
    }

    async update(release_type: ReleaseType) {
        try {
            const res = await this.firestore.collection('release_types').doc(release_type.doc_id).update({ ...release_type });

            return res;
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            const res = await this.firestore.collection('release_types').doc(id).delete();

            return res;
        } catch (err) {
            return err;
        }
    }
}
