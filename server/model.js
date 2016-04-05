var mongoose = require('mongoose');
var schema = mongoose.Schema;

var listingSchema = new schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  postingDate: {
    type: Date,
    required: true
  },
  displayStartDate: {
    type: Date
  },
  displayEndDate: {
    type: Date
  }
});

module.exports = mongoose.model('Listing', listingSchema);
