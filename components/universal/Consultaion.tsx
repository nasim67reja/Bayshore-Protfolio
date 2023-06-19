import React from "react";
import SectionLayout from "./SectionLayout";
import { AiOutlineRight } from "react-icons/ai";

const Consultaion = () => {
  return (
    <SectionLayout bg="">
      <div className="flex flex-col items-center">
        <h2 className="heading-secondary ">Consultations for our service</h2>
        <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
          Consultations for our service are free and easy. Simply click below to
          fix a suitable date and time that works for you. We'll contact you
          shortly. Don’t miss this opportunity.
        </p>

        <button className="btn text-[14px] !py-4 flex items-center gap-8">
          <span>Book now 30 min Free Consultation</span>
          <span className="inline-block translate-y-[1px]">
            <AiOutlineRight />
          </span>
        </button>
      </div>
    </SectionLayout>
  );
};

export default Consultaion;
