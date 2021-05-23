const Engine=Matter.Engine
const World= Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine
var ball, box, ground, string
var box2

function setup() {
  createCanvas(800,400);

 engine= Engine.create()
world= engine.world

ball = new Ball(100,200,40)
box = new Box(400,100,50,50)
box2=new Box(250,100,50,50)
string= new SlingShot(ball.body,{x:20,y:20})
ground= new Ground(400,200,400,20)

}

function draw() {
  background(255,255,255);  
 
  Engine.update(engine)
  ball.display()
  box.display()
  box2.display()
  string.display()
  ground.display()

}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function keyPressed(){
  if(keyCode==UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:-5,y:-3})
  }
}