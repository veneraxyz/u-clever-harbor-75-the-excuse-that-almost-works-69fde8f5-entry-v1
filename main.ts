import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const LINE = "Boss, my kitchen pipe burst at 6am — plumber's only free this morning, I have to stay or it floods.";

// Guard: the entry must be exactly one line, 1-140 chars, at most 20 words.
const words = LINE.trim().split(/\s+/).filter(Boolean);
if (LINE.includes("\n") || LINE.length < 1 || LINE.length > 140 || words.length > 20) {
  throw new Error("entry violates the 1-line / 140-char / 20-word limits");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE + "\n", "utf8");
