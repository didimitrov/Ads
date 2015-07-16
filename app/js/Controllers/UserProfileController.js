'use strict';

app.controller('UserProfileController',
    function ($scope, $location, userService, notifyService, townsService, authService) {

        $scope.towns = townsService.getTowns();

        userService.getUserProfile(function success(data) {
            $scope.userData = data;
        });
        userService.getUserProfile(function success(data) {
            $scope.passwordData = data;
        });

        $scope.updateProfile = function (userData) {
            userService.editUserProfile(
                userData,
                function success() {
                    notifyService.showInfo('Successfully changed password');
                    $location.path("/user/home");
                },
                function error(err) {
                    notifyService.showError('Cannot change password', err);
                })
        };
        //
        $scope.updatePassword = function (passwordData) {
            userService.changeUserPassword(
                passwordData,
                function success() {
                    notifyService.showInfo('Successfully edited profile');
                    $location.path("/user/home");
                },
                function error(err) {
                    notifyService.showError('Cannot edit profile', err);
                }
            )
        };
    });
