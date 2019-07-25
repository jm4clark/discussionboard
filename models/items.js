const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: String,
    age: Number,
    location: [{
        number: Number,
        place: String
    }]
});

var Item = mongoose.model(
    'Item',
    itemSchema
);

module.exports = Item = mongoose.model("items", itemSchema);