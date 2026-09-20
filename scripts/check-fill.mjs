#!/usr/bin/env node
// Scans src/ for [FILL] markers so nothing ships unfilled.
import { readdir, readFile } from "fs/promises";
import { join, extname } from "path";

const EXTS = new Set([".tsx", ".ts", ".css", ".html"]);
import { resolve } from "path";
const ROOT = resolve(process.cwd(), "src");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) results.push(...(await walk(full)));
    else if (EXTS.has(extname(e.name))) results.push(full);
  }
  return results;
}

const files = await walk(ROOT);
let total = 0;

for (const f of files) {
  const src = await readFile(f, "utf8");
  const lines = src.split("\n");
  lines.forEach((line, i) => {
    if (line.includes("[FILL") && !line.includes("`[FILL:")) {
      const rel = f.replace(ROOT + "/", "src/");
      console.log(`${rel}:${i + 1}  ${line.trim()}`);
      total++;
    }
  });
}

console.log(`\n${total} [FILL] marker${total !== 1 ? "s" : ""} remaining.`);
if (total > 0) process.exit(1);
