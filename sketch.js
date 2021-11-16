var trex, trexCorrendo;

var chao, chaofotinha;

var chaoinvisivel;

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

    chaoinvisivel = createSprite(200, 190, 400, 10);
    chaoinvisivel.visible = false;

    var numeroaleatorio = Math.round(random(1,100));
    console.log(numeroaleatorio);

}

function draw(){

    //cria um fundo branco
    background("white")

    //console.log(trex.y);

    //fazendo o trex pular
    if(keyDown("space") && trex.y >= 150){
        trex.velocityY = -10;
    }

    //sistema de gravidade
    trex.velocityY = trex.velocityY + 1;

    //impede que o trex caixa
    trex.collide(chaoinvisivel);
    chao.velocityX = -2;
    if(chao.x < 0){
        chao.x = chao.width/2;
    }

    nuvenzinhasAleatorias();

    //desenha todos os sprites
    drawSprites();

}

function nuvenzinhasAleatorias(){

}