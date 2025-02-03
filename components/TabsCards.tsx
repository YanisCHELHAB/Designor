import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'


type card = {
    src : string
    title : string
    description : string
    comment? : string;
    style? : React.CSSProperties
}
const TabsCards = ({src ,title, description, comment, style} : card) => {
  return (
    <motion.div className={`bg-white flex flex-col justify-between p-5 max-md:w-full rounded-2xl border border-borderColor`}
    style={style}
    
    initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        
        >
            <div className='flex justify-between items-center'>
                <Image src={src} alt="check" height={34} width={34}  />
                {comment && <p className="bg-[#1b1a2e] px-2.5 py-0.5 rounded-xl w-fit font-medium text-[#b8b5ff] text-sm">
                    {comment}
                  </p>}
            </div>
            <motion.div className="space-y-2 mt-6"
            
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            >
                <h1 className="font-semibold text-lg max-lg:text-base">{title} </h1>
                
                <p className='text-base max-lg:text-sm'>
                {description}
                </p>
            </motion.div>
        </motion.div>
  )
}

export default TabsCards