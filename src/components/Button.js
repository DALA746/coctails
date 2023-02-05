import React from 'react';

const BackButton = ({ btnText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-0 w-full max-w-[250px] border-palePink p-2 rounded  italic hover:scale-110 hover:shadow-none hover:font-semibold transition-all ">
      {btnText}
    </button>
  );
};

export default BackButton;
