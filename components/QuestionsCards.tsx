'use client'
import React, { useState } from 'react';
import down from "@/public/SVGs/down.svg";
import Image from "next/image";
import { motion } from "framer-motion";

type FAQ ={
  question: string;
  answer: string;
}
const QuestionsCards = ({ question, answer } : FAQ) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-[640px]">
      <div
        className="flex justify-between items-center bg-white p-5 rounded-2xl border border-borderColor font-medium cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <p>{question}</p>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={down} alt="down" width={16} height={16} />
        </motion.div>
      </div>
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-gray-100 p-5 rounded-b-2xl border border-t-0 border-borderColor"
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

export default QuestionsCards;