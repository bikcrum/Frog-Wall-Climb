var frog;
function setup() {
    size = 500;
    createCanvas(size, size);
    frog = new Frog();
    wall = new Wall(width, 50, 400);
    i = 0;
    fill(0);
}
function draw() {
    background(200);

    wall.display();

    //  frog.display();
}

