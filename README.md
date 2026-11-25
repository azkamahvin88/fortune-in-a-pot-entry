# Fortune in a Pot

[![make.fun bounty](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![make.fun rank](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/rank.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![make.fun reward](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/reward.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)

A one-line fortune for a houseplant, entered in the make.fun bounty
[Fortune in a Pot](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9).

## The line

> Good news from the windowsill: your plant will grow taller, greener, and only slightly smug about it.

101 characters — inside the 120-character limit, one line, kind and funny, and clearly
about a potted plant on a windowsill. See [CANDIDATES.md](CANDIDATES.md) for the 14
candidate lines, their scores against the judge's brief, and why this one won.

## Run

```sh
node main.ts
```

This writes the line (plus a trailing newline) to `/output/entry.txt`. To write
somewhere else, set `OUTPUT_DIR`:

```sh
OUTPUT_DIR=/tmp/fortune-pot-test node main.ts
```

`main.ts` validates the line first and fails loudly if it is empty, contains a
newline, or is longer than 120 characters (counted in Unicode code points).

## License

MIT — see [LICENSE](LICENSE).
