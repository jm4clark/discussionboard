const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var itemSchema = new Schema({
    username: {
        type: String,
        required: true 
    },
    content: String,
    email: {
        type: String,
        required: true 
    }
});

var Item = mongoose.model(
    'Item',
    itemSchema
);

module.exports = Item = mongoose.model("items", itemSchema);