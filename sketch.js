//Game States
var canvas, bgImg;
var playerwalkingImg, playerhelpingImg;
var player;
var boystandingImg, boyfallingImg, boy;
var edges;
var carmg1,carImg2, car;
var bike, bikeImg1, bikeImg2;
var boyG, carG, bikeG;
var END = 0;
var PLAY = 1;
var gameState = PLAY;
var score = 0;

function preload(){
  bgImg = loadImage("bg.png");
  
  playerwalkingImg = loadAnimation("bw1.png","bw2.png","bw3.png","bw4.png","bw5.png","bw6.png");
  playerhelpingImg = loadAnimation("bh1.png","bh2.png","bh3.png");
  
  boystandingImg = loadAnimation("bf1.png");
  boyfallingImg = loadAnimation("bf2.png");
  
carImg1 = loadAnimation("pc.png");
  carImg2 = loadAnimation("hc.png");
  
  bikeImg1 = loadAnimation("pb.png");
  bikeImg2=loadAnimation("fb.png");
  
}


function setup() {
  createCanvas(1200,600);
  
  bg = createSprite(200,180,400,20);
  bg.addImage("bg", bgImg);
  bg.x = bg.width/2;
  bg.velocityX = -2;
  
  player = createSprite(100,400,50,50);
  player.addAnimation("walking",playerwalkingImg);
  player.scale=0.4;
  
  
  boyG = new Group();
  carG = new Group();
  bikeG = new Group();
   
 
  


 
}

function draw() {
  background("lightblue");
   drawSprites();
   textSize(40);
   fill("black");
   text("Score:" + score, 600,50);
 
   if (gameState=== PLAY){
    score = score+Math.round(getFrameRate()/50);
    if(bg.x<0){
      bg.x = bg.width/2;
     
     }
     player.x = World.mouseX;
     edges = createEdgeSprites();
     var select_oppPlayer = Math.round(random(1,3));
     if(World.frameCount % 150 == 0){
      if(select_oppPlayer==1){
        helpingBoy();
      }
      else if(select_oppPlayer==2){
        pushCar();
      }
      else{
        fallenBike();
      }
    }

 if(boyG.isTouching(player)){
  player.addAnimation("playerhelping",playerhelpingImg);
 player.changeAnimation("playerhelping");
 boy.addAnimation("boystanding", boystandingImg);
  boy.changeAnimation("boystanding");
  fill("white");
    textSize(20);
    text("Congragulations! You Have Successfuly Helped the Fallen Boy!", 10,100);
  
  
}
if(carG.isTouching(player)){
  player.addAnimation("playerhelping",playerhelpingImg);
 player.changeAnimation("playerhelping");
  car.addAnimation("goodcar", carImg2 );
  car.changeAnimation("goodcar");
  fill("white");
    textSize(20);
    text("Congragulations! You Have Successfuly Helped the Fallen Boy!", 10,100);
  
}
if(bikeG.isTouching(player)){
  player.addAnimation("playerhelping",playerhelpingImg);
 player.changeAnimation("playerhelping");
  bike.addAnimation("goodbike", bikeImg2 );
  bike.changeAnimation("goodbike");
  fill("white");
    textSize(20);
    text("Congragulations! You Have Successfuly Helped the Fallen Boy!", 10,100);
  
}
else if (gameState=== END){
if(score === 500){
  fill(0);
  textSize(30);
  text("Congragulations! You have completed the Helping Game!", 600, 300);
 
}


  
  
}
    
  }
       


   
 
 

  
  
  /*if(player.isTouching(boy)){
  player.addAnimation("playerhelping",playerhelpingImg);
   player.changeAnimation("playerhelping");
    boy.addAnimation("boystanding", boystandingImg);
    boy.changeAnimation("boystanding");
    
    
  }*/

   
  }
  
 

  
  
  /*if(player.isTouching(boy)){
     fill("white");
    textSize(20);
    text("Congragulations! You Have Successfuly Helped the Fallen Boy!", 10,100);
  
  }*/
 
  

function helpingBoy(){
   boy = createSprite(1100,Math.round(random(400,500)),50,50);
  boy.addAnimation("falling", boyfallingImg);
 // boy.debug = true;
 //boy.setCollider("rectangle",0,0,30,30);
  boyG.add(boy);
  boy.velocityX = -(5+2*score/150);
  boy.scale = 0.8;
  boy.setLifetime=170;
  }
function pushCar(){
  car = createSprite(1100, Math.round(random(50,250)), 50,50);
  car.addImage("stuckCar", carImg1);
  carG.add(car);
  car.velocityX = -(3+2*score/150);
  car.setLifetime=170;
}

function fallenBike(){
  bike = createSprite(1100, Math.round(random(50,250)), 50,50)
  bike.addImage("fallenBike", bikeImg1);
  bikeG.add(bike);
  bike.velocityX = -(3+2*score/150);
  bike.setLifetime=170;

}
