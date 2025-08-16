const express = require('express');
const app = express();
const Product = require('./models/products.model'); // Import the Product model
const mongoose = require('mongoose');
const routes = require('./routes/product.route'); // Import the product routes

const productRoute = require('./routes/product.route'); // Import the product routes
// Using Node.js `require()`

// Using ES6 imports
// import mongoose from 'mongoose';

//middleware
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded bodies

//routes
app.use('/api/products',productRoute) //importing routes from products.routes.js file



// app.get('/', (req, res) => {   // req - whatever the clinet sends to the server
//     res.send('Hello From the node API!!1122');  // res -comes back from the server to the client


// })


// Connect to MongoDB
mongoose.connect("mongodb+srv://sparta:tAK5jXxmUU4pRFvS@backenddb.9kuqnuh.mongodb.net/node-api?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log('Connected to Database!')
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })

    .catch(() => {
        console.error('Error connecting to the database')
    });