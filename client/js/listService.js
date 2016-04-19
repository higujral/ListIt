(function(app){

  app.factory('postListService', ['$http', function($http){

  var postListFactory = {};

  postListFactory.saveItem = function(item){

    return $http.post('http://localhost:3000/postlisting',item);

  }

  return postListFactory;

  }]);

  app.factory('getListService',['$http', function($http){

    var getListFactory = {};

    getListFactory.getListings = function(){

      return $http.get('http://localhost:3000/getlistings');

    }

    return getListFactory;

  }]);

}(angular.module("listApp")));
