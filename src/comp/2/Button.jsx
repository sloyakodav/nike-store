import React from "react";

const Button = ({
  label,
  IconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
      ${
        backgroundColor
          ? `${borderColor} ${textColor}  rounded-full `
          : "bg-coral-red rounded-full border-coral-red text-white"
      }
       ${fullWidth && "w-full"}`}
    >
      {label}{" "}
      {IconUrl && (
        <img
          src={IconUrl.arrowRight}
          alt="Arrow Right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
