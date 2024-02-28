function preload() 
{
    
}
function setup() 
{
    canvas = createCanvas(600, 500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
}
function draw() 
{
    image(video, 0, 0, 600, 500)

    circle(100, 110, 40)
    fill("red")
    noFill()
    stroke("red")
    rect(100, 120, 400, 300)
    fill("red")
    noFill()
    stroke("red")
    fill("red")
    circle(100, 400, 40)
    fill("red")
    stroke("red")
    circle(500, 110, 40)
    fill("red")
    stroke("red")
    circle(500, 400, 40)
    fill("red")
    stroke("red")
}