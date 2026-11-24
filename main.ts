// One Emoji, One Dream Vacation.
//
// The whole entry is a single glyph: a night sky full of stars. The dream
// trip is not a beach everyone has seen — it is one night far from every
// city light, lying under the Milky Way, where the sky itself is the view.
//
// This program writes exactly that one emoji, and nothing else, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt when unset), with no
// trailing newline, so the file holds a single UTF-8 character.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// U+1F30C MILKY WAY — one code point, four UTF-8 bytes, one character.
const EMOJI = "🌌";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, EMOJI, "utf8");

// Read it back: the gate allows 1–8 characters, and this entry must hold
// exactly one emoji with no trailing newline or stray whitespace.
const written = readFileSync(outFile, "utf8");
if ([...written].length !== 1 || written !== EMOJI) {
  throw new Error(`entry.txt must hold exactly one emoji, got ${JSON.stringify(written)}`);
}
