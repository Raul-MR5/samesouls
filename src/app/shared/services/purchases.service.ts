import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore'
import { Purchase } from '../models/purchase.model';

@Injectable({
    providedIn: 'root'
})
export class PurchasesService {

    purchase: Purchase;

    constructor(private firestore: AngularFirestore) {

    }


    getAll(): Observable<Purchase[]> {
        return this.firestore.collection<Purchase>('purchases').valueChanges({ idField: 'id' });
    }

    getAllMatches(match: string): Observable<Purchase[]> {
        return this.firestore.collection<Purchase>('purchases', ref => ref.startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getOne(id: string): Observable<Purchase> {
        return this.firestore.collection<Purchase>('purchases').doc(id).valueChanges({ idField: 'id' });
    }

    // getByStock(stock: number): Observable<Purchase[]> {
    //     return this.firestore.collection<Purchase>('purchases', ref => ref.where('stock', '==', stock)).valueChanges({ idField: 'id' });
    // }

    getPaid(): Observable<Purchase[]> {
        return this.firestore.collection<Purchase>('purchases', ref => ref.where('paid', '==', 'true')).valueChanges({ idField: 'id' });
    }

    getNotPaid(): Observable<Purchase[]> {
        return this.firestore.collection<Purchase>('purchases', ref => ref.where('paid', '==', 'false')).valueChanges({ idField: 'id' });
    }

    setPurchase(payload: Purchase) {
        this.purchase = payload;
    }

    getPurchase(): Purchase {
        return this.purchase;
    }

    async create(payload: Purchase): Promise<any> {
        try {
            const res = await this.firestore.collection('purchases').doc(payload.id).set(payload);
            return res;
        } catch (err) {
            return err;
        }
    }

    async update(purchase: Purchase) {
        try {
            const res = await this.firestore.collection('purchases').doc(purchase.id).update({ ...purchase });

            return res;
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            const res = await this.firestore.collection('purchases').doc(id).delete();

            return res;
        } catch (err) {
            return err;
        }
    }
}
