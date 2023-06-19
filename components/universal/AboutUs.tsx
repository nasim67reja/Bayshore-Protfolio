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
          Read the feedback from our satisfied clients who have benefited from
          our services. Their words reflect our high-quality work and dedication
          to their success.
        </p>
      </div>
      <div className="mt-8">
        <FocusOnSelect />
      </div>
    </SectionLayout>
  );
};

export default AboutUs;
