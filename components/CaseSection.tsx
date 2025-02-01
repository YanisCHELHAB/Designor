'use client'
import Image from "next/image";
import pr1 from "@/public/Projects/6yDH80vZJ3yCGSfFdVgvjHB120s.avif";
import pr2 from "@/public/Projects/C0HEg5fVoN04iUYLyUvsbms6XRc.avif";
import pr3 from "@/public/Projects/P3ct0nSyLjyUmwbMbxlB9OAS3o.avif";
import pr4 from "@/public/Projects/YttOJUOqYLp5HD7Rgtf0Chhq9Q.avif";
import pr5 from "@/public/Projects/QBc4Yu7b0B0NHGA7djZtHvNRfJU.avif";
import pr6 from "@/public/Projects/nmXALQOEfE4TEJMm1vlEkcXKmD0.avif";
import pr7 from "@/public/Projects/qZmB9LNjrvvbwbHJ75K4DB8CBd0.avif";
import pr8 from "@/public/Projects/uhc7ow2bA5UN8RdLh9COGJz54k.avif";
import { motion } from "motion/react";


const CaseSection = () => {
  return (
    <section
      className={`py-24 flex flex-col justify-center items-center overflow-hidden `}
      id="case"
    >
      <motion.div
        className="text-center max-w-[640px]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl font-semibold">
          Showcasing our most remarkable creations
        </h1>
        <p className="text-light text-gray-500 pt-4 pb-12">
          A showcase of projects that embody creativity, innovation, and <br />
          precision.
        </p>
      </motion.div>
      <motion.div
        className="flex gap-4  caroussel"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <Image
          src={pr1}
          alt="project"
          className="h-[400px]  w-[420px] im rounded-2xl"
        />
        <Image
          src={pr2}
          alt="project"
          className="h-[400px]  w-[420px] im rounded-2xl"
        />
        <Image
          src={pr3}
          alt="project"
          className="h-[400px]  w-[420px] im rounded-2xl"
        />
        <Image
          src={pr4}
          alt="project"
          className="h-[400px]  w-[420px] im rounded-2xl"
        />
        <Image
          src={pr5}
          alt="project"
          className="h-[400px]  w-[420px] im rounded-2xl"
        />
        <Image
          src={pr6}
          alt="project"
          className="h-[400px]  w-[420px] im rounded-2xl"
        />
        <Image
          src={pr7}
          alt="project"
          className="h-[400px]  w-[420px] im rounded-2xl"
        />
        <Image
          src={pr8}
          alt="project"
          className="h-[400px]  w-[420px] im rounded-2xl"
        />
      </motion.div>
    </section>
  );
};

export default CaseSection;
