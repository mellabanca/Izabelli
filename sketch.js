var trex, trexCorrendo, trexbateu, checkpoint, trexpulandoSom;

var chao, chaofotinha;

var chaoinvisivel;

var nuvenzinhas, nuvenzinhafotinha, grupodenuvens;

var cactosObs, obs1, obs2, obs3, obs4, obs5, obs6, grupodeobs; 

var placar;

var restart = 0;

var jogando = 1;

var gameover, gameoverimage, gameoverSom;

var resetar, resetarimage;

var estado = jogando;

var mensagem = "isso é uma mensagem";

function preload(){

    //carrega as animações
    trexCorrendo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    
    trexbateu = loadAnimation("trex_collided.png");

    //carrega as imagem
    chaofotinha = loadImage("ground2.png");

    nuvenzinhafotinha = loadImage("cloud.png");

    resetarimage = loadImage("restart.png");

    gameoverimage = loadImage("gameOver.png");

    obs1 = loadImage("obstacle1.png");
    obs2 = loadImage("obstacle2.png");
    obs3 = loadImage("obstacle3.png");
    obs4 = loadImage("obstacle4.png");
    obs5 = loadImage("obstacle5.png");
    obs6 = loadImage("obstacle6.png");

    checkpoint = loadSound("checkPoint.mp3");

    trexpulandoSom = loadSound("jump.mp3");

    gameoverSom = loadSound("die.mp3");

}

function setup(){

    //cria a tela
    createCanvas(600,200);

    trex = createSprite(50,160,20,50);
    trex.addAnimation("correndo", trexCorrendo);
    trex.addAnimation("bateu", trexbateu);
    trex.scale = 0.5;

    borda = createEdgeSprites();

    chao = createSprite(200, 180, 400, 20);
    chao.addImage ("chao", chaofotinha);
    chao.x = chao.width/2;

    chaoinvisivel = createSprite(200, 190, 400, 10);
    chaoinvisivel.visible = false;

    gameover = createSprite(300, 100);
    gameover.addImage(gameoverimage);
    gameover.scale = 0.5;

    resetar = createSprite(300, 140);
    resetar.addImage(resetarimage);
    resetar.scale = 0.5;

    grupodenuvens = new Group();
    grupodeobs = new Group();

    //CONCATENAÇÃO
    //console.log("oi"+" Izabelli");

    //var numeroaleatorio = Math.round(random(1,100));
    //console.log(numeroaleatorio);

    placar = 0;

    //configura o colisor do trex
    trex.setCollider("circle",0,0,40);
    //trex.debug = true;

}

function draw(){

    //console.log(mensagem);

    //cria um fundo branco
    background("white")
    //console.log(frameCount);

    text("Placar: "+ placar, 500, 50);

    //console.log("isto é:"+estado);
    

    //as condiçoes do jogo
    if(estado === jogando){
        
        placar = placar + Math.round(frameCount/60);
        if(placar > 0 && placar % 100 === 0){
            checkpoint.play();

        }


        if(keyDown("space") && trex.y >= 150){
            trex.velocityY = -12;
            trexpulandoSom.play();

        }

        //sistema de gravidade
        trex.velocityY = trex.velocityY + 1;

        chao.velocityX = -(2 + placar/100);

        if(chao.x < 0){
            chao.x = chao.width/2;
        }

        nuvenzinhasAleatorias();

        cactos();

        if(grupodeobs.isTouching (trex)){

            estado = restart;
            gameoverSom.play();

        }

    } else if (estado === restart){

        grupodeobs.setVelocityXEach (0);

        grupodenuvens.setVelocityXEach (0);

        chao.velocityX = 0;

        trex.changeAnimation("bateu", trexbateu);

        grupodenuvens.setLifetimeEach(-1);

        grupodeobs.setLifetimeEach(-1);

        trex.velocityY = 0;
        

    }

    //console.log(trex.y);

    //impede que o trex caixa
    trex.collide(chaoinvisivel);

    if(mousePressedOver(resetar)){
        reset();
    }

    //desenha todos os sprites
    drawSprites();

}

function reset(){
    
}

function nuvenzinhasAleatorias(){

    if(frameCount % 60 === 0){

        nuvenzinhas = createSprite (600, 100, 40, 10);
        nuvenzinhas.addImage(nuvenzinhafotinha);
        
        nuvenzinhas.y = Math.round(random (10, 100));
        nuvenzinhas.velocityX = -3;
        
        nuvenzinhas.depth = trex.depth;

        trex.depth = trex.depth + 1;

        grupodenuvens.add(nuvenzinhas);

        nuvenzinhas.lifetime = 250;
        
    }

}

function cactos(){

    if(frameCount % 60 === 0){

        cactosObs = createSprite (600, 165, 10, 40);
        cactosObs.velocityX = -(6 + placar/100);

        var um = Math.round(random(1, 6));

        switch(um){
            
            case 1: cactosObs.addImage(obs1);
            break;
            case 2: cactosObs.addImage(obs2);
            break;
            case 3: cactosObs.addImage(obs3);
            break;
            case 4: cactosObs.addImage(obs4);
            break;
            case 5: cactosObs.addImage(obs5);
            break;
            case 6: cactosObs.addImage(obs6);
            break;
            default: break;
        }

        cactosObs.scale = 0.5;

        grupodeobs.add(cactosObs);

        cactosObs.lifetime = 250;

    }



}