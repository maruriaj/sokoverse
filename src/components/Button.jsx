import React from "react";

const Button = ({ styles }) => (
  <a href={`#clients`}>
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}  hover:text-secondary`}>
      Get Started
    </button>
  </a>
);

export default Button;
