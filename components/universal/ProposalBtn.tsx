import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const ProposalBtn = () => {
  return (
    <button
      type="submit"
      className="btn text-small !py-4 md:!py-6 flex items-center gap-2 sm:gap-4 md:gap-8 px-[0rem] sm:px-[2rem]"
    >
      <span>Send us a Proposal</span>
      <span className="inline-block translate-y-[1px]">
        <AiOutlineRight />
      </span>
    </button>
  );
};

export default ProposalBtn;
