let rSec = 100;
let rMin = 100;
let rHr = 75;
let thetaSec = ((3*3.14)/2);
let thetaMin = ((3*3.14)/2);
let thetaHr = ((3*3.14)/2);
let inc = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  frameRate(60);
  translate(width/2, height/2);
  circle(0,0,210)
  let xSec = rSec*cos(thetaSec);
  let ySec = rSec*sin(thetaSec);
  thetaSec += (2*3.14)/60;
  inc++;
  line(0,0,xSec,ySec);
  let xMin = rMin*cos(thetaMin);
  let yMin = rMin*sin(thetaMin);
  line(0,0, xMin, yMin);
  let xHr = rHr*cos(thetaHr);
  let yHr = rHr*sin(thetaHr);
  line(0,0, xHr, yHr);
  if(inc % 60 == 0)
  {
    translate(width/2, height/2);
    xMin = rMin*cos(thetaMin);
    yMin = rMin*sin(thetaMin);
    thetaMin += (2*3.14)/60;
    line(0,0, xMin, yMin);
    translate(width/2, height/2);
    xHr = rHr*cos(thetaHr);
    yHr = rHr*sin(thetaHr);
    thetaHr += ((2*3.14)/60)/12;
    line(0,0, xHr, yHr);
    inc = 0; 
  }
}