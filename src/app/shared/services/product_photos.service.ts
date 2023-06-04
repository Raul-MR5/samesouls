import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { QueryConstraint, arrayRemove, arrayUnion, collection, getFirestore, query, where } from '@angular/fire/firestore'
import { ProductPhotos } from '../models/product_photos.model';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class ProductPhotosService {

    product_photos: ProductPhotos;

    constructor(private firestore: AngularFirestore) {

    }


    getAll(): Observable<ProductPhotos[]> {
        return this.firestore.collection<ProductPhotos>('product_photos').valueChanges({ idField: 'id' });
    }

    getAllMatches(match: string): Observable<ProductPhotos[]> {
        return this.firestore.collection<ProductPhotos>('product_photos', ref => ref.startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getOne(id: string): Observable<ProductPhotos> {
        return this.firestore.collection<ProductPhotos>('product_photos').doc(id).valueChanges({ idField: 'id' });
    }

    getOrderedTypeName(): Observable<ProductPhotos[]> {
        return this.firestore.collection<ProductPhotos>('product_photos', ref => ref.orderBy('photo_type.name')).valueChanges({ idField: 'id' });
    }

    getByProduct(product: string): Observable<ProductPhotos[]> {
        return this.firestore.collection<ProductPhotos>('product_photos', ref => ref.where('product.id', '==', product).orderBy('photo_type.name')).valueChanges({ idField: 'id' });
    }

    setProductPhotos(payload: ProductPhotos) {
        this.product_photos = payload;
    }

    getProductPhotos(): ProductPhotos {
        return this.product_photos;
    }

    async create(payload: ProductPhotos): Promise<any> {
        try {
            const res = await this.firestore.collection('product_photos').doc(payload.id).set(payload);
            return res;
        } catch (err) {
            return err;
        }
    }

    async update(product_photos: ProductPhotos) {
        try {
            const res = await this.firestore.collection('product_photos').doc(product_photos.id).update({ ...product_photos });

            return res;
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            const res = await this.firestore.collection('product_photos').doc(id).delete();

            return res;
        } catch (err) {
            return err;
        }
    }
}
function and(arg0: any, arg1: any): import("@firebase/firestore").QueryConstraint {
    throw new Error('Function not implemented.');
}

function or(arg0: QueryConstraint, arg1: QueryConstraint): any {
    throw new Error('Function not implemented.');
}

