$(document).ready(function() {

	var cabins = [
		{src: 'one', display_price: "$20,000", price: "20000"},
		{src: 'two', display_price: "$30,000", price: "30000"},
		{src: 'three', display_price: "$40,000", price: "40000"},
		{src: 'four', display_price: "$1,000,000", price: "1000000"},
		{src: 'five', display_price: "$250,000", price: "250000"},
		{src: 'six', display_price: "$90,000", price: "90000"},
		{src: 'seven', display_price: "$750,000", price: "750000"},
		{src: 'eight', display_price: "$60,000", price: "60000"},
		{src: 'nine', display_price: "$100,000", price: "100000"},
		{src: 'ten', display_price: "$750,000", price: "750000"},
		{src: 'eleven', display_price: "$60,000", price: "60000"},
		{src: 'twelve', display_price: "$1,000", price: "1000"},
		{src: 'syrup', display_price: "$2", price: "2"},
		{src: 'lincoln', display_price: "$20", price: "20"},
		{src: 'old_cabin', display_price: "$1,000", price: "1000"}
	];

	// Handlebars
	var source   = $("#cabins-template").html();
	var template = Handlebars.compile(source);
	var html     = template({cabins: cabins});

	$('.image-container').html(html);
	console.log(html);


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
