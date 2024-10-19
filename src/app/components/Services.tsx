'use client'
import React from 'react'
import { FaProjectDiagram, FaChalkboardTeacher, FaBusinessTime, FaRegCalendarAlt, FaHandsHelping, FaPenNib } from 'react-icons/fa';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import Reveal from './Framer/Reveal';

const Services = () => {

const services = [
  {
    title: "Programs/Projects Management",
    description: "Partner with us for seamless project execution.",
    icon: <FaProjectDiagram size={30}/>
  },
  {
    title: "Capacity Building",
    description: "Nurture talent and skills with our capacity building services.",
    icon: <FaChalkboardTeacher size={30}/>
  },
  {
    title: "Consultancy Services",
    description: "Elevate your strategy with our consultancy services.",
    icon: <FaBusinessTime size={30}/>
  },
  {
    title: "Event Host/Management",
    description: "Let us handle the details while you enjoy the moment.",
    icon: <FaRegCalendarAlt size={30}/>
  },
  {
    title: "Community Development",
    description: "Championing development where it matters most.",
    icon: <FaHandsHelping size={30}/>
  },
  {
    title: "Content Development",
    description: "Unleash your creativity and transform ideas into impactful stories.",
    icon: <FaPenNib size={30}/>
  }
];

  return (
   <div id='services'>

<div className='flex flex-col gap-10 custom-container mx-auto  md:min-h-[500px] my-32 md:my-36'>

<article className="flex flex-col gap-5 justify-center md:max-w-[50%]">
  <p className="uppercase tracking-widest font-medium text-customBlue">
    Our services
  </p>

  <Reveal from="bottom">
  <h1 className="text-5xl md:text-[3.5rem] md:leading-[3.5rem] font-medium tracking-wide">
  Diverse Offerings and Experience
  </h1>
        </Reveal>

  <p className='text-customSlate'>
  Explore our diverse offerings and experience 
  unparalleled excellence from tailored solutions to personalized consultations.
  </p>
</article>


<Reveal from="right" className='hidden md:block'>
<Swiper
          className="mySwiper pb-20 h-full w-full px-40"
        //   navigation={true}
          modules={[Navigation, Autoplay]}
          id='service-carousel'
         
          loop={true}
          autoplay={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {services.map((item, idx) => (
            <SwiperSlide key={idx} className="h-full ">
              <div className='p-10 border h-full
           hover:border-black flex flex-col gap-3 cursor-pointer group'>
              <span className='h-16 w-16 rounded-full group-hover:-translate-y-2 duration-150 ease-in-out
               bg-customBlue flex text-white justify-center items-center'>{item.icon}</span>
              <h6 className='text-2xl font-medium'>{item.title}</h6>
              <p className='text-customSlate'>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </Reveal>


<section className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:hidden'>
{services.map((item, idx) => (
            <div key={idx} className='p-10 border h-full
            hover:border-black flex flex-col gap-3 cursor-pointer group'>
               <span className='h-16 w-16 rounded-full group-hover:-translate-y-2 duration-150 ease-in-out
                bg-customBlue flex text-white justify-center items-center'>{item.icon}</span>
                <h6 className='text-2xl font-medium'>{item.title}</h6>
              <p className='text-customSlate'>{item.description}</p>
              </div>
          ))}
</section>





</div>
   </div>
  )
}

export default Services
