"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

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

  return (
    <header className="fixed w-full bg-[#fff] z-50 top-0 left-0">
      <nav className="container flex justify-between items-center py-[1.8rem]">
        <div>
          <Link href="/">
            <Image
              src="/assets/bayshore-logo.svg"
              alt="bayshore-logo"
              width={366}
              height={106}
              className="w-[166px] h-[36px]"
              priority
            />
          </Link>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-[2.6rem]">
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
