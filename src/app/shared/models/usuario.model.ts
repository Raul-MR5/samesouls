import { Rol } from "./rol.model";

export interface Usuario {
    id?: string;
    username: string;
    password?: string;
    nombre: string;
    apellidos?: string;
    email: string;
    foto?: any;
    rol?: Rol;
    enabled?: number;
    created_at?: number;
    seguidos?: string[];
}