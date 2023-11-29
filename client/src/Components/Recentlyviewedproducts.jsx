import React, { useContext } from 'react'
import Context from '../context/StateContext'
import Productcard from './Productcard'

const Recentlyviewedproducts = () => {
  const { recentlyViewedProducts } = useContext(Context)

  return (
    <div  className='mt-10 lg:mt-20'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
            Recently Viewed 
          </h2>

          <div className='flex gap-4 w-full overflow-x-auto mt-6 lg:mt-10 pb-8 snap-mandatory snap-x'>
            {recentlyViewedProducts.map(product => (
              <Productcard product={product} key={product.slug} />
            ))}
          </div>
    </div>
  )
}

export default Recentlyviewedproducts
