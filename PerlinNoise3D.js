let start = 0;
let inc = 0.01;
function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {
  var yoff = 0;
  loadPixels();
  for(var y = 0; y < height; y++) {
    var xoff = 0;
    for(var x = 0; x < height; x++){
      var index = ( x + y * width) * 4;
      noiseDetail(24, 0.6);
      var r = noise(xoff, yoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = r;
      xoff = xoff + inc;
      
    }
    yoff += inc
  }
  updatePixels();
}