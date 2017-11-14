var x = 20;
var y = 10;

$('a').hover(function(e) {

	var href = $(this).attr('href');
	var nuevoElemento = $(document.createElement('img'));
	nuevoElemento.attr('src', href);
	nuevoElemento.attr('id', 'largeImage');
	var posX = e.pageX + x;
	var posY = e.pageY + y;
	nuevoElemento.css('top', posY);
	nuevoElemento.css('left', posX);
	$(nuevoElemento).appendTo('body');
}, function() {
	$('#largeImage').remove();
});

$('a').mousemove(function(e) {
	$("#largeImage").css('top', e.pageY + y).css('left', e.pageX + x);
});
