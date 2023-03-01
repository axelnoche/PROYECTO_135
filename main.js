function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)
    video.position(670, 50)


    canvas = createCanvas(550,500);
    canvas.position(670, 510);

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses )
}

function modelLoaded() {
  console.log('poseNet se inicializo')
}

function gotPoses(results) {
    if (results.length>0){
        console.log(results);
    }
}

function draw() {
    background('green')

}