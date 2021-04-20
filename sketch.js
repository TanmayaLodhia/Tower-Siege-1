const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0;
var ground;
var block;
var engine,world,slingshot;


function preload() {
   
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,605,1200,20);
  	ground1 = new Ground(500,350,400,15);
    block1 = new Block(490,250,30,40);
    block2 = new Block(520,290,30,40);
    block3 = new Block(460,290,30,40);
    block4 = new Block(430,330,30,40);
    block5= new Block(460,330,30,40);
    block6 = new Block(490,330,30,40);
    block7 = new Block(520,330,30,40);
    block8 = new Block(550,330,30,40);
    block9 = new Block(490,290,30,40);
    //box = new Box(800,50);
    slingshot = new Slingshot(box.body,{x:105,y:370});

    
}

function draw(){
    background(225,225,220);
    
  text("Score:"+score,700,40);
    Engine.update(engine);
    
    block1.display();
    block1.score();
    block2.display();
    block2.score();
    //ground.display();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    block8.display();
    block8.score();
    block9.display();
    block9.score();
    box.display();
    slingshot.display();  
   // platform.display();
    ground.display();
    ground1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    slingshot.fly();
  }
  
  function keyPressed(){
    if(keyCode === 32){
     // Matter.Body.setPosition(stone.body,{x:235,y:420})
      slingshot.attach(box.body);
    }
  }

