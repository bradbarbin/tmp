'use strict';

googleAdArts.controller('AudiencesOfOneCtrl', ['$scope','CopyService', function($scope,CopyService) {
	CopyService.get(function(data){
		$scope.headline = data.chapter3_headline;
        $scope.mobile = data.chapter3_mobile_headline;
		$scope.subHeadline = data.chapter3_subHeadline;
		$scope.column1 = data.chapter3_copy_column1;
		$scope.column2 = data.chapter3_copy_column2;
	})



    $scope.toggleMobileShowing = function() {
        $(".mainViewContainer").each(function(){
            if( $(this).height() > 0){
                $(this).animate({"height":"0px"});
            }
        })
        if( $("#audiencesOfOne").height() < 800){
            $("#audiencesOfOne").animate({"height":"800px"});
        }else{
            $("#audiencesOfOne").animate({"height":"0px"});
        }
    }

    $scope.showSubscribe=function(){
		_gaq.push(['_trackEvent', 'AudiencesOfOne', 'click', 'Subscribe'])


		$(".registrationContainer").fadeIn();
        $(".registrationContainer").click(function() {
            $(".registrationContainer").fadeOut();
        });
    }
}]);
