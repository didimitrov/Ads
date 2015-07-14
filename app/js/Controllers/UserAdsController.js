'use strict';

app.controller('UserAdsController',
    function ($scope, $location, $timeout, userService, adsService, notifyService, pageSize) {

        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };

        $scope.reloadUserAds = function () {
            userService.getUserAds(
                $scope.adsParams,
                function success(data) {
                    $scope.ads = data;
                },
                function error(error) {
                    notifyService.showError('Cannot load ads', error)
                }
            )
        };

        $scope.deactivateUserAd = function (id) {
            userService.deactivateAd(id,
                function success() {
                    notifyService.showInfo('Successfully deactivated ad');
                    $scope.reloadUserAds();
                    $location.path('/user/ads')
                },
                function error(error) {
                    notifyService.showError('Cannot deactivate ad', error)
                })
        };

        $scope.publishAgainAd = function (id) {
            userService.publishAgainAd(id,
                function success() {
                    notifyService.showInfo('Successfully published again ad')
                    $scope.reloadUserAds();
                    $timeout(function () {
                        $location.path("/user/ads");
                    }, 5000);
                },
                function error() {
                    notifyService.showError('Cannot publish again ad', error)

                })
        };

        $scope.reloadUserAds();

    });
