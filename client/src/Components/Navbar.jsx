import { useContext } from 'react'
import { Search, ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Context from '../context/StateContext'

const Navbar = () => {
     const { cartItems, setSearch } = useContext(Context)
  return (
     <header>
          <nav className='w-[min(1400px,90%)] h-[80px] mx-auto flex items-center justify-between flex-wrap gap-4'>
               <Link to='/' className='text-3xl font-semibold'>Redoxx-Store</Link>

               <ul className='flex gap-8 items-center'>
                    <li>
                         <Link to='/search'>
                              <form className='relative flex gap-4 bg-zinc-100 h-[40px] w-[250px] rounded-full focus-within:ring-1 focus-within:ring-black/80 max-sm:hidden'>
                                   <input onChange={(e) => setSearch(e)} type="text" placeholder='Search for a product...' className='w-full rounded-full border-none outline-none pl-4 bg-transparent'/>
                                   <Search size={20} strokeOpacity={0.7} className='absolute top-1/2 right-4 -translate-y-1/2'/>
                              </form>
                         </Link>
                    </li>
                    <li>
                         <Link to='/cart' className='relative'>
                              <span className='absolute top-0 right-0 bg-red-500 text-white rounded-full w-3 aspect-square text-[0.5rem] font-black grid place-items-center'>
                                   {cartItems.length}
                              </span>
                              <ShoppingCart size={25} strokeOpacity={0.8}/>    
                         </Link>
                    </li>
               </ul>
          </nav>
     </header>
  )
}

export default Navbar
