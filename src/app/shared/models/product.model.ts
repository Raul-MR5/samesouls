import { ProductType } from "./product_type.model";
import { Usuario } from "./usuario.model";

export interface Product {
    id?: string;
    name: string;
    description: string;
    artist: Usuario;
    product_type: ProductType
}