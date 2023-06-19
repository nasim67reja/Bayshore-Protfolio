import Consultaion from "@/components/universal/Consultaion";
import HeroLeft from "@/components/universal/HeroLeft";
import SectionLayout from "@/components/universal/SectionLayout";
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

// let blogs: {
//   bgImg:string;
//   img:string;
//   heading: string;
//   description: string;
// }[];

// blogs = [
//   {
//     heading: "Blogs: Expert Tips and Strategies from Our Agency",
//     description: `Swop’s Flat Rectangle NFC’s are designed to be durable and simple to use. The Flat is great to put under any phone case(non-metal) Users can download our app to program any of our NFC’s with the click of a button. This will attach your profile to the NFC for easy sharing. You just tap the NFC on any compatible phone to share your digital business card, microsite, crypto address, the possibilities are endless. Use the swop app to.`,
//   },
// ];

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
          className="w-[80px] h-auto absolute bottom-0 left-[3%] translate-y-[50%]"
        />
      </div>
      <div className="flex justify-between items-center w-[80%] ml-auto">
        <p className="text-small">
          By: <span className="text-[#0077B3]"> Kelsey Jones </span>
        </p>
        <p className="text-small">June 7, 2023</p>
      </div>
      <h4 className="heading-four mt-[4.5rem]">
        B2B SEO in 2023: What's New and How to Adapt Your Strategy for Success
      </h4>
      <div>
        <h5 className="text-small !text-[#0077B3] mt-[3rem] mb-[2rem]">
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
      <div>
        <button className="!text-[#4DBDEB] border-[1px] border-[#4DBDEB] px-[10px] py-[8px] rounded-[10px] text-small mt-[2rem]">
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
      <p>Complete courses to master SEO basics</p>
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

      {/* section blog */}

      <SectionLayout bg="">
        <div className="flex flex-col items-center">
          <h2 className="heading-secondary ">
            The Digital Marketer's Playbook: Insights, Ideas, and Inspiration
          </h2>
          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            Get valuable tips and tricks from our skilled digital marketing
            teams. Boost your online performance and reach your goals with our
            insights, ideas, and inspirations.
          </p>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-[4rem]">
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
          <div className="grid grid-cols-3 gap-6 lg:gap-10 xl:gap-14">
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
