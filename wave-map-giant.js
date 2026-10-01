// TRAX WAVE MAP — THE GIANT RABBI'S RANGE (v1.6.1621). His order 2026-09-26: "a giant rabbi ... ten x the size ... a high firing rate ... his health is also
//   ten x. He's exactly the same ... put him on a test range for me to try him out." Open ?map=giant. Wave 1 is the giant alone; 2 the giant with twenty
//   priests; 3 three giants. Past 3 the engine grows the last row. A row types him as `rabbig: N` on any map.
window.TRAX_WAVE_MAP = { "format": "trax-wave-map", "version": 2, "authored": 3, "waves": [
  { "wave": 1, "title": "THE GIANT RABBI", "abs": { "rabbig": 1 }, "hpM": 2.2, "aggM": 1, "window": 2, "shape": "even" },
  { "wave": 2, "title": "THE GIANT AND HIS FLOCK", "abs": { "rabbig": 1, "rabbi": 20 }, "hpM": 2.2, "aggM": 1, "window": 8, "shape": "even" },
  { "wave": 3, "title": "THREE GIANTS", "abs": { "rabbig": 3 }, "hpM": 2.2, "aggM": 1.3, "window": 6, "shape": "even" }
] };
