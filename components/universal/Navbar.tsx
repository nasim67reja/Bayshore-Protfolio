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

const Navbar = () => {
  return (
    <header>
      <nav className="container flex justify-between bg-red-400 items-center">
        <div>logo</div>
        <div>
          <ul className="flex items-center justify-center gap-4">
            {links.map((el: string, i: number) => (
              <li className="text-link" key={i}>
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex">
          <div>login</div>
          <div>protfolio</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
