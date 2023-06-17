import Image from "next/image";
import React from "react";

interface con {
  content: string;
}

const Box: React.FC<con> = ({ content }) => {
  return (
    <div className="flex gap-4 items-center">
      <Image
        src="/assets/mark.svg"
        alt="marking"
        width={50}
        height={50}
        className="w-[20px] h-[20px]"
      />
      <p className="underline text-[#207DE9]">{content}</p>
    </div>
  );
};

interface box {
  title: string;
  imgLink: string;
  box: any;
}

const HomeServiceCard: React.FC<box> = ({ title, imgLink, box }) => {
  return (
    <div className="flex-1 border-2 border-[#DBDBDB]  rounded-[10px] px-[3rem] py-[2rem]">
      <div className="flex justify-between items-center">
        <h3 className="heading-tertiary !text-[#222]">{title}</h3>
        <div>
          <Image
            src={imgLink}
            alt="marketing"
            width={100}
            height={100}
            className="w-[54px] h-[54px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        {box.map((el: string, i: number) => (
          <Box key={i} content={el} />
        ))}
        {/* <Box />
        <Box />
        <Box />
        <Box /> */}
      </div>
    </div>
  );
};

export default HomeServiceCard;
