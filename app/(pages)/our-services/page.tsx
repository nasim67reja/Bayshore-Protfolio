import Info from "@/components/universal/Info";
import SLiderSec from "@/components/universal/SLiderSec";
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

let services: {
  logo: string;
  title: string;
  description: string;
}[];
services = [{ logo: "sjd", title: "Website Design", description: "kdjflks" }];

const Service = () => {
  return (
    <div className="flex flex-col  items-center gap-[1rem] custom-shadow px-[3rem] pt-[3rem] pb-[1rem]">
      <div>
        <Image
          src="/assets/service/web.svg"
          alt="service-hero"
          width={399}
          height={400}
          className="w-[99px] h-[99px] mb-[1.5rem]"
        />
      </div>
      <h4 className="heading-four">Website Design</h4>
      <p className="text-base">
        Web design and development is a related term to creating a website. Web
        design determines the look by UI/UX. On the other side web development
        determines the functions. Our front-end developers are skilled and work
        with several languages, frameworks, template design, libraries, git and
        github as well as SEO. Our back-end developers deal...
      </p>
      <button className="flex items-center gap-2 text-[#FE6F1F]">
        <span>Read more</span>
        <span className="inline-block translate-y-[1px]">
          <AiOutlineRight />
        </span>
      </button>
    </div>
  );
};
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
      <Info />
      <SectionLayout bg="">
        <h2 className="heading-secondary text-center">Our Services</h2>
        <div className="grid grid-cols-2 gap-[8rem] mt-[6rem]">
          <Service />
          <Service />
        </div>
      </SectionLayout>

      <SLiderSec />
      <SectionLayout bg="">
        <div className="flex flex-col items-center">
          <h2 className="heading-secondary ">
            Here is what our client saying about us
          </h2>
          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
            use. The Flat is great to put under any phone case(non-metal) Use.
          </p>

          <button className="btn text-[14px] !py-4 flex items-center gap-8">
            <span>Book now 30 min Free Consultation</span>
            <span className="inline-block translate-y-[1px]">
              <AiOutlineRight />
            </span>
          </button>
        </div>
      </SectionLayout>
    </>
  );
};

export default page;
