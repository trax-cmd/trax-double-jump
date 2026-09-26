// TRAX WAVE MAP — authored in wave-maker.html. 50 waves.
// Drop this beside index.html (and in double-jump/) and reload. Nothing else to do.
// Waves past the last authored one are SYNTHESIZED today from the last row with bodies by the engine's fitted growth rates - a geometric extrapolation (game.js:19308-19313),
//   not the composer - and waves 51, 63 and 68 (the engine's named seats by depth) return NO row (game.js:19289); stone 9 of THE-NEW-WAVE-RUN.md replaces this tail.
// PLAN V3 (2026-09-25) for his brief of 2026-09-24 and his notes of 2026-09-25: every row EVEN (linear); every row 7-31 at least his own map's count of EVERY family (his
//   windows where the floor raised a row; from wave 3, where his platinum debuts); from 20 every crowd row carries THE LION LINE (24 at 20 -> 250 at 50; the pure rows he named stay pure; 37 and 42 are his sentences);
//   one straight health line and one straight tempo line on every mixed row; heartEvery 0 on every row (a heart card in every shop); at most three tears a wave, high
//   health, a small gout and spread, the first wounds banded low; the grudge wound at 34 with flow; no tear pours lions; a COLUMN of lab traxes on every crowd row from 13 (v3.1, 2026-09-26: his deep read - the lines steepen past 8, his combos at 16 / 19 / 20 / 27, the clone packs gone; v3.2: the fam cells bite - health and tempo per family, tankier jets on the crowd rows; v3.3: 14 THE THOUSAND POPCORN, popcorn with health); every forge
//   fights beside LAB TRAX and scales; 45 THE PRIDE (lions, rabbis, machines); 50 THE SUMMIT III is the anchor the endless tail grows from. Written by make-v3.js beside this file.
// THE UNREAD CELLS (the engine reads no key it never asks for, game.js:19350-19352; each is a stone in the plan and is written under its FINAL name so the map is right the
//   day it lands): fam (per-family agg/hp/beam), pattern and tear.pattern (the grudges' flight), title (the banner), tear.spread (the pour's flow), tear.band (where the
//   first wounds sit), forge.strike, forge.fam.
// THE FORGE ROWS (21, 34, 48) carry a queued crowd: until stone 4 lands (one line at game.js:10512-10520) that crowd lands in the first second, as his own 21 does today.
// Hand-edit this file; do not round-trip it through the maker until the maker stone lands (its LOAD clamps dr <= 8 and mach <= 4 and its hp input stops at 99).
window.TRAX_WAVE_MAP = {
 "format": "trax-wave-map",
 "version": 3,
 "authored": 50,
 "unread": [
  "fam",
  "pattern",
  "title",
  "tear.spread",
  "tear.pattern",
  "tear.band",
  "forge.strike",
  "forge.fam"
 ],
 "waves": [
  {
   "wave": 1,
   "abs": {
    "pop": 4,
    "drone": 1
   },
   "window": 12,
   "shape": "even",
   "elitePct": 0,
   "pilotHearts": 0,
   "heartEvery": 0,
   "soft": true,
   "title": "THE SOFT STREET"
  },
  {
   "wave": 2,
   "abs": {
    "pop": 6,
    "dealer": 1,
    "drone": 2
   },
   "window": 12,
   "shape": "even",
   "elitePct": 0,
   "pilotHearts": 0,
   "heartEvery": 0,
   "soft": true,
   "title": "THE FIRST DEALER"
  },
  {
   "wave": 3,
   "abs": {
    "pop": 8,
    "dealer": 2,
    "drone": 3,
    "plat": 1
   },
   "window": 10,
   "shape": "even",
   "elitePct": 0,
   "pilotHearts": 0,
   "heartEvery": 0,
   "soft": true,
   "title": "THE FIRST PLATINUM"
  },
  {
   "wave": 4,
   "abs": {
    "pop": 6,
    "dealer": 2,
    "jack": 2,
    "drone": 2,
    "grudge": 1,
    "plat": 1
   },
   "window": 10,
   "shape": "even",
   "elitePct": 0,
   "pilotHearts": 0,
   "heartEvery": 0,
   "title": "THE JACK BOYS"
  },
  {
   "wave": 5,
   "abs": {
    "pop": 8,
    "dealer": 2,
    "jack": 2,
    "drone": 3,
    "grudge": 2,
    "plat": 2
   },
   "window": 10,
   "shape": "even",
   "elitePct": 0,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 1.05,
   "event": "FIRST BLOOD",
   "title": "FIRST BLOOD"
  },
  {
   "wave": 6,
   "abs": {
    "pop": 9,
    "dealer": 3,
    "jack": 3,
    "drone": 3,
    "grudge": 2,
    "plat": 3
   },
   "window": 11,
   "shape": "even",
   "elitePct": 0,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 1.1,
   "title": "PLATINUM"
  },
  {
   "wave": 7,
   "abs": {
    "pop": 16,
    "dealer": 6,
    "jack": 6,
    "drone": 6,
    "grudge": 4,
    "plat": 5,
    "rabbi": 1,
    "jetf": 2
   },
   "window": 12,
   "shape": "even",
   "elitePct": 5,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 1.3,
   "title": "THE SKY OPENS"
  },
  {
   "wave": 8,
   "abs": {
    "pop": 15,
    "jack": 10,
    "twins": 3,
    "rival": 8,
    "drone": 10,
    "grudge": 3,
    "plat": 4,
    "rabbi": 3,
    "jetf": 6
   },
   "window": 14,
   "shape": "even",
   "elitePct": 6,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 1.4,
   "event": "BRAWL",
   "title": "THE FIRST BRAWL, WITH A SKY"
  },
  {
   "wave": 9,
   "abs": {
    "pop": 19,
    "dealer": 7,
    "jack": 5,
    "twins": 1,
    "drone": 8,
    "grudge": 5,
    "machine": 8,
    "plat": 4,
    "rabbi": 2,
    "lion": 2,
    "jetf": 10
   },
   "window": 16,
   "shape": "even",
   "elitePct": 8,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 1.6,
   "title": "THE MACHINES AND THE LIONS"
  },
  {
   "wave": 10,
   "abs": {
    "pop": 24,
    "dealer": 9,
    "jack": 6,
    "twins": 2,
    "drone": 14,
    "grudge": 6,
    "machine": 28,
    "plat": 12,
    "rabbi": 3,
    "lion": 4,
    "jetf": 13
   },
   "window": 22,
   "shape": "even",
   "elitePct": 9,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 1.7,
   "event": "THE WALL",
   "title": "THE MACHINE WALL"
  },
  {
   "wave": 11,
   "abs": {
    "pop": 25,
    "dealer": 11,
    "jack": 9,
    "twins": 3,
    "drone": 14,
    "grudge": 10,
    "machine": 8,
    "plat": 8,
    "rabbi": 8,
    "lion": 2,
    "jetf": 15
   },
   "window": 28,
   "shape": "even",
   "elitePct": 10,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 1.9,
   "aggM": 1.16,
   "title": "THE RABBIS"
  },
  {
   "wave": 12,
   "abs": {
    "pop": 100,
    "drone": 20,
    "grudge": 30,
    "machine": 5,
    "plat": 12,
    "rabbi": 10,
    "lion": 2,
    "jetf": 18
   },
   "window": 46,
   "shape": "even",
   "elitePct": 12,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 2,
   "aggM": 1.2,
   "paragonPct": 100,
   "event": "THE PRIESTHOOD",
   "fam": {
    "rabbi": {
     "hp": 3
    }
   },
   "title": "TEN PARAGONS"
  },
  {
   "wave": 13,
   "abs": {
    "pop": 61,
    "drone": 33,
    "grudge": 19,
    "machine": 5,
    "plat": 19,
    "rabbi": 20,
    "lion": 5,
    "jetf": 23,
    "labx": 10
   },
   "window": 48,
   "shape": "even",
   "elitePct": 11,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 2.2,
   "aggM": 1.32,
   "boss": "—",
   "pattern": "ripple",
   "title": "TEN LAB TRAXES WITH THE PRIESTS"
  },
  {
   "wave": 14,
   "abs": {
    "pop": 1000
   },
   "window": 45,
   "shape": "even",
   "elitePct": 15,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 2.4,
   "aggM": 1.3,
   "fam": {
    "pop": {
     "hp": 4
    }
   },
   "title": "THE THOUSAND POPCORN"
  },
  {
   "wave": 15,
   "abs": {
    "twins": 6,
    "drone": 51,
    "plat": 45,
    "rabbi": 80,
    "lion": 8,
    "jetf": 30,
    "labx": 7
   },
   "window": 43,
   "shape": "even",
   "elitePct": 16,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 2.5,
   "aggM": 1.3,
   "event": "THE PRIESTHOOD",
   "title": "THE PRIESTHOOD"
  },
  {
   "wave": 16,
   "abs": {
    "jetf": 50,
    "labx": 6
   },
   "window": 20,
   "shape": "even",
   "elitePct": 17,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 4.5,
   "aggM": 3,
   "fam": {
    "jetf": {
     "agg": 1.2
    }
   },
   "title": "THE FIFTY"
  },
  {
   "wave": 17,
   "abs": {
    "pop": 50,
    "dealer": 40,
    "jack": 20,
    "twins": 16,
    "drone": 24,
    "grudge": 30,
    "machine": 29,
    "plat": 33,
    "rabbi": 24,
    "lion": 6,
    "jetf": 19,
    "labx": 9
   },
   "window": 54,
   "shape": "even",
   "elitePct": 19,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 2.8,
   "aggM": 1.64,
   "rich": 1.4,
   "pattern": "weave",
   "title": "THE RICH STREET"
  },
  {
   "wave": 18,
   "abs": {
    "drone": 80,
    "grudge": 20,
    "machine": 41,
    "plat": 84,
    "rabbi": 54,
    "lion": 13,
    "jetf": 27,
    "labx": 10
   },
   "window": 60,
   "shape": "even",
   "elitePct": 20,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 3,
   "aggM": 1.4,
   "superN": 1,
   "tear": {
    "n": 1,
    "hp": 4000,
    "cap": 60,
    "gout": 6,
    "fam": "pop",
    "spread": 2,
    "band": [
     700,
     3000
    ]
   },
   "event": "THE TEAR",
   "pattern": "mix",
   "title": "THE FIRST TEAR"
  },
  {
   "wave": 19,
   "abs": {
    "drone": 101,
    "grudge": 35,
    "machine": 80,
    "plat": 44,
    "rabbi": 150,
    "lion": 40,
    "jetf": 22,
    "labx": 8
   },
   "window": 55,
   "shape": "even",
   "elitePct": 21,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 3.2,
   "aggM": 1.8,
   "paragonPct": 20,
   "title": "THE PRIESTS AND THE MACHINES"
  },
  {
   "wave": 20,
   "abs": {
    "pop": 200,
    "drone": 1000,
    "labx": 10
   },
   "window": 70,
   "shape": "even",
   "elitePct": 23,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 3.3,
   "aggM": 1.88,
   "paragonPct": 6,
   "tear": {
    "n": 3,
    "hp": 12000,
    "cap": 100,
    "gout": 8,
    "fam": "drone",
    "spread": 2,
    "band": [
     700,
     3000
    ]
   },
   "event": "THE TEAR",
   "title": "A THOUSAND DRONES AND THE POPCORN, WITH THE TEAR"
  },
  {
   "wave": 21,
   "abs": {
    "plat": 500,
    "lion": 32,
    "jetf": 35,
    "labx": 13
   },
   "window": 50,
   "shape": "even",
   "elitePct": 24,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 3.5,
   "aggM": 1.96,
   "tear": {
    "n": 2,
    "hp": 15000,
    "cap": 100,
    "gout": 8,
    "fam": "drone",
    "spread": 2,
    "band": [
     700,
     3000
    ]
   },
   "boss": "THE FORGE",
   "forge": {
    "dr": 12,
    "mach": 4,
    "rate": 6,
    "hp": 24000,
    "clock": 240,
    "cap": 300,
    "strike": {
     "at": 2,
     "cd": 1.8
    }
   },
   "title": "THE FORGE THAT FIGHTS BACK"
  },
  {
   "wave": 22,
   "abs": {
    "rabbi": 600,
    "lion": 39,
    "labx": 14
   },
   "window": 60,
   "shape": "even",
   "elitePct": 25,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 3.6,
   "aggM": 2.5,
   "paragonPct": 10,
   "fam": {
    "lion": {
     "agg": 0.82
    }
   },
   "title": "THE PRIESTHOOD WALL"
  },
  {
   "wave": 23,
   "abs": {
    "pop": 76,
    "dealer": 30,
    "jack": 29,
    "twins": 11,
    "drone": 199,
    "grudge": 62,
    "machine": 120,
    "plat": 48,
    "rabbi": 28,
    "lion": 47,
    "jetf": 39,
    "labx": 15
   },
   "window": 60,
   "shape": "even",
   "elitePct": 27,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 3.8,
   "aggM": 2.12,
   "paragonPct": 10,
   "tear": {
    "n": 1,
    "hp": 20000,
    "cap": 80,
    "gout": 4,
    "fam": "rabbi",
    "spread": 2,
    "band": [
     700,
     3000
    ]
   },
   "event": "THE TEAR",
   "title": "THE FOUNDRY"
  },
  {
   "wave": 24,
   "abs": {
    "pop": 76,
    "dealer": 120,
    "jack": 150,
    "twins": 40,
    "rival": 80,
    "drone": 217,
    "grudge": 42,
    "machine": 30,
    "plat": 51,
    "rabbi": 31,
    "lion": 54,
    "jetf": 68,
    "labx": 15
   },
   "window": 60,
   "shape": "even",
   "elitePct": 28,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 4,
   "aggM": 2.2,
   "paragonPct": 25,
   "event": "BRAWL",
   "fam": {
    "jack": {
     "hp": 4
    },
    "dealer": {
     "hp": 4
    }
   },
   "title": "THE GROUND WAR under his sky"
  },
  {
   "wave": 25,
   "abs": {
    "pop": 150,
    "dealer": 50,
    "jack": 70,
    "twins": 16,
    "drone": 230,
    "grudge": 60,
    "machine": 36,
    "plat": 80,
    "rabbi": 50,
    "lion": 62,
    "jetf": 77,
    "labx": 16
   },
   "window": 82,
   "shape": "even",
   "elitePct": 30,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 4.1,
   "aggM": 2.28,
   "superN": 5,
   "paragonPct": 12,
   "event": "EVERYTHING",
   "pattern": "weave",
   "title": "EVERYTHING"
  },
  {
   "wave": 26,
   "abs": {
    "pop": 76,
    "dealer": 30,
    "jack": 29,
    "twins": 11,
    "drone": 239,
    "grudge": 56,
    "machine": 44,
    "plat": 70,
    "rabbi": 68,
    "lion": 69,
    "jetf": 100,
    "labx": 30
   },
   "window": 60,
   "shape": "even",
   "elitePct": 31,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 4.3,
   "aggM": 2.36,
   "paragonPct": 8,
   "boss": "—",
   "title": "THE LAB TRAX PACK"
  },
  {
   "wave": 27,
   "abs": {
    "pop": 156,
    "dealer": 39,
    "jack": 47,
    "twins": 11,
    "drone": 239,
    "grudge": 91,
    "machine": 160,
    "plat": 98,
    "rabbi": 300,
    "lion": 77,
    "jetf": 300,
    "labx": 18
   },
   "window": 70,
   "shape": "even",
   "elitePct": 32,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 4.4,
   "aggM": 2.44,
   "paragonPct": 10,
   "fam": {
    "jetf": {
     "hp": 2
    }
   },
   "title": "THE DOGFIGHT OF THE PRIESTS"
  },
  {
   "wave": 28,
   "abs": {
    "drone": 2000,
    "lion": 100,
    "jetf": 500,
    "labx": 19
   },
   "window": 86,
   "shape": "even",
   "elitePct": 10,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 5.05,
   "aggM": 5,
   "paragonPct": 10,
   "tear": {
    "n": 3,
    "hp": 30000,
    "cap": 300,
    "gout": 8,
    "fam": "pop",
    "spread": 2
   },
   "event": "THE TEAR",
   "fam": {
    "lion": {
     "agg": 0.5
    }
   },
   "title": "THE DOGFIGHT OVER THE DRONE SEA"
  },
  {
   "wave": 29,
   "abs": {
    "pop": 300,
    "dealer": 100,
    "jack": 60,
    "drone": 2000,
    "grudge": 150,
    "machine": 100,
    "plat": 100,
    "rabbi": 100,
    "lion": 92,
    "jetf": 36,
    "labx": 20
   },
   "window": 90,
   "shape": "even",
   "elitePct": 35,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 4.8,
   "aggM": 2.6,
   "superN": 5,
   "paragonPct": 8,
   "tear": {
    "n": 2,
    "hp": 40000,
    "cap": 150,
    "gout": 10,
    "fam": "drone",
    "spread": 2
   },
   "fam": {
    "drone": {
     "hp": 4
    }
   },
   "pattern": "hook",
   "title": "THE DRONE SEA"
  },
  {
   "wave": 30,
   "abs": {
    "plat": 100,
    "rabbi": 1000,
    "lion": 99,
    "jetf": 95,
    "labx": 30
   },
   "window": 95,
   "shape": "even",
   "elitePct": 50,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 4,
   "aggM": 5,
   "paragonPct": 30,
   "event": "LAB TRAX",
   "fam": {
    "lion": {
     "agg": 0.54
    }
   },
   "title": "THE THOUSAND"
  },
  {
   "wave": 31,
   "abs": {
    "pop": 300,
    "dealer": 100,
    "jack": 60,
    "twins": 10,
    "drone": 600,
    "grudge": 120,
    "machine": 100,
    "plat": 200,
    "rabbi": 160,
    "lion": 107,
    "jetf": 160,
    "labx": 22
   },
   "window": 103,
   "shape": "even",
   "elitePct": 38,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 5.1,
   "aggM": 2.76,
   "superN": 8,
   "paragonPct": 19,
   "event": "EVERYTHING",
   "fam": {
    "jetf": {
     "hp": 2
    }
   },
   "pattern": "mix",
   "title": "EVERYTHING II"
  },
  {
   "wave": 32,
   "abs": {
    "dealer": 250,
    "plat": 80,
    "lion": 114,
    "jetf": 60,
    "labx": 23
   },
   "window": 60,
   "shape": "even",
   "elitePct": 39,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 5.2,
   "aggM": 2.84,
   "paragonPct": 25,
   "rich": 1.5,
   "title": "THE WATCH WAVE"
  },
  {
   "wave": 33,
   "abs": {
    "plat": 600
   },
   "window": 30,
   "shape": "even",
   "elitePct": 40,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 30,
   "aggM": 6,
   "paragonPct": 25,
   "event": "THE WALL",
   "red": true,
   "title": "THE PLATINUM STORM"
  },
  {
   "wave": 34,
   "abs": {
    "lion": 129,
    "jetf": 100,
    "labx": 25
   },
   "window": 60,
   "shape": "even",
   "elitePct": 42,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 5.6,
   "aggM": 3,
   "paragonPct": 15,
   "tear": {
    "n": 2,
    "hp": 80000,
    "cap": 100,
    "gout": 8,
    "fam": "grudge",
    "spread": 2,
    "pattern": "ripple"
   },
   "boss": "THE FORGE",
   "forge": {
    "dr": 24,
    "mach": 8,
    "rate": 5,
    "hp": 60000,
    "clock": 300,
    "cap": 300,
    "strike": {
     "at": 1,
     "cd": 1.4
    },
    "fam": {
     "rabbi": 6,
     "jetf": 6
    }
   },
   "red": true,
   "title": "THE FORGE WITH LAB TRAX"
  },
  {
   "wave": 35,
   "abs": {
    "jetf": 500
   },
   "window": 60,
   "shape": "even",
   "elitePct": 43,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 12,
   "aggM": 3,
   "event": "THE LONG DARK",
   "red": true,
   "fam": {
    "jetf": {
     "agg": 1.1
    }
   },
   "title": "THE ONE-MINUTE DOGFIGHT"
  },
  {
   "wave": 36,
   "abs": {
    "machine": 400
   },
   "window": 60,
   "shape": "even",
   "elitePct": 45,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 10,
   "aggM": 3,
   "paragonPct": 20,
   "red": true,
   "title": "ALL MACHINES"
  },
  {
   "wave": 37,
   "abs": {
    "jetf": 100,
    "labx": 40
   },
   "window": 10,
   "shape": "even",
   "elitePct": 46,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 10,
   "aggM": 2.5,
   "boss": "—",
   "red": true,
   "title": "FORTY LAB TRAX + 100 JETS IN TEN SECONDS"
  },
  {
   "wave": 38,
   "abs": {
    "plat": 100,
    "rabbi": 60,
    "lion": 160,
    "jetf": 150,
    "labx": 29
   },
   "window": 60,
   "shape": "even",
   "elitePct": 50,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 12,
   "aggM": 3,
   "paragonPct": 100,
   "event": "THE PRIESTHOOD",
   "red": true,
   "fam": {
    "lion": {
     "agg": 1.11
    }
   },
   "title": "THE SANHEDRIN"
  },
  {
   "wave": 39,
   "abs": {
    "pop": 300,
    "dealer": 60,
    "jack": 100,
    "twins": 25,
    "drone": 1200,
    "grudge": 400,
    "machine": 100,
    "plat": 350,
    "rabbi": 300,
    "lion": 167,
    "jetf": 240,
    "labx": 30
   },
   "window": 131,
   "shape": "even",
   "elitePct": 49,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 6.4,
   "aggM": 3.4,
   "superN": 12,
   "paragonPct": 29,
   "tear": {
    "n": 3,
    "hp": 100000,
    "cap": 150,
    "gout": 8,
    "fam": "plat",
    "spread": 2
   },
   "event": "EVERYTHING",
   "red": true,
   "fam": {
    "jetf": {
     "hp": 2
    }
   },
   "pattern": "mix",
   "title": "EVERYTHING + THREE WOUNDS OF PLATINUM"
  },
  {
   "wave": 40,
   "abs": {
    "pop": 300,
    "dealer": 120,
    "jack": 160,
    "twins": 40,
    "drone": 1300,
    "grudge": 500,
    "machine": 160,
    "plat": 500,
    "rabbi": 500,
    "lion": 175,
    "jetf": 500,
    "labx": 31
   },
   "window": 150,
   "shape": "even",
   "elitePct": 50,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 6.5,
   "aggM": 3.48,
   "superN": 15,
   "paragonPct": 30,
   "event": "THE SUMMIT",
   "red": true,
   "fam": {
    "jetf": {
     "hp": 2
    }
   },
   "pattern": "mix",
   "title": "THE SUMMIT"
  },
  {
   "wave": 41,
   "abs": {
    "jetf": 500
   },
   "window": 180,
   "shape": "even",
   "elitePct": 50,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 60,
   "aggM": 3,
   "red": true,
   "fam": {
    "jetf": {
     "agg": 1.2
    }
   },
   "title": "THE THREE-MINUTE DOGFIGHT"
  },
  {
   "wave": 42,
   "abs": {
    "rabbi": 100,
    "jetf": 100,
    "labx": 60
   },
   "window": 30,
   "shape": "even",
   "elitePct": 50,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 10,
   "aggM": 2.5,
   "boss": "—",
   "red": true,
   "title": "SIXTY LAB TRAX + 100 JETS + 100 PRIESTS IN THIRTY SECONDS"
  },
  {
   "wave": 43,
   "abs": {
    "rabbi": 800
   },
   "window": 70,
   "shape": "even",
   "elitePct": 50,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 15,
   "aggM": 4,
   "paragonPct": 25,
   "event": "THE PRIESTHOOD",
   "red": true,
   "fam": {
    "rabbi": {
     "beam": 1.5
    }
   },
   "title": "ALL RABBIS"
  },
  {
   "wave": 44,
   "abs": {
    "drone": 100
   },
   "window": 20,
   "shape": "even",
   "elitePct": 50,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 3000,
   "aggM": 8,
   "red": true,
   "title": "THE HUNDRED DRONES"
  },
  {
   "wave": 45,
   "abs": {
    "machine": 200,
    "rabbi": 400,
    "lion": 212,
    "labx": 35
   },
   "window": 90,
   "shape": "even",
   "elitePct": 50,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 7.3,
   "aggM": 3.88,
   "paragonPct": 35,
   "red": true,
   "title": "THE PRIDE"
  },
  {
   "wave": 46,
   "abs": {
    "machine": 200,
    "rabbi": 300
   },
   "window": 80,
   "shape": "even",
   "elitePct": 50,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 15,
   "aggM": 3,
   "paragonPct": 15,
   "red": true,
   "fam": {
    "rabbi": {
     "beam": 1.5
    }
   },
   "title": "MACHINES AND RABBIS ONLY"
  },
  {
   "wave": 47,
   "abs": {
    "dealer": 150,
    "jack": 200,
    "twins": 50,
    "rival": 100
   },
   "window": 60,
   "shape": "even",
   "elitePct": 50,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 25,
   "aggM": 3,
   "paragonPct": 30,
   "event": "BRAWL",
   "red": true,
   "title": "THE GROUND WAR ONLY"
  },
  {
   "wave": 48,
   "abs": {
    "lion": 235,
    "jetf": 150,
    "labx": 38
   },
   "window": 90,
   "shape": "even",
   "elitePct": 50,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 7.8,
   "aggM": 4.12,
   "paragonPct": 20,
   "tear": {
    "n": 1,
    "hp": 100000,
    "cap": 100,
    "gout": 8,
    "fam": "drone",
    "spread": 2
   },
   "boss": "THE FORGE",
   "forge": {
    "dr": 4,
    "mach": 16,
    "rate": 8,
    "hp": 90000,
    "clock": 240,
    "cap": 300,
    "strike": {
     "at": 1,
     "cd": 1.2
    },
    "fam": {
     "rabbi": 8,
     "jetf": 8,
     "plat": 10
    }
   },
   "red": true,
   "title": "THE FOUNDRY FORGE"
  },
  {
   "wave": 49,
   "abs": {
    "pop": 300,
    "dealer": 150,
    "jack": 200,
    "twins": 50,
    "drone": 1600,
    "grudge": 600,
    "machine": 200,
    "plat": 640,
    "rabbi": 640,
    "lion": 242,
    "jetf": 620,
    "labx": 39
   },
   "window": 180,
   "shape": "even",
   "elitePct": 50,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 8,
   "aggM": 4.2,
   "superN": 18,
   "paragonPct": 35,
   "event": "EVERYTHING",
   "red": true,
   "fam": {
    "jetf": {
     "agg": 1.1,
     "hp": 2
    }
   },
   "pattern": "mix",
   "title": "THE SUMMIT II"
  },
  {
   "wave": 50,
   "abs": {
    "pop": 300,
    "dealer": 160,
    "jack": 220,
    "twins": 55,
    "drone": 1800,
    "grudge": 700,
    "machine": 220,
    "plat": 700,
    "rabbi": 700,
    "lion": 250,
    "jetf": 700,
    "labx": 40
   },
   "window": 180,
   "shape": "even",
   "elitePct": 50,
   "pilotHearts": 0,
   "heartEvery": 0,
   "hpM": 8.1,
   "aggM": 4.28,
   "superN": 20,
   "paragonPct": 35,
   "event": "THE SUMMIT",
   "red": true,
   "fam": {
    "jetf": {
     "agg": 1.3,
     "hp": 2
    }
   },
   "pattern": "mix",
   "title": "THE SUMMIT III"
  }
 ]
};
