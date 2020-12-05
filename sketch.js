const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bob,bob2,bob3,bob4,bob5
var chain,chain2,chain3,chain4,chain5
var sling
function setup(){
    var canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;
     
    
    ground = new Ground(500,height,1000,20)
    bob5=new Bob(160,150,30,30)
    bob4=new Bob(440,150,30,30)
    bob3 = new Bob (230,150,30,30)
    bob2= new Bob(370,150,30,30)
    bob= new Bob(300,150,30,30)
    chain=new Chain(bob.body,{x:300,y:50})
    chain2=new Chain(bob2.body,{x:370,y:50})
    chain3= new Chain(bob3.body,{x:230,y:50})
    chain4= new Chain(bob4.body,{x:440,y:50})
    chain5= new Chain(bob5.body,{x:160,y:50})
    sling= new Sling(bob4.body,{x:440,y:50})
}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    bob.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    chain.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
    sling.display();
}

function mouseDragged() {

    Matter.Body.setPosition(bob4.body, { x: mouseX, y: mouseY });
    
    }
    
    function mouseReleased() {
    
    sling.fly();
    
    }