import Count from "../Count";
import SectionLayout from "./SectionLayout";
import Image from "next/image";

const Info = () => {
  return (
    <div className="bg-img">
      <SectionLayout bg="">
        <div className="custom-info grid  grid-cols-2 justify-between items-center">
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-8 ">
            <Image
              src="/assets/salman-n.png"
              alt="salman"
              width={150}
              height={150}
              className="w-[11rem]  h-[11rem] rounded-full border-[5px] border-[#fff]"
            />
            <div>
              <p className="text-base mb-2 opacity-80 !text-[#fff]">
                Ready to speak with a marketing expert? Give us a ring
              </p>
              <p className="info-text text-center sm:text-start">0168504449</p>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap justify-center  items-center gap-8">
            <div className="flex flex-col">
              <p className="info-text text-center">1.6 million</p>
              <p className="text-base mb-2 opacity-80 !text-[#fff]">
                Hours of Expertise
              </p>
            </div>

            <div className="flex flex-col">
              <p className="info-text text-center">
                <Count num={500} duration={3} />+
              </p>
              <p className="text-base mb-2 opacity-80 !text-[#fff]">
                Digital Marketing Masters On Staff
              </p>
            </div>

            <div className="flex flex-col">
              <p className="info-text text-center">
                <Count num={1128} duration={3} />
              </p>
              <p className="text-base mb-2 opacity-80 !text-[#fff]">
                Websites Launched
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Info;
