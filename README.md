# JuegoPolimorfismo
Proyecto de clase
## Este es un programa en JavaScript que utiliza la biblioteca p5.js para crear una aplicación de juego. El objetivo del juego es hacer clic en un cierto número de figuras (círculos y cuadrados) en un tiempo limitado.
El programa comienza declarando algunas variables globales, incluyendo una matriz llamada "figuras" que contendrá las figuras del juego, un contador para el número de figuras clickeadas, el tiempo de inicio del juego, el tiempo total transcurrido, un límite para el número de figuras que deben ser clickeadas.

La función "Figura" es una clase que define las características y comportamientos generales de una figura. La clase "Circulo" y "Cuadrado" extienden la clase "Figura" y definen comportamientos específicos para dibujar un círculo o un cuadrado en el lienzo del juego.

La función "mouseClicked()" se utiliza para detectar cuándo el usuario ha hecho clic en una figura, y si se hace clic en una figura, se elimina de la matriz "figuras" y se incrementa el contador de figuras clickeadas.
[![captura-UML.png](https://i.postimg.cc/LXM4jNn7/captura-UML.png)](https://postimg.cc/kVfdmNNF)
