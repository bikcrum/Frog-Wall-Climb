/**
 * Created by Anony on 2/28/2018.
 */

class Wall {

    constructor(canvasSize, width, height) {
        this.canvasSize = canvasSize;
        this.height = height;
        this.width = width;
    }


    display() {
        stroke(0);
        strokeWeight(2);
        noFill();
        rect(this.canvasSize / 2 - this.width / 2, this.canvasSize - this.height, this.width, this.height);
        let step = this.height / 20.0;
        let even = true;
        for (i = 0; i < this.height; i += step) {
            line(this.canvasSize / 2 - this.width / 2, this.canvasSize - this.height + i, this.canvasSize / 2 + this.width / 2, this.canvasSize - this.height + i);
            if (even) line(this.canvasSize / 2, this.canvasSize - this.height + i, this.canvasSize / 2, this.canvasSize - this.height + i + step);
            even = !even;
        }
    }
}
