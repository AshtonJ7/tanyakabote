import React from "react";

const CtaButton = ({name}) => {
  return (
    <button className="bg-yellow-800 hover:bg-yellow-700 hover:shadow hover:shadow-yellow-700 text-lg text-slate-50 rounded-3xl px-4 py-2 w-fit transition-all duration-300">
      {name}
    </button>
  );
};

export default CtaButton;
