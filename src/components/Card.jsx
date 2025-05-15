import React from 'react';

function Card({ src, heading, data, user, time, className, isBig, isSidebarCard }) {
  return (
    <article className={`flex flex-col overflow-hidden shrink-0 ${className ?? ''}`}>
      <div
        className={`${isSidebarCard ? 'sm:h-[213px] h-[150px]' : isBig ? 'h-[250px]' : 'h-[150px]'} rounded-[0.875rem] overflow-hidden relative cursor-pointer has-hover:opacity-65`}
      >
        <img className='w-full h-full object-cover' src={src} alt='subscription' />
        <div className='absolute flex justify-center items-center text-sm w-11.5 h-6 text-white rounded-xl bg-black/30 bottom-2.5 right-2.5'>
          {time}
        </div>
      </div>
      <div className={`align-top ${isSidebarCard ? 'sm:mt-[0.8125rem] mt-2' : 'mt-[0.625rem]'}`}>
        <h3
          className={`${isSidebarCard ? 'sm:text-[1.625rem] sm:leading-6.5 leading-4 text-base' : 'text-[1rem] leading-4'} text-left font-bold py-0.5`}
        >
          {heading}
        </h3>
        <div
          className={`${isSidebarCard ? 'sm:mt-[0.8125rem] mt-1' : 'mt-[0.25rem]'} flex justify-between`}
        >
          <p
            className={`${isSidebarCard ? 'sm:text-[1.125rem] sm:leading-4.5 text-xs leading-3' : 'text-[0.8125rem] leading-3.5'} font-normal py-0.5 text-[#C2C2C2]`}
          >
            {data}
          </p>
          <p
            className={`${isSidebarCard ? 'sm:text-[1.125rem] sm:leading-4.5 text-xs leading-3' : 'text-[0.8125rem] leading-3.5'} font-normal py-0.5 text-[#C2C2C2]`}
          >
            {user}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
