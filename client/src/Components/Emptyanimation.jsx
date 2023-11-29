import React from 'react'
import Animation from '../assets/empty cart animation.json'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'

const Emptyanimation = () => {
  return (
     <div className='aspect-[2/1] max-sm:aspect-square text-center flex flex-col items-center'>
          <div className='w-[min(450px,100%)] mx-auto hue-rotate-[260deg]'>
               <Lottie animationData={Animation} loop={true}/>
          </div>
          <h2 className='text-base sm:text-2xl mt-4 font-bold'>Your cart is currently empty.</h2>
          <Link to='/' className=''>
               <p className='text-lg font-bold text-white px-8 py-2 mt-4 rounded-md bg-emerald-600 hover:bg-emerald-700 transition duration-300'>Go back</p>
          </Link>
     </div>
  )
}

export default Emptyanimation
