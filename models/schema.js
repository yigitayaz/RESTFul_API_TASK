/* This file creates  countries collection schema.*/
var mongoose = require('mongoose');

var Schema  = mongoose.Schema;

var countriesSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    region: String

});
module.exports = mongoose.model("countries",countriesSchema);