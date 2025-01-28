
import React from 'react'
import { Button } from './ui/button'
import { Instrument_Sans } from "next/font/google";


const instrument_Sans = Instrument_Sans({
    subsets: ["latin"],
    weight: ["500","700"],
  });
const NavBar = () => {
  return (
    <nav className={`py-7 px-52 flex justify-between items-center ${instrument_Sans.className}`}>
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
          <h5 className="font-bold text-lg">Designor</h5>
        </div>
        <ul className="flex text-sm space-x-3">
          <li className="hover:bg-HoverGray px-3 py-2 rounded-md cursor-pointer transition duration-300">Services</li>
          <li className="hover:bg-HoverGray px-3 py-2 rounded-md cursor-pointer transition duration-300">Case</li>
          <li className="hover:bg-HoverGray px-3 py-2 rounded-md cursor-pointer transition duration-300">Who we are</li>
          <li className="hover:bg-HoverGray px-3 py-2 rounded-md cursor-pointer transition duration-300">Pricing</li>
          <li className="hover:bg-HoverGray px-3 py-2 rounded-md cursor-pointer transition duration-300">Testimonials</li>
        </ul>
        <Button className="bg-gray-800 text-white px-5" variant="default">Remix Template</Button>
      </nav>
  )
}

export default NavBar