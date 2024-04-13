import React from "react";
import { useSelector } from "react-redux";
import Button from "./../2/Button";
import { arrowRight } from "../../assets/icons";
const SpacialOffer = () => {
  const { offer } = useSelector((state) => state.nike);

  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      {" "}
      <div className="flex-1 ">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className=" flex flex-1 flex-col ">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-coral-red">spacial </span>
          offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
          perspiciatis obcaecati magnam quaerat itaque nihil consequuntur
          repellat ipsa iusto nobis, ad ipsum sit asperiores tempore magni quis
          animi iste officiis.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
          quas numquam deleniti autem
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          {" "}
          <Button IconUrl={{ arrowRight }} label={"shop Now"} />
          <Button
            label={"learn more"}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpacialOffer;
