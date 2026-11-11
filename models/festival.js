const mongoose = require("mongoose");

const festivalSchema = mongoose.Schema({
    name: String,
    location: String,
    date: String
});

module.exports = mongoose.model("Festival", festivalSchema);