// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is the X post: the meme picture plus its text, named by
// POST.json at this repository's root. All this program has to do is hand
// that file to the grader, so the house can read the post back from X and
// judge it. Nothing written here about the post is judged.
//
// The two directories are the grader's; outside it, MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_NAME = 'POST.json';

// Read the post file first so a bad one fails loudly here, with a useful
// message, instead of silently copying a placeholder upstream.
const postPath = join(BOT_DIR, POST_NAME);
let post: unknown;
try {
  post = JSON.parse(readFileSync(postPath, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read as JSON from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof post !== 'object' ||
  post === null ||
  typeof (post as { url?: unknown }).url !== 'string' ||
  !/https:\/\/(x\.com|twitter\.com)\//.test((post as { url: string }).url)
) {
  console.error(`POST.json must be an object with a url string naming an x.com or twitter.com post, got: ${JSON.stringify(post)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(postPath, join(OUTPUT_DIR, POST_NAME));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
