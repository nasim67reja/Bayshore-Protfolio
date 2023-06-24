import React from "react";
import SectionLayout from "./SectionLayout";
import { AiOutlineRight } from "react-icons/ai";
import HomeHeroCard from "../unique/Home/HomeHeroCard";
import Image from "next/image";
import ProposalBtn from "./ProposalBtn";

interface boostInfo {
  heading: string;
  btnText: string;
}
const Boost: React.FC<boostInfo> = ({ heading, btnText }) => {
  return (
    <SectionLayout bg="bg-[#F4F4F4]">
      <h2 className="heading-secondary !text-center">{heading}</h2>
      <form className="flex items-center gap-4 md:gap-12 mt-[4rem] max-w-[100rem] mx-auto">
        <input
          className="rounded-[10px] outline-none text-small py-4 px-4 md:py-6 md:px-8 flex-1"
          type="text"
          placeholder="Enter your email"
        />
        <ProposalBtn />
      </form>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-12 px-[4rem] sm:px-[15rem]  md:px-[10rem] lg:px-0">
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

        <div className="flex-1 flex flex-col items-center custom-shadow p-[3rem]">
          <p className="text-base pr-12 !text-start">
            “We measure our success by how much we WOW our clients.”
          </p>
          <div className="flex mt-8 gap-6">
            <Image
              src="/assets/salman-n.png"
              alt="salman"
              width={150}
              height={150}
              className="w-[53px] h-[53px] rounded-full border-[2px] border-[#207DE9]"
            />
            <div>
              <h4 className="heading-four">BILL CRAIG</h4>
              <p className="text-small">WebFX President</p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Boost;
