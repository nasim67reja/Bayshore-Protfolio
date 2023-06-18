import AboutUs from "@/components/universal/AboutUs";
import Boost from "@/components/universal/Boost";
import HeroLeft from "@/components/universal/HeroLeft";
import HeroRight from "@/components/universal/HeroRight";
import Info from "@/components/universal/Info";
import Results from "@/components/universal/Results";
import SectionLayout from "@/components/universal/SectionLayout";
import Image from "next/image";
import React from "react";

let hero: {
  heading: string;
  description: string;
}[];

hero = [
  {
    heading: "Experience Rapid Growth with our Enhanced Marketing Bundles",
    description: `WebFX is the best SEO services company in the world — and we have
    the track record to prove it. With our search engine optimization
    services, you get a custom strategy, world-class technology, and an
    elite SEO team. We focus on driving revenue for our clients, and we
    provide all of the services and technology your business needs to grow
    with SEO.`,
  },
];

const page = () => {
  return (
    <>
      <SectionLayout bg="bg-[#F4F4F4]">
        <div className="flex justify-between items-center gap-12">
          <HeroLeft
            heading={hero[0].heading}
            description={hero[0].description}
          />
          <HeroRight />
        </div>
      </SectionLayout>

      <SectionLayout bg="">
        <h2 className="heading-secondary text-center">
          Flexibility at its Best: From One-Time Assessments to Complete
          Marketing Solutions
        </h2>
        <div className="mt-8 custom-shadow p-[7rem]">
          <div>
            <h4 className="heading-four text-center">
              Budget-Friendly Options
            </h4>
            <p className="text-small text-center">
              We’ll do everything, take care of everything,and report directly
              to you.
            </p>
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
