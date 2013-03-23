angular.module('fullscreenService', ['ngResource'])
	.factory('FullscreenService', function($resource) {
		return {
			goFullscreen: function (id) {
				var fullscreen;
				var element=$(id)[0];


				$('.videoCloseButton').click(function(){
						removeVideo();
						if(document.cancelFullScreen) {
							document.cancelFullScreen();
						} else if(document.mozCancelFullScreen) {
							document.mozCancelFullScreen();
						} else if(document.webkitCancelFullScreen) {
							document.webkitCancelFullScreen();
						}
				})


				if (element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if (element.webkitRequestFullScreen) {
					element.webkitRequestFullScreen();
				}

				addListeners();
				function addListeners(){
					document.addEventListener("fullscreenchange",checkLeaveFullscreen);
					document.addEventListener("mozfullscreenchange", checkLeaveFullscreen);
					document.addEventListener("webkitfullscreenchange", checkLeaveFullscreen);
				}


				function checkLeaveFullscreen(){
					var fullscreenEnabled = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
					if(!fullscreenEnabled){
						removeVideo();
					}
				}

				function removeVideo(){
					$("body").css("overflow","hidden");
					setTimeout(function(){
						$(id).remove();
						$("body").css("overflow","auto");
					},500);
				}
			}


		};

	})


