import React from 'react'
import styles from './BasketCard.module.scss'
const BasketCard = ({item,DeleteBasket}) => {
  return (
    <div className={styles.card}>
       <img src={item.image} alt="" />
      <p>{item.title}</p>
      <p>{item.price}</p>
      <button onClick={DeleteBasket}>delete</button>
    </div>
  )
}

export default BasketCard
