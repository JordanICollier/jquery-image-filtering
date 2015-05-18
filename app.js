$(document).ready(function() {
	console.log("The document is ready!");

	$(".dark").on("click", function(){
		$('body').css('background', '#000 url(img/dark_wood.png) repeat');
	});

	$(".light").on("click", function(){
		$('body').css('background', '#000 url(img/tileable_wood_texture.png) repeat');
	});

	$(".forest").on("click", function(){
		$('body').css('background', '#000 url(img/forest.jpg) repeat');
		$('body').css('background-size', "cover");
	});




});
