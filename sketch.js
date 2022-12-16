function setup() {
  createCanvas(500, 437);
  somMusica.loop();

}

function draw() {
background(imagemDaEstrada);
mostraAtor();
mostraCarro();
movimentoCarro();
movimentoAtor();
voltarPosicaoInicialDoCarro();
verificaColisao();
incluiPontos();
marcaPonto();
}


