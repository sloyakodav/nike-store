import React from "react";
import { star } from "../../assets/icons";

const ReviewsCard = ({ customerName, feedback, imgURL, rating }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120px] "
      />
      <p className="mt-6 max-w-sm text-center text-info">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5 ">
        <img src={star} height={24} width={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewsCard;
