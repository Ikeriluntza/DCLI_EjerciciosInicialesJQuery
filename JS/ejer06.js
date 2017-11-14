$('#letraa').click(function() {

	$('#lista').hide().load('ejer06_A.html', function() {
		$(this).slideDown(1000);
	})
});

$('#letral').click(function() {
	$('#lista').hide().load('ejer06_B.html', function() {
		$(this).slideDown(1000);
	})
});