"use client";
import Image from "next/image";
import { ReactNode, useState } from "react";

interface Tab {
  label: ReactNode;
  content: ReactNode;
  link: string;
  activeLink: string;
}

const tabs: Tab[] = [
  {
    label: (
      <>
        Expertise <br /> an Experience
      </>
    ),
    content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div className="rounded-[10px] custom-shadow px-4 py-16 md:p-16">
            <h3 className="heading-tertiary ">Domain Specific Talents </h3>
            <p className="text-base">
              {`   Bayshore's expert teams can create engaging and responsive
                websites and apps, design stunning and visually appealing
                graphics, produce expert and captivating videos, create compelling
                and pertinent content, and optimize your site for search engines
                and revenues. They can also use influential and real voices to
                advance your brand. With the help of Bayshore, You may grow your
                company and accomplish your digital marketing objectives.
                `}
            </p>
          </div>
          <div className="row-start-1 md:col-start-2">
            <Image
              src="/assets/tab-1.png"
              alt="tab-1"
              width={400}
              height={400}
              className="w-full h-full"
            />
          </div>
        </div>
      </>
    ),
    link: "/assets/expertise.svg",
    activeLink: "/assets/expertise-active.svg",
  },
  {
    label: "Focus on Results",
    content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div className="rounded-[10px] custom-shadow px-4 py-16 md:p-16">
            <h3 className="heading-tertiary">Only Numbers Speaks</h3>
            <p className="text-base">
              {`
               Bayshore prioritizes measurable outcomes. The outcomes we achieve
               from our clients' ensure success. To evaluate the efficacy, we use
               statistics and key performance indicators. We offer insightful
               data by measuring conversions, traffic, and other analytics. Our
               team analyzes data, identifies patterns, and makes wise judgments
               for better marketing success. Transparency and regular updates
               guarantee you see progress. With Bayshore, experience the power of
               data-driven digital marketing and let the numbers speak for
               themselves.
              `}
            </p>
          </div>
          <div className="row-start-1 md:col-start-2">
            <Image
              src="/assets/tab-1.png"
              alt="tab-1"
              width={400}
              height={400}
              className="w-full h-full"
            />
          </div>
        </div>
      </>
    ),
    link: "/assets/result.svg",
    activeLink: "/assets/result-active.svg",
  },
  {
    label: (
      <>
        Access to Advanced <br /> Tools and Technologies
      </>
    ),
    content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div className="rounded-[10px] custom-shadow px-4 py-16 md:p-16">
            <h3 className="heading-tertiary">{`Industry's Best Tools`}</h3>
            <p className="text-base">
              {`
                Our Bayshore team develops and manages your digital marketing
                strategies using the most leading-edge and potent techniques and
                technologies. In order to design, develop, track performance, and
                enhance your footprint in the digital world, we use powerful
                analytics tools, marketing automation software, other management
                tools, and platforms. This allows us to stay ahead of the curve.
                With our assistance, you may make use of our access to
                cutting-edge equipment and technology, giving you a competitive
                advantage.
                
                `}
            </p>
          </div>
          <div className="row-start-1 md:col-start-2">
            <Image
              src="/assets/tab-1.png"
              alt="tab-1"
              width={400}
              height={400}
              className="w-full h-full"
            />
          </div>
        </div>
      </>
    ),
    link: "/assets/tools.svg",
    activeLink: "/assets/tools-active.svg",
  },
  {
    label: "Time and Cost Efficiency",
    content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div className="rounded-[10px] custom-shadow px-4 py-16 md:p-16">
            <h3 className="heading-tertiary">Ignore AB Testing</h3>
            <p className="text-base">
              {`
                At Bayshore, we prioritize time and cost efficiency, and that's
                why we go beyond traditional AB testing. We furnish our expertise
                and data-directed insights to implement strategies that deliver
                optimal results right from the start. Our experienced team applies
                proven methodologies and industry best practices to save you
                valuable time and resources. By avoiding lengthy and costly
                processes like split or bucket testing, we focus on implementing
                effective strategies that maximize your ROI and accelerate your
                digital marketing success.
                `}
            </p>
          </div>
          <div className="row-start-1 md:col-start-2">
            <Image
              src="/assets/tab-1.png"
              alt="tab-1"
              width={400}
              height={400}
              className="w-full h-full"
            />
          </div>
        </div>
      </>
    ),
    link: "/assets/time.svg",
    activeLink: "/assets/time-active.svg",
  },
];

export default function HomeTabBar() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="md:px-[2rem] lg:px-[8rem]">
      <div className="flex justify-between items-center rounded-[10px] custom-shadow px-[1rem] sm:px-[4rem] md:px-[11rem] py-[1.6rem] gap-2">
        {tabs.map((tab, index) => (
          <button
            className={`flex flex-col items-center  py-4 px-2 md:px-8 rounded-[10px] cursor-pointer ${
              activeTab === index ? "custom-shadow " : ""
            }`}
            key={index}
            onClick={() => setActiveTab(index)}
          >
            <Image
              src={activeTab === index ? tab.activeLink : tab.link}
              alt="svg-logo"
              width={100}
              height={100}
              className="md:h-[26px] md:w-[26px] h-[14px] w-[14px]"
            />
            <p
              className={`py-2 text-[1.2rem] text-[#A2A2A2] text-center font-bold ${
                activeTab === index ? "bg-gray-200" : ""
              }`}
            >
              {tab.label}
            </p>
          </button>
        ))}
      </div>

      <div className="p-4">
        {tabs.map(
          (tab, index) =>
            activeTab === index && (
              <div className="mt-[4rem]" key={index}>
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}
