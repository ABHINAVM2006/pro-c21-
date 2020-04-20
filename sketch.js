var sun, sunImage;
var plt1,plt1IMage, plt2,plt2Image, plt3,plt3Image;
var angle = 0;
var angleSpeed = 0.2;

function setup()  {
  var canvas =  createCanvas(600,600);

  sun = createSprite(width/2,height/2,50,50);
  sunImage = loadImage("sun.png");
  sun.scale = 0.005;

  plt1 = createSprite(150,100,20,10);
  plt1Image = loadImage("venus.png");
  plt2 = createSprite(150,250,20,10);
  plt2Image = loadImage("neptune.png")
  plt3 = createSprite(450,100,20,10);
  plt3Image = loadImage("earth.png");
}
function draw() {
  
  background(0);
  //console.log(sun.width);
  console.log(plt3.x);
  sun.addAnimation("sun",sunImage);
  plt1.addAnimation("planet",plt1Image);
  plt1.scale = 0.05;
  plt2.addAnimation("planet",plt2Image);
  plt2.scale = 0.05;
  plt3.addAnimation("planet", plt3Image);
  plt3.scale = 0.05;

  if(frameCount%10 === 0) {
    sun.scale = sun.scale + 0.1;
  }
  if(sun.collide(plt1)) {
    plt1.destroy();
  }
  else if(sun.collide(plt2))  {
    plt2.destroy();
  }
  else if(sun.collide(plt3))  {
    plt3.destroy();
  }

  if(sun.width>600) {
    sun.destroy();
  }  
  angleMode(CENTER);
  translate(width/2,height/2);
  rotate(angle);
  angle = angle + angleSpeed;

  drawSprites();  
 
}