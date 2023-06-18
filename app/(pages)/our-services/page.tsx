import AboutUs from "@/components/universal/AboutUs";
import Consultaion from "@/components/universal/Consultaion";
import HeroLeft from "@/components/universal/HeroLeft";
import HeroRight from "@/components/universal/HeroRight";
import Info from "@/components/universal/Info";
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
services = [
  {
    logo: "/assets/service/web.svg",
    title: "Website Design",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
  },

  {
    logo: "/assets/service/web.svg",
    title: "Mobile App",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
  },

  {
    logo: "/assets/service/web.svg",
    title: " SEO",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
  },

  {
    logo: "/assets/service/web.svg",
    title: "Local SEO",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
  },

  {
    logo: "/assets/service/web.svg",
    title: "Paid Advertising",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
  },

  {
    logo: "/assets/service/web.svg",
    title: "Social Media Marketing",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
  },

  {
    logo: "/assets/service/web.svg",
    title: "Social Media Management",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
  },

  {
    logo: "/assets/service/web.svg",
    title: "Email Marketing",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
  },

  {
    logo: "/assets/service/web.svg",
    title: "Marketing Automation ",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
  },
  {
    logo: "/assets/service/web.svg",
    title: "Content Marketing ",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
  },
  {
    logo: "/assets/service/web.svg",
    title: "Content Writing",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
  },

  {
    logo: "/assets/service/web.svg",
    title: "Digital PR",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
  },

  {
    logo: "/assets/service/web.svg",
    title: "Graphic Design",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
  },

  {
    logo: "/assets/service/web.svg",
    title: "Motion Graphic",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
  },

  {
    logo: "/assets/service/web.svg",
    title: "Video Production ",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
  },

  {
    logo: "/assets/service/web.svg",
    title: "Influencer Marketing",
    description:
      "Web design and development is a related term to creating a website. Web design determines the look by UI/UX. On the other side web development determines the functions. Our front-end developers are skilled and work with several languages, frameworks, template design, libraries, git and github as well as SEO. Our back-end developers deal...",
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
      <p className="text-base">{el.description}</p>
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
        <div className="flex justify-between items-center gap-16">
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
        <div className="grid grid-cols-2 gap-[8rem] mt-[6rem]">
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
