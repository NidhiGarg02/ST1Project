const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./middleware/db");
db.connectTo();
app.use(express.json());
const route = require("./routes/bookRouter");
app.use('/',route);
app.get('/',(req,res)=>{
    res.send("Hey");
})
app.get('/services',(req,res)=>{
    res.send("Servic page");
})
app.listen(3000,()=>{
    console.log("server started successfully");
})
