import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import SectionLayout from "./SectionLayout";
import ProposalBtn from "./ProposalBtn";

interface heroInfo {
  heading: string;
  description: string;
}

export const HeroForm = () => {
  return (
    <form className="flex items-center gap-4 sm:gap-8 mt-[1.5rem] lg:mt-[2.5rem]">
      <input
        className="placeholder-center rounded-[10px] outline-none text-small py-4 px-4 md:py-6 md:px-8"
        type="text"
        placeholder="Enter your email"
      />
      <ProposalBtn />
    </form>
  );
};

const HeroLeft: React.FC<heroInfo> = ({ heading, description }) => {
  return (
    <div className="flex-1">
      <h1 className="heading-primary">{heading}</h1>
      <p className="text-base">{description}</p>
      <HeroForm />
    </div>
  );
};

export default HeroLeft;
