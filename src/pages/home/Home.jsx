import React from 'react'
import Layout from '../../components/common/layout/Layout'
import Hero from '../../components/common/sections/hero/Hero'
import ProductSec from '../product/productSec/ProductSec'
import Top from '../../components/common/sections/top/Top'
import New from '../../components/common/sections/new/New'


const Home = () => {
  return (
    <div>
     <Layout>
      <Hero/>
      <ProductSec/>
      <Top/>
      <New/>
     </Layout>
    </div>
  )
}

export default Home
