const Engine=Matter.Engine;
const Bodies=Matter.Bodies
const World=Matter.World;
const Constraint=Matter.Constraint;
var engine, world
var back, backp, sup, supp, sling

function preload() {
backp=loadImage("Sky.png")

}

function setup() {
  createCanvas(3000, 1000);
  engine=Engine.create()
  world=engine.world
  sup=new Superman(500, 200, 400, 200)
  sling=new SlingShot(sup.body,{x:500, y:0})

}

function draw() {
  background(backp);
  Engine.update(engine)
  sup.display();
  sling.display();
  

}
function mouseDragged() {
  Matter.Body.setPosition(sup.body, {x:mouseX, y:mouseY})
}

