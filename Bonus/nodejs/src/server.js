const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Starting the App
const app = express();
app.use(express.json());
app.use(cors());

// Starging the DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);
requireDir('./models');

// routes
app.use('/api', require('./routes'));

app.listen(3000);