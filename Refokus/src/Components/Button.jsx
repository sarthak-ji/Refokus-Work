import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <>
        <div className='my-auto mx-5'>
            <div className='w-32 h-8 bg-purple-300 rounded-4xl px-3 py-2 flex items-center justify-between '>
                <span className='font-medium text-sm text-black'>Get Started</span>
                <IoIosReturnRight/>
            </div>
        </div>
    </>
  )
}

export default Button
