class Bob {
    constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.r=r
      this.body=Bodies.circle(x,y,r,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(0);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };
  