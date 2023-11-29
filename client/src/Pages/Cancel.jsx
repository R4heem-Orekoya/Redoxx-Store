import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import Animation from '../assets/sad.json'

const Cancel = () => {
  return (
    <div className='w-full h-96 grid place-items-center'>
      <Lottie animationData={Animation} loop={true} className='w-32 hue-rotate-[190deg]'/>
      <span className='text-xl sm:text-2xl text-center font-medium'>
        Seems like you cancelled your order!😔,
        did you forget to add something?
      </span>
      <Link to='/' className='px-8 py-2 bg-emerald-600 text-lg text-white font-medium rounded-md hover:bg-emerald-700 transition duration-300'>Shop</Link>
    </div>
  )
}

export default Cancel
