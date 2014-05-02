
$(document).ready(function() {
	
	$(".pinned").pin({
	      containerSelector: "#content"
	})
	
	$(".fancybox").fancybox();
	
	$( "#toggle-clickr" ).click(function() {
	  $( "#toggle" ).show("blind", 1000);
	})
	
	$( "#edu" ).click(function() {
	  $( "#education" ).show("blind", 1000);
	  $( "#software" ).hide("blind", 1000);
	  $( "#freelance" ).hide("blind", 1000);
	  $( "#experience" ).hide("blind", 1000);
	})
	
	$( "#soft" ).click(function() {
	  $( "#education" ).hide("blind", 1000);
	  $( "#software" ).show("blind", 1000);
	  $( "#freelance" ).hide("blind", 1000);
	  $( "#experience" ).hide("blind", 1000);
	})
	
	$( "#free" ).click(function() {
	  $( "#education" ).hide("blind", 1000);
	  $( "#software" ).hide("blind", 1000);
	  $( "#freelance" ).show("blind", 1000);
	  $( "#experience" ).hide("blind", 1000);
	})
	
	$( "#job" ).click(function() {
	  $( "#education" ).hide("blind", 1000);
	  $( "#software" ).hide("blind", 1000);
	  $( "#freelance" ).hide("blind", 1000);
	  $( "#experience" ).show("blind", 1000);
	})

});
