const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	
}

function setup(){
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	log=new Log(width/2,50,400,50);
	//center
	bob1=new Bob(width/2,log.y+200,60);
	//extreme left
	bob2=new Bob(bob1.x-160,log.y+200,60);
	bob3=new Bob(bob1.x-80,log.y+200,60);
	//extreme right
	bob4=new Bob(bob1.x+160,log.y+200,60);
	bob5=new Bob(bob1.x+80,log.y+200,60);

	rope1=new Rope(bob2.body,log.body,-160,0);
	rope2=new Rope(bob3.body,log.body,-80,0);
	rope3=new Rope(bob1.body,log.body,0,0);
	rope4=new Rope(bob5.body,log.body,80,0);
	rope5=new Rope(bob4.body,log.body,160,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('grey');
  
  drawSprites();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  log.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-85,y:-85});
	}
}