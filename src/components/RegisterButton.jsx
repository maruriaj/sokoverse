import React from 'react'


const Button = ({ styles }) => (
    <a href="https://ke.dadasoko.com/" target="_blank">
        <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            Register Now
        </button>
    </a>
);

export default Button;
