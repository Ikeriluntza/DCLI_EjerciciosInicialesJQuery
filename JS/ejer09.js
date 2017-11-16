var opcion;

function rellenarCombo() {
	$('#jugadores').html('');
	for (x = 0; x <= localStorage.length - 1; x++) {
		clave = localStorage.key(x);
		$('#jugadores').append(
				"<option value=" + clave + ">" + clave + "</option>");
	}
}

function esconderTodo() {
	$('#jokalaribat').hide();
	$('#jugadores').hide();
	$('#golak').hide();
	$('#guardar').hide();
	$('#sacart').hide();
	$('#labelJokalariak').hide();
	$('#labelGolak').hide();
}

esconderTodo();
rellenarCombo();

$('#jugadorNuevo').click(function() {
	esconderTodo();
	$('#labelJokalariak').show();
	$('#labelGolak').show();
	$('#jokalaribat').show();
	$('#golak').show();
	$('#guardar').show();
	opcion = 'jugadorNuevo';
});

$('#masGoles').click(function() {
	esconderTodo();
	$('#labelJokalariak').show();
	$('#labelGolak').show();
	$('#jugadores').show();
	$('#golak').show();
	$('#guardar').show();
	opcion = 'sumarGoles';
});

$('#quitarjugador').click(function() {
	esconderTodo();
	$('#labelJokalariak').show();
	$('#jugadores').show();
	$('#guardar').show();
	opcion = 'quitarJugador';
});

$('#buscarJugador').click(function() {
	esconderTodo();
	$('#labelJokalariak').show();
	$('#labelGolak').show();
	$('#jokalaribat').show();
	$('#golak').show();
	$('#guardar').show();
	opcion = 'buscarJugador';
});

$('#sacarTodos').click(
		function() {
			esconderTodo();
			$('#sacart').show();
			$('ul').html('');
			for (x = 0; x <= localStorage.length - 1; x++) {
				clave = localStorage.key(x);
				localStorage.getItem(clave);
				$('ul').append(
						"<li>" + clave + " " + localStorage.getItem(clave)
								+ "</li>");
			}
		});
$('#guardar').click(function() {
	switch (opcion) {
	case 'jugadorNuevo':
		$jugadorNuevo = $('#jokalaribat').val();
		$golesNuevo = $('#golak').val();
		localStorage.setItem($jugadorNuevo, $golesNuevo);
		rellenarCombo();
		break;
	case 'sumarGoles':
		$jugadorCombo = $('#jugadores').val();
		$golesViejo = localStorage.getItem($jugadorCombo);
		$golesInput = $('#golak').val();
		$golesDefinitivo = parseInt($golesViejo) + parseInt($golesInput);
		localStorage.setItem($jugadorCombo, $golesDefinitivo);
		rellenarCombo();
		break;
	case 'quitarJugador':
		$jugadorCombo = $('#jugadores').val();
		localStorage.removeItem($jugadorCombo);
		rellenarCombo();
		break;
	case 'buscarJugador':
		$busquedaJugador = $('#jokalaribat').val();
		if (localStorage.getItem($busquedaJugador)) {
			$('#golak').val(localStorage.getItem($busquedaJugador));
		} else {
			alert('Este jugador no existe en la base de datos.');
		}
		break;

	}
});