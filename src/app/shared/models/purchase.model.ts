import { Usuario } from './usuario.model';

export interface Purchase {
    id?: string;
    usuario: Usuario;
    paid: boolean;
    purchase_date?: number;
    created_at?: number;
}