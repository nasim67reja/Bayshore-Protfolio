import SectionHeader from "@/components/universal/SectionHeader";
import SectionLayout from "@/components/universal/SectionLayout";
import Image from "next/image";
import React from "react";
import { FLexCol } from "../growth-plan/page";
import Head from "next/head";

export const metadata = {
  title: "Refer-Bayshore Communication",
  name: "description",
  description:
    "Refer a client to Bayshore Communication and get rewarded. Fill out a form and we will do the rest. Don’t miss this chance. Refer now.",
};

const page = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Refer a client to Bayshore Communication and get rewarded. Fill out a form and we will do the rest. Don’t miss this chance. Refer now."
          key="desc"
        />
      </Head>
      <h1 className="heading-primary !text-center  py-8 !mb-0 bg-[#F4F4F4]">
        Refer client
      </h1>

      <SectionLayout bg="">
        <SectionHeader
          heading="Refer a paying client, earn $500."
          text="If the referral closes for a $2,000+ package, you earn a $500 payment. No questions asked. It’s that simple. You can do this as many times as you’d like. We appreciate your support of GenTech Marketing"
        />
        <div className="center">
          <button className="btn text-small">Submit My Referral</button>
        </div>
        <div className="mt-8">
          <Image
            src="/assets/refer.svg"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
          <h2 className="heading-secondary">Submit your referal</h2>
        </div>
      </SectionLayout>
    </>
  );
};

export default page;
