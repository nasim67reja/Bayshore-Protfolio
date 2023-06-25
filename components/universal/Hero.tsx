import React from "react";
import SectionLayout from "./SectionLayout";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import Image from "next/image";

export const HeroWithImage = ({ heading, description, imgLink }: any) => {
  return (
    <SectionLayout bg="bg-[#F4F4F4]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12  items-center">
        <HeroLeft heading={heading} description={description} />
        <div className="px-[2rem] sm:px-[6rem] md:px-0">
          <Image
            // src="/assets/case-studies/case-studies.png"
            //   src="/assets/blog/blog.png"
            src={imgLink}
            alt="marketing"
            width={800}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

const Hero = ({ heading, description }: any) => {
  return (
    <SectionLayout bg="bg-[#F4F4F4]">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-16">
        <HeroLeft heading={heading} description={description} />
        <HeroRight />
      </div>
    </SectionLayout>
  );
};

export default Hero;
