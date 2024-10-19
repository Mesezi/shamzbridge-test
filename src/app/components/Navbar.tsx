'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const header = document.querySelector(".header-content");

    const scrollEvent = () => {
      if (window.scrollY > 150) {
        header?.classList.add("bg-white");
        header?.classList.add("md:shadow-md");
      } else {
        header?.classList.remove("bg-white");
        header?.classList.remove("md:shadow-md");
      }
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <header className="px-3 md:px-6 md:pt-4 fixed w-full top-0 left-0 z-[999] bg-white
     md:bg-white/0 shadow-md md:shadow-none">
      <section className="header-content rounded-md mx-auto bg-white">
        <div className="custom-container mx-auto py-6 md:py-5 items-center flex text-sm">
          <Link href={"/"} className="w-16 md:w-20 relative h-full block">
            <p className="font-black text-2xl tracking-wider text-customBlue">LOGO</p>
          </Link>

          {/* Main navigation for desktop */}
          <ul className="hidden md:flex gap-12 items-center font-medium ml-auto mr-7">
            <li>
              <Link href={"/#"}>Home</Link>
            </li>
            <li>
              <Link href={"/#about-us"}>About Us</Link>
            </li>
            <li>
              <Link href={"/#services"}>Services</Link>
            </li>
            <li>
              <Link href={"/#testimonials"}>Testimonials</Link>
            </li>
          </ul>

          <button className="hidden md:block bg-black px-4 py-3 w-full hover:scale-[.95] max-w-[130px] text-white hover:text-black hover:bg-customBlue duration-200 ease-in-out font-normal">
            Get started
          </button>

          {/* Menu button for mobile */}
          <button
            className={`md:hidden ml-auto ${openMenu ? 'text-customBlue': 'text-customSlate'} `}
            onClick={() => setOpenMenu(true)}
          >
            <BiMenuAltRight size={25} />
          </button>

          {/* Backdrop and menu for mobile */}
          <div
            className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-[9998] transition-transform duration-300 ${
              openMenu ? 'translate-x-0' : '-translate-x-full'
            }`}
            onClick={() => setOpenMenu(false)}
          ></div>

          <nav
            className={`md:hidden fixed top-0 left-0 w-[70vw] h-screen z-[9999] bg-black text-customSlate shadow-lg
               transition-transform duration-500 delay-100 flex flex-col ${
              openMenu ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className='p-6 flex items-start justify-between'>
               <Link href={"/"} className="">
            <p className="font-black text-2xl tracking-wider text-customBlue">LOGO</p>
          </Link>

          <button className='text-customBlue hover:scale-[.95]' onClick={()=> setOpenMenu(false)}>
            <GrFormClose size={28}/></button>
            </div>
            
            <ul className="flex flex-col gap-6 p-6 text-lg font-medium mt-10">
              <li>
                <Link href={"/#"} onClick={() => setOpenMenu(false)} 
                className='hover:text-customBlue'>
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/#about-us"} onClick={() => setOpenMenu(false)}
                className='hover:text-customBlue'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href={"/#services"} onClick={() => setOpenMenu(false)}
                className='hover:text-customBlue'>
                  Services
                </Link>
              </li>
              <li>
                <Link href={"/#testimonials"} onClick={() => setOpenMenu(false)}
                className='hover:text-customBlue'>
                  Testimonial
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
