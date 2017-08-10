var height, width, canvas, mount, stage;

height = window.innerHeight;
width = window.innerWidth;

canvas = document.createElement('canvas');
canvas.height = height;
canvas.width = width;
canvas.id = "canvas";

mount = document.querySelectorAll('.mount')[0];
mount.appendChild(canvas);

stage = new createjs.Stage('canvas');

//var circle = new createjs.Shape();
//circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
//circle.x = 100;
//circle.y = 100;
//stage.addChild(circle);


//choose random points to anchor the animation
let getRandomNumber = (distance) => {
  let max = distance - 50;
  let min = 50;
  return Math.floor(Math.random() * (max - min) + min)
}

var pointA, pointB, pointC;

pointA = {x: getRandomNumber(width), y: getRandomNumber(height)};
pointB = {x: getRandomNumber(width), y: getRandomNumber(height)};
pointC = {x: getRandomNumber(width), y: getRandomNumber(height)};



createCircles();

stage.update();

