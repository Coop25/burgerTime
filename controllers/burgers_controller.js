const express = require("express");

//lets use express router
const router = express.Router();

//Import the model (cat.js) to use its database functions.
const cat = require("../models/cat.js");

//Create the routes 
router.get("/", function(req, res) {

});


// Export router so it can be used else were
module.exports = router;
