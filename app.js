$(document).ready(function() {
	console.log("The document is ready!");


// Background buttons
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

// Low and High Toggle Buttons

// Low Toggle
var lowToggle = function(){
   $('.low').on('click', function(e){
     e.preventDefault();

     var myArray = $("article");
     var count = 0;

     myArray.sort(function (a, b) {
       a = parseInt($(a).attr("data-price"), 10);
       b = parseInt($(b).attr("data-price"), 10);
       count += 2;

       if(a > b) {
           return 1;
       } else if(a < b) {
           return -1;
       } else {
           return 0;
       }
     });
     $(".image-container").append(myArray);
   });
 };

    lowToggle();

// High Toggle
		var highToggle = function(){
		   $('.high').on('click', function(e){
		     e.preventDefault();

		     var myArray = $("article");
		     var count = 0;

		     myArray.sort(function (a, b) {
		       a = parseInt($(a).attr("data-price"), 10);
		       b = parseInt($(b).attr("data-price"), 10);
		       count += 2;

		       if(a > b) {
		           return -1;
		       } else if(a < b) {
		           return 1;
		       } else {
		           return 0;
		       }
		     });
		     $(".image-container").append(myArray);
		   });
		 };

		highToggle();

// Showing One Price Range


	var sortCabin = function(){ $('input[type="checkbox"][value="50000"]').on('click', function(){
		console.log("yes");

		});
	};
	sortCabin();


});
