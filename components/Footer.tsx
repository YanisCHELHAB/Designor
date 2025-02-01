import React from "react";
import { Button } from "./ui/button";
import { Calendar, Mail } from "lucide-react";

const Footer = () => {
  return (
    <section
      className={`mx-44  `}
    >
      <div className="flex flex-col justify-center items-center border border-borderColor bg-white  rounded-3xl py-24">
        <p className="border border-borderColor rounded-xl w-fit font-medium px-2.5 py-0.5 bg-white text-sm">
          Your design, elevated instantly
        </p>

        <h1 className="text-6xl font-semibold text-center my-5 leading-tight">
          Ready when you are
        </h1>
        <p className="max-w-[500px] text-center text-lg font-light text-gray-600">
          We already think it&apos;s a match. Go ahead and schedule our first
          date. We want to chat about your idea and learn your middle name.
        </p>
        <div className="flex justify-between space-x-3">
          <Button
            variant={"secondary"}
            className="mt-10 border border-purpHover text-base py-5 text-white bg-purpButton hover:bg-purpHover "
          >
            <Calendar size={32} className="mr-1" />
            Schedule a call
          </Button>
          <Button
            variant={"outline"}
            className="mt-10 text-base  border-borderColor hover:bg-white hover:border-gray-400 py-5"
          >
            <Mail size={32} className="mr-1" />
            Send an email
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center my-2 border border-borderColor bg-[#0d0d17]  rounded-3xl p-6">
        <p className="text-sm text-white">
            © 2021 Designor. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
