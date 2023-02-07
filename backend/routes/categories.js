const router = require("express").Router();

const expensesCategories = [
  "Food",
  "Children",
  "Rent",
  "Electricity",
  "Water",
  "Property Tax",
  "Transportation",
  "Car",
  "Medical",
  "Clothing",
  "Insurance",
  "Entertainment",
  "Cosmetics",
  "Pets",
  "Love",
  "Other",
];
const incomesCategories = [
  "Salary",
  "Side Hustle",
  "Investments",
  "Pension",
  "Scholarship",
  "Gift",
  "Other",
];

router.route('/').get((req, res) => {
  res.json([expensesCategories, incomesCategories]);
});

router.route('/:type').get((req, res) => {
  req.params.type === "expense"
    ? res.json(expensesCategories)
    : res.json(incomesCategories);
});


module.exports = router;
