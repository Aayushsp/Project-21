var bullet, wall;
var speed, weight, thickness;
var wallLeftEdge, bulletRightEdge;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 70, 30);
  bullet.shapeColor = color("white");

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background("grey");
  
  if(hasCollided(bullet, wall)){

    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed) / thickness * thickness * thickness;
    
    if(damage > 10){
      bullet.shapeColor = "red";
    }

    if(damage < 10){
      bullet.shapeColor = "green";
    }
  }

  
  drawSprites();
}

function hasCollided(bullet1, wall1){
   wallLeftEdge = wall.x - wall.width/2 ;
   bulletRightEdge = bullet.x + bullet.width/2 ;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
    return false;
}