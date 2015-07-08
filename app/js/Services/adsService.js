'use strict'

app.factory('adsService', function($resource,baseServiceUrl ){

    var adsResource=$resource(baseServiceUrl+'/api/ads', null,{
        'getAll':{method:'GET'}
    });

    return{
        getAds: function(params, success, error){
            return adsResource.getAll(params,success,error)
        }
    };
});

app.factory('townsService', function($resource,baseServiceUrl){

    var townResource=$resource(baseServiceUrl+'/api/towns');

   return {
       getTowns:function(success, error){
            return townResource.query(success,error)
       }
   }
});

app.factory('categoryService', function($resource,baseServiceUrl){

    var categoryResource=$resource(baseServiceUrl+'/api/categories');

    return {
        getCategories:function(success, error){
            return categoryResource.query(success,error)
        }
    }
});