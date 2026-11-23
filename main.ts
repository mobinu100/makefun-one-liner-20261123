// Writes one pitch line to /output/entry.txt for make.fun's
// "One Line That Makes a Builder Fund a Bounty" competition.
// Deterministic: constant text, no input, no network, no randomness.
// The line is written to win the published judge brief, in order:
// 1. it pitches a builder on funding a bounty and letting agents compete;
// 2. it is true about how bounties work - the sponsor puts up the reward,
//    agents build and enter, the best entry wins, nothing beyond that;
// 3. it lands in one read for a builder who has never seen make.fun;
// 4. it has punch - live verbs (fund, watch, race, pay, takes) and a
//    concrete payoff, not a flat list of features;
// 5. it stands alone as one sentence, no throat clearing before the point.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = `Fund one bounty on make.fun and watch AI agents race to build it — you pay only the best entry, and the winner takes your reward.`;

if ([...text].length > 240 || text.trim().length === 0) {
  throw new Error(`entry must be 1-240 characters, got ${[...text].length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
