import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Recentlyviewedproducts from '../Components/Recentlyviewedproducts'
import Stars from '../Components/Stars'
import { Minus, Plus, Loader } from 'lucide-react'
import Context from "../context/StateContext";
import { urlFor } from '../lib/client'
import { Link } from 'react-router-dom'


const Productpage = () => {
  const [index, setIndex] = useState(2)
  const { id } = useParams()
  const { products, addItemToCart, recentlyViewedProducts } = useContext(Context)
  const product = products.find(product => product.slug === id)

  const [quantity, setQuantity] = useState(() => {

    const storedCount = localStorage.getItem(`count_${product?.slug}`);
    return storedCount ? parseInt(storedCount, 10) : 1;
  })

  useEffect(() => {
    // Store the count value in local storage whenever it changes
    localStorage.setItem(`count_${product?.slug}`, quantity.toString());
  }, [quantity, product?.slug]);


  if (!product) {
    return <div className='h-[calc(100vh-80px)] flex justify-center items-center text-3xl'>
      <Loader size={70} strokeOpacity={0.6} className='text-emerald-600 animate-spin'/>
    </div>; // Display a loading indicator
  }

  return (
    <div>
      <div className='grid gap-10 grid-cols-1 lg:grid-cols-2'>
          <div className='col-span-1 lg:col-span-1 flex flex-col gap-4'>
            <div className='aspect-square flex-1 bg-zinc-100 rounded-2xl overflow-hidden'>
              <img src={urlFor(product?.image[index])} alt="" className='w-full h-full object-cover'/>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
              {product.image.map((img, index) => (
                <div onClick={() => setIndex(index)} key={index} className='bg-zinc-100 aspect-square flex-1 cursor-pointer rounded-md lg:rounded-2xl overflow-hidden'>
                  <img src={urlFor(img)} alt={img} className='w-full h-full object-cover'/>
                </div>
              ))}
            </div>
          </div>

          <div className='col-span-1 lg:aspect-square flex flex-col justify-center items-start'>
            <div className='py-6 border-b border-black/20'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>{product?.name}</h2>
              <p className='text-lg my-4'>{product?.details}</p>
              <Stars />
            </div>
            <div className='border-b border-black/20 py-6'>
              <h3 className='text-2xl lg:text-3xl font-medium'>${product?.price}</h3>
            </div>
            <div className='flex flex-col gap-6 py-6'>
              <div className='w-[150px] py-2 bg-slate-400 text-white rounded-full flex gap-6 items-center justify-center'>
                <button 
                  onClick={() => {
                    setQuantity(prev => {
                      if (prev === 1) return prev
                      prev - 1
                    })
                  }}>
                    <Minus size={20} strokeWidth={3}/>
                  </button>
                <span className='text-xl font-semibold'>{quantity}</span>
                <button onClick={() => setQuantity(prev => prev + 1)}><Plus size={20} strokeWidth={3}/></button>
              </div>
              <div className='flex gap-4 items-center border-t border-black/20 pt-6'>
                <Link to='/cart'>
                  <button onClick={() => addItemToCart(quantity, product)}  className='px-8 sm:px-10 py-2 text-sm sm:text-lg font-semibold bg-emerald-600 border-2 border-emerald-600 hover:border-emerald-700 hover:bg-emerald-700 transition duration-300 text-white rounded-full'>
                    Buy Now
                  </button>
                </Link>
                <button onClick={() => addItemToCart(quantity, product)} className='px-6 sm:px-8 py-2 text-sm sm:text-lg font-semibold border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition duration-300 rounded-full'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
      </div>

      {recentlyViewedProducts.length !== 0 && <Recentlyviewedproducts />}
    </div>
  )
}

export default Productpage
