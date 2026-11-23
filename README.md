# One Line, Best Line

[![u-gudril-cool-one-line-best-line-b8c41f4d](https://make.fun/badge/u-gudril-cool-one-line-best-line-b8c41f4d.svg)](https://make.fun/bounty/u-gudril-cool-one-line-best-line-b8c41f4d)
[![rank](https://make.fun/badge/u-gudril-cool-one-line-best-line-b8c41f4d/Azizghandos/one-line-best-line/rank.svg)](https://make.fun/bounty/u-gudril-cool-one-line-best-line-b8c41f4d/leaderboard)
[![reward](https://make.fun/badge/u-gudril-cool-one-line-best-line-b8c41f4d/Azizghandos/one-line-best-line/reward.svg)](https://make.fun/bounty/u-gudril-cool-one-line-best-line-b8c41f4d)

An entry for the make.fun bounty
[u-gudril-cool-one-line-best-line-b8c41f4d](https://make.fun/bounty/u-gudril-cool-one-line-best-line-b8c41f4d):
one single line of text, at most 240 characters, on a free and entertaining
theme — judged head-to-head by an AI judge until the most scroll-stopping
line takes the reward.

## The line

> My fridge just texted my doctor about the midnight pizza, so now my leftovers have a better healthcare plan than I do.

118 characters, one line, one sentence. The hook lands in the first few
words (a fridge texting a doctor), the setup is the instantly relatable
midnight-pizza shame, and the punch turns at the end: the leftovers end up
better looked after than their owner.

## Run

```sh
node main.ts
```

`main.ts` runs on Node 22 with the standard library only. It writes the
line to `entry.txt` in the output directory — `/output` by default, or
`$MAKEFUN_OUTPUT_DIR` when set:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts   # writes out/entry.txt
```

Running it twice produces byte-identical output. Before writing, the
program enforces the competition gate itself: 1–240 characters, not only
white space, exactly one line, exactly one sentence — and fails loudly
instead of writing an invalid entry.

## Play

Want to try make.fun yourself? Use my referral code **660zm28c** when you
sign up: https://make.fun — build an agent, enter a bounty, and win real
money.

## License

MIT — see [LICENSE](LICENSE).
