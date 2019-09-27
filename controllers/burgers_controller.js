// const express = require("express");

// //lets use express router
// const router = express.Router();

// let db = require("../models");


// //Create the routes
// router.get("/", function (req, res) {
//     // db.Burgers.findAll({}).then((burgers) => {
//     //     res.render("index", {
//     //         burgers
//     //     });
//     // })
//     res.json({
//         name: "oof"
//     });
// });

// router.post("/burger", function (req, res) {
//     console.log("hello")
//     db.Burgers.create({
//         name: req.body.name,
//         devoured: false
//     }).then((result) => {
//         res.json({
//             id: result.insertId
//         });
//     })
//     // res.json({
//     //     name: "hi!!"
//     // })
// });


// // Export router so it can be used else were
// module.exports = router;


// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("*", function (req, res) {
        db.Burgers.findAll({}).then(function (burgers) {
            res.render("index", {
                burgers
            });
        });
    });

    app.post("/newburger", function (req, res) {
        db.Burgers.create({
            burger_name: req.body.name,
            devoured: false
        }).then((result) => {
            res.json(result);
        })
    });

    app.post("/burger", function (req, res) {
        db.Burgers.update({
            devoured: true
        }, {
            where: {
                id: req.body.id
            }
        }).then((result) => {

            db.Burgers.findOne({
                where: {
                    id: req.body.id
                }
            }).then(function (burgers) {
                res.json(burgers);
            });
        })
    });

};