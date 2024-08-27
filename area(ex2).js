let lines = [3.0, 4.0, 5.2];

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);
const PI = 3.14159;

let rectangledTriangle = (1/2) * A * C;
let circle = PI * Math.pow(C, 2);
let trapezium = (1/2) * (A + B) * C;
let square = B * B;
let rectangle = A * B;

console.log(
    "TRIANGULO: " + rectangledTriangle.toFixed(3) + "\n" +
    "CIRCULO: " + circle.toFixed(3) + "\n" +
    "TRAPEZIO: " + trapezium.toFixed(3) + "\n" +
    "QUADRADO: " + square.toFixed(3) + "\n" +
    "RETANGULO: " + rectangle.toFixed(3) + "\n"
);