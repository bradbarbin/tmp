'use strict';

googleAdArts.controller('LetsGetPhygitalCtrl',['$scope','CopyService', function($scope,CopyService) {
		CopyService.get(function(data){
			$scope.headline = data.chapter1_headline;
            $scope.mobile = data.chapter1_mobile_headline;
			$scope.subHeadline = data.chapter1_subHeadline;
			$scope.column1 = data.chapter1_copy_column1;
			$scope.column2 = data.chapter1_copy_column2;
		})
	//TODO: find cleaner way of doing this obviously, maybe inject a configurable directive
//	$scope.experimentWidget='<div class="experimentFeature talkingShoe"><div class="experimentFeatureTop talkingShoe"><p><span class="featureHeadline">THE<br/>TALKING SHOE</span></p><p><span class="featureCopy">Watch this film from art, copy<br/>and code that changes with...</span></p></div><div class="experimentFeatureBottom" ng-click="showExperiment()"><p>view experiment ></p></div><div class="experimentImage"></div></div>';
    $scope.toggleMobileShowing = function() {
        $(".mainViewContainer").each(function(){
            if( $(this).height() > 0){
                $(this).animate({"height":"0px"});
            }
        })
    if( $("#letsGetPhygital").height() < 800){
        $("#letsGetPhygital").animate({"height":"800px"}, "slow");
    }else{
        $("#letsGetPhygital").animate({"height":"0px"});
    }
    }

	$scope.showExperiment = function() {
		_gaq.push(['_trackEvent', 'ConnectedObjects', 'click', 'ViewExperiment']);

		$('.projectViewShoe').scrollTop(0);
		$('.projectViewShoe').removeClass('hideProject').addClass('showProject');
		$('body').css("overflow","hidden");
		$('.leaveProjectBTN').delay(1000).fadeIn();
	}
}]);