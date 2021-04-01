var tela = 0;
var largura = 200;
var altura = 45;
var xMenu = 150;
var yMenu1 = 240;
var yMenu2 = 300;
var yMenu3 = 360;
var largura1 = 65;
var altura1 = 30;
var xVoltar = 30;
var yVoltar = 425;

let myFont;
let bg;
let img;
let img1;
let img2;
let img3;
let img4;


function setup() {
  createCanvas(500, 500);
  bg = loadImage('Quadro.png');
  img = loadImage('Adição.png')
  img1 = loadImage('Subtração.png')
  img2 = loadImage('Divisão.png')
  img3 = loadImage('Multiplicação.png')
  img4 = loadImage('Título.png')
}

function preload(){
  myFont = loadFont('Chalkaholic DEMO.otf');
}

function draw() {
  textStyle(BOLD);
  //Tela de Menu
  if ( tela == 0){
    background(bg);
    textFont(myFont)
    image(img4, 145, 30)

    // Menu com três Opções
    // Iniciar o Jogo 
    textAlign(CENTER);
    textSize(26);
    if (mouseX > xMenu && mouseX <xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura ){
      stroke(200);
      fill(74, 121, 89);
      rect(xMenu, yMenu1, largura, altura, 15);
    if (mouseIsPressed){ 
        tela = 1
      }
    }
    fill(255);
    noStroke();
    text("Iniciar", 250, 270);
    
    // Instruções do Jogo
  if (mouseX > xMenu && mouseX <xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura ){
      stroke(200);
      fill(74, 121, 89);
      rect(xMenu, yMenu2, largura, altura, 15);
      if (mouseIsPressed){ 
        tela = 2
      }
    }
    fill(255);
    noStroke();
    text("Instruções", 250, 330)
    
    // Créditos do Jogo
  if (mouseX > xMenu && mouseX <xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura ){
      stroke(200);
      fill(74, 121, 89);
      rect(xMenu, yMenu3, largura, altura, 15);
    if (mouseIsPressed){ 
        tela = 3
      }
    }
    fill(255);
    noStroke();
    text("Créditos", 250, 390)
    
  }
  //Tela do Jogo
  if ( tela == 1){
    background(bg);
    textSize(36);
    fill(255);
    image(img, 70, 320)
    image(img1, 170, 320)
    image(img2, 270, 320)
    image(img3, 370, 320)
    
    if (mouseX > xVoltar && mouseX <xVoltar + largura1 && mouseY > yVoltar && mouseY < yVoltar + altura1 ){
      stroke(200);
      fill(74, 121, 89);
      rect(xVoltar, yVoltar, largura1, altura1, 15);
    if (mouseIsPressed){ 
        tela = 0
      }
  }
    fill(255);
    noStroke();
    textSize(13)
    text("VOLTAR", 60, 445)
}
  //Tela de Instruções
  if ( tela == 2){
    background(bg);
    textSize(36);
    fill(255);
    text("Instruções", 250, 100);
    textSize(16);
    text("Use o mouse para selecionar uma das opções.", 40, 170, 400)
    text("O objetivo do jogo é acertar qual o sinal que corresponde a operação.", 40, 210, 400)
    textSize(12)
    fill(255, 0, 0)
    text("Este jogo é baseado nas habilidades EF03MA03, EF03MA05 e EF03MA08 da BNCC. Estas habilidades tratam da resolução de problemas envolvendo Adição, Subtração, Multiplicação e Divisão.", 40, 400, 400)
    if (mouseX > xVoltar && mouseX <xVoltar + largura1 && mouseY > yVoltar && mouseY < yVoltar + altura1 ){
      stroke(200);
      fill(74, 121, 89);
      rect(xVoltar, yVoltar, largura1, altura1, 15);
    if (mouseIsPressed){ 
        tela = 0
      }
  }
    fill(255);
    noStroke();
    textSize(13)
    text("VOLTAR", 60, 445)
}
  //Tela de Créditos
  if ( tela == 3){
    background(bg);
    textSize(36);
    fill(255);
    text("Créditos", 250,100);
    textSize(20);
    text("VINICIUS SILVA", 250,170);
    text("THIAGO FARIAS", 250,300);
    textSize(16);
    text("Função: Educador", 250,190);
    text("Função: Programador", 250,320);
    textSize(14);
    fill(240);
    text("Estudante de Licenciatura em Pedagogia na Universidade Federal do Rio Grande do Norte.", 40,210, 400);
    text("Estudante do Bacharelado em Ciências e Tecnologia na Universidade Federal do Rio Grande do Norte.", 40,340, 400);
  if (mouseX > xVoltar && mouseX <xVoltar + largura1 && mouseY > yVoltar && mouseY < yVoltar + altura1 ){
      stroke(200);
      fill(74, 121, 89);
      rect(xVoltar, yVoltar, largura1, altura1, 15);
    if (mouseIsPressed){ 
        tela = 0
      }
  }
    fill(255);
    noStroke();
    textSize(13)
    text("VOLTAR", 60, 445)
}
}
