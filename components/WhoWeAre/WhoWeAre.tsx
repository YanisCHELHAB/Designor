"use client";
import React from "react";
import Image from "next/image";
import icon1 from "@/public//avatars/BJytCbStiWSy9rxpQ0wU6I3SNiI.avif";
import icon2 from "@/public/avatars/ikD34vgzaLM6N50MKdcR9HVBnk.avif";
import icon3 from "@/public/avatars/ofIUD8MCjke7Xz8jkh29AWqajJo.avif";
import icon4 from "@/public/avatars/qCpU7HJtiveCC9wTFuh7L4wc8YM.avif";

import { motion } from "motion/react"; // Corrected import

const WhoWeAre = () => {
  return (
    <section
      id="whoweare"
      className={`mx-44 max-xl:mx-2 flex flex-col justify-center items-center py-24 border border-borderColor rounded-3xl bg-white `}
    >
      <div className="flex flex-col justify-center items-center max-w-[640px]">
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="bg-purpButton px-2.5 py-0.5 border border-borderColor rounded-xl w-fit font-medium text-sm text-white">
            Who We Are
          </p>
          <h1 className="my-4 font-semibold text-4xl max-lg:text-3xl">
            Crafting Unique
          </h1>
          <p className="max-md:w-[90%] font-light text-center text-lg max-md:text-sm">
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
        <div className="justify-between max-sm:gap-8 grid grid-cols-4 max-sm:grid-cols-2 mt-12 w-full">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={icon1}
              alt="icon1"
              className="bg-blue-200 rounded-full w-14 max-sm:w-10 h-14 max-sm:h-10"
            />
            <h4 className="mt-3 font-medium max-sm:text-sm">Michel Lee</h4>
            <h5 className="text-gray-500 max-sm:text-sm">Founder</h5>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={icon4}
              alt="icon4"
              className="bg-blue-200 rounded-full w-14 max-sm:w-10 h-14 max-sm:h-10"
            />
            <h4 className="mt-3 font-medium max-sm:text-sm">Chris Wilson</h4>
            <h5 className="text-gray-500 max-sm:text-sm">Project Manager</h5>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={icon2}
              alt="icon2"
              className="bg-pink-200 rounded-full w-14 max-sm:w-10 h-14 max-sm:h-10"
            />
            <h4 className="mt-3 font-medium max-sm:text-sm">Emily Brown</h4>
            <h5 className="text-gray-500 max-sm:text-sm">Designer</h5>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={icon3}
              alt="icon3"
              className="bg-blue-200 rounded-full w-14 max-sm:w-10 h-14 max-sm:h-10"
            />
            <h4 className="mt-3 font-medium max-sm:text-sm">David Johnson</h4>
            <h5 className="text-gray-500 max-sm:text-sm">Designer</h5>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
