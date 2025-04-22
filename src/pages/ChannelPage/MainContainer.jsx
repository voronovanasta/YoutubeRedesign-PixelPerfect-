import React from 'react';
import avatar from '../../assets/Avatar.png';
import Card from '../../components/Card';
import RedButton from '../../components/RedButton';
import sprite from '../../assets/sprite.svg';
import accountCover from '../../assets/AccountCover.png';
import pic1 from '../../assets/cards/Cover16.png';
import pic2 from '../../assets/cards/Cover17.png';
import pic3 from '../../assets/cards/Cover18.png';
import pic4 from '../../assets/cards/Cover12.png';
import pic5 from '../../assets/cards/Cover20.png';
import pic6 from '../../assets/cards/Cover21.png';
import sub1 from '../../assets/sidebar/sub7.png';
import sub2 from '../../assets/sidebar/sub8.png';
import sub3 from '../../assets/sidebar/sub9.png';
import video from '../../assets/video-cover.png';
import accountCoverMobile from '../../assets/AccountCover-mobile.png';
import avatarMobile from '../../assets/Avatar-mobile.png';

const MainContainer = () => {
  return (
    <div className='sm:pl-4'>
      <picture>
        <source media='(max-width: 649px)' srcSet={accountCoverMobile} />
        <source media='(min-width: 650px)' srcSet={accountCover} />
        <img src={accountCover} alt='cover' />
      </picture>
      <div className='sm:mt-7.5'>
        <div className='flex flex-col mt-[-2.3rem] sm:mt-0 sm:flex-row flex-start sm:items-center sm:relative mb-7.5 sm:mb-5 sm:px-0 px-4'>
          <picture>
            <source media='(max-width: 649px)' srcSet={avatarMobile} />
            <source media='(min-width: 650px)' srcSet={avatar} />
            <img className='sm:mr-3.5' src={avatarMobile} alt='user' />
          </picture>
          <div className='flex flex-col items-start mb-5 sm:mb-0'>
            <h1 className='font-bold sm:text-[1.625rem] text-xl sm:leading-6.5 leading-5 sm:py-1 py-1'>
              Margaret Phelps
            </h1>
            <p className='font-normal text-xs leading-3 text-[#C2C2C2] py-0.5'>245K subscribed</p>
          </div>
          <svg className='hidden sm:inline-block absolute top-2.5 right-61' width='22' height='26'>
            <use xlinkHref={`${sprite}#bellIcon`} />
          </svg>
          <RedButton top={0} right={70} />
          <button
            className={
              'sm:hidden flex text-xs leading-3 justify-center items-center w-30 h-8.5 bg-[#FF0000] text-white rounded-[1.25rem]'
            }
          >
            Subscribe 2.3m
          </button>
        </div>
        <div className='hidden sm:grid grid-cols-[1fr_auto] gap-51'>
          <div>
            <nav className='space-x-17.5 py-1 mb-13.5'>
              <a
                href={'#'}
                className='leading-4.5 text-center border-b-2 rounded-[0.1875rem] border-red-700 font-bold text-lg text-[#FF0000]'
              >
                Home
              </a>
              <a
                href={'#'}
                className='leading-4.5 no-underline text-center font-normal text-lg text-black'
              >
                Videos
              </a>
              <a
                href={'#'}
                className='leading-4.5 no-underline text-center font-normal text-lg  text-black'
              >
                Playlists
              </a>
              <a
                href={'#'}
                className='leading-4.5 no-underline text-center font-normal text-lg  text-black'
              >
                Channels
              </a>
              <a
                href={'#'}
                className='leading-4.5 no-underline text-center font-normal text-lg  text-black'
              >
                Discussion
              </a>
              <a
                href={'#'}
                className='leading-4.5 no-underline text-center font-normal text-lg  text-black'
              >
                About
              </a>
              <svg className='inline-block' width='19' height='19'>
                <use xlinkHref={`${sprite}#search`} />
              </svg>
            </nav>
            <div className='grid grid-cols-[auto_1fr] items-center gap-8'>
              <picture
                style={{ width: '33.75rem', height: '15.625rem' }}
                className='align-top relative'
              >
                <img src={video} alt='video-cover' width={540} height={250} />
                <button
                  className={`absolute flex justify-center items-center w-11.5 h-6 bg-black text-white rounded-[12px] opacity-30 bottom-2.5 right-2.5`}
                >
                  7:36
                </button>
              </picture>
              <section>
                <h1 className='pr-9 text-left font-bold text-[1.625rem] text-[#19202C] leading-8.5'>
                  Choosing The Best Audio Player Software For Your Computer
                </h1>
                <p className='mt-2.5 mb-7.5 text-left font-normal text-base leading-5.5 text-[#000000]'>
                  Your cheap internet-based banner advertising will become one of the sought for ads
                  there are. Today, the world of Internet advertising is rapidly evolving beyond
                  banner ads and intrusive pop-ups. Bayles A common medium for advertising on the
                  Internet is the use of banner ads.{' '}
                </p>
                <p className='text-left font-normal text-base leading-5.5 text-[#C2C2C2]'>
                  11k views · 6 months ago
                </p>
              </section>
            </div>
          </div>
          <div className='space-y-7.5 mr-38.5'>
            <h4 className='leading-4 py-0.5 text-left font-normal text-base text-[#C2C2C2]'>
              Recommended channel
            </h4>
            <div className='flex items-center'>
              <img className='mr-5' src={sub1} alt='subscription_foto' width='50px' height='50px' />
              <a
                href={'#'}
                className='leading-4.5 no-underline text-center font-bold text-lg text-[#19202C]'
              >
                Flora Benson
              </a>
            </div>
            <div className='flex items-center'>
              <img className='mr-5' src={sub2} alt='subscription_foto' width='50px' height='50px' />
              <a
                href={'#'}
                className='leading-4.5 no-underline text-center font-bold text-lg text-[#19202C]'
              >
                Violet Cobb
              </a>
            </div>
            <div className='flex items-center'>
              <img className='mr-5' src={sub3} alt='subscription_foto' width='50px' height='50px' />
              <a
                href={'#'}
                className='leading-4.5 no-underline text-center font-bold text-lg text-[#19202C]'
              >
                Phillip Mullins
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden sm:block mt-15 space-y-7.5'>
        <div className='flex flex-start items-center relative'>
          <h1 className='text-left font-bold py-1 text-[1.625rem] leading-6.5 text-[#19202C]'>
            Margaret Phelps videos
          </h1>
          <div className='flex items-center gap-2.5 absolute top-1.5 right-37'>
            <button
              style={{
                backgroundImage: "url('/src/assets/Left.svg')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              className=' flex justify-center items-center w-7 h-7 bg-black rounded-full opacity-[24%]'
            ></button>
            <button
              style={{
                backgroundImage: "url('/src/assets/Right.svg')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              className=' flex justify-center items-center w-7 h-7 bg-black rounded-full opacity-[24%]'
            ></button>
          </div>
        </div>
        <div className='flex gap-10'>
          <Card
            time={'7:36'}
            dimensions={{ width: 15.625, height: 9.375 }}
            src={pic1}
            heading={'Astronomy Or Astrology'}
            data={'240k views  ·  4 months ago'}
            user={'Food & Drink'}
          />
          <Card
            time={'2:19'}
            dimensions={{ width: 15.625, height: 9.375 }}
            src={pic2}
            heading={'Advertising Outdoors'}
            data={'13k views  ·  15 days ago'}
            user={'Food & Drink'}
          />
          <Card
            time={'9:05'}
            dimensions={{ width: 15.625, height: 9.375 }}
            src={pic3}
            heading={'Radio Astronomy'}
            data={'1k views  ·  11 months ago'}
            user={'Food & Drink'}
          />
          <Card
            time={'3:40'}
            dimensions={{ width: 15.625, height: 9.375 }}
            src={pic4}
            heading={'A Good Autoresponder'}
            data={'45k views  ·  2 months ago'}
            user={'Food & Drink'}
          />
          <Card
            time={'1:56'}
            dimensions={{ width: 15.625, height: 9.375 }}
            src={pic5}
            heading={'Baby Monitor Technology'}
            data={'86k views  ·  7 days ago'}
            user={'Food & Drink'}
          />
          <Card
            time={'4:15'}
            dimensions={{ width: 15.625, height: 9.375, lastChildWidth: 13.4375 }}
            src={pic6}
            heading={'Asteroids'}
            data={'123k views  ·  4 months ago'}
            user={'Dollie Blair'}
          />
        </div>
      </div>
      <nav className='sm:hidden block space-x-10 py-1 px-4 mb-4'>
        <a
          href={'#'}
          className='leading-3.5 text-center border-b-2 rounded-[0.1875rem] border-red-700 font-bold text-sm text-[#FF0000]'
        >
          Home
        </a>
        <a
          href={'#'}
          className='leading-3.5 no-underline text-center font-normal text-sm text-black'
        >
          Videos
        </a>
        <a
          href={'#'}
          className='leading-3.5 no-underline text-center font-normal text-sm  text-black'
        >
          Playlists
        </a>
        <svg className='inline-block' width='10' height='7'>
          <use xlinkHref={`${sprite}#down`} />
        </svg>
      </nav>
      <div className='sm:hidden flex flex-col gap-7.5 px-4'>
        <Card
          time={'7:36'}
          dimensions={{ width: 18, height: 9.375 }}
          src={pic1}
          heading={'Astronomy Or Astrology'}
          data={'240k views  ·  4 months ago'}
          user={'Food & Drink'}
        />
        <Card
          time={'2:19'}
          dimensions={{ width: 18, height: 9.375 }}
          src={pic2}
          heading={'Advertising Outdoors'}
          data={'13k views  ·  15 days ago'}
          user={'Food & Drink'}
        />
        <div style={{ height: '8.75rem' }} className='overflow-hidden'>
          <picture
            style={{ width: '18rem', height: '9.375rem' }}
            className={'block relative rounded-[0.875rem] overflow-hidden'}
          >
            <img
              className={'w-full h-full object-cover'}
              src={pic3}
              alt='subscription'
              width={288}
              height={150}
            />
            <button
              className={`absolute flex justify-center items-center w-11.5 h-6 text-white rounded-xl  bg-black/30 bottom-2.5 right-2.5`}
            >
              9:05
            </button>
          </picture>
        </div>
      </div>
    </div>
  );
};
export default MainContainer;
