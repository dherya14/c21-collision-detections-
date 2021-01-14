var fixedRect, movingRect;
var obj1,obj2,obj3;s

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(100, 300, 50, 50);
  obj1.shapeColor = "green";

  obj2 = createSprite(300, 500, 50, 50);
  obj2.shapeColor = "green";

  obj3 = createSprite(200, 400, 50, 50);
  obj3.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }

  drawSprites();
}
 
 


