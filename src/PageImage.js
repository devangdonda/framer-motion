import React from "react";

const PageImage = (props) => {
  return (
    <img
      src={props.src}
      alt=""
      style={{ height: "100vh", width: "100%" }}
    />
  );
};

export default PageImage;
