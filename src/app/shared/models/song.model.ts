import { Release } from "./release.model";

export interface Song {
    id?: number;
    title: string;
    lyrics: string;
    views: number;
    release: Release;
    audio: string;
    created_at?: number;
}