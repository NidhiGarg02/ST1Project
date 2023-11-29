const mongoose = require("mongoose");
const user = new mongoose.Schema(
    {
        name:{type:String,required:true},
        title:{type:String,required:true},
        book_code:{type:Number,required:true},
        author:{type:String,required:true},
        publication_year:{type:Number,required:true},
        genre:{type:String,required:true},
        isbn:{type:Number,required:true},
        price:{type:Number,required:true},
    }
)
module.exports = mongoose.model("bookStore",user);