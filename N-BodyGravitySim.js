let balls = [];
class Mover {

  constructor(position, velocity, acceleration) {
    this.position = position;
    this.velocity = velocity;
    this.acceleration = acceleration;
  }

  move(x, y) {
    for(let i = 0, y = 50; i < balls.length; i++, y = y - 0.5)
    { 
      var dx = balls[i].position.x-this.position.x;//delta x
      var dy = balls[i].position.y-this.position.y;//delta y
      var dsq = dx*dx + dy*dy;//distance squared
      var dinv = 1.0/sqrt(dsq + 0.0001);
      var scale = (y/1000000) * dinv * dinv;
      scale = scale;
      this.acceleration.x += dx * scale;
      this.acceleration.y += dy * scale;
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
    }
   // this.mouse = createVector(mouseX, mouseY);
   // this.mouse.sub(this.position);
   // this.mouse.setMag(x / this.mouse.mag());

    //this.acceleration = this.mouse;
    //this.velocity.add(this.acceleration);
    this.velocity.limit(0.000000000001);
    //this.position.add(this.velocity);
    var colR = map(this.acceleration.x, 0, 0.00005, 0, 255);
    var colB = map(this.acceleration.x, 0, 0.00005, 255, 0);
    var colG = map(this.acceleration.y, 0, 0.00005, 0, 255);
    fill(colR, colG, colB);
    ellipse(this.position.x, this.position.y, y, y);
    
  }


}


function setup() {
  createCanvas(3000, 2000);
  
  frameRate(60);
  
  for(let i = 0; i < 100; i++)
  {
     position = createVector(random(1600), random(1000));
     velocity = createVector(0, 0);
     acceleration = createVector(0, 0);
     balls[i] = new Mover(position, velocity, acceleration); 
  }
  
}

function draw() {
  background(220);
  fill(0);
  for(let i = 0, x = 1, y = 50; i < balls.length; i++, x = x + 0.1, y = y - 0.5)
  {
    balls[i].move(x, y);
  }
}