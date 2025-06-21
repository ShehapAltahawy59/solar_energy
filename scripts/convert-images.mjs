import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const sourceDir = "./public/images";
const imagesToConvert = ["cover3.jfif", "new_cover.jfif", "finsihedPro2.jfif"];

async function convertImages() {
  for (const image of imagesToConvert) {
    const sourcePath = path.join(sourceDir, image);
    const newFileName = image.replace(".jfif", ".jpg");
    const outputPath = path.join(sourceDir, newFileName);

    try {
      await sharp(sourcePath).jpeg({ quality: 90 }).toFile(outputPath);

      console.log(`✅ Converted ${image} to ${newFileName}`);
    } catch (error) {
      console.error(`❌ Error converting ${image}:`, error);
    }
  }
}

convertImages()
  .then(() => {
    console.log("🎉 All conversions completed!");
  })
  .catch(console.error);
