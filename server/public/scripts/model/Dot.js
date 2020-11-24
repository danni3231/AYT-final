class Dot {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.imgs = imgs;

    this.found = false;
    this.over = false;

    this.dist = 0;
    this.opacity = 60;
  }

  draw() {
    this.dist = dist(this.posX, this.posY, mouseX, mouseY);
    this.validateOver();
    this.validateTint();
    image(this.imgs[0], this.posX, this.posY);
    if (this.found) {
      image(this.imgs[1], this.posX, this.posY);
    }
  }

  validateOver() {
    if (this.dist < 20) {
      this.over = true;
    } else {
      this.over = false;
    }
  }

  search(io) {
    if(this.dist < 20){
      io.emit('250');
    }else if(this.dist <80){
      io.emit('100');
    }else if (this.dist <150){
      io.emit('30');
    }
  }

  validateTint() {
    if (this.dist < 80) {
      this.opacity = 255;
    }
    tint(255, this.opacity);
  }

}