class Ground {

    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);

    }

    display(){
        var Pos = this.body.position;
        push()
        translate(Pos.x,Pos.y)
        rectMode(CENTER);
        fill("brown");

        rect(0, 0, this.width, this.height)
        pop()
    }


};