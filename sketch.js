var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var carImg1,carImg2,track
var cars = []
var allPlayers = []
var car1, car2

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  track = loadImage("./assets/track.jpg")
  carImg1 = loadImage("./assets/car1.png")
  carImg2 = loadImage("./assets/car2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
