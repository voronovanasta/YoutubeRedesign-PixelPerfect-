import React from 'react';
import avatar from '../../assets/Avatar.png';
import Card from '../../components/Card';
import sprite from '../../assets/sprite.svg';
import accountCover from '../../assets/channel-cover.png';
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
import avatarMobile from '../../assets/Avatar-mobile.png';
import LeftIcon from '../../assets/Left.svg';
import RightIcon from '../../assets/Right.svg';

const MainContainer = () => {
  return (
    <div className='1xs:pl-4 flex-1 min-w-0'>
      <div className='sm:rounded-[0.875rem] overflow-hidden  1xs:w-[99,6875rem] sm:h-[17.5rem] h-[6.25rem] sm:mr-17.5'>
        <img className='w-full h-full object-cover' src={accountCover} alt='accountCover' />
      </div>
      <div className='1xs:mt-7.5'>
        <div className='flex flex-col mt-[-2.3rem] sm:mt-0 1xs:flex-row justify-between sm:mr-17.5 mb-7.5 sm:mb-5 sm:px-0 px-4'>
          <div className='flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3.5'>
            <picture className='shrink-0'>
              <source media='(max-width: 649px)' srcSet={avatarMobile} />
              <source media='(min-width: 650px)' srcSet={avatar} />
              <img src={avatarMobile} alt='user' />
            </picture>
            <div className='flex flex-col items-start mb-5 sm:mb-0'>
              <h1 className='font-bold sm:text-[1.625rem] text-xl sm:leading-6.5 leading-5 sm:py-1 py-1'>
                Margaret Phelps
              </h1>
              <p className='font-normal text-xs leading-3 text-[#C2C2C2] py-0.5'>245K subscribed</p>
            </div>
          </div>
          <div className='flex gap-5 items-center self-start'>
            <svg className='hidden 1xs:inline-block' width='22' height='26'>
              <use xlinkHref={`${sprite}#bellIcon`} />
            </svg>
            <button
              className={
                'flex text-xs sm:text-base justify-center items-center sm:w-38.5 sm:h-10 w-30 h-8.5 leading-3 sm:leading-4 bg-[#FF0000] text-white rounded-[1.25rem]'
              }
            >
              Subscribe 2.3m
            </button>
          </div>
        </div>
        <div className=' grid xl:grid-cols-[1fr_auto] xl:gap-52.5'>
          <div>
            <nav className='space-x-10 py-0.5 pl-4 sm:pl-0 mb-4 sm:space-x-3 3xl:space-x-17.5  xl:mb-13.5'>
              <a
                href={'#'}
                className='leading-3.5 text-sm sm:leading-4.5 py-0.5 text-center border-b-2 rounded-[0.1875rem] border-red-700 font-bold sm:text-lg text-[#FF0000]'
              >
                Home
              </a>
              <a
                href={'#'}
                className='leading-3.5 text-sm sm:leading-4.5 py-0.5 no-underline text-center font-normal sm:text-lg text-black'
              >
                Videos
              </a>
              <a
                href={'#'}
                className='leading-3.5 text-sm sm:leading-4.5 py-0.5 no-underline text-center font-normal sm:text-lg  text-black'
              >
                Playlists
              </a>
              <a
                href={'#'}
                className='hidden sm:inline leading-4.5 no-underline text-center font-normal text-lg  text-black'
              >
                Channels
              </a>
              <a
                href={'#'}
                className='hidden sm:inline leading-4.5 no-underline text-center font-normal text-lg  text-black'
              >
                Discussion
              </a>
              <a
                href={'#'}
                className='hidden sm:inline leading-4.5 no-underline text-center font-normal text-lg  text-black'
              >
                About
              </a>
              <svg className='hidden sm:inline-block' width='19' height='19'>
                <use xlinkHref={`${sprite}#search`} />
              </svg>
              <svg className='sm:hidden inline-block' width='10' height='7'>
                <use xlinkHref={`${sprite}#down`} />
              </svg>
            </nav>
            <div className='hidden sm:flex flex-col 3xl:flex-row items-center gap-8'>
              <div
                className={`relative w-[33.75rem] h-[15.625rem] shrink-0 cursor-pointer has-hover:opacity-65`}
              >
                <img className='w-full h-full object-cover' src={video} alt='video' />
                <div className='absolute flex justify-center items-center text-sm w-11.5 h-6 text-white rounded-xl bg-black/30 bottom-2.5 right-2.5'>
                  7:36
                </div>
              </div>
              <section className=' text-center 3xl:text-left w-[80%] '>
                <h1 className='font-bold text-[1.625rem] pr-11 text-[#19202C] leading-8.5'>
                  Choosing The Best Audio Player Software For Your Computer
                </h1>
                <p className='mt-2.5 mb-7.5 font-normal text-base leading-5.5 text-[#000000]'>
                  Your cheap internet-based banner advertising will become one of the sought for ads
                  there are. Today, the world of Internet advertising is rapidly evolving beyond
                  banner ads and intrusive pop-ups. Bayles A common medium for advertising on the
                  Internet is the use of banner ads.{' '}
                </p>
                <p className='font-normal text-base leading-5.5 text-[#C2C2C2]'>
                  11k views · 6 months ago
                </p>
              </section>
            </div>
          </div>
          <div className='mr-37.5 hidden sm:block space-y-7.5'>
            <h4 className='leading-4 py-0.5 text-left font-normal text-base text-[#C2C2C2]'>
              Recommended channel
            </h4>
            <div className='flex items-center overflow-y-auto  scrollbar-none'>
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
      <div className='sm:mt-15 space-y-7.5'>
        <div className='hidden sm:flex justify-between items-center'>
          <h1 className='text-left font-bold py-1 text-[1.625rem] leading-6.5 text-[#19202C]'>
            Margaret Phelps videos
          </h1>
          <div className='sm:flex hidden items-end gap-2.5 pr-37 self-end'>
            <button className='flex justify-center items-center w-7 h-7 bg-black opacity-25 rounded-full'>
              <img src={LeftIcon} />
            </button>
            <button className=' flex justify-center items-center w-7 h-7 bg-black opacity-25 rounded-full'>
              <img src={RightIcon} />
            </button>
          </div>
        </div>
        <div className='flex flex-col 1xs:flex-row 1xs:gap-10 gap-7.5 px-4 1xs:px-0 overflow-x-auto w-full scrollbar-none'>
          <Card
            time={'7:36'}
            className=':w-[15.625rem]'
            src={pic1}
            heading={'Astronomy Or Astrology'}
            data={'240k views  ·  4 months ago'}
            user={'Food & Drink'}
          />
          <Card
            time={'2:19'}
            className='1xs:w-[15.625rem]'
            src={pic2}
            heading={'Advertising Outdoors'}
            data={'13k views  ·  15 days ago'}
            user={'Food & Drink'}
          />
          <Card
            time={'9:05'}
            className='1xs:w-[15.625rem]'
            src={pic3}
            heading={'Radio Astronomy'}
            data={'1k views  ·  11 months ago'}
            user={'Food & Drink'}
          />
          <Card
            time={'3:40'}
            className='1xs:w-[15.625rem]'
            src={pic4}
            heading={'A Good Autoresponder'}
            data={'45k views  ·  2 months ago'}
            user={'Food & Drink'}
          />
          <Card
            time={'1:56'}
            className='1xs:w-[15.625rem]'
            src={pic5}
            heading={'Baby Monitor Technology'}
            data={'86k views  ·  7 days ago'}
            user={'Food & Drink'}
          />
          <Card
            time={'4:15'}
            className='1xs:w-[15.625rem]'
            src={pic6}
            heading={'Asteroids'}
            data={'123k views  ·  4 months ago'}
            user={'Dollie Blair'}
          />
        </div>
      </div>
    </div>
  );
};
export default MainContainer;
