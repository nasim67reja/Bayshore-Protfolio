import HomeLogoLoop from "@/components/unique/Home/HomeLogoLoop";
import LogoSlide from "@/components/unique/Home/HomeLogoSlider";
import HomeServiceCard from "@/components/unique/Home/HomeServiceCard";
import Progress from "@/components/unique/Home/Progress";
import HomeTabBar from "@/components/unique/HomeTabBar";
import AboutUs from "@/components/universal/AboutUs";
import Boost from "@/components/universal/Boost";
import Footer from "@/components/universal/Footer";
import Info from "@/components/universal/Info";
import Navbar from "@/components/universal/Navbar";
import Results from "@/components/universal/Results";
import SectionHeader from "@/components/universal/SectionHeader";
import SectionLayout from "@/components/universal/SectionLayout";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

const Box1: any = [
  "SEO Services",
  "Ecommerce SEO Services",
  "Local SEO Services",
  "Content Marketing Services",
];

const Box2: any = [
  "PPC Management Services",
  "Social Advertising Services",
  "Programmatic Advertising Services",
  "Geofencing Advertising Services",
];

const Box3: any = [
  "MarketingCloudFX",
  "Nutshell",
  "Website Call Tracking",
  "Lead Management",
];

const Box4: any = [
  "Website Design Services",
  "CRO Services",
  "Landing Page Design Services",
  "Social Media Management Services",
];

const page = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Welcome to Bayshore Communication!! Grow your brand or business with us. Whether you need digital marketing services, or software solutions, we've you covered."
          key="desc"
        />
      </Head>
      <Navbar />
      <SectionLayout bg="bg-[#F4F4F4]">
        <div className="flex justify-between items-center gap-12">
          <div className="flex-1">
            <p className="text-[16px] md:text-[20px] text-[#3E7BE2] mb-[2.5rem]">
              {hero[0].text}
            </p>
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
                <span>Send us a Proposal</span>
                <span className="inline-block translate-y-[1px]">
                  <AiOutlineRight />
                </span>
              </button>
            </form>
          </div>
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

      {/* Logo section */}
      <SectionLayout bg="">
        {/* <LogoSlide /> */}
        <HomeLogoLoop />
      </SectionLayout>
      {/* Tailored */}
      <SectionLayout bg="">
        <div className="flex flex-col items-center">
          <h2 className="heading-secondary ">
            Tailored marketing solutions for your unique needs
          </h2>
          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            We deliver results that exceed your expectations, marketing needs,
            goals and fits your budget. Our expertise, creativity, and passion
            will make your business shine.
          </p>
        </div>
        <div className="mt-8">
          <HomeTabBar />
        </div>
      </SectionLayout>

      {/* Boost */}

      <Boost
        heading=" Need a boost for you business? Get your FREE Quote Today!"
        btnText="Send us a proposal"
      />
      {/* Campaigns */}
      <SectionLayout bg="">
        {/* <div className="flex flex-col items-center">
          <h2 className="heading-secondary ">
            Drive results through innovative digital marketing campaigns
          </h2>
          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            Looking to power up your digital strategy? WebFX offers a wide range
            of digital marketing services that work together to attract,
            delight, and convert leads. Toss in our proprietary tech-powered
            suite of tools, and your campaign is unbeatable.
          </p>
        </div> */}
        <SectionHeader
          heading="Drive results through innovative digital marketing campaigns"
          text="Enhance your online presence and reach more customers with Bayshore Communication.
We provides an extensive digital marketing services that work in synergy 
to create, engage, and convert leads. Plus, our exclusive tech-powered tools give you an edge over the competition."
        />
        <div className="mt-8">
          <div className="flex mb-8 gap-8">
            <HomeServiceCard
              imgLink="/assets/web.svg"
              title="Grow Website Organic Traffic"
              box={Box1}
            />
            <HomeServiceCard
              imgLink="/assets/data.svg"
              title="Targeted Data-Driven ad campaigns"
              box={Box2}
            />
          </div>
          <div className="flex gap-8">
            <HomeServiceCard
              imgLink="/assets/analytics.svg"
              title="Tracking, Measure and Management "
              box={Box3}
            />
            <HomeServiceCard
              imgLink="/assets/note.svg"
              title="Improve ROI and Conversion"
              box={Box4}
            />
          </div>
        </div>
      </SectionLayout>
      {/* info */}
      <Info />
      {/* Benefits */}
      <SectionLayout bg="bg-[#F4F4F4]">
        <SectionHeader
          heading=" Benefits of Choosing Us as Your Digital Marketing Agency
          "
          text="We offer creative solutions, data-driven strategies, and measurable results for your digital marketing needs. Choose us and grow your business online."
        />
        <div className="flex mt-12 gap-16 items-center">
          <div className="flex-1">
            <h3 className="heading-tertiary">
              Get Advantage and Access to Our Tools and Expertise
            </h3>
            <p className="text-base">
              Don’t settle for mediocre results. With our cutting-edge tools and
              experienced team, you can achieve your digital marketing goals
              faster and easier. No matter what kind of digital marketing
              service you require, we can deliver it with excellence and
              efficiency. Get in touch today and get ahead of the competition.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-12 pl-[5rem]">
            <Progress
              title="Business Automation"
              bg="bg-[#FFBF45]"
              border="border-[#FFBF45]"
              percentage="w-[90%]"
              percentageVal="90%"
            />
            <Progress
              title="Advanced Technology"
              bg="bg-[#3A7EEE]"
              border="border-[#3A7EEE]"
              percentage="w-[99%]"
              percentageVal="99%"
            />
            <Progress
              title="Industry Specific Expertise"
              bg="bg-[#6C6C6C]"
              border="border-[#6C6C6C]"
              percentage="w-[95%]"
              percentageVal="95%"
            />
          </div>
        </div>
      </SectionLayout>
      {/* Marketing */}
      <SectionLayout bg="">
        <div className="flex flex-col items-center">
          <h2 className="heading-secondary ">
            Integrated Marketing, Design and Development
          </h2>
          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            Marketing, design, and development in one place. We create stunning
            online solutions for your brand. Contact us today and get started.
          </p>
        </div>
        <div className="mt-8">
          {/* <Image
            src="/assets/marketing.svg"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          /> */}
          <div className="grid grid-cols-4 gap-[8rem] ">
            {links.map((el: any, i: number) => (
              <LogosM el={el} key={i} />
            ))}
          </div>
        </div>
      </SectionLayout>
      {/* about us */}
      <AboutUs />
      {/*  Result */}
      <Results heading="We Have Some Amazing Results" />
      <Footer />
    </>
  );
};

export default page;

//  Home Hero section
let hero: {
  text: string;
  heading: string;
  description: string;
}[];

hero = [
  {
    text: "Marketing That Drive Business.",
    heading: "Get your own marketing team for you business",
    description: `Are you ready to bring in a well-rounded marketing team to help your company expand? Bayshore Communication is here!! Choose Bayshore to gain access to our innovative technology platform and our skilled digital marketing experts. With the help of our service, you can build your own marketing team to manage all aspects of your company's expansion and goal-setting. Don't pass up the chance to increase your brand's visibility and outperform your competition.`,
  },
];

let links: {
  link: string;
  alt: string;
  text: string;
}[];

links = [
  {
    link: "/assets/icons-for-web/analyze-and-Measure-Results.png",
    alt: "analyze-and-Measure-Results",
    text: "Analyze and Measure Results",
  },
  {
    link: "/assets/icons-for-web/conversion-optimization.png",
    alt: "conversion-optimization",
    text: "Conversion Optimization",
  },

  {
    link: "/assets/icons-for-web/Define.png",
    alt: "Define",
    text: "Define",
  },

  {
    link: "/assets/icons-for-web/engage.png",
    alt: "engage",
    text: "Engage",
  },

  {
    link: "/assets/icons-for-web/seo-sem.png",
    alt: "seo-sem",
    text: "Seo and Sem",
  },

  {
    link: "/assets/icons-for-web/strategy.png",
    alt: "strategy",
    text: "Strategy",
  },

  {
    link: "/assets/icons-for-web/target-audience.png",
    alt: "target-audience",
    text: "Target Audience",
  },
  {
    link: "/assets/icons-for-web/ui-ux.png",
    alt: "ui-ux",
    text: "UI UX",
  },
];

const LogosM = ({ el }: any) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="px-[5.5rem]">
        <Image
          src={el.link}
          alt={el.alt}
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>
      <h4 className="heading-four text-center">{el.text}</h4>
    </div>
  );
};
