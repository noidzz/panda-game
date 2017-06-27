const DEFAULT_SPEED = 50;
const DEFAULT_X_POSITION = 350;
const DEFAULT_Y_POSITION = 150;
const DEFAULT_RADIUS = 10;	

const ORIENTATION_LEFT = 1;
const ORIENTATION_RIGHT = 2;
const ORIENTATION_UP = 3;
const ORIENTATION_DOWN = 4;

var xPositionBearOld = DEFAULT_X_POSITION;
var yPositionBearOld = DEFAULT_Y_POSITION;

var xPositionMonster = Math.floor((Math.random() * 1500 + 1));
var yPositionMonster = Math.floor((Math.random() * 800 + 1));

function Animal(name) {
	this.name = name;
	this.xPosition = DEFAULT_X_POSITION;
	this.yPosition = DEFAULT_Y_POSITION;
	this.orientation = ORIENTATION_UP;
	this.speed = DEFAULT_SPEED;
	
	this.move = function() {
		switch(this.orientation) {
			case ORIENTATION_RIGHT:
				this.xPosition += this.speed;
				break;
			case ORIENTATION_LEFT:
			 	this.xPosition -= this.speed;
				break;
			case ORIENTATION_UP:
				this.yPosition -= this.speed;
				break;
			case ORIENTATION_DOWN:
				this.yPosition += this.speed;
		}
	}

	this.show = function() {
		var ctx = document.getElementById("myCanvas").getContext("2d");
		ctx.clearRect(xPositionBearOld, yPositionBearOld, 100, 100);
	  base_image = new Image();
	  base_image.src = 'panda.png';
	  var x = this.xPosition + DEFAULT_X_POSITION;
	  var y = this.yPosition + DEFAULT_Y_POSITION;
	  xPositionBearOld = x;
	  yPositionBearOld = y;
	  base_image.onload = function(){
	    ctx.drawImage(base_image, x, y , 100, 100);
	  }
	}
}

function Monster() {
	this.show = function() {
		var ctx = document.getElementById("myCanvas").getContext("2d");
		ctx.clearRect(xPositionMonster, yPositionMonster, 200, 200);
  	xRandom = Math.floor((Math.random() * 1500 + 1));
  	yRandom = Math.floor((Math.random() * 800 + 1));
  	xPositionMonster = xRandom;
  	yPositionMonster = yRandom;
  	base_image = new Image();
	  base_image.src = 'monster.png';
	  base_image.onload = function(){
	    ctx.drawImage(base_image, xRandom, yRandom,	200, 200);
	  }
	  
	}
}

var bear = new Animal("Panda");
var dead = new Monster();

function startMoving() {
	bear.show();
	bear.move();
	setTimeout(startMoving, 100);
}

function show_danger() {
	dead.show();
	setTimeout(show_danger, 4000);
}

show_danger();

function controlSnake(event) {
	switch(event.which){
		case 37:
			bear.orientation = ORIENTATION_LEFT;
			break;
		case 38:
			bear.orientation = ORIENTATION_UP;
			break;
		case 39:
			bear.orientation = ORIENTATION_RIGHT;
			break;
		case 40:
			bear.orientation = ORIENTATION_DOWN;
			break;
	}
}