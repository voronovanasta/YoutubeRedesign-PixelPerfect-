import React from 'react';

function Card({
  src,
  heading,
  data,
  user,
  time,
  dimensions,
  styleProp,
  fontSizes = {},
  marginTop = null,
}) {
  const { width, height, lastChildWidth = 0, lastChildHeight = 0 } = dimensions;
  let { headingSize, textSize } = fontSizes;
  headingSize = headingSize ?? 1;
  textSize = textSize ?? 0.8125;
  const headerMargin = marginTop ?? 0.625;
  const contentMargin = marginTop ?? 0.25;

  let style =
    lastChildWidth !== 0
      ? { width: lastChildWidth + 'rem' }
      : lastChildHeight !== 0
        ? { height: lastChildHeight + 'rem' }
        : {};
  return (
    <article style={{ ...style, ...styleProp }} className={'flex flex-col overflow-hidden'}>
      <picture
        style={{ width: width + 'rem', height: height + 'rem' }}
        className={'relative rounded-[0.875rem] overflow-hidden'}
      >
        <img
          className={'w-full h-full object-cover'}
          src={src}
          alt='subscription'
          width={`${width * 16}`}
          height={`${height * 16}`}
        />
        <button
          className={`absolute flex justify-center items-center w-11.5 h-6 text-white rounded-xl bg-black/30 bottom-2.5 right-2.5`}
        >
          {time}
        </button>
      </picture>
      <div
        style={{ width: width + 'rem', marginTop: headerMargin + 'rem' }}
        className={'align-top'}
      >
        <h3
          style={{ fontSize: headingSize + 'rem', lineHeight: headingSize + 'rem' }}
          className={`text-left font-bold py-0.5`}
        >
          {heading}
        </h3>
        <div style={{ marginTop: contentMargin + 'rem' }} className='flex justify-between'>
          <p
            style={{ fontSize: textSize + 'rem', lineHeight: textSize + 'rem' }}
            className={`font-normal py-0.5 text-[#C2C2C2]`}
          >
            {data}
          </p>
          <p
            style={{ fontSize: textSize + 'rem', lineHeight: textSize + 'rem' }}
            className={`font-normal py-0.5 text-[#C2C2C2]`}
          >
            {user}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
