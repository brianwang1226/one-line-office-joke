import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line about office life: the standup where everyone is blocked by
// the very meeting they are sitting in.
const line =
  "The office standup: fifteen minutes where everyone reports they're blocked by the same meeting they're currently in.";

// The gate allows 1-200 characters; refuse to write an over-long text.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry text is ${line.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
