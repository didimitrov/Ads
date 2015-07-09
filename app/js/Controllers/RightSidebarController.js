'use strict'

app.controller('RightSidebarController',
    function($scope,$location,categoryService,townsService,$rootScope){
        $scope.towns=townsService.getTowns();
        $scope.categories = categoryService.getCategories();

        $scope.categoryClicked = function(clickedCategoryId) {
            $scope.selectedCategoryId = clickedCategoryId;
            $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
        };

        $scope.townClicked =function(clickedTownId){
            $scope.selectedTownId=clickedTownId;
            $rootScope.$broadcast("townSelectionChanged", clickedTownId);
        }

    });