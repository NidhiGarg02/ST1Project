const express = require("express");
const User = require("../models/userModel");
const app = express();
app.use(express.json());
exports.register = async(req,res)=>{
    try{
    const inputData = req.body;
    const data = await User.create(inputData);
    res.status(200).json({data,message:"Book entry created successfully"});
    }
    catch(error){
        console.log("Error occurred");
        res.status(500).json({status:500,message:"error occured"+error.message})
    }
}
exports.delete = async(req,res)=>{
    try{
        const delId = req.params.id;
        const data1 = await User.findByIdAndDelete(delId);
        if (!data1) {
            res.status(404).json({ message: "No found status" });
          }
        res.status(200).json({message:"Deleted Successfully"});
    }
    catch(error){
        res.status(500).json({status:500 , message:"error occured"+ error.message});
    }
}
exports.readSingle=async(req,res)=>{
    try{
        const findId = req.params.id;
        const books = await User.findById(findId);
        if (!books) {
            res.status(404).json({ message: "No found status" });
          }
           res.status(200).json({ books,message:"Found Successfully" });
    }
    catch(error){
        res.status(500).json({status:500 , message:"error occured"+ error.message});
    }
   
    };
    exports.readAll=async(req,res)=>{
        try{
            const book = await User.find();
            if (!book) {
                res.status(404).json({ message: "No found status" });
              }
               res.status(200).json({ book,message:"Found Successfully" });
        }
        catch(error){
            res.status(500).json({status:500 , message:"error occured"+ error.message});
        }
       
        };
exports.update=async(req,res)=>{
    try{
        const idd = req.params.id;
        const {name,book_code,author_name,publisher_name,price,website_to_buy} = req.body;
        const dataa = await User.findByIdAndUpdate(
            { _id:idd},
            {name,title,book_code,author,publication_year,genre,isbn,price}
        )
        if(!dataa){
            res.status(404).json({message:"Not Found Status"})
        }
        res.status(200).json({message:"updated Successfully"});
    }
    catch(error){
        res.status(500).json({status:500 , message:"error occured"+ error.message});
    }
}