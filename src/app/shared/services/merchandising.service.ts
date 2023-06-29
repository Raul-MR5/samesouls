import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore'
import { Merchandising } from '../models/merchandising.model';

@Injectable({
    providedIn: 'root'
})
export class MerchandisingService {

    merchandising: Merchandising;

    constructor(private firestore: AngularFirestore) {

    }


    getAll(): Observable<Merchandising[]> {
        return this.firestore.collection<Merchandising>('merchandising').valueChanges({ idField: 'id' });
    }

    getAllMatches(match: string): Observable<Merchandising[]> {
        return this.firestore.collection<Merchandising>('merchandising', ref => ref.orderBy('product.name').startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getAllOrdered(): Observable<Merchandising[]> {
        return this.firestore.collection<Merchandising>('merchandising', ref => ref.orderBy('product.name')).valueChanges({ idField: 'id' });
    }

    getOne(id: string): Observable<Merchandising> {
        return this.firestore.collection<Merchandising>('merchandising').doc(id).valueChanges({ idField: 'id' });
    }

    getByCode(code: string): Observable<Merchandising[]> {
        return this.firestore.collection<Merchandising>('merchandising', ref => ref.where('code', '==', code)).valueChanges({ idField: 'id' });
    }

    getByArtist(artist: string): Observable<Merchandising[]> {
        return this.firestore.collection<Merchandising>('merchandising', ref => ref.where('product.artist.username', '==', artist)).valueChanges({ idField: 'id' });
    }

    getStock(): Observable<Merchandising[]> {
        return this.firestore.collection<Merchandising>('merchandising', ref => ref.where('stock', '>', '0')).valueChanges({ idField: 'id' });
    }

    getOutStock(): Observable<Merchandising[]> {
        return this.firestore.collection<Merchandising>('merchandising', ref => ref.where('stock', '==', '0')).valueChanges({ idField: 'id' });
    }

    setMerchandising(payload: Merchandising) {
        this.merchandising = payload;
    }

    getMerchandising(): Merchandising {
        return this.merchandising;
    }

    async create(payload: Merchandising): Promise<any> {
        try {
            const res = await this.firestore.collection('merchandising').doc(payload.id).set(payload);
            return res;
        } catch (err) {
            return err;
        }
    }

    async update(merchandising: Merchandising) {
        try {
            const res = await this.firestore.collection('merchandising').doc(merchandising.id).update({ ...merchandising });

            return res;
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            const res = await this.firestore.collection('merchandising').doc(id).delete();

            return res;
        } catch (err) {
            return err;
        }
    }
}
