import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FaPhone } from 'react-icons/fa'
import { MdLocalPhone } from 'react-icons/md'
import Reveal from './Framer/Reveal'

const Hero = () => {
  return (
    <div className=''>
      <div className='custom-container mx-auto grid grid-cols-1 md:grid-cols-[45%,1fr]
       overflow-hidden min-h-[100vh] md:min-h-[110vh] gap-16 md:gap-0'>
      <section className='flex flex-col gap-4 justify-center md:text-lg pt-32 md:pt-0'>
        <p className='uppercase tracking-widest font-medium text-customBlue'>Welcome to Company</p>
       
        <Reveal from="bottom">
        <h1 className='text-5xl md:text-[4rem] md:leading-[4rem] font-medium tracking-wide'>Finding, Connecting, Building Success</h1>
        </Reveal>
        <p className='text-customSlate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quo.</p>
        <Reveal delay={.5} from="bottom">
        <div className='flex gap-6 items-center font-medium mt-7 text-sm'>
            <button className='bg-black px-4 py-3 w-full max-w-[130px] text-white
             hover:text-black hover:bg-customBlue duration-200 ease-in-out font-normal'>
                Get started</button>
            <button className='hover:text-customBlue flex items-center gap-1  duration-200 ease-in-out'><MdLocalPhone  /> Contact Us</button>
        </div>
        </Reveal>
        
      </section>

      <section className='flex relative h-[300px] sm:h-[400px] md:h-auto'>

<div className='w-[300px] aspect-[1.6/2] md:aspect-[1.4/2] bg-customBlue z-20 text-black self-start'>
   <section className='h-full w-full flex flex-col gap-2 justify-end p-5 pb-12 md:pb-20 relative'>
   <p className='text-left font-medium'>Partner with us today!</p>
   <button className='text-left text-sm flex items-center gap-2 relative z-10 duration-200 ease-in-out hover:text-white'><BsArrowRight /> Learn more</button>
   <Image src={'/vector/star.png'} alt='star' fill className='object-cover object-bottom'/>
   </section>
    
</div>

        <div className='w-full ml-auto h-full lg:h-[85%] self-end'> 

          <div className='relative h-full w-full'>
          <Image 
        src={'/images/lady-hero2.png'}
        alt=''
        className='object-contain object-right-bottom hover:scale-[1.1] duration-200  ease-linear'
        fill/>
          </div>
        
        </div>
      </section>
      </div>
    </div>
  )
}

export default Hero
