import { kyInstance, kyMediaInstance } from '@/shared/libs';

import { type CreateImageDTO, type Image, type PaginatedImage, type UpdateImageDTO } from '../model/schema';

class ImageService {

  createImage = async ( data: CreateImageDTO ): Promise<Image> => {
    const formData = new FormData();
    if ( data.image ) {
      formData.append( 'image', data.image );
      formData.append( 'alt', data.alt );
    }
    const response = await kyMediaInstance( 'images', { method: 'post', body: formData } );
    return await response.json();
  };

  deleteImage = async ( id: string ): Promise<Image> => {
    const response = await kyInstance( `images/${id}`, { method: 'delete' } );
    return await response.json();
  };

  getImages = async ( params?: Record<string, string> ): Promise<PaginatedImage> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `images?${searchParams}`, { method: 'get' } );
    return await response.json();
  };

  updateImage = async ( id: string, data: UpdateImageDTO ): Promise<Image> => {
    const response = await kyInstance( `images/${id}`, { method: 'put', body: JSON.stringify( data ) } );
    return await response.json();
  };

}

export const imageService = new ImageService();
