'use strict';

googleAdArts.controller('FixedHeaderCtrl', ['$scope',function($scope) {
	$scope.showSubscribe=function(){
		$(".registrationContainer").fadeIn();
		$(".registrationContainer").click(function() {
			$(".registrationContainer").fadeOut();
		});
	}

	$scope.goHome=function(){
		$('html, body').animate({
			scrollTop: 0
		}, 2000,'easeInOutExpo');

			if($('.projectViewShoe').hasClass('showProject')){
				$('.projectViewShoe').addClass('hideProject').removeClass('showProject');
				_gaq.push(['_trackEvent', 'ConnectedObjects', 'click', 'BackToChapters']);
			}else if ($('.projectViewFilm').hasClass('showProject')){
				$('.projectViewFilm').addClass('hideProject').removeClass('showProject');
				_gaq.push(['_trackEvent', 'ReimaginedCanvases', 'click', 'BackToChapters']);
			}

			$('.leaveProjectBTN').fadeOut();
			$('body').css("overflow","auto");
		}
}]);