import React from 'react'
import { LandingImage } from '../../../assets';

const Hero = () => {
  return (
    <div className='flex h-screen'>
      <div className='w-1/2 bg-[#D4EAF5] place-content-center' >
        <div className='mx-auto w-fit flex flex-col items-start gap-y-5 pl-20'>
          <div className='flex flex-col text-5xl'>
            <span className='font-thin text-[#F44844]'>Best Design of</span>
            <span className='font-bold'>Furniture Collections</span>
          </div>
          <p className='w-80'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          <button className='bg-[#F44844] pl-6 pr-6 py-2 rounded-full drop-shadow-lg text-white'>DISCOVER</button>
        </div>
      </div>
      <div className='w-2/4 h-screen'>
        <img
          src={LandingImage}
          alt=""
          className='h-full object-cover' />
      </div>
    </div>
  )
}

export default Hero;