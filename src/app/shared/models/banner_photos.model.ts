import { PhotoType } from './photo_type.model';
import { Usuario } from './usuario.model';

export interface BannerPhotos {
    id?: string;
    artist: Usuario;
    url: string;
    type: PhotoType;
    photo: string;
    description: string;
}