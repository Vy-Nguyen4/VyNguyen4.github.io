/*
ARTG-2262+63: Prototyping with Code
Decorative Pattern — ASSIGNMENT[4]

Class: ARTG-2262+63
Name: Ngoc Lan Vy (Vy) Nguyen
Email: nguyen.ngocla@northeastern.edu
Assignment: 4
Pattern Title: "Neo Tartan Bloom (Animated)"
*/

let countX = 16;
let countY = 16;

let palette;

function setup() {
  createCanvas(1024, 1024);

  palette = [
    color("#0B1320"), // deep navy
    color("#E84A5F"), // coral red
    color("#2A9D8F"), // teal
    color("#F4D35E"), // warm yellow
    color("#6D597A")  // muted purple
  ];
}

function draw() {
  background(palette[0]);

  let cellW = width / countX;
  let cellH = height / countY;

  // time variable for smooth motion
  let t = frameCount * 0.02;

  // ===== Animated tartan grid (subtle shimmer) =====
  for (let y = 0; y < countY; y++) {
    for (let x = 0; x < countX; x++) {
      let c;
      if ((x + y) % 4 === 0) c = palette[2];
      else if ((x - y + 1000) % 5 === 0) c = palette[4];
      else c = palette[1];

      // shimmer alpha changes over time using noise
      let n = noise(x * 0.2, y * 0.2, t * 0.6);
      let a = map(n, 0, 1, 20, 65);
      let woven = color(red(c), green(c), blue(c), a);

      noStroke();
      fill(woven);
      rect(x * cellW, y * cellH, cellW, cellH);

      // animated vertical thread (breathing width)
      if (x % 3 === 0) {
        let w = cellW * (0.08 + 0.05 * sin(t + x * 0.6));
        fill(red(palette[3]), green(palette[3]), blue(palette[3]), 80);
        rect(x * cellW + cellW * 0.35, y * cellH, w, cellH);
      }

      // animated horizontal thread (slight drift)
      if (y % 4 === 0) {
        let drift = cellW * 0.05 * sin(t * 0.8 + y * 0.5);
        fill(255, 25);
        rect(x * cellW + drift, y * cellH + cellH * 0.35, cellW, cellH * 0.10);
      }
    }
  }

  // ===== Animated rosettes (orbit + pulse + rotation) =====
  for (let gy = 1; gy < countY; gy += 3) {
    for (let gx = 1; gx < countX; gx += 3) {
      let baseX = (gx + 0.5) * cellW;
      let baseY = (gy + 0.5) * cellH;

      // gentle orbit using noise → organic motion
      let wobbleX = map(noise(gx * 0.3, gy * 0.3, t), 0, 1, -cellW * 0.18, cellW * 0.18);
      let wobbleY = map(noise(gx * 0.3 + 9, gy * 0.3 + 9, t), 0, 1, -cellH * 0.18, cellH * 0.18);

      let cx = baseX + wobbleX;
      let cy = baseY + wobbleY;

      // pulsing size
      let baseR = map(noise(gx * 0.2, gy * 0.2), 0, 1, cellW * 0.18, cellW * 0.35);
      let pulse = 1.0 + 0.10 * sin(t * 1.4 + (gx + gy));
      let r = baseR * pulse;

      // rotation offset per rosette
      let rot = t * 0.6 + (gx * 0.4 - gy * 0.3);

      drawRosette(cx, cy, r, (gx + gy) % palette.length, rot);
    }
  }

  // ===== Animated diagonal stitches (scrolling offset) =====
  stroke(255, 35);
  let stitchStep = 48;
  let offset = (frameCount * 2) % stitchStep; // moves over time

  for (let i = -width; i < width * 2; i += stitchStep) {
    if (((i / stitchStep) | 0) % 2 === 0) strokeWeight(1.5);
    else strokeWeight(3);

    line(i + offset, 0, i - width + offset, height);
  }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    // saves a single frame (screenshot) as required
    saveCanvas("assignment[3]_pattern_nguyen_hoangloc", "png");
  }
}

function drawRosette(cx, cy, r, paletteIndex, rot) {
  noStroke();

  let petalColor = palette[paletteIndex % palette.length];
  let petalFill = color(red(petalColor), green(petalColor), blue(petalColor), 140);

  let petals = 10;

  // rotate petals around center
  for (let p = 0; p < petals; p++) {
    let a = rot + TWO_PI * (p / petals);
    let px = cx + cos(a) * r * 0.55;
    let py = cy + sin(a) * r * 0.55;

    fill(petalFill);
    ellipse(px, py, r * 0.75, r * 0.42);
  }

  // center glow pulse
  let glow = 160 + 60 * sin(frameCount * 0.06 + paletteIndex);
  fill(244, 211, 94, glow);
  ellipse(cx, cy, r * 0.55, r * 0.55);

  // ring dots rotate too
  fill(255, 160);
  for (let d = 0; d < 12; d++) {
    let a = rot * 1.4 + TWO_PI * (d / 12.0);
    ellipse(cx + cos(a) * r * 0.35, cy + sin(a) * r * 0.35, r * 0.08, r * 0.08);
  }
}

/**
* A function to define what to do whenever a key
* is pressed over the canvas.
*/
function keyPressed() {
  // Was it the upper/lower 'S' key?
  if (key == 'S' || key == 's') {
 saveCanvas("assignment[3]_pattern_roe_jane", "png");
  }
}
      // gentle orbit using noise → organic motions