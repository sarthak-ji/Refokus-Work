import React from 'react'

function Stripe({val}) {

  return (
    <div className='h-full w-80 border-r-[0.1px] border-l-[0.1px] border-zinc-500 flex items-center justify-between px-4 text-white'>
        <img src={val.url} alt="image" />
        <span className='font-semibold'>{val.num}</span>
    </div>
  )
}

export default Stripe
