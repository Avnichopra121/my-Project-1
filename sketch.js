var player, woodCutter, industry, lake;
var playerImg, woodCutterImg, lakeImg, bgImg;

function preload()
{
  playerImg = loadImage("player.jpg");
  woodCutterImg = loadImage("woodCutter.jpg");
  bgImg = loadImage("bg.jpg");
}

function setup()
{
    createCanvas(800,800)

    player = createSprite(200,200,20,20);
    //player.addImage("Player",playerImg);

    woodCutter = createSprite(304,56,20,20);
    //woodCutter.addImage("woodCutter",woodCutterImg);
}

function draw()
{
  background("black")

  drawSprites();
}