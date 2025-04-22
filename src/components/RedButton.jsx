import React from 'react';

const RedButton = ({ top, right }) => {
  return (
    <button
      style={{ top: top + 'px', right: right + 'px' }}
      className={
        'hidden absolute sm:flex justify-center items-center w-38.5 h-10 bg-[#FF0000] text-white rounded-[1.25rem]'
      }
    >
      Subscribe 2.3m
    </button>
  );
};

export default RedButton;
