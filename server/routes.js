var express = require('express');

var listCtrl = require('./controller');

var router = express.Router();

router.get('/getlistings',function(req, res){
  console.log("You have reached getlistings method");
  return listCtrl.getListings(req, res);
});

router.post('/postlisting', function(req, res){
  console.log("You have reached postlisting method");
  return listCtrl.createListing(req, res);
});

module.exports = router;
