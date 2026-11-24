import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One letter for the day: read it from line.txt, check it, write it out.
const folder = dirname(fileURLToPath(import.meta.url));
const letter = readFileSync(join(folder, "line.txt"), "utf8").trim();

if (letter.length !== 1 || letter < "A" || letter > "Z") {
  console.error(`line.txt must contain exactly one capital letter A-Z, found: ${JSON.stringify(letter)}`);
  process.exit(1);
}

const targetDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(targetDir, { recursive: true });
const target = join(targetDir, "entry.txt");
writeFileSync(target, letter, "utf8");
console.log(`entry written: ${letter} -> ${target}`);
