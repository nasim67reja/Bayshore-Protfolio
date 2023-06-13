import Image from "next/image";
import Link from "next/link";
import React from "react";

const links: string[] = [
  "Home",
  "About",
  "Service",
  "Growth Plan",
  "Case Studies",
  "Blog",
  "Contact",
];

// make the link text to actual link
function formatString(input: string): string {
  const withoutWhitespace = input.replace(/\s/g, "-");
  const formattedString = withoutWhitespace.replace(/ /g, "-");
  return formattedString.toLowerCase();
}

const Navbar = () => {
  return (
    <header>
      <nav className="container flex justify-between items-center py-[1.8rem]">
        <div>
          <Image
            src="/assets/bayshore-logo.svg"
            alt="bayshore-logo"
            width={366}
            height={106}
            className="w-[166px] h-[36px]"
            priority
          />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-[2.6rem]">
            {links.map((el: string, i: number) => (
              <li className="text-link" key={i}>
                <Link href={`/${formatString(el)}`}>{el}</Link>
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
