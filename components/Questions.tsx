"use client";
import { motion } from "motion/react";
import React from "react";
import QuestionsCards from "./QuestionsCards";
const Questions = () => {
  return (
    <section
      className={`mx-44 max-xl:mx-2 flex flex-col justify-center items-center py-24 `}
    >
      <motion.div
        className="text-center max-w-[640px]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl max-lg:text-3xl font-semibold">
          Still have questions?
        </h1>
        <p className="text-light max-md:text-sm text-gray-500 pt-4 pb-12 text-center">
          Still have questions? Find quick answers to commonly asked questions
          about Designor. Have a question not listed?
        </p>
      </motion.div>
      <QuestionsCards
        question="How quickly can you start?"
        answer="Once we've had our kick-off call, we can get started on the same day. Send your request in and we'll get you up and running and started on your project."
      />
      <QuestionsCards
        question="What if I don't like designs?"
        answer="We're pretty easy going and can correct course quickly. We'll work with you and your team to make sure that we'll get to the right solution as quick as possible."
      />
      <QuestionsCards
        question="Why not hire a designers?"
        answer="Good question. Designers are expensive and it takes time to ramp them up."
      />
      <QuestionsCards
        question="How much design work will I get?"
        answer="We'll work with you to ensure deliverables are sent on a timely manner and depending on the size of the requests you give us."
      />
      <QuestionsCards
        question="What software is used?"
        answer="We use Framer for most of our work. Sometimes that varies depending on the project and we're not afraid to use what's needed when the time comes."
      />
    </section>
  );
};

export default Questions;
