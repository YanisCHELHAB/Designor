"use client";
import { motion } from "motion/react";

import React from "react";
import TestimonialsCards from "./TestimonialsCards";
import { testimonials1, testimonials2 } from "./Testmonialsinfos";


const Testimonials = () => {
  return (
    <section
      className={`flex flex-col justify-center items-center py-24 overflow-hidden max-w-[100%]`}
      id="testimonials"
    >
      <motion.div
        className="max-w-[640px] flex flex-col justify-center items-center mb-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="border border-borderColor rounded-xl w-fit font-medium px-2.5 py-0.5 bg-white text-sm">
          Testimonials
        </p>
        <h1 className="text-4xl max-lg:text-3xl font-semibold my-4 text-center">
          Worldwide customers
        </h1>
        <p className="text-light text-center text-gray-500 max-md:text-sm mb-12  max-w-[100%]">
          Designor empowers global teams with seamless integration and
          time-saving capabilities. Discover user success!
        </p>
      </motion.div>
      <motion.div
        className="flex gap-4 avatar mb-4 w-max "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {testimonials1.map((testimonial, index) => (
          <TestimonialsCards key={index} src={testimonial.src} description={testimonial.description} username={testimonial.username} id={testimonial.id} color={testimonial.color} />
        ))}
      </motion.div>
      <motion.div
        className="flex gap-4 avatar2 w-max"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {testimonials2.map((testimonial, index) => (
          <TestimonialsCards key={index} src={testimonial.src} description={testimonial.description} username={testimonial.username} id={testimonial.id} color={testimonial.color} />
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
