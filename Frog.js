/**
 * Created by Anony on 2/28/2018.
 */

class Frog {
    constructor() {
        this.position = createVector(0, 0);
        this.count = 0;
        this.size = 10;
    }

    update() {
        this.position.x = this.wall.canvasSize / 2 - this.wall.width / 2 - this.size;

        if (this.position.y <= this.wall.canvasSize - this.wall.height) {
            return this.count;
        }

        if (this.remainingRise > 0) {
            this.remainingRise -= 1;
            this.position.y -= 1;
        } else if (this.remainingFall > 0) {
            this.remainingFall -= 1;
            this.position.y += 1;
        } else {
            this.remainingRise = this.rise;
            this.remainingFall = this.fall;
            this.count += 1;
        }
        return this.count;
    }

    display() {
        stroke(0);
        fill(255);
        rect(this.position.x, this.position.y, this.size,this.size);
    }

    startClimbing(wall, rise, fall) {
        this.wall = wall;
        this.rise = rise;
        this.fall = fall;
        this.remainingRise = rise;
        this.remainingFall = fall;
        this.position.y = this.wall.canvasSize;
    }


}
