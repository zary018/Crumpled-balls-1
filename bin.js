class Bin {
    constructor(x, y) {
        var options = {
            'isStatic': true
    }
    this.x=x;
    this.y=y;
    this.binWidth=200;
    this.binHeight=100;
    this.binThickness=20;
    this.angle=0;
    this.bottomBody = Bodies.rectangle(this.x,this.y,this.binWidth,this.binThickness, options);
    World.add(world, this.bottomBody);
    this.leftBody = Bodies.rectangle(this.x-this.binWidth/2,this.y-this.binHeight/2,this.binThickness,this.binHeight,options);
    Matter.Body.setAngle(this.leftBody,this.angle);
    World.add(world, this.leftBody);
    this.rightBody = Bodies.rectangle(this.x+this.binWidth/2,this.y-this.binHeight/2,this.binThickness,this.binHeight,options);
    Matter.Body.setAngle(this.rightBody,-1*this.angle);
    World.add(world, this.rightBody);
    }
    display(){
        var bPos=this.bottomBody.position;
        var lPos=this.leftBody.position;
        var rPos=this.rightBody.position;
        push()
        translate(lPos.x,lPos.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        rotate(this.angle)
        fill("yellow");
        stroke("black");
        rect(0,0,this.binThickness,this.binHeight)
        pop()    
        
        push()
        translate(rPos.x,rPos.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        rotate(-1*this.angle)
        fill("yellow");
        stroke("black");
        rect(0,0,this.binThickness,this.binHeight)
        pop()   
        
        push()
        translate(bPos.x,bPos.y)
        rectMode(CENTER)
        fill("yellow");
        stroke("black");
        rect(0,0,this.binWidth, this.binThickness)
        pop()    
    }

}
