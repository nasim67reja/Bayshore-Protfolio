import React from "react";
import SectionLayout from "./SectionLayout";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";

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
            Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
            use. The Flat is great to put under any phone case(non-metal) Use.
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
