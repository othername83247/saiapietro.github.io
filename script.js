$( document).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( "#place1info").hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

$( "#place1").click(function(){
	$("#place1info").slideToggle("slow");
});
});
