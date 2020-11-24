class Word {
    constructor(text, posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.text = text;

        this.over = false;
    }

    draw() {
        this.validateOver();
        text(this.text, this.posX, this.posY);
    }

    validateOver() {
        if (mouseX > this.posX && mouseX < this.posX + (45 * this.text.length) &&
            mouseY > this.posY && mouseY < this.posY+50) {
            this.over = true;
            textSize(60);
        } else {
            this.over = false;
            textSize(50);
        }
    }
}