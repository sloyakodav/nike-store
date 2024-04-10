import React from "react";

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigImage }) => {
  //   const handleCLick = () =>{
  //     if (bigImage!===)
  //   }
  return (
    <div
      className={`border-2 rounded-xl ${
        bigImage === imgUrl ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleCLick}
    ></div>
  );
};

export default ShoeCard;
