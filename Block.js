class Block  {
    constructor(x, y,width,height){
      var options = {
        //isStatic: false,
        density: 0.001,
        friction: 0,
        restitution:0.3
    }
  
      //this.image = loadImage("box.png");
      //this.Visiblity = 255;
    }
  
   display(){
     /*console.log(this.body.speed);
     if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 8;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
    }
    score(){
  
      if(this.Visiblity<0 && this.Visiblity>-1005){
        score++;
      }
     }*/
     
     var angle=this.body.angle;
     var pos=this.body.position;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     rect(0,0,this.width,this.height);
     pop();
  
  };
}