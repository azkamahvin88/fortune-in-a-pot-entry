// Fortune in a Pot — make.fun one-liner entry.
// Writes the chosen fortune line to <OUTPUT_DIR>/entry.txt (default /output).
// Guard rails: the line must be a single line of 1-120 characters (counted in
// Unicode code points), otherwise the program fails loudly before writing.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 120;

const fortune =
  "Good news from the windowsill: your plant will grow taller, greener, and only slightly smug about it.";

function checkLine(line) {
  const problems = [];
  if (line.length === 0) problems.push("line is empty");
  if (/[\r\n]/.test(line)) problems.push("line contains a newline");
  const size = [...line].length;
  if (size < 1) problems.push("line has no characters");
  if (size > MAX_CHARS)
    problems.push(`line is ${size} characters, over the ${MAX_CHARS} limit`);
  return problems;
}

const faults = checkLine(fortune);
if (faults.length > 0) {
  console.error("Fortune line failed validation:");
  for (const fault of faults) console.error(`  - ${fault}`);
  process.exit(1);
}

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, fortune + "\n", "utf8");
console.log(`Wrote ${[...fortune].length}-character fortune to ${outFile}`);
