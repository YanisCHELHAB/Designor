"use client";
import { motion } from "motion/react";

import React from "react";
import StickersCards from "../StickersCards";
import sticker1 from "@/public/SVGs/svgexport-19.svg";
import sticker2 from "@/public/SVGs/svgexport-20.svg";
import sticker3 from "@/public/SVGs/svgexport-21.svg";
import sticker4 from "@/public/SVGs/svgexport-22.svg";
import sticker5 from "@/public/SVGs/svgexport-23.svg";
import sticker6 from "@/public/SVGs/svgexport-24.svg";


const Stickers = () => {
  return (
    <section
      className={`py-24 mx-44 flex flex-col justify-center items-center `}
      id="stickers"
    >
      <motion.div
        className="max-w-[640px] flex flex-col justify-center items-center mb-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="border border-borderColor rounded-xl w-fit font-medium px-2.5 py-0.5 bg-white text-sm">
          Navigating Success Together
        </p>
        <h1 className="text-4xl font-semibold my-4 text-center">
          We lead you through every step
        </h1>
        <p className="text-light text-center text-gray-500 mb-12">
          From creative design to technical solutions, our services define
          <br /> industry excellence
        </p>
      </motion.div>
      <div className="flex flex-col items-center gap-7">
        <StickersCards
          src={sticker1}
          title="Idea"
          description="We meet with your team to learn more about your project idea and goals. After that, our team will work together to create an action plan and proposal for your project."
          color="feebd5"
          rotation={0}
        />
        <StickersCards
          src={sticker2}
          title="Research"
          description="We will share a detailed questionnaire to analyze your business in-depth. After that, we will be able to create a tailor-made design to reach your business goals."
          color="dbfbe6"
          rotation={-5}
        />
        <StickersCards
          src={sticker3}
          title="Web Design"
          description="We will design a mockup or prototype of your website and present it to you. Once with the initial mockup, we will start the revision process to perfect it."
          color="cef9fd"
          rotation={4}
        />
        <StickersCards
          src={sticker4}
          title="No-code development"
          description="We develop websites using the best practices and standards. So you have a perfectly responsive, SEO-friendly, and highly conversion-oriented website."
          color="ece8fd"
          rotation={-3}
        />
        <StickersCards
          src={sticker5}
          title="Launch"
          description="When the project is completed, we will schedule a 2hr session to train your team on using, editing, and taking advantage of your new website."
          color="f9e7fe"
          rotation={5}
        />
        <StickersCards
          src={sticker6}
          title="Support"
          description="We keep a close relationship and communication with your team so we can help you with future design or development needs in the long term."
          color="feebd5"
          rotation={-2}
        />
        
        
      </div>
    </section>
  );
};

export default Stickers;
