"use client";
import Image from "next/image";
import pr1 from "@/public/Projects/6yDH80vZJ3yCGSfFdVgvjHB120s.avif";
import pr2 from "@/public/Projects/C0HEg5fVoN04iUYLyUvsbms6XRc.avif";
import pr3 from "@/public/Projects/P3ct0nSyLjyUmwbMbxlB9OAS3o.avif";
import pr4 from "@/public/Projects/YttOJUOqYLp5HD7Rgtf0Chhq9Q.avif";
import pr5 from "@/public/Projects/QBc4Yu7b0B0NHGA7djZtHvNRfJU.avif";
import pr6 from "@/public/Projects/nmXALQOEfE4TEJMm1vlEkcXKmD0.avif";
import pr7 from "@/public/Projects/qZmB9LNjrvvbwbHJ75K4DB8CBd0.avif";
import pr8 from "@/public/Projects/uhc7ow2bA5UN8RdLh9COGJz54k.avif";
import pr9 from "@/public/Projects/Fg2mSAnR1SliXBAW9U3stPPzFc.avif";
import pr10 from "@/public/Projects/mDBZaGh8XQVbVWIRLR88xfkfIio.avif";
import pr11 from "@/public/Projects/aYmNIVSYIcTWYKa5B8wJW4KDW0.avif";
import pr13 from "@/public/Projects/cZbwLVVS20T5BJXom1LsjbSmY6c.avif";
import pr12 from "@/public/Projects/VOoWmGXMH66hmnSzOMEHa3C94Q.avif";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const projects = [pr1,pr2,pr3,pr4,pr5,pr6,pr7,pr8,pr9,pr10,pr11,pr12,pr13]


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
      {/* <motion.div
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
      </motion.div> */}

      <Carousel className="w-full ">
        <CarouselContent className="-ml-1 ">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-[24%] im "
            >  
                <Image
                  src={project}
                  alt="project"
                  className="h-[420px] w-[350px] rounded-2xl cursor-grab"
                />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default CaseSection;
