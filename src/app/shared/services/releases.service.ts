import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore'
import { Release } from '../models/release.model';

@Injectable({
    providedIn: 'root'
})
export class ReleasesService {

    release: Release;

    constructor(private firestore: AngularFirestore) {

    }


    getAll(): Observable<Release[]> {
        return this.firestore.collection<Release>('releases', ref => ref.orderBy('title')).valueChanges({ idField: 'id' });
    }

    getAllMatches(match: string): Observable<Release[]> {
        return this.firestore.collection<Release>('releases', ref => ref.orderBy('title').startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getOne(id: string): Observable<Release> {
        return this.firestore.collection<Release>('releases').doc(id).valueChanges({ idField: 'id' });
    }

    // getBy(type: string): Observable<Release[]> {
    //     return this.firestore.collection<Release>('releases', ref => ref.where('type', '==', type)).valueChanges({ idField: 'id' });
    // }

    setRelease(payload: Release) {
        this.release = payload;
    }

    getRelease(): Release {
        return this.release;
    }

    async create(payload: Release): Promise<any> {
        try {
            const res = await this.firestore.collection('releases').doc(payload.id).set(payload);
            return res;
        } catch (err) {
            return err;
        }
    }

    async update(release: Release) {
        try {
            const res = await this.firestore.collection('releases').doc(release.id).update({ ...release });

            return res;
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            const res = await this.firestore.collection('releases').doc(id).delete();

            return res;
        } catch (err) {
            return err;
        }
    }
}
