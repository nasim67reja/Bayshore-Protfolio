import HomeServiceCard from "@/components/unique/Home/HomeServiceCard";
import Progress from "@/components/unique/Home/Progress";
import HomeTabBar from "@/components/unique/HomeTabBar";
import Footer from "@/components/universal/Footer";
import Navbar from "@/components/universal/Navbar";
import SectionLayout from "@/components/universal/SectionLayout";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
// AiOutlineRight

const page = () => {
  return (
    <>
      <Navbar />
      <SectionLayout bg="bg-[#F4F4F4]">
        <div className="flex justify-between items-center gap-12">
          <div className="flex-1">
            <p className="text-[16px] md:text-[20px] text-[#3E7BE2] mb-[0.5rem]">
              {hero[0].text}
            </p>
            <h1 className="heading-primary">{hero[0].heading}</h1>
            <p className="text-base">{hero[0].description}</p>
            <form className="flex items-center gap-8 mt-7">
              <input
                className="placeholder-center rounded-[10px] outline-none text-link py-4 px-4"
                type="text"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="btn text-[14px] !py-4 flex items-center gap-8"
              >
                <span>Send us a proposal</span>
                <span className="inline-block translate-y-[1px]">
                  <AiOutlineRight />
                </span>
              </button>
            </form>
          </div>
          <div className="flex-1">
            <Image
              src="/assets/demo.svg"
              alt="marketing"
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </SectionLayout>
      {/* Tailored */}
      <SectionLayout bg="">
        <div className="flex flex-col items-center">
          <h2 className="heading-secondary ">
            Tailored marketing solutions for your unique needs
          </h2>
          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
            use. The Flat is great to put under any phone case(non-metal) Use.
          </p>
        </div>
        <div className="mt-8">
          <HomeTabBar />
        </div>
      </SectionLayout>

      {/* Boost */}
      <SectionLayout bg="bg-[#F4F4F4]">
        <h2 className="heading-secondary text-center">
          Need a boost for you business? Get your FREE Quote Today!
        </h2>
        <form className="flex items-center gap-12 mt-[4rem] max-w-[100rem] mx-auto">
          <input
            className="rounded-[10px] outline-none text-link py-6 px-8 flex-1"
            type="text"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="btn text-[14px] !py-6 flex items-center gap-8"
          >
            <span>Send us a proposal</span>
            <span className="inline-block translate-y-[1px]">
              <AiOutlineRight />
            </span>
          </button>
        </form>
      </SectionLayout>
      {/* Campaigns */}
      <SectionLayout bg="">
        <div className="flex flex-col items-center">
          <h2 className="heading-secondary ">
            Drive results through innovative digital marketing campaigns
          </h2>
          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            Looking to power up your digital strategy? WebFX offers a wide range
            of digital marketing services that work together to attract,
            delight, and convert leads. Toss in our proprietary tech-powered
            suite of tools, and your campaign is unbeatable.
          </p>
        </div>
        <div className="mt-8">
          <div className="flex mb-8 gap-8">
            <HomeServiceCard />
            <HomeServiceCard />
          </div>
          <div className="flex gap-8">
            <HomeServiceCard />
            <HomeServiceCard />
          </div>
        </div>
      </SectionLayout>
      {/* Benefits */}
      <SectionLayout bg="bg-[#F4F4F4]">
        <div className="flex flex-col items-center">
          <h2 className="heading-secondary ">
            Benefits of Choosing Us as Your Digital Marketing Agency
          </h2>
          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
            use. The Flat is great to put under any phone case(non-metal) Use.
          </p>
        </div>
        <div className="flex mt-12 gap-16 items-center">
          <div className="flex-1">
            <h3 className="heading-tertiary">
              Get Advantage and Access to Our Tools and Expertise
            </h3>
            <p className="text-base">
              Get more qualified traffic on the search terms that matter most to
              your business. We achieve measurable results by working on every
              variable that impacts SERPs. Trust our proven track record to
              maximize your visibility online. Set your business up for
              long-term success.
            </p>
          </div>
          <div className="flex-1">
            <Progress />
          </div>
        </div>
      </SectionLayout>
      {/* Marketing */}
      <SectionLayout bg="">
        <div className="flex flex-col items-center">
          <h2 className="heading-secondary ">
            Integrated Marketing, Design and Development
          </h2>
          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
            use. The Flat is great to put under any phone case(non-metal) Use.
          </p>
        </div>
        <div className="mt-8">
          <Image
            src="/assets/marketing.svg"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
        </div>
      </SectionLayout>
      {/* about us */}
      <SectionLayout bg="bg-[#F4F4F4]">
        <div className="flex flex-col items-center">
          <h2 className="heading-secondary ">
            Here is what our client saying about us
          </h2>
          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
            use. The Flat is great to put under any phone case(non-metal) Use.
          </p>
        </div>
        <div className="mt-8">
          <Image
            src="/assets/marketing.svg"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
        </div>
      </SectionLayout>
      {/*  Result */}
      <SectionLayout bg="">
        <div className="flex flex-col items-center">
          <h2 className="heading-secondary ">We Have Some Amazing Results</h2>
          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
            use. The Flat is great to put under any phone case(non-metal) Use.
          </p>
          <button
            type="submit"
            className="btn text-[14px] !py-4 flex items-center gap-8"
          >
            <span>View our success stories</span>
            <span className="inline-block translate-y-[1px]">
              <AiOutlineRight />
            </span>
          </button>
        </div>
        <div className="mt-8">
          <Image
            src="/assets/results.svg"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
        </div>
      </SectionLayout>
      <Footer />
    </>
  );
};

export default page;

//  Home Hero section
let hero: {
  text: string;
  heading: string;
  description: string;
}[];

hero = [
  {
    text: " Marketing That Drive Business.",
    heading: "Get your own marketing team for you business",
    description: ` Swop’s Flat Rectangle NFC’s are designed to be durable and simple
    to use. The Flat is great to put under any phone case(non-metal)
    Users can download our app to program any of our NFC’s with the
    click of a button. This will attach your profile to the NFC for
    easy sharing. You just tap the NFC on any compatible phone to
    share your digital business card, microsite, crypto address, the
    possibilities are endless. Use the swop app to.`,
  },
];
