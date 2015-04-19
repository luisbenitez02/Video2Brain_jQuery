$(document).ready(function(){
	$('#enviar').click(function(){
		//vamos a ejecutar el metodo AJAX
		var v= $('#num').val();//value año, EL DEL VIDEO NO SIRVE el attr captura actual no nuevos cambios
		console.log(v);
		$.ajax({
			async:true,
			type: 'POST',
			dataType: 'html',
			contentType: 'application/x-www-form-urlencoded',
			url: "ajaxcompleto.php",
			data:'anio='+v,
			beforeSend:inicioEnvio,
			success:llegada,
			timeout:4000,
			error:problemas
		});//fin de $.ajax
		return false
	});
	function inicioEnvio(){
		$('#resultados').html('Cargando...');
	};

	function llegada(datos){
		$('#resultados').text(datos);
	};

	function problemas(){
		$('#resultados').text('Problemas en el servidor');
	}
});