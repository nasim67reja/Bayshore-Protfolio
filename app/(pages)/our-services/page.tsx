import SectionLayout from "@/components/universal/SectionLayout";
import Image from "next/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

//  Home Hero section
let hero: {
  heading: string;
  description: string;
}[];

hero = [
  {
    heading: "Empower Your Business with Innovative Marketing Solutions",
    description: ` WebFX is the best SEO services company in the world — and we have
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
          <div className="flex-1">
            <h1 className="heading-primary">{hero[0].heading}</h1>
            <p className="text-base">{hero[0].description}</p>
            <form className="flex items-center gap-8 mt-[2.5rem]">
              <input
                className="placeholder-center rounded-[10px] outline-none text-link py-4 px-4"
                type="text"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="btn text-[14px] !py-4 flex items-center gap-8"
              >
                <span>Send us a proposal</span>
                <span className="inline-block translate-y-[1px]">
                  <AiOutlineRight />
                </span>
              </button>
            </form>
          </div>
          <div className="flex-1">
            <Image
              src="/assets/service/service-hero.svg"
              alt="service-hero"
              width={800}
              height={800}
              className="w-[455px] h-[491px]"
            />
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default page;
