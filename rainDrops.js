//creating a raindrop class
class rainDrops{
  constructor(){
    this.x = random(width);
    this.y = random(40,30)
    this.yspeed = random(1,5);
  }
  fall(){
    this.y = this.y+this.yspeed;
  }
  display(){
    fill(255);
    ellipse(this.x,this.y,6,6);
    if(this.y>height){
      this.y = -10;
    }
  }
}