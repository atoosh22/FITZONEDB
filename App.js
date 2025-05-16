const express = require("express");
const mongoose = require("mongoose");

const memberRoute = require('./Routes/membersRoute');

const usersRoute=require('./Routes/usersRoute')



const app = express();
app.use(express.json());

app.use('/members', memberRoute);

app.use('/users', usersRoute);

mongoose.connect('mongodb://localhost:27017/FitzoneDb')
    .then(() => {
        console.log("Database connection successful:", mongoose.connection.name);
        app.listen(3000, () => {
            console.log("Server is running at http://localhost:3000");
        });
    })
    .catch((err) => {
        console.error("Database connection error:", err.message);
        console.log("Please troubleshoot the connection.");
    });

app.get('/', (req, res) => {
    res.send("This is the home page");
});
