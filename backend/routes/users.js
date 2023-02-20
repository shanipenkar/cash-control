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

router.route('/register').post((req, res) => {
    
  const newUser = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  console.log(`Created new user object: ${newUser}`);

  newUser.save(function(err){
    if (err) {
      console.log(`Error occurred while saving new user: ${err}`);
      res.status(400).send({ status: "Error:",message: "Username already exists!"});
    } else {
      res.status(200).send({ status: "Success:", message: "User added!", userId: newUser._id});
    }
  });
  });

  router.route('/login').post((req, res) => {
    const { username, password } = req.body;
    console.log(`Login attempt for user: ${username}`);
    User.findOne({ username }, (err, user) => {
      if (err) {
        return res.status(500).send({ status: "Error:", message:"Error occurred while trying to login"});
      }
      if (!user) {
        return res.status(404).send({ status: "Error:", message: "Username not found"});
      }
      if(user.password !== password) {
        return res.status(401).send({ status: "Error:", message: "Password is incorrect"});
      } else {
        return res.status(200).send({ status: "Success:", message: "Login successful", userId: user._id});
      }
    });
  });
module.exports = router;


