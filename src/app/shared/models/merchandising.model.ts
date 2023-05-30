import { Product } from "./product.model";
import { Size } from "./size.model";

export interface Merchandising {
    id?: string;
    code: string;
    product: Product;
    prize: number;
    stock: number;
    size: Size;
    created_at?: number;
}