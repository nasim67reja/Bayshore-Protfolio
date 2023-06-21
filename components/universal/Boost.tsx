import React from "react";
import SectionLayout from "./SectionLayout";
import { AiOutlineRight } from "react-icons/ai";
import HomeHeroCard from "../unique/Home/HomeHeroCard";

interface boostInfo {
  heading: string;
  btnText: string;
}
const Boost: React.FC<boostInfo> = ({ heading, btnText }) => {
  return (
    <SectionLayout bg="bg-[#F4F4F4]">
      <h2 className="heading-secondary text-center">{heading}</h2>
      <form className="flex items-center gap-12 mt-[4rem] max-w-[100rem] mx-auto">
        <input
          className="rounded-[10px] outline-none text-link py-6 px-8 flex-1"
          type="text"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="btn text-[14px] !py-6 flex items-center gap-8"
        >
          <span>{btnText}</span>
          <span className="inline-block translate-y-[1px]">
            <AiOutlineRight />
          </span>
        </button>
      </form>
      <div className="mt-20 flex gap-12">
        <HomeHeroCard
          bgImg="bg-heroimg-1"
          heading="Business Growth Increased By"
          stat={87}
        />
        <HomeHeroCard
          bgImg="bg-heroimg-2"
          heading="Website Engagement Increased By"
          stat={71}
        />
        <HomeHeroCard
          bgImg="bg-heroimg-3"
          heading="Social Media Engagement Increased By"
          stat={60}
        />
        <HomeHeroCard
          bgImg="bg-heroimg-1"
          heading="Business Growth Increased By"
          stat={87}
        />
      </div>
    </SectionLayout>
  );
};

export default Boost;
