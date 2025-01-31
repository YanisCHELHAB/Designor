'use client'
import { motion } from 'motion/react'
import { Instrument_Sans } from 'next/font/google';
import React from 'react'
import QuestionsCards from './QuestionsCards';
const instrument_Sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Questions = () => {
  return (
    <section className={`mx-44 flex flex-col justify-center items-center py-24 ${instrument_Sans.className}`}>
        <motion.div
        className="text-center max-w-[640px]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-semibold">
        Still have questions?
        </h1>
        <p className="text-light text-gray-500 pt-4 pb-12 text-center">
        Still have questions?
        Find quick answers to commonly asked questions about Designor. Have a question not listed?
        </p>
      </motion.div>
      <QuestionsCards question='How quickly can you start?' answer='Once we&apos;ve had our kick-off call, we can get started on the same day. Send your request in and we&apos;ll get you up and running and started on your project.'/>
    </section>
  )
}

export default Questions