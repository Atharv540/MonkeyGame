//Global Variables
var mankey,monkeyAnimation;
var ground;
var background1,backgroundImage;
var stone,stoneImage,stoneGroup;
var banana,bananaImage,banGroup;
var score;
var size;
var gameState;
var endy;

function preload(){
 monkeyAnimation = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
backgroundImage = loadImage("jungle.jpg");
stoneImage = loadImage("stone.png");
bananaImage = loadImage("Banana.png")
}


function setup() {
  createCanvas(600,300);

background1 = createSprite(400,50);
background1.addImage(backgroundImage);
background1.scale = 1.2;
monkey = createSprite(100,270);
monkey.addAnimation("running",monkeyAnimation);
monkey.scale = 0.1;
ground = createSprite(200,297,600,5);
score = 0;
stoneGroup = createGroup();
size = 0;
banGroup = createGroup();
gameState = "play";
endy = 0;
}


function draw(){
 background(255);
  monkey.collide(ground);
  ground.visible = false;
  if(background1.x<50){
  background1.x = background1.width/2;
  }
  spawnStones();
  spawnBananas();
   
  
if(gameState === "play"){

  
  if(keyDown("space") && monkey.y>263.8){
  monkey.velocityY = -15;
  
  }
  monkey.velocityY = monkey.velocityY+1;
 
  if(monkey.isTouching(banGroup)){
    banGroup.destroyEach();
    score = score+2;
  }
  
  background1.velocityX = -5;
 
  
  
  if(monkey.isTouching(stoneGroup)){
   endy = endy+1;  
     }
  
  if(endy === 2){
  //gameState = "end";
  
  }
}

else if(gameState ==="end"){


}
  
  
  
  
  
  
 //monkey.scale = count
  
 
 //score = score+Math.round(frameRate/60);
  drawSprites();
  text("Score:"+score, 200,50);
  
}


function spawnStones(){
var rand = Math.round(random(320,380));
if(frameCount%30 === 0){
  stone = createSprite(400,rand);
  stone.addImage(stoneImage);
  stone.scale = 0.5;
  //stone.collide(ground);
  stone.velocityX = -10;
  stone.lifetime = 50;
  stoneGroup.add(stone);
} 
}

function spawnBananas(){
var rand = random(120,200);
if(frameCount%80 === 0){
  var banana = createSprite(400,rand);
  banana.addImage(bananaImage);
  banana.scale = 0.05;
  banana.velocityX = -10;
  banGroup.add(banana);
  banana.lifetime = 50;
}
}
