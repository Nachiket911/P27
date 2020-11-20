const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4 

function preload(){


	
}

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  stand = new Roof();
  thread = new Thread({x:200, y:400}, bob1);
  bob1 = new Bob();
  bob2 = new Bob();

	Engine.run(engine);
  
}

function draw() {

  Engine.update(engine);

  background(0);

  rectMode(CENTER);  

  stand.display();
  thread.display();
  bob.display();
  
  drawSprites();
 
}