'use strict';

app.controller('RegisterController',
    function($scope,$location,townsService,authService,notifyService){

        $scope.userData = {townsId: null};
        $scope.towns=townsService.getTowns();

        $scope.register = function(userData){
            authService.register(userData,
                function success(){
                notifyService.showInfo('User registered successfully');
                $location.path('/');
            },
                function error(err){
                notifyService.showError('User registration failed',err)
            });
        }

});