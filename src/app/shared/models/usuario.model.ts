import { Genre } from "./genre.model";
import { Rol } from "./rol.model";

export interface Usuario {
    id?: string;
    username: string;
    password?: string;
    nombre: string;
    apellidos?: string;
    email: string;
    description?: string;
    foto?: any;
    rol?: Rol;
    genre?: Genre;
    enabled?: number;
    created_at?: number;
    seguidos?: string[];
}