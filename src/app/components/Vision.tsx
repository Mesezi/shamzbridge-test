'use client'
import Image from 'next/image'
import React from 'react'
import { RiCheckboxFill } from 'react-icons/ri'
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import Reveal from './Framer/Reveal';

const Vision = () => {
    const images = [
        'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
         'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=800']
  return (
    <section
      className="custom-container mx-auto grid grid-cols-1 gap-10 md:grid-cols-[50%,1fr]
    md:min-h-[500px] my-32 md:my-36"
    >
      <div className='h-[400px] md:h-auto'>

      <Swiper
          className="mySwiper h-full w-full"
          modules={[Autoplay, EffectFade]}
          id='service-carousel'
         effect='fade'
          loop={true}
          autoplay={true} 
        slidesPerView={1}
        >
          {images.map((item) => (
            <SwiperSlide className="h-full ">
              <div className='relative w-full h-full bg-red-400'>
                <Image src={item} alt='vision image' fill className='object-cover'/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <article className="flex flex-col gap-5">
        <p className="uppercase tracking-widest font-medium text-customBlue">
          Our Goal
        </p>
        <Reveal from="bottom">
        <h2 className="text-5xl md:text-[3.5rem] md:leading-[3.5rem] font-medium tracking-wide">
        Redefining Industry Standards
        </h2>
        </Reveal>

        <p className="text-customSlate mt-5">
          Redefining industry standards through consultation, our innovative
          approach integrates cutting-edge technology with expert insights,
          driving transformative change and setting new benchmarks for
          excellence.
        </p>

        <div className="mt-7">
          <div>
            <article className="flex gap-4 mb-4">
              <RiCheckboxFill className="shrink-0 mt-1" size={22} />
              <div>
                <h5 className="font-semibold text-xl text-customBlue">
                  Vision
                </h5>
                <p className="text-customSlate">
                  To become a premier organization dedicated to enhancing both
                  personal and professional capacities of individuals and
                  businesses, fostering efficiency, heightened productivity, and
                  innovation.
                </p>
              </div>
            </article>

            <article className="flex gap-4 mb-4">
              <RiCheckboxFill className="shrink-0 mt-1" size={22} />
              <div>
                <h5 className="font-semibold text-xl text-customBlue">
                  Mission
                </h5>
                <p className="text-customSlate">
                  Our mission is to cultivate an empowering atmosphere for skill
                  acquisition and capacity enhancement that heralds a holistic
                  growth and developent for individuals and organizations
                </p>
              </div>
            </article>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Vision
