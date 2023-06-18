import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import SectionLayout from "./SectionLayout";

interface heroInfo {
  heading: string;
  description: string;
}

export const HeroForm = () => {
  return (
    <form className="flex items-center gap-8 mt-[2.5rem]">
      <input
        className="placeholder-center rounded-[10px] outline-none text-link py-4 px-4"
        type="text"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="btn text-[14px] !py-4 flex items-center gap-8"
      >
        <span>Send us a proposal</span>
        <span className="inline-block translate-y-[1px]">
          <AiOutlineRight />
        </span>
      </button>
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
