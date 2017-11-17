$('#formutabla').submit(function(evento) {

	var json = {
		"filas" : $('#filas').val(),
		"columnas" : $('#columnas').val(),
		"titulo" : $('#titulo').val()
	}
	
	var cadena = JSON.stringify(json);
	localStorage.setItem('tabla', cadena)

});
