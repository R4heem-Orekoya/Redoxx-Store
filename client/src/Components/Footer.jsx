import { Instagram, Twitter } from 'lucide-react'
import TikTok from '../assets/tiktok.svg'
import React from 'react'

const Footer = () => {
  return (
     <footer className='text-center py-8 border-t border-black/5'>
          <h6 className='text-xl md:text-2xl font-medium'>Developed by REDOXX</h6>
          <ul className='flex justify-center items-center gap-4 mt-6'>
               <li>
                    <a href="#"><Instagram size={30} strokeWidth={1.8}/></a>
               </li>
               <li>
                    <a href="#"><Twitter size={30} strokeWidth={1.8}/></a>
               </li>
               <li>
                    <a href="#"><img src={TikTok}></img></a>
               </li>
          </ul>
     </footer>
  )
}

export default Footer
