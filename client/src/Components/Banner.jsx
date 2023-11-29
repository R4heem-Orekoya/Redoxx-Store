import React, { useContext } from 'react'
import Context from '../context/StateContext'
import { urlFor } from '../lib/client'
import { Link } from 'react-router-dom'
import { Loader } from 'lucide-react'

const Slider = () => {
  const { banner } = useContext(Context)

  if(!banner || banner.length === 0){
    return (
      <>
        <div className='w-full grid place-items-center bg-orange-50 h-[70vh] sm:h-[56vh] rounded-3xl'>
          <Loader size={50} strokeOpacity={0.6} className='animate-spin'/>
        </div>
      </>
    )
  } 

  return (
    <div className='w-full flex max-sm:flex-wrap  justify-between items-center bg-orange-50 p-8 rounded-3xl'>
      <div className='max-sm:text-center'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.4] text-emerald-700'>{banner[0]?.heading}</h1>
        <Link to={`/product/${banner[0].slug}`}>
          <button className='px-8 py-3 bg-emerald-700 hover:bg-emerald-800 transition duration-300 mt-8 text-xl text-white font-bold rounded-full'>{banner[0]?.buttonText}</button>
        </Link>
      </div>
      <div className='w-[min(450px,100%)]'>
        <img src={urlFor(banner[0]?.image)} alt="banner[0]?.image"  className='w-full h-full object-cover drop-shadow-2xl'/>
      </div>
    </div>
  )
}

export default Slider
