const express= require("express");
const bodyParser = require('body-parser');
const router = require('./routes/routing');
const cors = require("cors")
const app=express();
const mongoose = require("mongoose");
const url = "mongodb://localhost/Travel_DB";
app.use(cors())
app.use(bodyParser.json());

app.use('/', router);

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology:true,useFindAndModify:false}).then(()=>{
    app.listen(3001,()=>{
    console.log("ruuning on port 3001");
});
}).catch(error=>{
    console.log('Error: ',error.message);
})

module.exports = app;