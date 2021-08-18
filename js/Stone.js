class Stone{
 constructor(x,y,w,h){
     this.stone=loadImage("stone.png")
     var options={
         restitution:0.8
     }
 this.x=x;
 this.y=y
 this.w=w;
 this.h=h;
 this.body=Bodies.rectangle(x,y,w,h,options)
 World.add(world,this.body)
 }
 show(){
     var pos=this.body.position
     var angle=this.body.angle;
     push()
     translate(pos.x,pos.y);
     
     //rotate(angle);
     imageMode(CENTER)
     image(this.stone,0,0,this.w,this.h)
     pop()
     

 }
}