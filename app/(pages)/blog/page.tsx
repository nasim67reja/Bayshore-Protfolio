import Consultaion from "@/components/universal/Consultaion";
import { HeroWithImage } from "@/components/universal/Hero";
import HeroLeft from "@/components/universal/HeroLeft";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

let hero: {
  heading: string;
  description: string;
}[];

hero = [
  {
    heading: "Blogs: Expert Tips and Strategies from Our Agency",
    description: `You've chosen the best place to learn more about web marketing and how to develop your online presence. Our blog features insightful articles from our team of experts, covering topics such as SEO, social media, content marketing, web design, and more. You'll discover useful tactics and tips that you may use in your own business. By reading our blog, you may keep up with the most recent trends and best practices in the digital world.`,
  },
];

export const metadata: Metadata = {
  title: "Blog-Bayshore Communication",
  description:
    "Learn communication tips from our Bayshore experts. Read our blogs on web-mobile app design, content writing, social media marketing, video production, and more.",
};

const page = () => {
  return (
    <>
      <HeroWithImage
        heading={hero[0].heading}
        description={hero[0].description}
        imgLink="/assets/blog/blog.png"
      />

      {/* section blog */}

      <SectionLayout bg="">
        <div className="flex flex-col items-center">
          <h2 className="heading-secondary ">
            {`  The Digital Marketer's Playbook: Insights, Ideas, and Inspiration`}
          </h2>
          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            Get valuable tips and tricks from our skilled digital marketing
            teams. Boost your online performance and reach your goals with our
            insights, ideas, and inspirations.
          </p>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[4rem]">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
          </div>
        </div>
      </SectionLayout>

      <SectionLayout bg="bg-[#F4F4F4]">
        <h2 className="heading-secondary text-center">
          Level Up Your SEO Skills With Our Free Training
        </h2>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 xl:gap-14">
            <Seo />
            <Seo />
            <Seo />
          </div>
        </div>
      </SectionLayout>

      <Consultaion />
    </>
  );
};

export default page;

const Blog = () => {
  return (
    <div>
      <div className="relative mb-4">
        <Image
          src="/assets/blog/b2b-seo.png"
          alt="marketing"
          width={800}
          height={800}
          className="w-full h-auto"
        />
        <Image
          src="/assets/blog/mike.png"
          alt="marketing"
          width={800}
          height={800}
          className="w-[6rem] md:w-[8rem] h-auto absolute bottom-0 left-[3%] translate-y-[50%]"
        />
      </div>
      <div className="cus-name flex justify-between items-center w-[78%] sm:w-[80%] ml-auto">
        <p className="text-xsmall">
          By: <span className="text-[#0077B3]"> Kelsey Jones </span>
        </p>
        <p className="text-xsmall">June 7, 2023</p>
      </div>
      <h4 className="heading-four mt-[3rem] md:mt-[4.5rem]">
        {` B2B SEO in 2023: What's New and How to Adapt Your Strategy for Success`}
      </h4>
      <div>
        <h5 className="text-small !text-[#0077B3] md:mt-[3rem] md:mb-[2rem] my-[1.5rem]">
          Content Marketing
        </h5>
        <p className="text-small text-cut text-cut-5">
          In the fast-paced digital landscape of 2023, having a strong online
          presence is crucial for B2B companies to drive traffic, generate
          leads, and stay competitive. This blog post aims to provide B2B
          marketers, SEO specialists, and business owners with the knowledge and
          tools necessary to create a successful B2B SEO strategy this year and
          beyond.
        </p>
      </div>
      <div className="center md:block">
        <button className="!text-[#4DBDEB] border-[1px] border-[#4DBDEB] px-[1rem] py-[0.8rem] rounded-[10px] text-xsmall mt-[2rem]">
          Read this post
        </button>
      </div>
    </div>
  );
};

const Seo = () => {
  return (
    <div className="p-8 bg-[#fff] border-[1px] border-[#E6E6E6] rounded-[10px]">
      <Image
        src="/assets/blog/seo-1.png"
        alt="marketing"
        width={800}
        height={800}
        className="w-full h-auto "
      />
      <h4 className="heading-four my-6">Moz Academy Training</h4>
      <p className="text-small">Complete courses to master SEO basics</p>
      <p className="text-small  mt-10 flex justify-center items-center gap-4">
        <span className="text-[#0077B3]">Start Learing </span>
        <Image
          src="/assets/blog/learn.svg"
          alt="right-arr"
          width={20}
          height={20}
          className="w-[12px] h-auto translate-y-[1px]"
        />
      </p>
    </div>
  );
};
