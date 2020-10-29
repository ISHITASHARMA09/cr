var car;
var wall;
var speed;
var weight;


function setup() {
  createCanvas(1600,1600);
 car= createSprite(50, 200, 50, 50);

 wall=createSprite(1500,200,60,25);

 car.shapeColor="green";
 wall.shapeColor="green";
 
 

  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(0);  
  car.velocityX=2

 if(collided(car,wall)){
   car.shapeColor="red"
   wall.shapeColor="red"
 }
 else{
   car.shapeColor="green"
   wall.shapeColor="green"
 }

  drawSprites();
}

