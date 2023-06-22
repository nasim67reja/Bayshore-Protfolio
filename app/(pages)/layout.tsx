"use client";

import Footer from "@/components/universal/Footer";
import Navbar from "@/components/universal/Navbar";
import { LayoutProps } from "@/types/LayoutProps";

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="mt-[72px]">{children}</div>
      <Footer />
    </>
  );
};

export default layout;
