const { Jimp } = require("jimp");
const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "public/images/icons");
const files = fs.readdirSync(iconsDir).filter(f => f.endsWith(".jpg"));

async function processImages() {
  for (const file of files) {
    const filePath = path.join(iconsDir, file);
    console.log(`Processing ${file}...`);
    
    const image = await Jimp.read(filePath);
    
    // Get top-left pixel color as the background color
    const bgColor = image.getPixelColor(0, 0);
    const bgR = (bgColor >> 24) & 255;
    const bgG = (bgColor >> 16) & 255;
    const bgB = (bgColor >> 8) & 255;
    
    // Tolerance for JPEG artifacts
    const tolerance = 40;
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      if (
        Math.abs(r - bgR) <= tolerance &&
        Math.abs(g - bgG) <= tolerance &&
        Math.abs(b - bgB) <= tolerance
      ) {
        // Set alpha to 0 (transparent)
        this.bitmap.data[idx + 3] = 0;
      }
    });
    
    const outPath = path.join(iconsDir, file.replace(".jpg", ".png"));
    await image.write(outPath);
    console.log(`Saved ${outPath}`);
  }
}

processImages().catch(console.error);
