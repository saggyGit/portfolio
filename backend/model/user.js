const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    Name: String,
    Email: String,
    Prof: String,
    Feedback: String
})

module.exports = mongoose.model("feedback", userschema);