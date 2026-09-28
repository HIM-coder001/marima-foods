import React from 'react'
import { ShoppingCart , Menu ,ChevronDown} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center bg-white shadow-md py-4'>
        <img src="logo.png" alt="logo" className='cursor-pointer w-32 md:w-40 lg:w-44 h-auto' />

        <div>
            <ul className='lg:flex gap-8 items-center hidden text-lg font-semibold'>
                <li className='text-marama-green hover:text-maroon cursor-pointer'>
                    Home
                </li>
                <li className='text-marama-green  hover:text-maroon cursor-pointer' >
                    About
                </li>
                <li className='text-marama-green  hover:text-maroon cursor-pointer'>
                    Shop
                </li>
                <li className='text-marama-green hover:text-maroon cursor-pointer flex items-center gap-1'>
                    Products 
                    <ChevronDown /> 
                </li>
            </ul>
        </div>

        <div className='flex gap-4 items-center '>
            <button className='bg-marama-green rounded-lg px-4 py-1 text-white hover:bg-maroon transition duration-300 cursor-pointer hidden lg:block'>
                Login
            </button> 

            <ShoppingCart className='text-marama-green cursor-pointer hover:text-maroon' />

            <button className="lg:hidden">
               <Menu className="text-marama-green hover:text-maroon cursor-pointer" />
            </button>   
        </div> 
    </nav>
  )
}

export default Navbar