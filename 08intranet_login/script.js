$(document).ready(function(){
	$("#login").dialog({height:320,width:320});
	$("#boton").button();
	$("#boton").click(function(){
		var user=$("#user").val();
		var pass=$("#pass").val();
		//console.log(user+":"+pass);

		if(user=="luis" & pass=="1234"){
			//console.log("Pase");
			alert("Contraseña y usuario correctos, pero aun no esta listo");
		}else {
			$("#login").effect("shake");
		}
	});
});