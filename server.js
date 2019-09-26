const express = require("express");


const app = express();
const PORT = process.env.PORT || 3000;

//Requiring our models for syncing
const db = require("./models");

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Static directory
app.use(express.static("public"));

//import routes
const routes = require("./controllers/burgers_controller.js")
app.use(routes);

//Sync sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });
});
