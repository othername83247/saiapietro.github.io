function arraySearch(arr,val) {
    for (var i=0; i<arr.length; i++)
        if (arr[i] === val)
            return i;
    return false;
}
$( document).ready(function() {
//$('#mainpage').hide()
//$( "#mainpage").fadeOut("slow", function(){})
/*
setTimeout(
  function()
  {
    //do something special
  }, 5000);
*/

$( "#welcome-message").fadeIn(1500, function(){
	$( "#are-you-a").fadeIn(1000, function(){
		$( "#welcome-button").fadeIn(1000);
	});
});
/*
$(".btn").click(function(){
	$('#welcome').fadeOut(1000, function(){
		$('#mainpage').fadeIn(1000)
	});
});
*/
/* old menu stuff
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
*/
$( ".place").click(function(){
	/* no
if (typeof x != 'undefined'){

		if (x == "#place"  +String(arraySearch(document.querySelectorAll('.place'),this)) + "info"){
		$(x).slideToggle("slow", function(){
		$(x).hide();
		$(x).remove();});}}
	else{
	x = '#place' + String(arraySearch(document.querySelectorAll('.place'),this)) + 'info'
	$(this).after("<div id = 'place" + String(arraySearch(document.querySelectorAll('.place'),this)) + "info' style = 'display: none;'> <img src='http://onelovemassive.com/wp-content/uploads/2016/10/test-image.png' height = '200' width = '400' class = 'centered'> <p class = 'centered'>Test description</p> </div>")
	}

	$(x).slideToggle("slow", function(){

		$(x)['0'].style.display = 'block';
	});

	});
	*/
	x = '#place' + String(arraySearch(document.querySelectorAll('.place'),this)) + 'info'
	if (String(arraySearch(document.querySelectorAll('.info'),$(x)['0'])) == 'false'){
		$(this).after("<div id = 'place" + String(arraySearch(document.querySelectorAll('.place'),this)) + "info' style = 'display: none;' class = 'info'> <img src='http://onelovemassive.com/wp-content/uploads/2016/10/test-image.png' height = '200' width = '400' class = 'centered'> <p class = 'centered'><span>Test description&nbsp;</span><a href = ''>Learn more</a></p> </div>")
	}
	$(x).slideToggle("slow")

});
$('#donator').click(function(){
  $('#welcome').fadeOut(1000, function(){
    $('#location').fadeIn(1000, function(){
      $('#itemfilter').fadeIn(1000)
    });
  });
});
$('#submitdonator').click(function(){
  $('#filterpage').fadeOut(1000, function(){
    $('#mainpage').fadeIn(1000)
  });
});
$('#donation').click(function(){
  $('#welcome').fadeOut(1000, function(){
    $('#name').fadeIn(1000, function(){
      $('#locationinput').fadeIn(1000, function(){
        $('#imageuploaddiv').fadeIn(1000, function(){
          $('#descriptioninput').fadeIn(1000, function(){
            $('#itemsselect').fadeIn(1000, function(){
              $('#submitdonation').fadeIn(1000)
            });
          });
        });
      });
    });
  });
});
$('#submitdonation').click(function(){
  $('#createlistingpage').fadeOut(1000, function(){
    $('#templatepage').fadeIn(1000)
  });
});
});
