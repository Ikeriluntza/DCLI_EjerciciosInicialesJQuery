$palabra = "AZTERKET";



$('#berria').click(function() {
	$('#juego').css("display", "none");
	$('#hitzberria').css("display", "block");

});

$('#asmatu').click(function() {
	$('#hitzberria').css("display", "none");
	$('#juego').css("display", "block");

	
	for (i = 0; i < $palabra.length; i++) {
        $('#cuadros').append(
                '<div class="cuadritos" value="' + $palabra[i] + '"></div>');
    }	
	
});

$('#formuhitza').submit(function() {
	alert($('#idatzih').val());
	$palabra = $('#idatzih').val();

});


