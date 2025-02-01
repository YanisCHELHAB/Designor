import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'


type card = {
    src : string
    title : string
    description : string
    comment? : string;
    style? : string
}
const TabsCards = ({src ,title, description, comment, style} : card) => {
  return (
    <motion.div className={`bg-white flex flex-col justify-between p-5 rounded-2xl border border-borderColor ${style}`}
    
    initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        
        >
            <div className='flex items-center justify-between'>
                <Image src={src} alt="check" height={34} width={34}  />
                {comment && <p className="rounded-xl w-fit font-medium px-2.5 py-0.5  text-[#b8b5ff] bg-[#1b1a2e] text-sm">
                    {comment}
                  </p>}
            </div>
            <motion.div className="space-y-2 mt-6 "
            
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            >
                <h1 className="font-semibold text-lg">{title} </h1>
                
                <p className='text-base'>
                {description}
                </p>
            </motion.div>
        </motion.div>
  )
}

export default TabsCards