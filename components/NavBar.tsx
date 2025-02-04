"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  function NavExpanded(){
    setExpanded(!expanded)
    
      document.body.classList.toggle('no-scroll');
    
  }
  function NavigatetoSection(){
    setExpanded(false)
    
      document.body.classList.remove('no-scroll');
    
  }
  return (
    <nav
      className={`py-7 xl:px-52 max-xl:px-16 max-lg:px-4 flex justify-between items-center`}
    >
      <div className="flex items-center space-x-2">
        <svg
          viewBox="0 0 24 25"
          xmlns="http://www.w3.org/1999/xlink"
          width="24"
          height="25"
          fill="none"
        >
          <path
            fill="#0D0D17"
            d="M4.29 0A4.29 4.29 0 0 0 0 4.29v7.928A6.186 6.186 0 0 1 6.187 6.03h5.595a6.186 6.186 0 1 1 0 12.373H0v1.741a4.29 4.29 0 0 0 4.29 4.29h7.492C18.53 24.435 24 18.965 24 12.218 24 5.47 18.53 0 11.782 0H4.29Z"
          ></path>
          <path
            fill="url(#a)"
            d="m6.031 6.033 7.8 12.024a6.177 6.177 0 0 1-2.049.347H0v-6.186a6.187 6.187 0 0 1 6.031-6.185Z"
          ></path>
          <defs>
            <linearGradient
              id="a"
              x1="6.915"
              x2="6.915"
              y1="6.033"
              y2="18.404"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0D0D17" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#0D0D17" stopOpacity=".6"></stop>
            </linearGradient>
          </defs>
        </svg>
        <h5 className="font-semibold text-lg">Designor</h5>
      </div>
      <ul className="flex text-sm space-x-3 font-medium max-lg:hidden ">
        <li className="hover:bg-[#f2f2f5] px-3 py-2 rounded-md cursor-pointer transition duration-300">
          <a href="./#services">Services</a>
        </li>
        <li className="hover:bg-[#f2f2f5] px-3 py-2 rounded-md cursor-pointer transition duration-300">
          <a href="./#case">Case</a>
        </li>
        <li className="hover:bg-[#f2f2f5] px-3 py-2 rounded-md cursor-pointer transition duration-300">
          <a href="./#whoweare">Who we are</a>
        </li>
        <li className="hover:bg-[#f2f2f5] px-3 py-2 rounded-md cursor-pointer transition duration-300">
          <a href="./#pricing">Pricing</a>
        </li>
        <li className="hover:bg-[#f2f2f5] px-3 py-2 rounded-md cursor-pointer transition duration-300">
          <a href="./#testimonials">Testimonials</a>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <Button
          className="bg-gray-800 text-white max-sm:hidden px-5 hover:bg-gray-900"
          variant="default"
        >
          Remix Template
        </Button>
        <Menu
          className="h-9 w-9 lg:hidden hover:bg-white p-1 rounded-md cursor-pointer"
          onClick={() => NavExpanded()}
        />
      </div>    
     {  expanded && <section className="bg-white z-[999] w-screen h-screen fixed overflow-hidden top-0 left-0 m-0 ">
        <div className="py-8 flex flex-col flex-grow">
          <div className="flex items-center justify-between mx-4 ">
            <div className="flex items-center space-x-2">
              <svg
                viewBox="0 0 24 25"
                xmlns="http://www.w3.org/1999/xlink"
                width="24"
                height="25"
                fill="none"
              >
                <path
                  fill="#0D0D17"
                  d="M4.29 0A4.29 4.29 0 0 0 0 4.29v7.928A6.186 6.186 0 0 1 6.187 6.03h5.595a6.186 6.186 0 1 1 0 12.373H0v1.741a4.29 4.29 0 0 0 4.29 4.29h7.492C18.53 24.435 24 18.965 24 12.218 24 5.47 18.53 0 11.782 0H4.29Z"
                ></path>
                <path
                  fill="url(#a)"
                  d="m6.031 6.033 7.8 12.024a6.177 6.177 0 0 1-2.049.347H0v-6.186a6.187 6.187 0 0 1 6.031-6.185Z"
                ></path>
                <defs>
                  <linearGradient
                    id="a"
                    x1="6.915"
                    x2="6.915"
                    y1="6.033"
                    y2="18.404"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0D0D17" stopOpacity="0"></stop>
                    <stop offset="1" stopColor="#0D0D17" stopOpacity=".6"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h5 className="font-semibold text-lg">Designor</h5>
            </div>
            <X
            size={26}
              className="cursor-pointer mr-2"
              onClick={() => NavExpanded()}
            />
          </div>
          <div className="flex flex-col mt-10 text-sm md:text-base h-[75vh] justify-between ">
            <ul className="list-none space-y-1 " onClick={() => NavigatetoSection()}>
              <li className="hover:bg-[#f2f2f5] px-4 py-2 cursor-pointer"><a href="./#services">Services</a></li>
              <li className="hover:bg-[#f2f2f5] px-4 py-2 cursor-pointer"><a href="./#case">Case</a></li>
              <li className="hover:bg-[#f2f2f5] px-4 py-2 cursor-pointer"><a href="./#whoweare">Who we are</a></li>
              <li className="hover:bg-[#f2f2f5] px-4 py-2 cursor-pointer"><a href="./#pricing">Pricing</a></li>
              <li className="hover:bg-[#f2f2f5] px-4 py-2 cursor-pointer"><a href="./#testimonials">Testimonials</a></li>
            </ul>
            <Button variant={"default"} className=" text-white flex self-center w-[80%] bg-gray-800 md:text-base md:w-[90%] hover:bg-gray-900" >Remix template</Button>
          </div>
        </div>
      </section>}
    </nav>
  );
};

export default NavBar;
