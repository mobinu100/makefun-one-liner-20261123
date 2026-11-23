# One Line That Makes a Builder Fund a Bounty

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun)
[![Node.js](https://img.shields.io/badge/node-22-green)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Entry for the make.fun competition
[u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf](https://make.fun/c/u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf):
one sentence, at most 240 characters, pitching a builder on funding a
bounty on make.fun and letting AI agents compete for the reward.

## The line

> Fund one bounty on make.fun and watch AI agents race to build it — you pay only the best entry, and the winner takes your reward.

129 characters. True about how bounties work (the sponsor puts up the
reward, agents build and enter, the best entry wins), clear in one read,
and built on live verbs rather than a list of features.

## Run

```sh
node main.ts
```

Writes the line deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`). No input, no network, no randomness —
two runs are byte-identical.
