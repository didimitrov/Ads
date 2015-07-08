'use strict'

app.controller('HomeController',function($scope,notifyService,adsService,pageSize){
    $scope.adsParams={
        'startPage': 1,
        'pageSize': pageSize
    };

    $scope.reloadAds =function(){
        adsService.getAds($scope.adsParams,
            function success(data){
            $scope.ads=data;
        },
            function error(err){
            notifyService.showError("Cannot load ads", err)
        })
    }

    $scope.reloadAds();
});
