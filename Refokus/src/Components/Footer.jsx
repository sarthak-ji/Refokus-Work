import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-lg mx-auto mt-40 '>
        <div className='flex justify-between text-white'>
            <h1 className='text-9xl font-semibold'>refokus.</h1>
            <div className='flex gap-14 ml-32'>
                <div className='text-zinc-500 text-xs'>
                    <p className='mb-7'>Socials</p>
                    <p className='py-1'>Instagram</p>
                    <p className='py-1'>Twittor</p>
                    <p className='py-1'>LinkedIn</p>
                </div>
                <div className='text-zinc-500 text-xs'>
                    <p className='mb-7'>Sitemap</p>
                    <p className='py-1 text-zinc-300'>Home</p>
                    <p className='py-1 text-zinc-300'>Work</p>
                    <p className='py-1 text-zinc-300'>Careers</p>
                    <p className='py-1 text-zinc-300'>Contact</p>
                </div>
                <div className='ml-12'>
                    <p className='text-xs mb-6'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                    <button className='bg-blue-600 text-xs font-light py-1 px-3 '>Enterprise Partner</button>
                </div>
            </div>
        </div>
        <div className='text-zinc-500 text-xs flex gap-8 mt-8 pb-12'>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Impressum</p>
            <p>Terms</p>
        </div>
    </div>
  )
}

export default Footer

