"use client";
import SectionLayout from "@/components/universal/SectionLayout";
import { StickyContainer, Sticky } from "react-sticky";
import { services } from "../page";
const page = () => {
  return (
    <SectionLayout bg="">
      <div className="grid grid-cols-[65%_30%] gap-8">
        <div className="bg-[#121] h-[200vh]">scroll</div>

        <div className="sticky top-[72px] h-[80vh]">
          <ul className="flex flex-col bg-[#F4F4F4] gap-6 py-8">
            {services.map((el: any, i: number) => (
              <li
                className="mx-[3rem] rounded-[5px] text-small py-2 px-8 bg-[#fff]"
                key={i}
              >
                {el.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionLayout>
    // </>
  );
};

export default page;
