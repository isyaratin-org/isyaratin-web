import sharp from "sharp";
import fs from "fs";
import path from "path";

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#147B7F" />
      <stop offset="100%" stop-color="#0E4E51" />
    </linearGradient>
  </defs>
  <!-- Squircle container with 100% transparent corners outside -->
  <rect x="12" y="12" width="488" height="488" rx="120" fill="url(#tealGrad)" />
  
  <!-- Subtle inner border for crisp edge definition -->
  <rect x="12" y="12" width="488" height="488" rx="120" fill="none" stroke="#2DD4BF" stroke-opacity="0.35" stroke-width="4" />

  <!-- Handshake Emblem in Pure White, centered -->
  <g transform="translate(-84, -60) scale(3.4)" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <!-- Top Horizontal Line & Right Wrist -->
    <path d="M68 62 H92 C104 58 118 61 133 59 L137 102" />

    <!-- Left Wrist & Diagonal Back of Hand -->
    <path d="M68 62 L64 101 L93 126" />

    <!-- Thumb Clasping Down & Around -->
    <path d="M92 62 C82 72 78 83 82 91 C85 97 93 98 98 92 C104 84 114 84 128 98" />

    <!-- 3 Clasping Finger Knuckles -->
    <path d="M93 126 C100 132 108 128 110 120 C114 125 122 122 125 113 C128 117 136 112 136 102" />
  </g>
</svg>`;

async function generate() {
  const svgBuffer = Buffer.from(svgContent);

  // 1. Generate 512x512 PNG
  const png512 = await sharp(svgBuffer).resize(512, 512).png().toBuffer();
  fs.writeFileSync("src/app/icon.png", png512);
  fs.writeFileSync("public/icon-512.png", png512);
  fs.writeFileSync("public/icon.png", png512);
  console.log("✓ Generated 512x512 icons");

  // 2. Generate 192x192 PNG
  const png192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();
  fs.writeFileSync("public/icon-192.png", png192);
  console.log("✓ Generated 192x192 icon");

  // 3. Generate 180x180 Apple touch icon
  const png180 = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  fs.writeFileSync("public/apple-touch-icon.png", png180);
  console.log("✓ Generated apple-touch-icon (180x180)");

  // 4. Generate small favicons
  const png48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();
  fs.writeFileSync("public/favicon-48x48.png", png48);

  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync("public/favicon-32x32.png", png32);

  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  fs.writeFileSync("public/favicon-16x16.png", png16);
  console.log("✓ Generated 48, 32, 16 favicons");

  // 5. Update icon.svg
  fs.writeFileSync("src/app/icon.svg", svgContent);
  fs.writeFileSync("public/icon.svg", svgContent);
  console.log("✓ Updated icon.svg in src/app and public");

  // 6. Generate favicon.ico (ICO header with 32x32 PNG payload)
  // Modern browsers accept PNG-in-ICO perfectly
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type 1 = ICO
  icoHeader.writeUInt16LE(1, 4); // 1 image

  const icoEntry = Buffer.alloc(16);
  icoEntry.writeUInt8(32, 0);  // width
  icoEntry.writeUInt8(32, 1);  // height
  icoEntry.writeUInt8(0, 2);   // color palette
  icoEntry.writeUInt8(0, 3);   // reserved
  icoEntry.writeUInt16LE(1, 4); // color planes
  icoEntry.writeUInt16LE(32, 6); // bits per pixel
  icoEntry.writeUInt32LE(png32.length, 8); // size of image data
  icoEntry.writeUInt32LE(6 + 16, 12); // offset of image data

  const icoBuffer = Buffer.concat([icoHeader, icoEntry, png32]);
  fs.writeFileSync("src/app/favicon.ico", icoBuffer);
  fs.writeFileSync("public/favicon.ico", icoBuffer);
  console.log("✓ Generated clean favicon.ico in src/app and public");

  // Verify corner pixels of generated 512x512
  const { data } = await sharp(png512).raw().toBuffer({ resolveWithObject: true });
  console.log("Verification Corner (0,0) RGBA:", [data[0], data[1], data[2], data[3]]);
  console.log("Verification Center (256,256) RGBA:", [
    data[(256 * 512 + 256) * 4],
    data[(256 * 512 + 256) * 4 + 1],
    data[(256 * 512 + 256) * 4 + 2],
    data[(256 * 512 + 256) * 4 + 3],
  ]);
}

generate().catch(console.error);
