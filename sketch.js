const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snows = [];
var engine, world;
var snowflake = 100;
var bgImg;

function preload(){
  bgImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  for(var i = 0; i < snowflake; i++){
    snows.push(new Snow(random(0,800), random(0,400)));
 }
}

function draw() {
  Engine.update(engine);
  background(bgImg); 
  
  for(var i = 0; i < snowflake; i++){
    snows[i].display();
    snows[i].update();
  }

  drawSprites();
}