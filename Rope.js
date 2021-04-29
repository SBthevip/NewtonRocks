class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    
    display(){
        var posA=this.rope.bodyA.position;
        var posB=this.rope.bodyB.position;

        var a1X=posA.x;
        var a1Y=posA.y;
        
        var a2X=posB.x+this.offsetX;
        var a2Y=posB.y+this.offsetY;

        strokeWeight(2);
        fill("black");
        line(a1X,a1Y,a2X,a2Y);
    }
}