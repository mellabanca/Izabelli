var trex, trexCorrendo;

var chao, chaofotinha;

var chaoinvisivel;

var nuvenzinhas, nuvenzinhafotinha, grupodenuvens;

var cactosObs, obs1, obs2, obs3, obs4, obs5, obs6, grupodeobs; 

var placar;

var restart = 0;

var jogando = 1;

var estado = jogando;

function preload(){
    trexCorrendo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    
    chaofotinha = loadImage("ground2.png");

    nuvenzinhafotinha = loadImage("cloud.png");

    obs1 = loadImage("obstacle1.png");
    obs2 = loadImage("obstacle2.png");
    obs3 = loadImage("obstacle3.png");
    obs4 = loadImage("obstacle4.png");
    obs5 = loadImage("obstacle5.png");
    obs6 = loadImage("obstacle6.png");

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

    grupodenuvens = new Group();
    grupodeobs = new Group();

    //CONCATENAÇÃO
    //console.log("oi"+" Izabelli");

    //var numeroaleatorio = Math.round(random(1,100));
    //console.log(numeroaleatorio);

    placar = 0;

}

function draw(){

    //cria um fundo branco
    background("white")
    //console.log(frameCount);

    text("Placar: "+ placar, 500, 50);
    
    if(estado === jogando){
        
        placar = placar + Math.round(frameCount/60);

    } else if (estado === restart){

    }

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

    cactos();

    //desenha todos os sprites
    drawSprites();

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
        cactosObs.velocityX = -6;

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