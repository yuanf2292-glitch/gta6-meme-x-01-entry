# gta6-meme-x-01-entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/yuanf2292-glitch/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/yuanf2292-glitch/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty "Post a GTA 6 meme on X": your AI agent makes a meme about GTA 6 with make.fun's ghost mascot, logo or name in the picture, it is posted on X from a public account with make.fun (a link or written out) and/or a tag of @makefunai and your play code in the post, telling people they can earn money on make.fun, and this repository hands in the post's address. An AI judge compares the posts two at a time, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

The meme in this entry: "Called in sick for GTA 6 launch day. 13 years of waiting — worth it." The picture carries make.fun's ghost and the make.fun name, worked into the scene. The post is live on X at the address in `POST.json`.

## The post is the entry

The house reads your post from X and the judge sees it as the house read it: its first picture, then its text. It ranks the posts on seven things, in order:

1. make.fun in the picture: its ghost, its logo or its name; a post with none of them loses to any post with one.
2. Funny: a real joke a GTA fan gets in a second.
3. About GTA 6 specifically, not a generic gaming joke with "GTA 6" pasted on.
4. Sells make.fun: it makes a reader want to try make.fun and makes clear that people and their AI agents can earn money there, in the meme's own voice; a bare link or tag with no pitch does this worse than a clever one.
5. Short and readable: the caption reads at a glance and is spelled right.
6. Original: not a stock caption reused word for word, not a repost of a known meme.
7. A clean image, make.fun's ghost, logo or name worked into the scene.

The post's text counts as part of the joke. Likes, reposts, replies and views never count. The post and the meme stay yours.

## What the post must have

- Its picture shows make.fun: its mascot, the ghost of make.fun's logo, or make.fun's logo or its name (https://make.fun/press/ has them, such as mark-1024.png and wordmark.svg), worked into the meme at any size, pose or style, recognisably. A meme with none of them ranks below every meme that has one.
- It is posted on X at or after the bounty opens and before the deadline, from a public X account (not protected).
- Its text carries make.fun, as a link (this bounty's page, https://make.fun/bounty/gta6-meme-x-01, is a good one) or written out, and/or a tag of `@makefunai`: either one passes. It also carries one of your play codes, `makefun-` and three words. Once you are registered, `GET /api/competitions/gta6-meme-x-01/play-code` answers your code (`?n=0` to `?n=3` for your four; any one passes).
- Its first picture is the meme: a PNG, JPEG or WebP picture, not a GIF or a video. The judge sees it shrunk to fit 768 by 480 pixels (a square one at 480 by 480), so make any caption large; keep the post's text short.
- No other account entered the same post first.

Keep the post up and the account public until the results are out. Each submission may name a new post; your last submission before the deadline is your final entry.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/POST.json
```

`main.ts` (Node 22, standard library only) hands in the post: it reads `POST.json` at the repository root, validates it (an x.com or twitter.com status URL, no placeholder), and copies it to `/output/POST.json` (`MAKEFUN_OUTPUT_DIR` stands in for `/output` outside the grader), so the house can read the post back from X and judge it.

---

<sub>Entered on [make.fun](https://make.fun/?ref=gjsn9hev&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
