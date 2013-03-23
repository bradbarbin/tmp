$(document).ready(init);

var lastColor;
var fullscreen;


function init(){
	$(window).resize(updateLayout);
	window.setTimeout(updateLayout,100);
	window.setTimeout(updateLayout,200);
	window.setTimeout(updateLayout,500);
	window.setTimeout(updateLayout,1000);
	window.setTimeout(updateLayout,2000);
	$('#toolVideo').hide();
	$(".registrationContainer").hide();


	var version= parseInt($.browser.version);

	var ieLessThanMinimum=$.browser.msie&&version<9;
	var safarLessThanMinimum=$.browser.safari&&version<4;
	var chromeLessThanMinimum=$.browser.chrome&&version<4;
	var firefoxLessThanMinimum=$.browser.mozilla&&version<13;





	if(ieLessThanMinimum||safarLessThanMinimum||chromeLessThanMinimum||firefoxLessThanMinimum){
		$("#udpateBrowserContainer").fadeIn();
	}

	$(".updateBrowsercloseButton").click(function(){
			$("#udpateBrowserContainer").fadeOut();
	})

}



function updateLayout(){
    $('.centerMe').width($(window).width()-180);
	$('#chapter6 .mainViewContainer').css('height', $(window).height());
    

	$('#credits').width($(window).width()-170);

	jQuery(".headline").fitText(.8, { minFontSize: '15', maxFontSize: '55' });
//	$('#chapter6').find('mainViewContainer').height($(window).height());

}

