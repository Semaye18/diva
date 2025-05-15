import React from 'react'
import styles from './ProductCard.module.scss'
const ProductCard = ({item,AddToBasket}) => {
  return (
    <div className={styles.card}>
      <img src={item.image} alt="" />
      <p>{item.title}</p>
      <p>{item.price}</p>
      <button onClick={AddToBasket}>Add To Basket</button>
    </div>
  )
}

export default ProductCard
