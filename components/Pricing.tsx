"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import check from "@/public/SVGs/checksvg.svg";
import Image from "next/image";
import sv1 from "@/public/SVGs/svgexport-23 (1).svg";
import sv2 from "@/public/SVGs/svgexport-24 (1).svg";
import sv3 from "@/public/SVGs/svgexport-25 (1).svg";
import sv5 from "@/public/SVGs/svgexport-26.svg";
import sv6 from "@/public/SVGs/svgexporweet-23.svg";
import sv7 from "@/public/SVGs/svgexporwwt-21.svg";
import sv8 from "@/public/SVGs/svgexpwwort-24.svg";
import logo from "@/public/SVGs/looog.svg";
import mon from "@/public/SVGs/monn.svg";
import arrow from "@/public/SVGs/arrow.svg";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "motion/react";

import TabsCards from "./TabsCards";

type Tabs = "saving" | "examples" | "inclusion";
const Pricing = () => {
  const [tab, setTab] = React.useState<Tabs>("saving");
  return (
    <section
      className={`mx-44 flex flex-col justify-center items-center py-24`}
      id="pricing"
    >
      <motion.div
        className="max-w-[640px] flex flex-col justify-center items-center mb-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="border border-borderColor rounded-xl w-fit font-medium px-2.5 py-0.5 bg-white text-sm">
          All-in-one plan
        </p>
        <h1 className="text-4xl font-semibold my-4 text-center">
          Simple and Transparent Pricing
        </h1>
        <p className="text-light text-center text-gray-500 mb-12">
          Enjoy the full experience with no hidden fees or surprises!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Card className="max-w-[350px] bg-white">
          <CardHeader>
            <p className="rounded-xl w-fit font-medium px-2.5 py-0.5 bg-HoverGray text-sm">
              Starting at
            </p>
            <CardTitle className="text-3xl py-3">
              $4,999 &nbsp;
              <span className="text-base font-light text-gray-500">/mo</span>
            </CardTitle>
            <CardDescription className="text-base">
              Designed for agencies, this plan offers scalability and full
              customization to meet your team&apos;s needs. Perfect for multiple
              projects and clients.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-none space-y-3 ">
              <li className="flex  items-center gap-2">
                <Image src={check} alt="check" width={20} height={20} />
                Unlimited team members
              </li>
              <li className="flex  items-center gap-2">
                <Image src={check} alt="check" width={20} height={20} />
                Custom branding options
              </li>
              <li className="flex  items-center gap-2">
                <Image src={check} alt="check" width={20} height={20} />
                Pause of cancel anytime
              </li>
              <li className="flex  items-center gap-2">
                <Image src={check} alt="check" width={20} height={20} />
                Advanced analytics
              </li>
              <li className="flex  items-center gap-2">
                <Image src={check} alt="check" width={20} height={20} />
                Priority support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              variant={"default"}
              className="bg-purpButton text-white hover:bg-purpHover size-full py-2.5 px-4 text-base"
            >
              Schedule a call
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      <div className="mt-16 flex flex-col justify-center items-center">
        <div className="bg-[#f2f2f5] w-fit space-x-3 rounded-full px-1 py-2.5 text-sm font-medium mb-8">
          <span
            className={`px-4 py-2 rounded-full cursor-pointer  ${
              tab === "saving" && "bg-white border border-borderColor"
            }`}
            onClick={() => setTab("saving")}
          >
            See the saving
          </span>
          <span
            className={`px-4 py-2 rounded-full  cursor-pointer  ${
              tab === "examples" && "bg-white border border-borderColor"
            }`}
            onClick={() => setTab("examples")}
          >
            Examples
          </span>
          <span
            className={`px-4 py-2 rounded-full  cursor-pointer ${
              tab === "inclusion" && "bg-white border border-borderColor"
            }`}
            onClick={() => setTab("inclusion")}
          >
            What&apos;s included
          </span>
        </div>
        {tab === "inclusion" && (
          <div className="flex justify-between items-center  space-x-4">
            <TabsCards
              src={sv2}
              title="Personalized Notion board"
              description="A customized Notion board designed to optimize your workflow and boost team productivity."
            />

            <TabsCards
              src={sv3}
              title="Regular updates"
              description="Ongoing updates to ensure the latest features and improvements for your experience."
            />

            <TabsCards
              src={sv5}
              title="Easy & secure payments"
              description="Enjoy hassle-free, secure transactions with multiple payment options for your convenience."
            />
          </div>
        )}
        {tab === "examples" && (
          <div className="flex justify-between items-center  space-x-4">
            <TabsCards
              src={sv1}
              title="Product design"
              description="Innovative product design that combines aesthetics with functionality, ensuring a seamless user experience and usability."
            />

            <TabsCards
              src={sv8}
              title="Brand Identity"
              description="Creating a strong brand identity that communicates your values and stands out in a crowded market."
            />

            <TabsCards
              src={sv7}
              title="Web Design"
              description="Crafting user-friendly, visually appealing websites that engage visitors and drive business success."
            />
          </div>
        )}
        {tab === "saving" && (
          <div className="flex justify-between items-center  space-x-5">
            <TabsCards
              src={sv6}
              title="$22,000 /mo"
              description="Flexible pricing with premium features, customizable plans, and dedicated support for agencies."
            />
            <span className="font-bold">vs</span>
            <TabsCards
              src={logo}
              title="$4,999 /mo"
              description="Access essential tools for growth, including advanced analytics and client management features."
            />
            <Image src={arrow} alt="arrow" width={18} height={18} />
            <TabsCards
              src={mon}
              title="$17,000 /mo"
              description="Exclusive benefits like white-label solutions and performance reports designed for agencies."
              comment="Big savings!"
              style={{backgroundColor: "black", color : "white"}}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
