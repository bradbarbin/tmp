'use strict';

$(function(){
	var checkScrolling;

    
	//$scope.currentElement;

	


	//refactor
    $(window).scroll(handleScroll);

	

    function handleScroll(){
    	
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


});