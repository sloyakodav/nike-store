import React from "react";
import { headerLogo } from "../../assets/images";
import { hamburger } from "../../assets/icons";
import { navLinks } from "../../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 w-full absolute">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex gap-16   items-center max-lg:hidden justify-center">
          {navLinks.map((e) => {
            return (
              <li
                className="font-montserrat leading-normal text-lg text-slate-gray"
                key={e.label}
                href={e.href}
              >
                {e.label}
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
