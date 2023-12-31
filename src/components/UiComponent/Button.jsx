import React from "react";

const Button = ({ handleNext, title, onPrevious, type }) => {
  return (
    <button
      type={type}
      className="bg-lime-50 px-6 py-2 rounded-md my-2 hover:bg-lime-300 hover:outline hover:outline-lime-400 text-slate-300 hover:text-black hover:shadow-xl"
      onClick={
        title === "NEXT" ? handleNext : title === "Previous" ? onPrevious : null
      }
    >
      {title}
    </button>
  );
};

export default Button;
