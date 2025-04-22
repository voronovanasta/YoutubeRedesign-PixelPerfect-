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
import RedButton from '../../components/RedButton';

const MainContainer = () => {
  return (
    <div className='space-y-12.5 sm:pl-4 mb-3.5'>
      <div className='hidden sm:block space-y-7.5'>
        <div className='flex flex-start items-center relative'>
          <img className='pr-5' src={user} alt='user' />
          <h1 className='text-left font-bold text-[1.625rem] leading-6.5'>Dollie Blair</h1>
          <div className='flex items-center gap-2.5 absolute top-6 right-37.5'>
            <button
              style={{
                backgroundImage: "url('/src/assets/Left.svg')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              className=' flex justify-center items-center w-7 h-7 bg-black opacity-25 rounded-full'
            ></button>
            <button
              style={{
                backgroundImage: "url('/src/assets/Right.svg')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              className=' flex justify-center items-center w-7 h-7 bg-black opacity-25 rounded-full'
            ></button>
          </div>
        </div>
        <div className='flex gap-10'>
          <Card
            time={'4:15'}
            dimensions={{ width: 15.625, height: 9.375 }}
            src={pic1}
            heading={'A Brief History Of Creation'}
            data={'80k views  ·  3 days ago'}
            user={'Dollie Blair'}
          />
          <Card
            time={'8:00'}
            dimensions={{ width: 15.625, height: 9.375 }}
            src={pic2}
            heading={'Selecting The Right Hotel'}
            data={'123k views  ·  1 months ago'}
            user={'Dollie Blair'}
          />
          <Card
            time={'5:32'}
            dimensions={{ width: 15.625, height: 9.375 }}
            src={pic3}
            heading={'Asteroids'}
            data={'43k views  ·  12 days ago'}
            user={'Dollie Blair'}
          />
          <Card
            time={'6:40'}
            dimensions={{ width: 15.625, height: 9.375 }}
            src={pic4}
            heading={'Telescopes 101'}
            data={'11k views  ·  6 months ago'}
            user={'Dollie Blair'}
          />
          <Card
            time={'1:45'}
            dimensions={{ width: 15.625, height: 9.375 }}
            src={pic5}
            heading={'Medical Care Is Just'}
            data={'18k views  ·  2 days ago'}
            user={'Dollie Blair'}
          />
          <Card
            time={'2:12'}
            dimensions={{ width: 15.625, height: 9.375, lastChildWidth: 13.4375 }}
            src={pic6}
            heading={'Moon Gazing'}
            data={'67k views  ·  4 months ago'}
            user={'Dollie Blair'}
          />
        </div>
      </div>
      <div className='hidden sm:block space-y-7.5 pt-1.5'>
        <div className='flex flex-start items-center relative'>
          <h1 className='text-left font-bold text-[1.625rem] leading-6.5'>Recommended</h1>
          <div className='flex items-center gap-2.5 absolute top-0 right-37.5'>
            <button
              style={{
                backgroundImage: "url('/src/assets/Left.svg')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              className=' flex justify-center items-center w-7 h-7 bg-black opacity-25 rounded-full'
            ></button>
            <button
              style={{
                backgroundImage: "url('/src/assets/Right.svg')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              className=' flex justify-center items-center w-7 h-7 bg-black opacity-25 rounded-full'
            ></button>
          </div>
        </div>
        <div className='flex gap-10'>
          <Card
            time={'3:40'}
            dimensions={{ width: 33.75, height: 15.625 }}
            src={pic13}
            heading={'Dude You Re Getting A Telescope'}
            data={'34k views  ·  5 months ago'}
            user={'Gussie French'}
          />
          <Card
            time={'2:12'}
            dimensions={{ width: 33.75, height: 15.625 }}
            src={pic14}
            heading={'Moon Gazing'}
            data={'54k views  ·  11 months ago'}
            user={'Gussie French'}
          />
          <Card
            time={'2:12'}
            dimensions={{ width: 33.75, height: 15.625, lastChildWidth: 31.5625 }}
            src={pic15}
            heading={'Moon Gazing'}
            data={'125k views  ·  4 months ago'}
            user={'Dollie Blair'}
          />
        </div>
      </div>
      <div className='hidden sm:block space-y-7.5'>
        <div className='flex flex-start items-center relative'>
          <img className='pr-5 self-end' src={foodPic} alt='user' />
          <div className='flex flex-start items-baseline'>
            <h1 className='text-left font-bold text-[1.625rem] leading-6.5 mr-5'>Food & Drink</h1>
            <p className='font-normal text-base leading-4 text-[#C2C2C2]'>
              Recommended channel for you
            </p>
          </div>
          <RedButton top={16} right={255} />
          <div className='flex items-center gap-2.5 absolute top-6 right-37.5'>
            <button
              style={{
                backgroundImage: "url('/src/assets/Left.svg')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              className=' flex justify-center items-center w-7 h-7 bg-black opacity-25 rounded-full'
            ></button>
            <button
              style={{
                backgroundImage: "url('/src/assets/Right.svg')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              className=' flex justify-center items-center w-7 h-7 bg-black opacity-25 rounded-full'
            ></button>
          </div>
        </div>
        <div className='flex gap-10'>
          <Card
            time={'2:12'}
            dimensions={{ width: 15.625, height: 9.375 }}
            src={pic7}
            heading={'Astronomy Or Astrology'}
            data={'240k views  ·  4 months ago'}
            user={'Food & Drink'}
          />
          <Card
            time={'2:12'}
            dimensions={{ width: 15.625, height: 9.375 }}
            src={pic8}
            heading={'Advertising Outdoors'}
            data={'13k views  ·  15 days ago'}
            user={'Food & Drink'}
          />
          <Card
            time={'2:12'}
            dimensions={{ width: 15.625, height: 9.375 }}
            src={pic9}
            heading={'Radio Astronomy'}
            data={'1k views  ·  11 months ago'}
            user={'Food & Drink'}
          />
          <Card
            time={'2:12'}
            dimensions={{ width: 15.625, height: 9.375 }}
            src={pic10}
            heading={'A Good Autoresponder'}
            data={'45k views  ·  2 months ago'}
            user={'Food & Drink'}
          />
          <Card
            time={'2:12'}
            dimensions={{ width: 15.625, height: 9.375 }}
            src={pic11}
            heading={'Baby Monitor Technology'}
            data={'86k views  ·  7 days ago'}
            user={'Food & Drink'}
          />
          <Card
            time={'2:12'}
            dimensions={{ width: 15.625, height: 9.375, lastChildWidth: 13.4375 }}
            src={pic12}
            heading={'Asteroids'}
            data={'123k views  ·  4 months ago'}
            user={'Dollie Blair'}
          />
        </div>
      </div>
      <div className='sm:hidden flex flex-col items-center gap-7.5'>
        <Card
          time={'4:15'}
          dimensions={{ width: 18, height: 9.375 }}
          src={pic1}
          heading={'A Brief History Of Creation'}
          data={'80k views  ·  3 days ago'}
          user={'Dollie Blair'}
        />
        <Card
          time={'8:00'}
          dimensions={{ width: 18, height: 9.375 }}
          src={pic2}
          heading={'Selecting The Right Hotel'}
          data={'123k views  ·  1 months ago'}
          user={'Dollie Blair'}
        />
        <Card
          time={'5:32'}
          dimensions={{ width: 18, height: 9.375 }}
          src={pic3}
          heading={'Asteroids'}
          data={'43k views  ·  12 days ago'}
          user={'Dollie Blair'}
        />
        <Card
          time={'6:40'}
          dimensions={{ width: 18, height: 9.375 }}
          src={pic4}
          heading={'Telescopes 101'}
          data={'11k views  ·  6 months ago'}
          user={'Dollie Blair'}
        />
      </div>
    </div>
  );
};
export default MainContainer;
