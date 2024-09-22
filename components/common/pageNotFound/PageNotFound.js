import React from "react";

const PageNotFound = () => {
  return (
    <div>
      <div className="flex items-center flex-col justify-center w-full h-[100vh]">
        <img src="../page_not_found.png"  alt=""/>
        <h1 className="mt-14 text-4xl text-[#757575] font-bold">
          This <span className="theme-color">Page </span> Is Under Construction
        </h1>
      </div>
    </div>
  );
};

export default PageNotFound;
