import React from 'react';
import sprite from '../../assets/sprite.svg';

const HeaderMobile = ({ style }) => {
  return (
    <header style={style} className='sm:hidden flex pl-4 mt-3 mb-6.5'>
      <div className='flex items-center mr-10.5'>
        <svg className='shrink-0' width='37' height='25'>
          <use xlinkHref={`${sprite}#Logo`} />
        </svg>
        <h2 className='font-bold text-base leading-4 py-0.5 ml-2.5'>Margaret Phelps</h2>
      </div>
      <div className='flex gap-11 items-center'>
        <svg width='19' height='19'>
          <use xlinkHref={`${sprite}#search`} />
        </svg>
        <div className='flex flex-col gap-0.5'>
          <button className={'w-1.5 h-1.5  border-none bg-[#000000] rounded-full'} />
          <button className={'w-1.5 h-1.5  border-none bg-[#000000] rounded-full'} />
          <button className={'w-1.5 h-1.5  border-none bg-[#000000] rounded-full'} />
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
