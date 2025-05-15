import express, { urlencoded } from 'express'
import cors from 'cors'
import productRouter from './router/productRouter.js'
import { configDotenv } from 'dotenv'
import { connectDB } from './confing/confing.js'
import basketRouter from './router/basketRouter.js'

configDotenv()
const app=express()
app.use(cors())
app.use(urlencoded({extended:true}))
app.use(express.json())

connectDB()
app.use('/product',productRouter)
app.use('/basket',basketRouter)
app.listen(5501,()=>{
    console.log("serever qaldirildi");
})