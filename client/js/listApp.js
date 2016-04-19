(function(){

var app = angular.module('listApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider){

  $routeProvider
  .when('/',{
    templateUrl: '/index.html'

  })
  .when('/viewlistings', {
    templateUrl: 'partials/ViewListings.html',
    controller: 'viewController',
    controllerAs: 'viewCtrl'
  })
  .when('/postlisting',{
    templateUrl: 'partials/PostListing.html',
    controller: 'postController',
    controllerAs: 'postCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })

}])

}());
