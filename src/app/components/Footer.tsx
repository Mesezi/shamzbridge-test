import React from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black text-customSlate">
      <div className="custom-container mx-auto py-12 md:py-20">
        <section className=" mb-16 flex flex-col items-center md:flex-row md:justify-between md:items-start gap-4">
          <h4 className="text-white font-medium text-3xl ">
            Subscribe to our Newsletter
          </h4>
          <form
            action=""
            className="flex items-center gap-2 h-12 w-full md:w-[500px] "
          >
            <input
              type="text"
              placeholder="Your email"
              className="bg-white w-full outline-none border-none h-full px-4"
            />
            <button className="bg-customBlue h-full w-full max-w-[140px] text-black text-sm font-semibold">
              Subscribe
            </button>
          </form>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[40%,1fr] gap-y-16 gap-10 py-20
         border-y border-customSlate">
          <article className="flex flex-col items-center md:items-start gap-5">
            <Link href={"/"}>
              <p className="font-black text-2xl tracking-wider text-customBlue">
                LOGO
              </p>
            </Link>
            <p className="text-center md:text-left max-w-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Fugit error iusto voluptates qui!
            </p>

            <div className="flex gap-3">
              <Link
                href={""}
                className="h-9 aspect-square grid bg-white hover:bg-customBlue duration-150 ease-in-out text-black place-items-center"
              >
                <FaFacebook className="h-[40%] w-[40%]" />
              </Link>

              <Link
                href={""}
                className="h-9 aspect-square grid bg-white hover:bg-customBlue duration-150 ease-in-out text-black place-items-center"
              >
                <FaXTwitter className="h-[40%] w-[40%]" />
              </Link>

              <Link
                href={""}
                className="h-9 aspect-square grid bg-white hover:bg-customBlue duration-150 ease-in-out text-black place-items-center"
              >
                <FaYoutube className="h-[40%] w-[40%]" />
              </Link>

              <Link
                href={""}
                className="h-9 aspect-square grid bg-white hover:bg-customBlue duration-150 ease-in-out text-black place-items-center"
              >
                <FaLinkedin className="h-[40%] w-[40%]" />
              </Link>
            </div>
          </article>
          <section className=" grid grid-cols-1 lg:grid-cols-[1fr,1fr,1fr] gap-10">
            <article>
              <h3
                className="capitalize font-medium  text-3xl
           text-white mb-4 flex-col gap-2 inline-flex"
              >
                Get in Touch
              </h3>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-2">
                <MdLocationPin className="text-customBlue" size={20}/> 
                457 Morningview Lane, Abuja</li>

                <li >
                  <Link href={'mailto:example@mail.com'} className="flex items-start gap-2">
                  <MdEmail  className="text-customBlue" size={20}/> 
                  example@mail.com
                  </Link>
              </li>

              <li >
                  <Link href={'tel:08102281023'} className="flex items-start gap-2">
                  <MdLocalPhone  className="text-customBlue" size={20}/> 
                  08102281023
                  </Link>
              </li>


                <li className="flex items-start gap-2">
                <AiFillClockCircle  className="text-customBlue" size={20}/> 
                07.00 AM - 19.00 PM</li>
              </ul>
            </article>

            <article>
              <h3
                className="capitalize font-medium text-3xl
           text-white mb-4 flex-col gap-2 inline-flex"
              >
                Quicklinks
              </h3>

              <ul className="tracking-wide flex flex-col gap-2">
                <li >
                  <Link className="hover:text-customBlue" href={"/"}>Home</Link>
                </li>
                <li>
                  <Link className="hover:text-customBlue" href={""}>About Us</Link>
                </li>
                <li>
                  <Link className="hover:text-customBlue" href={""}>Team</Link>
                </li>
                <li>
                  <Link className="hover:text-customBlue" href={""}>Blog</Link>
                </li>
              </ul>
            </article>

            <article>
              <h3
                className="capitalize font-medium text-3xl
           text-white mb-4 flex-col gap-2 inline-flex"
              >
                Support
              </h3>

              <ul className="tracking-wide flex flex-col gap-2">
                <li >
                  <Link className="hover:text-customBlue" href={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link className="hover:text-customBlue" href={""}>Career</Link>
                </li>
                <li>
                  <Link className="hover:text-customBlue" href={""}>Faq</Link>
                </li>
                <li>
                  <Link className="hover:text-customBlue" href={""}>Privacy Policy</Link>
                </li>
                <li>
                  <Link className="hover:text-customBlue" href={""}>Contact</Link>
                </li>
              </ul>
            </article>
          </section>
        </section>

        <section className="mt-8 flex flex-col-reverse md:flex-row text-center gap-5 md:text-start
         justify-center md:justify-between items-center">
          <p>Copyright © 2024 Menuchim Projects</p>
          <div className="flex gap-3 items-center">
            <Link href={''}  className="hover:text-customBlue">Privacy Policy</Link>
            <Link href={''}  className="hover:text-customBlue">Terms & Services</Link>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
