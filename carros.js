// CARRO 
let xCarro = [1, 150, 350, 600];
let yCarro = [320, 230, 130, 30]
let velocidadeCarros = [2, 3, 2.5, 9]
let comprimentoCarro = 80;
let alturaCarro = 80;

function mostraCarro(){
  for (let i=0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarro[i], yCarro[i], comprimentoCarro, alturaCarro)
  }
}
function movimentoCarro(){
  for (let i=0; i < imagemCarros.length; i++){
  xCarro[i] -= velocidadeCarros[i];
  
  }
}

function voltarPosicaoInicialDoCarro(){
  for (let i=0; i < imagemCarros.length; i++){
  if(passouTodaTela(xCarro[i])){
   xCarro[i] = 600;      
  }
  }
}
function passouTodaTela(xCarro){
  return xCarro < - 50;
}

