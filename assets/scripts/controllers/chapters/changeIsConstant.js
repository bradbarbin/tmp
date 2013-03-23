'use strict';

googleAdArts.controller('ChangeIsConstantCtrl', function($scope,CopyService) {
    CopyService.get(function(data){

    })

    $scope.showSubscribe=function(){
        $(".registrationContainer").fadeIn();
        $(".registrationContainer").click(function() {
            $(".registrationContainer").fadeOut();
        });
    }
});