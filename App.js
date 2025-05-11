const express = require("express");
const mongoose = require("mongoose");
const memberRoute = require('./Routes/membersRoute');

const App = express();
App.use(express.json());

App.use('/members', memberRoute);

mongoose.connect('mongodb://localhost:27017/FitzoneDb')
    .then(() => {
        console.log("Database connection successful:", mongoose.connection.name);

        App.listen(3000, () => {
            console.log("Server is running at http://localhost:3000");
        });

    }).catch((err) => {
        console.error("Database connection error:", err.message);
        console.log("Please troubleshoot the connection.");
    });

App.get('/', (req, res) => {
    res.send("This is the home page");
});