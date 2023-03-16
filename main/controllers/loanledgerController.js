const Loanledger = require('../models/loanledgerSchema')


exports.getData= async (req, res) => 
   {
    const loanledgers = await Loanledger.find()
    res.status(200).json({
        status:'success',
        results: loanledgers.length,
        data: {
            loanledgers
        }
    })
   }

exports.getDataById= async (req, res) => 
   {
    const {id} = req.params
    const loanledgers = await Loanledger.find({_id:id})
    res.status(200).json({
        status:'success',
        results: loanledgers.length,
        data: {
            loanledgers
        }
    })
   }

exports.postData =async (req, res) =>    {
    const newLoanledger=req.body;
    const loanledgers = await Loanledger.create(newLoanledger)

    res.status(201).json({
        status: 'success',
        data:loanledgers
    })


}


exports.patchDataById =async (req, res) => 
{
 const {id} = req.params
 const newLoanledger=req.body;
 const loanledgers = await Loanledger.findOneAndUpdate({_id:id}, newLoanledger, {
    new: true
  })
 res.status(200).json({
     status:'success',
     results: loanledgers.length,
     data: {
         loanledgers
     }
 })
}

exports.deleteDataById = async (req, res) => 
{
 const {id} = req.params
 const loanledgers = await Loanledger.deleteOne({_id:id})
 res.status(200).json({
     status:'success',
     results: loanledgers.length,
     data: {
         loanledgers
     }
 })
}