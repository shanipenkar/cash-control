const router = require('express').Router();
const Transaction = require('../models/transaction.model.js');

router.route('/').get((req, res) => {
    Transaction.find()
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const date = Date.parse(req.body.date);
  const type = req.body.type;
  const name = req.body.name;
  const amount = Number(req.body.amount);
  const category = req.body.category;
  const description = req.body.description;

  const newTransaction = new Transaction({date, type, name, amount, category, description});

  newTransaction.save()
    .then(() => res.json('Transaction added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Transaction.findById(req.params.id)
    .then(transaction => res.json(transaction))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Transaction.findByIdAndDelete(req.params.id)
    .then(() => res.json('Transaction deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Transaction.findById(req.params.id)
    .then(transaction => {
      transaction.date = Date.parse(req.body.date);
      transaction.type = req.body.type;
      transaction.name = req.body.name;
      transaction.amount = Number(req.body.amount);
      transaction.category = req.body.category;
      transaction.description = req.body.description;

      transaction.save()
        .then(() => res.json('Transaction updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;