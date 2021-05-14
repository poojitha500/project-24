class Stone {
    constructor(x, y, w, h) {
        var options = {
            'density':5,
            'friction':1.0,
            'restitution':0.5
           
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
};