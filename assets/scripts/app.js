'use strict';

var googleAdArts = angular.module('googleAdArts', ['fullscreenService','copyService','ngSanitize']).

	directive('fixedHeader', function (){
		return{
			templateUrl: 'assets/views/framework/fixedHeader.html',
			controller: 'FixedHeaderCtrl',
			restrict: 'E',
			scope: true
		};
	}).

	directive('fixedFooter', function (){
		return{
			templateUrl: 'assets/views/framework/fixedFooter.html',
			controller: 'FixedFooterCtrl',
			restrict: 'E',
			scope: true
		};
	}).

	directive('navigation', function (){
		return{
			templateUrl: 'assets/views/framework/navigation.html',
			controller: 'NavigationCtrl',
			restrict: 'E',
			scope: true
		};
	}).

	directive('projectViewFilm', function (){
		return {
			templateUrl: 'assets/views/experiments/filmFestivalExperiment.html',
			controller: 'ProjectFilmViewCtrl',
			restrict: 'E',
			scope: true
		};

	}).

	directive('projectViewShoe', function (){
         return {
			templateUrl: 'assets/views/experiments/talkingShoeExperiment.html',
			controller: 'ProjectShoeViewCtrl',
			restrict: 'E',
			scope: true
		};
        
	}).

	directive('intro', function (){
		return {
				templateUrl: 'assets/views/chapters/intro.html',
				controller: 'IntroCtrl',
				restrict: 'E',
				scope: true
			}
	}).

	directive('inspiration', function (){
		return {
				templateUrl: 'assets/views/chapters/inspiration.html',
				controller: 'InspirationCtrl',
				restrict: 'E',
				scope: true
			};
	}).

	directive('chapter1', function (){
		return {
				templateUrl: 'assets/views/chapters/letsGetPhygital.html',
				controller: 'LetsGetPhygitalCtrl',
				restrict: 'E',
				scope: true
			};
	}).

	directive('chapter2', function (){
		return {
				templateUrl: 'assets/views/chapters/useWhatYouveGot.html',
				controller: 'UseWhatYouveGotCtrl',
				restrict: 'E',
				scope: true
			};
		
	}).

	directive('chapter3', function (){
		return {
				templateUrl: 'assets/views/base/chapterBase.html',
				controller: 'AudiencesOfOneCtrl',
				restrict: 'E',
				scope: true
			};
		
	}).

	directive('chapter4', function (){

		return {
				templateUrl: 'assets/views/base/chapterBase.html',
				controller: 'AllTogetherNowCtrl',
				restrict: 'E',
				scope: true
			};
		
	}).

	directive('chapter5', function (){
		return {
				templateUrl: 'assets/views/chapters/whatCanYouDo.html',
				controller: 'WhatCanYouDoCtrl',
				restrict: 'E',
				scope: true
			};
		
	}).

	directive('chapter6', function (){
		return {
				templateUrl: 'assets/views/chapters/dataIsEmotional.html',
				controller: 'DataIsEmotionalCtrl',
				restrict: 'E',
				scope: true
			};
		
	}).
	directive('credits', function (){
		return {
			templateUrl: 'assets/views/framework/credits.html',
			restrict: 'E',
			scope: true
		};
	}).



// *** ROUTING ***

config(
	function( $routeProvider ){
		$routeProvider.when(
			"/project/:projectID",
			{
				action: "project"
			}
		)
			.when(
			"/index.html",
			{
				action: "home"
			}
		)
			.otherwise(
			{
				redirectTo: "/"
			}
		);

	}
).

// *** CONTROLLER ***
	controller(
	"googleAdArtsController",
	function( $scope, $route, $routeParams ){
		$scope.$on('$routeChangeSuccess', function ($event, current) {
			var renderAction = $route.current.action;
			switch(renderAction){
				case "home":
					$scope.leaveProjectView();
					break;
				case "project":
					switch($routeParams.projectID){
						case "0":
							$scope.showExperiment('.projectViewShoe');
							break;
						case "1":
							$scope.showExperiment('.projectViewFilm');
							break;
					}
					break;
			}
		});

		$scope.showExperiment = function(type) {
			setTimeout(function(){
				$scope.leaveProjectView();
				$(type).scrollTop(0);
				$(type).removeClass('hideProject').addClass('showProject')
				$('body').css("overflow","hidden");


				$('.leaveProjectBTN').delay(1000).fadeIn(function(){$('.chapter').hide();});
			},250);

		}

		$scope.leaveProjectView=function(){
            $scope.$broadcast('stopVideoPlayer');

			if($('.projectViewShoe').hasClass('showProject')){
				$('.projectViewShoe').addClass('hideProject').removeClass('showProject');
				_gaq.push(['_trackEvent', 'ConnectedObjects', 'click', 'BackToChapters']);
			}else if ($('.projectViewFilm').hasClass('showProject')){
				$('.projectViewFilm').addClass('hideProject').removeClass('showProject');
				_gaq.push(['_trackEvent', 'ReimaginedCanvases', 'click', 'BackToChapters']);
			}

			$('.leaveProjectBTN').fadeOut();
			$('body').css("overflow","auto");
			$('.chapter').show();
		}
	}
)



// *** FILTERS ***


	.filter('newline', function() {
		return function(input, scope) {
			if(input===undefined)return;
			return input.replace(/\n/g, '<br/>');
		}
	}).

	filter('reverse', function() {
		return function(input, uppercase) {
			if (input===undefined) return;
			var out = "";
			for (var i = 0; i < input.length; i++) {
				out = input.charAt(i) + out;
			}
			// conditional based on optional argument
			if (uppercase) {
				out = out.toUpperCase();
			}
			return out;
		}
	})


