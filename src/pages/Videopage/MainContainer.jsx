import React from 'react';
import avatar from '../../assets/FoodAvatar.png';
import avatarMobile from '../../assets/FoodAvatar-mobile.png';
import sprite from '../../assets/sprite.svg';

import cover from '../../assets/video-channel-cover.png';
import VideoControls from '../../components/VideoControls';

const MainContainer = () => {
  return (
    <div className='1xs:w-[85.1875rem]'>
      <article className={'flex flex-col  sm:rounded-[0.875rem] sm:overflow-hidden'}>
        <div className='relative sm:h-[43.75rem] h-[11.25rem]'>
          <img className='w-full h-full object-cover' src={cover} alt='cover' />
          <VideoControls />
        </div>
        <div
          className={'flex flex-col 1xs:flex-row justify-between items-end mt-3 sm:mt-5 sm:pb-3.5'}
        >
          <div className=' flex justify-between px-4 sm:px-0'>
            <div>
              <h1 className='text-left font-bold  py-0.5 sm:py-1 sm:mb-3.5 mb-1 leading-5 sm:leading-9 text-xl sm:text-4xl pr-19.5 sm:pr-0 text-[#192646]'>
                Dude You Re Getting A Telescope
              </h1>
              <p className='font-normal py-0.5 sm:text-xl sm:leading-5 text-xs leading-3 text-[#C2C2C2]'>
                123k views
              </p>
            </div>
            <svg className='inline-block sm:hidden self-start shrink-0 mt-3' width='10' height='7'>
              <use xlinkHref={`${sprite}#down`} />
            </svg>
          </div>
          <div className='flex gap-2.5 items-center sm:justify-end w-80 sm:w-fit overflow-hidden ml-4 sm:ml-0 mt-5 sm:mt-0'>
            <button className='sm:ml-0 ml-4 flex shrink-0 justify-center items-center w-[6.25rem] h-[2.5rem] bg-[#EBEBEB]/30 rounded-[1.25rem] text-[#192646]'>
              <svg className='mr-2 shrink-0' width='14' height='13'>
                <use xlinkHref={`${sprite}#like`} />
              </svg>
              123k
            </button>
            <button className='flex justify-center shrink-0 items-center w-[6.25rem] h-[2.5rem] bg-[#EBEBEB]/30 rounded-[1.25rem] text-[#192646]'>
              <svg className='mr-2 shrink-0' width='14' height='13'>
                <use xlinkHref={`${sprite}#dislike`} />
              </svg>
              435k
            </button>
            <button className='flex justify-center shrink-0 items-center w-[6.25rem] h-[2.5rem] bg-[#EBEBEB]/30 rounded-[1.25rem] text-[#192646]'>
              <svg className='mr-2 shrink-0' width='14' height='13'>
                <use xlinkHref={`${sprite}#share`} />
              </svg>
              Share
            </button>
            <div className='hidden sm:flex gap-1.5 ml-7.5'>
              <div className={'w-1.5 h-1.5  border-none bg-[#000000] rounded-full'} />
              <div className={'w-1.5 h-1.5  border-none bg-[#000000] rounded-full'} />
              <div className={'w-1.5 h-1.5  border-none bg-[#000000] rounded-full'} />
            </div>
          </div>
        </div>
      </article>
      <div className='sm:grid sm:grid-cols-[auto_1fr_auto] sm:items-start flex items-center pt-5 sm:pt-9.5 mt-7.5 sm:mt-0 sm:relative mb-5 sm:mb-0 pb-5 sm:pb-0 sm:mx-0 mx-4 border-t-[2px] border-b-[2px] sm:border-b-0 border-[#D8D8D880]/50'>
        <picture className='shrink-0'>
          <source media='(max-width: 649px)' srcSet={avatarMobile} />
          <source media='(min-width: 650px)' srcSet={avatar} />
          <img className='mr-3' src={avatarMobile} alt='account' />
        </picture>
        <div className='flex flex-col lg:mr-75.5'>
          <h2 className='font-bold sm:text-[1.625rem] text-base sm:leading-6.5 leading-4 py-0.5 sm:py-1 mb-1'>
            Food & Drink
          </h2>
          <p className='hidden sm:block font-normal text-xs leading-3 text-[#C2C2C2] py-0.5'>
            Published on 14 Jun 2019
          </p>
          <p className='sm:hidden block font-normal text-xs leading-3 text-[#C2C2C2] py-0.5'>
            245K subscribed
          </p>
          <p className='hidden sm:block my-3.5 text-left font-normal text-base leading-5.5 text-[#000000]'>
            A successful marketing plan relies heavily on the pulling-power of advertising copy.
            Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince
            consumers to take action. There is no magic formula to write perfect ad copy; it is
            based on a number of factors, including ad placement, demographic, even the consumer’s
            mood when they see your ad.
          </p>
          <p className='hidden sm:block font-normal text-xl leading-5 text-[#C2C2C2] py-0.5'>
            Show more
          </p>
        </div>
        <button
          className={
            'hidden sm:flex text-base justify-center items-center w-38.5 h-10 leading-4 bg-[#FF0000] text-white rounded-[1.25rem]'
          }
        >
          Subscribe 2.3m
        </button>
        <p className='ml-auto sm:hidden block font-normal text-base leading-4 text-[#FF0000] py-0.5'>
          Subscribe
        </p>
      </div>
    </div>
  );
};
export default MainContainer;
