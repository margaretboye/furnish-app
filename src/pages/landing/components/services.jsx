import React from 'react'
import K from '../../../constant';
import { HeartHandshake } from 'lucide-react';

const Services = () => {
  return (
    <div className='grid grid-cols-4 gap-x-2 py-2 px-3'>
      {
        K.SERVICES.map(
          (service, index) => {
            return <div key={index} className='p-10 w-full h-full' style={{ backgroundColor: service.bgColor, }}>

              <div key={index} className='w-16 h-16 text-center rounded-full' style={{ backgroundColor: service.iconBg}}>
                <span className='text-center'><HeartHandshake width={40} height={40}/></span>
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