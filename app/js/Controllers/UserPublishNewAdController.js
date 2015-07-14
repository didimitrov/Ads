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
        };

        $scope.fileSelected = function (fileInputField, edit) {
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function () {
                    if (edit) {
                        $scope.adData.changeImage = true;
                        $scope.editAd.imageDataUrl = reader.result;
                    }
                    else {
                        $scope.adData.imageDataUrl = reader.result;
                    }

                    $scope.$apply();
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };

                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };
});