// models/shortUrl.js

const mongoose = require('mongoose');
const shortId = require('shortid');

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: function() {
      let id;
      do {
        id = shortId.generate();
      } while (this.model('ShortUrl').countDocuments({ short: id }) > 0);
      return id;
    }
  }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);
