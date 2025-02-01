import React from 'react'

import check from "@/public/SVGs/svgexport-10.svg"
import Image from 'next/image';

const ServicesSection = () => {
  return (
    <section className={`mx-44 flex flex-col justify-center items-center py-24 `} id="services">
      <p className='border border-borderColor rounded-xl px-2.5 py-0.5 font-medium  bg-white text-sm mb-4'>What We Offer</p>
      <h1 className='text-center text-4xl font-semibold max-w-[640px]'>Tailored solutions crafted to elevate your vision.</h1>
      <div className='grid grid-cols-4 w-full gap-4 mt-12'>
        <div className='bg-white rounded-xl border border-borderColor p-6'>

          <p className='text-lg font-semibold mb-4'>Brand</p>
          <ul className='text-gray-600 font-light space-y-3 '>
          
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />Brand identity</li>
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />Positioning</li>
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />Framer development</li>
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />Motion design</li>
          </ul>
        </div>
        <div className='bg-white rounded-xl border border-borderColor p-6'>

          <p className='text-lg font-semibold mb-4'>Product</p>
          <ul className='text-gray-600 font-light space-y-3 '>
          
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />3D Research</li>
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />3D mockups</li>
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />Product design</li>
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />Development</li>
          </ul>
        </div>
        <div className='bg-white rounded-xl border border-borderColor p-6'>

          <p className='text-lg font-semibold mb-4'>Web development</p>
          <ul className='text-gray-600 font-light space-y-3 '>
          
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />Framer</li>
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />Nuxt</li>
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />Webflow</li>
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />Front-end</li>
          </ul>
        </div>
        <div className='bg-white rounded-xl border border-borderColor p-6'>

          <p className='text-lg font-semibold mb-4'>Other</p>
          <ul className='text-gray-600 font-light space-y-3 '>
          
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />Marketing Assets</li>
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />Guidelines</li>
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />Stream Assets</li>
            <li className='flex'><Image src={check} alt='check' height={20} width={20} className='mr-2' />Website Assets</li>
          </ul>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default ServicesSection