let posX, posY;

function setup() {
	let canvasSize = min(windowWidth, windowHeight);
	createCanvas(canvasSize, canvasSize);
	noStroke();
	posX = width/2;
	posY = height/2;
}

function draw() {
	background("rgb(120, 160, 200)");
	noFill()
	
	//wall
	stroke("rgb(88,146,138)");
	strokeWeight(width*.08);
	rectMode(CENTER);
	rect(width/2, width/2, width*.75)
	noStroke();
	
  //random sun
  fill("yellow");
  circle(width*.15, width*.15, width*.12);

	//horns
	fill("rgb(168,51,51)");
	triangle(posX - width*.02, posY - width*.04, posX - width*.05, posY - width*.07, posX - width*.04, posY - width*.03);
	triangle(posX + width*.02, posY - width*.04, posX + width*.05, posY - width*.07, posX + width*.04, posY - width*.03);
	
	//face
	fill("rgb(255,150,80)");
	circle(posX, posY, width*.2);
	
	//eyes
	fill(0);
	ellipse(posX - width*.02, posY - width*.01, width*.015, width*.02);
	ellipse(posX + width*.02, posY - width*.01, width*.015, width*.02);

  //nose
  fill("rgb(120,60,40)");
  triangle(posX, posY, posX - width*.008, posY + width*.01, posX + width*.008, posY + width*.01);
	
	//mouth
	if(mouseIsPressed == true){
		arc(posX, posY + width*.01, width*.04, width*.04, 0, PI, OPEN);
	} else {
		stroke(0);
		strokeWeight(width*.005)
		line(posX - width*.015, posY + width*.015, posX + width*.015, posY + width*.015);
	}
	
	//movement
  if (keyIsDown(65)) {
    posX > width*.135 ? posX -= 3 : posX;
  }
  if (keyIsDown(68)) {
    posX < width*.865 ? posX += 3 : posX;
  }
  if (keyIsDown(87)) {
    posY > width*.135 ? posY -= 3 : posY;
  }
  if (keyIsDown(83)) {
    posY < width*.865 ? posY += 3 : posY;
  }
}

function mousePressed() {
	posX = mouseX;
	posY = mouseY;
}