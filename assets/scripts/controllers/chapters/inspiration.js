'use strict';

googleAdArts.controller('InspirationCtrl', ['$scope','CopyService',function($scope,CopyService) {
	CopyService.get(function(data){
	})

	$scope.headline = "NEXT GLASS";
	$scope.subHeadline = "Wine Without Adjectives";
	$scope.column1 = "A";
	$scope.column2 = "B";

    $scope.showSubscribe=function(){

        $(".registrationContainer").fadeIn();
        $(".registrationContainer").click(function() {
            $(".registrationContainer").fadeOut();
        });
    }

    $scope.toggleMobileShowing = function() {
        $(".mainViewContainer").each(function(){
            if( $(this).height() > 0){
                $(this).animate({"height":"0px"});
            }
        })
    }


}]);