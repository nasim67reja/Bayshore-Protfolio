import React from "react";

interface progress {
  title: string;
  bg: string;
  border: string;
  percentage: string;
  percentageVal: string;
}
const Progress = ({
  title,
  bg,
  border,
  percentage,
  percentageVal,
}: progress) => {
  return (
    <div>
      {" "}
      <h5 className="text-headingPrimary mb-3">{title}</h5>
      <div
        className={`h-[20px] rounded-[10px] w-full border-2 ${border} relative`}
      >
        <div
          className={`absolute ${percentage} rounded-[10px] h-full ${bg} top-0 left-0`}
        ></div>
        <div className="absolute right-0 z-10 top-[-4px]">{percentageVal}</div>
        <div
          className={`border-2 rounded-full ${border} h-[72px] w-[72px] absolute top-0 right-0 translate-y-[-40%]`}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
