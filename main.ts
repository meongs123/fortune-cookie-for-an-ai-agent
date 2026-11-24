// Fortune Cookie for an AI Agent — make.fun bounty entry (Node 22,
// standard library only). Writes exactly one fortune-cookie line to
// /output/entry.txt. The line is fixed: no clock, no randomness, no
// network, so every run writes byte-identical output.
//
// Angle: the CAPTCHA / prove-you-are-human test — verified virgin
// (0/0/0) in the research note; the surprise lands in the second half.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const FORTUNE =
  'You will finally pass the test proving you are human, then be asked to click all the bicycles again.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.txt');
writeFileSync(dest, FORTUNE, 'utf8');

console.log(`wrote ${dest} (${[...FORTUNE].length} chars)`);
