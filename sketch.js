
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, paper, bin;
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	bin = new Bin(1300,650);
	paper = new Paper(200,450,10);
	ground = new Ground(width/2, 670,width,20);

	Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background("black");
  rectMode(CENTER);
 
 
  bin.display();
  paper.display();
  ground.display();
  
 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:5.5,y:-5.5});
	}

}




