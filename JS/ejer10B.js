tabla = localStorage.getItem('tabla');
objeto = JSON.parse(tabla);

var filas = objeto.filas;
var columnas = objeto.columnas;
var titulo = objeto.titulo;

crearTabla();

function crearTabla() {

	var tituloTabla = $('<h1>' + titulo + '</h1>');
	$('#formutabla').append(tituloTabla);

	var table = $('<table title="' + titulo + '"></table>');
	for (var i = 0; i < filas; i++) {
		row = $('<tr></tr>');
		for (var j = 0; j < columnas; j++) {
			var rowData = $('<td></td>').text(j + 1);
			row.append(rowData);
		}
		table.append(row);
	}

	if ($('table').length) {
		$("#formutabla tr:first").after(row);
	} else {
		$('#formutabla').append(table);
	}
}