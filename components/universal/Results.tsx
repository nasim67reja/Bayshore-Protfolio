import React from "react";
import SectionLayout from "./SectionLayout";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

interface resultInfo {
  heading: string;
}

const Results: React.FC<resultInfo> = ({ heading }) => {
  return (
    <SectionLayout bg="">
      <div className="flex flex-col items-center">
        <div className="max-w-[690px] mx-auto">
          <h2 className="heading-secondary !text-center">{heading}</h2>
          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            We have some amazing results to show you. Our clients are delighted
            with our services and their outcomes. Click below to view our most
            amazing experience with our clients.
          </p>
        </div>
        <button
          type="submit"
          className="btn text-small !py-4 flex items-center gap-8"
        >
          <span>View our success stories</span>
          <span className="inline-block translate-y-[1px]">
            <AiOutlineRight />
          </span>
        </button>
      </div>

      <div className="mt-16">
        <ClientLogos />
      </div>
    </SectionLayout>
  );
};

export default Results;

let logos: {
  link: "/assets/client-logo/swop.svg";
  alt: "swop";
}[];

const ClientLogos = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 justify-center gap-12 justify-items-center items-center gap-y-[8rem]">
      <Image
        src="/assets/client-logo/swop.svg"
        alt="swop"
        width={400}
        height={400}
        className="w-[15rem] h-auto"
      />
      <Image
        src="/assets/client-logo/apex.svg"
        alt="marketing"
        width={400}
        height={400}
        className="w-[15rem] h-auto"
      />
      <Image
        src="/assets/client-logo/elite-spa.svg"
        alt="elite-spa"
        width={400}
        height={400}
        className="w-[15rem] h-auto"
      />
      <Image
        src="/assets/client-logo/super-equestrian.svg"
        alt="super-equestrian"
        width={400}
        height={400}
        className="w-[15rem] h-auto"
      />
      <Image
        src="/assets/client-logo/klothen.svg"
        alt="klothen"
        width={400}
        height={400}
        className="w-[15rem] h-auto"
      />
      <Image
        src="/assets/client-logo/the-cat-flix.svg"
        alt="the-cat-flix"
        width={400}
        height={400}
        className="w-[15rem] h-auto"
      />
      <Image
        src="/assets/client-logo/trip-law.svg"
        alt="trip-law"
        width={400}
        height={400}
        className="w-[15rem] h-auto"
      />
      <Image
        src="/assets/client-logo/aireserv.svg"
        alt="aireserv"
        width={400}
        height={400}
        className="w-[15rem] h-auto"
      />
      <Image
        src="/assets/client-logo/butterfly-foundation.svg"
        alt="aireserv"
        width={400}
        height={400}
        className="w-[15rem] h-auto"
      />
      <Image
        src="/assets/client-logo/aireserv.svg"
        alt="aireserv"
        width={400}
        height={400}
        className="w-[15rem] h-auto"
      />
      <Image
        src="/assets/client-logo/huraia.svg"
        alt="huraia"
        width={400}
        height={400}
        className="w-[15rem] h-auto"
      />{" "}
      <Image
        src="/assets/client-logo/nazara.svg"
        alt="nazara"
        width={400}
        height={400}
        className="w-[15rem] h-auto"
      />{" "}
      <Image
        src="/assets/client-logo/robert-johnson.svg"
        alt="robert-johnson"
        width={400}
        height={400}
        className="w-[15rem] h-auto"
      />
      <Image
        src="/assets/client-logo/tesla.svg"
        alt="tesla"
        width={400}
        height={400}
        className="w-[15rem] h-auto"
      />
      <Image
        src="/assets/client-logo/butterfly.svg"
        alt="butterfly"
        width={400}
        height={400}
        className="w-[15rem] h-auto"
      />
    </div>
  );
};
