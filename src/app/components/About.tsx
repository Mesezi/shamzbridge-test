import Image from 'next/image'
import React from 'react'
import { RiCheckboxFill } from 'react-icons/ri';
import Reveal from './Framer/Reveal';

const About = () => {
  return (
    <section id='about-us' className="custom-container mx-auto grid grid-cols-1 gap-10 md:grid-cols-[55%,1fr]
     md:min-h-[500px] my-32 md:my-36">
      <div className="grid grid-cols-[50%,1fr] gap-5 md:gap-8 min-h-[250px] md:h-auto md:py-20">
        <Reveal from='left' className="flex items-center h-full">
          
          <div className="relative aspect-[1.8/2] w-full">
            <Image
              src={
                "https://www.shutterstock.com/image-photo/group-business-people-having-meeting-600nw-2259371045.jpg"
              }
              fill
              className="object-cover"
              alt="people"
            />
          </div>
        </Reveal>

        <div className="grid grid-rows-[auto,1fr] gap-5 md:gap-8">
          <Reveal from='top' className="relative w-[70%] md:w-[80%] aspect-square">
            <Image
              src={
                "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="people"
              fill
              className="object-cover"
            />
          </Reveal>

          <Reveal from='bottom' className="relative w-full h-full">
            <Image
              src={
                "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="people"
              fill
              className="object-cover"
            />
          </Reveal>
        </div>

      </div>

      <article className="flex flex-col gap-5">
        <p className="uppercase tracking-widest font-medium text-customBlue">
          About us
        </p>
        <Reveal from="bottom">
        <h2 className="text-5xl md:text-[3.5rem] md:leading-[3.5rem] font-medium tracking-wide">
          Service Beyond Compare
        </h2>
        </Reveal>
        <p className="text-customSlate mt-5">
          Our journey began with a simple yet ambitious goal: to provide service
          beyond compare. Over the years, we have evolved and grown, expanding
          our offerings to meet the diverse needs of our clients. From tailored
          solutions to comprehensive consultations, we leverage our extensive
          knowledge and experience to drive transformative change and help our
          clients succeed in today's dynamic business environment.
          {/* <br />
          <br />
          What sets us apart is our commitment to understanding our clients'
          unique challenges and goals. We take a collaborative approach, working
          closely with each client to develop customized strategies that address
          their specific needs and objectives. Our team of seasoned
          professionals brings together a wealth of expertise from various
          industries, ensuring that we can provide insights and solutions that
          are both innovative and effective. */}
 </p>

 <div className='mt-7'>
    
<h3 className='text-2xl font-semibold mb-5 text-customBlue'>What Sets Us Apart</h3> 

<div>
    <article className='flex gap-4 mb-4'>
    <RiCheckboxFill className='shrink-0 mt-1' size={22}/>
    <div>
        <h5 className='font-semibold text-lg'>Client-Centered Solutions</h5>
        <p className='text-customSlate'> We prioritize understanding each client's unique challenges and goals,
             ensuring personalized strategies tailored to their specific needs.        </p>
    </div>
    </article>

    <article className='flex gap-4 mb-4'>
    <RiCheckboxFill className='shrink-0 mt-1' size={22}/>
    <div>
        <h5 className='font-semibold text-lg'>Collaborative Approach</h5>
        <p className='text-customSlate'>Our team works closely with clients to develop customized solutions, fostering strong partnerships and achieving targeted outcomes.
        </p>
    </div>
    </article>


    <article className='flex gap-4 mb-4'>
    <RiCheckboxFill className='shrink-0 mt-1' size={22}/>
    <div>
        <h5 className='font-semibold text-lg'>Industry Expertise</h5>
        <p className='text-customSlate'>With a diverse team of seasoned professionals from 
        various industries, we offer innovative and effective insights to drive success.</p>
    </div>
    </article>
</div>

 </div>
      </article>
    </section>
  );
}

export default About
