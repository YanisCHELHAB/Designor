'use client'
import React from "react";
import Image from "next/image";
import icon1 from "@/public/UsersIcons/BJytCbStiWSy9rxpQ0wU6I3SNiI.png";
import icon2 from "@/public/UsersIcons/ikD34vgzaLM6N50MKdcR9HVBnk.png";
import icon3 from "@/public/UsersIcons/ofIUD8MCjke7Xz8jkh29AWqajJo.png";
import icon4 from "@/public/UsersIcons/qCpU7HJtiveCC9wTFuh7L4wc8YM.png";
import { Instrument_Sans } from "next/font/google";
import { motion } from "motion/react"; // Corrected import

const instrument_Sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const WhoWeAre = () => {
  return (
    <section
    id="whoweare"	
    className={`mx-44 flex flex-col justify-center items-center py-24 border border-borderColor rounded-3xl bg-white ${instrument_Sans.className}`}
    >
      <div className="max-w-[640px] flex flex-col justify-center items-center">
        <motion.div
          className="justify-center items-center flex flex-col"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          
        >
          <p className="border border-borderColor rounded-xl w-fit font-medium text-white px-2.5 py-0.5 bg-purpButton text-sm">
            Who We Are
          </p>
          <h1 className="text-4xl font-semibold my-4">Crafting Unique</h1>
          <p className="text-center text-lg font-light">
            We are a dedicated team of creative professionals committed to
            delivering exceptional design and development solutions. With a
            passion for innovation and attention to detail, we specialize in
            crafting unique experiences that resonate with our client&apos;s
            visions. Our approach is collaborative, ensuring that every project
            reflects the individuality and goals of those we work with. Whether
            you&apos;re building a brand, designing a product, or launching a
            digital platform, we&apos;re here to turn your ideas into impactful
            realities. <br />
            <br />
            At the heart of what we do is a belief in the power of design to
            shape meaningful connections. Our team brings together diverse
            expertise in strategy, creativity, and technology to produce work
            that stands out and delivers results. From concept to completion, we
            work closely with our clients to understand their needs and exceed
            their expectations. With a strong foundation in innovation and a
            dedication to quality, we create solutions that inspire and engage,
            helping you achieve your goals with confidence.
          </p>
        </motion.div>
        <div className="mt-12 flex justify-between w-full">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            
          >
            <Image
              src={icon1}
              alt="icon1"
              className="w-14 h-14 rounded-full bg-blue-200"
            />
            <h4 className="font-medium mt-3">Michel Lee</h4>
            <h5 className="text-gray-500">Founder</h5>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut"  }}
            
          >
            <Image
              src={icon4}
              alt="icon4"
              className="w-14 h-14 rounded-full bg-blue-200"
            />
            <h4 className="font-medium mt-3">Chris Wilson</h4>
            <h5 className="text-gray-500">Project Manager</h5>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration:0.5, ease: "easeInOut"  }}
            
          >
            <Image
              src={icon2}
              alt="icon2"
              className="w-14 h-14 rounded-full bg-pink-200"
            />
            <h4 className="font-medium mt-3">Emily Brown</h4>
            <h5 className="text-gray-500">Designer</h5>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut"  }}
           
          >
            <Image
              src={icon3}
              alt="icon3"
              className="w-14 h-14 rounded-full bg-blue-200"
            />
            <h4 className="font-medium mt-3">David Johnson</h4>
            <h5 className="text-gray-500">Designer</h5>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;