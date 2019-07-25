const express = require("express");
const lodash = require("lodash");
const router = express.Router();


const array = ["hello", "there", "general", "kenobi", "you", "are" , "a", "bold", "one"];

// @route GET array/get
// @desc Get array
// @access Public
router.get("/get", (req,res) => res.json({ message: `Array: ${array}`}));

// @route POST array/add
// @desc Add item to array
// @access Public
router.post("/add", (req, res) => {
    var itemToAdd = req.body.item;
    array.push(itemToAdd);
    res.end("Item added");
})

// @route PUT array/updateFirst
// @desc Updates first array item
// @access Public
router.put("/updateFirst", (req,res) => {
    var newItem = req.body.item;
    array[0] = newItem;
    res.end("First item updated");
})

// @route DELETE array/deleteFirst
// @desc Deletes first array item
// @access Public
router.delete("/deleteFirst", (req,res) => {
    lodash.pullAt(array, 0)
    res.end("First item deleted");
})

module.exports = router;