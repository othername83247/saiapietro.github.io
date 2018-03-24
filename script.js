function arraySearch(arr,val) {
    for (var i=0; i<arr.length; i++)
        if (arr[i] === val)
            return i;
    return false;
}
function moreInfo(x){
  $('#templatename')[0].textContent = eval('localStorage.nametextarea' + x)
  $('#pageimage')[0].src = eval('localStorage.profileimage' + x)
  $('#templatedescription')[0].textContent = eval('localStorage.descriptionname' + x)
  $('#templatelocation')[0].textContent = eval('localStorage.locationtextarea' + x)
  $('#templateoption')[0].textContent = eval('localStorage.accepteditems' + x)

  $('#templatepage').fadeIn(1000)
}
function templatefunction(linkelement){
  var number = $("#" + 'link' + linkelement)[0].id[4]
  $('#mainpage').fadeOut(1000, function(){
    moreInfo(number);
  });
};
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
function checkLocalStorage(name){
	i = 2
	while (true){
		if (localStorage.getItem(name + 1) == null){
			return name + 1
		}
		else if (localStorage.getItem(name + i) == null){
			return name + i
		}
		i++
	}
}

$( document).ready(function() {
//$('#mainpage').hide()
//$( "#mainpage").fadeOut("slow", function(){})
/*
while (true){
$("#img0").slideToggle('slow',
setTimeout(
  function()
  {
	$("#img1").slideToggle('slow',
	setTimeout(
		function(){
			
		)});
	{
  }, 5000);
});*/

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

$('#donator').click(function(){
  $('#welcome').fadeOut(1000, function(){
    //$('#location').fadeIn(1000, function(){
      $('#itemfilter').fadeIn(1000)
    });
  //});
});

$('#submitdonator').click(function(){
  for(i=1;i <= localStorage.inputnumber;i++){
	if ($('select')[0].value == ''){
		alert('Please select an item.')
		return
	}
	if (eval('localStorage.accepteditems' + i) == $('select')[0].value){
	if ($('.place').length == 0) {
	  $('#changeloc').after("<div class = 'place' id = 'place1' ><span class = 'main' style = 'font-size: 2em; '>" + eval('localStorage.nametextarea' + i) + "</span></div>")
  }
  else{
	  $('#' + $('.place')[$('.place').length - 1].id).after("<div class = 'place' id = 'place" + i +"' ><span class = 'main' style = 'font-size: 2em; '>" + eval('localStorage.nametextarea' + i) + "</span></div>")
  }
	}
  $('#itemdonationsin')[0].textContent = $('select')[0].value
}

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
		$(this).after("<div id = 'place" + String(arraySearch(document.querySelectorAll('.place'),this)) + "info' style = 'display: none;' class = 'info'><p class = 'centered' style = 'font-weight: bold; font-size: 2em;'>" + eval('localStorage.nametextarea' + $(this)[0].id[5]) + " </p><img src = '" + eval('localStorage.profileimage' + $(this)[0].id[5]) +  "' height = '200' width = '400' class = 'centered'> <p class = 'centered'><span>" + eval('localStorage.descriptionname' + $(this)[0].id[5]) + "</span><a href = 'javascript:templatefunction(" + $(this)[0].id[5] +");' class = 'link' id = 'link" + $(this)[0].id[5] +"'>&nbsp;Learn more</a></p> </div>")
	}
	$(x).slideToggle("slow")

});
  $('#filterpage').fadeOut(1000, function(){
    $('#mainpage').fadeIn(1000)
  });
});
$('#donation').click(function(){
  $('#welcome').fadeOut(1000, function(){
    $('#name').fadeIn(1000, function(){
      //$('#locationinput').fadeIn(1000, function(){
        $('#imageuploaddiv').fadeIn(1000, function(){
          $('#descriptioninput').fadeIn(1000, function(){
            $('#itemsselect').fadeIn(1000, function(){
              $('#submitdonation').fadeIn(1000)
            });
          });
        });
      //});
    });
  });
});
$('#submitdonation').click(function(){
  for(i=0;i<4;i++){
	  if ($('.selector')[i].value == ''){
		  alert('Please fill out all the fields.')
		  return
	  }
  }
  localStorage.setItem(checkLocalStorage('nametextarea'), $('#nametextarea')[0].value)
  /*localStorage.setItem(checkLocalStorage('locationtextarea'), $('#locationtextarea')[0].value)
  var file = $('#imageupload')[0].files[0];
  var imgData = getBase64Image(file)
  $('#imageupload').onchange = function(event) {
	  localStorage.setItem(checkLocalStorage('nametextarea'), imgData);
	}*/
  localStorage.setItem(checkLocalStorage('descriptionname'), $('#description')[0].value)
  localStorage.setItem(checkLocalStorage('accepteditems'), $("select")[1].value)
  if (localStorage.inputnumber == null){
	  localStorage.setItem('inputnumber', 1)
  }
  else{
	  localStorage.inputnumber++
  }
  if ($('.place').length == 0){
	  $('#changeloc').after("<div class = 'place' id = 'place1' ><span class = 'main'>" + 'Donation Place 1' + "</span></div>")
  }
  else{
	  $('#' + $('.place')[$('.place').length - 1].id).after("<div class = 'place' id = 'place" + ($('.place') + 1) +"' ><span class = 'main'>" + eval("localStorage.nametextarea" + ($('.place').length - 1)) + "</span></div>")
  }
  $('#createlistingpage').fadeOut(1000, function(){
  moreInfo(localStorage.inputnumber)
  });
});

/*
if ($('.place').length == 0){
	  $('#changeloc').after("<div class = 'place' id = 'place1' ><span class = 'main'>" + 'Donation Place 1' + "</span></div>")
  }
  else{
	  $('#' + $('.place')[$('.place').length - 1].id).after("<div class = 'place' id = 'place" + ($('.place') + 1) +"' ><span class = 'main'>" + eval("localStorage.nametextarea" + ($('.place').length - 1)) + "</span></div>")
  }*/
//broken help
$('#imageupload').change(function(){
  var file = $('#imageupload')[0].files[0];
  var reader = new FileReader();
  reader.onloadend = function(){
    var imageUrl = reader.result;

    localStorage.setItem(checkLocalStorage('profileimage'), imageUrl);
  }
  reader.readAsDataURL(file);
});
$('#back').click(function(){
	window.location.href=window.location.href;
	/*
  $('#mainpage').fadeOut(1000, function(){
    $('.place').remove();
    $('#filterpage').fadeIn(1000, function(){
      $('#itemfilter').fadeIn(1000)
    });
  });*/
});

});
