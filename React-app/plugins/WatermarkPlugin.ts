import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';

type options = {
    text?: string;
    position?: string;
    color?: string;
    fontSize?: number;
}


export function WatermarkPlugin(options?: options) {

    // Set default options
    options = {
        text: 'Sample Text',
        position: 'center',
        color: 'white',
        fontSize: 48,
        ...options
    };

    return {
        name: 'vite-image-text-plugin',

        async transform(_src: string, id: string) {
            // Only process image files
            if (!id.match(/\.(png|jpg|jpeg|webp)$/i)) {
                return null;
            }

            try {
                const imageBuffer = await fs.readFile(id);
                const image = sharp(imageBuffer);
                const metadata = await image.metadata();

                // Create SVG text overlay
                const svgText = `
          <svg width="${metadata.width}" height="${metadata.height}">
            <style>
              .text { fill: ${options.color}; font-size: ${options.fontSize}px; font-family: sans-serif; }
            </style>
            <text 
              x="50%" 
              y="50%" 
              text-anchor="middle" 
              class="text"
              dominant-baseline="middle"
            >${options.text}</text>
          </svg>
        `;

                // Composite the text over the image
                const processedImage = await image
                    .composite([
                        {
                            input: Buffer.from(svgText),
                            gravity: options.position
                        }
                    ])
                    .toBuffer();

                // Return the processed image as base64
                const base64Image = processedImage.toString('base64');
                return `export default "data:image/${path.extname(id).slice(1)};base64,${base64Image}"`;
            } catch (error) {
                console.error('Error processing image:', error);
                return null;
            }
        }
    }
}