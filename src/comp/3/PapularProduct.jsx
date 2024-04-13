import React from "react";
import { star } from "../../assets/icons";

const PapularProduct = ({ name, imgUrl, price }) => {
  console.log(imgUrl);
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgUrl} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5 ">
        <img src={star} height={25} width={25} alt="rating" />
        <p className="font-montserrat text-slate-gray leading-normal text-xl">
          3.7
        </p>
      </div>
      <h3 className="font-semibold font-palanquin mt2 text-2xl leading-normal">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat leading-normal text-coral-red text-2xl">
        {price}
      </p>
    </div>
  );
};

export default PapularProduct;
