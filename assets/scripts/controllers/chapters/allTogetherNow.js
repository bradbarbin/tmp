'use strict';

googleAdArts.controller('AllTogetherNowCtrl',['$scope','CopyService', function($scope,CopyService) {
    CopyService.get(function(data){
		$scope.headline = data.chapter4_headline;
        $scope.mobile = data.chapter4_mobile_headline;
		$scope.subHeadline = data.chapter4_subHeadline;
		$scope.column1 = data.chapter4_copy_column1;
		$scope.column2 = data.chapter4_copy_column2;
    })



    $scope.toggleMobileShowing = function() {
        $(".mainViewContainer").each(function(){
            if( $(this).height() > 0){
                $(this).animate({"height":"0px"});
            }
        })
        if( $("#allTogetherNow").height() < 800){
            $("#allTogetherNow").animate({"height":"800px"});
        }else{
            $("#allTogetherNow").animate({"height":"0px"});
        }
    }

    $scope.showSubscribe=function(){
        $(".registrationContainer").fadeIn();
        $(".registrationContainer").click(function() {
            $(".registrationContainer").fadeOut();
        });
    }
}]);