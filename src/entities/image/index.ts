import { imageService } from './api/api';
import { type CreateImageDTO, CreateImageSchema, type Image, type UpdateImageDTO, UpdateImageSchema } from './model/schema';
import { useCreateImage } from './model/use-create-image';
import { useDeleteImage } from './model/use-delete-image';
import { useImages } from './model/use-images';
import { useUpdateImage } from './model/use-update-image';

export { type CreateImageDTO, CreateImageSchema, type Image, type UpdateImageDTO, UpdateImageSchema };

export { imageService, useCreateImage, useDeleteImage, useImages, useUpdateImage };
