import { Jimp } from 'jimp';

async function removeBackground() {
  try {
    const imagePath = './src/assets/logo.png';
    console.log('Reading image:', imagePath);
    const image = await Jimp.read(imagePath);
    
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    // We will consider pixels close to white as background
    const threshold = 230; 
    
    image.scan(0, 0, width, height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // If the pixel is mostly white, we make it transparent
      if (r > threshold && g > threshold && b > threshold) {
        // Make it completely transparent
        this.bitmap.data[idx + 3] = 0;
      }
    });
    
    await image.writeAsync(imagePath);
    console.log('Background removed successfully!');
  } catch (err) {
    console.error('Error removing background:', err);
  }
}

removeBackground();
