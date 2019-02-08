const mongoose = require('mongoose')
// const User = require('./user')
const Schema = mongoose.Schema
mongoose.promise = Promise


// Define userSchema
const transactionSchema = new Schema({
	user: { type:Schema.Types.ObjectId, ref: 'User' },
	amount: { type: Number, unique: false, required: false },
    qty: { type: Number, unique: false, required: false },
	date: { type: Date, unique: false, required: false }
    

})

const Transaction = mongoose.model('Transaction', transactionSchema)
module.exports = Transaction;