var badRectangles;
var goodRectangles,edges;
var trian1,trian2,trian3,trian4,trian5,trian6,trian7;
var obstacles,ridham,invDivision1;
var scorePositive=0;
var scoreNegative=10;
var canvas;

function preload()
{
  redTrian = loadImage("obs2.png");
  blueTrian = loadImage("obs1.png");
  backgroundImage = loadImage("back.jpg");
  ridhamImg=loadImage("ridham.png");
}
function setup() {
  canvas=createCanvas(800,900);

  
  //creating background
  background = createSprite(0,0,600,800);
  background.addImage(backgroundImage);
  background.y=background.height/2;
  background.scale=10;
  background.velocityY=4;

  invDivision1=createSprite(200,620,10,200)
  invDivision1.visible=false;

  invDivision2=createSprite(550,300,10,200)
  invDivision2.visible=false;

  obstacles = new Group();
  power = new Group();
  
  
  ridham = createSprite(300,800,20,50);
  ridham.addImage("RidhamIng",ridhamImg);
  
}
function draw() {


  edges=createEdgeSprites();



  if (background.y > 800){
    background.y = background.width/2;
  }
  myPlayerControl();
  spawnTrian();
  spawnPower();

  power.bounceOff(invDivision1);
  power.bounceOff(edges[0]);
  obstacles.bounceOff(invDivision1);
  obstacles.bounceOff(edges[0]);
  
  power.bounceOff(invDivision2);
  power.bounceOff(edges[1]);
  obstacles.bounceOff(invDivision2);
  obstacles.bounceOff(edges[1]);

  if(power.isTouching(ridham)){
     ridham.scale=ridham.scale+0.01;
     scorePositive=scorePositive-2;
  }
  if(obstacles.isTouching(ridham)){
    ridham.scale=ridham.scale-0.01;
    scoreNegative=scoreNegative+6;
 }
 


  drawSprites();
  textSize(20);
  fill("black");
  text("+ve Score:"+scorePositive,20,100);
  text("-ve Score:"+scoreNegative,20,150)
}
function spawnPower() {
  //write code here to spawn the food
  if (frameCount % 30 === 0) 
  {
    position = Math.round(random(1,2));
    var blueTri = createSprite(400,200,20,20);  
   // var blueTri = createSprite(Math.round(random(10,500)),Math.round(random(10,300))); 
   
   if(position==1)
    {
      blueTri.x=Math.round(random(0,145));
      blueTri.y=Math.round(random(500,700));
      blueTri.velocityX = Math.round( random(5,8));
    }
    else
    {
      if(position==2)
      {
        blueTri.x=Math.round(random(800,900));
        blueTri.y=Math.round(random(150,350));
        
    //Increase the velocity of fruit after score 4 or 10
       blueTri.velocityX = -Math.round( random(5,8));
     }
    }
    blueTri.addImage(blueTrian);
    blueTri.scale = 0.1;
     //assign lifetime to the variable
    blueTri.lifetime = 300;
   
    //add each blueTri to the group
    power.add(blueTri);
  }
}
function spawnTrian() {
  if (frameCount % 30 === 0) 
  {
    position = Math.round(random(1,2));
    var redTri = createSprite(400,200,20,20);  
   // var redTri = createSprite(Math.round(random(10,500)),Math.round(random(10,300))); 
   
   if(position==1)
    {
      redTri.x=Math.round(random(0,145));
      redTri.y=Math.round(random(500,700));
      redTri.velocityX = Math.round( random(5,8));
    }
    else
    {
      if(position==2)
      {
        redTri.x=Math.round(random(800,900));
        redTri.y=Math.round(random(150,350));
        
    //Increase the velocity of fruit after score 4 or 10
       redTri.velocityX = -Math.round( random(5,8));
     }
    }
    redTri.addImage(redTrian);
    redTri.scale = 0.07;
     //assign lifetime to the variable
    redTri.lifetime = 300;
   
    //add each redTri to the group
    power.add(redTri);
  }
}

function myPlayerControl()
{
  
    if (keyWentDown("right")) {
      ridham.velocityX = 5;
      ridham.velocityY = -5;
      
    }
    if (keyWentDown("left")) {
      ridham.velocityX = -5;
      ridham.velocityY = 0;
      
    }
    if (keyWentDown("up")) {
      ridham.velocityY = -5;
      ridham.velocityX = 0;
     
    }
    if (keyWentDown("down")) {
      ridham.velocityY = 5;
      ridham.velocityX = 0;
     
    } 
  
}
