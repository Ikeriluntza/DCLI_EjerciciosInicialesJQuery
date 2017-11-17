var cadena = localStorage['tabla'];
var objeto = JSON.parse(cadena);
var numFilas = JSON.parseInt(objeto.filas);
var numColumnas = parseInt(objeto.columnas);
var titulo = objeto.titulo;

var textotabla = "";
