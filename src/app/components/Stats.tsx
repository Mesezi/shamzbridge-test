import React from 'react'
import { GoChecklist } from 'react-icons/go'
import { IoPeople } from 'react-icons/io5'
import { RiCommunityLine } from 'react-icons/ri'
import Reveal from './Framer/Reveal'

const Stats = () => {
  return (
    <div className='custom-container mx-auto grid grid-cols-1 gap-16 md:gap-4 md:grid-cols-3 bg-black my-20 py-16'>
      
      <Reveal from="bottom" className='flex gap-3 items-center md:justify-center'>
      <span className='h-20 w-20 text-customBlue'>
        <IoPeople className='h-full w-full'/>
        </span>

        <div>
        <h6 className='text-5xl font-semibold text-white'>125+</h6>
        <p className='text-customSlate font-bold text-lg'>Clients</p>
        </div>
        </Reveal>

        <Reveal from="bottom" delay={.3} className='flex gap-3 items-center md:justify-center'>
        <span className='h-20 w-20 text-customBlue'>
        <GoChecklist  className='h-full w-full'/>
        </span>

        <div>
        <h6 className='text-5xl font-semibold text-white'>50+</h6>
        <p className='text-customSlate font-bold text-lg'>Projects</p>
        </div>
        </Reveal>

        <Reveal from="bottom" delay={.6} className='flex gap-3 items-center md:justify-center'>
        <span className='h-20 w-20 text-customBlue'>
        <RiCommunityLine  className='h-full w-full'/>
        </span>

        <div>
        <h6 className='text-5xl font-semibold text-white'>60+</h6>
        <p className='text-customSlate font-bold text-lg'>Communities</p>
        </div>
        </Reveal>





      
    </div>
  )
}

export default Stats
