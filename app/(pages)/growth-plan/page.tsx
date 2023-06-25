import AboutUs from "@/components/universal/AboutUs";
import Boost from "@/components/universal/Boost";
import Hero from "@/components/universal/Hero";
import Info from "@/components/universal/Info";
import Results from "@/components/universal/Results";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Growth-Bayshore Communication",
  description:
    "Do you want to take your company to the next stage? Increase conversions, or boost brand awareness? Join Bayshore and experience rapid growth with best marketing bundles.",
};

const page = () => {
  return (
    <>
      <Hero heading={hero[0].heading} description={hero[0].description} />
      {/* FLexiblity */}
      <SectionLayout bg="">
        <h2 className="heading-secondary text-center ">
          Flexibility at its Best: From One-Time Assessments to Complete
          Marketing Solutions
        </h2>
        <div className="mt-8 custom-shadow md:py-[7rem] md:px-[10rem] py-[3rem] px-[1rem] sm:px-[4rem] ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center   gap-4">
            <div>
              <h4 className="heading-four text-center mb-4">
                Budget-Friendly Options
              </h4>
              <p className="text-base text-center">
                We’ll do everything, take care of everything,and report directly
                to you.
              </p>
            </div>
            <div className="justify-self-center">
              <Image
                src="/assets/growth-plan/option.svg"
                alt="option"
                width={300}
                height={300}
                className="w-[8rem] md:w-[12rem] lg:w-[14rem] h-auto"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  mt-12 gap-8">
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

      {/* Package */}

      <SectionLayout bg="">
        <div className="flex flex-col items-center">
          <h2 className="heading-secondary !text-center max-w-[800px] mx-auto ">
            Affordable Marketing Solutions to Fit Your Budget with our Value
            Package
          </h2>
          <p className="text-base !text-center  mb-10">
            {`
            We are aware that there is no one size fits all approach to SEO. To
            create a unique SEO plan for your company, Bayishore team takes into
            account your firm's particular demands, industry, existing SEO
            performance, and goals in addition to their own in-depth
            investigation. Contact us right away if you're prepared to begin
            developing your unique, revenue-generating SEO approach.
            `}
            <Link className="text-[#4C74B9] underline" href="/contact">
              {" "}
              contact us{" "}
            </Link>{" "}
            today!
          </p>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem]   items-center">
            <Package />
            <Package />
            <Package />
          </div>
        </div>
      </SectionLayout>

      <Boost
        heading="Ready to Grow? Get your FREE Quote Today!"
        btnText="Get a Proposal "
      />
      <AboutUs />
      <Info />
      <Results
        heading="Even though we don’t like showing off; 
we have some amazing results"
      />
    </>
  );
};

export default page;

let hero: {
  heading: string;
  description: string;
}[];

hero = [
  {
    heading: "Experience Rapid Growth with our Enhanced Marketing ",
    description: `Do you wish to benefit from the most recent marketing techniques and resources? If so, 
    you require one of our upgraded marketing bundles. We provide a broad spectrum of services that can expand your brand and boost sales. From the website, or software solutions to digital marketing services, we have a bundle that suits  your needs and 
    budget. Don’t let this chance slip away to skyrocket your business with our enhanced advertising packages.`,
  },
];

const PackageBulletPoint = () => {
  return (
    <li className="flex items-center gap-4">
      <span>
        <Image
          src="/assets/growth-plan/bulletpoint.svg"
          alt="option"
          width={100}
          height={100}
          className="w-[1.8rem] h-auto"
        />
      </span>
      <span className="text-small">150 keyphrases optimized</span>
    </li>
  );
};

const Package = () => {
  return (
    <div className="w-[30rem] sm:w-[35rem] md:w-full justify-self-center mt-[4rem] md:mt-0">
      <div className="relative flex flex-col items-center gap-4 bg-[#F0F6FE] py-[6rem]">
        <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Image
            src="/assets/growth-plan/growth-plan-silver.svg"
            alt="option"
            width={200}
            height={200}
            className="w-[9rem] h-auto"
          />
        </div>
        <h4 className="heading-four">SILVER PLAN</h4>
        <p>
          <span className="!text-primary !font-bold heading-secondary">
            $2,500
          </span>
          /month
        </p>
      </div>
      <div className="mb-8 px-8 py-12 border-b-[1px] border-[rgba(221,221,221,0.5)]">
        <ul className="flex flex-col gap-4">
          <PackageBulletPoint />
          <PackageBulletPoint />
          <PackageBulletPoint />
          <PackageBulletPoint />
          <PackageBulletPoint />
        </ul>
      </div>
      <div className="center">
        <button className="btn text-small">Customize My Plan</button>
      </div>
    </div>
  );
};

interface content {
  heading: string;
  description: string;
  imgLink: string;
}

export const FLexCol: React.FC<content> = ({
  heading,
  description,
  imgLink,
}) => {
  return (
    <>
      <div className="flex flex-col  items-center custom-shadow p-12 gap-6">
        <div>
          <h4 className="heading-four text-center mb-4">{heading}</h4>
          <p className="text-base !text-center">{description}</p>
        </div>
        <div>
          <Image
            src={imgLink}
            alt="option"
            width={300}
            height={300}
            className="w-[6rem] md:w-[8rem] lg:w-[10rem] h-auto"
          />
        </div>
      </div>
    </>
  );
};
