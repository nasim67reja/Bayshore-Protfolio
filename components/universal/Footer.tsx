import React from "react";
import SectionLayout from "./SectionLayout";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const service: string[] = [
  "Website Design",
  "Digital Marketing",
  "Social Media Marketing",
  "Marketing Automation",
  "Graphics Design",
  "Content Writing",
  "Video Production",
];

let quickLinks: {
  title: string;
  link: string;
}[];

quickLinks = [
  { title: "Appointment", link: "/" },
  { title: "Career", link: "/career" },
  { title: "Refer Client", link: "/refer-client" },
  { title: "FAQs", link: "/faq" },
  { title: "Industries We Serve", link: "/industries-we-serve" },
  { title: "Privacy Policy", link: "/privacy-policy" },
  { title: "Terms & Conditions", link: "/terms-conditions" },
];

const Col = ({ text, links }: any) => {
  return (
    <div className="flex-1 md:translate-x-[20%] lg:translate-x-[30%]">
      <h4 className="mb-10 heading-four text-center md:text-start">{text}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((el: any, i: number) => (
          <li className="text-small" key={i}>
            {typeof el === "string" ? (
              <>{el}</>
            ) : (
              <Link href={`${el.link}`}>{el.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
const Footer = () => {
  return (
    <footer>
      <SectionLayout bg="bg-[#F4F4F4]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-[3rem] md:gap-8">
          <div className="">
            <div className="center md:block">
              <Image
                src="/assets/bayshore-logo.svg"
                alt="bayshore-logo"
                width={366}
                height={106}
                className="w-[166px] h-[36px] mb-6"
                priority
              />
            </div>
            <p className="text-small  leading-[1.3] px-[2vw]  sm:px-0">
              {text}
            </p>
          </div>
          <Col text="Service" links={service} />
          <Col text="Quick links" links={quickLinks} />

          <div className="flex-[1.2] flex flex-col items-center  gap-6">
            <h4 className="mb-10 heading-four text-center">
              {/* By subscribing we inform about */}
              Social links
            </h4>
            <div className="center gap-4">
              <BsFacebook className=" w-[2rem] lg:w-[2.8rem] h-auto" />
              <AiFillInstagram className="w-[2.6rem] lg:w-[3.4rem] h-auto" />
              <BsLinkedin className="w-[2rem] lg:w-[2.8rem] h-auto" />
              <AiFillTwitterCircle className="w-[2.6rem] lg:w-[3.4rem] h-auto" />
            </div>
          </div>
        </div>
        <div className="w-full mt-6 h-[1px] bg-[#DBDBDB]"></div>
        <div>
          <p className="text-small mt-8 ">
            Copyright © 2023 All Rights Reserved by Bayshore Communication.
          </p>
        </div>
      </SectionLayout>
    </footer>
  );
};

export default Footer;

const text: string = ` Our performance, client satisfaction. Our main objective is
client’s pleasure. Our company stands by every personnel's
dedication. Our working policy is transparent. We try to maintain
customer Our performance, client satisfaction. Our main objective
is client’s pleasure. Our company stands by every personnel's
dedication. Our working policy is transparent. We try to maintain`;
