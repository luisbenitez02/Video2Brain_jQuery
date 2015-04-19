$(document).ready(function(){
	$("#boton1").click( function(){
		alert($("p").text());//veremos el contenido de p
	});

	$("#boton2").click( function(){
		$("p").text("Este es un nuevo texto a introducir");//modifica el texto
	});

	//----------------------Atributos .attr()----------------------------------------------
	$("#boton3").click( function(){//leer
		alert($("table").attr("border"));//attr nos devuelve el valor de un atributo
	});

	$("#boton4").click( function(){//escribir
		$("table").attr("border", "4");//el borde se cambio (cambio de atributo)
	});

	$("#boton5").click( function(){
		$("table").removeAttr("border");//vamos a eliminar totalmente en borde con revomeAttr
	});
//--------------------------Añadir y quitar clases- .addClass()--------------------------------------

	$("#boton6").click( function(){
		$("#articulo").addClass("noticia");//vamos a añadir una clase
	});

	$("#boton7").click( function(){
		$("#articulo").removeClass("noticia");//removemos la clase
	});
//-----------------------Agregemos un html .html()-------------------------------------------------
	$("#boton8").click( function(){
		$("#formulario").html("<form> <input type='text'>  <input type='submit'> </form>")
	});
//----------------agrega sin borrar con . append()-----------------------
	$("#boton9").click( function(){
		alert($("#cambiable").text());//veremos el contenido de p
	});

	$("#boton10").click( function(){
		$("#cambiable").append(". Este es un nuevo texto a introducir");//agrega al final
	});

	$("#boton11").click( function(){
		$("#cambiable").prepend("Este es un texto que se adjunta antes. ");//agrega ANTES
	});

	$("#boton12").click( function(){
		$("#cambiable").after("Hola! yo vengo en una nueva linea. ");//agrega EN UNA NUEVA LINEA
	});

	$("#boton13").click( function(){
		$("#cambiable").before("Hola! yo vengo en una nueva linea.(antes) ");//EN UNA NUEVA LINEA (antes)
	});
});