var numaleat = 0;
var nummax = 50;
var contador = 0;

//Sacar un numero random

  $('#generarNum').click(function(){
    numaleat = parseInt(Math.round(Math.random() * nummax));
    alert("El numero aleatorio es: " + numaleat);

    $('#divjuego').css("display", "block");
  });
  
  $('#comprobar').click(function(){
	    var numEscrito = parseInt($('#miNumero').val());
  
	    if (numEscrito == numaleat){
	    	alert("Numero correcto");
	    }else{
	    	alert("Numero incorrecto");
	    }
  
  
  });


