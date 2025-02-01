'use client'
import { motion } from 'motion/react'

import React from 'react'
import TestimonialsCards from './TestimonialsCards';
import avatar1 from "@/public/avatars/BJytCbStiWSy9rxpQ0wU6I3SNiI.svg"


const Testimonials = () => {
  return (
    <section className={`flex flex-col justify-center items-center py-24 overflow-hidden `} id="testimonials">
        <motion.div
        className="max-w-[640px] flex flex-col justify-center items-center mb-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="border border-borderColor rounded-xl w-fit font-medium px-2.5 py-0.5 bg-white text-sm">
        Testimonials
        </p>
        <h1 className="text-4xl font-semibold my-4 text-center">
        Worldwide customers
        </h1>
        <p className="text-light text-center text-gray-500 mb-12">
        Designor empowers global teams with seamless integration and time-saving capabilities. Discover user success!
        </p>
      </motion.div>
<motion.div className='flex gap-4 avatar mb-4 '
initial={{ opacity: 0, y: 100 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}>
    <TestimonialsCards src={avatar1} description="Designor unleashes creativity on a new level. Dynamic content generation in Figma? Yes, please!" username="Creative Mind" id="creativemind" color="#ffe1c2" />
    <TestimonialsCards src={avatar1} description="Incorporating Designor Framer into our web development process has streamlined collaboration." username="WebDev Guru" id="webdevguru" color="#ffdbde" />
    <TestimonialsCards src={avatar1} description="Designor transformed my workflow with instant suggestions and real-time collaboration. A game-changer!" username="Alex Designs" id="alexDesigns" color="#b0efff" />
    <TestimonialsCards src={avatar1} description="Designor's efficiency in generating code snippets is unmatched. Seamless integration, time-saving." username="Code Master" id="codemaster" color="#ebc9ff" />
    <TestimonialsCards src={avatar1} description="Designor is a game changer for our team. We have been able to improve our productivity and collaboration." username="Olivia Reynolds" id="oliviareynolds" color="#ffbdbd" />
    <TestimonialsCards src={avatar1} description="Designor unleashes creativity on a new level. Dynamic content generation in Figma? Yes, please!" username="Creative Mind" id="creativemind" color="#ffe1c2" />
    <TestimonialsCards src={avatar1} description="Incorporating Designor Framer into our web development process has streamlined collaboration." username="WebDev Guru" id="webdevguru" color="#ffdbde" />
    <TestimonialsCards src={avatar1} description="Designor transformed my workflow with instant suggestions and real-time collaboration. A game-changer!" username="Alex Designs" id="alexDesigns" color="#b0efff" />
    <TestimonialsCards src={avatar1} description="Designor's efficiency in generating code snippets is unmatched. Seamless integration, time-saving." username="Code Master" id="codemaster" color="#ebc9ff" />
    <TestimonialsCards src={avatar1} description="Designor is a game changer for our team. We have been able to improve our productivity and collaboration." username="Olivia Reynolds" id="oliviareynolds" color="#ffbdbd" />    
    
</motion.div>
<motion.div className='flex gap-4 avatar2 '
initial={{ opacity: 0, y: 100 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
>
    <TestimonialsCards src={avatar1} description="Designor unleashes creativity on a new level. Dynamic content generation in Figma? Yes, please!" username="Creative Mind" id="creativemind" color="#ffe1c2" />
    <TestimonialsCards src={avatar1} description="Incorporating Designor Framer into our web development process has streamlined collaboration." username="WebDev Guru" id="webdevguru" color="#ffdbde" />
    <TestimonialsCards src={avatar1} description="Designor transformed my workflow with instant suggestions and real-time collaboration. A game-changer!" username="Alex Designs" id="alexDesigns" color="#b0efff" />
    <TestimonialsCards src={avatar1} description="Designor's efficiency in generating code snippets is unmatched. Seamless integration, time-saving." username="Code Master" id="codemaster" color="#ebc9ff" />
    <TestimonialsCards src={avatar1} description="Designor is a game changer for our team. We have been able to improve our productivity and collaboration." username="Olivia Reynolds" id="oliviareynolds" color="#ffbdbd" />
    <TestimonialsCards src={avatar1} description="Designor unleashes creativity on a new level. Dynamic content generation in Figma? Yes, please!" username="Creative Mind" id="creativemind" color="#ffe1c2" />
    <TestimonialsCards src={avatar1} description="Incorporating Designor Framer into our web development process has streamlined collaboration." username="WebDev Guru" id="webdevguru" color="#ffdbde" />
    <TestimonialsCards src={avatar1} description="Designor transformed my workflow with instant suggestions and real-time collaboration. A game-changer!" username="Alex Designs" id="alexDesigns" color="#b0efff" />
    <TestimonialsCards src={avatar1} description="Designor's efficiency in generating code snippets is unmatched. Seamless integration, time-saving." username="Code Master" id="codemaster" color="#ebc9ff" />
    <TestimonialsCards src={avatar1} description="Designor is a game changer for our team. We have been able to improve our productivity and collaboration." username="Olivia Reynolds" id="oliviareynolds" color="#ffbdbd" />    
</motion.div>
    </section>
  )
}

export default Testimonials