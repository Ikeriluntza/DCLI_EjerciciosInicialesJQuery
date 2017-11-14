var numaleat = 0;
var nummax = 50;
var contador = 0;

//Sacar un numero random

  $('#generarNum').click(function(){
    numaleat = parseInt(Math.round(Math.random() * nummax));
    alert("El numero aleatorio es: " + numaleat);

    $('#divjuego').css("display", "block");
  });
  
  


