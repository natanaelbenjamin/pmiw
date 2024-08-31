// cruz, natanael benjamin
// comision 2
//https://youtu.be/MNYofyPjobU
let miFoto;
let cant;
let tamCuadrado;
let relleno;
let texto;
let habilitar;


function preload() {
  miFoto = loadImage('data/miFoto.jpg');
}

function setup() {
  createCanvas(800, 400);
  textSize(20);
  cant = 100;
  tamCuadrado = 50;
  background(0);
  relleno = color(255, 255, 255);
  habilitar = false;
  texto = guiaComandos("mouse de izquierda a derecha", "pulsa d", "pulsa h");
}

function draw() {
  background(255);

  //grilla de filas
  let mover = 0;
  for (let i = 0; i < cant; i++) {
    for (let j = 0; j < cant; j++) {

      dibujarFilas(i, j, mover, relleno);
    }
  }

  image(miFoto, 0, 0, 400, 400);

  //guia de comandos texto
  if (frameCount/60 >= 2 && frameCount/60 <= 8) {
    noStroke();
    fill(255, 0, 0);
    text(texto, 8, 333);
  }
}

function keyPressed() {
  if (key === 'h') {
    frameCount = 0;
    mouseX = 0;
    mouseY = 0;
    relleno = color(255, 255, 255);
  }

  if (key === 'd') {
    habilitar = !habilitar;
    if (habilitar) {
      relleno = color(random(255), random(255), random(255));
    } else {
      relleno = color(255, 255, 0);
    }
  }
}
