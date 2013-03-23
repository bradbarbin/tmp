'use strict';

googleAdArts.controller('NavigationCtrl', ['$scope','CopyService',function($scope,CopyService) {
	var checkScrolling;

    CopyService.get(function(data){

    })

	//$scope.currentElement;

	$scope.scrollToPosition = function(elementID, activeElement) {
		console.log("SCROLL TO POS",elementID, activeElement);
		$scope.leaveProjectView();
		checkScrolling=false;
       	setButtonActive(activeElement);
		var offset=$(elementID).offset().top;



		$('html, body').stop().animate({
			scrollTop: offset
		}, 1500,'easeInOutExpo', function() {
			window.setTimeout(function(){checkScrolling=true;},600);
		});

		}


	//refactor
    $(window).scroll(handleScroll);

	var doOnce = true;

    function handleScroll(){
    	if(doOnce){
    	if($('.introHeadlineContainer img').length>0){
		    	$('.introHeadlineContainer img').fadeOut();
		    	$('.introHeadline').animate({marginTop: '-=100'}, 200);
		 }
    	$("a.brand img").animate({
		    top: '+=250',
		    opacity: 1.0
		  }, 1000, function() {  
		  });
    		doOnce = false;
    	}
        $(".headlineImage").each(function(){
            var offset;
            if ($("body").scrollTop() > $(this).offset().top){
                offset = $("body").scrollTop();
                $(this).find(".headlineContainer").offset({"top":offset+60});
                
            }else if($("body").scrollTop() <= $(this).offset().top){
                offset = $(this).offset().top;
                $(this).find(".headlineContainer").offset({"top":offset+60});

            }});


    }

	$(window).resize(updateLayout);

	function updateLayout(){
        handleScroll();
	}

	$('#intro').waypoint(function(direction) {
		if(checkScrolling)setButtonActive(0);
	});

	$('#inspiration').waypoint(function(direction) {
		if(checkScrolling)setButtonActive(1);
	});

	$('#chapter1').waypoint(function(direction) {
		if(checkScrolling)setButtonActive(2);
	});

	$('#chapter2').waypoint(function(direction) {
		if(checkScrolling)setButtonActive(3);
	});

	$('#chapter5').waypoint(function(direction) {
		if(checkScrolling)setButtonActive(4);
	});

	$('#chapter3').waypoint(function(direction) {
		if(checkScrolling)setButtonActive(5);
	});

	$('#chapter4').waypoint(function(direction) {
		if(checkScrolling)setButtonActive(6);
	});

	$('#chapter6').waypoint(function(direction) {
		if(checkScrolling)setButtonActive(7);
	});

	$scope.scrollToPosition('#intro',0);



}]);