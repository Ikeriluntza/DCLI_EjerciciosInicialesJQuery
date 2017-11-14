var numero = Math.round(Math.random() * 50);
var contador = 0;

$('#generarNum').click(function() {
	alert("Tu numero es: " + numero);
	$('#divjuego').show();
});

$('#comprobar').click(function() {
	$valor = parseInt($('#miNumero').val());
	if ($valor == numero) {
		$('#celda' + contador + '').css("background-color", "green");
		alert('Has acertado');
	} else {
		$('#celda' + contador + '').css("background-color", "red");
		contador = contador + 1;
		if ($valor < numero) {
			$('#texto').html('el numero es mayor');
		} else {
			$('#texto').html('el numero es menor');
		}
	}
});