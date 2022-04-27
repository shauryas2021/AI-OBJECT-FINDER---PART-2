function preload(){

}
function setup(){
canvas = createCanvas(350, 350);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video, 0, 0, 350, 350);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Objects Detecting";
}
function modelLoaded(){
 console.log("Model is successfully Loaded!!");
 status = true;
}

