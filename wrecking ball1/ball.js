class Ball{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius);
        this.radius=radius
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.position;
        
        ellipseMode(RADIUS);
        ellipse(angle.x, angle.y, this.radius, this.radius);

      }
}