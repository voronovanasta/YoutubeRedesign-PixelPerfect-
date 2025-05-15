import React from 'react';
import sprite from '../assets/sprite.svg';
import user from '../assets/Userpic.png';

const Header = ({ className }) => {
  return (
    <header
      className={`${className ?? ''} bg-white sm:static hidden sm:flex w-full h-[44px]  pl-8 pr-17.5 mt-5 `}
    >
      <div className='flex items-center flex-1 mr-5'>
        <svg className='shrink-0 mr-7' width='22' height='19'>
          <use xlinkHref={`${sprite}#Menu`} />
        </svg>
        <svg className='mr-14.5' width='116' height='25'>
          <use xlinkHref={`${sprite}#Youtube`} />
        </svg>
        <div className='max-w-[51.875rem] flex-1 h-full flex relative'>
          <input
            type='text'
            placeholder='Search'
            className='placeholder:text-base placeholder:leading-4 placeholder:text-[#30384C]/40 w-full pl-5 rounded-5xl bg-[#EBEBEB]/30'
          ></input>
          <svg className='absolute top-3 right-4' width='19' height='19'>
            <use xlinkHref={`${sprite}#search`} />
          </svg>
        </div>
      </div>
      <div className='flex gap-11.5 items-center'>
        <div className='flex gap-13 items-center pt-2 relative'>
          <svg width='27' height='20'>
            <use xlinkHref={`${sprite}#cameraIcon`} />
          </svg>
          <svg width='21' height='21'>
            <use xlinkHref={`${sprite}#customIcon`} />
          </svg>
          <svg className='mr-1.5' width='22' height='26'>
            <use xlinkHref={`${sprite}#callIcon`} />
          </svg>
          <button className=' w-[1.125rem] h-[1.125rem] text-center font-bold text-xs bg-[#FF0000] rounded-[100%] border-1 border-[#FFFFFF] absolute top-0 right-0 text-white'>
            3
          </button>
        </div>
        <img src={user} alt='user' width='40px' height='40px' />
      </div>
    </header>
  );
};

export default Header;
