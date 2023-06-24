import AboutUs from "@/components/universal/AboutUs";
import Consultaion from "@/components/universal/Consultaion";
import HeroLeft from "@/components/universal/HeroLeft";
import HeroRight from "@/components/universal/HeroRight";
import Info from "@/components/universal/Info";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
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
    description: `Bayshore Communication is a digital marketing company that offers web and app 
    development, SEO and online advertising, social media and email marketing, 
    content creation and distribution, UI/UX, graphics, video production, and 
    influencer marketing services. We provide innovative and practical solutions to 
    help you expand your company globally and accomplish your goals.`,
  },
];

export const metadata: Metadata = {
  title: "Service-Bayshore Communication",
  description:
    "Are you looking for a communication partner who can help you create a lasting impression on digital market? Browse our website and fulfill your dream with Bayshore. ",
};

const page = () => {
  return (
    <>
      <SectionLayout bg="bg-[#F4F4F4]">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-16">
          <HeroLeft
            heading={hero[0].heading}
            description={hero[0].description}
          />
          <HeroRight />
        </div>
      </SectionLayout>
      <Info />
      <SectionLayout bg="">
        <h2 className="heading-secondary text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[8rem] mt-[6rem]">
          {services.map(
            (
              el: {
                logo: string;
                title: string;
                description: string;
              },
              i: number
            ) => (
              <Service el={el} key={i} />
            )
          )}
        </div>
      </SectionLayout>

      <AboutUs />

      <Consultaion />
    </>
  );
};

export default page;

export let services: {
  logo: string;
  title: string;
  description: string;
}[];
services = [
  {
    logo: "/assets/service/web.svg",
    title: "Website Design",
    description:
      "At Bayshore's website design service, you can enhance your online image with our professional and affordable web design solutions. We create custom websites that are attractive, highly secured, user-friendly, SEO-ready, and most importantly professionally styled. Whether you need a simple landing page or a complex e-commerce site, our expert developers can provide your need. ",
  },

  {
    logo: "/assets/service/mobile-app.svg",
    title: "Mobile App",
    description:
      "We generate Native Mobile Applications, Cross-Platform Native Mobile Applications, Hybrid Mobile Applications, Progressive Web Applications. We use several functionality tools for development- applying automation, add cloud services, open source tools, testing. We create a prototype of a website for visualizing our clients and use.",
  },

  {
    logo: "/assets/service/seo.svg",
    title: " SEO",
    description:
      "We provide both local and international search optimization for SEO services, assisting you in improving your search engine ranking and attracting more organic visitors from your intended market. We can help you with keywords, link building, citations, online reputation management, online reviews, structure, technical elements, and website’s content optimization.",
  },

  {
    logo: "/assets/service/ui.svg",
    title: "UI/UX Design",
    description:
      "Standard, user-friendly, and functional interfaces are created by our UX/UI design specialists. We can assist you with creating your website, app, or software's graphical user interface (GUI) and user experience (UX). Along with branding, usability testing, and prototyping, we can assist you.",
  },

  {
    logo: "/assets/service/ads.svg",
    title: "Paid Advertising",
    description:
      "Boost your brand's visibility with our paid advertising services. Get instant access to small, text-based or product-based ads, providing consumers with brand insights, prices, and reviews. With our expert team, we strategically design ads like social media, display, native, and mobile ads to match your brand identity, performing A/B testing for optimal results.",
  },

  {
    logo: "/assets/service/social-media.svg",
    title: "Social Media Marketing",
    description:
      "On well-known sites like Facebook, Twitter, Instagram, and YouTube, we provide social media advertising services to assist you in connecting with your target audience. Also evaluate your existing SMM strategy, including creation of content, social media promotion, and analytics, to assist businesses in raising their profile, attracting consumers, and enhancing their bottom line.",
  },

  {
    logo: "/assets/service/social.svg",
    title: "Social Media Management",
    description:
      "You can safeguard and improve your online reputation with the help of our social media team of executives. We manage all parts of your social media presence, including generating and uploading pertinent material, engaging with followers, scheduling it for the best delivery, monitoring and adjusting your SMM plan, and tracking your outcomes.",
  },

  {
    logo: "/assets/service/mail.svg",
    title: "Email Marketing",
    description:
      "Email marketing is a method of reaching out to your clients and prospects via email. In addition to engaging them with worthwhile content and offers, our support team will assist you in keeping them informed about your most recent products, special offers, and other services. Lead generation and connection development are two things that email advertising may help you with.",
  },

  {
    logo: "/assets/service/market.svg",
    title: "Marketing Automation ",
    description:
      "By offering cutting-edge marketing automation solutions, we will completely transform your company. With the help of our experience, we simplify your marketing initiatives, saving you time and enhancing your output. We use automation to boost your growth through anything from customized advertising to lead follow-up.",
  },
  {
    logo: "/assets/service/marketing.svg",
    title: "Content Marketing ",
    description:
      "Our team of specialists produces targeted, appealing content that engages your target market, boosts organic traffic, and produces profitable referrals. We create fascinating narratives that enhance the story of your brand in anything from blog articles to social media campaigns.",
  },
  {
    logo: "/assets/service/content-writing.svg",
    title: "Content Writing",
    description:
      "We craft captivating and informative content for various goals and audiences. Whether you want to attract more visitors to your blog, website, newsletter, social media, or any other channel, we can assist you. We have a team of expert content writers who can deliver top-notch content for your business requirements.",
  },

  {
    logo: "/assets/service/digital-pr.svg",
    title: "Digital PR",
    description:
      "Digital production is an asset of creative ideas. Our team conducts creativity and data with empathy. We pay extreme attention to detail online content management. We work together-designer, developers, and content creators to make sure that everything assures quality. Through Customer experiences, we produce meaningful narratives.",
  },

  {
    logo: "/assets/service/graphic-design.svg",
    title: "Graphic Design",
    description:
      "We take action in artistic advertisements, Eye-grabbing websites, stunning product labels & logos. Establish your visual identity through graphic design. Reflects the values and objectives of the business. In all forms of commercial communication, including ads and websites. Bayshore design delivers effective and appealing compositions.",
  },

  {
    logo: "/assets/service/motion.svg",
    title: "Motion Graphic",
    description:
      "Motion graphics are animated images that tell a story or express a message via movement, sound, and visual effects. Motion graphics have many uses, including branding, teaching, entertainment, and advertising. We can assist you in producing beautiful and useful motion graphics for your professional or non-profit endeavors.",
  },

  {
    logo: "/assets/service/video-production.svg",
    title: "Video Production ",
    description:
      "Video production, an art of generating and editing video material for different purposes and platforms. It goes through a number of stages, including planning, scripting, filming, editing, and adding effects. For your commercial or personal projects, our qualified staff will offer video production services. We are able to create videos that meet your requirements and standards.",
  },

  {
    logo: "/assets/service/influence-marketing.svg",
    title: "Influencer Marketing",
    description:
      "Influencers are modern-day powerhouses, revered for their vast following and remarkable influence over their dedicated fans. Brands and influencers are seamlessly merged in this innovative marketing approach to create an irresistible force. Our team of professionals can assist you in achieving your objectives of increasing ROI, increasing site traffic, and increasing sales.",
  },
];

interface ServiceProps {
  el: {
    logo: string;
    title: string;
    description: string;
  };
}

const Service: React.FC<ServiceProps> = ({ el }) => {
  return (
    <div className="flex flex-col  items-center gap-[1rem] custom-shadow px-[3rem] pt-[3rem] pb-[1rem]">
      <div>
        <Image
          src={el.logo}
          alt="service-hero"
          width={399}
          height={400}
          className="w-[99px] h-[99px] mb-[1.5rem]"
        />
      </div>
      <h4 className="heading-four">{el.title}</h4>
      <p className="text-base text-cut text-cut-5">{el.description}</p>
      <button className="flex items-center gap-2 text-[#FE6F1F]">
        <span>Read more</span>
        <span className="inline-block translate-y-[1px]">
          <AiOutlineRight />
        </span>
      </button>
    </div>
  );
};
