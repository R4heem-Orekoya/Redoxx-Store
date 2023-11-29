import React, { useContext } from 'react'
import Slider from '../Components/Banner'
import Recommendedproducts from '../Components/Recommendedproducts'
import Recentlyviewedproducts from '../Components/Recentlyviewedproducts'
import Context from '../context/StateContext'

const Homepage = () => {
  const { recentlyViewedProducts } = useContext(Context)
  return (
    <>
      <Slider />

      <section className='mt-8 md:mt-10'>
        <Recommendedproducts />

        {recentlyViewedProducts.length !== 0 && <Recentlyviewedproducts />}
      </section>
    </>
  )
}

export default Homepage
