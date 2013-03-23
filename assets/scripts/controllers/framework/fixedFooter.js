'use strict';

googleAdArts.controller('FixedFooterCtrl', ['$scope',function($scope) {
 $scope.showCredits=function(){
		 $("#credits").fadeIn();
		 $('body').css("overflow","hidden");
		 $("#credits").click(function() {
			 $("#credits").fadeOut();
			 $('body').css("overflow","auto");
		 });
 }
}]);