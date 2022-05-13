var path,boy, leftBoundary,rightBoundary,coin,bomb,energy;
var pathImg,boyImg,coinImg,bombImg,energyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg=loadImage("coin.png");
  bombImg=loadImage("bomb.png");
  energyImg=loadImage("energyDrink.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Mover el fondo
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//crear sprite de niño corriendo
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar el fondo

  if(path.y > 400 ){
    path.y = height/2.5;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}
function spawnObstacles(){
  if (World.frameCount % 120 === 0){
    var obstacle = createSprite(300,randomNumber(180,350));
    obstacle.velocityY = -2;
   
     //generar obstáculos al azar
     var rand = Math.round(random(1,3)); 
     switch(rand) {
       case 1: obstacle.setAnimation("energyImg");
       obstacle.scale=0.2;
               break;
       case 2: obstacle.setAnimation("bombImg");
       obstacle.scale=0.2;
               break;
       case 3: obstacle.setAnimation("coinImg");
       obstacle.scale=0.2;
               break;
       default: break;
     }   
    
     //asignar escala y ciclo de vida al obstáculo           
     obstacle.scale = 0.5;
     obstacle.lifetime = 500;
    
    //agregar cada obstáculo al grupo
     obstaclesGroup.add(obstacle);
  }
 }

 if(boy.isTouching(obstacle) && obstacle.setAnimation===bombImg){
boy.visible=false;
 }
  