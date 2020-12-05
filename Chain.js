class Chain{

constructor(bodyA,pointB){

var options ={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:1.2,
    length:200,

}
this.chain= Matter.Constraint.create(options)
this.pointB=pointB
World.add(world,this.chain)
}

display(){
    var pointA = this.chain.bodyA.position;
    var pointB = this.pointB;
    push();
    strokeWeight(5)
    fill("brown")
    line(pointB.x,pointB.y,pointA.x,pointA.y)
    pop();
}



}