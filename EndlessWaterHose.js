//Intro to Particle Systems Project-The endless hose
let particles = [];
class Particle {
  
  constructor(position, velocity, acceleration, lifespan) {
    this.position = position;
    this.velocity = velocity;
    this.acceleration = acceleration;
    this.lifespan = lifespan;
  }
  
  update() {
      velocity.add(acceleration);
      position.add(velocity);
      lifespan -= 2;
    }
  
  display() {
    stroke(0, lifespan);
    strokeWeight(2);
    fill(127, lifespan);
    ellipse(position.x, position.y, 12, 12);  
  }  
  
  isDead(){
    if(lifespan <= 0)
    {
      return true;
    } else{
      return false;
    }
    
  }
}
function setup() {
  createCanvas(400, 600);
  frameRate(100);
   for(let i = 0; i < 5000; i++)
  {
  lifespan = 255;
  position = createVector(width/2, 0);
  velocity = createVector(random(-2,2),random(-2,2));
  acceleration = createVector(0,0.05);
  particles[i] = new Particle(position, velocity, acceleration, lifespan);
  }
}


function draw() {
  background(220);
  fill(0);
  for(let i = 0; i < 5000; i++)
  {
  particles[i].update();
  particles[i].display();
  if(particles[i].isDead()) {
     particles.pop()
       lifespan = 255;
  position = createVector(width/2, 20);
  velocity = createVector(random(-1, 1), random(-1, 1));
  acceleration = createVector(0,0.05);
  particles.push(new Particle(position, velocity, acceleration, lifespan)) 
     }
  }
}