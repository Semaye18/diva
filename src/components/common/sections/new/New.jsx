import React from 'react'
import styles from './New.module.scss'
const New = () => {
  return (
    <div className={styles.new}>
      <div className={styles.container}>
        <h1>New Arrivals</h1>

        <div className={styles.cards}>
            <div className={styles.card}>
                <img src="https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_05_720x.png?v=1733818297" alt="" />
                <h3>Brown hat craft</h3>
                <span>m.944.00</span>
            </div>
            <div className={styles.card}>
                <img src="https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_05_720x.png?v=1733818297" alt="" />
                <h3>Brown hat craft</h3>
                <span>m.944.00</span>
            </div>
            <div className={styles.card}>
                <img src="https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_05_720x.png?v=1733818297" alt="" />
                <h3>Brown hat craft</h3>
                <span>m.944.00</span>
            </div>
            <div className={styles.card}>
                <img src="https://rivon-demo.myshopify.com/cdn/shop/files/Fashion_05_720x.png?v=1733818297" alt="" />
                <h3>Brown hat craft</h3>
                <span>m.944.00</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default New
