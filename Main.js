function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

    
}

function draw() {
    image(video, 0, 0, 640, 480);

    Fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    circle(50, 430, 80);

    circle(590, 50, 80);

    circle(590, 430, 80);

    Fill(0, 180, 0);
    stroke(0, 180, 0);
    circle(90 ,40, 460, 20);

    Rect(90, 420, 460, 20);

    Rect(40, 90, 20, 300);

    Rect(580, 90, 20, 300);

}

function take_snapshot(){
    save('student_name.png');

}


