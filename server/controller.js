var Listing = require('./model');

exports.createListing = function(req, res){
  console.log("You have reached createListing method inside controller");
  console.log("Request Body: " + JSON.stringify(req.body));
  console.log("Title: " + req.body.title);
  var newListing = new Listing({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    location: req.body.loc,
    price: req.body.price,
    postingDate: req.body.postingDate,
    displayStartDate: req.body.startDate,
    displayEndDate: req.body.endDate
  });

  console.log("NewListing object has following value: " + JSON.stringify(newListing));

  console.log("Going to call save method now");
  newListing.save(function(err){
    if (err){
      console.log("You are in error condition of save method: " + err);
      res.status(500).send({ErrorMsg:err});
    }
    else {
      console.log("You are in success condition of save method");
      res.status(200).send({SuccessMsg: "New listing saved"});
    }
  });
}

  exports.getListings = function(req, res){
    var query = Listing.find();
    query.sort({PostingDate: 'desc'})
         .exec(function(err, results){
           res.send(results);
         });
  };
