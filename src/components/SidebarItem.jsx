import sprite from '../assets/sprite.svg';

function SidebarItem({ color, width, height, id, text }) {
  const colorItem = color ? color : '#898989';

  return (
    <div className='sm:flex-row flex flex-col items-center'>
      <svg className='sm:mr-3.5 sm:mb-0 mb-1.5' width={width} height={height}>
        <use xlinkHref={`${sprite}#${id}`} />
      </svg>
      <a
        href={'#'}
        className='sm:leading-4 leading-2.5 no-underline text-center font-normal text-[0.625rem] sm:text-base sm:pb-0.5 sm:pt-0.5 '
        style={{ color: colorItem }}
      >
        {text}
      </a>
    </div>
  );
}
export default SidebarItem;
