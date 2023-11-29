import React from 'react'
import { Star } from 'lucide-react'

const Stars = () => {
  return (
     <div className='flex'>
          <Star size={15} strokeWidth={0} className='fill-green-500'/>
          <Star size={15} strokeWidth={0} className='fill-green-500'/>
          <Star size={15} strokeWidth={0} className='fill-green-500'/>
          <Star size={15} strokeWidth={0} className='fill-green-500'/>
          <Star size={15} strokeWidth={0} className='fill-green-500'/>
     </div>
  )
}

export default Stars
