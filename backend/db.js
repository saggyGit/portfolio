const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/portfolio');


module.exports = mongoose;