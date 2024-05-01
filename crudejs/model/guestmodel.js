import mongoose from "mongoose";

const guestSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    email:{type:String},
    city:{type:String}   
})
const guestModel=mongoose.model("user",guestSchema)

export default guestModel