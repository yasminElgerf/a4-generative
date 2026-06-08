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

  moveBunny();

  drawWall();
  drawOrbitSystem();
  drawBunny();
}

function drawWall() {
  noFill();
  stroke("rgb(88,146,138)");
  strokeWeight(width * 0.04);
  rectMode(CENTER);
  rect(width / 2, height / 2, width * 0.8);
  noStroke();
}

function drawBunny() {
  //ears
  fill("rgb(255,220,220)");
  ellipse(posX - width*.035, posY - width*.065, width*.025, width*.08);
  ellipse(posX + width*.035, posY - width*.065, width*.025, width*.08);

  fill("rgb(255,150,170)");
  ellipse(posX - width*.035, posY - width*.065, width*.012, width*.05);
  ellipse(posX + width*.035, posY - width*.065, width*.012, width*.05);

  //face
  fill("rgb(255,170,190)");
  circle(posX, posY, bunnySize);

  //eyes
  fill(0);
  ellipse(posX - width*.02, posY - width*.01, width*.015, width*.02);
  ellipse(posX + width*.02, posY - width*.01, width*.015, width*.02);

  //bunny nose
  fill("rgb(255,110,150)");
  ellipse(posX, posY + width*.005, width*.018, width*.012);

  stroke(0);
  strokeWeight(width*.003);
  line(posX, posY + width*.012, posX, posY + width*.025);
  noStroke();

  //mouth
  stroke(0);
  strokeWeight(width*.005);
  line(posX - width*.015, posY + width*.025, posX + width*.015, posY + width*.025);
  noStroke();
}

function moveBunny() {
  if (keyIsDown(65)) {
    posX > width*.12 ? posX -= 3 : posX;
  }
  if (keyIsDown(68)) {
    posX < width*.88 ? posX += 3 : posX;
  }
  if (keyIsDown(87)) {
    posY > height*.12 ? posY -= 3 : posY;
  }
  if (keyIsDown(83)) {
    posY < height*.88 ? posY += 3 : posY;
  }
}

function mousePressed() {
  posX = mouseX;
  posY = mouseY;

  acc = random(0.005, 0.05);
  bgFade = random(10, 80);
}

function drawOrbitSystem() {
  let l0 = map(cos(angulo), -1, 1, width*.15, width*.35);
  let l1 = map(sin(angulo), -1, 1, width*.05, width*.25);

  push();
  translate(posX, posY);
  rotate(angulo);

  for (let i = 0; i < c1; i++) {
    push();
    rotate(i * TWO_PI / c1);
    translate(l0, 0);

    fill("rgb(255,180,220)");
    ellipse(0, 0, s * 2);

    pop();
  }

  pop();

  angulo = vel;
  vel += acc;
}