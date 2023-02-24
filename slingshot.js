class SlingShot{
    constructor(bodyA, pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1
        }
        this.estilingue = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.estilingue);
      }
      attach(body){
        this.estilingue.bodyA = body
      }
      fly(){
        this.estilingue.bodyA = null
      }
      display(){
        if (this.estilingue.bodyA){
            pointA = this.estilingue.bodyA.position
            pointB = this.pointB
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
      }
}