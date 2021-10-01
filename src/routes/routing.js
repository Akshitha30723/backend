const express = require('express');
const router = express.Router();
const login = require('../model/login');

router.get("/",(req,res)=>{
    res.send("hello");
});
router.post('/login',(req,res)=>{
    console.log('Body:',req.body);
    res.send({
        msg:"we received your data!!!"
    });
});
module.exports = router;