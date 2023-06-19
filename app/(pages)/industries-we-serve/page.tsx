import SectionHeader from "@/components/universal/SectionHeader";
import SectionLayout from "@/components/universal/SectionLayout";
import Image from "next/image";
import React from "react";
import { FLexCol } from "../growth-plan/page";

const page = () => {
  return (
    <>
      <h1 className="heading-primary !text-center  py-8 !mb-0 bg-[#F4F4F4]">
        Industries We Serve
      </h1>

      <SectionLayout bg="">
        <SectionHeader
          heading="Even though we don't like showing off;
we have some amazing results"
          text="If the referral closes for a $2,000+ package, you earn a $500 payment. No questions asked. It’s that simple. You can do this as many times as you’d like. We appreciate your support of GenTech Marketing"
        />
        <div className="mt-8">
          <Image
            src="/assets/results.svg"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
        </div>
      </SectionLayout>

      <SectionLayout bg="">
        <p className="text-base !text-center mb-4">
          a solution for every business.
        </p>
        <h2 className="heading-secondary text-center ">
          Choose How We Work Together: From One-Time Audits to
          Done-For-You-Everything
        </h2>
        <div className="mt-8 custom-shadow py-[7rem] px-[10rem]">
          <div className="flex  justify-between items-center">
            <div>
              <h4 className="heading-four text-center mb-4">
                Budget-Friendly Options
              </h4>
              <p className="text-base text-center">
                We’ll do everything, take care of everything,and report directly
                to you.
              </p>
            </div>
            <div>
              <Image
                src="/assets/growth-plan/option.svg"
                alt="option"
                width={300}
                height={300}
                className="w-[14rem] h-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex  mt-12 gap-8">
          <FLexCol
            heading="Flexibility to Test and Experiment"
            description="We’ll build you a high performing engine and you run it by yourself."
            imgLink="/assets/growth-plan/seo.svg"
          />

          <FLexCol
            heading="Collaborative Invironment"
            description="Get ongoing step-by-step advicewith data-driven prioritization."
            imgLink="/assets/growth-plan/seo.svg"
          />
        </div>
      </SectionLayout>
    </>
  );
};

export default page;
