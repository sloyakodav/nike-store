import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShoeImg } from "../../fr/nike/nikeSlice";
const ShoeCard = ({ img }) => {
  const dispatch = useDispatch();
  const { bigShoeImg, shoeData } = useSelector((state) => state.nike);

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === shoeData ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={() => dispatch(changeShoeImg(img.thumbnail))}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40  sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={img.thumbnail}
          alt="shoe collection "
          width={127}
          height={103}
          className="object-contain "
        />
      </div>
    </div>
  );
};

export default ShoeCard;
