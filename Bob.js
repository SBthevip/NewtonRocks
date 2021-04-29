class Bob{
    constructor(x,y,radius){
        var options={
            'isStatic':false,
            'restitution':1,
            'friction':0,
            'density':0.5
        }
        
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image=loadImage("bob.png");
        this.body=Bodies.circle(x,y,radius/2,options);

        World.add(world,this.body);
    }
    display(){
        push();
        var pos=this.body.position;
        var angle=this.body.angle;
        
        fill("black");
        rotate(angle);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius+10,this.radius+10);
        pop();
    }
}