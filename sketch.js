var fixedRect, movingRect;
var box1,box2;
function setup() {
  createCanvas(1200,600);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1=createSprite(100,300,80,30)
box1.shapeColor="red"
box1.debug=true;
box2=createSprite(1100,300,80,30)
box2.shapeColor="red"
box2.debug=true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
 box1.velocityX=+5;
 box2.velocityX=-5;
}

function draw() {
  background(0,0,0);  
  bounceOff(box1,box2);
bounceOff(movingRect,fixedRect)
  drawSprites();
}

