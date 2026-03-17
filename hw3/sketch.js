/*
----------------------------------------------------
Name: Vy Nguyen
Email: nguyen.ngocla@northeastern.edu
Course: Lab for Prototyping with Code
Lab #: Lab 5
Assignment #: Assignment 3
Title: "Constructed Self"
----------------------------------------------------

Concept:
This self-portrait represents me through simplified
geometric forms. Long hair that kinda frames the face,
while lashes and blush emphasize femininity and
expression. Shapes and positions are programmatic
and responsive to screen size.
----------------------------------------------------
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}

function draw() {
  background(235, 245, 250);

  let cx = width * 0.5;
  let cy = height * 0.42;
  let faceW = min(width, height) * 0.3;
  let faceH = faceW * 1.35;

  drawBackdrop(cx, cy, faceW);

  // BACK → FRONT ORDER (IMPORTANT)
  drawHairBack(cx, cy, faceW, faceH);
  drawFace(cx, cy, faceW, faceH);
  drawFrontHairCap(cx, cy, faceW, faceH);
  drawFrontStrands(cx, cy, faceW, faceH);
  drawNose(cx, cy, faceW);
  drawEyes(cx, cy, faceW);
  drawBlush(cx, cy, faceW);
  drawLips(cx, cy, faceW);
  drawNeckAndBody(cx, cy, faceW, faceH);

  drawTitle();
}

/* ---------- BACKGROUND ---------- */
function drawBackdrop(cx, cy, w) {
  noStroke();
  fill(170, 215, 240);
  ellipse(cx, cy, w * 2.4);
}

/* ---------- BACK HAIR ---------- */
function drawHairBack(cx, cy, w, h) {
  noStroke();
  fill(120, 85, 45);

  beginShape();
  vertex(cx - w * 0.55, cy - h * 0.6);

  bezierVertex(
    cx - w * 0.75, cy,
    cx - w * 0.65, cy + h * 1.3,
    cx - w * 0.25, cy + h * 1.4
  );

  bezierVertex(
    cx, cy + h * 1.45,
    cx + w * 0.25, cy + h * 1.4,
    cx + w * 0.65, cy + h * 1.3
  );

  bezierVertex(
    cx + w * 0.75, cy,
    cx + w * 0.55, cy - h * 0.6,
    cx, cy - h * 0.75
  );

  endShape(CLOSE);
}

/* ---------- FACE ---------- */
function drawFace(cx, cy, w, h) {
  noStroke();
  fill(250, 220, 200);

  beginShape();
  vertex(cx - w * 0.42, cy - h * 0.08);

  bezierVertex(
    cx - w * 0.5, cy + h * 0.35,
    cx - w * 0.25, cy + h * 0.8,
    cx, cy + h * 0.8
  );

  bezierVertex(
    cx + w * 0.25, cy + h * 0.8,
    cx + w * 0.5, cy + h * 0.35,
    cx + w * 0.42, cy - h * 0.08
  );

  bezierVertex(
    cx + w * 0.3, cy - h * 0.65,
    cx - w * 0.3, cy - h * 0.65,
    cx - w * 0.42, cy - h * 0.08
  );

  endShape(CLOSE);
}

/* ---------- FRONT HAIR CAP (FOREHEAD COVER) ---------- */
function drawFrontHairCap(cx, cy, w, h) {
  noStroke();
  fill(120, 85, 45);

  let y = cy - h * 0.35;
  let capH = h * 0.22;

  beginShape();
  vertex(cx - w * 0.42, y);

  bezierVertex(
    cx - w * 0.25, y + capH,
    cx + w * 0.25, y + capH,
    cx + w * 0.42, y
  );

  vertex(cx + w * 0.42, y - capH * 0.7);

  bezierVertex(
    cx + w * 0.2, y - capH,
    cx - w * 0.2, y - capH,
    cx - w * 0.42, y - capH * 0.7
  );

  endShape(CLOSE);
}

/* ---------- FRONT HAIR STRANDS ---------- */
function drawFrontStrands(cx, cy, w, h) {

  noFill();

  endShape();

 
  endShape();
}
/* ---------- NOSE ---------- */
function drawNose(cx, cy, w) {
  noFill();
  stroke(150, 90, 85);          // darker than skin
  strokeWeight(w * 0.015);     // thicker so it shows

  let y = cy + w * 0.11;        // slightly lower
  let noseW = w * 0.05;         // wider U
  let noseH = w * 0.035;        // deeper curve

  beginShape();
  vertex(cx - noseW, y);
  bezierVertex(
    cx - noseW * 0.5, y + noseH,
    cx + noseW * 0.5, y + noseH,
    cx + noseW, y
  );
  endShape();
}


/* ---------- EYES + LASHES ---------- */
function drawEyes(cx, cy, w) {
  let y = cy - w * 0.1;
  let xOff = w * 0.18;

  noStroke();
  fill(255);
  ellipse(cx - xOff, y, w * 0.14, w * 0.09);
  ellipse(cx + xOff, y, w * 0.14, w * 0.09);

  fill(90, 60, 30);
  ellipse(cx - xOff, y, w * 0.05);
  ellipse(cx + xOff, y, w * 0.05);

  stroke(50);
  strokeWeight(w * 0.012);
  for (let i = -2; i <= 2; i++) {
    line(cx - xOff + i * 5, y - 8, cx - xOff + i * 4, y - 16);
    line(cx + xOff + i * 5, y - 8, cx + xOff + i * 4, y - 16);
  }
}

/* ---------- BLUSH ---------- */
function drawBlush(cx, cy, w) {
  noStroke();
  fill(245, 160, 170, 150);
  ellipse(cx - w * 0.26, cy + w * 0.15, w * 0.14);
  ellipse(cx + w * 0.26, cy + w * 0.15, w * 0.14);
}

/* ---------- LIPS ---------- */
function drawLips(cx, cy, w) {
  noStroke();
  fill(210, 90, 120);

  let y = cy + w * 0.42;
  let lipW = w * 0.2;
  let lipH = w * 0.07;

  beginShape();
  vertex(cx - lipW, y);
  bezierVertex(
    cx - lipW * 0.5, y - lipH,
    cx - lipW * 0.2, y - lipH,
    cx, y
  );
  bezierVertex(
    cx + lipW * 0.2, y - lipH,
    cx + lipW * 0.5, y - lipH,
    cx + lipW, y
  );
  bezierVertex(
    cx + lipW * 0.4, y + lipH,
    cx - lipW * 0.4, y + lipH,
    cx - lipW, y
  );
  endShape(CLOSE);
}

/* ---------- NECK + BODY ---------- */
function drawNeckAndBody(cx, cy, w, h) {
  noStroke();

  // Neck (long, connected)
  fill(250, 220, 200);
  rect(cx - w * 0.13, cy + h * 0.78, w * 0.26, h * 0.55, 25);

  // Body
  fill(215, 195, 220);
  beginShape();
  vertex(cx - w * 0.7, cy + h * 1.15);
  bezierVertex(
    cx - w * 0.8, cy + h * 1.8,
    cx + w * 0.8, cy + h * 1.8,
    cx + w * 0.7, cy + h * 1.15
  );
  endShape(CLOSE);
}


/* ---------- TITLE ---------- */
function drawTitle() {
  fill(90);
  noStroke();
  textAlign(RIGHT, BOTTOM);
  textSize(16);
  text("Vy kinda", width - 20, height - 20);
}
