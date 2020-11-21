var car, wall;
var speed, weight;
var deformation;
var gameState;
var PLAY = 1;
var END = 0;

function setup() 
{
  createCanvas(1600, 400);
  speed = random(55, 90);
  weight = random(400, 1500);
  
  car = createSprite(20, 200, 50, 50);

  wall = createSprite(1500, 200, 60,  height/2);
  wall.shapeColor = rgb(80, 80, 80);

  gameState = PLAY;

}


function draw() 
{
  background(255, 255, 255); 
  
  if (gameState == PLAY)
  {
    car.velocityX = speed;
  }
  else car.velocityX = 0;
     
  
  if (wall.x - car.x < (car.width + wall.width) / 2) 
  {
    car.velocityX = 0;
    gameState = END;    
    
    deformation = (0.5 * weight * speed * speed) / 22500;

    if (deformation < 100)
    {
      car.shapeColor = rgb(0, 255, 0);
    }
    if (deformation > 100 && deformation < 180)
    {
      car.shapeColor = rgb(230, 230, 0);

    }
    if (deformation > 180)
    {
      car.shapeColor = rgb(255, 0, 0);

    }

  }


  drawSprites();
}