const express = require('express');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017').then(()=>{     //This is returning the promise and we use( .then ) to catch that promise 
    console.log("Connected to MongoDB");
})

const app = express();

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})



