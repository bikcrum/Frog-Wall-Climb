/**
 * Created by Anony on 2/28/2018.
 */

class Frog {
    constructor() {
        this.position = createVector(0, 0);
    }

    update(x, y) {
        this.position.x = x;
        this.position.y = y;
    }

    display() {
        stroke(0);
        strokeWeight(2);
        fill(200);
        ellipse(this.position.x, this.position.y, 10, 10);
    }
}
