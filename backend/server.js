//Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//Creating an express app
const app = express();
const PORT = process.env.PORT || 5000;

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

//Server Connection
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
