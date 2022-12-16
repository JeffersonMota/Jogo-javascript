let yAtor = 410;
let xAtor = 150;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 60, 60)
 }
function movimentoAtor(){
   if (keyIsDown(UP_ARROW)) {
    yAtor -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarro[i], yCarro[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      somColidiu.play();
      somrapidocarro.play();
      voltaAtorInicio();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorInicio(){
  yAtor = 410;
}
function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255, 240, 60);
  text(meusPontos, width / 3, 24);
}
function marcaPonto(){
  if (yAtor < -25){
    meusPontos += 1;
    somPonto.play();
    voltaAtorInicio();
  }
}

function pontosMaiorQueZero(){
    return meusPontos > 0;
} 
function podeSeMover(){
    return yAtor < 410;
}