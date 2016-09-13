//
function setup(){
  createCanvas(1400,1000);

}
function draw(){
  background(150);
  fill(255);
  strokeWeight(4);
  stroke(50);
      // for(var x = 1; x <1000; x=x+20) {
      for(var y = 0; y<height-20; y+= 60){
        for(var h = 0; h < width-20; h += 60){
        fill(255);
        ellipse(h, y, 35, 35);
        triangle(30+h, 75+y, 58+h, 20+y, 86+h, 75+y);

        push();
        fill(50)
        ellipse(h-30,y-25,35,35)
        pop();


        push();
        fill(250)
        ellipse(h-30,y-25,25,25)
        pop();

        push();
        fill(200,0)
        strokeWeight(40)
        stroke(50)
        rect(0,0,1350,1000)
        pop();


      }
}


        // push();
        // fill(255);
        // strokeWeight(4)
        // stroke(50);
        // ellipse(x,x,x);
        // pop();




  // }
}
