import data from '@/app/lib/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages || [];

export function getPlaceholderImage(id: string): ImagePlaceholder {
  const found = PlaceHolderImages.find((img) => img.id === id);
  if (found) return found;

  // Safe fallback to prevent crashes
  return {
    id: 'fallback',
    description: 'Imagem não encontrada',
    imageUrl: `https://picsum.photos/seed/${id}/800/600`,
    imageHint: 'glass installation',
  };
}
