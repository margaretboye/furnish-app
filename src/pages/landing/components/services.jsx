import React from 'react'
import K from '../../../constant';
import { HeartHandshake } from 'lucide-react';

const Services = () => {
  return (
    <div className='grid grid-cols-4 gap-x-2 p-4'>
      {
        K.SERVICES.map(
          (service, index) => {
            return <div key={index} className='py-10 px-9 flex flex-col'
              style={{ backgroundColor: service.bgColor }}>

              <span className='p-3 w-fit rounded-full mb-5'
                style={{ backgroundColor: service.iconBg }}>
                {service.Icon}
              </span>

              <h3 className='text-lg font-bold text-[#052c43] font-medium'>
                {service.title}
              </h3>

              <p className='leading-normal text-[#80808B]'>
                {service.description}</p>
            </div>
          }
        )
      }
    </div>
  )
}

export default Services;