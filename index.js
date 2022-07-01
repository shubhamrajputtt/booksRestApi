const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000

//connect to mongooes
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then(()=>{
    console.log("Connect to mongodb atlas");
    
}).catch(error =>{
    console.log("Something wrong happend",error);
})
//start server
app.listen(PORT,() =>{
    console.log("server started at these port",PORT);
});

