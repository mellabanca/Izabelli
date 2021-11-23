var Rexinho, RexinhoCorrendo;

var lugardopezinho, lugardopezinhochaozinho;

var chaozinhoinvisivel;


function preload(){

    RexinhoCorrendo = loadAnimation("trex1.png", "trex3.png", "trex4.png");

    lugardopezinhochaozinho = loadImage("ground2.png");

}


function setup(){
    createCanvas(600,200);

    Rexinho = createSprite(50,160,20,50);

    Rexinho.addAnimation("correndo", RexinhoCorrendo);

    Rexinho.scale = 0.5;

    lugardopezinho= createSprite(200, 180, 400, 20);

    lugardopezinho.addImage("pezinhodolugar", lugardopezinhochaozinho)

    lugardopezinho.x = lugardopezinho.width / 2;

    borda = createEdgeSprites();

    chaozinhoinvisivel = createSprite(100, 190, 400, 10); 

    chaozinhoinvisivel.visible = false;

    //var numero = Math.round(random(1,50));

    //console.log(numero);
}


function draw(){

    background("white");

    //console.log (Rexinho.y);

    lugardopezinho.velocityX = -2
    
    if (lugardopezinho.x < 0){

        lugardopezinho.x = lugardopezinho.width / 2;
    }

    if(keyDown("space") && Rexinho.y >= 150){

        Rexinho.velocityY = -10;

    }
    Rexinho.velocityY = Rexinho.velocityY + 1;

    Rexinho.collide(chaozinhoinvisivel);

    nuvenhador();

    drawSprites();

}

function nuvenhador(){

}