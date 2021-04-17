var catsprite, cat1image
var garden
var catwalkingimage
var jerrysprite, jerrystandingimage
var jerryhappyimage
var jerryfinalimage
var catfinalimage


function preload() {
    cat1image = loadImage("images/cat1.png")
    garden = loadImage("images/garden.png")
    catwalkingimage = loadAnimation("images/cat2.png","images/cat3.png")
    jerrystandingimage = loadImage("images/mouse1.png")
    jerryhappyimage = loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryfinalimage = loadImage("images/mouse4.png")
    catfinalimage = loadImage("images/cat4.png")
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    catsprite = createSprite(800,600)
    catsprite.addImage("catsittingimage",cat1image)
    catsprite.scale = 0.15
    jerrysprite = createSprite(300,600)
    jerrysprite.scale = 0.15
    jerrysprite.addImage("jerrystandingimage",jerrystandingimage)
    //create tom and jerry sprites here

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if (keyDown("LEFT_ARROW")){
        catsprite.velocityX = -4.5
        catsprite.addAnimation("catwalkingimage",catwalkingimage)
        catsprite.changeAnimation("catwalkingimage")
        jerrysprite.addAnimation("jerryhappyimage",jerryhappyimage)
        jerrysprite.changeAnimation("jerryhappyimage")
    }
    if (catsprite.x<375){
        catsprite.velocityX = 0
        catsprite.addAnimation("catfinalimage",catfinalimage)
        catsprite.changeAnimation("catfinalimage")
        jerrysprite.addAnimation("jerryfinalimage",jerryfinalimage)
        jerrysprite.changeAnimation("jerryfinalimage")

    }
    
    
    drawSprites();
}


