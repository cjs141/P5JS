var ellipseX = 70;
var ellipseY = 200;
var chain1 = {
  x1: 407
};

var chain2 = {
  x1: 432
};

var chain3 = {
  x1: 457
};

var woosh = {
  x1: 10,
  x2: 30,
  x3: 1,
  x4: 23
};

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(255, 255, 255);
  fill(135, 206, 255);
  stroke(0, 0, 0);
  rect(0, 0, 700, 400);
  fill('green');
  rect(0, 400, 700, 200);
  fill('maroon');
  ellipse(ellipseX, ellipseY, 90, 12);
  if (ellipseX < 360) {
    ellipseX = ellipseX + 15;
   /* stroke(255);
    line(woosh.x1, 190, woosh.x2, 190);
    line(woosh.x3, 200, woosh.x4, 200);
    line(woosh.x1, 210, woosh.x2, 210);*/
    woosh.x1 = woosh.x1 + 15;
    woosh.x2 = woosh.x2 + 15;
    woosh.x3 = woosh.x3 + 15;
    woosh.x4 = woosh.x4 + 15;
    stroke(141, 115, 74);
    line(405, 120, 405, 270);
    line(405, 270, 491, 370);
    line(430, 120, 430, 270);
    line(430, 270, 493, 370);
    line(455, 120, 455, 270);
    line(455, 270, 495, 370);
    line(480, 120, 480, 270);
    line(480, 270, 497, 370);
    line(515, 120, 515, 270);
    line(515, 270, 499, 370);
    line(540, 120, 540, 270);
    line(540, 270, 501, 370);
    line(565, 120, 565, 270);
    line(565, 270, 503, 370);
    line(590, 120, 590, 270);
    line(590, 270, 505, 370);
  }
  if (ellipseX >= 360 && ellipseX < 450) {
    ellipseX = ellipseX + 8;
    stroke(141, 115, 74);

    line(405, 120, chain1.x1, 200); //add 70 to fourth argument
    line(chain1.x1, 200, chain1.x1, 270); //subtract 70 from second argument, add 100 to fourth argument
    line(chain1.x1, 270, 491, 370);

    // line(405, 120, 405, 270);
    //line(405, 270, 491, 370);
    //line(430, 120, 430, 270);
    //line(430, 270, 493, 370);

    line(430, 120, chain2.x1, 200);
    line(chain2.x1, 200, chain2.x1, 270);
    line(chain2.x1, 270, 493, 370);

    line(455, 120, chain3.x1, 200);
    line(chain3.x1, 200, chain3.x1, 270);
    line(chain3.x1, 270, 495, 370);
    chain1.x1 = chain1.x1 + 8;
    chain2.x1 = chain2.x1 + 4;
    chain3.x1 = chain3.x1 + 2;

    line(515, 120, 515, 270);
    line(515, 270, 499, 370);
    line(540, 120, 540, 270);
    line(540, 270, 501, 370);
    line(565, 120, 565, 270);
    line(565, 270, 503, 370);
    line(590, 120, 590, 270);
    line(590, 270, 505, 370);
  }
  if (ellipseX == 450) {
    if (ellipseY < 376) {
      ellipseY = ellipseY + 4;
    stroke(141, 115, 74);

    line(405, 120, chain1.x1, 200); //add 70 to fourth argument
    line(chain1.x1, 200, chain1.x1, 270); //subtract 70 from second argument, add 100 to fourth argument
    line(chain1.x1, 270, 491, 370);

    // line(405, 120, 405, 270);
    //line(405, 270, 491, 370);
    //line(430, 120, 430, 270);
    //line(430, 270, 493, 370);

    line(430, 120, chain2.x1, 200);
    line(chain2.x1, 200, chain2.x1, 270);
    line(chain2.x1, 270, 493, 370);

    line(455, 120, chain3.x1, 200);
    line(chain3.x1, 200, chain3.x1, 270);
    line(chain3.x1, 270, 495, 370);
    if(chain1.x1 > 405)
    {  
      chain1.x1 = chain1.x1 - 2
    }
    if(chain2.x1 > 430)
    {
      chain2.x1 = chain2.x1 - 1;
    }
    if(chain3.x1 > 455)
    {
      chain3.x1 = chain3.x1 - 0.5;
    }
      line(480, 120, 480, 270);
      line(480, 270, 497, 370);
      line(515, 120, 515, 270);
      line(515, 270, 499, 370);
      line(540, 120, 540, 270);
      line(540, 270, 501, 370);
      line(565, 120, 565, 270);
      line(565, 270, 503, 370);
      line(590, 120, 590, 270);
      line(590, 270, 505, 370);
    }
  }
  
  if(ellipseY == 376)
  {
    stroke(141, 115, 74);
    line(405, 120, 405, 270);
    line(405, 270, 491, 370);
    line(430, 120, 430, 270);
    line(430, 270, 493, 370);
    line(455, 120, 455, 270);
    line(455, 270, 495, 370);
    line(480, 120, 480, 270);
    line(480, 270, 497, 370);
    line(515, 120, 515, 270);
    line(515, 270, 499, 370);
    line(540, 120, 540, 270);
    line(540, 270, 501, 370);
    line(565, 120, 565, 270);
    line(565, 270, 503, 370);
    line(590, 120, 590, 270);
    line(590, 270, 505, 370);
  }
  fill(80, 18, 20);
  stroke(0, 0, 0);
  rect(400, 100, 200, 20, 3);
  rect(491, 120, 15, 500);


  fill(141, 115, 74);
  rect(390, 320, 220, 3, 3); //Upper cage
  rect(390, 380, 224, 3, 3); //Lower cage
  rect(390, 320, 3, 60, 3); //Left Cage
  rect(610, 320, 3, 60, 3); //Right Cage
  rect(445, 320, 3, 60, 3); //Left 1 Cage
  rect(497, 320, 3, 60, 3); //Middle Cage
  rect(555, 320, 3, 60, 3); //Right 1 Cage
  colR = map(mouseX, 0, 700, 80, 141);
  colG = map(mouseX, 0, 700, 18, 115);
  colB = map(mouseX, 0, 700, 20, 74);
  fill(colR, colG, colB);
  noStroke();
  text('TEXAS STATE', 457, 114);


}

function mousePressed(){
  ellipseX = 70;
  ellipseY = 200;
  chain1.x1 = 407;

  chain2.x1 = 432;

  chain3.x1 = 457;
  redraw();
}