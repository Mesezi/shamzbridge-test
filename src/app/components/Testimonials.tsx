import Image from 'next/image';
import React from 'react'
import Reveal from './Framer/Reveal';

const Testimonials = () => {
    const testimonials = [
        {
          name: "John Doe",
          title: "CEO, Tech Innovators",
          feedback: "The team provided excellent consultancy services that truly elevated our business. Their innovative solutions helped us increase productivity and achieve our goals efficiently.",
          image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          name: "Jane Smith",
          title: "Founder, Creative Minds",
          feedback: "Their approach to capacity building has transformed our organization. The sessions were insightful, and we saw immediate improvements in team performance and motivation.",
          image: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
          name: "Michael Johnson",
          title: "Project Manager, BuildCo",
          feedback: "From project management to community development, their expertise has been invaluable. We couldn’t have completed our project on time without their support and guidance.",
          image: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
          name: "Emily Davis",
          title: "HR Director, Future Leaders",
          feedback: "I highly recommend their consultancy services. Their insights helped us reshape our HR strategy, and we now have a more productive, happier workforce.",
          image: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
          name: "Daniel Thompson",
          title: "Operations Manager, GreenTech",
          feedback: "Working with them on event management was a breeze. They took care of everything, ensuring the event was a massive success without any stress on our part.",
          image: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
          name: "Sophia Martinez",
          title: "Entrepreneur, StartUp World",
          feedback: "Their content development service exceeded my expectations. They helped turn my ideas into a compelling story that resonated with my audience and boosted my brand’s presence.",
          image: "https://randomuser.me/api/portraits/women/3.jpg"
        }
      ];

      const firstThreeTestimonials = testimonials.slice(0, 2);
const lastThreeTestimonials = testimonials.slice(-2);
  return (
    <section  id='testimonials' className='max-w-[900px] px-4 mx-auto my-32 md:36'>
    <div className='text-center space-y-4'>
      <p className="uppercase tracking-widest font-medium text-customBlue">Testimonials</p>
      <Reveal from="bottom">
      <h3 className="text-5xl md:text-[3.5rem] md:leading-[3.5rem] font-medium tracking-wide">
      What they say about us
        </h3></Reveal>
    </div>
    

    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 md:mt-20'>


        <Reveal from="bottom" className='space-y-5 '>
        {
    lastThreeTestimonials.map((item, idx)=> <article key={idx} className='p-10 border flex flex-col hover:border-black gap-5 
     '>
        <span></span>
        <hr />
        <p className='text-customSlate'>{item.feedback}</p>
        <div className='flex gap-2 items-center'>
            <div className='h-24 aspect-square rounded-full relative overflow-hidden'>
                <Image src={item.image} alt={item.name} fill className='object-cover'/>
            </div>

            <div>
                <h6 className='font-semibold text-lg'>{item.name}</h6>
                <p className='text-customBlue'>{item.title}</p>
                </div>
        </div>
    </article>)
}
        </Reveal>


        <Reveal from="bottom" delay={.4} className='space-y-5 '>
        {
    firstThreeTestimonials.map((item, idx)=> <article key={idx} className='p-10 border flex flex-col 
      hover:border-black gap-5 mt-10
     '>
        <span></span>
        <hr />
        <p className='text-customSlate'>{item.feedback}</p>
        <div className='flex gap-2 items-center'>
            <div className='h-24 aspect-square rounded-full relative overflow-hidden'>
                <Image src={item.image} alt={item.name} fill className='object-cover'/>
            </div>

            <div>
                <h6 className='font-semibold text-lg'>{item.name}</h6>
                <p className='text-customBlue'>{item.title}</p>
                </div>
        </div>
    </article>)
}
        </Reveal>
    </div>
    </section>

  )
}

export default Testimonials
