const mongoose = require("mongoose");
const config = require("config");
const uri = config.get("DB_STRING");
exports.connectTo = ()=>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("Connection successfull"))
    .catch((error)=>console.log("Connection not successfull"+error.message));
}