import express from 'express';
import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017/md4_demo1').then(()=>{
    console.log('--DB Connection Success--')
}).catch((error)=>{
    console.log(error.message)
})
const app = express();
app.listen(3000,()=>{
    console.log('--Server is Running--')
})