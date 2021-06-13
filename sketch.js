var canvas;
var cat,catImage1,catImage2,catImage3,catImage4;
var mouse,mouseImage1,mouseImage2,mouseImage3,mouseImage4;
var bgImg;

function preload() {
    //load the images here
    catImage1 = loadAnimation ("cat1.png");
    catImage2 = loadAnimation ("cat2.png","cat3.png");
    catImage3 = loadAnimation ("cat4.png");
    mouseImage1 = loadAnimation ("mouse1.png");
    mouseImage2 = loadAnimation ("mouse2.png","mouse3.png");
    mouseImage3 = loadAnimation ("mouse4.png");
    bgImg = loadImage ("garden.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation ("catSitting",catImage1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation ("mouseWalking",mouseImage1);
    mouse.scale = 0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

if (cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("catLastImage",catImage3);
    cat.changeAnimation("catLastImage")
    cat.x = 300;
    cat.scale = 0.2;

    mouse.addAnimation("mouseLastImage",mouseImage3);
    mouse.changeAnimation ("mouseLastImage")
    mouse.scale = 0.2;
    
}
    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
    mouse.addAnimation ("mouseTeasing",mouseImage2);
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 25;
    cat.velocityX = -5;
    cat.addAnimation ("catTeasing",catImage2);
    cat.changeAnimation ("catTeasing")
}

    }

