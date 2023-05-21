import { ReleaseType } from "./release_type.model";
import { Usuario } from "./usuario.model";

export interface Release {
    id?: string;
    photo: string;
    title: string;
    release_type: ReleaseType;
    usuario: Usuario;
    created_at?: number;
}