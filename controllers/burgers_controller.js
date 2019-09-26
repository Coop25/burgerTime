const express = require("express");

//lets use express router
const router = express.Router();


//Create the routes 
router.get("/", function(req, res) {
    res.render("index");
});


// Export router so it can be used else were
module.exports = router;
