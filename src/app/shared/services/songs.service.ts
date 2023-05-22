import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore'
import { Song } from '../models/song.model';

@Injectable({
    providedIn: 'root'
})
export class SongsService {

    song: Song;
    audio: HTMLAudioElement;

    constructor(private firestore: AngularFirestore) {

    }


    getAll(): Observable<Song[]> {
        return this.firestore.collection<Song>('songs', ref => ref.orderBy('title')).valueChanges({ idField: 'id' });
    }

    getAllMatches(match: string): Observable<Song[]> {
        return this.firestore.collection<Song>('songs', ref => ref.orderBy('title').startAt(match).endAt(match + "\uf8ff")).valueChanges({ idField: 'id' });
    }

    getOne(id: string): Observable<Song> {
        return this.firestore.collection<Song>('songs').doc(id).valueChanges({ idField: 'id' });
    }

    getByArtist(artist: string): Observable<Song[]> {
        return this.firestore.collection<Song>('songs', ref => ref.where('release.artist.username', '==', artist).limit(5)).valueChanges({ idField: 'id' });
    }

    setSong(payload: Song) {
        this.song = payload;
    }

    getSong(): Song {
        return this.song;
    }

    playSong(audio: HTMLAudioElement) {
        this.audio = audio;
        this.audio.currentTime = 0;
        this.audio.play();
    }

    pauseSong() {
        if (this.audio) {
            console.log(this.audio);

            this.audio.pause();
        }
    }

    async create(payload: Song): Promise<any> {
        try {
            console.log("payload", payload)
            const res = await this.firestore.collection('songs').doc(payload.id).set(payload);
            console.log("res", res)
            return res;
        } catch (err) {
            console.log("err", err)
            return err;
        }
    }

    async update(song: Song) {
        try {
            const res = await this.firestore.collection('songs').doc(song.id).update({ ...song });

            return res;
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            const res = await this.firestore.collection('songs').doc(id).delete();

            return res;
        } catch (err) {
            return err;
        }
    }
}
