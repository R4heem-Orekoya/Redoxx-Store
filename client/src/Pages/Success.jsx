import React from 'react'
import Lottie from 'lottie-react'
import Animation from '../assets/thank you.json'

const Success = () => {
  return (
    <div className='w-full h-96 grid place-items-center'>
      <Lottie animationData={Animation} loop={true} />
      <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium'>Thanks for shopping with us!😁</span>
    </div>
  )
}

export default Success
