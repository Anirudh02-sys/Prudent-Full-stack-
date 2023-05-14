const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const userSchema = new mongoose.Schema({
    username:{
        required: true,
        type: String,
        unique: true
    },
    email:{
        required:true,
        type:String,
        unique: true
        
    },
    password:{
        required: true,
        type:String
    },
    role:{
        required: true,
        type:String,
    },
    subjects:{
        type:Array,
    }
})

userSchema.pre('save',function(next){
    var user = this;
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
        user.password = hash;// Store hash in your password DB.
        console.log(user)
        next();
    });
    
})

module.exports = mongoose.model('User',userSchema)