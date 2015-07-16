'use strict';

var app =angular.module('app',['ngRoute', 'ngResource','ui.bootstrap.pagination']);

app.constant('baseServiceUrl','http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 3);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'templates/home.html',
        controller:'HomeController'
    });

    $routeProvider.when('/login',{
        templateUrl:'templates/login.html',
        controller:'LoginController'
    });

    $routeProvider.when('/register',{
        templateUrl:'templates/register.html',
        controller:'RegisterController'
    });

    $routeProvider.when('/user/ads/publish',{
        templateUrl:'templates/user/publish-new-ad.html',
        controller:'UserPublishNewAdController'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user/ads-user.html',
        controller: 'UserAdsController'
    });

    $routeProvider.when('/user/editAd/:id', {
        templateUrl: 'templates/user/edit-ad.html',
        controller: 'UserEditAdController'
    });

    $routeProvider.when('/user/deleteAd/:id', {
        templateUrl: 'templates/user/delete-ad.html',
        controller: 'UserDeleteAdController'
    });

    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/user/profile.html',
        controller: 'UserProfileController'
    });

    $routeProvider.otherwise({
        redirectTo:'/'
    });

    app.run(function ($rootScope, $location, authService) {
        $rootScope.$on('$locationChangeStart', function () {
            if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
                // Authorization check: anonymous site visitors cannot access user routes
                $location.path("/");
            }
        });
    });

});