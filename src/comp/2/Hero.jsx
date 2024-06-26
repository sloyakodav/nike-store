import React from "react";
import Button from "./Button";
import { arrowRight } from "../../assets/icons";
import { statistics } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
// import { collectionBackgroundDarkMode } from "../../assets/images/collection-background-dark-mode";
// import { thumbnailBackgroundDarkMode } from "assets/images/thumbnail-background-dark-mode.svg";
// console.log(thumbnailBackgroundDarkMode);
import ShoeCard from "./ShoeCard";
const Hero = () => {
  const { bigShoeImg, shoeData, shoes, darkMode } = useSelector(
    (state) => state.nike
  );

  return (
    <section
      id="home"
      className="w-full  p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28 w-full">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label={"Shop Now"} IconUrl={{ arrowRight }} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((e, index) => {
            return (
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">{e.label}</p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {e.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`relative flex-1 justify-center flex items-center xl:min-h-screen max-xl:py-40 bg-primary "bg-hero "
    bg-cover bg-center`}
      >
        <img
          src={bigShoeImg}
          alt="big shoes 1"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute  -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((e, index) => {
            return (
              <div key={index}>
                <ShoeCard img={e} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
