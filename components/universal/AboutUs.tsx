import React from "react";
import SectionLayout from "./SectionLayout";
import FocusOnSelect from "../unique/DemoSlider";

const AboutUs = () => {
  return (
    <SectionLayout bg="bg-[#F4F4F4]">
      <div className="flex flex-col items-center">
        <h2 className="heading-secondary ">
          Here is what our client saying about us
        </h2>
        <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
          Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
          use. The Flat is great to put under any phone case(non-metal) Use.
        </p>
      </div>
      <div className="mt-8">
        <FocusOnSelect />
      </div>
    </SectionLayout>
  );
};

export default AboutUs;
