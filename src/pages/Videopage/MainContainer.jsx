import React from 'react';
import avatar from '../../assets/FoodAvatar.png';
import avatarMobile from '../../assets/FoodAvatar-mobile.png';
import Card from '../../components/Card';
import RedButton from '../../components/RedButton';
import sprite from '../../assets/sprite.svg';
import pic1 from '../../assets/cards/Cover22.png';
import pic2 from '../../assets/cards/Cover23.png';
import pic3 from '../../assets/cards/Cover24.png';
import pic4 from '../../assets/cards/Orange.png';
import cover from '../../assets/video-channel-cover.png';
import coverMobile from '../../assets/video-channel-coverMobile.png';
import VideoControls from '../../components/VideoControls';

const MainContainer = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:gap-10 sm:pl-20 sm:mt-8.5 sm:pr-17.5'>
      <div>
        <article className={'flex flex-col'}>
          <picture className={'relative sm:rounded-[0.875rem] sm:overflow-hidden'}>
            <source media='(max-width: 649px)' srcSet={coverMobile} />
            <source media='(min-width: 650px)' srcSet={cover} />
            <img className={'w-full h-full'} src={coverMobile} alt='cover' />
            <VideoControls />
          </picture>
          <div
            className={
              'flex flex-col sm:flex-row justify-between ls:items-end mt-3 sm:mt-5 sm:pb-3.5'
            }
          >
            <div className='relative  sm:static px-4 sm:px-0'>
              <h1 className='text-left font-bold  py-0.5 sm:py-1 sm:mb-3.5 mb-1 leading-5 sm:leading-9 text-xl sm:text-4xl pr-19.5 sm:pr-0 text-[#192646]'>
                Dude You Re Getting A Telescope
              </h1>
              <p className='font-normal py-0.5 sm:text-xl sm:leading-5 text-xs leading-3 text-[#C2C2C2]'>
                123k views
              </p>
              <svg className='inline-block sm:hidden absolute top-3 right-5' width='10' height='7'>
                <use xlinkHref={`${sprite}#down`} />
              </svg>
            </div>
            <div className='flex gap-2.5 items-center w-80 sm:w-auto overflow-hidden mt-5 sm:mt-0'>
              <button className='sm:ml-0 ml-4 flex justify-center items-center w-[6.25rem] h-[2.5rem] bg-[#EBEBEB]/30 rounded-[1.25rem] text-[#192646]'>
                <svg className='mr-2' width='14' height='13'>
                  <use xlinkHref={`${sprite}#like`} />
                </svg>
                123k
              </button>
              <button className='flex justify-center items-center w-[6.25rem] h-[2.5rem] bg-[#EBEBEB]/30 rounded-[1.25rem] text-[#192646]'>
                <svg className='mr-2' width='14' height='13'>
                  <use xlinkHref={`${sprite}#dislike`} />
                </svg>
                435k
              </button>
              <button className='flex justify-center items-center w-[6.25rem] h-[2.5rem] bg-[#EBEBEB]/30 rounded-[1.25rem] text-[#192646] mr-[-1rem] ls:mr-0'>
                <svg className='mr-2' width='14' height='13'>
                  <use xlinkHref={`${sprite}#share`} />
                </svg>
                Share
              </button>
              <div className='hidden sm:flex gap-1.5 ml-7.5'>
                <button className={'w-1.5 h-1.5  border-none bg-[#000000] rounded-full'} />
                <button className={'w-1.5 h-1.5  border-none bg-[#000000] rounded-full'} />
                <button className={'w-1.5 h-1.5  border-none bg-[#000000] rounded-full'} />
              </div>
            </div>
          </div>
        </article>
        <div className='sm:grid sm:grid-cols-[auto_1fr] sm:items-start flex items-center pt-5 sm:pt-9.5 mt-7.5 sm:mt-0 sm:relative mb-5 sm:mb-0 pb-5 sm:pb-0 sm:mx-0 mx-4 border-t-[2px] border-b-[2px] sm:border-b-0 border-[#D8D8D880]/50'>
          <picture>
            <source media='(max-width: 649px)' srcSet={avatarMobile} />
            <source media='(min-width: 650px)' srcSet={avatar} />
            <img className='mr-3 shrink-0' src={avatarMobile} alt='account' />
          </picture>
          <div className='flex flex-col 2xl:pr-112 '>
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
              Writing result-oriented ad copy is difficult, as it must appeal to, entice, and
              convince consumers to take action. There is no magic formula to write perfect ad copy;
              it is based on a number of factors, including ad placement, demographic, even the
              consumer’s mood when they see your ad.
            </p>
            <p className='hidden sm:block font-normal text-xl leading-5 text-[#C2C2C2] py-0.5'>
              Show more
            </p>
          </div>
          <RedButton top={38} right={0} />
          <p className='ml-auto sm:hidden block font-normal text-base leading-4 text-[#FF0000] py-0.5'>
            Subscribe
          </p>
        </div>
      </div>
      <div className='space-y-3.5 sm:space-y-6'>
        <div className='flex items-center px-4 sm:px-0'>
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
        <div className='hidden sm:block'>
          <Card
            marginTop={0.8125}
            fontSizes={{ headingSize: 1.625, textSize: 1.125 }}
            styleProp={{ marginBottom: '1.4375rem' }}
            time={'8:00'}
            dimensions={{ width: 22.9375, height: 13.3125 }}
            src={pic1}
            heading={'Baby Monitor Technology'}
            data={'123k views'}
            user={'Dollie Blair'}
          />
          <Card
            marginTop={0.8125}
            fontSizes={{ headingSize: 1.625, textSize: 1.125 }}
            styleProp={{ marginBottom: '1.875rem' }}
            time={'8:00'}
            dimensions={{ width: 22.9375, height: 13.3125 }}
            src={pic2}
            heading={'A Good Autoresponder'}
            data={'123k views'}
            user={'Dollie Blair'}
          />
          <Card
            marginTop={0.8125}
            fontSizes={{ headingSize: 1.625, textSize: 1.125 }}
            styleProp={{ marginBottom: '1.875rem' }}
            time={'8:00'}
            dimensions={{ width: 22.9375, height: 13.3125 }}
            src={pic3}
            heading={'Selecting The Right Hotel'}
            data={'123k views'}
            user={'Dollie Blair'}
          />
          <div style={{ height: '4.5625rem' }} className='overflow-hidden'>
            <picture
              style={{ height: '13.3125rem' }}
              className={'block relative rounded-[0.875rem] overflow-hidden'}
            >
              <img
                className={'w-full h-full object-cover'}
                src={pic4}
                alt='subscription'
                width={367}
                height={213}
              />
            </picture>
          </div>
        </div>
      </div>
      <div className='sm:hidden flex flex-col items-center gap-7.5 px-4'>
        <article>
          <picture
            style={{ width: '18rem', height: '9.375rem' }}
            className={'block relative rounded-[0.875rem] overflow-hidden'}
          >
            <img
              className={'w-full h-full object-cover'}
              src={pic1}
              alt='card'
              width={288}
              height={150}
            />
            <button
              className={`absolute flex justify-center items-center w-11.5 h-6 text-white rounded-[12px] bg-black/30 bottom-2.5 right-2.5`}
            >
              7:36
            </button>
          </picture>
          <div className={'align-top mt-2'}>
            <h3 className={`text-left font-bold py-0.5 leading-4 text-base`}>
              Baby Monitor Technology
            </h3>
            <div className='flex justify-between mt-1'>
              <p className={`font-normal text-xs leading-3 py-0.5 text-[#C2C2C2]`}>123k views</p>
              <p className={`font-normal text-xs leading-3 py-0.5 text-[#C2C2C2]`}>Dollie Blair</p>
            </div>
          </div>
        </article>
        <article style={{ height: '10.75rem' }} className='overflow-hidden'>
          <picture
            style={{ width: '18rem', height: '9.375rem' }}
            className={'block relative rounded-[0.875rem] overflow-hidden'}
          >
            <img
              className={'w-full h-full object-cover'}
              src={pic2}
              alt='card'
              width={288}
              height={150}
            />
            <button
              className={`absolute flex justify-center items-center w-11.5 h-6 bg-black text-white rounded-xl opacity-30 bottom-2.5 right-2.5`}
            >
              2:19
            </button>
          </picture>
          <div className={'mt-1.5 align-top h-12.5'}>
            <h3 className='text-left font-bold py-0.5 leading-4 text-base'>Advertising Outdoors</h3>
          </div>
        </article>
      </div>
    </div>
  );
};
export default MainContainer;
