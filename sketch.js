let frog;
let wall;
let size;
let perClimbHeight = 50;
let perFallHeight = 20;
let wallWidth = 50;
let wallHeight = 400;

function setup() {
    size = 500;
    createCanvas(size, size);

    frog = new Frog();
    wall = new Wall(size, wallWidth, wallHeight);

    frog.startClimbing(wall, perClimbHeight, perFallHeight);

    fill(0);
}
function draw() {
    background(200);

    wall.display();

    let count = frog.update();

    stroke(255);
    strokeWeight(1);
    fill(255);
    textSize(20);
    text("Wall Height = " + size + " ft", 280, 120);
    text("Per Climb Height = " + perClimbHeight + " ft", 280, 150);
    text("Per Fall Height = " + perFallHeight + " ft", 280, 180);
    text("Number of climb = " + count, 280, 210);

    frog.display();
}

