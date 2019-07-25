const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/example`,
{ useNewUrlParser: true });

const array = require("./routes/array.js");
const items = require("./routes/items.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/array", array);
app.use("/items", items);

mongoose.connect(`mongodb://localhost:27017/example`).then( () => { 
    console.log("connection ready"); }, 
    (err) => { console.log("handle errors");});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));