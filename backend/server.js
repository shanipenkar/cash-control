const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const transactionsRouter = require("./routes/transactions");
const categoriesRouter = require("./routes/categories");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/transactions", transactionsRouter);
app.use('/categories', categoriesRouter);
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




// const mongoose = require("mongoose");
// const mongodb = require('mongodb');

// const app = express();

// const MongoClient = mongodb.MongoClient;
// const uri =
//   "mongodb+srv://shanipen:eWomSD3iQGRq0V8A@cluster0.63kmh3h.mongodb.net/?retryWrites=true&w=majority";

// app.use(express.json());
// const port = 5000;

// // Endpoints
// app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}.`);
// });

// MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
//     if (err) return console.error(err);

//     const db = client.db('test-db');
//     console.log('Connected to MongoDB Atlas');
  
//     app.get('/get-data', (req, res) => {
//       db.collection('test-collection').find().toArray((err, data) => {
//         if (err) return console.error(err);
//         res.json(data);
//       });
//     });
//   });