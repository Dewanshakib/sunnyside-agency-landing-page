import React, { useState } from "react";
import { HiBars3,HiXMark } from "react-icons/hi2";
import { TopToBottom } from "../topToBottom/topToBottom";

const Header = () => {
  const [show,setShow] = useState(false)
  return (
    <div className="bg-hero-mobile relative md:bg-hero-desktop  left-0 top-0 bg-cover bg-center w-full h-[660px]">
       <TopToBottom/>
      <div className="flex justify-between items-center px-4 py-6">
        {/* Logo  */}
        <a href="/">
          <img src="./logo.svg" alt="/" />
        </a>
        {/* Hamburger Menu  */}
        {!show ? <button className="md:hidden" onClick={() => setShow(!show)}>
          <HiBars3 className="text-4xl text-gray-200" />
        </button> :
        <button className="md:hidden" onClick={() => setShow(!show)}>
          <HiXMark className="text-4xl text-gray-200" />
        </button>}
        
        {/* Mobile responsive  */}
       {!show ? <div className="w-4/5 font-barlow transition-all absolute text-center -top-[999px] duration-300 py-6 rounded-lg left-[10.3%] h-auto bg-gray-100 md:hidden">
          <ul className="text-xl">
            <li className="my-4 text-Dark-grayish-blue cursor-pointer">About</li>
            <li className="my-4 text-Dark-grayish-blue cursor-pointer">Services</li>
            <li className="my-4 text-Dark-grayish-blue cursor-pointer">Projects</li>
            <li className="my-4 px-5 py-3 rounded-3xl font-Fraunces cursor-pointer bg-Yellow w-[120px] mx-auto">Contact</li>
          </ul>
        </div> :
        <div className="w-4/5 font-barlow transition-all absolute text-center top-[14%] duration-300 py-6 rounded-lg left-[10.3%] h-auto bg-gray-100 md:hidden">
          <ul className="text-xl">
            <li className="my-4 text-Dark-grayish-blue cursor-pointer">About</li>
            <li className="my-4 text-Dark-grayish-blue cursor-pointer">Services</li>
            <li className="my-4 text-Dark-grayish-blue cursor-pointer">Projects</li>
            <li className="my-4 px-5 py-3 rounded-3xl font-Fraunces cursor-pointer bg-Yellow w-[120px] mx-auto">Contact</li>
          </ul>
        </div>}
        {/* Desktop responsive  */}
        <div className="font-barlow hidden md:block">
          <ul className="flex flex-row items-center">
            <li className="mr-6 cursor-pointer duration-300 text-white hover:opacity-75">
              About
            </li>
            <li className="mr-6 cursor-pointer duration-300 text-white hover:opacity-75">
              Services
            </li>
            <li className="mr-6 cursor-pointer duration-300 text-white hover:opacity-75">
              Projects
            </li>
            <li className="mr-4 cursor-pointer px-5 py-2 text-Very-dark-desaturated-blue rounded-3xl bg-white font-Fraunces duration-300 hover:bg-button-blue hover:text-white">
              Contact
            </li>
          </ul>
        </div>
      </div>
     
    </div>
    
  );
};

export default Header;
