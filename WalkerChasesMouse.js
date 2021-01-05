class Walker 
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
  }
  
  move()
  {
    if(mouseIsPressed)
    {      
      let changeY = mouseY-this.y;
      if(changeY > 0)
      {
        this.y++;
      }
      if(changeY < 0)
      {
        this.y--;
      }
      let changeX = mouseX-this.x;
      let slope = changeY/changeX;
      if(changeX > 0)
      {
        this.x++;
      }
      if(changeX < 0)
      {  
      this.x--;
      }
    }
    
    else
    {
      let choice = int(random(4));

      if(choice == 0)
        this.x++;
        else if(choice == 1)
          this.x--;
        else if(choice == 2)
          this.y++;
        else
          this.y--;
    }
  }
  
  display()
  {
    stroke(0);
    ellipse(this.x,this.y, 2, 2);
  }
  
  
}
function setup() {
  createCanvas(400, 400);
  let x = width/2;
  let y = height/2
  w = new Walker(x, y);
  background(255);
}

function draw() {
  w.move();
  w.display();
}