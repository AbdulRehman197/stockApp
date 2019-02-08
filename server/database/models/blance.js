const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise


// Define userSchema
const blanceSchema = new Schema({
	blance: { type: Number, unique: false, required: false }

})

const Blance = mongoose.model('Blance', blanceSchema)
module.exports = Blance;