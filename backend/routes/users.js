const router = require('express').Router();
const User = require('../models/user.model.js');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/deleteall').delete((req, res) => {
  User.deleteMany({})
  .then(() => res.send('All users deleted.'))
  .catch(err => res.status(400).send('Error: ' + err));});

router.route('/add').post((req, res) => {
  console.log('1. Received post request to add a user');

  const newUser = new User({
    username: req.body.username,
    password: req.body.password
  });
  console.log(`3. Created new user object: ${newUser}`);

  newUser.save(function(err){
    if (err) {
      console.log(`Error occurred while saving new user: ${err}`);
      res.status(400).send({ status: "Error:",message: "User already exists!"});
    } else {
      res.status(200).send({ status: "Success:", message: "User added!"});
    }
  });
  });

    

module.exports = router;


