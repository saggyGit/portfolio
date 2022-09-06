const e = require('cors');
const express = require('express');
const app = express();
const con = require('./db');
const cors = require('cors');

con.connection.on("connected", (err) => {

    if (err) {
        console.log(err);
    } else {
        console.log("connected to mongodb");
    }
})


app.use(cors());
app.use(express.json());
app.use("/user", require("./route/user"));



app.listen(1000, () => {
    console.log('server is connected')
})