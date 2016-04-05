(function(app){

  app.controller('listController',['listService','$timeout', function(listService){

  this.item = {
                title : "",
                description : "",
                category : "",
                loc: "",
                price : "",
                postingDate: ""
              };

  var onsuccess = function() {
    this.isError = false;
    this.message = "Saved !!";
  };

  var onerror = function(error) {
    this.isError = true;
    this.message = JSON.stringify(error);

    $timeout(function () {
      if (this.isError) this.isError = false;
    }, 3000);

  };

  this.saveItem = function(){
  this.message = "trying to save";
  this.isError = false;
  this.item.postingDate = Date.now();
  listService.saveItem(this.item).then(onsuccess, onerror);

  };


  }]);



}(angular.module("listApp")));
