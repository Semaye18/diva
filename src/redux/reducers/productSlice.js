import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk=createAsyncThunk('api/getproducts',async()=>{
    const response=await axios.get('http://localhost:5501/product')
    return response.data
})
export const postProductThunk=createAsyncThunk('api/postproducts',async(data)=>{
    const response=await axios.post('http://localhost:5501/product',data)
    return response.data
})
 export const deleteProductThunk=createAsyncThunk('api/deleteproducts',async(id)=>{
    const response= await axios.delete(`http://localhost:5501/product/${id}`)
    return id
})

const productSlice=createSlice({
    name:"products",
    initialState:{
        products:[],
    },
    extraReducers:(builder)=>{
        builder

        .addCase(getProductThunk.fulfilled,(state,action)=>{
            state.products=action.payload
        })
        .addCase(postProductThunk.fulfilled,(state,action)=>{
            state.products.push(action.payload)
        })
        .addCase(deleteProductThunk.fulfilled,(state,action)=>{
            state.products=state.products.filter(item=>item._id !== action.payload)
        })
    }
})

export default productSlice.reducer