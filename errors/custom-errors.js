class CustomAPIError extends Error{
    constructor(message,customeErrorCode)
    {
        super(message);
        this.customeErrorCode=customeErrorCode
    }
}
const createCustomError =(msg,statusCode)=>{
    return new CustomAPIError(msg,statusCode)
}

module.exports ={ createCustomError, CustomAPIError}