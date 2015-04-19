$(document).ready(function(){
	$("#enviar").click(function(){
		$('#numero').attr('value');
		$.post('calculadora.php',{numero:v},function(datos){
			alert(datos);
		});
		return false;
		});
});