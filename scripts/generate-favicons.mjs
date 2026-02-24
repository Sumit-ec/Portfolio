import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const source = path.join(root, "public/assets/sumit.png");

const sizes = [
  { name: "icon-16.png",  size: 16  },
  { name: "icon-32.png",  size: 32  },
  { name: "icon-48.png",  size: 48  },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];

console.log("🎨 Generating favicons from sumit.png...");

for (const { name, size } of sizes) {
  const out = path.join(root, "public/icons", name);
  await sharp(source)
    .resize(size, size, { fit: "cover", position: "centre" })
    .png()
    .toFile(out);
  console.log(`  ✅ Generated ${name} (${size}x${size})`);
}

// apple-touch-icon (180x180)
const appleOut = path.join(root, "public/apple-touch-icon.png");
await sharp(source)
  .resize(180, 180, { fit: "cover", position: "centre" })
  .png()
  .toFile(appleOut);
console.log("  ✅ Generated apple-touch-icon.png (180x180)");

// favicon.ico — use the 32px PNG as a .ico substitute (Next.js accepts PNG-based .ico)
const faviconSrc = path.join(root, "public/icons/icon-32.png");
const faviconDest = path.join(root, "src/app/favicon.ico");
const buf = readFileSync(faviconSrc);
writeFileSync(faviconDest, buf);
console.log("  ✅ Copied icon-32.png → src/app/favicon.ico");

console.log("\n🚀 All favicons generated from sumit.png!");
