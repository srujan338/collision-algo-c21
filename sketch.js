var FixedRect,MovingRect,FixedRect1;
function setup() {
  createCanvas(800,400);
  FixedRect= createSprite(200, 200, 50, 80);
  MovingRect= createSprite(400, 200, 80, 30);
  FixedRect1=createSprite(700,200,50,80);
}

function draw() {
  background(0);  
  MovingRect.x=World.mouseX;
  MovingRect.y=World.mouseY;

  if(isTouching(FixedRect,MovingRect)){
  MovingRect.shapeColor="red";
    FixedRect.shapeColor="red";
  }
  else if(isTouching(FixedRect1,MovingRect)){
    MovingRect.shapeColor='blue';
    FixedRect1.shapeColor='blue';
  }
  else {
    MovingRect.shapeColor="green";
  FixedRect.shapeColor="green";
  FixedRect1.shapeColor='green';
  }
  drawSprites();
}
