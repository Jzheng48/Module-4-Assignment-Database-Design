const Customer = require('../models/customerSchema')


exports.getData= async (req, res) => 
   {
    const customers = await Customer.find()
    res.status(200).json({
        status:'success',
        results: customers.length,
        data: {
            customers
        }
    })
   }

exports.getDataById= async (req, res) => 
   {
    const {id} = req.params
    const customers = await Customer.find({_id:id})
    res.status(200).json({
        status:'success',
        results: customers.length,
        data: {
            customers
        }
    })
   }

exports.postData =async (req, res) =>    {
    const newCustomer=req.body;
    const customers = await Customer.create(newCustomer)

    res.status(201).json({
        status: 'success',
        data:customers
    })


}


exports.patchDataById =async (req, res) => 
{
 const {id} = req.params
 const newCustomer=req.body;
 const customers = await Customer.findOneAndUpdate({_id:id}, newCustomer, {
    new: true
  })
 res.status(200).json({
     status:'success',
     results: customers.length,
     data: {
         customers
     }
 })
}

exports.deleteDataById = async (req, res) => 
{
 const {id} = req.params
 const customers = await Customer.deleteOne({_id:id})
 res.status(200).json({
     status:'success',
     results: customers.length,
     data: {
         customers
     }
 })
}