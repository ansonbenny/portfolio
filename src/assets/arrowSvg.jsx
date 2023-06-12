import React from "react";

const ArrowSvg = ({ width, height, class_name }) => {
  return (
    <svg
      width={width}
      height={height}
      className={class_name}
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M204,64V168a12,12,0,0,1-24,0V92.9707L72.48535,200.48535a12.0001,12.0001,0,0,1-16.9707-16.9707L163.0293,76H88a12,12,0,0,1,0-24H192A12.00028,12.00028,0,0,1,204,64Z" />
    </svg>
  );
};

export default ArrowSvg;
