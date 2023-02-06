const mongoose = require("mongoose");
const {expensesCategories, incomesCategories}  =  require("../routes/categories.js");
const transactionsTypes = require("../transactionsTypes.js");
const Schema = mongoose.Schema;


const transactionSchema = new Schema({
    date: {type: Date, required: true},
    type: {type: String, required: true, enum:transactionsTypes},
    name: {type: String, required: true},
    amount: {type: Number, required: true},
    category: {type: String, required: true},
    description: {type: String},
  }, {
    timestamps: true,
  });
  
  const Transaction = mongoose.model('Transaction', transactionSchema);
  
  module.exports = Transaction;