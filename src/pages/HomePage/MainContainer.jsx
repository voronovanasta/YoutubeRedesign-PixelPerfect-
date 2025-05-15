import React from 'react';
import user from '../../assets/user_sub1.png';
import foodPic from '../../assets/FoodPic.png';
import pic1 from '../../assets/cards/Cover1.png';
import pic2 from '../../assets/cards/Cover2.png';
import pic3 from '../../assets/cards/Cover3.png';
import pic4 from '../../assets/cards/Cover4.png';
import pic5 from '../../assets/cards/Cover5.png';
import pic6 from '../../assets/cards/Cover6.png';
import pic7 from '../../assets/cards/Cover7.png';
import pic8 from '../../assets/cards/Cover8.png';
import pic9 from '../../assets/cards/Cover9.png';
import pic10 from '../../assets/cards/Cover10.png';
import pic11 from '../../assets/cards/Cover11.png';
import pic12 from '../../assets/cards/Cover12.png';
import pic13 from '../../assets/cards/Cover13.png';
import pic14 from '../../assets/cards/Cover14.png';
import pic15 from '../../assets/cards/Cover15.png';
import Card from '../../components/Card';
import LeftIcon from '../../assets/Left.svg';
import RightIcon from '../../assets/Right.svg';

const MainContainer = () => {
  return (
    <div className=' space-y-12.5 sm:pl-4 mb-3.5 flex-1 min-w-0'>
      <div className='space-y-7.5'>
        <div className='sm:flex hidden justify-between items-center'>
          <div className='flex gap-4 items-center'>
            <img src={user} alt='user' />
            <h1 className='text-left font-bold text-[1.625rem] leading-6.5'>Dollie Blair</h1>
          </div>
          <div className='sm:flex hidden items-end gap-2.5 pr-37.5 self-end'>
            <button className='flex justify-center items-center w-7 h-7 bg-black opacity-25 rounded-full'>
              <img src={LeftIcon} />
            </button>
            <button className=' flex justify-center items-center w-7 h-7 bg-black opacity-25 rounded-full'>
              <img src={RightIcon} />
            </button>
          </div>
        </div>
        <div className='overflow-x-auto w-full scrollbar-none flex sm:gap-10 gap-7.5 flex-col sm:flex-row'>
          <Card
            className='sm:w-[15.625rem]'
            time={'4:15'}
            src={pic1}
            heading={'A Brief History Of Creation'}
            data={'80k views  ·  3 days ago'}
            user={'Dollie Blair'}
          />
          <Card
            className='sm:w-[15.625rem]'
            time={'8:00'}
            src={pic2}
            heading={'Selecting The Right Hotel'}
            data={'123k views  ·  1 months ago'}
            user={'Dollie Blair'}
          />
          <Card
            className='sm:w-[15.625rem]'
            time={'5:32'}
            src={pic3}
            heading={'Asteroids'}
            data={'43k views  ·  12 days ago'}
            user={'Dollie Blair'}
          />
          <Card
            className='sm:w-[15.625rem]'
            time={'6:40'}
            src={pic4}
            heading={'Telescopes 101'}
            data={'11k views  ·  6 months ago'}
            user={'Dollie Blair'}
          />
          <Card
            className='sm:w-[15.625rem]'
            time={'1:45'}
            src={pic5}
            heading={'Medical Care Is Just'}
            data={'18k views  ·  2 days ago'}
            user={'Dollie Blair'}
          />
          <Card
            className='sm:w-[15.625rem]'
            time={'2:12'}
            dimensions={{ width: 15.625, height: 9.375, lastChildWidth: 13.4375 }}
            src={pic6}
            heading={'Moon Gazing'}
            data={'67k views  ·  4 months ago'}
            user={'Dollie Blair'}
          />
        </div>
      </div>
      <div className='space-y-7.5 pt-1.5'>
        <div className='sm:flex hidden justify-between items-center'>
          <h1 className='text-left font-bold text-[1.625rem] leading-6.5'>Recommended</h1>
          <div className='flex  items-end gap-2.5 pr-37.5 self-end'>
            <button className='flex justify-center items-center w-7 h-7 bg-black opacity-25 rounded-full'>
              <img src={LeftIcon} />
            </button>
            <button className=' flex justify-center items-center w-7 h-7 bg-black opacity-25 rounded-full'>
              <img src={RightIcon} />
            </button>
          </div>
        </div>
        <div className='overflow-x-auto w-full scrollbar-none flex sm:gap-10 gap-7.5 flex-col sm:flex-row'>
          <Card
            time={'3:40'}
            isBig
            className='sm:w-[33.75rem]'
            src={pic13}
            heading={'Dude You Re Getting A Telescope'}
            data={'34k views  ·  5 months ago'}
            user={'Gussie French'}
          />
          <Card
            time={'2:12'}
            isBig
            className='sm:w-[33.75rem]'
            src={pic14}
            heading={'Moon Gazing'}
            data={'54k views  ·  11 months ago'}
            user={'Gussie French'}
          />
          <Card
            time={'2:12'}
            isBig
            className='sm:w-[33.75rem]'
            src={pic15}
            heading={'Moon Gazing'}
            data={'125k views  ·  4 months ago'}
            user={'Dollie Blair'}
          />
        </div>
      </div>
      <div className='hidden sm:block space-y-7.5'>
        <div className='flex justify-between items-center'>
          <div className='sm:flex hidden gap-4 items-center'>
            <img src={foodPic} alt='user' />
            <div className='flex flex-start items-baseline'>
              <h1 className='text-left font-bold text-[1.625rem] leading-6.5 mr-5'>Food & Drink</h1>
              <p className='font-normal text-base leading-4 text-[#C2C2C2]'>
                Recommended channel for you
              </p>
            </div>
          </div>
          <div className='flex gap-10 pr-37.5 items-center'>
            <button
              className={
                'hidden sm:flex justify-center items-center w-38.5 h-10 bg-[#FF0000] text-white rounded-[1.25rem]'
              }
            >
              Subscribe 2.3m
            </button>
            <div className='flex gap-2.5'>
              <button className='flex justify-center items-center w-7 h-7 bg-black opacity-25 rounded-full'>
                <img src={LeftIcon} />
              </button>
              <button className=' flex justify-center items-center w-7 h-7 bg-black opacity-25 rounded-full'>
                <img src={RightIcon} />
              </button>
            </div>
          </div>
        </div>
        <div className='overflow-x-auto w-full scrollbar-none'>
          <div className='flex sm:gap-10 gap-7.5'>
            <Card
              time={'7:36'}
              className='sm:w-[15.625rem]'
              src={pic7}
              heading={'Astronomy Or Astrology'}
              data={'240k views  ·  4 months ago'}
              user={'Food & Drink'}
            />
            <Card
              time={'2:19'}
              className='sm:w-[15.625rem]'
              src={pic8}
              heading={'Advertising Outdoors'}
              data={'13k views  ·  15 days ago'}
              user={'Food & Drink'}
            />
            <Card
              time={'9:05'}
              className='sm:w-[15.625rem]'
              src={pic9}
              heading={'Radio Astronomy'}
              data={'1k views  ·  11 months ago'}
              user={'Food & Drink'}
            />
            <Card
              time={'3:40'}
              className='sm:w-[15.625rem]'
              src={pic10}
              heading={'A Good Autoresponder'}
              data={'45k views  ·  2 months ago'}
              user={'Food & Drink'}
            />
            <Card
              time={'1:56'}
              className='sm:w-[15.625rem]'
              src={pic11}
              heading={'Baby Monitor Technology'}
              data={'86k views  ·  7 days ago'}
              user={'Food & Drink'}
            />
            <Card
              time={'4:15'}
              className='sm:w-[15.625rem]'
              src={pic12}
              heading={'Asteroids'}
              data={'123k views  ·  4 months ago'}
              user={'Dollie Blair'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContainer;
