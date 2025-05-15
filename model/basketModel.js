import mongoose from "mongoose";

export const basketShema=mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})

const basketModel=mongoose.model('basket',basketShema)

export default basketModel