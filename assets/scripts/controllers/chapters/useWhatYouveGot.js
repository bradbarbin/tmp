'use strict';

googleAdArts.controller('UseWhatYouveGotCtrl', ['$scope','CopyService',function($scope,CopyService) {
		CopyService.get(function(data){
			$scope.headline = data.chapter2_headline;
            $scope.mobile = data.chapter2_mobile_headline;
			$scope.subHeadline = data.chapter2_subHeadline;
			$scope.column1 = data.chapter2_copy_column1;
			$scope.column2 = data.chapter2_copy_column2;
		})
    $scope.toggleMobileShowing = function() {
        $(".mainViewContainer").each(function(){
            if( $(this).height() > 0){
                $(this).animate({"height":"0px"});
            }
        })
        if( $("#useWhatYouveGot").height() < 800){
            $("#useWhatYouveGot").animate({"height":"800px"});
        }else{
            $("#useWhatYouveGot").animate({"height":"0px"});
        }
    }

	//TODO: find cleaner way of doing this obviously, maybe inject a configurable directive
//	$scope.experimentWidget='<div class="experimentFeature filmFestival"><div class="experimentFeatureTop filmFestival"><p><span class="featureHeadline">THE FIRST FIVE<br/>FILM FESTIVAL</span></p><p><span class="featureCopy">Watch this film from art, copy<br/>and code that changes with...</span></p></div><div class="experimentFeatureBottom" ng-click="showExperiment()"><p>view experiment ></p></div><div class="experimentImage"></div></div>';

	$scope.showExperiment = function() {
		_gaq.push(['_trackEvent', 'ReimaginedCanvases', 'click', 'WatchTrailer'])

		$('.projectViewFilm').scrollTop(0);
		$('.projectViewFilm').removeClass('hideProject').addClass('showProject');
		$('body').css("overflow","hidden");
		$('.leaveProjectBTN').delay(1000).fadeIn();
	}
}]);