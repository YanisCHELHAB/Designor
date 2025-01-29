import React from 'react'
import im1 from "@/public/9xw5hPNiCbd1wD50zh0sdg4ddc.avif";
import Image from "next/image";
import im2 from "@/public/Mb4prylaxDajURFOhVxEDmKPI.avif";
import im3 from "@/public/Pdvqn3uQo5NYDpUSNna1htYH4.avif";
import comp1 from "@/public/companies/svgexport-2.svg";
import comp2 from "@/public/companies/svgexport-3.svg";
import comp3 from "@/public/companies/svgexport-4.svg";
import comp4 from "@/public/companies/svgexport-5.svg";
import comp5 from "@/public/companies/svgexport-6.svg";
import comp6 from "@/public/companies/svgexport-7.svg";
import comp7 from "@/public/companies/svgexport-8.svg";
import comp8 from "@/public/companies/svgexport-9.svg";

import { Button } from "@/components/ui/button";
import { Instrument_Sans } from "next/font/google";
const instrument_Sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const HeroSection = () => {
  return (
    <section
        className={`mx-44 border border-borderColor bg-white rounded-3xl ${instrument_Sans.className} `}
      >
        <div className="flex flex-col justify-center items-center  my-20 mx-14 ">
          <div className=" rounded-full flex items-center border border-gray-300 w-fit text-sm px-1  ">
            <span className="text-sm bg-gradient-to-r from-orange-400 to-purple-900 bg-clip-text text-transparent">
              4000+ &nbsp;
            </span>
            <p>Users trust us for design &nbsp;</p>
            <div className="flex ">
              <Image
                src={im1}
                alt="Image 1"
                className=" w-4 h-4 rounded-full object-cover"
              />
              <Image
                src={im2}
                alt="Image 1"
                className="w-4 h-4 ml-[-4px] rounded-full object-cover"
              />
              <Image
                src={im3}
                alt="Image 1"
                className="w-4 h-4 ml-[-4px] rounded-full object-cover "
              />
            </div>
          </div>
          <h1 className="text-6xl font-semibold text-center my-5 leading-tight">
            Design Better,{" "}
            <span className="text-gray-400">
              Faster, <br /> Smarter
            </span>
          </h1>
          <p className="max-w-[500px] text-center text-lg font-light text-gray-600">
            Empower your creative vision with Designor — crafted for agencies,
            designers, and innovators to showcase their work seamlessly.
          </p>
          <div className="flex justify-between space-x-3">
            <Button
              variant={"outline"}
              className="mt-10 text-base px-6 hover:bg-white hover:border-gray-400 py-5"
            >
              Our work
            </Button>
            <Button
              variant={"secondary"}
              className="mt-10 border border-purpHover text-base px-6 py-5 text-white bg-purpButton hover:bg-purpHover "
            >
              Schedule a call
            </Button>
          </div>
          <p className="mt-20 mb-8 text-gray-600">
            Featured highlights of our Work
          </p>
          <div className="overflow-hidden whitespace-nowrap flex  container">
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