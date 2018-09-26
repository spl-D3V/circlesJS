let circles = [];
let color = [0, 255, 50, 150];
const maxIter = 500000;
let nCircles = 0;
let circlesHTML;
let surfaceHTML;

function setup(){
    const can = createCanvas(800, 600);
    can.parent(document.getElementById("canvasContainer"));
    circlesHTML = document.getElementById("circles");
    surfaceHTML = document.getElementById("surface");
    const surface = width*height;
    let circlesSurface = 0;
    let currentIter = 0;
    while(currentIter < maxIter){
        let circle = new Circle(width*Math.random(), height*Math.random(), color, 125);
        if(!circles.length){
            circles.push(circle);
        }else{
            if(!circles.some(c => c.overlap(circle))){
                circles.push(circle);
            }
        }
        circlesSurface = circles.reduce((temp, circTemp) => circTemp.surface+temp, 0);
        currentIter++;
    }
    nCircles = circles.length;
    noStroke();
    for(let i = 0 ; i < nCircles; i++){
        circles[i].show();
    }
    circlesHTML.innerText = nCircles;
    surfaceHTML.innerText = Number(100*(circlesSurface / surface)).toFixed(2);
}

function draw(){

}