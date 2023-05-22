import { Release } from "./release.model";

export interface Song {
    id?: string;
    title: string;
    // lyrics: string;
    // views: number;
    release?: Release;
    audio: string;
    created_at?: number;
}