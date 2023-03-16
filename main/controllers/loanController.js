const Loan = require('../models/loanSchema')
const APIFeatures = require('./../dataBaseManager/loanDbContext');

exports.getData =   async (req, res) => {
    try {
      // EXECUTE QUERY
      const features = new APIFeatures(Loan.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
      const loans = await features.query;
  
      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        results: loans.length,
        data: {
          loans
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };
/*exports.getData= async (req, res) => 
   {
    const loans = await Loan.find()
    res.status(200).json({
        status:'success',
        results: loans.length,
        data: {
            loans
        }
    })
   }*/

exports.getDataById= async (req, res) => 
   {
    const {id} = req.params
    const loans = await Loan.find({_id:id})
    res.status(200).json({
        status:'success',
        results: loans.length,
        data: {
            loans
        }
    })
   }

exports.postData =async (req, res) =>    {
    const newLoan=req.body;
    const loan = await Loan.create(newLoan)

    res.status(201).json({
        status: 'success',
        data:loan
    })


}


exports.patchDataById =async (req, res) => 
{
 const {id} = req.params
 const newLoan=req.body;
 const loans = await Loan.findOneAndUpdate({_id:id}, newLoan, {
    new: true
  })
 res.status(200).json({
     status:'success',
     results: loans.length,
     data: {
         loans
     }
 })
}

exports.deleteDataById = async (req, res) => 
{
 const {id} = req.params
 const loans = await Loan.deleteOne({_id:id})
 res.status(200).json({
     status:'success',
     results: loans.length,
     data: {
         loans
     }
 })
}