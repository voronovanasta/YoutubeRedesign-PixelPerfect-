import React from 'react';
import Card from '../../components/Card';
import pic1 from '../../assets/cards/Cover22.png';
import pic2 from '../../assets/cards/Cover23.png';
import pic3 from '../../assets/cards/Cover24.png';
import pic4 from '../../assets/cards/Orange.png';

const Sidebar = () => {
  return (
    <div className='space-y-3.5 sm:space-y-6 scrollbar-none 3xl:sticky 3xl:top-0 3xl:overflow-y-auto  '>
      <div className='flex items-center px-4 sm:px-0 sticky top-0 z-10 bg-white'>
        <h1 className='font-bold py-1  text-xl leading-5 sm:text-4xl sm:leading-9 text-[#19202C]'>
          Next
        </h1>
        <div className='flex items-center gap-3.5 pt-1.5 sm:pt-0 ml-auto'>
          <p className='font-bold py-0.5 text-[0.625rem] leading-2.5 sm:text-base sm:leading-4 uppercase tracking-wide text-[#19202C]'>
            Autoplay
          </p>
          <label
            htmlFor='toggler'
            className='relative inline-block w-[1.875rem] h-[1.1875rem] sm:w-11 sm:h-7 '
          >
            <input className='opacity-0 w-0 h-0' type='checkbox' id='toggler' />
            <span className='switch absolute top-0 left-0 right-0 bottom-0  bg-[#EBEBEB]/30 rounded-[0.875rem]'></span>
          </label>
        </div>
      </div>
      <div className=' flex flex-col items-center gap-7.5 sm:px-0 px-4'>
        <Card
          isSidebarCard
          className={'sm:w-[22.9375rem] w-[18rem]'}
          time={'8:00'}
          src={pic1}
          heading={'Baby Monitor Technology'}
          data={'123k views'}
          user={'Dollie Blair'}
        />
        <Card
          isSidebarCard
          className={'sm:w-[22.9375rem] w-[18rem]'}
          time={'8:00'}
          src={pic2}
          heading={'A Good Autoresponder'}
          data={'123k views'}
          user={'Dollie Blair'}
        />
        <Card
          isSidebarCard
          className={'sm:w-[22.9375rem] w-[18rem]'}
          time={'8:00'}
          src={pic3}
          heading={'Selecting The Right Hotel'}
          data={'123k views'}
          user={'Dollie Blair'}
        />
        <Card
          isSidebarCard
          className={'sm:w-[22.9375rem] w-[18rem]'}
          time={'8:00'}
          src={pic4}
          heading={'Selecting The Right Hotel'}
          data={'123k views'}
          user={'Dollie Blair'}
        />
      </div>
    </div>
  );
};

export default Sidebar;
