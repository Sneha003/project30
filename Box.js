class Box {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 40, 40, options);
     // this.body = Bodies.circle(50,200,20,options);
      //x=x;
     // y=y;
      //r=r
      this.width = 40;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // pos.x=mouseX
      //pos.y=mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(3);
      stroke("blue");
      
      fill("yellow");
      rect(0, 0, this.width, this.height);
    // image(poligon_img,poligon.position.x,poligon.position.y,40,40); 
     pop();
    }
  };
  
 