import React from 'react'

import Image from "next/image";
import im1 from "@/public/9xw5hPNiCbd1wD50zh0sdg4ddc.avif";
import im2 from "@/public/Mb4prylaxDajURFOhVxEDmKPI.avif"
import im3 from "@/public/Pdvqn3uQo5NYDpUSNna1htYH4.avif"


import comp1 from "@/public/companies/svgexport-2.svg";
import comp2 from "@/public/companies/svgexport-3.svg";
import comp3 from "@/public/companies/svgexport-4.svg";
import comp4 from "@/public/companies/svgexport-5.svg";
import comp5 from "@/public/companies/svgexport-6.svg";
import comp6 from "@/public/companies/svgexport-7.svg";
import comp7 from "@/public/companies/svgexport-8.svg";
import comp8 from "@/public/companies/svgexport-9.svg";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
        className={`mx-44 max-xl:mx-2 border border-borderColor bg-white rounded-3xl `}
      >
        <div className="flex flex-col justify-center items-center my-20">
          <div className="flex items-center border-gray-300 px-1 py-0.5 border rounded-full w-fit text-sm max-md:text-xs">
            <span className="bg-clip-text bg-gradient-to-r from-orange-400 to-purple-900 text-sm text-transparent max-md:text-xs">
              4000+ &nbsp;
            </span>
            <p>Users trust us for design &nbsp;</p>
            <div className="flex">
              <Image
                src={im1}
                alt="Image 1"
                className="rounded-full w-4 h-4 object-cover"
              />
              <Image
                src={im2}
                alt="Image 1"
                className="ml-[-4px] rounded-full w-4 h-4 object-cover"
              />
              <Image
                src={im3}
                alt="Image 1"
                className="ml-[-4px] rounded-full w-4 h-4 object-cover"
              />
            </div>
          </div>
          <h1 className="my-5 font-semibold text-6xl text-center leading-tight">
            Design Better,{" "}
            <span className="text-gray-400">
              Faster, <br /> Smarter
            </span>
          </h1>
          <p className="max-w-[500px] max-sm:max-w-[300px] font-light text-center text-gray-600 text-lg max-sm:text-base">
            Empower your creative vision with Designor — crafted for agencies,
            designers, and innovators to showcase their work seamlessly.
          </p>
          <div className="flex max-sm:flex-col justify-between sm:space-x-3 max-sm:space-y-3 max-sm:w-[90%]">
            <Button
              variant={"outline"}
              className="hover:border-gray-400 hover:bg-white mt-10 px-6 py-5 border-borderColor text-base"
            >
              Our work
            </Button>
            <Button
              variant={"secondary"}
              className="border-purpHover bg-purpButton hover:bg-purpHover mt-10 px-6 py-5 border text-base text-white"
            >
              Schedule a call
            </Button>
          </div>
          <p className="mt-20 mb-8 max-sm:font-medium text-gray-600">
            Featured highlights of our Work
          </p>
          <div className="flex whitespace-nowrap overflow-hidden container">
            {/* One container with all images, duplicated virtually */}
            <div className="flex items-center gap-16 circular">
              <Image src={comp1} alt="user1" width={120} height={120} />
              <Image src={comp2} alt="user1" width={120} height={120} />
              <Image src={comp3} alt="user1" width={120} height={120} />
              <Image src={comp4} alt="user1" width={120} height={120} />
              <Image src={comp5} alt="user1" width={120} height={120} />
              <Image src={comp6} alt="user1" width={120} height={120} />
              <Image src={comp7} alt="user1" width={120} height={120} />
              <Image src={comp8} alt="user1" width={120} height={120} />
              {/* Duplicate content for seamless loop */}
              <Image src={comp1} alt="user1" width={120} height={120} />
              <Image src={comp2} alt="user1" width={120} height={120} />
              <Image src={comp3} alt="user1" width={120} height={120} />
              <Image src={comp4} alt="user1" width={120} height={120} />
              <Image src={comp5} alt="user1" width={120} height={120} />
              <Image src={comp6} alt="user1" width={120} height={120} />
              <Image src={comp7} alt="user1" width={120} height={120} />
              <Image src={comp8} alt="user1" width={120} height={120} />
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection