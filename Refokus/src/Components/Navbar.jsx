import React from 'react'
import Logo from '../assets/Logo.png';
import Button from './Button';

const Navbar = () => {
  return (
    <div className='max-w-screen-lg mx-auto flex justify-between border-b-1 border-zinc-500'>
      <div className='nleft flex'>
        <img className='mt-1 w-36 h-18' src={Logo} alt="logo"/>
        <div className='links text-white flex gap-12 ml-12 my-auto'>
            {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            elem.length === 0 ? (<span key = {index} className='h-6 w-[1px] bg-zinc-500'></span>) : 
            <a key = {index} className='font-regular text-sm flex items-center gap-1' href='#'>
                {index === 1 ? (<span style={{boxShadow: "0 0 0.25em #00FF19"}} className='h-1 w-1 rounded-full bg-green-600 inline-block'></span>) : null}
                {elem}
            </a>
          ))}
        </div>
      </div>
      <Button/>
    </div>
  )
}

export default Navbar
