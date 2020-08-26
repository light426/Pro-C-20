var car, wall;

var speed, weight

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  wall = creatSprite(1500,200,60,height/2);

  speed  = random(55,90);
  weight = random(400, 1500);

  car.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  
  wall.shapeColor = (80,80,80);

  deformation = (0.5 * weight * speed * speed)/22500

  if (deformation < 100){
      car.shapecolor = (0,255,0);
  }

  if (100 < deformation < 180){
    car.shapecolor = (230,230,0);
  }

  if (deformation > 180){
    car.shapecolor = (255,0,0);
}
  drawSprites();
}