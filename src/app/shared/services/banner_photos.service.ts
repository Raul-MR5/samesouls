import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore'
import { BannerPhotos } from '../models/banner_photos.model';

@Injectable({
    providedIn: 'root'
})
export class BannerPhotosService {

    bannerPhotos: BannerPhotos;

    constructor(private firestore: AngularFirestore) {

    }


    getAll(): Observable<BannerPhotos[]> {
        return this.firestore.collection<BannerPhotos>('banner_photos').valueChanges({ idField: 'id' });
    }

    getAllMatches(match: string): Observable<BannerPhotos[]> {
        return this.firestore.collection<BannerPhotos>('banner_photos', ref => ref.startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getOne(id: string): Observable<BannerPhotos> {
        return this.firestore.collection<BannerPhotos>('banner_photos').doc(id).valueChanges({ idField: 'id' });
    }

    getByType(type: string): Observable<BannerPhotos[]> {
        return this.firestore.collection<BannerPhotos>('banner_photos', ref => ref.where('type.name', '==', type)).valueChanges({ idField: 'id' });
    }

    setBannerPhotos(payload: BannerPhotos) {
        this.bannerPhotos = payload;
    }

    getBannerPhotos(): BannerPhotos {
        return this.bannerPhotos;
    }

    async create(payload: BannerPhotos): Promise<any> {
        try {
            const res = await this.firestore.collection('banner_photos').doc(payload.id).set(payload);
            return res;
        } catch (err) {
            return err;
        }
    }

    async update(bannerPhotos: BannerPhotos) {
        try {
            const res = await this.firestore.collection('banner_photos').doc(bannerPhotos.id).update({ ...bannerPhotos });

            return res;
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            const res = await this.firestore.collection('banner_photos').doc(id).delete();

            return res;
        } catch (err) {
            return err;
        }
    }
}
