import React, { useContext } from 'react'
import Cartitems from '../Components/Cartitems'
import Context from '../context/StateContext'
import Emptyanimation from '../Components/Emptyanimation'
import Recentlyviewedproducts from '../Components/Recentlyviewedproducts'

import {loadStripe} from '@stripe/stripe-js';

const Cartpage = () => {
  const flatPrice = 2.99;
  const { cartItems, deleteItemFromCart, total, recentlyViewedProducts } = useContext(Context)


  const pay = async () => {
    try {
      const response = await fetch('https://redoxx-store.vercel.app/checkout', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: cartItems })
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data.url) {
          window.location.assign(data.url);
        }
      } else {
        console.error('Failed to fetch');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };
  
  

  if(cartItems.length === 0){
    return <Emptyanimation />
  }
  return (
    <div>
      <h2 className='text-2xl lg:text-3xl font-semibold'>Cart</h2>

      <div className='grid  grid-cols-1 md:grid-cols-5 gap-8 mt-8'>
        <div className='self-start col-span-1 md:col-span-3 p-4 flex flex-col gap-4 sm:gap-6 sm:p-6 rounded-xl border border-black/20'>
          {cartItems.map(cartItem => (
            <Cartitems 
              key={cartItem?.id} 
              cartItems={cartItems} 
              cartItem={cartItem} 
              deleteItemFromCart={deleteItemFromCart} 
            />
          ))}
        </div>

        <div className='self-start col-span-1 md:col-span-2 md:sticky md:top-4 p-4 sm:p-6 rounded-xl border border-black/20'>
          <h3 className='text-xl font-semibold'>Order Summary</h3>
          <div className='flex justify-between mt-4 pb-2 border-b border-black/30'>
            <span className='text-base md:text-lg font-medium'>Subtotal</span>
            <span className='text-base md:text-lg font-bold'>${total}</span>
          </div>
          <div className='flex justify-between mt-4 pb-2'>
            <span className='text-base md:text-lg font-medium'>Order total</span>
            <span className='text-base md:text-lg font-bold'>${total}</span>
          </div>

          <button
            onClick={pay}
            className='w-full py-2 sm:py-3 rounded-lg text-lg font-bold text-white mt-4 bg-emerald-600 hover:bg-emerald-700 transition duration-300'>Checkout</button>
        </div>
      </div>

      {recentlyViewedProducts.length !== 0 && <Recentlyviewedproducts />}
    </div>
  )
}

export default Cartpage
