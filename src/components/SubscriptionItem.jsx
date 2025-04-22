function SubscriptionItem({ user, text }) {
  return (
    <div className='flex items-center'>
      <img className='mr-2.5' src={user} alt='subscription_foto' width='26px' height='26px' />
      <a
        href={'#'}
        className='leading-4 no-underline text-center font-normal text-base text-[#898989]'
      >
        {text}
      </a>
    </div>
  );
}

export default SubscriptionItem;
