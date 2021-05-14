
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var hammer1, plane, stone, rubber;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer1 = new Hammer(400,30);
    plane = new Plane(400,650,800,10);
    stone = new Stone(400,100,100,80);
    rubber = new Rubber(500,100,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  fill("yellow");
  rubber.display();
  fill("red");
  stone.display();
 fill("pink");
 plane.display();
 fill("blue");
 hammer1.display();
  drawSprites();
 
}



