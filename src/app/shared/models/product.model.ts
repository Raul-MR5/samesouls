import { ProductType } from "./product_type.model";

export interface Product {
    id?: string;
    name: string;
    description: string;
    product_type: ProductType
}