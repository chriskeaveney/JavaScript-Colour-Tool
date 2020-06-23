/* Creative Coding
   Edel Prior
   October 2018 (week 6)
   Notes
*/

// Step 1 :: Making a pallette of colors with content and set rules.

var colorCount = 61;
var tileCountX = 50;
var tileCountY = 10;


var hueValue = [];
var satValue = [];
var brightValue = [];


function setup() {
  colorMode(HSB, 100);
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop();


for (i = 0; i < tileCountX; i++) {
    hueValue[i] = random(50, 150);
    satValue[i] = 150;
    brightValue[i] = random(20, 40);
  }
}
function draw() {

  for (i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValue[i] = random(50, 150);
      satValue[i] = 150;
      brightValue[i] = random(20, 40);
    } else {
      hueValue[i] = 100;
      satValue[i] = random(40, 80);
      brightValue[i] = random(60, 100);

var counter = 0;

for(var gridY = 0; gridY < tileCountY; gridY++){
  for(var gridX = 0; gridX < tileCountX; gridX++){
    var posX = width * gridX;
    var posY = height * gridY;
     fill(hueValue[i], satValue[i], brightValue[i]);
     rect(posX, posY, 40, 75);

  }
}
}



//************************************************//





// var hueValue = [];
// var satValue = [];
// var brightValue = [];
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   colorMode(HSB, 200, 50, 50, 10);
//   noStroke();
//
//   for (var i = 0; i < 50; i++) {
//     hueValue[i] = random(10, 50);
//     satValue[i] = random(10, 50);
//     brightValue[i] = random(70, 100);
//   }
// }
//
// function draw() {
//   var mX = constrain(mouseX, 0, width);
//   var mY = constrain(mouseY, 0, height);
//   var counter = 0;
//
//
//   var mapX = int(map(mX, 0, width, 1, 50));
// // when the X value of the Map the offset stops working?
// // Don't understand
//   var mapY = int(map(mY, 0, height, 1, 10));
//   var tileWidth = width / mapX;
//   var tileHeight = height / mapY;
//
//   for (var gridY = 0; gridY < 10; gridY++) {
//     for (var gridX = 0; gridX < 50; gridX++) {
//       var Xposition = tileWidth * gridX;
//       var Yposition = tileHeight * gridY;
//
//       var index = counter % mapX;
//
//       // get component color values
//       fill(hueValue[index], satValue[index], brightValue[index]);
//       rect(Xposition, Yposition, tileWidth, tileHeight);
//       counter++;
//     }
//   }
// }
