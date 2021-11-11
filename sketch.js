var trex, trexCorrendo;
var chao, chaofotinha;
function preload(){
trexCorrendo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
chaofotinha = loadImage("ground2.png");
}
function setup(){
createCanvas(600,200);
trex = createSprite(50,160,20,50);
trex.addAnimation("correndo", trexCorrendo);
trex.scale = 0.5;
borda = createEdgeSprites();
chao = createSprite(200, 180, 400, 20);
chao.addImage ("chao", chaofotinha);
chao.x = chao.width/2;
}
function draw(){
//cria um fundo branco
background("white")
//fazendo o trex pular
if(keyDown("space")){
trex.velocityY = -10;
}
//sistema de gravidade
trex.velocityY = trex.velocityY + 1;
//impede que o trex caixa
trex.collide(chao);
chao.velocityX = -2;
if(chao.x < 0){
chao.x = chao.width/2;
}
//desenha todos os sprites
drawSprites();
}