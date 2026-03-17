/*
Class: ARTG-2262
Name: Vy Nguyen
Email: nguyen.ngocla@northeastern.edu
Assignment #5 – Screensaver
Piece Name: "Blooming Clock Garden"
*/

// ----- BALLS -----
let x = [];
let y = [];
let velX = [];
let velY = [];
let radius = [];
let numBalls = 8;

// ----- FLOWERS -----
let flowerX = [];
let flowerY = [];
let flowerSize = [];
let flowerMax = [];
let numFlowers = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Initialize balls
  for (let i = 0; i < numBalls; i++) {
    x[i] = random(width);
    y[i] = random(height);
    velX[i] = random(-4, 4);
    velY[i] = random(-4, 4);
    radius[i] = random(width * 0.02, width * 0.05);
  }

  // Initialize flowers
  for (let i = 0; i < numFlowers; i++) {
    flowerX[i] = random(width);
    flowerY[i] = random(height);
    flowerSize[i] = 0;
    flowerMax[i] = random(width * 0.05, width * 0.12);
  }
}

function draw() {

  // Background shifts with hour
  background(hour() * 10 % 255, 30);

  // ----- BALLS -----
  for (let i = 0; i < numBalls; i++) {

    fill(100, 180, 255, 150);
    noStroke();
    ellipse(x[i], y[i], radius[i], radius[i]);

    x[i] += velX[i];
    y[i] += velY[i];

    if (x[i] > width || x[i] < 0) velX[i] *= -1;
    if (y[i] > height || y[i] < 0) velY[i] *= -1;
  }

  // ----- FLOWERS -----
  let growthSpeed = map(second(), 0, 59, 0.2, 1.5);

  for (let i = 0; i < numFlowers; i++) {

    drawFlower(flowerX[i], flowerY[i], flowerSize[i]);
    flowerSize[i] += growthSpeed;

    if (flowerSize[i] > flowerMax[i]) {
      flowerX[i] = random(width);
      flowerY[i] = random(height);
      flowerSize[i] = 0;
    }
  }

  drawTimeBars();   // ← Visual clock
  displayDate();    // ← Full date display
}

// ----- FLOWER FUNCTION -----
function drawFlower(x, y, size) {
  push();
  translate(x, y);
  noStroke();
  fill(255, 150, 200, 180);

  for (let angle = 0; angle < TWO_PI; angle += PI / 4) {
    ellipse(cos(angle) * size,
            sin(angle) * size,
            size,
            size);
  }

  fill(255, 220, 100);
  ellipse(0, 0, size, size);
  pop();
}

// ----- COOL TIME REPRESENTATION (BARS) -----
function drawTimeBars() {

  let h = hour();
  let m = minute();
  let s = second();

  // Hour bar
  fill(255, 100, 100);
  rect(0, height - 30, map(h, 0, 23, 0, width), 10);

  // Minute bar
  fill(100, 255, 150);
  rect(0, height - 20, map(m, 0, 59, 0, width), 10);

  // Second bar
  fill(100, 150, 255);
  rect(0, height - 10, map(s, 0, 59, 0, width), 10);
}

// ----- DATE DISPLAY -----
function displayDate() {
  fill(255);
  textSize(width * 0.02);
  textAlign(RIGHT, TOP);
  text(month() + "/" + day() + "/" + year(),
       width - 20,
       20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}