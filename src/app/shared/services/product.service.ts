import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore'
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    product: Product;

    constructor(private firestore: AngularFirestore) {

    }


    getAll(): Observable<Product[]> {
        return this.firestore.collection<Product>('products', ref => ref.orderBy('name')).valueChanges({ idField: 'id' });
    }

    getAllMatches(match: string): Observable<Product[]> {
        return this.firestore.collection<Product>('products', ref => ref.orderBy('name').startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getOne(id: string): Observable<Product> {
        return this.firestore.collection<Product>('products').doc(id).valueChanges({ idField: 'id' });
    }

    getByName(name: string): Observable<Product[]> {
        return this.firestore.collection<Product>('products', ref => ref.where('name', '==', name)).valueChanges({ idField: 'id' });
    }

    setProduct(payload: Product) {
        this.product = payload;
    }

    getProduct(): Product {
        return this.product;
    }

    async create(payload: Product): Promise<any> {
        try {
            const res = await this.firestore.collection('products').doc(payload.id).set(payload);
            return res;
        } catch (err) {
            return err;
        }
    }

    async update(product: Product) {
        try {
            const res = await this.firestore.collection('products').doc(product.id).update({ ...product });

            return res;
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            const res = await this.firestore.collection('products').doc(id).delete();

            return res;
        } catch (err) {
            return err;
        }
    }
}
