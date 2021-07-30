class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
     
    if(this.body.position.x>=1550){
     this.body.visible=false
      text("game over",900,500);
      text("game over",1400,500);
      text("game over",1600,500);
      text("game over",1900,500);

    }

    camera.position.x=this.body.position.x
       
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}
