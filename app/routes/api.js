const express = require("express")
const router = express.Router()
var User = require('../models/user')
router.post('/users',(req,res)=>{
    var user = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role,
        subjects: req.body.subjects,
    })
    console.log("User stuff")
    user.save()
    res.send("user created")

})

module.exports = router