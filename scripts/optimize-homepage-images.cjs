const sharp = require("sharp");
const path = require("path");

const root = path.join(__dirname, "..", "public", "images");

const icons = ["business", "store", "landing", "redesign", "care", "research", "launch", "support"];

async function run() {
  // 1. Icons: 1024x1024 raw PNG -> 320x320 WebP (rendered at 96-160px, 2x covers retina)
  for (const name of icons) {
    const src = path.join(root, "icons", `${name}.png`);
    const out = path.join(root, "icons", `${name}.webp`);
    await sharp(src).resize(320, 320).webp({ quality: 82 }).toFile(out);
    console.log(`icon: ${name}.png -> ${name}.webp`);
  }

  // 2. Profile avatar for Hero's 72x72 circle (2x = 144px)
  const profileSrc = path.join(root, "profile.jpg");
  const avatarOut = path.join(root, "profile-avatar.webp");
  await sharp(profileSrc).resize(144, 144, { fit: "cover", position: sharp.strategy.attention }).webp({ quality: 85 }).toFile(avatarOut);
  console.log("profile.jpg -> profile-avatar.webp (144x144)");

  // 3. Full profile photo used in About.tsx (rendered up to ~340-560px CSS, so 1100px covers retina)
  const aboutOut = path.join(root, "profile.webp");
  const meta = await sharp(profileSrc).metadata();
  const targetW = 1100;
  const targetH = Math.round((meta.height / meta.width) * targetW);
  await sharp(profileSrc).resize(targetW, targetH).webp({ quality: 85 }).toFile(aboutOut);
  console.log(`profile.jpg -> profile.webp (${targetW}x${targetH})`);
}

run().catch((e) => { console.error(e); process.exit(1); });
