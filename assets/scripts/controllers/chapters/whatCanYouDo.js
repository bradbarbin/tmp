'use strict';

googleAdArts.controller('WhatCanYouDoCtrl', ['$scope','CopyService',function($scope,CopyService) {
	CopyService.get(function(data){
		$scope.headline = data.chapter5_headline;
        $scope.mobile = data.chapter5_mobile_headline;
		$scope.subHeadline = data.chapter5_subHeadline;
		$scope.column1 = data.chapter5_copy_column1;
		$scope.column2 = data.chapter5_copy_column2;
	})



    $scope.toggleMobileShowing = function() {
        $(".mainViewContainer").each(function(){
            if( $(this).height() > 0){
                $(this).animate({"height":"0px"});
            }
        })
        if( $("#whatCanYouDo").height() < 800){

            $("#whatCanYouDo").animate({"height":"800px"});
        }else{
            $("#whatCanYouDo").animate({"height":"0px"});
        }
    }

    $scope.showSubscribe=function(){
		_gaq.push(['_trackEvent', 'CollaborativeStorytelling', 'click', 'Subscribe'])

		$(".registrationContainer").fadeIn();
        $(".registrationContainer").click(function() {
            $(".registrationContainer").fadeOut();
        });
    }
}]);