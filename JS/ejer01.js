$("#accordion > li > div").click(function() {
	$(this).next().slideToggle(300);
});

$("#evclick").click(function() {
	alert("Parece que has pinchado en click");
	$("section").html("<h1>ESTE ES EL LUGAR DE ESCRIBIR</h1>");
});

$("#evmouseover").mouseover(function() {
	$("section").addClass("estilosection");
});

$("section").mouseover(function() {
	$("section").addClass("estilosection2");
});

$("section").mouseout(function() {
	$("section").removeClass("estilosection2");
});

$("#evhide").click(function() {
	$("section").hide();
});

$("#evshow").click(function() {
	$("section").show();
});

$("#evfade").click(function() {
	$("section").fadeOut();
	$("section").fadeIn();
});

$("#evcss").click(function() {
	$("section").addClass("estilosection3");
});
