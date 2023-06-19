import React from "react";
import SectionLayout from "./SectionLayout";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

interface resultInfo {
  heading: string;
}

const Results: React.FC<resultInfo> = ({ heading }) => {
  return (
    <SectionLayout bg="">
      <div className="flex flex-col items-center">
        <div className="max-w-[690px] mx-auto">
          <h2 className="heading-secondary text-center">{heading}</h2>
          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            We have some amazing results to show you. Our clients are delighted
            with our services and their outcomes. Click below to view our most
            amazing experience with our clients.
          </p>
        </div>
        <button
          type="submit"
          className="btn text-[14px] !py-4 flex items-center gap-8"
        >
          <span>View our success stories</span>
          <span className="inline-block translate-y-[1px]">
            <AiOutlineRight />
          </span>
        </button>
      </div>

      <div className="mt-8">
        <Image
          src="/assets/results.svg"
          alt="marketing"
          width={1200}
          height={1200}
          className="w-full h-auto"
        />
      </div>
    </SectionLayout>
  );
};

export default Results;
