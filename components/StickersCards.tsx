import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
type stickers = {
    src: string;
    title: string;
    description: string;
    color: string;
    rotation : number;
}

const StickersCards = ({ src, title, description, color, rotation }: stickers) => {
    return (
        <motion.div className={`flex gap-4 items-start lg:max-w-[50%] max-md:max-w-[90%] max-md:text-sm max-lg:max-w-[70%] p-8 sticky top-52 max-md:top-32`} style={{backgroundColor: `#${color}`}}
        initial={{  y: 50, scale :0.8}}
        whileInView={{  y: 0 , scale: 1, rotateZ: rotation }}
        transition={{ duration: 0.5 }}
            
            >
            <Image src={src} alt={title} width={24} height={24} />
            <div className='space-y-2'>
                <h5 className='font-semibold'>{title}</h5>
                <p>{description}</p>
            </div>
        </motion.div>
    )
}


 export default StickersCards