"use client";
import SectionLayout from "@/components/universal/SectionLayout";

import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Do you have any questions about Bayshore or our services? You might find the answers in our FAQ page, based on frequent queries from our customers and leads."
          key="desc"
        />
      </Head>

      <h2 className="heading-secondary !text-center bg-[#F4F4F4] py-4 !mb-0">
        Frequently Asked Questions (FAQ)
      </h2>
      <SectionLayout bg="">
        <h4 className="heading-four bg-[#F5F5F5] rounded-[10px] p-4">
          Troubleshooting SWOP
        </h4>

        <AccordionCus title="General" />
        <AccordionCus title="Compatibility" />
        <AccordionCus title="Shipping" />
      </SectionLayout>
    </>
  );
};

export default page;

const AccordionCus = ({ title }: any) => {
  return (
    <div className="mt-12 border-[0.5px] border-[#AAAAAA] rounded-[10px] ">
      <h4 className="heading-four bg-[#F5F5F5] rounded-[10px] p-4 flex items-center gap-2 px-8">
        {title}
        <Image
          src="/assets/general.svg"
          alt="option"
          width={100}
          height={100}
          className="w-[2rem] h-auto"
        />
      </h4>

      <Example />
    </div>
  );
};

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      {[1, 2, 3, 4].map((el: number, i: number) => (
        <Accordion
          key={el}
          open={open === i + 1}
          icon={<Icon id={1 + i} open={open} />}
        >
          <div className="px-8  border-t-[0.5px] border-[#AAAAAA] ">
            <AccordionHeader onClick={() => handleOpen(i + 1)}>
              <div className="text-[16px] md:text-[18px] font-normal">
                Not working on Iphone?
              </div>
            </AccordionHeader>
          </div>
          <div className="">
            <AccordionBody>
              <div className=" bg-[#F5F5F5] border-t-[0.5px] border-[#AAAAAA] rounded-b-[10px]">
                <div className="px-8 !py-8 text-base">
                  {`   No! The other person does not need a SWOP or app to receive
your SWOP profile. That's the beauty of SWOP ⚡️ If their
phone is on this list of compatible devices you can pop to
their phone. If it is not, just use your SWOP QR code on your
profile to share!`}
                </div>
              </div>
            </AccordionBody>
          </div>
        </Accordion>
      ))}
    </Fragment>
  );
}
