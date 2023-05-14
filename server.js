const express = require("express")
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var appRouter = require('./app/routes/api')
var path = require('path');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))
app.use('/api',appRouter) // Backend routes 


mongoose.connect('mongodb://127.0.0.1:27017/Prudent')
.then(()=>{
    console.log('Connected')
}).catch('Error')

app.get('*',(req,res)=>
{
    res.sendFile(path.join(__dirname +'/public/app/views/index.html'));
})


app.listen(3000)
