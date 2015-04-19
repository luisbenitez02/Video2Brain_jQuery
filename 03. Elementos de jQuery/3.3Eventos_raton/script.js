$(document).ready( function(){
//------------Efecto de entrada y Salida---------------------------------------------------------
	$('#hola').mouseover(function(){
		$(this).css('background-color','yellow');
	});
	$('#hola').mouseout(function(){
		$(this).css('background-color','#336699');
	});
		//NOTA: si el mouse no ha pasado en ningun momento se toma estilo definido

//------------------Evento Hover (mouseover y mouseout juntos)------------------------------------
	//en un solo evento gestiona entrada y salida ESTE ES MEJOR PARA USAR LOS DOS
	$('#hola2').hover(
		function(){//primer parametro (entrada)
			$(this).css('background-color','#A9F5F2');
		},function(){//segundo parametro (salida)
			$(this).css('background-color','#F5F6CE');
		}
	);//fin del evento .hover

//----------Mousemove (cuando se mueve el mouse)--------------------------------------------------
	//TENEMOS POR OBLIGACION que pasarle event a la funcion inicial
	$(this).mousemove(function(event){//el documento completo $(document)
		//NOTA: EL NOMBRE EVENTO CAMBIO clientx ahora es pagex igual pasa con y
		$('#xi').text(" "+ event.pageX);

		$('#yi').text(" "+ event.pageY);
	});
//------MouseUp y MouseDown (capturamos cuando hacemos click y cuando lo soltamos)----------------
	$("#hola3").mousedown(function(){
		$(this).css('background-color','#A9F5BC');//cambia el color a verde mientras lo pulso
	});
	$("#hola3").mouseup(function(){
		$(this).css('background-color','#D8D8D8');//cuando lo suelto cambio a color gris
	});

//----------------------doble click .doubleclick()-----------------------------------------------
	$('#hola4').click(function(){
		$(this).css('background-color','#2ECCFA');
	});

	$('#hola4').dblclick(function(){
		$(this).css('background-color','#FACC2E');
	});
//----------------Evento Focus, cuando se selecciona---------------------------------------
	$('#dos').focus(function(){
		//recuerda que attr modifica cualquier valor del la etiqueta html
		$(this).attr("value","");
	});
//--------------Focus se puede complementar con Blur (cuando pierda el foco)------------------
	$('#dos').blur(function(){
		//recuerda que attr modifica cualquier valor del la etiqueta html
		$(this).attr("value","user@example.co");
	});
});