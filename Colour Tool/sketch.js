let maxH = 360;
let maxS = 100;
let maxB = 100;

let strokeThickness;
let canvasWidth = 1240;
let canvasHeight = 1754;

function setup() {
  cnv = createCanvas(canvasWidth,canvasHeight);
  // randomise function
  cnv.mousePressed(changeColour);
  cnv.strokeWeight(4);
  cnv.stroke(51);
  colorMode(HSB, maxH, maxS, maxB);

  // new slider objects created based on Slider class
  h_slider1 = new Slider(250, 1640, 43, maxH);
  s_slider1 = new Slider(250, 1670, 80, maxS);
  b_slider1 = new Slider(250, 1700, 94, maxB);

  h_slider2 = new Slider(250, 1780, 60, maxH);
  s_slider2 = new Slider(250, 1810, 7, maxS);
  b_slider2 = new Slider(250, 1840, 94, maxB);

  h_slider3 = new Slider(880, 1640, 195, maxH);
  s_slider3 = new Slider(880, 1670, 10, maxS);
  b_slider3 = new Slider(880, 1700, 62, maxB);

  h_slider4 = new Slider(880, 1780, 202, maxH);
  s_slider4 = new Slider(880, 1810, 48, maxS);
  b_slider4 = new Slider(880, 1840, 100, maxB);
}

function draw() {
    clear();  // Clears pixels within buffer
    background(20,2.4,98.4);

    // Main text headings
    textAlign(CENTER);
    textSize(72);
    let heading1 = text('Interaction of Color', canvasWidth/2, 220);
    textSize(52);
    let heading2 = text('Josef Albers', canvasWidth/2, 340);
    fill(0, 102, 153);

    // Centre shape
    translate(width / 2, height / 2);
    fill(h_slider4.gui.value(), s_slider4.gui.value(), b_slider4.gui.value());

    // Increases stroke size based on mouse position
    strokeThickness = map(mouseY, width, 0, 0, 15);
    stroke('#333')
    strokeWeight(strokeThickness);
    rectMode(CENTER);
    rect(0, 70, 970, 970);

    // Square 2
    fill(h_slider3.gui.value(), s_slider3.gui.value(), b_slider3.gui.value());
    strokeWeight(strokeThickness);
    rect(0, 120, 750, 750);

    // Square 3
    fill(h_slider2.gui.value(), s_slider2.gui.value(), b_slider2.gui.value());
    strokeWeight(strokeThickness);
    rect(0, 160, 550, 550);

    // Square 4
    fill(h_slider1.gui.value(), s_slider1.gui.value(), b_slider1.gui.value());
    strokeWeight(strokeThickness);
    rect(0, 195, 363, 363);

    // Slider 1
    fill(0, 0, 0);
    noStroke();
    textSize(20);
    text("H1: " + h_slider1.gui.value(), -128, 628);
    text("S1: " + s_slider1.gui.value(), -128, 658);
    text("B1: " + b_slider1.gui.value(), -128, 688);

    // Slider 2
    text("H2: " + h_slider2.gui.value(), -128, 767);
    text("S2: " + s_slider2.gui.value(), -128, 797);
    text("B2: " + b_slider2.gui.value(), -128, 827);

    // Slider 3
    text("H3: " + h_slider3.gui.value(), 115, 628);
    text("S3: " + s_slider3.gui.value(), 115, 658);
    text("B3: " + b_slider3.gui.value(), 115, 688);

    // Slider 4
    text("H4: " + h_slider4.gui.value(), 115, 767);
    text("S4: " + s_slider4.gui.value(), 115, 797);
    text("B4: " + b_slider4.gui.value(), 115, 827);
}

// Slider class declares 4 parameters
let Slider = function(x, y, defVal, max) {
    this.gui = createSlider(0, max, defVal).position(x, y).size(300, AUTO);
    this.max = max;
}

// Function to randomise shape fill when clicked
function changeColour() {
  h_slider1.gui.value(random(0,360));
  s_slider1.gui.value(random(0,100));
  b_slider1.gui.value(random(0,100));

  h_slider2.gui.value(random(0,360));
  s_slider2.gui.value(random(0,100));
  b_slider2.gui.value(random(0,100));

  h_slider3.gui.value(random(0,360));
  s_slider3.gui.value(random(0,100));
  b_slider3.gui.value(random(0,100));

  h_slider4.gui.value(random(0,360));
  s_slider4.gui.value(random(0,100));
  b_slider4.gui.value(random(0,100));
}

// Saves the current canvas as an image
function keyPressed(){
  if(key == 's'){
    saveCanvas('HomageToTheSquare','png');
    heading1.hide();
  }
}

// function keyPressed() {
//   if (key == 'n') {
//     rect(0, 195, 300, 300);
//   } else if (key == 'f') {
//     value = 0;
//   }
// }
