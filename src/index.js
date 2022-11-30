const mongoose = require("mongoose")
const validator = require("validator")

mongoose.connect('mongodb://127.0.0.1:27017/ecocad-database', {useNewUrlParser: true}) 

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required:true,
        minlength: 11,
        maxlength: 11
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new error('email is invalid')
            }
        }
    },
    whatsapp: {
        required: true,
        type: String,
    },
    projectType: {
        type: String,
        trim: true,
        required: true
    },
    message: {
        type: String,
        required:true
    }
},{
    timestamps: true
})

const User = new mongoose.model('users',userSchema )

module.exports = User


