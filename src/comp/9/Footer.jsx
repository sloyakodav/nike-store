import React from "react";
import { footerLogo } from "../../assets/images";
import { footerLinks, socialMedia } from "../../constants";
import { copyrightSign } from "../../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-2 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            veritatis sequi corrupti non ratione voluptate nemo, voluptas cum
            ullam mollitia quidem
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => {
              return (
                <div
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                  key={icon.alt}
                >
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((link) => {
            return (
              <div className="" key={link.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                  {link.title}
                </h4>
                <ul>
                  {link.links.map((li) => {
                    return (
                      <li
                        key={li.name}
                        className="mt-3 text-white-400 leading-normal hover:text-slate-gray cursor-pointer text-base font-montserrat"
                      >
                        <a href={li.link}>{li.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right Sign"
            height={20}
            width={20}
            className="rounded-full m-2"
          />
          <p>Copyright. ALL rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">terms & conditions </p>
      </div>
    </footer>
  );
};

export default Footer;
