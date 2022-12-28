const mongoose=require('mongoose');
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required :[true,'must provide name'],
        trim:true,
        maxlength:[20,'name must be not more than 20 characters'],
    },
    completed:{
        type:Boolean,
    default:false},
})

module.exports= mongoose.model('Task',TaskSchema);  // its like giving collection name and structure