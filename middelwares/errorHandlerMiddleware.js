const {CustomAPIError} = require('../errors/custom-errors')
const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof CustomAPIError)
    {
        return res.status(err.customeErrorCode).json({err:err.message})
    }
    return res.status(500).json({msg: err})
}
module.exports=errorHandlerMiddleware;