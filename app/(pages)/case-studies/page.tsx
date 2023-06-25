import Consultaion from "@/components/universal/Consultaion";
import { HeroWithImage } from "@/components/universal/Hero";
import HeroLeft from "@/components/universal/HeroLeft";
import SectionHeader from "@/components/universal/SectionHeader";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Case-Bayshore Communication",
  description:
    "Discover our case studies and learn how Bayshore have helped many clients solve their communication challenges, improve their results, and achieve their ultimate goals.",
};

const page = () => {
  return (
    <>
      <HeroWithImage
        heading={hero[0].heading}
        description={hero[0].description}
        imgLink="/assets/case-studies/case-studies.png"
      />
      {/* Featured */}
      <SectionLayout bg="">
        <SectionHeader
          heading="Featured case studies"
          text="Be inspired by our clients’ success stories. Learn how they used our solutions to grow their businesses. You can do it too."
        />

        <div className="mt-8">
          <div className="flex flex-col gap-[3rem]">
            <Featured />
            <Featured />
            <Featured />
            <Featured />
            <Featured />
            <Featured />
            <Featured />
          </div>
        </div>
      </SectionLayout>

      <Consultaion />
    </>
  );
};

export default page;

let hero: {
  heading: string;
  description: string;
}[];

hero = [
  {
    heading: "Inspiring Case Studies of Business Growth",
    description: `If you are looking for some inspiration and motivation to expand your company, you will find it in our case studies. We have collected the most amazing stories of our client's business growth from different industries and niches. You will learn how they faced obstacles, seized opportunities, and applied our creative solutions. Our case analyses will show you how you can achieve it with help of Bayshore services. `,
  },
];

const Featured = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="">
        <Image
          src="/assets/case-studies/office.png"
          alt="man-working-on-office"
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>
      <div className=" bg-[#F4F4F4] md:rounded-r-[20px] px-8 md:px-[10rem] py-[2rem]">
        <div className="flex flex-col gap-[1.5rem] md:gap-[2.5rem] md:items-start items-center">
          <Image
            src="/assets/case-studies/arm-candy.svg"
            alt="arm-candy"
            width={200}
            height={100}
            className="w-[12rem] sm:w-[15rem] md:w-[17.4rem] h-auto"
          />
          <h4 className="heading-four ">
            Saving 5 months of working hours every month
          </h4>
          <p className="text-small">
            By being available to our clients, we can respond to their concerns
            and questions and carry out our duty for keeping our clients
            up-to-date about the case.
          </p>
          <button className="!text-[#565EE8] font-semibold text-small">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};
