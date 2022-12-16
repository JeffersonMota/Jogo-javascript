let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDoCarro4;

//sons
let somMusica;
let somColidiu;
let somrapidocarro;
let somPonto;

function preload(){
    imagemDaEstrada = loadImage("imag/estrada.png")
    imagemDoAtor = loadImage("imag/pessoa.png")
    imagemDoCarro1 = loadImage("imag/carros1.png")
    imagemDoCarro2 = loadImage("imag/carros2.png")
    imagemDoCarro3 = loadImage("imag/carros3.png")
    imagemDoCarro4 = loadImage("imag/carros4.png")
    imagemCarros = [imagemDoCarro1, imagemDoCarro2,           imagemDoCarro3, imagemDoCarro4]
  
  somMusica = loadSound("som/musica.mp3");
  somColidiu = loadSound("som/colidiu.mp3");
  somrapidocarro = loadSound("som/rapidocarro.mp3");
  somPonto = loadSound("som/ponto.mp3");
}