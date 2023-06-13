import Footer from "@/components/universal/Footer";
import Navbar from "@/components/universal/Navbar";
import { LayoutProps } from "@/types/LayoutProps";

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
