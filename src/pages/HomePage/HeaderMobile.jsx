import React from 'react';
import sprite from '../../assets/sprite.svg';
import userMobile from '../../assets/Userpic_mobile.png';

const HeaderMobile = ({ style }) => {
  return (
    <header style={style} className='sm:hidden flex w-full px-4 mt-2.5 mb-4.5'>
      <div className='flex items-center flex-1 mr-5'>
        <svg className='mr-14.5' width='116' height='25'>
          <use xlinkHref={`${sprite}#Youtube`} />
        </svg>
      </div>
      <div className='flex gap-6 items-center'>
        <svg width='19' height='19'>
          <use xlinkHref={`${sprite}#search`} />
        </svg>
        <img src={userMobile} alt='user' width='30px' height='30px' />
      </div>
    </header>
  );
};

export default HeaderMobile;
