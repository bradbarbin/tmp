'use strict';

googleAdArts.controller('DataIsEmotionalCtrl', ['$scope','CopyService',function($scope,CopyService) {
	CopyService.get(function(data){
		$scope.headline = data.chapter6_headline;
        $scope.mobile = data.chapter6_mobile_headline;
		$scope.subHeadline = data.chapter6_subHeadline;
		$scope.column1 = data.chapter6_copy_column1;
		$scope.column2 = data.chapter6_copy_column2;
	})



    $scope.toggleMobileShowing = function() {
        $(".mainViewContainer").each(function(){
            if( $(this).height() > 0){
                $(this).animate({"height":"0px"});
            }
        })
        if( $("#dataIsEmotional").height() < 800){
            $("#dataIsEmotional").animate({"height":"800px"});
        }else{
            $("#dataIsEmotional").animate({"height":"0px"});
        }
    }

    $scope.showSubscribe=function(){
        $(".registrationContainer").fadeIn();
        $(".registrationContainer").click(function() {
            $(".registrationContainer").fadeOut();
        });
		_gaq.push(['_trackEvent', 'DataStories', 'click', 'Subscribe'])

	}
}]);