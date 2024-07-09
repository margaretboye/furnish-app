import React from 'react'
import { ServicesBackground } from '../../../assets';
import { PlayIcon } from '@heroicons/react/16/solid';

const About = () => {
  return (
    <div className='bg-[#F0EEEF] py-32 '>
      <div className='mx-20'>
        <div className='flex justify-center items-center'>
          <img src={ServicesBackground} alt="services-img" />
          <div className=' -ml-12'>
            <h6 className='text-[#0000004D] mb-1 text-xs font-semibold tracking-wider'>ABOUT THE FEMALE</h6>
            <h2 className='text-[#052C43] mb-6 text-4xl font-medium'>We promise to be your trusted companion</h2>
            <p className='text-[#808080] text-base mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <div className='text-white bg-[#CF7500] rounded-full w-20 h-20 flex items-center justify-center'><PlayIcon width={20} height={20}/></div>
          <p className='text-[#CF7500]'>Watch Video</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;