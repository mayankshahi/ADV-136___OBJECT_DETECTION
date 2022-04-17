status = "";
video = "";

function preload()
{
    video = createVideo('video.mp4');
    video.hide();
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects"
}

function modelLoaded()
{
    console.log("The Model Is Loaded!!!!!!!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(1);
    
}

function draw()
{
    image(video,0,0,640,420);
}