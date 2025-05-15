import React, { useEffect } from 'react'
import styles from './BasketSec.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBasketThunk, getBasketThunk,  } from '../../../redux/reducers/basketSlice'
import BasketCard from '../../../components/common/cards/basketCard/BasketCard'
const BasketSec = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getBasketThunk())
    },[])
    const basket=useSelector((state)=>state.basket.basket) || []
    const DeleteBasket=(item)=>{
        dispatch(deleteBasketThunk(item))
    }
  return (
    <div className={styles.container}>
      {basket && basket.map(item=><BasketCard item={item} DeleteBasket={()=>DeleteBasket(item._id)}/>)}
    </div>
  )
}

export default BasketSec
