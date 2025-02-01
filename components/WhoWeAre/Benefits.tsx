"use client";

import React from "react";
import { motion } from "motion/react";
import svg1 from "@/public/SVGs/svgexport-11.svg";
import svg2 from "@/public/SVGs/svgexport-12.svg";
import svg3 from "@/public/SVGs/svgexport-13.svg";
import svg4 from "@/public/SVGs/svgexport-14.svg";
import svg5 from "@/public/SVGs/svgexport-15.svg";
import svg6 from "@/public/SVGs/svgexport-16.svg";
import svg7 from "@/public/SVGs/svgexport-17.svg";
import svg8 from "@/public/SVGs/svgexport-18.svg";
import BenefitsCards from "../BenefitsCards";

const Benefits = () => {
  return (
    <section
      className={`py-24 mx-44 flex flex-col justify-center items-center`}
    >
      <motion.div className="max-w-[640px] flex flex-col justify-center items-center mb-12"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      >
        <p className="border border-borderColor rounded-xl w-fit font-medium px-2.5 py-0.5 bg-white text-sm">
          Benefits
        </p>
        <h1 className="text-4xl font-semibold my-4 text-center">
          Here are a few things we do that others really just don’t.
        </h1>
      </motion.div>
      <div className="grid grid-cols-5 grid-rows-2 gap-4 w-full ">
        <BenefitsCards src={svg1} title="Affordability" description="Access high-quality design services at a fraction of traditional costs."/>
        <BenefitsCards src={svg2} title="Consistency" description="Ensure a consistent brand identity with regular design output." />
        <BenefitsCards src={svg3} title="Scalability" description="Access high-quality design services at a fraction of traditional costs."/>
        <BenefitsCards src={svg4} title="Speed" description="Get quicker turnarounds on design projects without sacrificing quality at a way better price on your wallet." style ="col-span-2"/>
        <BenefitsCards src={svg5} title="Diversity" description="Access to a variety of styles and expertise from a pool of creative professionals and people around the world."/>
        <BenefitsCards src={svg6} title="Affordability" description="Access high-quality design services at a fraction of traditional costs."style ="col-span-2"/>
        <BenefitsCards src={svg7} title="Support" description="Enjoy dedicated customer service and revisions to perfect your designs."/>
        <BenefitsCards src={svg8} title="Convenience" description="Streamline the design process with a simple workflow and process."/>
      </div>
    </section>
  );
};

export default Benefits;
