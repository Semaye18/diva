import basketModel from "../model/basketModel.js"


export const getBasket=async(req,res)=>{
    const basket= await basketModel.find()
    res.json(basket)
}
export const postBasket=async(req,res)=>{
    const {image,title,price}=req.body
    const newBasket={image,title,price}
    await basketModel.create(newBasket)
    res.json(newBasket)
}
export const deleteBasket=async(req,res)=>{
const {id}=req.params
await basketModel.findByIdAndDelete(id)
res.json('basketden silindi')
}
