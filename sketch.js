var dog , happyDog , database , foods , fooodStock;

function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  dog.addImage(dog);
  foodStok = database.ref('food');
  fooodStock.on("value",readStock);
}


function draw() {  
  background("46,19,87");

if (keyWentDown(UP_ARROW)) {
  writeStock(foods);
  dog.addImage(happyDog);
}

  drawSprites();
  text('press UP_ARROW to feed the oreo milk',250,200);
  textSize(32);
  fill(0, 102, 153, 51); 

}

//function to read values from dataBase
function readStock(data){
  foods = data.val();
}

//function to write values in database
function writeStock(x){
  database.ref('dog/foodStock')
}


