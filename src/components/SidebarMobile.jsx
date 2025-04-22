import SidebarItem from './SidebarItem';

const SidebarMobile = () => {
  return (
    <aside className='flex justify-between sm:hidden pt-3.5 pl-6 pr-5.5 pb-2.5 border-t-1 border-[#F1F1F1]'>
      <SidebarItem color={'#FF0000'} width={20} height={19} id={'HomeIcon'} text={'Home'} />
      <SidebarItem width={16} height={21} id={'FireIcon'} text={'Trending'} />
      <SidebarItem width={18} height={18} id={'FolderIcon'} text={'Subscription'} />
      <SidebarItem width={20} height={16} id={'DocIcon'} text={'Library'} />
    </aside>
  );
};

export default SidebarMobile;
