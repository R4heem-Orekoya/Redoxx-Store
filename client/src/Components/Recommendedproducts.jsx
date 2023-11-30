import React, { useContext } from 'react'
import Productcard from '../Components/Productcard'
import Context from "../context/StateContext";

const Recommendedproducts = () => {
     const { products } = useContext(Context)

     return (
          <div>
               <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
                    Popular Products!
               </h2>
               <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 md:mt-10'>
                    {
                         products.map(product =>(
                              <Productcard product={product} key={product.slug}/>
                         ))
                    }
               </div>
          </div>
     )
}

export default Recommendedproducts
