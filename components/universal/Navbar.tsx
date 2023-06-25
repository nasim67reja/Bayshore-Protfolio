"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrFormClose } from "react-icons/gr";

let linksO: {
  title: string;
  link: string;
}[];

linksO = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about-us" },
  { title: "Service", link: "/our-services" },
  { title: "Growth Plan", link: "/growth-plan" },
  { title: "Case Studies", link: "/case-studies" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    if (!isOpen) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "auto";
  };
  return (
    <header className="fixed w-full bg-[#fff] z-50 top-0 left-0 ">
      {/* Mobile */}

      <nav className="container justify-between gap-12 py-[1.8rem] flex md:hidden">
        {" "}
        <Link href="/">
          <Image
            src="/assets/bayshore-logo.svg"
            alt="bayshore-logo"
            width={366}
            height={106}
            className=" w-[16rem] h-[36px] "
            priority
          />
        </Link>
        <button onClick={toggleDrawer}>
          <RxHamburgerMenu />
        </button>
      </nav>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size={`75vw`}
      >
        <nav className=" px-[2rem] flex flex-col gap-12 py-[1.8rem] relative">
          <div className="flex justify-between items-center">
            {" "}
            <Link href="/">
              <Image
                src="/assets/bayshore-logo.svg"
                alt="bayshore-logo"
                width={366}
                height={106}
                className="w-[14rem] md:w-[16rem] h-auto "
                priority
              />
            </Link>
            <button onClick={toggleDrawer}>
              <GrFormClose size={30} className=" h-[20px]" />
            </button>
          </div>

          <div>
            <ul className="  md:px-[2rem] flex flex-col md:gap-[2.6rem]">
              {linksO.map((el: { title: string; link: string }, i: number) => (
                <li
                  className={`text-link border-t-[0.5px] border-[rgba(0,0,0,0.16)] py-4 text-center ${
                    pathname === el.link ? "active !text-primary" : ""
                  }`}
                  key={i}
                  onClick={toggleDrawer}
                >
                  <Link href={`${el.link}`}>{el.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="center gap-[1.5rem]">
            <div className="text-[#3E7BE2]">Login</div>
            <button className="btn text-link">Protfolio</button>
          </div>
        </nav>
      </Drawer>

      {/* Desktop */}

      <nav className="container  justify-between items-center py-[1.8rem] hidden md:flex">
        <div>
          <Link href="/">
            <Image
              src="/assets/bayshore-logo.svg"
              alt="bayshore-logo"
              width={366}
              height={106}
              className="lg:w-[16.6rem] w-[14rem] h-[36px]"
              priority
            />
          </Link>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-[1.5rem] lg:gap-[2.6rem]">
            {linksO.map((el: { title: string; link: string }, i: number) => (
              <li
                className={`text-link ${
                  pathname === el.link ? "active !text-primary" : ""
                }`}
                key={i}
              >
                <Link href={`${el.link}`}>{el.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="center gap-[1.5rem]">
          <div className="text-[#3E7BE2]">Login</div>
          <button className="btn text-link">Protfolio</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
