var db = require('../db');
var controller = require('../controllers/');



module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {

    },
    post: function () {}
  }
};

