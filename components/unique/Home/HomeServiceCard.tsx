import Image from "next/image";
import React from "react";

const Box = () => {
  return (
    <div className="flex gap-4 items-center">
      <Image
        src="/assets/mark.svg"
        alt="marking"
        width={50}
        height={50}
        className="w-[20px] h-[20px]"
      />
      <p className="underline text-[#207DE9]">SEO Services</p>
    </div>
  );
};

const HomeServiceCard = () => {
  return (
    <div className="flex-1 border-2 border-[#DBDBDB]  rounded-[10px] px-[1rem] py-[2rem]">
      <div className="flex justify-between items-center">
        <h3 className="heading-tertiary !text-[#222]">
          Grow Website Organic Traffic
        </h3>
        <div>
          <Image
            src="/assets/web.svg"
            alt="marketing"
            width={100}
            height={100}
            className="w-[54px] h-[54px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
};

export default HomeServiceCard;
