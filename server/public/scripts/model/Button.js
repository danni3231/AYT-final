class Button {
    constructor(text, posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.text = text;

        this.width = 350;
        this.height = 70;

        this.over = false;
    }

    draw() {
        this.validateOver();
        noStroke();
        fill(255);
        rect(this.posX, this.posY, this.width,this.height,20);
        textAlign(CENTER, CENTER);
        fill(172, 226, 255);
        text(this.text, this.posX+(this.width/2), this.posY+(this.height/2));
    }

    validateOver() {
        if (mouseX > this.posX && mouseX < this.posX + this.width &&
            mouseY > this.posY && mouseY < this.posY + this.height) {
            this.over = true;
        } else {
            this.over = false;
        }
    }
}