$(document).ready(function() {

	var cabins = [
		{src: 'one', display_price: "$20,000", price: 20000},
		{src: 'two', display_price: "$30,000", price: 30000},
		{src: 'three', display_price: "$40,000", price: 40000},
		{src: 'four', display_price: "$1,000,000", price: 1000000},
		{src: 'five', display_price: "$250,000", price: 250000},
		{src: 'six', display_price: "$90,000", price: 90000},
		{src: 'seven', display_price: "$750,000", price: 750000},
		{src: 'eight', display_price: "$60,000", price: 60000},
		{src: 'nine', display_price: "$100,000", price: 100000},
		{src: 'ten', display_price: "$750,000", price: 750000},
		{src: 'eleven', display_price: "$60,000", price: 60000},
		{src: 'twelve', display_price: "$1,000", price: 1000},
		{src: 'syrup', display_price: "$2", price: 2},
		{src: 'lincoln', display_price: "$20", price: 20},
		{src: 'old_cabin', display_price: "$1,000", price: 1000}
	];

	// Handlebars
	var source   = $("#cabins-template").html();
	var template = Handlebars.compile(source);
	setCabins(cabins);


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
// Sort by high and low
	// Sort Low
	$('.low').on("click", function(e){
		e.preventDefault();
		var lowSorted = _.sortBy(cabins, 'price');
		setCabins(lowSorted);
	});
	// Sort High
	$('.high').on("click", function(e){
		e.preventDefault();
		var highSorted = _.sortBy(cabins, 'price').reverse();
		setCabins(highSorted);
	});

	$('.filters').on('click', 'input[type="checkbox"]', function(e) {
	  // find the parent element
	  var checkboxes = $(e.delegateTarget)
	    // find all of the checkboxes
	    .find('input[type="checkbox"]')
	    // grab the checkedness and value
	    .map(function(index, elem) {
	      var jqElem = $(elem);
	      return {
	        checked: jqElem.prop('checked'),
	        price: +jqElem.attr('value')
	      };
	    // pull out the results
	    }).get();
	  // make sure at least one checbox is checked
	  if (!_.any(checkboxes, 'checked')) {
	    setCabins(cabins);
	    return;
	  }
	  // filter cabins
	  var filtered = _.filter(cabins, function(cabin) {
	    // see if the cabin price is in range of any of the checkboxes
	    return _.any(checkboxes, function(checkbox, index) {
	      if (!checkbox.checked) { return false; }
	      // grab the previous checkbox
	      var previous = checkboxes[index - 1];
	      // make sure that were above the lower range
	      var greaterThanPrev;
	      // if previous exists checkbox, make sure were above it's price
	      if (previous) { greaterThanPrev = cabin.price > previous.price; }
	      // if it doesn't exist, assume there is no bottom threshold
	      else          { greaterThanPrev = true; }
	      // return whether or not we are in range
	      return greaterThanPrev && cabin.price <= checkbox.price;
	    });
	  });
	  // update the page
	  setCabins(filtered);
	});






	function setCabins(newCabins){
		var html = template({cabins: newCabins});
		$('.image-container').html(html);
	}

	// Filter different price ranges
	$('.filters input[type="checkbox"]').on("click", function() {

		console.log(this.value);
	});
});
