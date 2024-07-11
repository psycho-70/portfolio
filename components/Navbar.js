"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFacebook } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleHireMeClick = () => {
    setShowContact((prev) => !prev);
  };

  return (
    <>
      <nav className="flex justify-between w-full h-16 z-10 items-center p-3 bg-slate-800 text-white">
        <Link href="#home">
          <motion.div
            whileHover={{ scale: 1.1, translateX: "20px" }}
            whileTap={{ scale: 0.9 }}
            className="font-bold items-center uppercase text-lg cursor-pointer"
          >
            <span className="flex items-center w-1/6 md:text-xl text-sm gap-2">
              <img src="/code1.gif" width={30} height={25} alt="the logo gif" />
              informative <span className="text-red-500">world</span>
            </span>
          </motion.div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div
          className={`${isMenuOpen
              ? "block bg-slate-800 fixed top-0 text-center"
              : "hidden"
            } md:flex flex-col md:flex-row md:items-center md:bg-transparent absolute md:static top-10 right-0 md:w-auto`}
        >
          {/* Close Button */}
          {isMenuOpen && (
            <button
              className="md:hidden text-white focus:outline-none self-end p-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoMdClose />
            </button>
          )}
          <ul className="flex flex-col md:flex-row justify-center items-center gap-5 text-[17px] m-2">
            <motion.li
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link href="#home">
                <span className="block">Home</span>
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link href="#about">
                <span className="block">About</span>
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link href="#skill">
                <span className="block">Skill</span>
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link href="#project">
                <span className="block">Project</span>
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link href="#services">
                <span className="block">Services</span>
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link href="#team">
                <span className="block">Team</span>
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link href="#comments">
                <span className="block">Comments</span>
              </Link>
            </motion.li>
            <motion.li >
              <button
                onClick={handleHireMeClick}
   className='text-white bg-gradient-to-r m-2 font-bold from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'         
              >
                Hire Me
              </button>
              {showContact && (
                <div className="absolute top-90 md:top-16 right-2 flex flex-col items-center justify-center bg-slate-600 border shadow-lg p-2 rounded-lg z-50">
                  <h2 className="text-lg font-bold mb-2 ">Contact Me</h2>
                  <ul className="list-none space-y-2">
                    <li>
                      <a href="https://web.facebook.com/furqan.don.771/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      <MdOutlineFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/03141868872" target="_blank" rel="noopener noreferrer" className=" hover:underline">
                      <FaWhatsapp />

                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/psycho-70" target="_blank" rel="noopener noreferrer" className=" hover:underline">
                      <FaGithub />

                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </motion.li>
          </ul>
        </div>
      </nav>
      <div className="h-[1px] w-full bg-white"></div>
    </>
  );
};

export default Navbar;
