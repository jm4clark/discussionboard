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
            content: r.content,
            email: r.email
        });

        newItem.save().then(() => console.log("added"));
        res.end("end");
    }
})

router.put("/update", (req, res) => {
    r = req.body;
    Item.updateOne({ 'email': r.email }, { $set: { 'username': r.username, 'content': r.content} })
        .then(() => {
            res.send("Updated Item")
        })
        .catch(err => res.status(404).json(err));
});


router.delete("/delete", (req, res) => {
    var r = req.body;
    const errors = {};
    var search = { 'email': r.email };
    Item.findOneAndDelete(search)
        .then(items => {
            if (!items) {
                errors.noItems = "There are no items";
                res.status(404).json(errors);
            }
            res.send('Removed Item');
        })
        .catch(err => res.status(404).json(err));
});





module.exports = router;