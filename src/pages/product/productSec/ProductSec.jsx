import React, { useEffect } from 'react'
import styles from './ProduuctSec.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {getProductThunk} from '../../../redux/reducers/productSlice'


import ProductCard from '../../../components/common/cards/productCard/ProductCard'
import { postBasketThunk } from '../../../redux/reducers/basketSlice'
const ProductSec = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProductThunk())
    },[])
    const products=useSelector((state)=>state.products.products) || []
    const AddtoBasket=(item)=>{
    dispatch(postBasketThunk(item))
    }
  return (
    <div className={styles.container}>
      {products && products.map(item=><ProductCard item={item} AddToBasket={()=>AddtoBasket(item)}/>)}
    </div>
  )
}

export default ProductSec