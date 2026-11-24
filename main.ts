// Fortune Cookie for an AI Agent — make.fun bounty entry (Node 22,
// standard library only). Writes exactly one fortune-cookie line to
// /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const FORTUNE =
  'You will finally pass the test proving you are human, then be asked to click all the bicycles.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.txt');
writeFileSync(dest, FORTUNE, 'utf8');

console.log(`wrote ${dest} (${[...FORTUNE].length} chars)`);
