"use client";
import React from "react";
import { Button } from "./ui/button";
import { Calendar, Mail } from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <section className={`mx-44 max-xl:mx-2 `}>
      <motion.div
        className="flex flex-col justify-center items-center bg-white py-24 border border-borderColor rounded-3xl"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="bg-white px-2.5 py-0.5 border border-borderColor rounded-xl w-fit font-medium text-sm">
          Your design, elevated instantly
        </p>

        <h1 className="my-5 font-semibold text-6xl text-center max-lg:text-3xl leading-tight">
          Ready when you are
        </h1>
        <p className="px-3 max-w-[500px] font-light text-center text-gray-600 text-lg max-lg:text-base">
          We already think it&apos;s a match. Go ahead and schedule our first
          date. We want to chat about your idea and learn your middle name.
        </p>
        <div className="flex max-sm:flex-col justify-between sm:space-x-3 max-sm:space-y-3 max-sm:w-[90%]">
          <Button
            variant={"secondary"}
            className="border-purpHover bg-purpButton hover:bg-purpHover mt-10 py-5 border text-base text-white"
          >
            <Calendar size={32} className="mr-1" />
            Schedule a call
          </Button>
          <Button
            variant={"outline"}
            className="hover:border-gray-400 hover:bg-white mt-10 py-5 border-borderColor text-base"
          >
            <Mail size={32} className="mr-1" />
            Send an email
          </Button>
        </div>
      </motion.div>
      <div className="flex justify-center items-center bg-[#0d0d17] my-2 p-6 border border-borderColor rounded-3xl">
        <p className="text-sm text-white max-md:text-sm">
          © 2021 Designor. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
