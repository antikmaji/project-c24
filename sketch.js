const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1= new Box(700,340,70,70);
    box2= new Box(700,260,70,70);
    box3= new Box(910,340,70,70);
    box4= new Box(910,260,70,70);
    box5= new Box(810,160,70,70);

    log1= new Log(810,280,300,PI/2);
    log2= new Log(810,190,300,PI/2);
    log3= new Log(745,120,150,PI/7);
    log4= new Log(855,120,150,-PI/7);

    pig1= new Pig(810,340);
    pig2= new Pig(810,260);
    
    bird1= new Bird(100,100);

    ground1= new Ground(600,390,1200,25);

}

function draw(){
    background(0);
    Engine.update(engine);

    ground1.display();

    bird1.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    pig1.display();
    pig2.display();
    
}