var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  var score = 0
 
var particles = [];
var plinkos = [];
var divisions =[]



var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  d1 = new Wall(5,250,10,500)
  d2 = new Wall(795,250,10,500)

   for (var k = 0; k <=800; k = k + 80) {
     divisions.push(new Wall(k, 650, 10, 300));
   }


    for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 0; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 0; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }



   
}
 
function draw() {


  background("black");

textSize(20)
fill(random(0, 255), random(0, 255), random(0, 255));
  text("score: " + score,20,20)
  text("100" ,750,550)
  text("100" ,25,550)
  text("200" ,665,550)
  text("200" ,105,550)
  text("300" ,585,550)
  text("300" ,175,550)
  text("400" ,515,550)
  text("400" ,265,550)
  text("500" ,425,550)
  text("500" ,345,550)
  d1.display()
  d2.display()
  r = Math.round(random(35,425))

 
  Engine.update(engine);
 
  
   for (var h = 0; h < plinkos.length; h++) {
     
     plinkos[h].display();
     
   }
   
  for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   for(var h = 0;h < particles.length;h++)
   {
     particles[h].display();
   }

  
    
} 

function mousePressed()
{
  particles.push(new Particle(mouseX,55,10))
}

