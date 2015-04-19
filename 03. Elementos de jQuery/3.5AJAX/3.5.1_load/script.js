$(document).ready(function(){
	$("a").click(function(){
		var one= $(this).attr("href");
		$("#hablame").load(one);
		return false
	});
});