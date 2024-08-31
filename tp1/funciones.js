function dibujarFilas (i, j, mover, relleno2) {
  let posX = i*tamCuadrado;
  let posY = j*tamCuadrado;

  let distancia = dist(400, mouseY, posX, posY);
  let transparencia = map(distancia, 0, 800, 255, 0);

  let limite = floor (map(mouseX, 0, -800, 0, 200));


  //grilla alternancia blanco y negro par e impar
  if ((i+j)%2 === 0) {
    fill(red(relleno2), green(relleno2), blue(relleno2), transparencia);
  } else {
    fill(0);
  }
  //filas impares quitando dos filas impares
  //filas 6, fila 8
  if (j%2 !== 0 && j !== 3 && j !== 1) {
    mover = 24 - limite;
    rect(posX + mover, posY, tamCuadrado, tamCuadrado);
  }
  //filas pares quitando dos filas pares
  //fila 1, fila 5
  if (j%2 === 0 && j !== 2 && j !== 6) {
    mover = 60 + limite;
    rect(posX + mover, posY, tamCuadrado, tamCuadrado);
  }
  //fila 7, fila 3
  if (j === 6 || j === 2) {
    mover = 90 + limite;
    rect(posX + mover, posY, tamCuadrado, tamCuadrado);
  }
  //fila 4, fila 2
  if (j === 3 || j === 1) {
    mover = 24 - limite;
    rect(posX + mover, posY, tamCuadrado, tamCuadrado);
  }
  // color borde y grosor
  strokeWeight(3);
  stroke(170);
}

function guiaComandos (mouse, letra2, letra3) {
  let guia = "mover filas: " + mouse + "\ncambia color: " + letra2 + "\nreinicio: " + letra3;
  return guia;
}
