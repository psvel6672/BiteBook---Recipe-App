import React from "react";

const Footer = () => {

  const getDate = new Date();
  const getCurDate = `2024 - ${getDate.getFullYear()}`;
  // alert(getCurDate)

  return (
    <>
      <div className="d-flex justify-content-center aligns-items-center bg-dark text-white pt-3 border border-top-1">
        <p className="text-center">
        Made with ❤️ by <span className="text-primary">VelPS</span>. | Copyright © {getCurDate} All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
