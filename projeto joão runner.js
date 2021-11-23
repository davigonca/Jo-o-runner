var path,boy, leftBoundary,rightBoundary,boyRun;
var pathImg,boyImg;
var i;

function preload(){
 pathImg = loadImage("path.png") 
 boyRun = loadAnimation ("Jake1.png","Jake2.png","Jake3.png","Jake4.PNG","jake5.png")// de corrida para o menino
 
}

function setup(){
  
  createCanvas(400,400);
  path = createSprite (200,200,20,20);
  path.addImage(pathImg);
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

boy = createSprite (200,300,60,60);
boy.addAnimation("running",boyRun);
//adicione uma animação de corrida para ele
boy.scale=0.9;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x=mouseX;
  edges= createEdgeSprites();
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
