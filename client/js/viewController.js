(function(app){

  app.controller('viewController',['getListService',function(getListService){
    this.doFade = false;
    this.showMessage = false;
    this.isError = true;
    this.message = "Test Message";
    this.listings = [];

    var onsuccess = function(response) {
      console.log("this is the returned data:");

        listObj.listings = response.data;
        console.log(JSON.stringify(listObj.listings));
    };

    var onerror = function(error) {
      listObj.isError = true;
      listObj.showMessage = true;
      listObj.message = JSON.stringify(error);
    };

    var listObj = this;
    getListService.getListings().then(onsuccess, onerror);

  }]);

}(angular.module("listApp")));
