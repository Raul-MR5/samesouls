import { PhotoType } from "./photo_type.model";
import { Product } from "./product.model";

export interface ProductPhotos {
    id?: string;
    photo: string;
    photo_type: PhotoType;
    product: Product;
}