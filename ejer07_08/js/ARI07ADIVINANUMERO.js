var numaleat = 0;
var nummax = 50;
var contador = 0;

// Sacar un numero random

$('#generarNum').click(function() {
	numaleat = parseInt(Math.round(Math.random() * nummax));
	alert("El numero aleatorio es: " + numaleat);

	$('#divjuego').css("display", "block");
});

$('#comprobar').click(function() {
	$valor = parseInt($('#miNumero').val());
	if ($valor == $numero) {
		alert('Has acertado');
	} else {
		$('#celda' + $contador + '').css("background-color", "red");
		$contador = $contador + 1;
		if ($valor < $numero) {
			$('#texto').html('el numero es mayor');
		} else {
			$('#texto').html('el numero es menor');
		}
	}
});
