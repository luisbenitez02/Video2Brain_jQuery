$(document).ready(function(){
	$("#E").click(function(){
		$("#sexta").mouseover(function(){
			$("#sonidosexta").html("<audio src='song/6E.ogg' autoplay='autoplay'></audio>")
			$(this).css("background","url(img/string2.jpg)");
		});//cuando pase por la cuerda
		//--------------------------
		$("#sexta").mouseout(function(){//este script llama los archivos como si estuviese afuera
			$(this).css("background","url(img/string.jpg)");
		});//cuando sale de la cuerda
		//--------------------------------Sexta cuerda

		$("#quinta").mouseover(function(){
			$("#sonidoquinta").html("<audio src='song/5B.ogg' autoplay='autoplay'></audio>")
			$(this).css("background","url(img/string2.jpg)");
		});//cuando pase por la sexta
		//--------------------------
		$("#quinta").mouseout(function(){
			$(this).css("background","url(img/string.jpg)");
		});//cuando sale de la cuerda
		//--------------------------------
		
		$("#cuarta").mouseover(function(){
			$("#sonidocuarta").html("<audio src='song/4E.ogg' autoplay='autoplay'></audio>")
			$(this).css("background","url(img/string2.jpg)");
		});//cuando pase por la sexta
		//--------------------------
		$("#cuarta").mouseout(function(){
			$(this).css("background","url(img/string.jpg)");
		});//cuando sale de la cuerda
		//--------------------------------

		$("#tercera").mouseover(function(){
			$("#sonidotercera").html("<audio src='song/3Gs.ogg' autoplay='autoplay'></audio>")
			$(this).css("background","url(img/string2.jpg)");
		});//cuando pase por la sexta
		//--------------------------
		$("#tercera").mouseout(function(){
			$(this).css("background","url(img/string.jpg)");
		});//cuando sale de la cuerda
		//--------------------------------

		$("#segunda").mouseover(function(){
			$("#sonidosegunda").html("<audio src='song/2B.ogg' autoplay='autoplay'></audio>")
			$(this).css("background","url(img/string2.jpg)");
		});//cuando pase por la sexta
		//--------------------------
		$("#segunda").mouseout(function(){
			$(this).css("background","url(img/string.jpg)");
		});//cuando sale de la cuerda
		//--------------------------------

		$("#prima").mouseover(function(){
			$("#sonidoprima").html("<audio src='song/1E.ogg' autoplay='autoplay'></audio>")
			$(this).css("background","url(img/string2.jpg)");
		});//cuando pase por la sexta
		//--------------------------
		$("#prima").mouseout(function(){
			$(this).css("background","url(img/string.jpg)");
		});//cuando sale de la cuerda
		//--------------------------------
	});

	$("#F").click(function(){
		
	});

	$("#G").click(function(){
		
	});
});