const express = require("express");
const router = express.Router();
const validator = require("validator");
const isEmpty = require("../validation/is-empty.js");

const Item = require("../models/items.js");

router.get("/getAll", (req, res) => {
    const errors = {};
    Item.find({})
    .then(items => {
        if(!items) {
            errors.noItems = "There are no items";
            res.status(404).json(errors);
        }
        res.json(items);
    })
    .catch(err => res.status(404).json({ noItems: "There are no items" }));
});

router.post("/add", (req, res) => {
    var r = req.body;
    if(!isEmpty(r)){
        const errors = {};
        var newItem = new Item({
            name: r.name,
            age: r.age,
            location: r.location
        });

        newItem.save().then(() => console.log("added"));
        res.end("end");
    }
})

router.put("/update", (req, res) => {
    var r = req.body;
    const errors = {};

    Item.updateOne({ '_id': req.body._id}, { $set: { 'username': req.body.username, 'content': req.body.content}})
    .then(() => { res.send("Updated item")})
    .catch(err => res.status(404).json({noItem: `${err}`}));
});

router.delete("/delete", (req,res) => {
    Item.findById(req.body._id).then(item => {
        item.remove().then(() => {
            res.json({ success: true });
        })
        .catch( err => res.status(404).json({ success: false}));
    })
})





module.exports = router;