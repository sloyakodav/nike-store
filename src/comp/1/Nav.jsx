import React from "react";
import { headerLogo } from "../../assets/images";
import { hamburger } from "../../assets/icons";
import { navLinks } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { HandleDarkMode } from "../../fr/nike/nikeSlice";
const Nav = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.nike);
  return (
    <header className="padding-x py-8 z-10 w-full absolute">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex gap-16   items-center max-lg:hidden justify-center">
          {navLinks.map((e) => {
            console.log(e.href);
            return (
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray"
                key={e.label}
                href={e.href}
              >
                {e.label}
              </a>
            );
          })}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
        {/* <div className="darkMode pr-8 max-lg:hidden flex items-center justify-between gap-5">
          Dark Mode
          <div
            onClick={(e) => {
              console.log(
                e.currentTarget.parentElement.parentElement.parentElement
                  .parentElement
              );
              dispatch(HandleDarkMode());
            }}
            className="changeable cursor-pointer  rounded-lg  "
          >
            <div style={darkMode.darkModeData} className="dot"></div>
          </div>
        </div> */}
      </nav>
    </header>
  );
};

export default Nav;
