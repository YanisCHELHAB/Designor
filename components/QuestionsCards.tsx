"use client";
import React from "react";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQ = {
  question: string;
  answer: string;
};
const QuestionsCards = ({ question, answer }: FAQ) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    >
      <Accordion
        type="single"
        collapsible
        className="bg-white px-6 py-1 rounded-xl  w-[640px] mb-3 border border-borderColor"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className=" text-base">{question}</AccordionTrigger>
          <AccordionContent className="text-base text-[#45454f] w-[90%]">
            <motion.p
            initial={{ opacity: 0, scale :0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
            >{answer}</motion.p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

export default QuestionsCards;
