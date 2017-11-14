$("li").click(function() {
	$(this).css('color', 'red');
	$(this).attr('data-id', 'true');
});

$('#boton').click(function() {
	$total = 0;

	$("li[data-id='true']").each(function() {
		$valor = parseInt($(this).text());
		$total = $total + $valor;
	});

	$('#resul').html($total);
	$total = 0;
});