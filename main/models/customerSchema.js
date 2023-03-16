//import mongoose from 'mongoose';
let mongoose = require('mongoose');

const { Schema } = mongoose;

const customerSchema = new Schema({

    NAME:{
         type: String,
         required: [true, 'must have a name'],
         //unique: true,
         //trim: true,
         maxlength: [40, ' must have less or equal then 40 characters'],
         minlength: [1, ' must have more or equal then 1 characters']
     },

    FIRST_NAME:{
    type: String,
    required: [true, 'must have a name'],
    //unique: true,
    //trim: true,
    maxlength: [40, ' must have less or equal then 40 characters'],
    minlength: [1, ' must have more or equal then 1 characters']
    },

    MIDDLE_NAME:String,

    LAST_NAME:{
        type: String,
        required: [true, 'must have a name'],
        //unique: true,
        //trim: true,
        maxlength: [40, ' must have less or equal then 40 characters'],
        minlength: [1, ' must have more or equal then 1 characters']
    },
    
    DATE_OF_BIRTH:{type:Date},
    GENDER:String,
    CREATED_DATE:{ type: Date, default: Date.now },
    MODIFIED_DATE:{ type: Date, default: Date.now },
    IS_DELETED:{type:Boolean, default:false}

    
});


const customer = mongoose.model('customer', customerSchema);

module.exports= customer

