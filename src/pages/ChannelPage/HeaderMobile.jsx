import React from 'react';
import sprite from '../../assets/sprite.svg';

const HeaderMobile = () => {
  return (
    <header className='sm:hidden flex justify-between pl-4 pr-5 mt-3 mb-6.5'>
      <div className='flex items-center '>
        <svg className='shrink-0' width='37' height='25'>
          <use xlinkHref={`${sprite}#Logo`} />
        </svg>
        <h2 className='font-bold text-base leading-4 py-0.5 ml-2.5'>Margaret Phelps</h2>
      </div>
      <div className='flex gap-11 items-center'>
        <svg width='19' height='19'>
          <use xlinkHref={`${sprite}#search`} />
        </svg>
        <div className='flex flex-col gap-0.5 cursor-pointer'>
          <div className={'w-1.5 h-1.5  border-none bg-[#000000] rounded-full'} />
          <div className={'w-1.5 h-1.5  border-none bg-[#000000] rounded-full'} />
          <div className={'w-1.5 h-1.5  border-none bg-[#000000] rounded-full'} />
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
