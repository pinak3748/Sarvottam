import React from 'react'
import logo from '../assets/logo.png'
export default function Navbar() {
    return (
        <div className='backdrop-blur-lg bg-white/30 sticky top-0 z-50 w-full flex justify-around item-center gap-x-4 py-4 border-b-[0.5px] border-gray-200'>
            <div className='flex item-center gap-x-2'>
                <img src={logo} className='h-8' />
                <h1 className='text-Montserrat text-2xl font-semibold text-secondary'>Sarvottam</h1>
            </div>
            <ul className='flex item-center gap-x-7 mt-1'>
                <li className='text-secondary font-semibold text-[14px] text-Inter h-fit py-1 border-b-2 border-primary  cursor-pointer'>Home</li>
                <li className='text-[#adadad] hover:text-secondary text-[14px] h-fit transition-all duration-100 ease-in-out text-Inter py-1 hover:border-b-2 border-primary cursor-pointer'>Our Brand</li>
                <li className='text-[#adadad] hover:text-secondary text-[14px] h-fit transition-all duration-100 ease-in-out text-Inter py-1 hover:border-b-2 border-primary cursor-pointer'>Products</li>
                <li className='text-[#adadad] hover:text-secondary text-[14px] h-fit transition-all duration-100 ease-in-out text-Inter py-1 hover:border-b-2 border-primary cursor-pointer'>Our Services</li>
                <li className='text-[#adadad] hover:text-secondary text-[14px] h-fit transition-all duration-100 ease-in-out text-Inter py-1 hover:border-b-2 border-primary cursor-pointer'>Gallery</li>
                <li className='text-[#adadad] hover:text-secondary text-[14px] h-fit transition-all duration-100 ease-in-out text-Inter py-1 hover:border-b-2 border-primary cursor-pointer'>Contact Us</li>
            </ul>
            <div>
                <button className='bg-[#f0504f] px-4 py-2.5 text-sm text-Inter text-offwhite font-[500] rounded-lg'>
                    Get Started
                </button>
            </div>
        </div>
    )
}
