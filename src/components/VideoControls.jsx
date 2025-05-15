import React from 'react';
import sprite from '../assets/sprite.svg';

const VideoControls = () => {
  return (
    <>
      <div className='hidden ls:flex flex-col absolute left-0 bottom-0 w-full px-8 mb-8 text-[22px] leading-5.5 text-white'>
        <div className='flex mb-5'>
          <p className='py-0.5'>1:34</p>
          <p className='py-0.5 ml-auto'>19:00</p>
        </div>
        <div className='w-full h-2.5 rounded-md bg-[#FFFFFF33] mb-5'>
          <div className='w-70 h-2.5 bg-[#FF0000] rounded-md'></div>
        </div>
        <div className='flex px-2.5'>
          <div className='flex items-center'>
            <button className='mr-10'>
              <svg width='22' height='24'>
                <use xlinkHref={`${sprite}#Pause`} />
              </svg>
            </button>
            <button className='mr-10'>
              <svg width='27' height='18'>
                <use xlinkHref={`${sprite}#Next`} />
              </svg>
            </button>
            <button className='mr-5'>
              <svg width='24' height='24'>
                <use xlinkHref={`${sprite}#Volume`} />
              </svg>
            </button>
            <div className='w-21.5 h-2 rounded-sm bg-[#FFFFFF33]'>
              <div className='w-9 h-2 rounded-sm bg-[#FFFFFF]'></div>
            </div>
          </div>
          <div className='flex items-center ml-auto'>
            <button className='mr-6.5'>
              <svg width='27' height='18'>
                <use xlinkHref={`${sprite}#Subtitles`} />
              </svg>
            </button>
            <button className='mr-6'>
              <svg width='27' height='27'>
                <use xlinkHref={`${sprite}#Settings`} />
              </svg>
            </button>
            <button className='mr-6'>
              <svg width='30' height='21'>
                <use xlinkHref={`${sprite}#Size`} />
              </svg>
            </button>
            <button>
              <svg width='33' height='24'>
                <use xlinkHref={`${sprite}#FullScreen`} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center ls:hidden absolute left-1/2 bottom-0 translate-x-[-50%] px-4.5 py-2 mb-2 rounded-[10px] bg-[#3D3D3D]/60 text-[10px] leading-2.5 text-white'>
        <button className='mr-3.5'>
          <svg width='12' height='12'>
            <use xlinkHref={`${sprite}#Pause`} />
          </svg>
        </button>
        <p className='py-0.5'>1:34</p>
        <div className='w-39 h-1.5 rounded-msm bg-[#FFFFFF33] mx-1.5'>
          <div className='w-14.5 h-1.5 bg-[#FF0000] rounded-sm'></div>
        </div>
        <p className='py-0.5'>-10:00</p>
        <button className='ml-3.5'>
          <svg width='12' height='12'>
            <use xlinkHref={`${sprite}#Volume`} />
          </svg>
        </button>
      </div>
    </>
  );
};

export default VideoControls;
