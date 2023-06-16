noseX=0;
noseY=0;
function preload(){
    mustache="https://i.postimg.cc/W3F5Lpmx/mustache.png"
}
function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    image(mustache,noseX,noseY,60,60);
    image(video, 0, 0, 300, 300);
}
function take_snapshot(){
    save("filter_snapshot.png");
}
function modelLoaded(){
    console.log("Pose Net has been initialized")
}
function gotPoses(results){
    if(results.length > 0){
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    }
}
function saveScreenshot(){
    save("filter_photo.png");
}