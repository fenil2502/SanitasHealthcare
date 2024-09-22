import React, { useState } from "react";

const ReadMore = ({ children,sliceValue}) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="common-fonts-size text-[#757575] inner-title-font-small-button">
      {isReadMore ? text.slice(0, sliceValue) : text}
      <span onClick={toggleReadMore} className="text-[#c00000] cursor-pointer">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
export default ReadMore;