import Consultaion from "@/components/universal/Consultaion";
import HeroLeft from "@/components/universal/HeroLeft";
import SectionHeader from "@/components/universal/SectionHeader";
import SectionLayout from "@/components/universal/SectionLayout";
import Image from "next/image";
import React from "react";

let hero: {
  heading: string;
  description: string;
}[];

hero = [
  {
    heading: "Inspiring Case Studies of Business Growth",
    description: `Swop’s Flat Rectangle NFC’s are designed to be durable and simple to use. The Flat is great to put under any phone case(non-metal) Users can download our app to program any of our NFC’s with the click of a button. This will attach your profile to the NFC for easy sharing. You just tap the NFC on any compatible phone to share your digital business card, microsite, crypto address, the possibilities are endless. Use the swop app to.`,
  },
];

const Featured = () => {
  return (
    <div className="flex ">
      <div className="flex-1">
        <Image
          src="/assets/case-studies/office.png"
          alt="man-working-on-office"
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>
      <div className="flex-1 bg-[#F4F4F4] rounded-r-[20px] px-[10rem] py-[2rem]">
        <div className="flex flex-col gap-[2.5rem] items-start">
          <Image
            src="/assets/case-studies/arm-candy.svg"
            alt="arm-candy"
            width={200}
            height={100}
            className="w-[17.4rem] h-auto"
          />
          <h4 className="heading-four ">
            Saving 5 months of working hours every month
          </h4>
          <p className="text-small">
            By being available to our clients, we can respond to their concerns
            and questions and carry out our duty for keeping our clients
            up-to-date about the case.
          </p>
          <button className="!text-[#565EE8] font-semibold text-small">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <>
      <SectionLayout bg="bg-[#F4F4F4]">
        <div className="flex justify-between items-center gap-12">
          <HeroLeft
            heading={hero[0].heading}
            description={hero[0].description}
          />
          <div className="flex-1">
            <Image
              src="/assets/demo.svg"
              alt="marketing"
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </SectionLayout>

      {/* Featured */}
      <SectionLayout bg="">
        <SectionHeader
          heading="Featured case studies"
          text="By being available to our clients, we can respond to their concerns and questions and carry out our duty for keeping our clients up-to-date about the case."
        />

        <div className="mt-8">
          <div className="flex flex-col gap-[3rem]">
            <Featured />
            <Featured />
            <Featured />
            <Featured />
            <Featured />
            <Featured />
            <Featured />
          </div>
        </div>
      </SectionLayout>

      <Consultaion />
    </>
  );
};

export default page;
