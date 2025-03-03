import React from "react";
import Image, { StaticImageData } from "next/image";

import X from "@/public/SVGs/twitter.png";
type testimonial = {
  src: StaticImageData;
  description: string;
  username: string;
  id: string;
  color : string;
};


const TestimonialsCards = ({ src, description, username, id, color }: testimonial) => {
  return (
    <div
      className={`bg-white flex flex-col justify-between p-5 rounded-2xl border border-borderColor  w-[350px] group `}
    >
      <p className="text-base text-[#272730] ">{description}</p>
      <div className="flex items-center mt-6 ">
        <Image src={src} alt="check" height={42} width={42} className="mr-4 rounded-full" style={{ backgroundColor : `${color}` }} />
        <div className="flex items-center justify-between w-full">
          <div>
            <h5 className="font-medium mb-0.5"> {username}</h5>
            <p className=" text-xs text-gray-500 ">@{id}</p>
          </div>
          <Image
            src={X}
            alt="check"
            height={16}
            width={16}
            className="mr-4 cursor-pointer group-hover:opacity-50 opacity-0 "
            
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCards;
