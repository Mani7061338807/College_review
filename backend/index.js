const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')
const userRoutes = require('./src/routes/userRoutes')

//db connect
app.use(express.json());
const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://manishankarkumar789:mani789@cluster0.6apcgn9.mongodb.net/?retryWrites=true&w=majority");
        console.log("db connected!");
    } catch (error) {
        console.log(error);
    }
}

dbConnection();
app.use(cors());
app.use(userRoutes);

app.listen(3001,()=>{
console.log("server started..");
});