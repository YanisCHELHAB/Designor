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
    <motion.div className="max-md:w-full"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    >
      <Accordion
        type="single"
        collapsible
        className="bg-white mb-3 px-6 py-1 border border-borderColor rounded-xl w-[640px] max-md:w-full"
      >
        <AccordionItem value="item-1 ">
          <AccordionTrigger className="text-base max-md:text-sm">{question}</AccordionTrigger>
          <AccordionContent className="w-[90%] text-[#45454f] text-base max-md:text-sm">
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
