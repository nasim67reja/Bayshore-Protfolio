import React from "react";

interface heroInfo {
  heading: string;
  text: string;
}

const SectionHeader: React.FC<heroInfo> = ({ heading, text }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="heading-secondary ">{heading}</h2>
      <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
        {text}
      </p>
    </div>
  );
};

export default SectionHeader;
