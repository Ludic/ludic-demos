
class Button {
  constructor(x,y,width,height) {
    this.path = Path2D.rect(x,y,width,height);
  }

  draw(ctx){
    ctx.save();
    ctx.fillStyle = '#62aaeb';
    ctx.fill(this.path);
    ctx.restore();
  }
}


export default Button;
