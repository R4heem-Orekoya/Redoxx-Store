import React, { useContext } from 'react'
import Context from '../context/StateContext'
import { Link } from 'react-router-dom'
import { urlFor } from '../lib/client'

const Productcard = ({ product }) => {
  const { addToRecentlyViewed } = useContext(Context)

  return (
    <div className='flex-1 min-w-[min(320px,100%)] col-span-1'>
      <Link 
        onClick={() => addToRecentlyViewed(product)}
        to={`/product/${product.slug}`}>
        <div className='aspect-square bg-zinc-100 rounded-2xl overflow-hidden'>
          <img src={urlFor(product.image[2])} alt={product?.name} className='w-full aspect-square object-cover'/>
        </div>
      </Link>

      <div className='flex justify-between items-center mt-4'>
        <h3 className='text-xl font-bold truncate'>{product.name}</h3>
        <span className='text-lg font-semibold'>${product.price}</span>
      </div>
      <p className='text-base mt-2 mb-4 truncate'>{product.intro}</p>
      <Link 
        onClick={() => addToRecentlyViewed(product)}
        to={`/product/${product.slug}`}>
        <span 
          className='px-4 py-2  text-sm font-semibold text-emerald-700 hover:bg-emerald-700 hover:text-white transition duration-300 border-2 border-emerald-700 rounded-full'>
            Learn more
        </span>
      </Link>
    </div>
  )
}

export default Productcard
