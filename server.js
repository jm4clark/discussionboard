const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

const items = require("./routes/items.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/items", items);

mongoose.connect(`mongodb://localhost:27017/items`, { useNewUrlParser: true }).then( () => { 
    console.log("connection ready"); }, 
    (err) => { console.log(err);});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));