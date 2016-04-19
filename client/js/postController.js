(function(app){

  app.controller('postController',['postListService','$timeout', function(postListService, $timeout){

  this.item = {
                title : "",
                description : "",
                category : "",
                loc: "",
                price : "",
                postingDate: ""
              };

  this.doFade = false;
  this.showMessage = false;
  this.isError = false;
  this.message = "Test Message";

  var onsuccess = function() {
    listObj.isError = false;
    listObj.showMessage = true;
    listObj.message = "Saved !!";

    $timeout(function () {
      listObj.doFade = true;
    }, 2500);

  };

  var onerror = function(error) {
    listObj.isError = true;
    listObj.showMessage = true;
    listObj.message = JSON.stringify(error);
  };

  this.saveItem = function(){
  listObj = this;
  this.isError = false;
  this.item.postingDate = Date.now();
  postListService.saveItem(this.item).then(onsuccess, onerror);

  };


  }]);



}(angular.module("listApp")));
