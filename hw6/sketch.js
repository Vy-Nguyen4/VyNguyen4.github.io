/*
Class: ARTG-2262+63
Name: Vy Nguyen
Email: nguyen.ngocla@northeastern.edu
Assignment: Drawing App

Instructions:
- Drag the mouse to draw colorful confetti shapes.
- Press 1, 2, or 3 to change brush size.
- Press E to erase.
- Press C to clear the canvas.
- Press S to save your artwork.
*/

let brushSize = 20;
let eraseMode = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {

  if (mouseIsPressed) {

    if (eraseMode) {
      fill(255);
      noStroke();
      circle(mouseX, mouseY, brushSize * 2);
    } 
    else {

      // automatic changing color
      let r = random(255);
      let g = random(255);
      let b = random(255);

      fill(r, g, b);
      noStroke();

      // confetti burst
      for (let i = 0; i < 5; i++) {

        let offsetX = random(-brushSize, brushSize);
        let offsetY = random(-brushSize, brushSize);

        circle(mouseX + offsetX, mouseY + offsetY, random(5, brushSize));
      }
    }
  }

  displayInstructions();
}

function keyPressed() {

  if (key === '1') brushSize = 10;
  if (key === '2') brushSize = 20;
  if (key === '3') brushSize = 40;

  if (key === 'E' || key === 'e') eraseMode = true;

  if (key === 'C' || key === 'c') background(255);

  if (key === 'S' || key === 's') saveCanvas('myDrawing', 'png');
}

function keyReleased() {
  if (key === 'E' || key === 'e') eraseMode = false;
}

function displayInstructions() {
  fill(0);
  textSize(14);
  text(
    "Drag mouse to draw confetti\n" +
    "1/2/3 = change brush size\n" +
    "Hold E = erase\n" +
    "C = clear screen\n" +
    "S = save drawing",
    20,
    30
  );
}