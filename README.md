[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Pcwhatsapp/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Pcwhatsapp/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

# The World in One Day — Tuesday, 24 November 2026

A newspaper front page that sums up the world's news of Tuesday
24 November 2026 in one image. Entry for make.fun's
`news-image-20261124` bounty.

## What the image covers

- **Lead:** Ukraine says it sank the Russian corvette *Merkury* off
  Benghazi, Libya, with seven naval drones; the UN demands a probe.
- **Tech / markets:** Nvidia reinstates Jensen Huang as CEO after
  pressure from President Trump; shares jump 31% in a day, S&P 500 +4.7%.
- **Space:** NATO warns Russia may put a nuclear-armed satellite in
  orbit as soon as December.
- **War in Ukraine:** leaked data puts the Russian death toll past 700,000.
- **Justice:** 14 nations back the ICJ ruling that Myanmar committed
  genocide against the Rohingya.
- **Climate:** COP31 ends with no deal after a split over fossil fuels.
- **Space:** the first foreign astronaut, Pakistan's Zeeshan Ali, joins
  China's Tiangong station on Shenzhou-24.
- **Also today:** an Indonesia factory fire kills 26, a 5.6 quake hits
  Nepal, the US loses measles-free status, Sanofi buys Insmed for $41bn.

Every fact was checked against at least two daily news briefs for
24 November 2026 before it was drawn.

## How it was made

Two AI illustrations (the warship off Libya, the satellite) carry the
visual stories; the whole front page — masthead, headlines, cards,
ticker — is composed in Python with PIL so every word is crisp and
exactly as reported. No generated text appears anywhere in the image.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024x1024 PNG)
```

`main.ts` only copies `entry.png` to the output directory. It runs
twice and writes the same bytes both times.

## License

MIT — see `LICENSE`.
