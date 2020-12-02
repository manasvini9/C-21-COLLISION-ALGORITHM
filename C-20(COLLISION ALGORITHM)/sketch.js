
var movingRect, fixedRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 100);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(800,400,100,50)
  movingRect.shapeColor = "green"
}

function draw() {
  background(0);
  movingRect.x = mouseX;   
  movingRect.y = mouseY;  

  if(movingRect.width/2 + fixedRect.width/2 > movingRect.x - fixedRect.x &&
    movingRect.width/2 + fixedRect.width/2 > fixedRect.x - movingRect.x && 

    movingRect.height/2 + fixedRect.height/2 > movingRect.y - fixedRect.y &&
    movingRect.height/2 + fixedRect.height/2 > fixedRect.y - movingRect.y ){
      
    fixedRect.shapeColor = "white";
    movingRect.shapeColor = "white";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();

}