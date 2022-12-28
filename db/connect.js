const mongoose=require('mongoose');
    
const connectDB=(url)=>{
    mongoose.connect(url).then(()=>{console.log('connected')}).catch((err)=>{console.log(err)});   // this returns a promise
}
module.exports=connectDB;
 

// promises are eithere rejected or gets full-filled  if rejected then catch will handel else then will handel 