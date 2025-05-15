import React from 'react';
import user1 from '../assets/sidebar/sub1.png';
import user2 from '../assets/sidebar/sub2.png';
import user3 from '../assets/sidebar/sub3.png';
import user4 from '../assets/sidebar/sub4.png';
import user5 from '../assets/sidebar/sub5.png';
import user6 from '../assets/sidebar/sub6.png';
import SidebarItem from './SidebarItem';
import SubscriptionItem from './SubscriptionItem';

const Sidebar = ({ className }) => {
  return (
    <aside
      className={`${className ?? ''} hidden scrollbar-none sticky top-0 overflow-y-auto  sm:block space-y-15 pl-8 pr-12 pb-10`}
    >
      <div className='space-y-7'>
        <SidebarItem isActive width={20} height={19} id={'HomeIcon'} text={'Home'} />
        <SidebarItem width={16} height={21} id={'FireIcon'} text={'Trending'} />
        <SidebarItem width={18} height={18} id={'FolderIcon'} text={'Subscription'} />
      </div>
      <div className='space-y-[1.8125rem]'>
        <SidebarItem width={20} height={16} id={'DocIcon'} text={'Library'} />
        <SidebarItem width={20} height={18} id={'HistoryIcon'} text={'History'} />
        <SidebarItem width={17} height={19} id={'WatchIcon'} text={'Watch later'} />
        <SidebarItem width={19} height={18} id={'StarIcon'} text={'Favourites'} />
        <SidebarItem width={18} height={17} id={'HeartIcon'} text={'Liked videos'} />
        <SidebarItem width={18} height={20} id={'MusicIcon'} text={'Music'} />
        <SidebarItem width={22} height={16} id={'GameIcon'} text={'Games'} />
        <SidebarItem width={14} height={8} id={'MoreIcon'} text={'Show more'} />
      </div>
      <div className=' space-y-[1.4375rem] mb-26'>
        <h2 className='mb-7.5 font-bold text-left text-lg leading-4.5'>Subscriptions</h2>
        <SubscriptionItem user={user1} text={'Gussie Singleton'} />
        <SubscriptionItem user={user2} text={'Nora Francis'} />
        <SubscriptionItem user={user3} text={'Belle Briggs'} />
        <SubscriptionItem user={user4} text={'Eunice Cortez'} />
        <SubscriptionItem user={user5} text={'Emma Hanson'} />
        <SubscriptionItem user={user6} text={'Leah Berry'} />
      </div>
      <SidebarItem width={19} height={20} id={'settingIcon'} text={'Settings'} />
    </aside>
  );
};

export default Sidebar;
