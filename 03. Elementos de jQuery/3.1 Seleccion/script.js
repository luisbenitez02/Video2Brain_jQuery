//cuando el documento este listo
$(document).ready(function(){
	//seleccionamos con el id
	$('#hola').click( function(){
		$(this).css("color","red");
		$(this).css("background-color","yellow");
		$(this).css("font-size","24px");
		$(this).css("border","1px solid black");
		//$(this).css("height","320px");
		//$(this).css("width","320px");
	});

	//seleccionamos con la etiqueta del elemento
	$('input').click( function(){
		$('.primary').css("background-color", "yellow");//seleccionamos con clase
	});
/*----------------------Seleccion mediante atributos-------------------------------------*/
	$('#revelar').click( function(){
		//hacemos la seleccion mediante atributo con []
		$("[href='#']").css("background-color", "green");
		//podemos seleccionar todos solo con[href] o filtrar "[href='#']"
	});
		//ahora macarmos los que sean diferentes de #
	$('#revelar').click( function(){
		$("[href!='#']").css("background", "yellow");//MARCA TODO!!!
	});
		//Vamos a mostar los que contengan .jpg
	$('#revelar').click( function(){
		$("[href$='.jpg']").css("background", "white");
	});

/*---------------------------Seleccion Multiple (mas exacta)---------------------------------------*/
	$('#titulos').click( function(){
		$("h1#yocambiare").css("background", "blue");
	});

	$('#titulos').click( function(){
		$("li:first").css("background", "purple");//el primer elemento de la lista
	});

});
/*------------OTRA FORMA DE HACERLO (solo video 3.1.2)-----------------*/
/*
var x;
x=$(document);
x.ready(inicializar){
	var x;
	x=$("#hola");
	x.click(clickHecho);
}

function clickHecho(){
	var x;
	x=$("#hola");
	x.css("color","red");
}
*/