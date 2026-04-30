import { kyInstance, kyMediaInstance } from '@/shared/libs';

import { type CreateImageDTO, type Image, type PaginatedImage, type UpdateImageDTO } from '../model/schema';

class ImageService {

  createImage = ( data: CreateImageDTO ): Promise<Image> => {
    const formData = new FormData();
    formData.append( 'image', data.image );
    formData.append( 'alt', data.alt );
    return kyMediaInstance.post( 'images', { body: formData } ).json();
  };

  deleteImage = ( id: string ): Promise<Image> => {
    return kyInstance.delete( `images/${id}` ).json();
  };

  getImages = ( searchParams?: Record<string, string> ): Promise<PaginatedImage> => {
    return kyInstance.get( 'images', { searchParams } ).json();
  };

  updateImage = ( id: string, data: UpdateImageDTO ): Promise<Image> => {
    return kyInstance.put( `images/${id}`, { json: data } ).json();
  };

}

export const imageService = new ImageService();
