import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'


type card = {
    src : string
    title : string
    description : string
    style? : string
}
const BenefitsCards = ({src ,title, description, style} : card) => {
  return (
    <motion.div className={`bg-white flex flex-col justify-between p-5 rounded-2xl border border-borderColor ${style}`}
    initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        >
            <Image src={src} alt="check" height={34} width={34}  />
            <motion.div className="space-y-2 mt-12 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            >
                <h1 className="font-semibold text-lg">{title}</h1>
                <p className='text-sm'>
                {description}
                </p>
            </motion.div>
        </motion.div>
  )
}

export default BenefitsCards