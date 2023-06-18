import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="bg-[#18112E] grid grid-cols-[20%_80%] items-center rounded-[10px] py-3 px-[2rem]">
      <div>
        <Image
          src="/assets/funnel.svg"
          alt="doller"
          width={200}
          height={100}
          className="w-[6.5rem] h-auto"
        />
      </div>
      <div className=" flex flex-col">
        <p className="text-small !text-[#fff]">
          Access the data-fueled plans behind
        </p>
        <p className="text-white font-bold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] my-[2px]">
          $3,021,182,299
        </p>
        <p className="text-small !text-[#fff]">IN CLIENT REVENUE</p>
      </div>
    </div>
  );
};
const HeroRight = () => {
  return (
    <div className="flex-1 pl-[4rem]">
      <div className="flex flex-col gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default HeroRight;
