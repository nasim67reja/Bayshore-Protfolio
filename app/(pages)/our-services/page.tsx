import Service, { services } from "@/components/unique/services/Service";
import AboutUs from "@/components/universal/AboutUs";
import Consultaion from "@/components/universal/Consultaion";
import Hero from "@/components/universal/Hero";
import Info from "@/components/universal/Info";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

//  Home Hero section
let hero: {
  heading: string;
  description: string;
}[];

hero = [
  {
    heading: "Empower Your Business with Innovative Marketing Solutions",
    description: `Bayshore Communication is a digital marketing company that offers web and app 
    development, SEO and online advertising, social media and email marketing, 
    content creation and distribution, UI/UX, graphics, video production, and 
    influencer marketing services. We provide innovative and practical solutions to 
    help you expand your company globally and accomplish your goals.`,
  },
];

export const metadata: Metadata = {
  title: "Service-Bayshore Communication",
  description:
    "Are you looking for a communication partner who can help you create a lasting impression on digital market? Browse our website and fulfill your dream with Bayshore. ",
};

const page = () => {
  return (
    <>
      <Hero heading={hero[0].heading} description={hero[0].description} />
      <Info />
      <SectionLayout bg="">
        <h2 className="heading-secondary text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[8rem] mt-[6rem]">
          {services.map(
            (
              el: {
                logo: string;
                title: string;
                description: string;
              },
              i: number
            ) => (
              <Service el={el} key={i} />
            )
          )}
        </div>
      </SectionLayout>

      <AboutUs />

      <Consultaion />
    </>
  );
};

export default page;
