"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-satu text-white md:min-h-screen md:px-[49px] py-[34px] p-2 transition-all duration-300 overflow-hidden">
      {/* navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex justify-between items-center cursor-pointer">
        {/* left */}
        <div className="flex items-center justify-center gap-2 md:gap-5">
          <Image
            className="w-8 h-8 md:w-11 md:h-11 rounded-full"
            src="/logo.jpeg"
            alt="My Profile"
            width={500}
            height={500}
            priority
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[18px] md:text-[20px] font-semibold hover:text-empat transition-all duration-300">
            Faresta
          </motion.div>
        </div>

        {/* center */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden md:flex items-center text-[16px] gap-[34px]">
          <Link
            href="/"
            className="hover:text-empat transition-all duration-300">
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-empat transition-all duration-300">
            About
          </Link>
          <Link
            href="#project"
            className="hover:text-empat transition-all duration-300">
            Project
          </Link>
          <Link
            href="#contact"
            className="hover:text-empat transition-all duration-300">
            Contact
          </Link>
        </motion.div>

        {/* right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-3 md:gap-12">
          <button className="bg-empat text-black md:w-[90px] md:h-[29px] rounded-full text-[14px] md:text-[16px] font-medium hover:shadow-[0_0_10px_#ffcc00] transition-all duration-300 px-3 py-1 md:py-0 md:px-0">
            Hire me
          </button>
          <motion.button
            className="md:hidden"
            onClick={() => setMenu(!menu)}
            animate={{ rotate: menu ? 180 : 0 }}
            transition={{ duration: 0.3 }}>
            {menu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-align-justify">
                <path d="M3 12h18" />
                <path d="M3 18h18" />
                <path d="M3 6h18" />
              </svg>
            )}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* branda */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="md:flex md:justify-between md:items-center md:px-10 mt-8">
        {/* left */}
        <div className="text-center md:text-left">
          <h1 className="font-semibold md:font-bold md:text-[25px] mb-[10px]">
            Hy I’m Faresta
          </h1>
          <h1 className="font-bold text-[20px] md:text-[48px] mb-5 md:mb-[46px]">
            Front End Developer
          </h1>
          <div className="flex gap-[22px] justify-center md:justify-start">
            <button className="bg-empat text-black rounded-full text-[14px] md:text-[16px] font-normal md:font-semibold px-3 py-1 hover:shadow-[0_0_10px_#ffcc00] transition-all duration-300">
              View My Work
            </button>
            <button className="bg-empat text-black rounded-full text-[14px] md:text-[16px] font-normal md:font-semibold px-3 py-1 hover:shadow-[0_0_10px_#ffcc00] transition-all duration-300">
              Hire Me
            </button>
          </div>
        </div>
        {/* right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="md:mr-16 flex justify-center">
          <Image
            className="h-auto w-72 md:w-[368px] md:h-[489px]"
            src="/foto.png"
            alt="My Profile"
            width={385}
            height={512}
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
