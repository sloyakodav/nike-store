import React from "react";
import Button from "../2/Button";
import { useSelector } from "react-redux";
const SuperQuality = () => {
  const { shoe8 } = useSelector((state) => state.nike);
  return (
    <section
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
      id="about-us"
    >
      <div className=" flex flex-1 flex-col ">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
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
        <div className="mt-11">
          {" "}
          <Button label={"View Details"} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="" />
      </div>
    </section>
  );
};

export default SuperQuality;
