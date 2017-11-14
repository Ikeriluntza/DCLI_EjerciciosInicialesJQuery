$("tr").click(function() {
	$(this).css('background-color', 'red');
	$(this).attr('data-id', 'true');
});

$('#borrar').click(function() {
	$("tr[data-id='true']").each(function() {
		this.remove();
	});
});