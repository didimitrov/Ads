'use strict';

app.controller('UserDeleteAdController',
    function ($scope, $location, userService, $routeParams, categoryService, adsService, townsService, notifyService) {

        userService.getUserAdById($routeParams.id, function (data) {
            $scope.adData = data;
        });

        $scope.deleteUserAd = function (id) {
            userService.getUserAdById(
                id,
                function success() {
                    notifyService.showInfo('Successfully deleted ad');
                    $location.path('/user/ads')
                },
                function error(err) {
                    notifyService.showError('Cannot delete ad', err)
                })
        }

    });
