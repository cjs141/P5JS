function setup() {
  position1 = createVector(200, 100);
  velocity1 = createVector(0, 0);
  acceleration1 = createVector(0, 0);
  position2 = createVector(200, 100);
  velocity2 = createVector(0, 0);
  acceleration2 = createVector(0, 0);
  frameRate(30);
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill(0);
  move();
}

function move(val) {
  mouse1 = createVector(mouseX, mouseY);
  mouse2 = createVector(mouseX, mouseY);
  mouse1.sub(position1);
  mouse1.setMag(12 / mouse1.mag());

  acceleration1 = mouse1;
  velocity1.add(acceleration1);
  position1.add(velocity1);
  velocity1.limit(5);
  mouse2.sub(position2);
  mouse2.setMag(10 / mouse2.mag());
  acceleration2 = mouse2;
  velocity2.add(acceleration2);
  position2.add(velocity2);
  velocity2.limit(5);
  ellipse(position1.x, position1.y, 20, 20);
  ellipse(position2.x, position2.y, 10, 10);
}