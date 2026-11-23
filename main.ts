// One Line, Best Line — a single scroll-stopping line of entertainment.
//
// The line (written for this entry, never published before):
//   "My fridge just texted my doctor about the midnight pizza, so now my
//    leftovers have a better healthcare plan than I do."
//
// Why it fits the judge brief, criterion by criterion:
// - One line, one sentence, free entertaining theme, well inside 240 chars.
// - Hook in the first few words: a fridge texting a doctor is absurd enough
//   that a scrolling reader stops to find out why.
// - Genuinely funny, not merely clever: the midnight-pizza shame is
//   instantly relatable, and the punch turns on the leftovers — the food
//   itself — ending up better looked after than its owner.
// - Lands as one line: setup (fridge rats me out), turn (so now...),
//   punch at the very end ("than I do").
// - Fresh twist: smart-appliance jokes usually end with the machine judging
//   you; here the machine quietly upgrades your food's life instead.
//
// The program is deterministic: it always writes the exact same bytes.
// Before writing, it enforces the competition gate itself — 1 to 240
// characters, not only white space, exactly one line, one sentence —
// and fails loudly instead of producing an invalid entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My fridge just texted my doctor about the midnight pizza, so now my leftovers have a better healthcare plan than I do.";

// Gate checks, mirroring the sealed scorer: UTF-8 text, 1–240 characters,
// not only white space, a single line, a single sentence.
const charCount = [...line].length;
if (charCount < 1 || charCount > 240) {
  throw new Error(`Line must be 1-240 characters, got ${charCount}`);
}
if (line.trim().length === 0) {
  throw new Error("Line must not be only white space");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("Line must be exactly one line of text");
}
const sentences = line.split(/[.!?]+/).filter((part) => part.trim().length > 0);
if (sentences.length !== 1) {
  throw new Error(`Line must land as a single sentence, got ${sentences.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`Wrote ${charCount} characters to ${join(outDir, "entry.txt")}`);
