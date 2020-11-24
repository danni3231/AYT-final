class Vector {
  constructor(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
  }

  draw() {
    strokeWeight(4);
    strokeCap(ROUND);
    stroke(172, 226, 255);
    line(this.point1.posX, this.point1.posY, this.point2.posX, this.point2.posY);
  }
}