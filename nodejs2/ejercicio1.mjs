const { calcularPromedioNotas, mayorNumero, menorNumero } = require("./module1.js");
const { createServer } = require("node:http");


var n1 = 10;
var n2 = 6;
var n3 = 3;

var promedio = calcularPromedioNotas(n1, n2, n3);
var mayor = mayorNumero(n1, n2, n3);  
var menor = menorNumero(n1, n2, n3);

server.listen(8080);
console.log('Servidor ejecutándose en http://localhost:8080/');