import AccorDion from "@/components/universal/AccorDion";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: "Career-Bayshore Communication",
  description:
    "Looking for an opportunity to show your skills, talent, and work with professionals who share your vision and values? Check out our career page. Apply now and become part of our family. ",
};

const page = () => {
  return (
    <>
      <div className="bg-[#F4F4F4]">
        <h2 className="heading-secondary !text-center  py-4 !mb-0 max-w-[800px] mx-auto">
          Empower Your Career: Discover Growth Opportunities at Bayshore
          Communication
        </h2>
      </div>
      <SectionLayout bg="">
        <div className="border-[0.5px] border-[#AAAAAA] rounded-[10px]">
          <AccorDion title="Content Writing Intern" body={<Content1 />} />

          <AccorDion title="Full Stack Web Developer" body={<Content1 />} />

          <AccorDion title="Full Stack Web Developer" body={<Content1 />} />
        </div>
      </SectionLayout>
    </>
  );
};

export default page;

const Content1 = () => {
  return (
    <div className="flex items-center justify-between">
      <div>content1</div>
      <div>content1</div>
    </div>
  );
};
