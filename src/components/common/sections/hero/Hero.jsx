import React from 'react'
import styles from './Hero.module.scss'
const Hero = () => {
  return (
    <div className={styles.hero}> 
      <div className={styles.container}>
        <div className={styles.text}>
      <h1>Be bold.<br/>
          Be beautiful.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada <br />
      lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula <br />
      sapien. Suspendisse cursus faucibus finibus.
</p>
      <button>See Offers</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
