
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,wall1,wall2 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,700,800,20)
wall1=new Ground(700,690,20,150)
wall2=new Ground (600,690,20,150)
var balloptions={
	restitution:0.5,
 density:1
}
ball=Bodies.circle(200,100,20,balloptions)
World.add(world,ball)
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display()
 wall1.display()
 wall2.display()
 ellipse(ball.position.x,ball.position.y,20,20)
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:20,y:-20})
}
}



