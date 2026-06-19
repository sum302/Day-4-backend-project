const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    image:String,
    caption:String,

})


const postModel=mongoose.model("post",postSchema)


module.exports=postModel;






/*post={
image:string
caption:String
}
user={
name:string,
email:String,
password:string
}*/
