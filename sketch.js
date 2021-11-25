const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var cir_object

var newBox1, newBox2;

function setup() {
  var canvas = createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic: true,
  };

  object = Bodies.rectangle(200, 350, 400, 100, object_options);
  World.add(world, object);

  newBox1 = new Box(200, 300, 45, 45);
  newBox2 = new Box(230, 150, 60, 90);

}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  fill("green");
  rect(object.position.x, object.position.y, 400, 100);

  newBox1.display();
  newBox2.display();
}
