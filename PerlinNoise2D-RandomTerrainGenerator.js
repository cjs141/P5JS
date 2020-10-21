let start = 0;
let inc = 0.00175;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  for(var x = 0; x < width; x = x + 0.5)
  {
    stroke(255);
    
    var y = noise(xoff) * height;
    vertex(x, y);
    xoff += inc;
  }

  endShape();
  start += inc;
}