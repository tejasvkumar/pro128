song1="";
song2="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
function preload(){
    song1=loadSound("song.mp3");
    song2=loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);  
}
function draw(){
    image(video,0,0,600,500);
}
function modelloaded(){
    console.log("posenet is inisialised");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    console.log("leftwristx =  "+leftwristx+" leftwristy = "+leftwristy);
    console.log("rightwristx =  "+rightwristx+" rightwristy = "+rightwristy);

}
}