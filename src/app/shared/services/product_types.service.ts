import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore'
import { ProductType } from '../models/product_type.model';

@Injectable({
    providedIn: 'root'
})
export class ProductTypesService {

    product_type: ProductType;

    constructor(private firestore: AngularFirestore) {

    }


    getAll(): Observable<ProductType[]> {
        return this.firestore.collection<ProductType>('product_types', ref => ref.orderBy('code')).valueChanges({ idField: 'id' });
    }

    getAllMatches(match: string): Observable<ProductType[]> {
        return this.firestore.collection<ProductType>('product_types', ref => ref.orderBy('code').startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getOne(id: string): Observable<ProductType> {
        return this.firestore.collection<ProductType>('product_types').doc(id).valueChanges({ idField: 'id' });
    }

    getByCode(code: string): Observable<ProductType[]> {
        return this.firestore.collection<ProductType>('product_types', ref => ref.where('code', '==', code)).valueChanges({ idField: 'id' });
    }

    setProductType(payload: ProductType) {
        this.product_type = payload;
    }

    getProductType(): ProductType {
        return this.product_type;
    }

    async create(payload: ProductType): Promise<any> {
        try {
            const res = await this.firestore.collection('product_types').doc(payload.doc_id).set(payload);
            return res;
        } catch (err) {
            return err;
        }
    }

    async update(product_type: ProductType) {
        try {
            const res = await this.firestore.collection('product_types').doc(product_type.doc_id).update({ ...product_type });

            return res;
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            const res = await this.firestore.collection('product_types').doc(id).delete();

            return res;
        } catch (err) {
            return err;
        }
    }
}
