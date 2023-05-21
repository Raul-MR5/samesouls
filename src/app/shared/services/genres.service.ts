import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore'
import { Genre } from '../models/genre.model';

@Injectable({
    providedIn: 'root'
})
export class GenresService {

    genre: Genre;

    constructor(private firestore: AngularFirestore) {

    }


    getAll(): Observable<Genre[]> {
        return this.firestore.collection<Genre>('genres', ref => ref.orderBy('code')).valueChanges({ idField: 'id' });
    }

    getAllMatches(match: string): Observable<Genre[]> {
        return this.firestore.collection<Genre>('genres', ref => ref.orderBy('code').startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getOne(id: string): Observable<Genre> {
        return this.firestore.collection<Genre>('genres').doc(id).valueChanges({ idField: 'id' });
    }

    getByCode(code: string): Observable<Genre[]> {
        return this.firestore.collection<Genre>('genres', ref => ref.where('code', '==', code)).valueChanges({ idField: 'id' });
    }

    setGenre(payload: Genre) {
        this.genre = payload;
    }

    getGenre(): Genre {
        return this.genre;
    }

    async create(payload: Genre): Promise<any> {
        try {
            const res = await this.firestore.collection('genres').doc(payload.id).set(payload);
            return res;
        } catch (err) {
            return err;
        }
    }

    async update(genre: Genre) {
        try {
            const res = await this.firestore.collection('genres').doc(genre.id).update({ ...genre });

            return res;
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            const res = await this.firestore.collection('genres').doc(id).delete();

            return res;
        } catch (err) {
            return err;
        }
    }
}
