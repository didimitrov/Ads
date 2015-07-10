'use strict';

app.controller('UserPublishNewAdController',
    function($scope,$location,notifyService,townsService,userService,categoryService){

        $scope.towns = townsService.getTowns();
        $scope.categories = categoryService.getCategories();

        $scope.adData = {townId:null, categoryId: null};

        $scope.publishAd = function(adData){
            userService.createNewAd(adData,
                function success(){
                notifyService.showInfo('Create is successful.');
                    $location.path('/user/ads');
            },
            function error(){
                notifyService.showError('Create failed.')
            })
        }
});