song1 = ""
song2 = ""
Lwristx = 0
Lwristy = 0
Rwristx = 0
Rwristy = 0
function preload() {
    song1 = loadSound("music.mp3")
    song2 = loadSound("music2.mp3")
}
function setup() {
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    posiffier = ml5.poseNet(video,ModelLoaded)
    posiffier.on('pose',GotResults)
}
function ModelLoaded() {
    console.log("Model Is Loaded")
}
function draw() {
    image(video,0,0,600,500)
}
function GotResults(results) {
 if(results.length > 0) {
    console.log(results)
        Lwristx = results[0].pose.leftWrist.x
        Lwristy = results[0].pose.leftWrist.y
        Rwristx = results[0].pose.rightWrist.x
        Rwristy = results[0].pose.rightWrist.y
        console.log("Left wrist x and y : "+Lwristx+" | "+Lwristy)
        console.log("Right wrist x and y : "+Rwristx+" | "+Rwristy)
 }
}