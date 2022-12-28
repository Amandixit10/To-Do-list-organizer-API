const express=require('express');
const app=express();
const tasks=require('./routes/tasks');
const connectDB=require('./db/connect.js')
require('dotenv').config();
const notFound=require('./middelwares/notFound');
const errorHandlerMiddleware=require('./middelwares/errorHandlerMiddleware')
const PORT=5000;
app.use(express.static('./public'))
app.use(express.json());
app.use('/api/v1/tasks',tasks);
app.use(notFound); 
app.use(errorHandlerMiddleware)
const start=()=>{
connectDB(process.env.MONGO_URI);    
} 
start();
app.listen(PORT,console.log(`server is listning on port ${PORT}`))



/*

THIS IS ALSO A VALID WAY TO MAKE MONGODB CONNECTION

const start =async ()=>{
    try{
    wait connectDB(process.env.MONGO_URI);
    app.listen(PORT);
    }
    catch(err){
        console.log(err);
    }
}
start();
*/