'use strict'

app.controller('RightSidebarController',
    function($scope,$location,categoryService,townsService,notifyService){
        $scope.towns=townsService.getTowns();
        $scope.categories = categoryService.getCategories();

        $scope.categoryClicked = function(clickedCategoryId) {
            $scope.selectedCategoryId = clickedCategoryId;
        };

        $scope.townClicked =function(clickedTownId){
            $scope.selectedTownId=clickedTownId;
        }

    });