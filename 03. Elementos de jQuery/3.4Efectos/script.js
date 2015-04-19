$(document).ready(function(){
//---------------Despliegue de punta superior---------------------------
	//NOTA: Si no queremos animacion dejamos en blanco parametros
	$("#mostrar").click(function(){
		$("#objetivo").show("fast");//tambien esta slow(lento)
	});

	$("#ocultar").click(function(){
		$("#objetivo").hide("fast");
	});
//--------------Con desvanecido------------------------------------------------
	$("#mostrar1").click(function(){
		$("#objetivo").fadeIn("slow");//tambien esta slow(lento)
	});

	$("#ocultar1").click(function(){
		$("#objetivo").fadeOut("slow");
	});
//--------------Opacidad Controlada------------------------------------------------
	$("#mostrar2").click(function(){
		$("#objetivo").fadeTo("slow",1);
	});

	$("#ocultar2").click(function(){
		$("#objetivo").fadeTo("slow",0.3);
	});
//-------------Toogle (todo el uno)-------------------------------------------------
	$("#mostrar3").click(function(){
		$("#objetivo").toggle("slow");
	});
//-------------Slide-------------------------------------------------------------------
	//Con slideUp()
	$("#ocultar4").click(function(){
		$("#objetivo").slideUp("slow");
	});

	$("#mostrar4").click(function(){
		$("#objetivo").slideDown("slow");
	});

	//Con slideToggle()
	$("#mostrar5").click(function(){
		$("#objetivo").slideToggle("slow");
	});

//---------------Animacion Personalizada--------------------------------------------------------------
	$("#animar").click(function(){
		$('#objetivo').animate({height:300},"slow");//animate({propiedad css},duration);
		$('#objetivo').animate({width:300},"fast");
		$('#objetivo').animate({height:100},"normal");
		$('#objetivo').animate({width:100},1000);//duracion representada en ms
		$('#objetivo').animate({height:200},2000);
		$('#objetivo').animate({width:600},500);
	});
});