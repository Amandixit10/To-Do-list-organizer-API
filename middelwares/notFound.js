const notFound=(req,res)=>{
res.status(404).send({msg:"pasge Not found"});
}
module.exports=notFound;