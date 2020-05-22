var movingrect, rect;
var box1,box2,box3;


function setup() {
  createCanvas(800,400);
  movingrect = createSprite(500,200,80,30);
  movingrect.shapeColor="green";
  rect = createSprite(200,200,30,80);
  rect.shapeColor="green";
  rect.debug=true;
  movingrect.debug=true;
  box1=createSprite(200,100,50,50);
  box1.shapeColor="green";
  box2=createSprite(400,100,50,50);
  box2.shapeColor="green";
  box3=createSprite(600,100,50,50);
  box3.shapeColor="green";
}

function draw() {
  background("black");  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  

  
  
  isTouching(movingrect,box3);
  drawSprites();
}
function isTouching(obj1,obj2){
  if (obj1.x-obj2.x<obj1.width/2+obj2.width/2 && 
    obj2.x-obj1.x<obj1.width/2+obj2.width/2 &&
    obj1.y-obj2.y<obj1.height/2+obj2.height/2 &&
    obj2.y-obj1.y<obj1.height/2+obj2.height/2) {
    obj2.shapeColor="red";
    obj1.shapeColor="red";
  }else {
    obj1.shapeColor="green";
    obj2.shapeColor="green";
  }
}