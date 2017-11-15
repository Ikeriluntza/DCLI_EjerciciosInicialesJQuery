palabra = "AZTERKETA";
longitud = palabra.length;
nuevoelem = "";
contador = 0;

$('#berria').click(function() {
	$('#juego').css("display", "none");
	$('#hitzberria').css("display", "block");
});

$('#asmatu').click(
		function() {
			$('#hitzberria').css("display", "none");
			$('#juego').css("display", "block");
			for (i = 0; i < $palabra.length; i++) {
				$('#cuadros').append(
						'<div class="cuadritos" id="' + i + '" value="'
								+ $palabra[i] + '"></div>');
			}
		});

$('#formuhitza').submit(function() {
	alert($('#idatzih').val());
	$palabra = $('#idatzih').val();
});

$('#formucomprobar').submit(function() {
	$letra = $('#letra').val();
	$palabraResul = $('#palabraadiv').val();

	if ($palabraResul != '') {
		alert($palabraResul);
		if ($palabraResul == $palabra) {
			alert('Has acertado en '+ contador + ' intentos.');
			for (i = 0; i < $palabra.length; i++) {
				$('#' + i + '').html($palabra[i]);
			}
		} else {
			contador = contador + 1;
		}
	} else {
		alert($letra);
		for (i = 0; i < $palabra.length; i++) {
			if ($letra == $palabra[i]) {
				$('#' + i + '').append($letra);
			}
		}
		contador = contador + 1;
		$('#veces').val(contador);
	}

});
