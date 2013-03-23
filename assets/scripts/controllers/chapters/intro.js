'use strict';

googleAdArts.controller('IntroCtrl', ['$scope','CopyService','FullscreenService', function($scope,CopyService,FullscreenService) {
    CopyService.get(function(data){
		$scope.headline = data.intro_headline;
		$scope.copy = data.intro_copy;
    })


	$scope.showVideo=function(id){
		$('#toolVideoContainer').append('<div id="videoContent"><div class="videoCloseButton"></div><iframe id="toolIframe" src="http://www.youtube.com/embed/sQSetle-a-k" frameborder="0" allowFullScreen></iframe></div>');
		FullscreenService.goFullscreen("#videoContent");

	}
}]);