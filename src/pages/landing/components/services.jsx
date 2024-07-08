import React from 'react'
import K from '../../../constant';
import { HeartHandshake } from 'lucide-react';

const Services = () => {
  return (
    <div className='grid grid-cols-4 gap-x-2 py-2 px-3'>
      {
        K.SERVICES.map(
          (service, index) => {
            return <div key={index} className='p-10 w-full h-full' style={{ backgroundColor: service.bgColor }}>

              <div className='text-center w-16 h-16 rounded-[50%] flex items-center justify-center' key={index} style={{ backgroundColor: service.iconBg}}>
                <span className='text-center h-7'><HeartHandshake width={30} height={30}   className=' rounded-full'/></span>
              </div>
              <h3 className='text-lg'>{service.title}</h3> 
              <p className='leading-7'>{service.description}</p>
            </div>
          }
        )
      }
    </div>
  )
}

export default Services;