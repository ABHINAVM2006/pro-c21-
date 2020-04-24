var sun, venus, neptune, earth;
var sunImg, venusImg, earthImg, neptuneImg;

var angle = 0;
var anglespeed = 0.2;
var sunRadius;

function preload() {
  sunImg = loadImage("sun.png");
  venusImg = loadImage("venus.png");
  earthImg = loadImage("earth.png");
  neptuneImg = loadImage("neptune.png");  
}

function setup() {
  createCanvas(800, 800);
  sun = createSprite(0, 0);
  sun.addImage("sun", sunImg);
  sun.scale = 0.3;
  sun.setCollider("circle", -85, -60, 140);
  sun.debug = false;    

  venus = createSprite(210, 60);
  venus.addImage("venus", venusImg);
  venus.scale = 0.15;

  earth = createSprite(150, -18);
  earth.addImage("earth", earthImg);
  earth.scale = 0.22;
      
  neptune = createSprite(-340, -320);
  neptune.addImage("neptune", neptuneImg);
  neptune.scale = 0.1;

}

function draw() {
  background(0);
  console.log(sun.scale);
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  rotate(angle);

  if (sun.collide(earth)) {
      earth.destroy();
  }
  else if(sun.collide(neptune)) {
    neptune.destroy();
  }

  else if(sun.collide(venus)) {
    venus.destroy();
  }

  angle = angle + anglespeed;
  if (frameCount % 1 === 0) {
      sun.scale = sun.scale + 0.01;
  }
  if (sun.scale > 5)  {
    sun.destroy();
  }
  drawSprites();
}