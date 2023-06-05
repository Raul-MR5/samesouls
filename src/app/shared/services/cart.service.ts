import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore'
import { Cart } from '../models/cart.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    cart: Cart;

    constructor(private firestore: AngularFirestore) {

    }


    getAll(): Observable<Cart[]> {
        return this.firestore.collection<Cart>('cart').valueChanges({ idField: 'id' });
    }

    getAllMatches(match: string): Observable<Cart[]> {
        return this.firestore.collection<Cart>('cart', ref => ref.startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getOne(id: string): Observable<Cart> {
        return this.firestore.collection<Cart>('cart').doc(id).valueChanges({ idField: 'id' });
    }

    getByUser(user: string): Observable<Cart[]> {
        return this.firestore.collection<Cart>('cart', ref => ref.where('purchase.usuario.username', '==', user)).valueChanges({ idField: 'id' });
    }

    setCart(payload: Cart) {
        this.cart = payload;
    }

    getCart(): Cart {
        return this.cart;
    }

    async create(payload: Cart): Promise<any> {
        try {
            const res = await this.firestore.collection('cart').doc(payload.id).set(payload);
            return res;
        } catch (err) {
            return err;
        }
    }

    async update(cart: Cart) {
        try {
            const res = await this.firestore.collection('cart').doc(cart.id).update({ ...cart });

            return res;
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            const res = await this.firestore.collection('cart').doc(id).delete();

            return res;
        } catch (err) {
            return err;
        }
    }
}
