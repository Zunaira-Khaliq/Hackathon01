import React from 'react';
import Image from 'next/image';
import SearchNormal from '@/app/Assets/search-normal.png'
import Filter from '@/app/Assets/filter.png'
import ProfileAndNotification from '@/app/Assets/Profil & Notification.png'

export default function Navbar() {
  return (
    <div className='w-full bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]'>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16">
        <h1 className='text-[#3563e9] text-4xl font-bold'>MORENT</h1>
        <div className="relative w-full md:w-auto border-2 border-[#e7eef6] rounded-full p-2 pl-10 pr-12">
          <Image src={SearchNormal} alt='Search Normal' width={24} height={24} className='absolute top-1/2 left-3 transform -translate-y-1/2'/>
          <input 
            type="text" 
            title="search" 
            placeholder="Say something here" 
            className=' w-full md:w-[492px] h-[44px]'
          />
          <Image src={Filter} alt='Filter' width={24} height={24} className='absolute top-1/2 right-3 transform -translate-y-1/2'/>
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <Image src={ProfileAndNotification} alt='Profile & Notification' width={236} height={44} />
      </div>
    </div>
  );
}