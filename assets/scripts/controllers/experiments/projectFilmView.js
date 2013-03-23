googleAdArts.controller('ProjectFilmViewCtrl',  ['$scope','$http','$window',function($scope,$http,$window) {
    $scope.ytPlayer;

    $scope.$on('stopVideoPlayer', function() {
        if(typeof $scope.ytPlayer.pauseVideo === 'function')$scope.ytPlayer.pauseVideo();
    });

    addVideo('filmPlayer','YG2ZplnjmEg');

    //TODO: Create YT Service
    function addVideo(target, videoId) {
        var container = target;

        if (typeof(YT) != 'undefined' && typeof(YT.Player) != 'undefined') {
            initVideo(container, videoId);
        } else {
            $window.onYouTubeIframeAPIReady = function() {
                initVideo(container, videoId);
            };

            $http.jsonp("//www.youtube.com/iframe_api");
        }
    };


    function initVideo(container, videoId) {
        var width = 660;
        var height = 400;

        $scope.ytPlayer=new YT.Player(container, {
            videoId: videoId,
            width: width,
            height: height
        });

    }
}]);