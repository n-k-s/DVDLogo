
function setup() {
    createCanvas(windowWidth, windowHeight);
}
let DVD = {

    xDiagIncreasing: true,
    yDiagIncreasing: false,
    x: 300,
    y: 150,
    speed: 1.5
}
function draw() {

    background(0, 0, 0);
    noStroke();
    fill(random(0, 255), random(0, 255), 150);
    square(DVD.x, DVD.y, 20);

    //Mouse Collision
    if (DVD.x == MouseX || DVD.y = MouseY)
    {
        collision();
    }

    //Wall Collision
    if (DVD.xDiagIncreasing)
    {
        DVD.x += DVD.speed;
        if(DVD.x > windowWidth - 20)
        {
            DVD.xDiagIncreasing = false;
        }
    }
    else if (!DVD.xDiagIncreasing)
    {
        DVD.x -= DVD.speed;
        if(DVD.x < 0)
        {
            DVD.xDiagIncreasing = true;
        }
    }
    if (DVD.yDiagIncreasing)
    {
        DVD.y += DVD.speed;
        if(DVD.y > windowHeight - 20)
        {
            DVD.yDiagIncreasing = false;
        }
    }
    else if (!DVD.yDiagIncreasing)
    {
        DVD.y -= DVD.speed;
        if(DVD.y < 0)
        {
            DVD.yDiagIncreasing = true;
        }
    }
}
function mousePressed()
{
    DVD.x = mouseX;
    DVD.y = mouseY;
    DVD.yDiagIncreasing = false;
    DVD.xDiagIncreasing = true;
}
function collision()
{

}
