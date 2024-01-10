var sea, ship;
var seaImg, shipImg1;

function preload() {
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png", "ship-1.png", "ship-2.png", "ship-1.png");
}

function setup() {
  createCanvas(400, 400);

  // mover o plano de fundo
  sea = createSprite(200, 200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.3;

  ship = createSprite(130, 200, 30, 30);
  ship.addAnimation("movingShip", shipImg1);
  ship.scale = 0.25;
}

function draw() {
  background(0);

  // Corrigir o movimento do plano de fundo
  if (sea.x < 0) {
    sea.x = sea.width / 8;
  }

  // Mostrar o plano de fundo
  drawSprites();
}