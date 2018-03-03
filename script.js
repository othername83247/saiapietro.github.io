function arraySearch(arr,val) {
    for (var i=0; i<arr.length; i++)
        if (arr[i] === val)                    
            return i;
    return false;
}
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

$( ".place").click(function(){
	if (typeof x != 'undefined'){
		
		if (x == "#place"  +String(arraySearch(document.querySelectorAll('.place'),this)) + "info"){
		$(x).slideToggle("slow", function(){
		$(x).hide();
		$(x).remove();});}}
	/*else{*/
	x = '#place' + String(arraySearch(document.querySelectorAll('.place'),this)) + 'info'
	$(this).after("<div id = 'place" + String(arraySearch(document.querySelectorAll('.place'),this)) + "info' style = 'display: none;'> <img src='http://onelovemassive.com/wp-content/uploads/2016/10/test-image.png' height = '200' width = '400' class = 'centered'> <p class = 'centered'>Test description</p> </div>")
	/*}*/
	
	$(x).slideToggle("slow", function(){
		
		$(x)['0'].style.display = 'block';
	});
	
	});
	
});

