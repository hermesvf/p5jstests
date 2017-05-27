function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  noStroke()
}

squares = [];

points = [];

var a = 1;

function draw() {
  var col = 0;
  var range = 500;
  var frame = frameCount%range;
  if (frame < range/2) {
    background(frame)
  }
  else {
    background(range-frame)
  }
  var sizeSq = frameCount/3;
  for (var i = 0; i < squares.length; ++i) {
    fill(squares[i].c);
    ellipse(squares[i].x, squares[i].y, squares[i].r, squares[i].r);
    squares[i].r += 1;
  }
}

var col = colorAlpha('#ff0074', 0.1);

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
function mousePressed() {
  var x = mouseX;
  var y = mouseY;
  var l = points.length;
  //points.push(createVector(x,y));
  squares.push(new Circle(mouseX,mouseY,10,colorAlpha('#ff0000', 1)));
  intervalo = setInterval(
    function() {
      squares.push(new Circle(x,y,10,colorAlpha('#ff0074', 1)));
    },
    random(1000,5000)
    );
}

function colorAlpha(aColor, alpha) {
  var c = color(aColor);
  return color('rgba(' +  [red(c), green(c), blue(c), alpha].join(',') + ')');
}

function Circle(x,y,r,c) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.c = c;
}
