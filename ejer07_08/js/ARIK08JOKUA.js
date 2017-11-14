palabra = "AZTERKETA";

$('#berria').click(function() {
	$('#juego').css("display", "none");
	$('#hitzberria').css("display", "block");

});

$('#asmatu').click(function() {
	$('#hitzberria').css("display", "none");
	$('#juego').css("display", "block");

});

$('#formuhitza').submit(function() {
	alert($('#idatzih').val());
	$palabra = $('#idatzih').val();

	for (i = 0; i < $palabra.length; i++) {
		$('body').HTML("<button>" + letras[i]) + "</button>";
	}
});


