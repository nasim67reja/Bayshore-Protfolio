"use client";

import Footer from "@/components/universal/Footer";
import Navbar from "@/components/universal/Navbar";
import { LayoutProps } from "@/types/LayoutProps";
import MessengerChat from "@/components/universal/MessengerChatBot";

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MessengerChat />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
