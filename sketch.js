var car, wall;
var weight, speed;

function setup() {
  createCanvas(1200,400);
  
  car = createSprite(100, 200, 50, 50);
  car.shapeColor = color(255,69,0);
  //car.velocityX = speed;

  wall = createSprite(900,200,60, height/2);
  wall.shapeColor = color(10,84,60);

  weight = random(400,1500);
  speed = random(50,99);
  car.velocityX = speed;

}

function draw() {
  background(249,228,183);  

if(wall.x - car.x < (car.width + wall.width)/2) {

car.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22509;
if(deformation > 180) {
car.shapeColor = color(97,51,47);
}
if(deformation < 180 && deformation > 100) {
  car.shapeColor = color(135,206,235);
}
if(deformation < 180) {
  car.shapeColor = color(221,160,221);
}
}

  drawSprites();
}