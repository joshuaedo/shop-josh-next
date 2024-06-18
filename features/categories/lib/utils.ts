import path from 'path';
import sharp from 'sharp';
import fs from 'fs';

// Helper function to shuffle an array and pick the first n elements
const getRandomImages = (array: string[], num: number) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const generateGridImage = async (imageUrls: string[]): Promise<string> => {
  let selectedImages: string[] = [];
  let columns: number, rows: number;

  try {
    if (imageUrls.length > 9) {
      selectedImages = getRandomImages(imageUrls, 9);
      columns = 3;
      rows = 3;
    } else if (imageUrls.length === 9) {
      selectedImages = imageUrls;
      columns = 3;
      rows = 3;
    } else if (imageUrls.length > 6 && imageUrls.length < 9) {
      selectedImages = getRandomImages(imageUrls, 6);
      columns = 3;
      rows = 2;
    } else if (imageUrls.length === 6) {
      selectedImages = imageUrls;
      columns = 3;
      rows = 2;
    } else if (imageUrls.length > 4 && imageUrls.length < 6) {
      selectedImages = getRandomImages(imageUrls, 4);
      columns = 2;
      rows = 2;
    } else if (imageUrls.length === 4) {
      selectedImages = imageUrls;
      columns = 2;
      rows = 2;
    } else {
      selectedImages = imageUrls; // Handle cases with fewer than 4 images (can be extended as needed)
      columns = Math.min(2, imageUrls.length);
      rows = Math.ceil(imageUrls.length / columns);
    }

    const images = await Promise.all(
      selectedImages.map(async (url, index) => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch image at ${url}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const resizedImage = await sharp(buffer).resize(200, 200).toBuffer();
        return {
          input: resizedImage,
          top: Math.floor(index / columns) * 200, // Adjust based on grid layout
          left: (index % columns) * 200, // Adjust based on grid layout
        };
      })
    );

    const gridWidth = columns * 200;
    const gridHeight = rows * 200;

    const gridBuffer = await sharp({
      create: {
        width: gridWidth,
        height: gridHeight,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 0 },
      },
    })
      .composite(images)
      .png()
      .toBuffer();

    const uniqueId = Date.now();
    const outputPath = path.join('/tmp', `grid-image-${uniqueId}.png`);
    fs.writeFileSync(outputPath, gridBuffer);

    return outputPath; // Return the absolute path for the temporary file
  } catch (error) {
    console.error('Error generating grid image:', error);
    throw new Error('Failed to generate grid image');
  }
};

export { generateGridImage };
