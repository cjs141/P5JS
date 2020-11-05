let balls = [];
class Mover {

  constructor(position, velocity, acceleration) {
    this.position = position;
    this.velocity = velocity;
    this.acceleration = acceleration;
  }

  move(x, y) {
    this.mouse = createVector(mouseX, mouseY);
    this.mouse.sub(this.position);
    this.mouse.setMag(x / this.mouse.mag());

    this.acceleration = this.mouse;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
    ellipse(this.position.x, this.position.y, y, y);
    
  }


}


function setup() {
  createCanvas(1600, 1000);
  
  frameRate(60);
  
  for(let i = 0; i < 100; i++)
  {
     position = createVector(200, 100);
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