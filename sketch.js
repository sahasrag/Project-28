
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, ground, stone, boy, constraint, constraint1; 
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	treeimg = loadImage("tree.png");
	boyimg = loadImage("boy.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = createSprite(550,500,300,450);
	tree.addImage(treeimg);
	tree.scale = 0.30
	ground = new Ground(400,690,800,20);
	//boy = new Boy(200,585,100,200);
	boy = new Boy(200,585,100,200);
	boy = createSprite(200,585,100,200);
	boy.addImage(boyimg);
	boy.scale = 0.1
	stone = new Stone(140,200,50);
	mango1 = new Mango(450,400,50);
	mango2 = new Mango(500,500,50);
	mango3 = new Mango(550,450,50);
	mango4 = new Mango(600,400,50);
	mango5 = new Mango(650,500,50);
	constraint1 = new Launcher(stone.body, {x:160,y:550});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  constraint1.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y: mouseY});
}

function mouseReleased(){
    constraint1.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.Position;
	stoneBodyPosition = lstone.body.Position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance <= lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		launcherObject.attach(stone.body);
	}
}

