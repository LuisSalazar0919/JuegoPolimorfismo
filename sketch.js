let figuras = [];
let contadorFiguras = 0;
let tiempoInicio;
let tiempoTotal = 0;
let limiteFiguras = 40;
let inicioJuego = true;
let botonReinicio;

function setup() {
  createCanvas(500, 500);
  tiempoInicio = millis();
  botonReinicio = createButton('Reiniciar juego');
  botonReinicio.position(width / 2 - 50, height / 2);
  botonReinicio.hide();
}

function draw() {
  background(220);
  textSize(20);
  textAlign(CENTER);
  text(`Figuras: ${contadorFiguras}/${limiteFiguras}`, width/2, 30);
  if (inicioJuego) {
    tiempoTotal = 0;
    for (let i = 0; i < 50; i++) {
      let figura;
      if (random(1) < 0.5) {
        figura = new Circulo(random(width), random(height), random(25, 30));
      } else {
        figura = new Cuadrado(random(width), random(height), random(25, 30));
      }
      figuras.push(figura);
    }
    inicioJuego = false;
  }

  for (let i = 0; i < figuras.length; i++) {
    figuras[i].mover();
    figuras[i].dibujar();
    for (let j = i + 1; j < figuras.length; j++) {
      figuras[i].colision(figuras[j]);
    }
    if (figuras[i].estaClickeada(mouseX, mouseY)) {
      figuras.splice(i, 1);
      contadorFiguras++;
    }
  }

  tiempoTotal = millis() - tiempoInicio;
  textSize(20);
  textAlign(CENTER);
  text(`Tiempo: ${ceil(tiempoTotal/1000)} segundos`, width - 100, height - 20);

  if (contadorFiguras === limiteFiguras) {
    noLoop();
    botonReinicio.show();
  }
}

// Clase para figuras
class Figura {
  constructor(x, y, tam) {
    this.x = x;
    this.y = y;
    this.tam = tam;
    this.velX = random(1, 5);
    this.velY = random(1, 5);
    this.color = color(random(255), random(255), random(255));
  }

  mover() {
    this.x += this.velX;
    this.y += this.velY;

    if (this.x < 0 || this.x >= width) {
      this.velX *= -1;
    }

    if (this.y < 0 || this.y >= height) {
      this.velY *= -1;
    }
  }

  dibujar() {
    noStroke();
    fill(this.color);
  }

  colision(otraFigura) {
    let distancia = dist(this.x, this.y, otraFigura.x, otraFigura.y);
   
if (distancia < this.tam/2 + otraFigura.tam/2) {
let tempX = this.velX;
let tempY = this.velY;
this.velX = otraFigura.velX;
this.velY = otraFigura.velY;
otraFigura.velX = tempX;
otraFigura.velY = tempY;
}
}

estaClickeada(x, y) {
let distancia = dist(this.x, this.y, x, y);
return distancia < this.tam / 2;
}
}

// Clase para círculos
class Circulo extends Figura {
constructor(x, y, tam) {
super(x, y, tam);
}

dibujar() {
super.dibujar();
ellipse(this.x, this.y, this.tam);
}
}

// Clase para cuadrados
class Cuadrado extends Figura {
constructor(x, y, tam) {
super(x, y, tam);
}

dibujar() {
super.dibujar();
rect(this.x, this.y, this.tam, this.tam);
}
}

function mouseClicked() {
for (let i = 0; i < figuras.length; i++) {
if (figuras[i].estaClickeada(mouseX, mouseY)) {
figuras.splice(i, 1);
contadorFiguras++;
}
}
}

function reiniciarJuego() {
  figuras = [];
  contadorFiguras = 0;
  tiempoInicio = millis();
  inicioJuego = true;
  botonReinicio.hide();
  setup();
  inicioJuego = false;
}