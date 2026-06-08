let posX, posY;
let s, m;

let angulo = 0;
let vel = 0;
let acc = 0.02;

let c1 = 22;
let c2 = 35;

let bunnySize;
let bgFade = 35;

function setup() {
  createCanvas(700, 700);
  noStroke();

  s = width / 99;
  m = height / 66;

  posX = width / 2;
  posY = height / 2;
  bunnySize = width * 0.15;
}

function resetSketch() {
  posX = width / 2;
  posY = height / 2;

  angulo = 0;
  vel = 0;
  acc = 0.02;

  c1 = 22;
  c2 = 35;

  bgFade = 35;
}

function draw() {
  background(20, bgFade);

  drawWall();
}

function drawWall() {
  noFill();
  stroke("rgb(88,146,138)");
  strokeWeight(width * 0.04);
  rectMode(CENTER);
  rect(width / 2, height / 2, width * 0.8);
  noStroke();
}