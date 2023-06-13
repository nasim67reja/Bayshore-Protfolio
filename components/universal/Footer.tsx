import React from "react";
import SectionLayout from "./SectionLayout";
import Image from "next/image";

const service: string[] = [
  "Website Design",
  "Digital Marketing",
  "Social Media Marketing",
  "Marketing Automation",
  "Graphics Design",
  "Content Writing",
  "Video Production",
];
const quickLinks: string[] = [
  "Appointment ",
  "Career",
  "Refer Client",
  "FAQs",
  "Industries We Serve",
  "Privacy Policy ",
  "Trams & Conditions",
];
interface colProps {
  text: string;
  links: string[];
}
const Col = ({ text, links }: colProps) => {
  return (
    <div className="flex-1 md:translate-x-[20%] lg:translate-x-[30%]">
      <h4 className="mb-10 heading-four ">{text}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((el: string, i: number) => (
          <li className="text-link" key={i}>
            {el}
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
        <div className="flex gap-8">
          <div className="flex-[1.5]">
            <Image
              src="/assets/bayshore-logo.svg"
              alt="bayshore-logo"
              width={366}
              height={106}
              className="w-[166px] h-[36px] mb-6"
              priority
            />
            <p className="text-link  leading-[1.3]">{text}</p>
          </div>
          <Col text="Service" links={service} />
          <Col text="Quick links" links={quickLinks} />

          <div className="flex-[1.2] flex flex-col items-center gap-6">
            <h4 className="mb-10 heading-four">
              By subscribing we inform about
            </h4>
            <input
              className="placeholder-center rounded-[10px] outline-none text-link py-4 px-4 bg-[#EAEAEA]"
              type="text"
              placeholder="Enter your email"
            />
            <button className="btn text-link">Get a Proposal</button>
          </div>
        </div>
        <div>footer-bottom</div>
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
