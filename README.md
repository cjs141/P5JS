# P5JS
### P5 Javascript Framework Codes
2D Perlin Noise Description: Creates a random terrain by using random number generation where each iteration is related to the previous iterations. It is possible to seed the random number generation so that the sequence can be repeated. To change the severity of the grade changes between iterations adjust the increment variable. 

2D Perlin Noise Code:
```
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
```
2D Perlin Noise Example:
(https://github.com/cjs141/P5JS/blob/main/PerlinNoise2D.PNG)
