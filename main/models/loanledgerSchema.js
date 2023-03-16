//import mongoose from 'mongoose';
let mongoose = require('mongoose');

const { Schema } = mongoose;

const loanledgerSchema = new Schema({

    PAYMENT_AMOUNT:{
        type: Number,
        default: 0,
    },
    INTEREST:{
        type: Number,
        default: 0,
    },
    PRINCIPAL:{
        type: Number,
        default: 0,
    },

    CREATED_DATE:{ type: Date, default: Date.now },
    MODIFIED_DATE:{ type: Date, default: Date.now },
    
    IS_DELETED:{type:Boolean, default:false}

    
});


const loanledger = mongoose.model('loanledger', loanledgerSchema);

module.exports= loanledger

