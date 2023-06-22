// "use client";
import AccordionCus from "@/components/unique/faq/FaqAcc";
import SectionLayout from "@/components/universal/SectionLayout";

export const metadata = {
  title: "FAQ-Bayshore Communication",
  name: "description",
  description:
    "Do you have any questions about Bayshore or our services? You might find the answers in our FAQ page, based on frequent queries from our customers and leads.",
};

const page = () => {
  return (
    <>
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
