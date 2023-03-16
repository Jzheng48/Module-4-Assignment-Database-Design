//import mongoose from 'mongoose';
let mongoose = require('mongoose');

const { Schema } = mongoose;

const loanSchema = new Schema({
    START_DATE:{ type: Date, default: Date.now },

    CREATED_DATE:{ type: Date, default: Date.now },
    MODIFIED_DATE:{ type: Date, default: Date.now },
    LOAN_TYPE:String,
    //{
       // type: String,
        //required: [true, 'must have a name'],
        //unique: true,
        //trim: true,
        //maxlength: [40, ' must have less or equal then 40 characters'],
        //minlength: [1, ' must have more or equal then 10 characters']
    //},
    LOAN_NUMBER:Number,
    AMOUNT:{
        type: Number,
        default: 0,
    },
    INTEREST_RATE:{
        type: Number,
        default: 000,
    },
    LOAN_TERM:{
        type: Number,
        default: 0,
    },
    
    IS_DELETED:{type:Boolean, default:false}

    
});


const loan = mongoose.model('loan', loanSchema);

module.exports= loan

