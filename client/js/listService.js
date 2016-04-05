(function(app){

  app.factory('listService', ['$http', function($http){

  var listFactory = {};

  listFactory.saveItem = function(item){
    alert("factory called. Item is: " + JSON.stringify(item));

    return $http.post('http://localhost:3000/postlisting',item);

  }

  return listFactory;

  }]);

}(angular.module("listApp")));
