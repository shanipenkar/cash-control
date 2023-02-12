const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const mongoose = require("mongoose");
const transactionsRouter = require("./routes/transactions");
const categoriesRouter = require("./routes/categories");
const usersRouter = require("./routes/users");

require("dotenv").config();
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/transactions", transactionsRouter);
app.use('/categories', categoriesRouter);
app.use('/users', usersRouter);
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
});
