"use client";
import Image from "next/image";
import { ReactNode, useState } from "react";

interface Tab {
  label: ReactNode;
  content: ReactNode;
  link: string;
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
        <div className="flex  gap-8">
          <div className="flex-1  rounded-[10px] custom-shadow p-16">
            <h3 className="heading-tertiary">Domain Specific Talents 1</h3>
            <p className="text-base">
              Swop’s Flat Rectangle NFC’s are designed to be durable and simple
              to use. The Flat is great to put under any phone case(non-metal)
              This will attach your profile to the NFC for easy sharing. You
              just tap the NFC on any.
            </p>
          </div>
          <div className="flex-1">
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
    link: "/assets/explore.svg",
  },
  {
    label: "Focus on Results",
    content: (
      <>
        <div className="flex  gap-8">
          <div className="flex-1  rounded-[10px] custom-shadow p-16">
            <h3 className="heading-tertiary">Domain Specific Talents 2</h3>
            <p className="text-base">
              Swop’s Flat Rectangle NFC’s are designed to be durable and simple
              to use. The Flat is great to put under any phone case(non-metal)
              Users can download our app to program any of our NFC’s with the
              click of a button. This will attach your profile to the NFC for
              easy sharing.
            </p>
          </div>
          <div className="flex-1">
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
    link: "/assets/explore.svg",
  },
  {
    label: (
      <>
        Access to Advanced <br /> Tools and Technologies
      </>
    ),
    content: (
      <>
        <div className="flex  gap-8">
          <div className="flex-1  rounded-[10px] custom-shadow p-16">
            <h3 className="heading-tertiary">Domain Specific Talents 3</h3>
            <p className="text-base">
              Swop’s Flat Rectangle NFC’s are designed to be durable and simple
              to use. The Flat is great to put under any phone case(non-metal)
              Users can download our app to program any of our NFC’s with the
              click of a button. easy sharing. You just tap the NFC on any.
            </p>
          </div>
          <div className="flex-1">
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
    link: "/assets/explore.svg",
  },
  {
    label: "Time and Cost Efficiency",
    content: (
      <>
        <div className="flex  gap-8">
          <div className="flex-1  rounded-[10px] custom-shadow p-16">
            <h3 className="heading-tertiary">Domain Specific Talents 4</h3>
            <p className="text-base">
              Swop’s Flat Rectangle NFC’s are designed to be durable and simple
              to use. The Flat is great to put under any phone Users can
              download our app to program any of our NFC’s with the click of a
              button. This will attach your profile to the NFC for easy sharing.
              You just tap the NFC on any.
            </p>
          </div>
          <div className="flex-1">
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
    link: "/assets/explore.svg",
  },
];

export default function HomeTabBar() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="px-[8rem]">
      <div className="flex justify-between items-center rounded-[10px] custom-shadow px-[11rem] py-[1.6rem]">
        {tabs.map((tab, index) => (
          <div
            className={`flex flex-col items-center  py-4 px-8 rounded-[10px] cursor-pointer ${
              activeTab === index ? "custom-shadow " : ""
            }`}
            key={index}
            onClick={() => setActiveTab(index)}
          >
            <Image
              src={tab.link}
              alt="svg-logo"
              width={100}
              height={100}
              className="h-[26px] w-[26px]"
            />
            <button
              className={`py-2 text-[12px] text-[#A2A2A2] text-center font-bold ${
                activeTab === index ? "bg-gray-200" : ""
              }`}
            >
              {tab.label}
            </button>
          </div>
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
