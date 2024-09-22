import React from "react";

const ButtonLoader = () => {
  return (
    <button className="buttonload group relative flex items-center justify-center btn btn-red px-[20px] text-white focus:outline-none">
      <span className="absolute left-[20px] inset-y-0 flex items-center mx-[15px]">
        <img className="fa-spin h-6" src="/Spinne.png" alt="" />
      </span>
      <span className="ml-5 text-lg mobile-14">
        Loading
      </span>
    </button>
  );
};

export default ButtonLoader;