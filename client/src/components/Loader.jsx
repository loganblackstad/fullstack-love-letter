import React from "react";
import Loader from "react-loader-spinner";

const HeartLoader = () => {
  return (
    <Loader
      style={{ textAlign: "center" }}
      type="Hearts"
      color="#00BFFF"
      height={150}
      width={150}
    />
  );
};

export default HeartLoader;