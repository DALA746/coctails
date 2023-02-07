import React from 'react';

const Button = ({ btnText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border w-full max-w-[360px] font-bold border-palePink p-2 text-vividYellow rounded hover:scale-110 hover:shadow-none hover:font-semibold hover:bg-palePink transition-all ">
      {btnText}
    </button>
  );
};

export default Button;
